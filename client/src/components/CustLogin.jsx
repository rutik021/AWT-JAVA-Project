import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CustLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3003/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === 'Success') {
                    console.log('Login Success');
                    alert('Login successful!');
                    navigate('/home');
                } else {
                    alert('Incorrect password! Please try again.');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="login-container" data-aos="zoom-in">
            <div className="login-card" style={{ width: '30%' }}>
                <h2 className="login-header text-primary">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            <strong>Email Id</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control login-input"
                            id="exampleInputEmail1"
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="form-control login-input"
                            id="exampleInputPassword1"
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary login-button">Login</button>
                </form>
                <p className="container my-2">Dont have an account? <Link to="/register" className="btn btn-secondary">Register</Link></p>
            </div>
        </div>
    );
}

export default CustLogin;
