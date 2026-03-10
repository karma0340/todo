import { useNavigate } from 'react-router-dom';
import './header.css';
// import logoImg from '../../assets/code-logo.png';
import logoImg from '../../assets/furniturelogo.png';

function Header() {
    const navigate = useNavigate();

    return (
        <header className="navbar">
            <div className="container nav-container">
                <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    <img src={logoImg} alt="Logo" className="logo-img" />
                    <span className="logo-text">My Cart</span>
                </div>

                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <label htmlFor="nav-toggle" className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </label>
                <nav className="nav-menu">
                    <ul className="nav-list">
                        <li><span className="nav-item" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</span></li>
                        <li><span className="nav-item" onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>About</span></li>
                        <li><span className="nav-item" onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>Contact</span></li>
                        <li><span className="nav-item" onClick={() => navigate('/services')} style={{ cursor: 'pointer' }}>Services</span></li>
                    </ul>

                    <div className="auth-buttons">
                        <button className="btn-cart" onClick={() => navigate('/cart')} style={{ cursor: 'pointer', background: 'none' }}>Cart</button>
                        
                        <button className="btn-login" onClick={() => navigate('/login')} style={{ cursor: 'pointer', background: 'none' }}>Login</button>
                        <button className="btn-register" onClick={() => navigate('/register')} style={{ cursor: 'pointer', border: 'none' }}>Register</button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;





