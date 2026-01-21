'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ka';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
    en: {
        // Header
        'header.location': '📍 Tbilisi, Georgia',
        'header.phone': '📞 +995 555 123 456',
        'header.cart': '🛒 Cart',
        'header.logo': '3DPrintShop',
        'header.tagline': 'Premium 3D Printed Creations',
        'nav.shop': 'Shop',
        'nav.track': 'Track Order',
        'nav.contact': 'Contact',

        // Categories
        'cat.all': 'All Products',

        // Hero
        'hero.title': 'Minimal 3D Design',
        'hero.subtitle': 'Precision in every layer.',

        // Products
        'products.title': 'The Collection',
        'product.buy': 'Buy Now',

        // Track Order
        'track.title': 'Track Your Order',
        'track.placeholder': 'Enter Order ID',
        'track.button': 'Track',
        'track.notfound': 'Order not found.',

        // Footer
        'footer.copyright': '© 2026 Minimalist 3D. All rights reserved.',
    },
    ka: {
        // Header
        'header.logo': '3D პრინტშოპი',
        'nav.shop': 'მაღაზია',
        'nav.track': 'შეკვეთის თვალყური',
        'nav.contact': 'კონტაქტი',

        // Categories
        'cat.all': 'ყველა პროდუქტი',

        // Hero
        'hero.title': 'მინიმალისტური 3D დიზაინი',
        'hero.subtitle': 'სიზუსტე თითოეულ ფენაში.',

        // Products
        'products.title': 'კოლექცია',
        'product.buy': 'ყიდვა',

        // Track Order
        'track.title': 'თვალყური ადევნე შეკვეთას',
        'track.placeholder': 'შეიყვანეთ შეკვეთის ID',
        'track.button': 'ძებნა',
        'track.notfound': 'შეკვეთა ვერ მოიძებნა.',

        // Footer
        'footer.copyright': '© 2026 Minimalist 3D. ყველა უფლება დაცულია.',
    },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('ka'); // Default to Georgian

    useEffect(() => {
        // Load saved language preference
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'en' || savedLang === 'ka')) {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string): string => {
        const langData = translations[language] as Record<string, string>;
        return langData[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
