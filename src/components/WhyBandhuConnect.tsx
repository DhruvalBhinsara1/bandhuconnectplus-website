import React from "react";

const features = [
  {
    title: "Connect Instantly",
    description:
      "Effortlessly find and connect with trusted community members. Fast, secure, and always available.",
  },
  {
    title: "Empower Safely",
    description:
      "Your privacy and safety are our top priority. Share, learn, and grow in a protected environment.",
  },
  {
    title: "Impact Together",
    description:
      "Join hands to create real change. Every connection strengthens our community and drives progress.",
  },
];

export default function WhyBandhuConnect() {
  return (
    <section className="why-section"
      style={{
        background: "#f9fafb",
        padding: "64px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: 800,
            marginBottom: "2.7rem",
            textAlign: "center",
            color: "#212121",
            letterSpacing: "0.01em",
            lineHeight: 1.1,
          }}
        >
          Why BandhuConnect+
        </h2>
        <div
          className="why-bandhu-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 48,
            boxSizing: "border-box",
            background: "transparent",
            position: "relative",
          }}
        >
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="why-col"
              style={{
                padding: "0 12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
                minHeight: 180,
                position: "relative",
                background: "none",
                boxShadow: "none",
              }}
            >
              <h3
                style={{
                  fontSize: "1.18rem",
                  fontWeight: 700,
                  color: "#4CE687",
                  marginBottom: 14,
                  letterSpacing: "0.01em",
                  lineHeight: 1.3,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "1.09rem",
                  color: "#212121",
                  lineHeight: 1.7,
                  letterSpacing: "0.01em",
                  margin: 0,
                  fontFamily: "sans-serif",
                  fontWeight: 400,
                }}
              >
                {feature.description}
              </p>
              {/* Divider line except last column */}
              {idx < features.length - 1 && (
                <span
                  style={{
                    position: "absolute",
                    right: -24,
                    top: "10%",
                    height: "80%",
                    width: 1,
                    background: "rgba(33,33,33,0.08)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        /* High-specificity overrides to prevent global/card styles from affecting these columns */
        .why-bandhu-grid > .why-col {
          background: transparent !important;
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          border-radius: 0 !important;
          background-image: none !important;
        }
        .why-bandhu-grid > .why-col * {
          background: transparent !important;
        }

        @media (max-width: 900px) {
          .why-bandhu-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            justify-items: center !important;
          }
          .why-bandhu-grid > .why-col {
            align-items: center !important;
            text-align: center !important;
            padding: 0 8vw !important;
            width: 100% !important;
          }
        }
        @media (max-width: 600px) {
          .why-bandhu-grid {
            gap: 32px !important;
          }
          .why-bandhu-grid > .why-col {
            padding: 0 4vw !important;
          }
          .why-bandhu-grid h2 {
            font-size: 1.6rem !important;
            margin-bottom: 1.2rem !important;
          }
          .why-bandhu-grid h3 {
            font-size: 1.08rem !important;
            margin-bottom: 10px !important;
          }
          .why-bandhu-grid p {
            font-size: 0.98rem !important;
          }
        }
      `}</style>
    </section>
  );
}
