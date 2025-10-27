import "@styles/home.css";

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
  return (
    <main>
      <PageStyles />

      {/* === HERO === */}
      <section className="section">
        <div className="container impact">
          <h2 className="title">About Us</h2>
          <p className="lead">
            Based in Los Angeles, we inspire and empower entrepreneurs, innovators, and creators around the globe with modern funding tools and strategic insight,
            enabling them to design and execute their own financing strategies with confidence, independence, and vision.
          </p>
        </div>
      </section>

      {/* === WHY US === */}
      <section className="section">
        <div className="container">
          <div className="h5">Why Us</div>
          <div className="card">
            <p className="p">
              Most advisors stop at venture capital. We don't. We work with founders who raise through VC, but we also open the door
              to alternative and hybrid funding models, including:
            </p>
            <ul className="p" style={{ marginTop: 14 }}>
              <li>Crowdfunding / Equity Crowdfunding</li>
              <li>Revenue sharing</li>
              <li>Non-dilutive financing (grants, corporate programs, strategic partnerships)</li>
              <li>Emerging funding models</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === OUR GOALS === */}
      <section className="section">
        <div className="container">
          <div className="h5">Our Goals</div>
          <div className="card">
            <ul className="p">
              <li>Equip founders with the knowledge and tools to work with capital on their own terms.</li>
              <li>Help ventures craft funding strategies aligned with their business models, not external pressures.</li>
              <li>Build a global founder network driven by informed, independent financing decisions.</li>
              <li>Bridge the gap between traditional finance and emerging models to create smarter funding ecosystems.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === OUR VALUES === */}
      <section className="section">
        <div className="container">
          <div className="h5">Our Values</div>
          <div className="card">
            <p className="p">
              We believe in clarity, integrity, and real impact. We’re founders ourselves, and we understand the high stakes of building
              something that matters. Most innovators today face a defining dilemma: build a multi-generational company that endures,
              or build an asset for sale. We help founders navigate that choice with clarity, strategy, and control, grounding every
              engagement in trust and transparency.
            </p>
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
