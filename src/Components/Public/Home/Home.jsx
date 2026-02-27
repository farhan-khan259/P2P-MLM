import './Home.css';

function Home() {
  return (
    <div>
      <section className="home-banner">
        <div className="home-banner-text">WELCOME</div>
      </section>

      <section className="home-feature-row">
        <div className="home-feature home-blue">
          <h3>Register</h3>
          <p>Choose your favorite plan and join with profit steps.</p>
        </div>
        <div className="home-feature home-orange">
          <h3>Invite Friends</h3>
          <p>Expand your plan and earn money with your friends.</p>
        </div>
        <div className="home-feature home-green">
          <h3>Success</h3>
          <p>Get rewards with successful milestone achievement.</p>
        </div>
      </section>

      <section className="public-page">
        <div className="public-container home-welcome-card">
          <div className="home-welcome-image" aria-hidden="true" />
          <div>
            <p className="home-welcome-kicker">Welcome To</p>
            <h2>P2P Investment</h2>
            <p>
              This platform has been started because in this time many people business have small speed and
              many people jobs have less income. A small dose of yours by joining this system can help many
              families.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
