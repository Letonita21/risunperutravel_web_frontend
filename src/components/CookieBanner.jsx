"use client";
import React, { useEffect } from 'react'
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';

const CookieBanner = () => {
    const handleAccept = () => {
        // Cuando el usuario acepta, Google Analytics detecta automáticamente
        // el cambio de consentimiento si usas @next/third-parties
        window.location.reload(); // Recargamos para que GA se active con permisos
    };
    return (
        <CookieConsent
            location="bottom"
            buttonText="Aceptar todo"
            declineButtonText="Rechazar"
            enableDeclineButton
            cookieName="TA-google-analytics"
            style={{ background: "#1a1a1a", color: "#fff", padding: "10px", fontSize: "14px" }}
            buttonStyle={{ background: "#f97316", color: "#fff", fontWeight: "bold", borderRadius: "5px" }}
            declineButtonStyle={{ background: "transparent", border: "1px solid #fff", borderRadius: "5px" }}
            onAccept={handleAccept}>
            Utilizamos cookies para mejorar tu experiencia.
        </CookieConsent>
    )
}

export default CookieBanner