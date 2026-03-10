import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        alert("Login successful! Redirecting to home page in 5 seconds...");
        setTimeout(() => {
            navigate('/');
        }, 5000);
    };
    return (
        <div className="login-main">
            <div className="login-box">
                <h2 className="login-title">Welcome Back</h2>
                <p className="login-subtitle">Please login to your account</p>

                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label className="input-label">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            className="text-field"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label className="input-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="text-field"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* <div className="login-options">
                        <div className="checkbox-wrap">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember" className="remember-text">Remember me</label>
                        </div>
                        <a href="#" className="forgot-link">Forgot Password?</a>
                    </div> */}

                    <button type="submit" className="login-btn">Login</button>
                </form>

                <div className="register-link-box">
                    Don't have an account? <span onClick={() => navigate('/register')} className="register-link" style={{ cursor: 'pointer' }}>Register here</span>
                </div>
            </div>
        </div>
    );
}

export default Login;
