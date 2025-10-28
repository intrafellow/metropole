import "@styles/home.css";
import { getServiceStrategicAdvisoryContent } from "../../services/getContentFromSanity";
import { useSanityContent } from "../../hooks/useSanityContent";

function PageStyles() {
  return (
    <style>{`
      /* Left-aligned hero (same vibe as Services/Impact) */
      .impact {
        display: grid;
        gap: 18px;
        color: var(--fg);
        justify-items: start;
      }
      .impact .title {
        font-size: clamp(32px, 4.8vw, 54px);
        font-weight: 800;
        line-height: 1.2;
        letter-spacing: .2px;
        margin: 0;
      }
      .impact .lead {
        color: var(--muted);
        max-width: 900px;
        font-size: clamp(20px, 2.0vw, 24px);
        margin: 0;
      }
      .cta-wrap { display:flex; gap:12px; flex-wrap:wrap; align-items:center; justify-content:flex-start; }
      .cta-primary, .cta-secondary {
        display:inline-block; padding:10px 14px; border-radius:12px;
        border:1px solid rgba(255,255,255,0.18);
        background:rgba(255,255,255,0.06);
        transition: transform .14s ease, box-shadow .14s ease, background .14s ease, border-color .14s ease;
        font-size:14px; text-decoration:none;
      }
      .cta-primary:hover, .cta-secondary:hover { transform:translateY(-1px); background:rgba(255,255,255,0.10); border-color:rgba(255,255,255,0.28); box-shadow:0 8px 20px rgba(0,0,0,0.25); }
      .cta-secondary { background:transparent; border-color:rgba(255,255,255,0.14); text-decoration:underline; text-underline-offset:3px; }

      /* Cards / grids */
      .card { border:1px solid var(--border); border-radius:16px; background:rgba(255,255,255,0.03); padding:18px; }
      .grid-2 { display:grid; gap:16px; grid-template-columns:1fr 1fr; }
      .grid-3 { display:grid; gap:16px; grid-template-columns:repeat(3, minmax(0,1fr)); }
      @media (max-width: 1024px){ .grid-3{ grid-template-columns:1fr 1fr; } }
      @media (max-width: 700px){ .grid-2, .grid-3{ grid-template-columns:1fr; } }

      .tile { border:1px solid var(--border); border-radius:16px; padding:16px; background:rgba(255,255,255,0.02); transition: border-color .14s ease, background .14s ease, transform .14s ease; }
      .tile:hover { transform: translateY(-1px); border-color:rgba(255,255,255,0.22); background:rgba(255,255,255,0.04); }
      .tile .title { font-weight:700; margin:2px 0 6px; font-size:clamp(16px, 2vw, 18px); }
      .tile .desc { color:var(--muted); font-size:clamp(13px,1.6vw,15px); line-height:1.55; }

      .pill { border:1px solid var(--border); border-radius:999px; padding:6px 10px; font-size:12px; background:rgba(255,255,255,0.04); }
      .stack { display:flex; gap:8px; flex-wrap:wrap; }

      /* Process */
      .step { display:grid; grid-template-columns:56px 1fr; gap:12px; align-items:start; }
      .step .num { width:56px; height:56px; border-radius:12px; display:grid; place-items:center; font-weight:800; border:1px solid var(--border); background:rgba(255,255,255,0.04); }
      .step .h6 { font-size:14px; font-weight:700; margin:0; }
      .muted { color:var(--muted); }
    `}</style>
  );
}

export default function ServiceStrategicAdvisory() {
  const { content, loading } = useSanityContent(getServiceStrategicAdvisoryContent, 5000);

  if (loading) {
    return (
      <main>
        <PageStyles />
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
        <PageStyles />
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
      <PageStyles />

      {/* HERO */}
      <section className="section">
        <div className="container impact">
          <h1 className="title">{content.title}</h1>
          <p className="lead">{content.lead}</p>
          <div className="cta-wrap">
            <a className="cta-primary" href="/contact">Talk to us</a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container">
          <div className="h5">{content.whatWeDoTitle}</div>
          <div className="grid-3" style={{ marginTop: 12 }}>
            {content.whatWeDoItems?.map((item: any, idx: number) => (
              <div key={idx} className="tile">
                <div className="title">{item.title}</div>
                {item.description && <div className="desc">{item.description}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="section">
        <div className="container">
          <div className="h5">{content.deliverablesTitle}</div>
          <div className="grid-3" style={{ marginTop: 12 }}>
            {content.deliverablesItems?.map((item: any, idx: number) => (
              <div key={idx} className="tile">
                <div className="title">{item.title}</div>
                {item.description && <div className="desc">{item.description}</div>}
              </div>
            ))}
          </div>
          <div className="stack" style={{ marginTop: 12 }}>
            {content.pills?.map((pill: string, idx: number) => (
              <span key={idx} className="pill">{pill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div className="h5">{content.processTitle}</div>
          <div className="card" style={{ marginTop: 12 }}>
            <div className="grid-2">
              {content.processSteps?.map((step: any, idx: number) => (
                <div key={idx} className="step">
                  <div className="num">{step.num}</div>
                  <div>
                    <div className="h6">{step.title}</div>
                    <div className="small muted">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="section">
        <div className="container">
          <div className="h5">{content.engagementTitle}</div>
          <div className="grid-3" style={{ marginTop: 12 }}>
            {content.engagementItems?.map((item: any, idx: number) => (
              <div key={idx} className="tile">
                <div className="title">{item.title}</div>
                <div className="desc">{item.description}</div>
              </div>
            ))}
          </div>
          <div className="cta-wrap" style={{ marginTop: 12 }}>
            <a className="cta-primary" href="/contact">Start a sprint</a>
            <a className="cta-secondary" href="/contact">Request outline</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="h5">{content.faqTitle}</div>
          <div className="grid-2" style={{ marginTop: 12 }}>
            {content.faqItems?.map((item: any, idx: number) => (
              <div key={idx} className="tile">
                <div className="title">{item.title}</div>
                <div className="desc">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
