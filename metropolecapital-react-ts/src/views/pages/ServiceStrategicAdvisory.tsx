import "@styles/home.css";

type Bullet = { title: string; desc?: string };
type Step = { num: string; title: string; desc: string };

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
  const WHAT: Bullet[] = [
    { title: "Funding strategy", desc: "Right mix across equity, revenue-based, SPVs/notes, grants — matched to stage and goals." },
    { title: "Financial modeling", desc: "Driver-based model with scenarios and unit economics. Ready for investor Q&A." },
    { title: "Go-to-market & growth", desc: "ICP, funnel, conversion targets, channels, role-based value mapping." },
    { title: "Narrative & materials", desc: "Clarify the story; assemble deck / one-pager / data room." },
    { title: "Investor pipeline", desc: "Segmentation, CRM, touch sequence, status tracker." },
    { title: "Board & metrics", desc: "Compact dashboard: traction, efficiency, sustainability." },
  ];

  const DELIVERABLES: Bullet[] = [
    { title: "Funding memo (+ deck)", desc: "Reasoned strategy with options, risks, and milestones." },
    { title: "Financial model", desc: "Scenarios, sensitivity, sample cap tables." },
    { title: "GTM plan", desc: "Experiment calendar, KPIs, ownership." },
    { title: "Investor list & CRM", desc: "Email templates, stages, follow-ups." },
    { title: "Data room checklist", desc: "Structure and readiness checklist." },
  ];

  const STEPS: Step[] = [
    { num: "01", title: "Discovery", desc: "Context, objectives, constraints, preliminary strategy hypothesis." },
    { num: "02", title: "Narrative & model", desc: "Key claims, financial model, metrics; quick GTM corrections." },
    { num: "03", title: "Pipeline", desc: "Investor segmentation, outreach scripts, touch patterns." },
    { num: "04", title: "Review & prep", desc: "Dry runs, materials polish, 90-day execution plan." },
  ];

  return (
    <main>
      <PageStyles />

      {/* HERO */}
      <section className="section">
        <div className="container impact">
          <h1 className="title">Strategic Advisory</h1>
          <p className="lead">
            Funding strategy, financial modeling, and growth — practical and outcome-driven. We build the investor-ready story, model, and pipeline with your team.
          </p>
          <div className="cta-wrap">
            <a className="cta-primary" href="/contact">Talk to us</a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container">
          <div className="h5">What we do</div>
          <div className="grid-3" style={{ marginTop: 12 }}>
            {WHAT.map((b) => (
              <div key={b.title} className="tile">
                <div className="title">{b.title}</div>
                {b.desc && <div className="desc">{b.desc}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="section">
        <div className="container">
          <div className="h5">Deliverables</div>
          <div className="grid-3" style={{ marginTop: 12 }}>
            {DELIVERABLES.map((b) => (
              <div key={b.title} className="tile">
                <div className="title">{b.title}</div>
                {b.desc && <div className="desc">{b.desc}</div>}
              </div>
            ))}
          </div>
          <div className="stack" style={{ marginTop: 12 }}>
            <span className="pill">Founder-first</span>
            <span className="pill">Data-driven</span>
            <span className="pill">Execution-ready</span>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div className="h5">Process</div>
          <div className="card" style={{ marginTop: 12 }}>
            <div className="grid-2">
              {STEPS.map((s) => (
                <div key={s.num} className="step">
                  <div className="num">{s.num}</div>
                  <div>
                    <div className="h6">{s.title}</div>
                    <div className="small muted">{s.desc}</div>
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
          <div className="h5">Engagement</div>
          <div className="grid-3" style={{ marginTop: 12 }}>
            <div className="tile">
              <div className="title">Sprint (2–4 weeks)</div>
              <div className="desc">One decisive outcome: model, memo, deck, or pipeline.</div>
            </div>
            <div className="tile">
              <div className="title">Quarter program</div>
              <div className="desc">Round support end-to-end: strategy → execution → retro.</div>
            </div>
            <div className="tile">
              <div className="title">Advisory retainer</div>
              <div className="desc">Regular sessions and on-call support while you move the pipeline.</div>
            </div>
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
          <div className="h5">FAQ</div>
          <div className="grid-2" style={{ marginTop: 12 }}>
            <div className="tile">
              <div className="title">What stages do you work with?</div>
              <div className="desc">Pre-seed to Series B. Clear use-case and readiness matter more than stage.</div>
            </div>
            <div className="tile">
              <div className="title">Can you join investor calls?</div>
              <div className="desc">Yes — we do dry runs and can join key meetings to support the narrative and numbers.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
