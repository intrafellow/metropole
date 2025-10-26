import React, { useEffect } from "react";
import "@styles/home.css";

export default function Methodology() {
  useEffect(() => {
    const css = String.raw`
      /* === HERO === */
      .impact {
        display: grid;
        gap: 32px;
        color: var(--fg);
      }
      .impact h2 {
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

      /* === Текст === */
      .p {
        font-size: clamp(17px, 1.9vw, 20px);
        line-height: 1.8;
        opacity: .98;
      }

      ul { margin-top: 10px; padding-left: 24px; }
      li { margin-bottom: 8px; line-height: 1.8; opacity: .95; }

      /* === Карточки === */
      .card {
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 18px;
        background: rgba(255,255,255,.03);
        padding: 34px 36px 70px;
        position: relative;
        overflow: hidden;
        transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        box-shadow: 0 6px 20px rgba(0,0,0,0.25);
      }
      .card:hover {
        transform: translateY(-6px);
        border-color: rgba(108,160,255,0.45);
        box-shadow: 0 10px 30px rgba(108,160,255,0.25);
        background: rgba(255,255,255,0.05);
      }
      .card h3 {
        font-size: clamp(22px, 2.4vw, 28px);
        font-weight: 700;
        margin-bottom: 16px;
      }

      .subcard {
        /* почему: требование — аутлайн слева и справа */
        border-left: 4px solid var(--brand);
        border-right: 4px solid var(--brand);
        background: rgba(255,255,255,0.03);
        border-radius: 12px;
        padding: 18px 22px;
        margin-top: 16px;
      }

      .grid-cards {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 34px;
        margin-top: 48px;
      }
      @media (max-width: 860px) {
        .grid-cards { grid-template-columns: 1fr; }
      }

      .decor-svg {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 140px;
        pointer-events: none;
        opacity: 0.8;
      }

      /* === CTA === */
      .cta {
        text-align: center;
        margin-top: 48px;
        padding: 60px 32px 80px;
        border-radius: 22px;
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.15);
        box-shadow: 0 8px 28px rgba(60,120,255,0.1);
        backdrop-filter: blur(10px);
      }

      .cta h3 {
        font-size: clamp(24px, 3vw, 30px);
        font-weight: 800;
        margin-bottom: 14px;
        color: var(--fg);
      }

      .cta .p {
        margin-bottom: 24px;
        font-size: clamp(17px, 1.9vw, 20px);
      }

      /* === Кнопка === */
      .cta-btn {
        display: inline-block;
        margin-top: 10px;
        padding: 14px 36px;
        border-radius: 16px;
        font-weight: 700;
        letter-spacing: .03em;
        font-size: 17px;
        color: #fff;
        text-decoration: none;
        background: linear-gradient(135deg, rgba(116,152,255,0.35), rgba(160,108,255,0.35));
        box-shadow: 0 0 24px rgba(120,180,255,0.35);
        transition: all .3s ease;
        border: 1px solid rgba(255,255,255,0.25);
      }

      .cta-btn:hover {
        transform: translateY(-3px) scale(1.03);
        background: linear-gradient(135deg, rgba(116,152,255,0.5), rgba(160,108,255,0.5));
        box-shadow: 0 0 36px rgba(150,210,255,0.45);
      }
    `;
    const el = document.createElement("style");
    el.setAttribute("data-methodology", "");
    el.innerHTML = css;
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);

  return (
    <main>
      {/* === HERO === */}
      <section className="section">
        <div className="container impact">
          <h2 className="title">Methodology</h2>
          <p className="lead">
            The Venture Triad of Trade-offs™ — a strategic compass that helps founders make the right capital decisions
            before they raise, spend, or scale.
          </p>
        </div>
      </section>

      {/* === GRID === */}
      <section className="section">
        <div className="container grid-cards">
          {/* 1 */}
          <div className="card">
            <h3>1. Why Trade-offs Define Real Ventures</h3>
            <p className="p">
              Most startup advice starts with funding rounds. We start earlier.
              Before a founder raises a single dollar, there are three critical strategic decisions that shape the entire journey.
            </p>
            <p className="p">
              These decisions determine your capital structure, your growth path, and ultimately whether you’re building
              an enduring company or a short-term asset.
            </p>
            <p className="p">
              This is why we created <strong>The Venture Triad of Trade-offs™</strong> — a practical strategic compass
              for founders who want to master capital, not be mastered by it.
            </p>
            <p className="p">
              If you get these trade-offs right, everything else — from funding to growth — aligns.
            </p>
          </div>

          {/* 2 */}
          <div className="card">
            <h3>2. The Three Trade-Offs</h3>
            <div className="subcard">
              <strong>A. Scaling vs. Building</strong>
              <ul>
                <li>Do you blitzscale for a fast exit or build a company designed to endure?</li>
                <li>Scaling for exit: attracts VC, prioritizes speed, and often means dilution and investor control.</li>
                <li>Building for legacy: slower growth, more resilience, and founder ownership.</li>
              </ul>
            </div>
            <div className="subcard">
              <strong>B. Patents vs. Open Innovation</strong>
              <ul>
                <li>Protect IP or open innovation?</li>
                <li>Patents: defensibility and higher valuation, but require capital and time.</li>
                <li>Open: faster adoption, but changes funding logic.</li>
              </ul>
            </div>
            <div className="subcard">
              <strong>C. VC vs. Alternative Funding</strong>
              <ul>
                <li>VC: provides capital but pushes for exits and control.</li>
                <li>Alternative: crowdfunding, revenue sharing, grants — retaining more control.</li>
              </ul>
            </div>
          </div>

          {/* 3 */}
          <div className="card">
            <h3>3. Why It Matters</h3>
            <p className="p">
              The Venture Triad™ isn’t a slogan. It’s a decision-making framework that gives founders clarity before they raise, spend, or scale.
            </p>
            <ul>
              <li>Design intentional capital strategies instead of reactive fundraising.</li>
              <li>Align financial architecture with mission and purpose.</li>
              <li>Stay in control of company trajectory.</li>
            </ul>
            <p className="p"><strong>Capital should serve the vision — not the other way around.</strong></p>
          </div>

          {/* 4 */}
          <div className="card">
            <h3>4. How We Use This Framework</h3>
            <ul>
              <li>Build funding strategies aligned with founder intent.</li>
              <li>Shape valuation and modeling logic.</li>
              <li>Craft investment narratives reflecting real strategic choices.</li>
              <li>Recommend instruments that fit long-term goals.</li>
              <li>Leverage AI-powered modeling for sharper insight.</li>
            </ul>
          </div>
        </div>

        {/* === CTA === */}
        <div className="card cta" style={{ maxWidth: "100%" }}>
          <h3>5. Work With Us</h3>
          <p className="p">
            Whether you’re scaling fast or building for legacy, the Venture Triad™ helps you make the right decisions early.
          </p>
          <a href="/contact" className="cta-btn">
            Contact us
          </a>
        </div>
      </section>
    </main>
  );
}
