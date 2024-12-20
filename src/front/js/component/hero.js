import React, { useState, useEffect, useContext } from "react";

function Hero() {
    const [vantaEffect, setVantaEffect] = useState(0);

    useEffect(() => {
        if (!vantaEffect && window.VANTA) {
            setVantaEffect(
                window.VANTA.TOPOLOGY({
                    el: "#hero",
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: "#6abaa4",
                    backgroundColor: "transparent",
                })
            );
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div
            id="hero"
            className="hero-container min-vh-100 mx-auto d-flex flex-column justify-content-center"
        >
            <div className="text-center hero-content">
                <h1
                    className="hero-title display-1"
                    style={{
                        color: "#6abaa4",
                        fontWeight: "600",
                        textShadow:
                            "2px 2px 3px rgba(0, 0, 0, 0.7), 2px 2px 10px rgba(255, 255, 255, 0.5)",
                    }}
                >
                    ¡Suma Saber!
                </h1>
                <h3
                    className="hero-subtitle display-5 w-75 mx-auto"
                    style={{
                        opacity: 0.75,
                        color: "#06090a",
                        fontWeight: "lighter",
                    }}
                >
                    Conecta con el profesor ideal para ti y, como docente, inspira al mundo
                    compartiendo tu conocimiento y experiencia.
                </h3>
            </div>
        </div>
    );
}

export default Hero;
