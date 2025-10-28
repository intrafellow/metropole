import type React from "react";
import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom"; // если не нужен здесь — можно удалить
import "@styles/home.css";
import back from "../../assets/back.png";
import { getHomeContent } from "../../services/getContentFromSanity";
import { urlFor } from "../../services/sanityService";
import { useSanityContent } from "../../hooks/useSanityContent";

/* ---------- Time/Sky helpers ---------- */
function getTZHoursMinutes(tz: string, now = new Date()) {
  const fmt: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "numeric", hour12: false, timeZone: tz };
  const [hStr, mStr] = new Intl.DateTimeFormat("en-US", fmt).format(now).split(":");
  const h = Number(hStr), m = Number(mStr);
  return { h, m, hm: h + m / 60 };
}

/** sunrise ~06:30, sunset ~19:30 */
function calcSunAndSkyVars(opts: { tz?: string; now?: Date }) {
  const tz = opts.tz ?? "America/Los_Angeles";
  const hm = getTZHoursMinutes(tz, opts.now).hm;

  const sunrise = 6.5;
  const sunset = 19.5;
  const isDay = hm >= sunrise && hm <= sunset;

  const d = isDay ? (hm - sunrise) / (sunset - sunrise) : hm < sunrise ? 0 : 1;

  const sunX = -10 + 120 * d;
  const sunY = 78 - 52 * Math.sin(Math.PI * d);
  const warm = isDay ? 1 - Math.abs(0.5 - d) * 2 : 0;

  const skyOpacity = isDay ? 0.18 + warm * 0.22 : 0.35;
  const nightOpacity = isDay ? 0 : 0.35;
  const starsOpacity = isDay ? 0 : 0.35;

  const sunSize = 70 + 20 * Math.sin(Math.PI * d);

  const sunWarm = Math.max(0.2, warm);
  const sunColor = `rgba(255, ${Math.round(220 - sunWarm * 60)}, ${Math.round(180 - sunWarm * 110)}, 1)`;
  const sunGlow = `rgba(255, ${Math.round(200 - sunWarm * 80)}, ${Math.round(130 - sunWarm * 130)}, 0.55)`;

  const topDay = `rgba(${Math.round(60 + warm * 50)}, ${Math.round(90 + warm * 35)}, ${Math.round(160 - warm * 40)}, 1)`;
  const botDay = `rgba(${Math.round(120 + warm * 60)}, ${Math.round(170 + warm * 40)}, ${Math.round(255 - warm * 80)}, 1)`;
  const topNight = `rgba(15, 20, 35, 1)`;
  const botNight = `rgba(6, 8, 15, 1)`;

  const skyTop = isDay ? topDay : topNight;
  const skyBot = isDay ? botDay : botNight;

  const rayO = isDay ? 0.18 + warm * 0.35 : 0;
  const flareO = isDay ? 0.1 + warm * 0.25 : 0;

  return {
    "--sun-x": `${sunX.toFixed(2)}%`,
    "--sun-y": `${sunY.toFixed(2)}%`,
    "--sun-size": `${sunSize.toFixed(0)}px`,
    "--sun-color": sunColor,
    "--sun-glow": sunGlow,
    "--sky-top": skyTop,
    "--sky-bot": botNight, /* твой градиент ниже перекрывает */
    "--sky-opacity": skyOpacity.toString(),
    "--night-opacity": nightOpacity.toString(),
    "--stars-opacity": starsOpacity.toString(),
    "--sun-ray-o": rayO.toFixed(3),
    "--sun-flare-o": flareO.toFixed(3),
  } as Record<string, string>;
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const tz = "America/Los_Angeles";
  const { content, loading } = useSanityContent(getHomeContent, 30000); // 30 сек

  function applySky(vars: Record<string, string>) {
    const el = heroRef.current;
    if (!el) return;
    Object.entries(vars).forEach(([k, v]) => el.style.setProperty(k, v));
  }
  function applyLive() {
    applySky(calcSunAndSkyVars({ tz, now: new Date() }));
  }

  function onHeroMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = (e.clientX - r.left) / r.width - 0.5;
    const my = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--mx", mx.toFixed(3));
    el.style.setProperty("--my", my.toFixed(3));
  }

  useEffect(() => {
    if (!content) return;
    applyLive();
  }, [content]);
  
  useEffect(() => {
    if (!content) return;
    applyLive();
    let minuteTimeout: number | undefined;
    let minuteInterval: number | undefined;
    const scheduleMinuteTicks = () => {
      theNow: {
        const now = new Date();
        const toNext = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
        minuteTimeout = window.setTimeout(() => {
          applyLive();
          minuteInterval = window.setInterval(applyLive, 60_000);
        }, Math.max(0, toNext));
      }
    };
    scheduleMinuteTicks();
    const onVisibility = () => {
      if (document.visibilityState === "visible") applyLive();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      if (minuteTimeout) clearTimeout(minuteTimeout);
      if (minuteInterval) clearInterval(minuteInterval);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [content]);

  useEffect(() => {
    if (!content) return;
    const host = heroRef.current;
    if (!host) return;
    const sun = host.querySelector<HTMLDivElement>(".sun");
    if (!sun) return;
    let timer: number | null = null;
    const onClick = () => {
      host.classList.add("sky-eclipse");
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(() => host.classList.remove("sky-eclipse"), 2800);
    };
    sun.addEventListener("click", onClick);
    return () => {
      sun.removeEventListener("click", onClick);
      if (timer) window.clearTimeout(timer);
    };
  }, [content]);

  if (loading || !content) {
    return (
      <div>
        <div style={{ padding: '48px', textAlign: 'center' }}>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const logoUrl = content.logo ? urlFor(content.logo).width(600).url() : '';
  const mapUrl = content.mapImage ? urlFor(content.mapImage).width(1000).url() : '';

  return (
    <div>
      <style>{`
        :root{
          --page-bg: var(--app-bg, #07112d);
          --fg: var(--app-fg, #e9ecf3);
          --border: rgba(255,255,255,.12);
        }

        .hero.hero--no-dim::before,
        .hero.hero--no-dim::after { display: none !important; content: none !important; }

        .hero-logo {
          width: clamp(200px, 26vw, 480px);
          height: auto;
          display: block;
          margin: 0 auto 20px;
          filter: drop-shadow(0 6px 20px rgba(0,0,0,0.18));
        }
        @media (min-width: 1280px) { .hero-logo { width: clamp(260px, 28vw, 560px); } }
        @media (max-width: 640px) { .hero-logo { width: clamp(180px, 48vw, 300px); margin-bottom: 14px; } }

        .hero-fader{
          position: absolute; left: 0; right: 0; bottom: -1px;
          height: clamp(90px, 12vw, 160px); pointer-events: none;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.02) 30%, rgba(0,0,0,0.06) 55%, var(--page-bg) 92%);
          z-index: 9;
        }

        /* SKY */
        .sky { position:absolute; inset:0; overflow:hidden; pointer-events:none; z-index:0;
               transform: translate3d(calc(var(--mx, 0) * 6px), calc(var(--my, 0) * 4px), 0); will-change: transform; }
        .sky-gradient {
          position:absolute;
          inset:0;
          background: linear-gradient(to bottom,
            #8B008B 0%,
            #DA70D6 30%,
            #FF69B4 70%,
            #FFB6C1 100%
          );
          opacity: var(--sky-opacity, .22);
          transition: opacity 800ms ease, background 1200ms ease;
          z-index:0;
        }
        .night-tint { position:absolute; inset:0; background:#05070c; mix-blend-mode:multiply; opacity: var(--night-opacity, 0);
                      transition: opacity 800ms ease; z-index:1; }
        .stars { position:absolute; inset:0;
                 background-image:
                   radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,.9), rgba(255,255,255,0)),
                   radial-gradient(1px 1px at 30% 5%,  rgba(255,255,255,.8), rgba(255,255,255,0)),
                   radial-gradient(1px 1px at 55% 28%, rgba(255,255,255,.85), rgba(255,255,255,0)),
                   radial-gradient(1px 1px at 70% 12%, rgba(255,255,255,.9), rgba(255,255,255,0)),
                   radial-gradient(1px 1px at 82% 30%, rgba(255,255,255,.8), rgba(255,255,255,0)),
                   radial-gradient(1px 1px at 15% 65%, rgba(255,255,255,.9), rgba(255,255,255,0)),
                   radial-gradient(1px 1px at 42% 78%, rgba(255,255,255,.85), rgba(255,255,255,0)),
                   radial-gradient(1px 1px at 75% 70%, rgba(255,255,255,.75), rgba(255,255,255,0)),
                   radial-gradient(1px 1px at 90% 50%, rgba(255,255,255,.9), rgba(255,255,255,0));
                 opacity: var(--stars-opacity, 0); filter: drop-shadow(0 0 2px rgba(255,255,255,.3));
                 transition: opacity 800ms ease; z-index:2; }

        .layer-slow, .layer-mid, .layer-fast { position: absolute; inset:0; }
        .layer-slow { z-index: 2; }
        .layer-mid  { z-index: 3; }
        .layer-fast { z-index: 8; }

        .cloud { position:absolute; display:block; width:var(--w, 280px); height:var(--h, 120px);
                 top:var(--top, 10%); left:-60vw; opacity:var(--o, .48);
                 filter: blur(var(--blur, 0px)) drop-shadow(0 8px 14px rgba(0,0,0,.18));
                 animation: cloud-move var(--dur, 80s) linear infinite; transform: translate3d(0,0,0);
                 will-change: transform;
                 background:
                   radial-gradient(closest-side at 30% 55%, rgba(255,255,255,.9), rgba(255,255,255,0) 70%),
                   radial-gradient(closest-side at 55% 45%, rgba(255,255,255,.85), rgba(255,255,255,0) 72%),
                   radial-gradient(closest-side at 75% 60%, rgba(255,255,255,.8), rgba(255,255,255,0) 70%),
                   radial-gradient(closest-side at 50% 70%, rgba(255,255,255,.65), rgba(255,255,255,0) 72%);
                 border-radius:60px; }
        .layer-slow  .cloud{ --dur: 70s;  --o:.40; --blur: 0.5px; }
        .layer-mid   .cloud{ --dur: 50s;  --o:.48; }
        .layer-fast  .cloud{ --dur: 32s;  --o:.56; }
        .cloud::after{ content:""; position:absolute; inset:0; animation: bob var(--bob-dur, 6s) ease-in-out infinite alternate; }
        @keyframes cloud-move { 0% { transform: translate3d(0, calc(var(--my,0) * -4px), 0) } 100% { transform: translate3d(220vw, calc(var(--my,0) *  4px), 0) } }
        @keyframes bob { 0% { transform: translateY(-2px) } 100% { transform: translateY(3px) } }

        .sun {
          position:absolute; left: var(--sun-x, 50%); top: var(--sun-y, 40%);
          width: var(--sun-size, 80px); height: var(--sun-size, 80px);
          border-radius:50%; background: var(--sun-color, #ffd27a);
          box-shadow: 0 0 calc(var(--sun-size, 80px) * .45) var(--sun-glow, rgba(255,200,120,.55)),
                      0 0 calc(var(--sun-size, 80px) * .8)  rgba(255,220,160,.25);
          transform: translate(-50%, -50%); z-index:7;
          transition: left 1200ms ease, top 1200ms ease, width 800ms ease, height 800ms ease, background 800ms ease, box-shadow 800ms ease;
          cursor: pointer; pointer-events:auto;
        }
        .sun::before{
          content:""; position:absolute; inset:0; transform: translate(-50%, -50%) rotate(0deg);
          left:50%; top:50%; width: calc(var(--sun-size, 80px) * 2.6); height: calc(var(--sun-size, 80px) * 2.6);
          border-radius: 50%;
          background:
            conic-gradient(from 0deg,
              rgba(255, 230, 170, .75) 0deg, rgba(255, 230, 170, .0) 14deg,
              rgba(255, 230, 170, .65) 22deg, rgba(255, 230, 170, .0) 36deg,
              rgba(255, 230, 170, .55) 44deg, rgba(255, 230, 170, .0) 60deg,
              rgba(255, 230, 170, .75) 74deg, rgba(255, 230, 170, .0) 90deg);
          -webkit-mask: radial-gradient(circle at 50% 50%, transparent 46%, black 52%, black 100%);
                  mask: radial-gradient(circle at 50% 50%, transparent 46%, black 52%, black 100%);
          opacity: var(--sun-ray-o, .25); filter: blur(0.6px); animation: sun-rays-rot 24s linear infinite; pointer-events: none;
        }
        @keyframes sun-rays-rot { to { transform: translate(-50%, -50%) rotate(360deg); } }
        .sun::after{
          content:""; position:absolute; inset:0; transform: translate(-50%, -50%);
          left:50%; top:50%; width: calc(var(--sun-size, 80px) * 4.5); height: calc(var(--sun-size, 80px) * 4.5);
          pointer-events:none;
          background:
            radial-gradient(60px 60px at 62% 40%, rgba(255,255,240,.55), rgba(255,255,240,0)),
            radial-gradient(24px 24px at 75% 52%, rgba(255,240,220,.35), rgba(255,240,220,0)),
            radial-gradient(16px 16px at 30% 70%, rgba(255,230,200,.30), rgba(255,230,200,0)),
            radial-gradient(8px 8px   at 82% 68%, rgba(255,220,190,.35), rgba(255,220,190,0));
          opacity: var(--sun-flare-o, .15); filter: blur(0.5px);
        }

        .sun-eclipse { position:absolute; left: var(--sun-x, 50%); top: var(--sun-y, 40%);
          width: var(--sun-size, 80px); height: var(--sun-size, 80px);
          transform: translate(-50%, -50%); z-index: 10; pointer-events:none; opacity: 0; }
        .sky-eclipse .sun-eclipse { opacity: 1; animation: moon-pass 2.8s ease-in-out both; }
        @keyframes moon-pass {
          0%   { clip-path: circle(40% at 140% 50%); background:#0a0e16; filter: drop-shadow(0 0 4px rgba(0,0,0,.25)); }
          50%  { clip-path: circle(46% at 50% 50%);   background:#0a0e16; filter: drop-shadow(0 0 10px rgba(0,0,0,.35)); }
          100% { clip-path: circle(40% at -40% 50%);  background:#0a0e16; filter: drop-shadow(0 0 4px rgba(0,0,0,.25)); }
        }

        /* HERO COPY */
        .hero-copy {
          max-width: min(980px, 90vw);
          margin: 0 auto;
          display: grid;
          grid-auto-rows: min-content;
          row-gap: clamp(8px, 1.2vw, 14px);
          text-align: center;
        }
        .hero-title {
          font-size: clamp(28px, 4.6vw, 48px);
          line-height: 1.18;
          letter-spacing: -0.01em;
          margin: 0;
          color: #f7f9ff;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
        }
        .hero-line {
          font-size: clamp(22px, 2.2vw, 26px);
          line-height: 1.55;
          opacity: .95;
          margin: 0;
          color: #f3f6ff;
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
          font-weight: 600;
        }
        .hero-line.small {
          font-size: clamp(14px, 1.6vw, 18px);
          opacity: .9;
          color: #f8fbff;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
          font-style: italic;
        }

        /* === КНОПКА MENU под текстом (только мобильные) === */
        .hero-cta {
          display: grid;
          justify-content: center;
          margin-top: 10px;
        }
        .menu-btn {
          display: inline-grid;
          place-items: center;
          padding: 10px 16px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          color: #fff;
          font-weight: 700;
          letter-spacing: .02em;
          text-transform: uppercase;
          font-size: 14px;
          box-shadow: 0 10px 24px rgba(0,0,0,.20);
          transition: transform .15s ease, background .2s ease, border-color .2s ease;
        }
        .menu-btn:active { transform: translateY(1px) scale(.99); }
        .menu-btn:hover { background: rgba(255,255,255,0.10); border-color: rgba(255,255,255,.22); }
        @media (min-width: 1024px) {
          .menu-btn { display:none; } /* на десктопе кнопка скрыта */
        }

        /* MAP ONLY */
        .partners-section{ position: relative; }
        .partners-section::before{ content:""; position:absolute; left:0; right:0; top:-18px; height:18px; pointer-events:none;
                                   background: linear-gradient(to bottom, rgba(0,0,0,0.28), rgba(0,0,0,0)); opacity:.35; z-index:1; }
        .map-wrap{
          display:grid;
          gap:12px;
          justify-items:center;
          text-align:center;
        }
        .map-title{
          margin: 4px 0 2px;
          font-weight: 600;
          font-size: clamp(18px, 2.2vw, 28px);
          line-height: 1.25;
          letter-spacing: -0.01em;
        }
        .map-img{
          width:100%;
          height:auto;
          max-width:920px;
          border-radius:12px;
          border:1px solid var(--border);
          filter: drop-shadow(0 8px 28px rgba(98,86,191,0.25));
          background: rgba(255,255,255,0.03);
        }
      `}</style>

      {/* HERO */}
      <div
        ref={heroRef}
        className="hero hero--no-dim"
        onMouseMove={onHeroMouseMove}
        style={{
          position: "relative",
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(10,21,53,0) 65%,
              rgba(10,21,53,0.85) 90%,
              #0a1535 100%
            ),
            url(${back})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          minHeight: "min(88vh, 920px)",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          display: "grid",
          alignItems: "center",
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        <div className="sky" aria-hidden>
          <div className="sky-gradient" />
          <div className="night-tint" />
          <div className="stars" />

          <div className="layer-slow">
            <span className="cloud" style={{ ["--w" as any]:"520px", ["--h" as any]:"190px", ["--top" as any]:"12%", ["--bob-dur" as any]:"7s", animationDelay: "0s" }} />
            <span className="cloud" style={{ ["--w" as any]:"420px", ["--h" as any]:"160px", ["--top" as any]:"22%", ["--bob-dur" as any]:"6.5s", animationDelay: "10s" }} />
          </div>
          <div className="layer-mid">
            <span className="cloud" style={{ ["--w" as any]:"360px", ["--h" as any]:"140px", ["--top" as any]:"30%", ["--bob-dur" as any]:"5.6s", animationDelay: "2s" }} />
            <span className="cloud" style={{ ["--w" as any]:"440px", ["--h" as any]:"170px", ["--top" as any]:"18%", ["--bob-dur" as any]:"6.2s", animationDelay: "18s" }} />
            <span className="cloud" style={{ ["--w" as any]:"280px", ["--h" as any]:"120px", ["--top" as any]:"38%", ["--bob-dur" as any]:"5s",  animationDelay: "28s" }} />
          </div>
          <div className="layer-fast">
            <span className="cloud" style={{ ["--w" as any]:"240px", ["--h" as any]:"100px", ["--top" as any]:"26%", ["--o" as any]:".6", ["--bob-dur" as any]:"4.8s", animationDelay: "4s" }} />
            <span className="cloud" style={{ ["--w" as any]:"300px", ["--h" as any]:"110px", ["--top" as any]:"14%", ["--o" as any]:".58", ["--bob-dur" as any]:"4.6s", animationDelay: "14s" }} />
            <span className="cloud" style={{ ["--w" as any]:"220px", ["--h" as any]:"90px",  ["--top" as any]:"34%", ["--o" as any]:".55", ["--bob-dur" as any]:"4.2s", animationDelay: "22s" }} />
          </div>

          <div className="sun" />
          <div className="sun-eclipse" aria-hidden />
        </div>

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 12,
            textAlign: "center",
            textShadow: "0 1px 4px rgba(0,0,0,0.25)",
            transform: "translate3d(calc(var(--mx, 0) * 4px), calc(var(--my, 0) * 3px), 0)",
            willChange: "transform",
          }}
        >
          <img src={logoUrl} alt="Metropole Capital Group" className="hero-logo" />
          <div className="hero-copy">
            <h1 className="hero-title">{content.heroTitle}</h1>
            <p className="hero-line">{content.heroLine}</p>
            <p className="hero-line small">{content.heroLineSmall}</p>

            {/* === КНОПКА MENU (мобилка): открывает бургер из Header === */}
            <div className="hero-cta">
              <button
                type="button"
                className="menu-btn"
                aria-label="Open menu"
                aria-haspopup="menu"
                onClick={() => window.dispatchEvent(new Event("mcg:toggleMenu"))}
              >
                Menu
              </button>
            </div>
          </div>
        </div>

        <div className="hero-fader" aria-hidden />
      </div>

      {/* MAP ONLY */}
      <section className="section partners-section">
        <div className="container">
          <aside className="map-wrap map-sticky" aria-label="Global partner presence">
            <p className="map-title">{content.mapTitle}</p>
            <img className="map-img" src={mapUrl} alt="World map representing global partner presence" loading="lazy" />
          </aside>
        </div>
      </section>
    </div>
  );
}
