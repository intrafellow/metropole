import React, { useEffect } from "react";
import "@styles/home.css";
import v from "../../assets/team/v.jpg";
import s from "../../assets/team/s.jpg";
import p from "../../assets/team/p.jpg";
import l from "../../assets/team/l.jpg";

export default function Team() {
  useEffect(() => {
    const css = String.raw`
      .impact { display: grid; gap: 28px; color: var(--fg); }
      .impact h2 {
        font-size: clamp(32px, 4.8vw, 54px);
        font-weight: 800;
        line-height: 1.2;
        margin: 0;
      }
      .impact .lead {
        color: var(--muted);
        max-width: 880px;
        font-size: clamp(22px, 2.4vw, 28px);
      }

      .p {
        font-size: clamp(17px, 1.9vw, 20px);
        line-height: 1.75;
        opacity: .98;
      }

      /* === GRID === */
      .grid-cards {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 24px;
        margin-top: 32px;
      }

      @media (max-width: 860px) {
        .grid-cards { grid-template-columns: 1fr; }
      }

      /* === Advisory Board === */
      .grid-board {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        margin-top: 32px;
      }

      @media (max-width: 1024px) {
        .grid-board { grid-template-columns: repeat(2, 1fr); }
      }

      @media (max-width: 700px) {
        .grid-board { grid-template-columns: 1fr; }
      }

      /* === CARD === */
      .card {
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: var(--radius);
        background: rgba(255,255,255,.02);
        padding: 28px 30px 40px;
        position: relative;
        overflow: hidden;
        transition: transform .25s ease, box-shadow .25s ease;
      }

      .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 0 18px rgba(0,0,0,0.25);
      }

      .photo {
        width: 100%;
        height: 260px;
        border-radius: 12px;
        object-fit: cover;
        margin-bottom: 18px;
      }

      /* ↑ для Sandro — поднято фото */
      .photo-top {
        object-position: top;
      }

      /* === Основатель — горизонтальная карточка === */
      .founder-card {
        display: grid;
        grid-template-columns: 360px 1fr;
        align-items: start;
        gap: 36px;
        padding: 40px;
      }

      .founder-photo {
        width: 100%;
        height: 400px;
        border-radius: 14px;
        object-fit: cover;
      }

      @media (max-width: 880px) {
        .founder-card {
          grid-template-columns: 1fr;
        }
        .founder-photo {
          height: 320px;
          margin-bottom: 20px;
        }
      }

      .member-name {
        font-size: clamp(22px, 2.4vw, 28px);
        font-weight: 700;
        margin-bottom: 6px;
      }

      .member-role {
        color: var(--muted);
        font-size: clamp(20px, 2vw, 26px);
        margin-bottom: 14px;
      }

      .member-bio {
        font-size: clamp(18px, 1.6vw, 24px);
        line-height: 1.7;
        opacity: 0.96;
      }

      .linkedin {
        margin-top: 20px;
      }

      .linkedin a {
        color: var(--brand);
        text-decoration: underline;
        text-underline-offset: 3px;
        font-weight: 600;
      }

      .divider {
        margin: 60px 0 24px;
        text-align: center;
        font-weight: 700;
        font-size: clamp(18px, 2vw, 22px);
        letter-spacing: .5px;
        color: var(--muted);
        border-top: 1px solid rgba(255,255,255,0.1);
        padding-top: 24px;
      }
    `;
    const el = document.createElement("style");
    el.setAttribute("data-team", "");
    el.innerHTML = css;
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);

  return (
    <main>
      {/* === HERO === */}
      <section className="section">
        <div className="container impact">
          <h2>Our Team</h2>
          <p className="lead">
            Leaders, educators, and innovators shaping the new era of capital, strategy, and creativity.
          </p>
        </div>
      </section>

      {/* === Founder === */}
      <section className="section">
        <div className="container grid-cards">
          <div className="card founder-card" style={{ gridColumn: "1 / -1" }}>
            <img src={v} alt="Victoria Silchenko Robbins" className="founder-photo" />
            <div>
              <h3 className="member-name">Victoria Silchenko Robbins</h3>
              <div className="member-role">
                Founder & CEO | Economist | Entrepreneurial Finance Strategist
              </div>
              <p className="member-bio">
                Victoria Silchenko Robbins is an economist, educator, and founder with over two decades of experience at the
                intersection of finance, entrepreneurship, and innovation. She is widely recognized for advising startups,
                investors, and organizations globally on funding strategies, valuation, and capital structuring.
              </p>
              <p className="member-bio">
                Before launching Metropole Capital Group, Victoria worked with leading financial institutions in California,
                including the Milken Institute and Laffer Investments. She teaches MBA and PhD students as a visiting professor,
                focusing on entrepreneurial finance and new funding models. Dr. Silchenko has served on the board of the Los Angeles Venture Association (LAVA), where she launched the GLOBAL LAVA chapter, and currently sits on the board of the California Stock Xchange.
              </p>
              <p className="member-bio">
                Victoria is the creator of <strong>The Venture Triad of Trade-offs™</strong>, a strategic framework helping
                founders navigate key decisions on growth, IP, and capital. She has advised international forums, accelerators,
                and universities, and authored <em>Raise and Rise: Funding Sources for Your Startup in the Era of Digital Transformation & Blockchain.</em>
              </p>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/victoriametropolecapital/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* === Advisory Board === */}
        <div className="container">
          <div className="divider">Advisory Board</div>
          <div className="grid-board">
            {/* Sandro Monetti */}
            <div className="card">
              <img src={s} alt="Sandro Monetti" className="photo photo-top" />
              <h3 className="member-name">Sandro Monetti</h3>
              <div className="member-role">
                Entertainment Industry Expert | Journalist | COO, Big Screen Entertainment Group
              </div>
              <p className="member-bio">
                Sandro Monetti is an internationally recognized entertainment industry expert, journalist, and author with
                extensive experience in global media and culture. He is a regular contributor to CNN and BBC, and currently
                serves as COO of Big Screen Entertainment Group in Los Angeles.
              </p>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/sandro-monetti/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Paul Thurman */}
            <div className="card">
              <img src={p} alt="Dr. Paul Thurman" className="photo" />
              <h3 className="member-name">Dr. Paul Thurman</h3>
              <div className="member-role">
                Professor | Global Strategy & Data Analytics Expert | Author
              </div>
              <p className="member-bio">
                Dr. Paul Thurman is a professor, advisor, and author with extensive global experience in strategy, analytics,
                and innovation. He has advised clients on six continents and teaches at Columbia University and London Business School.
              </p>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/paul-thurman-dba-80433/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Lorena Welch */}
            <div className="card">
              <img src={l} alt="Lorena Welch" className="photo" />
              <h3 className="member-name">Lorena Welch</h3>
              <div className="member-role">
                Founder & CEO, Dreamscapers Publishing | Creative Technologist | Visionary Storyteller
              </div>
              <p className="member-bio">
                Lorena Welch is a visionary entrepreneur and creative technologist dedicated to inspiring young people to nurture
                their talents and channel creativity into impact. As CEO of Dreamscapers Publishing, she pioneered HoloNovels™ —
                XR/4D physical books with immersive augmented illustrations.
              </p>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/lorena-welch/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
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
