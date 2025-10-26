import React from "react";
import "@styles/home.css";
import e1 from "../../assets/events/1е.jpg";
import e2 from "../../assets/events/3е.jpg";
import e3 from "../../assets/events/6.jpg";
import e4 from "../../assets/events/4е.jpg";
import e5 from "../../assets/events/6е.jpg";
import e6 from "../../assets/events/7.jpg";
import e7 from "../../assets/events/7е.jpg";
import e8 from "../../assets/events/8.jpg";
import e9 from "../../assets/events/9.jpg";
import e10 from "../../assets/events/10.jpg";
import e11 from "../../assets/events/11.jpg";
import e12 from "../../assets/events/12.jpg";
import e13 from "../../assets/events/13.jpg";
import e14 from "../../assets/events/14.jpg";
import e15 from "../../assets/events/16.jpg";
import e16 from "../../assets/events/17.jpg";

type MediaItem = {
  kind: "photo" | "video";
  src: string;
  alt: string;
  href?: string;
};

const GALLERY: MediaItem[] = [
  { kind: "photo", src: e1 },
  { kind: "photo", src: e2 },
  { kind: "photo", src: e3 },
  { kind: "photo", src: e4 },
  { kind: "photo", src: e5 },
  { kind: "photo", src: e6 },
  { kind: "photo", src: e7 },
  { kind: "photo", src: e8 },
  { kind: "photo", src: e9 },
  { kind: "photo", src: e10 },
  { kind: "photo", src: e11 },
  { kind: "photo", src: e12 },
  { kind: "photo", src: e13 },
  { kind: "photo", src: e14 },
  { kind: "photo", src: e15 },
  { kind: "photo", src: e16 },
];

function PageStyles() {
  return (
    <style>{`
      .impact { display: grid; gap: 28px; color: var(--fg); }
      .impact h2 { font-size: clamp(32px, 4.8vw, 54px); font-weight: 800; line-height: 1.2; margin: 0; }
      .impact .lead { color: var(--muted); max-width: 880px; font-size: clamp(20px, 2.0vw, 24px); }

      .p { font-size: clamp(17px, 1.9vw, 20px); line-height:1.75; opacity:.98; }

      .section { padding-block: 48px; border-bottom: 1px solid var(--border); }
      .section:first-of-type { border-top: 1px solid var(--border); }

      .card {
        border: 1px solid var(--border);
        border-radius: var(--radius);
        background: rgba(255,255,255,.03);
        padding: 18px;
      }

       h3 {
        font-size: clamp(22px, 2.4vw, 28px);
        font-weight: 700;
        margin-bottom: 16px;
      }

      /* улучшенная галерея */
      .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 18px;
        margin-top: 28px;
        justify-items: center;
      }

      .tile {
        position: relative;
        width: 100%;
        max-width: 380px;
        border: 1px solid var(--border);
        border-radius: 14px;
        overflow: hidden;
        background: rgba(255,255,255,0.03);
        transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
        cursor: pointer;
      }
      .tile:hover {
        transform: scale(1.03);
        box-shadow: 0 0 30px rgba(0,0,0,0.35);
        filter: brightness(1.08);
      }
      .tile .ph {
        width: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
        display: block;
      }

      @keyframes fadeIn { from{opacity:0; transform:scale(.95);} to{opacity:1; transform:scale(1);} }
    `}</style>
  );
}

export default function Events() {
  const [openMedia, setOpenMedia] = React.useState<null | MediaItem>(null);

  return (
    <main>
      <PageStyles />

      {/* === HERO === */}
      <section className="section">
        <div className="container impact">
          <h2 className="title">Events</h2>
          <p className="lead">Shaping the Global Funding Conversation Since 2012</p>

          <hr
            style={{
              height: "1px",
              background: "var(--border)",
              border: "none",
              margin: "24px 0",
            }}
          />

          <div className="card">
  <h3>Over a Decade of Global Engagement</h3>

  <p className="p">
    For more than a decade, we’ve been actively engaged with the global investment and startup community —
    bringing together visionary founders, investors, policymakers, and thought leaders to explore
    <strong> new models of capital formation.</strong>
  </p>

  <ul className="p" style={{ marginTop: 10 }}>
    <li>
      <strong>Collaborations:</strong> Partnering with <em>LAVA (Los Angeles Venture Association)</em> and other leading organizations
      to host high-impact seminars on equity crowdfunding and alternative financing strategies.
    </li>
    <li>
      <strong>Thought Leadership:</strong> Curating discussions on forward-thinking topics such as
      the <em>dangers of traditional venture capital dependency</em> and emerging global funding models.
    </li>
    <li>
      <strong>Founder Empowerment:</strong> Launching initiatives like
      <em> The Next Generation Entrepreneurship Forum</em> and the
      <em> Global Alternative Funding Forum</em> — designed to equip founders and investors with actionable insights.
    </li>
    <li>
      <strong>World Funding Summit:</strong> Hosting the flagship annual event at the
      <em> Los Angeles Convention Center</em>, endorsed by the Mayor of Los Angeles and featuring leading
      venture funds such as <strong>Union Grove Venture Partners ($800M+)</strong>, <strong>Crosscut Ventures ($400M+)</strong>,
      and <strong>Upfront Ventures ($1B+)</strong>.
    </li>
  </ul>

  <p className="p" style={{ textAlign: "center", marginTop: 24, fontWeight: 500 }}>
    <h3>Inspiring the next generation of founders to rethink capital and create global impact</h3>
  </p>
</div>

        </div>
      </section>

      {/* === GALLERY === */}
      <section className="section">
        <div className="container">
          <div><h3>Highlights & Community</h3></div>
          <div className="card">
            <p className="p">
              Over the years, our events have united innovators, investors, and policymakers across continents.
              Here’s a glimpse into the energy, connection, and collaboration that define our global community.
            </p>
            <div className="gallery">
              {GALLERY.map((m, i) => (
                <div
                  key={m.src + i}
                  className="tile"
                  onClick={() => setOpenMedia(m)}
                  aria-label={m.alt}
                >
                  <img className="ph" src={m.src} alt={m.alt} />
                </div>
              ))}
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

      {/* === MODAL === */}
      {openMedia && (
        <div
          className="modal-backdrop"
          onClick={() => setOpenMedia(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              background: "rgba(20,25,35,0.9)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 16,
              padding: 12,
              maxWidth: "90%",
              maxHeight: "90%",
              boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              animation: "fadeIn 0.25s ease",
            }}
          >
            <img
              src={openMedia.src}
              alt={openMedia.alt}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 12,
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
            <button
              onClick={() => setOpenMedia(null)}
              style={{
                marginTop: 16,
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(255,255,255,0.08)",
                borderRadius: 10,
                padding: "6px 14px",
                color: "var(--fg)",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
