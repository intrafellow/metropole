import { useState } from "react";
import "@styles/home.css";
import { getServicesContent } from "../../services/getContentFromSanity";
import { PortableText } from '@portabletext/react';
import { useSanityContent } from "../../hooks/useSanityContent";

function PageStyles() {
  return (
    <style>{`
      /* === HERO === */
      .impact {
        display: grid;
        gap: 32px;
        color: var(--fg);
        justify-items: start;
      }
      .impact h2, .impact .title {
        font-size: clamp(32px, 4.8vw, 54px);
        font-weight: 800;
        line-height: 1.2;
        margin: 0;
      }
      .impact .lead {
        color: var(--muted);
        max-width: 880px;
        font-size: clamp(20px, 2.0vw, 24px);
        line-height: 1.75;
      }

      .section {
        padding-block: 64px;
      }
      .section:first-of-type {
        border-top: 1px solid var(--border);
      }

      /* === Грид и карточки === */
      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
        gap: 34px;
        margin-top: 50px;
      }
      .service-card {
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 18px;
        background: rgba(255,255,255,0.03);
        backdrop-filter: blur(8px);
        padding: 30px 32px;
        transition: all 240ms ease;
        box-shadow: 0 4px 14px rgba(0,0,0,0.15);
      }
      .service-card:hover {
        transform: translateY(-5px);
        border-color: rgba(108,160,255,0.45);
        box-shadow: 0 12px 28px rgba(108,160,255,0.25);
        background: rgba(255,255,255,0.06);
      }
      .service-card h3 {
        font-size: clamp(22px, 2.4vw, 28px);
        font-weight: 700;
        margin: 0 0 10px;
        color: var(--fg);
      }
      .service-card p {
        font-size: clamp(17px,1.9vw,20px);
        opacity: 0.96;
        line-height: 1.8;
      }
      .service-card button {
        margin-top: 18px;
        border: 1px solid rgba(255,255,255,0.18);
        border-radius: 12px;
        background: rgba(255,255,255,0.08);
        color: var(--fg);
        padding: 10px 20px;
        cursor: pointer;
        font-size: 17px;
        font-weight: 600;
        transition: all 180ms ease;
      }
      .service-card button:hover {
        background: rgba(108,160,255,0.18);
        border-color: rgba(108,160,255,0.45);
      }

      /* === Модалка === */
      .modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.55);
        backdrop-filter: blur(6px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        animation: fadeIn 0.2s ease forwards;
      }
      @keyframes fadeIn {
        from { opacity: 0; } to { opacity: 1; }
      }
      .modal {
        background: rgba(20,25,35,0.95);
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 20px;
        max-width: 740px;
        padding: 44px;
        color: var(--fg);
        box-shadow: 0 10px 40px rgba(0,0,0,0.45);
        animation: slideIn 0.25s ease forwards;
      }
      @keyframes slideIn {
        from { transform: translateY(12px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      .modal h3 {
        margin-top: 0;
        font-size: clamp(24px,2.5vw,30px);
        font-weight: 800;
        line-height: 1.4;
        margin-bottom: 18px;
      }
      .modal p, .modal li {
        font-size: clamp(17px,1.9vw,20px);
        line-height: 1.8;
        opacity: 0.96;
      }
      .modal ul {
        padding-left: 24px;
      }
      .modal button {
        margin-top: 30px;
        border: 1px solid rgba(255,255,255,0.18);
        border-radius: 12px;
        background: rgba(255,255,255,0.08);
        color: var(--fg);
        padding: 10px 22px;
        cursor: pointer;
        font-size: 17px;
        font-weight: 600;
        transition: all 200ms ease;
      }
      .modal button:hover {
        background: rgba(108,160,255,0.18);
        border-color: rgba(108,160,255,0.45);
      }

      .p {
        font-size: clamp(17px,1.9vw,20px);
        line-height: 1.8;
        opacity: .98;
      }

  /* === Только размер: последняя карточка — full-bleed === */
.services-grid > .service-card:last-child {
  grid-column: 1 / -1;                 /* занять всю строку грида */

  margin-right: calc(50% - 50vw);
  width: 100vw;                        /* на всю ширину вьюпорта */

  /* стиль НЕ меняем: остаются border, border-radius, background, hover и пр. */
}

@media (max-width: 920px) {
  .services-grid > .service-card:last-child {
    margin-left: 0;
    margin-right: 0;
    width: auto;
  }
}

    `}</style>
  );
}

export default function Services() {
  const [openService, setOpenService] = useState<null | number>(null);
  const { content, loading } = useSanityContent(getServicesContent, 5000);

  if (loading || !content) {
    return (
      <main>
        <PageStyles />
        <section className="section">
          <div className="container" style={{ textAlign: 'center', padding: '48px' }}>
            <p>Loading...</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PageStyles />

      {/* === HERO === */}
      <section className="section">
        <div className="container impact">
          <h2 className="title">{content.title}</h2>
          <p className="lead">{content.lead}</p>
        </div>
      </section>

      {/* === GRID === */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {content.serviceItems?.map((s: any, i: number) => (
              <div key={s.title || i} className="service-card">
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <button onClick={() => setOpenService(i)}>Learn more</button>
              </div>
            ))}
          </div>

          {/* === CTA (Contact us) === */}
          <div style={{ textAlign: "center", marginTop: "80px" }}>
            <p
              style={{
                fontSize: "clamp(17px, 1.9vw, 20px)",
                color: "rgba(240,245,255,0.9)",
                marginBottom: "26px",
              }}
            >
              {content.ctaText}
            </p>

            <a
              href="/contact"
              className="contact-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 36px",
                fontSize: "17px",
                fontWeight: 700,
                color: "#fff",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.25)",
                background:
                  "linear-gradient(135deg, rgba(116,152,255,0.25), rgba(160,108,255,0.25))",
                backdropFilter: "blur(8px) saturate(140%)",
                boxShadow:
                  "0 0 22px rgba(108,160,255,0.2), inset 0 1px 0 rgba(255,255,255,0.25)",
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "linear-gradient(135deg, rgba(116,152,255,0.4), rgba(160,108,255,0.4))";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 36px rgba(108,160,255,0.35)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "linear-gradient(135deg, rgba(116,152,255,0.25), rgba(160,108,255,0.25))";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 22px rgba(108,160,255,0.2), inset 0 1px 0 rgba(255,255,255,0.25)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Contact us
            </a>
          </div>
        </div>
      </section>

      {/* === MODAL === */}
      {openService !== null && content.serviceItems?.[openService] && (
        <div className="modal-backdrop" onClick={() => setOpenService(null)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <h3>{content.serviceItems[openService].title}</h3>
            <div className="p">
              <PortableText value={content.serviceItems[openService].details} />
            </div>
            <button onClick={() => setOpenService(null)}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
}
