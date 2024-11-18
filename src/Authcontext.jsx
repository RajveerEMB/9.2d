// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../utills/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return (
        <Authcontext.Provider value={{ currentUser, login, signup, logout }}>
            {children}
        </Authcontext.Provider>
    );
};

export const useAuth = () => {
    return useContext(Authcontext);
};

export async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export async function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export async function logout() {
    return signOut(auth);
}
