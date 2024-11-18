import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './context/Authcontext';
import './Header.css';

function Headers() {
    const { currentUser, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            alert('Logout successful');
        } catch (error) {
            console.error("Logout error", error);
        }
    };

    return (
        <div>
            <header>
                <h1 className='bar'>DEV@Deakin</h1>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button type="button">Search</button>
                    <Link className="log" to="/plans">Plans</Link>
                    <Link className="log" to="/post-question">Post Question</Link>
                    {currentUser ? (
                        <button className="log" onClick={handleLogout}>Logout</button>
                    ) : (
                        <Link className="log" to="/login">Log In</Link>
                    )}
                </div>
            </header>
        </div>
    );
}

export default Headers;
