import React, { useState } from "react";
import "@styles/home.css";
import { getEventsContent } from "../../services/getContentFromSanity";
import { urlFor } from "../../services/sanityService";
import { useSanityContent } from "../../hooks/useSanityContent";

type MediaItem = {
  kind: "photo" | "video";
  src: string;
  alt: string;
  href?: string;
};

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
  const [openMedia, setOpenMedia] = useState<null | MediaItem>(null);
  const { content, loading } = useSanityContent(getEventsContent, 5000);

  if (loading) {
    return (
      <main>
        <PageStyles />
        <section className="section">
          <div className="container" style={{ textAlign: 'center', padding: '48px' }}>
            <p className="p">Loading...</p>
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
          <div className="container" style={{ textAlign: 'center', padding: '48px' }}>
            <p className="p">Content not available</p>
          </div>
        </section>
      </main>
    );
  }

  // Преобразуем galleryItems из Sanity в MediaItem
  const galleryItems: MediaItem[] = content.galleryItems?.map((item: any) => ({
    kind: "photo" as const,
    src: urlFor(item.image).width(800).url(),
    alt: item.alt || "Event photo"
  })) || [];

  return (
    <main>
      <PageStyles />

      {/* === HERO === */}
      <section className="section">
        <div className="container impact">
          <h2 className="title">{content.title}</h2>
          <p className="lead">{content.lead}</p>

          <hr
            style={{
              height: "1px",
              background: "var(--border)",
              border: "none",
              margin: "24px 0",
            }}
          />

          <div className="card">
  <h3>{content.cardTitle}</h3>

  <p className="p">
    {content.cardDescription}
  </p>

  <ul className="p" style={{ marginTop: 10 }}>
    {content.cardItems?.map((item: string, idx: number) => (
      <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
    ))}
  </ul>

  <p className="p" style={{ textAlign: "center", marginTop: 24, fontWeight: 500 }}>
    <h3>{content.cardFooterTitle}</h3>
  </p>
</div>

        </div>
      </section>

      {/* === GALLERY === */}
      <section className="section">
        <div className="container">
          <div><h3>{content.galleryTitle}</h3></div>
          <div className="card">
            <p className="p">
              {content.galleryDescription}
            </p>
            <div className="gallery">
              {galleryItems.map((m, i) => (
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
