import React from "react";
import { getAboutContent } from "@services/sanityService";
import "@styles/home.css";
import { useSanityContent } from "../../hooks/useSanityContent";

function PageStyles() {
  return (
    <style>{`
      .impact { display: grid; gap: 28px; color: var(--fg); }
      .impact h2 { font-size: clamp(30px, 4vw, 49px); line-height: 1.2; letter-spacing: .2px; margin: 0; }
      .impact .lead { color: var(--muted); max-width: 880px; font-size: clamp(20px, 2.0vw, 24px); }

      .impact .title {
        font-size: clamp(32px, 4.8vw, 54px);
        font-weight: 800;
        line-height: 1.2;
        letter-spacing: .2px;
        margin: 0;
      }

      /* === увеличенные размеры ниже секции hero === */
      .h5 {
        font-size: clamp(24px, 3vw, 30px);
        font-weight: 800;
        color: var(--fg);
        margin-bottom: 12px;
      }

      .p {
        font-size: clamp(17px,2vw,20px);
        line-height: 1.8;
        opacity: .98;
      }

      ul.p li {
        margin-bottom: 10px;
        line-height: 1.8;
      }

      .card {
        border: 1px solid var(--border);
        border-radius: var(--radius);
        background: rgba(255,255,255,.04);
        padding: 28px 32px;
        box-shadow: 0 6px 22px rgba(0,0,0,0.25);
      }

      .section { padding-block: 64px; }
      .container { margin: 0 auto; display: grid; gap: 28px; }
    `}</style>
  );
}

export default function About() {
  const { content, loading } = useSanityContent(getAboutContent, 5000);

  if (loading) {
    return (
      <main>
        <PageStyles />
        <section className="section">
          <div className="container" style={{ textAlign: "center", padding: "80px 40px" }}>
            <div className="h5">Loading...</div>
          </div>
        </section>
      </main>
    );
  }

  if (!content) {
    return (
      <main>
        <PageStyles />
        <section className="section">
          <div className="container" style={{ textAlign: "center", padding: "80px 40px" }}>
            <div className="h5">Failed to load content</div>
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

      {/* === WHY US === */}
      <section className="section">
        <div className="container">
          <div className="h5">{content.whyUs?.title}</div>
          <div className="card">
            <p className="p">{content.whyUs?.description}</p>
            <ul className="p" style={{ marginTop: 14 }}>
              {content.whyUs?.items?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* === OUR GOALS === */}
      <section className="section">
        <div className="container">
          <div className="h5">{content.ourGoals?.title}</div>
          <div className="card">
            <ul className="p">
              {content.ourGoals?.items?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* === OUR VALUES === */}
      <section className="section">
        <div className="container">
          <div className="h5">{content.ourValues?.title}</div>
          <div className="card">
            <p className="p">{content.ourValues?.description}</p>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "80px" }}>
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
      </section>
    </main>
  );
}
