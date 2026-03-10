import './hero.css';
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Discover the Right <br /> Place for Shopping</h1>
          <p className="hero-subtitle">Experience a world where customers meets designs with quality. Join us on a journey to the My Cart.</p>
          <div className="btn btn-cta">Get Started</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
