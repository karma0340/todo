import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul className="footer-links">
            <li>tyagithings@gmail.com</li>
            <li>+91-8353056908</li>
            <li>Sector 70, Mohali, Punjab</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 The Dev's Space. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
