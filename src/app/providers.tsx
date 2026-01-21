'use client';

import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import CartDrawer from './components/CartDrawer';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <AuthProvider>
                    <CartProvider>
                        {children}
                        <CartDrawer />
                    </CartProvider>
                </AuthProvider>
            </ThemeProvider>
        </LanguageProvider>
    );
}
