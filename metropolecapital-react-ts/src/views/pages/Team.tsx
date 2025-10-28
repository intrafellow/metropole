import React, { useEffect } from "react";
import "@styles/home.css";
import { getTeamContent } from "../../services/getContentFromSanity";
import { urlFor } from "../../services/sanityService";
import { PortableText } from '@portabletext/react';
import { useSanityContent } from "../../hooks/useSanityContent";

export default function Team() {
  const { content, loading } = useSanityContent(getTeamContent, 5000);

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
      
      .member-bio p {
        margin-bottom: 16px;
      }
      
      .member-bio p:last-child {
        margin-bottom: 0;
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
      {/* === HERO === */}
      <section className="section">
        <div className="container impact">
          <h2>{content.title}</h2>
          <p className="lead">{content.lead}</p>
        </div>
      </section>

      {/* === Founder === */}
      <section className="section">
        <div className="container grid-cards">
          <div className="card founder-card" style={{ gridColumn: "1 / -1" }}>
            <img 
              src={urlFor(content.founder.photo).width(800).url()} 
              alt={content.founder.name} 
              className="founder-photo" 
            />
            <div>
              <h3 className="member-name">{content.founder.name}</h3>
              <div className="member-role">
                {content.founder.role}
              </div>
              {content.founder.bio && (
                <div className="member-bio">
                  <PortableText value={content.founder.bio} />
                </div>
              )}
              <div className="linkedin">
                <a
                  href={content.founder.linkedin}
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
          <div className="divider">{content.advisoryTitle || "Advisory Board"}</div>
          <div className="grid-board">
            {content.advisoryMembers?.map((member: any, idx: number) => (
              <div key={idx} className="card">
                <img 
                  src={urlFor(member.photo).width(800).url()} 
                  alt={member.name} 
                  className={idx === 0 ? "photo photo-top" : "photo"} 
                />
                <h3 className="member-name">{member.name}</h3>
                <div className="member-role">
                  {member.role}
                </div>
                <p className="member-bio">
                  {member.bio}
                </p>
                <div className="linkedin">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
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
