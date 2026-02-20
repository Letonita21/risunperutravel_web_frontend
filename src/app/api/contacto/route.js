import { getConnection } from "@/lib/db";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const {
            nombre,
            pais,
            idioma,
            email,
            numero,
            fecha_llegada,
            numero_pasajeros,
            mensaje,
            tour,
            token,
        } = await req.json();

        const secretKey = process.env.RECAPTCHA_SECRET_KEY;

        if (!token) {
            return res.status(400).json({ success: false, message: 'Token de reCAPTCHA no proporcionado' });
        }
        // Verificar reCAPTCHA
        const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${secretKey}&response=${token}`,
        });

        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
            return Response.json({ error: "Falló la verificación de reCAPTCHA" }, { status: 400 });
        }

        // Configurar transporte de correo
        const transporter = nodemailer.createTransport({
            host: 'mail.risunperutravel.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false, // ⚠️ solo en desarrollo
            },
        });


        // enviar correo a personal
        await transporter.sendMail({
            from: `"${nombre}" <${email}>`,
            to: "rcperutravel@gmail.com",
            bcc: "yurnero216@gmail.com",
            subject: "Solicitud de reserva",
            text: generarMensajePlano({ nombre, pais, email, numero, fecha_llegada, numero_pasajeros, mensaje, tour }),
            html: generarMensajeHTML({ nombre, pais, email, numero, fecha_llegada, numero_pasajeros, mensaje, tour }),
        });
        // enviar correo a cliente
        await transporter.sendMail({
            from: `rcperutravel@gmail.com`,
            to: `${email}`,
            subject: "Solicitud de reserva",
            text: generarMensajePlano({ nombre, pais, email, numero, fecha_llegada, numero_pasajeros, mensaje, tour }),
            html: generarMensajeHTML({ nombre, pais, email, numero, fecha_llegada, numero_pasajeros, mensaje, tour }),
        });

        // Guardar en la base de datos
        const conn = await getConnection();
        await conn.execute(
            `INSERT INTO reservas 
        (nombre, pais, idioma, email, numero, fecha_llegada, numero_pasajeros, mensaje, fecha_registro, tour, estado) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?, ?)`,
            [
                nombre,
                pais,
                idioma,
                email,
                numero,
                fecha_llegada,
                numero_pasajeros,
                mensaje,
                tour,
                "sin atender",
            ]
        );

        return Response.json({ success: true });
    } catch (error) {
        console.error("Error al procesar la reserva:", error);
        return Response.json({ error: "No se pudo procesar la reserva" }, { status: 500 });
    }
}

// ✅ Mensaje en texto plano
function generarMensajePlano({ nombre, pais, email, numero, fecha_llegada, numero_pasajeros, mensaje, tour }) {
    return `
Nueva solicitud de reserva

Nombre: ${nombre}
País: ${pais}
Email: ${email}
Número: ${numero}
Tour solicitado: ${tour?.nombre || tour || 'No especificado'}
Fecha de llegada: ${fecha_llegada}
Número de pasajeros: ${numero_pasajeros}

Mensaje del cliente:
${mensaje}

Enviado desde risunperutravel.com
`;
}

// ✅ Mensaje en HTML
function generarMensajeHTML({ nombre, pais, email, numero, fecha_llegada, numero_pasajeros, mensaje, tour }) {
    return `
    <h2>📩 Nueva solicitud de reserva</h2>
    <ul>
      <li><strong>Nombre:</strong> ${nombre}</li>
      <li><strong>País:</strong> ${pais}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Número:</strong> ${numero}</li>
      <li><strong>Tour solicitado:</strong> ${tour}</li>
      <li><strong>Fecha de llegada:</strong> ${fecha_llegada}</li>
      <li><strong>Número de pasajeros:</strong> ${numero_pasajeros}</li>
    </ul>
    <p><strong>Mensaje del cliente:</strong><br/>${mensaje}</p>
    <hr/>
    <p>📌 Esta solicitud fue enviada desde el formulario de <a href="https://risunperutravel.com">Risun Peru Travel</a>.</p>
  `;
}