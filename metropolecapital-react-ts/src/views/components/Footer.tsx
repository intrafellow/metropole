// src/components/Footer.tsx
import logo from "../../assets/ic.png";
import "@styles/footer.css";

export default function Footer() {
  return (
    <footer className="mcg-footer" aria-label="Site footer">
      {/* Синяя полоса: только лого */}
      <div className="mcg-footer__top">
        <div className="mcg-container">
          <div className="mcg-footer__top--logo">
            <img src={logo} alt="Metropole Capital Group" className="mcg-footer__logo" />
          </div>
        </div>
      </div>

      {/* Disclaimer + Copyright (как прислали) */}
      <div className="mcg-footer__disclaimer">
        <div className="mcg-container">
          <p className="mcg-footer__muted">
            DISCLAIMER: We are not a law firm, provider of capital, accountants or registered brokers and our report and any suggestions will be provided for general information and educational purposes only. Your use of any of our documents at your own risk, and you should not use any of these documents without first seeking legal and other professional advice. The provision of our reports, documents and seminars do not constitute legal advice or opinions of any kind, or any advertising or solicitation.
          </p>
          <p className="mcg-footer__muted">
            No lawyer-client, advisory, fiduciary or other relationship is created between Metropole Capital Group and any person accessing or otherwise using any of our documents and informational material.
          </p>
          <p className="mcg-footer__muted">
            Metropole Capital Group, its partners and its affiliates (and any of their respective directors, officers, agents, contractors, interns, suppliers and employees) will not be liable for any damages, losses or causes of action of any nature arising from any use of any of the reports, informational documents or seminars.
          </p>

          <p className="mcg-footer__copyright">
            <span className="mcg-footer__copyright-badge">
              © 2025 METROPOLE CAPITAL GROUP
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
