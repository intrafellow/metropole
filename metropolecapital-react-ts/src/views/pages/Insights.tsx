import "@styles/home.css";
import book1 from "../../assets/book1.jpg";

export default function Insights() {
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
          <h2 className="title">Insights</h2>
          <p className="lead">
            Articles, essays, and sharp commentary. Books, reports and practical frameworks for founders and capital partners.
          </p>
        </div>
      </section>

      {/* === BOOK === */}
      <section className="section theme-purple">
        <div className="container">
          <h2 className="h">A book by our founder, on smart funding for innovators</h2>
          <div className="card book-block">
            <img src={book1} alt="Raise and Rise: Funding Sources for Your Startup" className="cover" />
            <div>
              <p className="p">
                <strong>Raise and Rise</strong> is a goldmine of in-depth knowledge on modern capital sources and funding tools for startups.
                It covers venture capital, crowdfunding (including blockchain-based), royalty financing, family offices, and angel investors.
              </p>
              <p className="p" style={{ marginTop: 10 }}>
                <strong>Key Topics Include:</strong>
              </p>
              <ul className="p">
                <li>How the digital economy works</li>
                <li>Why obtaining funding for a startup is so difficult</li>
                <li>Who really controls the global money supply</li>
                <li>Why Silicon Valley became the world’s most powerful startup hub</li>
                <li>How venture capitalists make investment decisions</li>
                <li>Which type of crowdfunding makes the most sense for your venture</li>
                <li>How to raise capital without giving up equity</li>
                <li>Whether you can raise funds through issuing your own cryptocurrency</li>
                <li>Why building a platform can be a game-changer</li>
                <li>How to make the most meaningful impact with your venture</li>
              </ul>
<div style={{ marginTop: 24, textAlign: "center" }}>

  <a
    href="https://www.amazon.com/Raise-Rise-Funding-Transformation-Blockchain-ebook/dp/B08H1CYCMY/"
    target="_blank"
    rel="noopener noreferrer"
    className="amazon-btn"
  >
    Find <strong>Raise and Rise</strong> on Amazon
  </a>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* === ARTICLES === */}
<section className="section">
  <div className="container">
    <h2 className="h">Articles by the Founder</h2>

    <div className="articles-grid">
      <div className="card">
        <p className="h5"><strong>Cryptocurrencies are Here to Stay: Dubai Has Spoken</strong></p>
        <p className="p">“Is the future of cryptocurrencies gold or dust?” Reflections from the World Government Summit in Dubai.</p>
        <p className="p"><a href="https://www.crowdfundinsider.com/2018/02/128684-cryptocurrencies-stay-dubai-spoken/"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

      <div className="card">
        <p className="h5"><strong>World Funding Summit Wrap Up: A Discussion with Victoria Silchenko on the Future of Finance</strong></p>
        <p className="p">A discussion about the evolution of fintech and funding at the World Funding Summit in Los Angeles.</p>
        <p className="p"><a href="https://www.crowdfundinsider.com/2017/12/126126-world-funding-summit-wrap-discussion-victoria-silchenko-future-finance/"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

      <div className="card">
        <p className="h5"><strong>Eyes Wide Shut: ICOs as a New Path to Startup Fundraising (Password Required)</strong></p>
        <p className="p">A definitive guide to ICOs, their risks, and how self-regulation is shaping the new fundraising landscape.</p>
        <p className="p"><a href="https://www.crowdfundinsider.com/2017/07/119526-eyes-wide-shut-icos-new-path-startup-fundraising-password-required/"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

      <div className="card">
        <p className="h5"><strong>Equity Crowdfunding is Here … And it’s Total BS</strong></p>
        <p className="p">A provocative essay on how equity crowdfunding challenges traditional finance and investor behavior.</p>
        <p className="p"><a href="https://www.crowdfundinsider.com/2017/01/95007-equity-crowdfunding-total-bs/"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

      <div className="card">
        <p className="h5"><strong>Equity Crowdfunding Evangelist Victoria Silchenko: We Have Witnessed Unprecedented Growth in Alternative Finance</strong></p>
        <p className="p">An interview exploring the rapid rise of alternative finance and global fintech transformation.</p>
        <p className="p"><a href="https://www.crowdfundinsider.com/2016/11/92032-equity-crowdfunding-evangelist-victoria-silchenko-witnessed-unprecedented-growth-alternative-finance/"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

      <div className="card">
        <p className="h5"><strong>Raise Funds from the Public Without Going Public &amp; May the 16th Be With You!</strong></p>
        <p className="p">For the first time since 1933, SEC regulations allow privately-held companies to raise capital from the general public in exchange for companies’ shares – something that was only previously possible via the traditional path of an IPO.</p>
        <p className="p"><a href="https://www.crowdfundinsider.com/2016/05/85647-raise-funds-from-the-public-without-going-public-may-the-16th-be-with-you/"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

      <div className="card">
        <p className="h5"><strong>Regulation A+: Beyond the Hype and What’s Next</strong></p>
        <p className="p">Recently I’ve been noticing a lot of hype in the entrepreneurial community regarding Reg A+ and there have been a lot of cheerful pitches about the new regulation that would allow young companies “to raise up to $50 million without the expense and complexity of a traditional IPO”.</p>
        <p className="p"><a href="https://www.crowdfundinsider.com/2015/10/75554-regulation-a-beyond-the-hype-and-whats-next/"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

      <div className="card">
        <p className="h5"><strong>Start-ups Wars: The New Financing Force Awakens in 2016</strong></p>
        <p className="p">2016 marks the start of a new era in venture financing and capital formation and if you are an entrepreneur searching the galaxy for capital, well, to borrow a Star Wars saying - May the Force be With You.</p>
        <p className="p"><a href="https://www.huffpost.com/entry/startups-wars-the-new-fin_b_8878402"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

      <div className="card">
        <p className="h5"><strong>There's a New-Old Sheriff in Town: Royalty Financing for Young Ventures</strong></p>
        <p className="p">Do you remember that story from the early '90s when Arthur Fox pioneered royalty financing as a new form of venture capital? No, me neither. But the fact is that's when we got the first revenue based financing model operating here...</p>
        <p className="p"><a href="https://www.huffpost.com/entry/theres-a-newold-sheriff-i_b_9295908"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

      <div className="card">
        <p className="h5"><strong>So You Think You Can Invest: The Reality of Equity Crowdfunding Under a New Rule</strong></p>
        <p className="p">If anything, May 16th, 2016 should be opened with the ringing of a bell, similar to the one at the New York Stock Exchange (NYSE),...</p>
        <p className="p"><a href="https://www.huffpost.com/entry/so-you-think-you-can-inve_b_9415392"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

             <div className="card">
        <p className="h5"><strong>Confessions of Venture Capitalists: How to Milk a Unicorn</strong></p>
        <p className="p">Those who wonder what the hell is going on with the accelerating number of startups getting billion-dollar valuations and above, please raise MY hand.</p>
        <p className="p"><a href="https://www.huffpost.com/entry/confessions-of-venture-ca_b_8137356"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

                   <div className="card">
        <p className="h5"><strong>Pot Investments Versus Angel Investments: It is Time to Worry, Ladies and Gentlemen.</strong></p>
        <p className="p">The devil is in the data. How else do you explain the fact that $23.3 billion was invested in the marijuana penny stock market last year -- almost as much as the $24.1 billion total of angel investments over the same period.</p>
        <p className="p"><a href="https://www.huffpost.com/entry/pot-investments-versus-an_b_7830006"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

                         <div className="card">
        <p className="h5"><strong>IPO for All or How to Create Your Own Currency</strong></p>
        <p className="p">Okay, let me state upfront that I am completely biased when it comes to running a compelling business: for I believe if you happen to live in the 21st century, your company's stock should be worth money, and you should be able to turn around and sell it.</p>
        <p className="p"><a href="https://www.huffpost.com/entry/ipo-for-all-or-how-to-cre_b_7651438"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

                               <div className="card">
        <p className="h5"><strong>So You Think You Can Go Public? (Re)Meet the OTC</strong></p>
        <p className="p">I believe, if you run a modern company, your stock options should be worth money and you should be able to turn around and sell or exercise them. In other words, your company stocks should be able to become your own currency.</p>
        <p className="p"><a href="https://www.huffpost.com/entry/so-you-think-you-can-go-p_b_7433654"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

                                     <div className="card">
            <p className="h5"><strong>Fifty Shades of White: Raising Equity from the Public by Start-ups</strong></p>
        <p className="p">Curious? I don't blame you - especially if you are an entrepreneur or an indie-producer in search of capital and have been patiently waiting for the JOBS act rules to come to life. In a rather surprising recent move, the Securities and Exchange Commission (SEC) chaired by...</p>
        <p className="p"><a href="https://www.huffpost.com/entry/fifty-shades-of-white-rai_b_6966268"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

       <div className="card">
            <p className="h5"><strong>Equity Crowdfunding Is Dead -- Long Live Equity Crowdfunding</strong></p>
        <p className="p">In life, whatever it is we are seeking will not arrive in the form we are expecting. Such is the case with raising equity in a post JOBS Act market -- something that fascinated but at the same time confused many business owners.</p>
        <p className="p"><a href="https://www.huffpost.com/entry/equity-crowdfunding-is-de_b_6813872"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

             <div className="card">
            <p className="h5"><strong>How to Raise Capital But Preserve Your Equity: Royalty Based Crowdfunding (Interview With Arthur Lipper)</strong></p>
        <p className="p">With nowadays technology which keeps simplifying revenue management while making crowdfunding platforms as commodities, I believe royalty based crowdfunding is set to be one of the most popular models in the next two-three years.</p>
        <p className="p"><a href="https://www.huffpost.com/entry/how-to-raise-capital-but_b_6253304"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

             <div className="card">
            <p className="h5"><strong>How to Fund Your Startup -- With VCs, Angels and Crowdinvesting</strong></p>
        <p className="p">How to Fund Your Startup -- With VCs, Angels and Crowdinvesting</p>
        <p className="p"><a href="https://www.huffpost.com/entry/how-to-fund-your-startup_b_6097734"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

             <div className="card">
            <p className="h5"><strong>The King's Speech  Writer David Seidler Speaks About Crowdfunding</strong></p>
        <p className="p">Writer David Seidler Speaks About Crowdfunding</p>
        <p className="p"><a href="https://www.huffpost.com/entry/the-kings-speech-writer-d_b_4314890"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

             <div className="card">
            <p className="h5"><strong>Who Let the Dog Out: On New Crowdfunding Rules and Why It Is Time for Us to Wise Up</strong></p>
        <p className="p">Who Let the Dog Out: On New Crowdfunding Rules and Why It Is Time for Us to Wise Up</p>
        <p className="p"><a href="https://www.huffpost.com/entry/who-let-the-dog-out-on-ne_b_4215647"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

             <div className="card">
            <p className="h5"><strong>Equity Crowdfunding and Advertising: Be Careful What You Wish For</strong></p>
        <p className="p">Equity Crowdfunding and Advertising: Be Careful What You Wish For</p>
        <p className="p"><a href="https://www.huffpost.com/entry/equity-crowdfunding-and-a_b_3602770"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

                   <div className="card">
            <p className="h5"><strong>In Crowd We Trust: My Trip to the White House 'Champions of Change' Ceremony for Crowdfunding Pioneers</strong></p>
        <p className="p">In Crowd We Trust: My Trip to the White House 'Champions of Change' Ceremony for Crowdfunding Pioneers</p>
        <p className="p"><a href="https://www.huffpost.com/entry/in-crowd-we-trust-my-trip_b_3419250"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

                   <div className="card">
            <p className="h5"><strong>Equity Crowdfunding: Next Generation of Angel Investors Is Not Sorry to Disrupt</strong></p>
        <p className="p">Equity Crowdfunding: Next Generation of Angel Investors Is Not Sorry to Disrupt</p>
        <p className="p"><a href="https://www.huffpost.com/entry/equity-crowdfunding-next_b_3220914"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

                         <div className="card">
            <p className="h5"><strong>Shift Happens: Social Impact of Crowdfunding and Why You Matter</strong></p>
        <p className="p">Crowdfunding has fulfilled the need of fairness and compassion in our debt-ridden society, confirming that everyone can make a difference.</p>
        <p className="p"><a href="https://www.huffpost.com/entry/shift-happens-social-impa_b_3067048"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

                         <div className="card">
            <p className="h5"><strong>On Creativeness and Why Crowdfunding Will Surpass the VC industry</strong></p>
        <p className="p">According to the Kickstarter's data, there was $274 billion collected last year (+238 percent from 2011). In comparison, VC's invested $26.5 billion in 2012 (-10 percent from 2011). Do you see the difference?</p>
        <p className="p"><a href="https://www.huffpost.com/entry/on-creativeness-and-why-c_b_2851033"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

                         <div className="card">
            <p className="h5"><strong>Conscience Is In, Greed Is Out and Crowdfunding Is On</strong></p>
        <p className="p">For most entrepreneurs crowdfunding is not just an option anymore. It is a necessity. And as we all know, necessity is the mother of invention. Stay tuned.</p>
        <p className="p"><a href="https://www.huffpost.com/entry/crowdfunding-small-business_b_2625282"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>

                         <div className="card">
            <p className="h5"><strong>Crowdfunding Is Not an F-word</strong></p>
        <p className="p">Equity crowdfunding (or crowdfund investing) is not operational and not legitimate in the United States yet and for those who are growing comfortable with the concept, there are three essential facts to remember.</p>
        <p className="p"><a href="https://www.huffpost.com/entry/crowdfunding_b_2275160"
            className="card-link"
    target="_blank"
    rel="noopener noreferrer"></a></p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
