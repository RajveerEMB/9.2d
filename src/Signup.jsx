// Signup.jsx
import React, { useState } from 'react';
import { useAuth } from './context/Authcontext';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!password) {
            return setError('Password cannot be empty.');
        }
        try {
            setError('');
            await signup(email, password);
            navigate('/login');
        } 
        catch (err) {
            setError(err.message);
        } 
    };

    return (
        <div className="body">
            <h1>Create Your First Dev@Deakin Account</h1>
            {error && <div className="alert">{error}</div>}
            <form onSubmit={handleSubmit}>
                <label>NAME*</label>
                <input className='input' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <label>Email*</label>
                <input className='input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Password*</label>
                <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className="button" type="submit">Sign up</button>
            </form>
            <div className="acc">
                Already have an account? <Link to="/login">Log In !!</Link>
            </div>
        </div>
    );
};

export default Signup;
