import React, { useEffect } from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';


function Register() {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        gender:"",
        dob:"",
        age:"",
        password:"",
        confirmPassword:""
    });

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Registered successfully! Redirecting to home page in 5 seconds...");
        setTimeout(() => {
            navigate('/');
        }, 5000);
    };

    return (
        <div className="register-main">
            <div className="register-box">
                <h2 className="register-title">Create Account</h2>
                <p className="register-subtitle">Join us and start your journey</p>

                <form onSubmit={handleSubmit}>
                
                    <h3 className="section-title">Personal Details</h3>
                    <div className="form-grid">
                        <div className="input-box">
                            <label className="input-label">First Name</label>
                            <input type="text" name="firstName" className="input-field" placeholder="First Name" required onChange={handleChange} value={formData.firstName} />
                        </div>
                        <div className="input-box">
                            <label className="input-label">Middle Name</label>
                            <input type="text" name="middleName" className="input-field" placeholder="Middle Name" onChange={handleChange} value={formData.middleName} />
                        </div>
                        <div className="input-box">
                            <label className="input-label">Last Name</label>
                            <input type="text" name="lastName" className="input-field" placeholder="Last Name" required onChange={handleChange} value={formData.lastName} />
                        </div>
                        <div className="input-box">
                            <label className="input-label">Gender</label>
                            <select name="gender" className="input-field" required onChange={handleChange} value={formData.gender}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <label className="input-label">Date of Birth</label>
                            <input type="date" name="dob" className="input-field" required onChange={handleChange} value={formData.dob} />
                        </div>
                        <div className="input-box">
                            <label className="input-label">Age</label>
                            <input type="number" name="age" className="input-field" placeholder="Age" required onChange={handleChange} value={formData.age} />
                        </div>
                    </div>


                    {/* <h3 className="section-title">Contact Information</h3>
                    <div className="form-grid">
                        <div className="input-box">
                            <label className="input-label">Email Address</label>
                            <input type="email" name="email" className="input-field" placeholder="john@example.com" required />
                        </div>
                        <div className="input-box">
                            <label className="input-label">Phone Number</label>
                            <input type="tel" name="phone" className="input-field" placeholder="+1 234 567 8900" />
                        </div>
                    </div> */}

                    <div className="form-grid">
                        <div className="input-box">
                            <label className="input-label">Password</label>
                            <input type="password" name="password" className="input-field" placeholder="••••••••" required />
                        </div>
                        <div className="input-box">
                            <label className="input-label">Confirm Password</label>
                            <input type="password" name="confirmPassword" className="input-field" placeholder="••••••••" required />
                        </div>
                    </div>
                    {/* <h3 className="section-title">Education Details</h3>
                    <div className="form-grid">
                        <div className="input-box">
                            <label className="input-label">Highest Degree</label>
                            <select name="degree" className="input-field" required>
                                <option value="">Select Degree</option>
                                <option value="highschool">High School</option>
                                <option value="bachelor">Bachelor's</option>
                                <option value="master">Master's</option>
                                <option value="phd">PhD</option>
                                <option value="diploma">Diploma</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <label className="input-label">Institution/School</label>
                            <input type="text" name="institution" className="input-field" placeholder="University Name" required />
                        </div>
                        <div className="input-box">
                            <label className="input-box">Year of Passing</label>
                            <input type="number" name="year" className="input-field" placeholder="2023" />
                        </div>
                        <div className="input-box">
                            <label className="input-label">CGPA / Percentage</label>
                            <input type="text" name="percentage" className="input-field" placeholder="8.5 or 85%" />
                        </div>
                    </div> */}

                    <button type="submit" className="register-btn"  >Register Now</button>
                </form>

                {/* <div className="login-link-box">
                    Already have an account? <span onClick={() => navigate('/login')} className="login-link" style={{ cursor: 'pointer' }}>Login here</span>
                </div> */}
            </div>
        </div>
    );
}

export default Register;