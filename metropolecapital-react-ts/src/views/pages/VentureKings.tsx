import React, { useEffect, useState } from "react";
import "@styles/home.css";
import { getVentureKingsContent } from "../../services/getContentFromSanity";
import { urlFor } from "../../services/sanityService";
import { PortableText } from '@portabletext/react';

export default function VentureKings() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadContent() {
      const data = await getVentureKingsContent();
      setContent(data);
      setLoading(false);
    }
    loadContent();
  }, []);
  useEffect(() => {
    const css = String.raw`
      .impact {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 48px;
        color: var(--fg);
      }

      @media (max-width: 880px) {
        .impact {
          grid-template-columns: 1fr;
          text-align: center;
        }
        .impact img {
          margin-inline: auto;
        }
      }

      .impact h2.title {
        font-size: clamp(32px, 4.8vw, 54px);
        font-weight: 800;
        line-height: 1.2;
        margin: 0 0 12px 0;
      }

      .impact .lead {
        color: var(--muted);
        max-width: 600px;
        font-size: clamp(18px, 1.8vw, 22px);
        line-height: 1.7;
      }

      .vk-logo {
        width: clamp(180px, 28vw, 320px);
        border-radius: 18px;
        box-shadow: 0 0 30px rgba(100,150,255,0.25), inset 0 1px 0 rgba(255,255,255,0.15);
        background: radial-gradient(circle at center, rgba(255,255,255,0.05), rgba(20,40,80,0.3));
        backdrop-filter: blur(8px);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .vk-logo:hover {
        transform: scale(1.03);
        box-shadow: 0 0 42px rgba(120,180,255,0.4);
      }

      /* --- остальной CSS --- */
      .grid2 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
        gap: 28px;
        margin-top: 32px;
      }

      .card {
        position: relative;
        overflow: hidden;
        border-radius: 22px;
        padding: 36px;
        color: #fff;
        border: 1px solid rgba(255,255,255,0.08);
        background: radial-gradient(circle at 25% 25%, rgba(52,124,255,0.25) 0%, rgba(18,29,59,0.9) 60%),
                    linear-gradient(160deg, #1b2357 0%, #0c1231 100%);
        box-shadow: inset 0 0 40px rgba(60,150,255,0.1), 0 0 20px rgba(0,0,0,0.45);
        backdrop-filter: blur(10px);
        transition: transform .25s ease, box-shadow .25s ease, border-color .3s ease;
      }

      .card:hover {
        transform: translateY(-6px);
        border-color: rgba(90,170,255,0.5);
        box-shadow: 0 0 40px rgba(60,140,255,0.35);
      }

      .card::after {
        content: "";
        position: absolute;
        top: 12px;
        right: 14px;
        width: 120px;
        height: 120px;
        opacity: 0.25;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: top right;
        transition: opacity .3s ease, transform .3s ease;
      }

      .card:hover::after {
        opacity: 0.45;
        transform: scale(1.05);
      }

      .card li, .card p {
        font-size: clamp(17px, 1.9vw, 20px);
        line-height: 1.75;
        opacity: .98;
      }

      .card h3 {
        font-weight: 700;
        font-size: 25px;
        margin-bottom: 12px;
        background: linear-gradient(90deg, #7fb3ff, #a680ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .vk-cta {
        text-align: center;
        padding: 54px;
        border-radius: 22px;
        background: radial-gradient(circle at 20% 20%, rgba(80,160,255,0.2), rgba(10,20,40,0.9) 70%);
        border: 1px solid rgba(255,255,255,0.08);
        box-shadow: 0 0 28px rgba(40,100,255,0.2);
        color: #fff;
        margin-top: 64px;
      }

      .vk-btn {
        display: inline-block;
        margin-top: 20px;
        padding: 12px 24px;
        border-radius: 14px;
        font-weight: 600;
        border: none;
        background: linear-gradient(90deg, #2a64c5, #4f90ff, #7a64ff);
        color: #fff;
        box-shadow: 0 0 14px rgba(80,160,255,0.35);
        transition: transform .2s ease, box-shadow .2s ease;
        font-size: 21px;
      }

      .vk-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 18px rgba(100,170,255,0.55);
      }
    `;
    const el = document.createElement("style");
    el.setAttribute("data-vk", "");
    el.innerHTML = css;
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);

  if (loading || !content) {
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

  return (
    <main>
      {/* === HERO (ТЕКСТ + ЭМБЛЕМА СПРАВА) === */}
      <section className="section">
        <div className="container impact">
          <div>
            <h2 className="title">{content.title}</h2>
            <p className="lead" dangerouslySetInnerHTML={{ __html: content.lead.replace(/<strong>Venture Kings<\/strong>/g, '<strong>Venture Kings</strong>') }} />
          </div>
          <img src={urlFor(content.logo).width(600).url()} alt="Venture Kings Emblem" className="vk-logo" />
        </div>
      </section>

      {/* === WHY & HOW === */}
      <section className="section">
        <div className="container grid2">
          <div className="card" data-icon="brain">
            <h3>{content.whyCard?.title}</h3>
            <ul>
              {content.whyCard?.items?.map((item: string, idx: number) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/^([^:]+):/, '<strong>$1:</strong>') }} />
              ))}
            </ul>
          </div>

          <div className="card" data-icon="gear">
            <h3>{content.howCard?.title}</h3>
            <PortableText value={content.howCard?.description} />
          </div>
        </div>
      </section>

      {/* === WHO & UNIQUE === */}
      <section className="section">
        <div className="container grid2">
          <div className="card" data-icon="rocket">
            <h3>{content.whoCard?.title}</h3>
            <ul>
              {content.whoCard?.items?.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card" data-icon="chess">
            <h3>{content.uniqueCard?.title}</h3>
            <PortableText value={content.uniqueCard?.description} />
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="section">
        <div className="container">
          <div className="vk-cta">
            <h3>{content.ctaTitle}</h3>
            <PortableText value={content.ctaDescription} />
            <a href="/contact" className="vk-btn">Contact Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
