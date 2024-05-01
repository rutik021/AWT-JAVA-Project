import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CustRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3003/register', { name, email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                }
                else {
                    alert("Registered successfully! Please Login to proceed.")
                    navigate('/login');
                }

            })
            .catch(err => console.log(err));
    }

    return (
        <div className="login-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="login-card" style={{ width: '30%' }}>
                <h2 className="login-header text-primary">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                        <label htmlFor="name" className="form-label">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control login-input"
                            id="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="email" className="form-label">
                            <strong>Email Id</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control login-input"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="password" className="form-label">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="form-control login-input"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <p className="container my-2">Already have an account? <Link to="/login" className="btn btn-secondary">Login</Link></p>
            </div>
        </div>
    )
}

export default CustRegister;
