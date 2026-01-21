'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
    email: string;
    name: string;
}

interface AuthContextType {
    user: User | null;
    signIn: (email: string) => void;
    signUp: (email: string, name: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    // Load user from local storage
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (e) {
                console.error('Failed to parse user', e);
            }
        }
    }, []);

    // Save user to local storage
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const signIn = (email: string) => {
        // Mock sign in - in real app would validate against API
        // For now, simple mock user
        const mockUser: User = {
            email,
            name: email.split('@')[0] // Simple name derivation
        };
        setUser(mockUser);
    };

    const signUp = (email: string, name: string) => {
        const newUser: User = { email, name };
        setUser(newUser);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            user,
            signIn,
            signUp,
            logout,
            isAuthenticated: !!user
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
}
