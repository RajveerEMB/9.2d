// App.js
import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Headers from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/Authcontext';
import Payment from './Payment';
import PricingPlans from './PricingPlans';
import PostQuestion from './PostQuestion';

function App() {
    return (
        <AuthProvider>
            <div className="container">
                <Router>
                    <Routes>
                        <Route path="/" element={<Headers />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/plans" element={<PricingPlans/>} /> 
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/post-question" element={<PostQuestion />} />
                    </Routes>
                </Router>
            </div>
        </AuthProvider>
    );
}

export default App;
