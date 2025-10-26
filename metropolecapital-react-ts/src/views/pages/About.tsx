import "@styles/home.css";
import triad from "../../assets/venture-triad.jpg";

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

      /* === Triad mobile responsive === */
      @media (max-width: 768px) {
        .triad-diagram {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          width: 100%;
          height: auto !important;
          margin-top: 24px;
          position: relative;
        }
        .triad-diagram svg {
          display: none;
        }
        .triad-block {
          position: static !important;
          width: 90% !important;
          max-width: 360px;
          padding: 18px 24px !important;
          transform: none !important;
          box-shadow: 0 6px 16px rgba(0,0,0,0.3) !important;
        }
        .triad-center {
          width: 220px !important;
          height: 220px !important;
          margin-top: 16px;
          position: static !important;
          transform: none !important;
        }
      }
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
              Most advisors stop at venture capital. We don’t. We work with founders who raise through VC, but we also open the door
              to alternative and hybrid funding models, including:
            </p>
            <ul className="p" style={{ marginTop: 14 }}>
              <li>Crowdfunding / Equity Crowdfunding</li>
              <li>Revenue sharing</li>
              <li>Non-dilutive financing (grants, corporate programs, strategic partnerships)</li>
              <li>Emerging funding models</li>
            </ul>

            <p className="p" style={{ marginTop: 20 }}>
              At the core of our approach is <strong>The Venture Triad of Trade-offs™</strong> — a framework that reflects the real
              strategic crossroads every founder must navigate:
            </p>
            <ul className="p" style={{ marginTop: 14 }}>
              <li><em>Scaling vs. Building</em> – blitzscale for exit or build for resilience</li>
              <li><em>Patents vs. Open Innovation</em> – protect IP or embrace open models</li>
              <li><em>Traditional VC vs. Alternative Funding</em> – equity or hybrid/non-equity paths</li>
            </ul>

            {/* === Venture Triad === */}
            <div style={{ marginTop: 36, textAlign: "center" }}>
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(26px, 3.2vw, 34px)",
                  marginBottom: 10,
                  color: "var(--fg)",
                }}
              >
                The Venture Triad of Trade-offs
              </h3>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "clamp(18px, 2vw, 20px)",
                  marginBottom: 36,
                }}
              >
                Every founder faces three unavoidable trade-offs that define how ventures evolve (Silchenko)
              </p>

              <div
                className="triad-diagram"
                style={{
                  position: "relative",
                  width: "min(95%, 780px)",
                  height: 560,
                  margin: "0 auto",
                }}
              >
                {/* линии */}
                <svg
                  viewBox="0 0 760 520"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                >
                  {/* вверх */}
                  <line x1="380" y1="260" x2="380" y2="120" stroke="rgba(120,170,255,0.9)" strokeDasharray="5,5" strokeWidth="2.5" />
                  <polygon points="380,120 372,142 388,142" fill="rgba(120,170,255,1)" />

                  {/* влево-вниз */}
                  <line x1="380" y1="260" x2="210" y2="380" stroke="rgba(120,170,255,0.9)" strokeDasharray="5,5" strokeWidth="2.5" />
                  <polygon points="210,380 218,376 214,387" fill="rgba(120,170,255,1)" />

                  {/* вправо-вниз */}
                  <line x1="380" y1="260" x2="550" y2="380" stroke="rgba(120,170,255,0.9)" strokeDasharray="5,5" strokeWidth="2.5" />
                  <polygon points="550,380 540,376 544,387" fill="rgba(120,170,255,1)" />
                </svg>

                {/* верхний блок */}
                <div
                  className="triad-block"
                  style={{
                    position: "absolute",
                    top: -30,
                    left: "50%",
                    transform: "translateX(-50%)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,80,60,0.1)",
                    borderRadius: 12,
                    padding: "18px 22px",
                    width: 280,
                    boxShadow: "0 4px 14px rgba(255,80,60,0.25)",
                    zIndex: 2,
                  }}
                >
                  <div style={{ color: "#ff5630", fontWeight: 800, marginBottom: 8, fontSize: 20 }}>
                    ⚡ Scaling vs. Building
                  </div>
                  <div style={{ color: "var(--fg)", lineHeight: 1.7, fontSize: 18 }}>
                    Blitzscale for exit <br /> vs. <br /> Build for resilience
                  </div>
                </div>

                {/* левый нижний */}
                <div
                  className="triad-block"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: -60,
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,200,0,0.08)",
                    borderRadius: 12,
                    padding: "18px 22px",
                    width: 280,
                    boxShadow: "0 4px 14px rgba(255,200,0,0.25)",
                    zIndex: 2,
                  }}
                >
                  <div style={{ color: "#ffb700", fontWeight: 800, marginBottom: 8, fontSize: 20 }}>
                    🔒 Patents vs. Open
                  </div>
                  <div style={{ color: "var(--fg)", lineHeight: 1.7, fontSize: 18 }}>
                    Protect IP <br /> vs. <br /> Open innovation
                  </div>
                </div>

                {/* правый нижний */}
                <div
                  className="triad-block"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: -60,
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(0,255,160,0.08)",
                    borderRadius: 12,
                    padding: "18px 22px",
                    width: 280,
                    boxShadow: "0 4px 14px rgba(0,255,160,0.25)",
                    zIndex: 2,
                  }}
                >
                  <div style={{ color: "#00e6a8", fontWeight: 800, marginBottom: 8, fontSize: 20 }}>
                    💰 Traditional VC vs. Alternative Funding
                  </div>
                  <div style={{ color: "var(--fg)", lineHeight: 1.7, fontSize: 18 }}>
                    Equity <br /> vs. <br /> Non-equity / Hybrid models
                  </div>
                </div>

                {/* центр */}
                <div
                  className="triad-center"
                  style={{
                    position: "absolute",
                    top: "58%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "50%",
                    width: 180,
                    height: 180,
                    background: "radial-gradient(circle at top, rgba(78,161,255,0.45), rgba(20,40,80,0.4))",
                    border: "1px solid rgba(255,255,255,0.25)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
                    backdropFilter: "blur(6px)",
                    zIndex: 3,
                  }}
                >
                  <div style={{ fontWeight: 800, color: "#fff", fontSize: 20 }}>FOUNDERS</div>
                  <div
                    style={{
                      color: "var(--muted)",
                      fontSize: 15,
                      textAlign: "center",
                      lineHeight: 1.6,
                      marginTop: 6,
                      maxWidth: 140,
                    }}
                  >
                    Navigate tensions <br /> between competing forces
                  </div>
                </div>
              </div>
            </div>

            <p
              className="p"
              style={{
                marginTop: 40,
                textAlign: "center",
                maxWidth: 720,
                marginInline: "auto",
              }}
            >
              We don’t push founders down a single path
            </p>
             <p
              className="p"
              style={{
                marginTop: -20,
                textAlign: "center",
                maxWidth: 720,
                marginInline: "auto",
              }}
            >
               We give them the clarity to choose their own
            </p>
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
      </section>
    </main>
  );
}
