
export const metadata = {
  title: "Risun Peru Travel",
  description: "Somos la agencia de viajes Risun Peru Travel, operamos en Cusco, somos una agencia confiable de tours a medida",
  verification: {
    google: "n6DT_lUytclbI-6Dh5gsVfEWvQwq0kXYs_ZuLUNIXVU",
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}