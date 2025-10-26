import React, { useState } from "react";
import "@styles/home.css";
import toast from "react-hot-toast";
import e1 from "../../assets/events/2е.jpg";

function PageStyles() {
  return (
    <style>{`
      .contact-hero { display: grid; color: var(--fg); }
      .contact-hero .title {
        font-size: clamp(32px, 4.8vw, 54px);
        font-weight: 800;
        line-height: 1.2;
        margin: 0;
      }
      .contact-hero .lead {
        color: var(--muted);
        max-width: 880px;
        font-size: clamp(20px, 2.0vw, 24px);
        margin-top: 8px;
      }

      .h { font-size: clamp(22px, 3vw, 28px); font-weight: 800; margin: 0; }
      .p { font-size: clamp(14px, 1.9vw, 18px); line-height: 1.75; opacity:.98; }

      .section { padding-block: 48px; }
      .container { margin: 0 auto; display: grid; gap: 24px; }

      .card {
        border: 1px solid var(--border);
        border-radius: var(--radius);
        background: rgba(255,255,255,0.03);
        padding: 24px 28px;
      }

      .theme-blue {
        background: linear-gradient(0deg, rgba(78,161,255,0.06), rgba(78,161,255,0.00));
      }

      .field { display:grid; gap:6px; }
      .label { font-size:12px; letter-spacing:.06em; opacity:.85; }
      .input, .textarea {
        width:100%;
        padding:12px;
        border-radius:12px;
        border:1px solid var(--border);
        background: rgba(255,255,255,0.04);
        color: var(--fg);
      }
      .textarea { min-height: 140px; resize: vertical; }

      .btn {
        padding: 12px 18px;
        border-radius: 12px;
        border: 1px solid var(--brand);
        background: var(--brand);
        color: #fff;
        font-weight: 700;
        transition: all .25s ease;
        box-shadow: 0 0 20px rgba(91,44,255,0.25);
      }
      .btn:hover {
        filter: brightness(1.1);
        box-shadow: 0 0 25px rgba(78,161,255,0.4);
      }

      .muted { color: var(--muted); }

      .office { display:grid; gap:16px; grid-template-columns: 1.2fr .8fr; align-items:start; }
      @media (max-width: 920px){ .office{ grid-template-columns:1fr; } }
      .map { width:100%; aspect-ratio:16/9; border-radius:12px; object-fit:cover; border:1px solid var(--border); background: rgba(255,255,255,0.04); }
    `}</style>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    const toastId = toast.loading("Sending your message...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "b0c76db3-8bd0-4eed-9c94-d732fcdc6521",
          from_name: "Metropole Capital Group",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully! 🎉", { id: toastId });
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again", { id: toastId });
      }
    } catch (error) {
      toast.error("Network error. Please try again later", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      <PageStyles />

      {/* === HERO === */}
      <section className="section">
        <div className="container contact-hero">
          <h2 className="title">Contact Us</h2>
          <p className="lead">
            Let’s build your next big move together. Whether you're raising capital,
            refining your growth strategy, or exploring alternative funding models —
            we’d love to hear from you.
          </p>
        </div>
      </section>

      {/* === FORM === */}
      <section className="section theme-blue">
        <div className="container">
          <h2 className="h">Send us a message</h2>

          <form className="card" style={{ marginTop: 16 }} onSubmit={handleSubmit}>
            {submitted ? (
              <div className="p" role="status">
                Thank you — your message has been sent! <br />
                We’ll get back to you shortly.
              </div>
            ) : (
              <>
                <div className="field">
                  <label className="label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="field" style={{ marginTop: 10 }}>
                  <label className="label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    className="input"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="field" style={{ marginTop: 10 }}>
                  <label className="label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="textarea"
                    name="message"
                    placeholder="Tell us about your project or question..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={{ marginTop: 18 }}>
                  <button type="submit" className="btn" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>

      {/* === OFFICE INFO === */}
      <section className="section">
        <div className="container">
          <h2 className="h">Phone</h2>

          <div className="card office" style={{ marginTop: 16 }}>
            <div>
              <div className="p">
                <b>Metropole Capital Group</b><br />
              </div>
              <div className="p" style={{ marginTop: 10 }}>
                Phone: <a href="tel:+13104641575">+1 (310) 464-1575</a><br />
              </div>
            </div>

            <img
              className="map"
              src={e1}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
