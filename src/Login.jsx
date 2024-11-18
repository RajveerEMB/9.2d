// Login.jsx
import React, { useState } from 'react';
import { useAuth } from './context/Authcontext';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { currentUser, login, logout } = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleCheck(e) {
        e.preventDefault();
        try {
            setError('');
            alert('Logout successful');
            await login(email, password);
            navigate('/');
        } 
        catch (error) {
            setError(error.message);
        }
    }

    async function handleLogout() {
        try {
            await logout();
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className='body'>
            <h1>Log In</h1>
            {error && <div className="alert">{error}</div>}
            <form onSubmit={handleCheck}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className="button" type="submit">LOGIN</button>
            </form>
            {currentUser ? (<button className="button" onClick={handleLogout}>Logout</button>) 
            : (<div className="account">
                    Create an Account? <Link to="/signup">Sign Up</Link>
                </div>)}
        </div>
    );
}
