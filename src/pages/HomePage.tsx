import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function HomePage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const openPanel = () => {
    if (user) {
      navigate("/panel");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    document.title = "Aawaz Nodes - Free Minecraft Hosting";
  }, []);

  return (
    <div style={{ background: "#050d19", color: "white", overflowX: "hidden", minHeight: "100vh" }}>
      <style>{`
        .home-body { margin: 0; }
        .home-nav {
          height: 75px; display: flex; align-items: center; justify-content: space-between;
          padding: 0 6%; background: #071322; border-bottom: 1px solid #182d48;
          position: sticky; top: 0; z-index: 10;
        }
        .home-logo { display: flex; align-items: center; gap: 12px; }
        .home-logo p { font-size: 11px; color: #8ca5c4; }
        .home-links a { margin: 15px; color: #9bb0ca; text-decoration: none; cursor: pointer; }
        .home-links a:hover { color: #ff9b45; }
        .home-btn {
          padding: 12px 25px; border: 0; border-radius: 7px; cursor: pointer;
          font-weight: bold; font-size: 14px; transition: transform .2s, opacity .2s;
        }
        .home-btn:hover { transform: translateY(-2px); opacity: .9; }
        .home-btn:active { transform: translateY(0); }
        .home-btn-primary { background: #ff9b45; color: #071322; }
        .home-btn-secondary { background: #12243c; color: white; margin-left: 10px; }
        .home-hero {
          padding: 90px 6%; display: grid; grid-template-columns: 1fr 1fr;
          gap: 50px; align-items: center;
        }
        .home-hero h1 { font-size: 55px; line-height: 1.1; margin: 20px 0; }
        .home-hero p { color: #91a8c7; line-height: 1.7; }
        .home-dash {
          background: #091a30; border: 1px solid #23415f; border-radius: 15px;
          overflow: hidden;
        }
        .home-dash-head { padding: 18px; border-bottom: 1px solid #23415f; color: #45df89; font-weight: bold; }
        .home-stats { display: grid; grid-template-columns: repeat(3, 1fr); }
        .home-stats div { padding: 25px; text-align: center; border-right: 1px solid #23415f; }
        .home-stats div:last-child { border-right: 0; }
        .home-stats small { color: #8097b4; }
        .home-console { padding: 25px; background: #020811; height: 130px; color: #4be38b; font-size: 13px; font-family: monospace; }
        .home-section { padding: 90px 6%; }
        .home-center { text-align: center; }
        .home-center h2 { font-size: 35px; margin: 15px; }
        .home-center p { color: #91a8c7; }
        .home-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 40px; }
        .home-card {
          background: #091a30; padding: 30px; border: 1px solid #203b59;
          border-radius: 12px; transition: .4s;
        }
        .home-card:hover { transform: translateY(-10px); border-color: #ff9b45; }
        .home-card p { color: #91a8c7; margin-top: 15px; }
        .home-team { display: flex; justify-content: center; gap: 20px; }
        .home-member { background: #091a30; padding: 30px; border-radius: 12px; text-align: center; border: 1px solid #203b59; }
        .home-avatar { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #ff9b45, #fff); margin: auto; }
        .home-footer { padding: 50px 6%; border-top: 1px solid #203b59; color: #91a8c7; }
        .home-badge { color: #ff9b45; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
        @media (max-width: 800px) {
          .home-hero { grid-template-columns: 1fr; }
          .home-cards { grid-template-columns: 1fr; }
          .home-links { display: none; }
          .home-hero h1 { font-size: 38px; }
        }
      `}</style>

      <nav className="home-nav">
        <div className="home-logo">
          <svg viewBox="0 0 100 100" width="42">
            <rect width="100" height="100" rx="20" fill="#ff9b45" />
            <path d="M25 70L50 20L75 70H60L50 45L40 70Z" fill="#071322" />
          </svg>
          <div>
            <h3>Aawaz Nodes</h3>
            <p>Minecraft Hosting</p>
          </div>
        </div>
        <div className="home-links">
          <a onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>Hosting</a>
          <a onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>Features</a>
          <a onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}>Team</a>
        </div>
        <button className="home-btn home-btn-primary" onClick={openPanel}>Start Free</button>
      </nav>

      <div className="home-hero">
        <div>
          <div className="home-badge">FREE MINECRAFT HOSTING</div>
          <h1>Powerful Minecraft servers made simple.</h1>
          <p>Create, manage and control your Minecraft server with a modern dashboard built for gamers.</p>
          <br />
          <button className="home-btn home-btn-primary" onClick={openPanel}>Create Account</button>
          <button className="home-btn home-btn-secondary" onClick={openPanel}>Dashboard</button>
        </div>
        <div className="home-dash">
          <div className="home-dash-head">AAWAZ CONSOLE</div>
          <div className="home-stats">
            <div><h2>4GB</h2><small>RAM</small></div>
            <div><h2>60GB</h2><small>Storage</small></div>
            <div><h2>125%</h2><small>CPU</small></div>
          </div>
          <div className="home-console">
            &gt; Server starting...<br />
            &gt; Loading world...<br />
            &gt; Server online.
          </div>
        </div>
      </div>

      <section className="home-section" id="features">
        <div className="home-center">
          <h2>Everything you need</h2>
          <p>Professional tools for Minecraft hosting</p>
        </div>
        <div className="home-cards">
          <div className="home-card"><h3>Instant Setup</h3><p>Create servers within seconds.</p></div>
          <div className="home-card"><h3>Full Control</h3><p>Manage files and console easily.</p></div>
          <div className="home-card"><h3>Plugins Support</h3><p>Run your favourite plugins.</p></div>
          <div className="home-card"><h3>Secure Nodes</h3><p>Reliable hosting infrastructure.</p></div>
        </div>
      </section>

      <section className="home-section" id="team">
        <div className="home-center"><h2>Meet Our Team</h2></div>
        <br />
        <div className="home-team">
          <div className="home-member">
            <div className="home-avatar"></div>
            <h3>Nischal Adhikari</h3>
            <p>Founder</p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <h3>Aawaz Nodes</h3>
        <p>Modern Minecraft hosting platform.</p>
      </footer>
    </div>
  );
}
