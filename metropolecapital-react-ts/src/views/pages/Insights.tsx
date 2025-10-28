import "@styles/home.css";
import { getInsightsContent } from "../../services/getContentFromSanity";
import { urlFor } from "../../services/sanityService";
import { useSanityContent } from "../../hooks/useSanityContent";

export default function Insights() {
  const { content, loading } = useSanityContent(getInsightsContent, 5000);

  if (loading) {
    return (
      <main>
        <section className="section">
          <div className="container" style={{ textAlign: 'center', padding: '48px' }}>
            <p>Loading...</p>
          </div>
        </section>
      </main>
    );
  }

  if (!content) {
    return (
      <main>
        <section className="section">
          <div className="container" style={{ textAlign: 'center', padding: '48px' }}>
            <p>Content not available</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <style>{`
        .ins-hero { display: grid; color: var(--fg); }
        .ins-hero .title {
          font-size: clamp(32px, 4.8vw, 54px);
          font-weight: 800;
          line-height: 1.2;
          margin: 0;
        }
        .ins-hero .lead {
          color: var(--muted);
          max-width: 880px;
          font-size: clamp(20px, 2.0vw, 24px);
        }

        .h5 { font-size: clamp(17px, 1.9vw, 20px); line-height: 1.75; opacity: .98; }
        .section { padding-block: 48px; }
        .container { margin: 0 auto; display: grid; gap: 24px; }

         .p { font-size: clamp(15px, 1.5vw, 17px); line-height: 1.75; opacity: .98; }
        .section { padding-block: 48px; }
        .container { margin: 0 auto; display: grid; gap: 24px; }

        /* === Карточки статей — прозрачные по умолчанию, свечение при hover === */
        .card {
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 16px;
          background: rgba(255,255,255,0.02);
          padding: 22px 24px;
          transition: all 0.3s ease;
          box-shadow: none;
          backdrop-filter: blur(4px);
        }
        .card:hover {
          transform: translateY(-4px);
          border-color: rgba(108,160,255,0.45);
          box-shadow: 0 0 18px rgba(108,160,255,0.25);
          background: rgba(108,160,255,0.06);
        }

.card-link {
  display: block;
  position: absolute;
  inset: 0;
  z-index: 2;
}
.card {
  position: relative;
  cursor: pointer;
}


        .cover {
          width: 100%;
          max-width: 320px;
          aspect-ratio: 3/4;
          border-radius: 14px;
          border: 1px solid var(--border);
          object-fit: cover;
        }

        .book-block { display: grid; grid-template-columns: 320px 1fr; gap: 32px; align-items: start; }
        @media (max-width: 820px){ .book-block { grid-template-columns: 1fr; } }

        .h { font-size: clamp(22px, 2.4vw, 28px); font-weight: 800; margin: 0; }
        ul.p { padding-left: 20px; }
        .link { color: var(--brand); text-decoration: underline; }

        /* === Сетка статей === */
        .year-block { display: grid; gap: 16px; margin-top: 32px; }
        .year-title { font-weight: 800; font-size: 22px; color: var(--fg); margin-top: 8px; }
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 18px;
        }

    .amazon-btn {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 12px;
  border: 1px solid rgba(108,160,255,0.45);
  background: linear-gradient(90deg, rgba(91,44,255,0.6), rgba(78,161,255,0.6));
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-decoration: none;
  box-shadow: 0 0 18px rgba(91,44,255,0.35);
  transition: all 0.25s ease;
  font-size: clamp(17px, 1.9vw, 20px);
}

.amazon-btn:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
  box-shadow: 0 0 28px rgba(108,160,255,0.45);
  background: linear-gradient(90deg, rgba(108,160,255,0.7), rgba(91,44,255,0.7));
}

      `}</style>

      {/* === HERO === */}
      <section className="section">
        <div className="container ins-hero">
          <h2 className="title">{content.title}</h2>
          <p className="lead">{content.lead}</p>
        </div>
      </section>

      {/* === BOOK === */}
      <section className="section theme-purple">
        <div className="container">
          <h2 className="h">{content.bookTitle}</h2>
          <div className="card book-block">
            <img 
              src={content.bookCover ? urlFor(content.bookCover).width(600).url() : ""} 
              alt="Book Cover" 
              className="cover" 
            />
            <div>
              <p className="p" dangerouslySetInnerHTML={{ __html: content.bookDescription }} />
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Key Topics Include:</strong>
              </p>
              <ul className="p">
                {content.bookKeyTopics?.map((topic: string, idx: number) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
<div style={{ marginTop: 24, textAlign: "center" }}>
  <a
    href={content.bookLink}
    target="_blank"
    rel="noopener noreferrer"
    className="amazon-btn"
  >
    {content.bookLinkText}
  </a>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* === ARTICLES === */}
<section className="section">
  <div className="container">
    <h2 className="h">{content.articlesTitle}</h2>

    <div className="articles-grid">
      {content.articles?.map((article: any, idx: number) => (
      <div key={idx} className="card">
        <p className="h5"><strong>{article.title}</strong></p>
        <p className="p">{article.description}</p>
        <p className="p"><a href={article.url}
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>
      ))}

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
