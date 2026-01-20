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
        'nav.home': 'Home',
        'nav.products': 'Products',
        'nav.custom': 'Custom Orders',
        'nav.about': 'About',
        'nav.contact': 'Contact',

        // Categories
        'cat.all': 'All Products',
        'cat.decor': 'Home Decor',
        'cat.tech': 'Tech Accessories',
        'cat.figurines': 'Figurines',
        'cat.office': 'Office',
        'cat.custom': 'Custom',

        // Hero
        'hero.title1': 'Transform Your Ideas Into',
        'hero.title2': '3D Reality',
        'hero.description': 'Discover premium 3D printed products crafted with precision and creativity. From home decor to custom designs, we bring your imagination to life.',
        'hero.explore': 'Explore Products',
        'hero.custom': 'Custom Order',

        // Features
        'feature.fast.title': 'Fast Production',
        'feature.fast.desc': 'Quick turnaround on all orders',
        'feature.custom.title': 'Custom Designs',
        'feature.custom.desc': 'Bring your vision to life',
        'feature.quality.title': 'Premium Quality',
        'feature.quality.desc': 'High-quality materials & finish',

        // Products
        'products.title': 'Featured ',
        'products.titleHighlight': 'Products',
        'products.description': 'Explore our curated collection of premium 3D printed items',
        'product.quickView': 'Quick View',
        'product.addToCart': 'Add to Cart',

        // Product Names
        'product.vase': 'Geometric Gradient Vase',
        'product.dragon': 'Articulated Dragon Figurine',
        'product.phoneStand': 'Modern Phone Stand',
        'product.planter': 'Hexagonal Succulent Planter',
        'product.organizer': 'Modular Desk Organizer',
        'product.robot': 'Rainbow Articulated Robot',

        // Custom Section
        'custom.title1': 'Need Something ',
        'custom.title2': 'Custom',
        'custom.description': 'We can bring any design to life! Share your idea and our team will create a personalized 3D printed masterpiece just for you.',
        'custom.button': 'Request Custom Order',

        // Footer
        'footer.tagline': 'Premium 3D Printed Creations',
        'footer.contact': 'Contact',
        'footer.email': '📧 info@3dprintshop.ge',
        'footer.follow': 'Follow Us',
        'footer.copyright': '© 2026 3DPrintShop. All rights reserved.',
    },
    ka: {
        // Header
        'header.location': '📍 თბილისი, საქართველო',
        'header.phone': '📞 +995 555 123 456',
        'header.cart': '🛒 კალათა',
        'header.logo': '3D პრინტშოპი',
        'header.tagline': 'პრემიუმ 3D ბეჭდვითი პროდუქცია',
        'nav.home': 'მთავარი',
        'nav.products': 'პროდუქტები',
        'nav.custom': 'ინდივიდუალური შეკვეთა',
        'nav.about': 'ჩვენ შესახებ',
        'nav.contact': 'კონტაქტი',

        // Categories
        'cat.all': 'ყველა პროდუქტი',
        'cat.decor': 'სახლის დეკორი',
        'cat.tech': 'ტექ აქსესუარები',
        'cat.figurines': 'ფიგურები',
        'cat.office': 'ოფისი',
        'cat.custom': 'ინდივიდუალური',

        // Hero
        'hero.title1': 'გადააქციე შენი იდეები',
        'hero.title2': '3D რეალობად',
        'hero.description': 'აღმოაჩინე პრემიუმ 3D დაბეჭდილი პროდუქტები, შექმნილი სიზუსტით და კრეატიულობით. სახლის დეკორიდან ინდივიდუალურ დიზაინამდე, ჩვენ ვაცოცხლებთ შენს წარმოსახვას.',
        'hero.explore': 'პროდუქტების ნახვა',
        'hero.custom': 'ინდივიდუალური შეკვეთა',

        // Features
        'feature.fast.title': 'სწრაფი წარმოება',
        'feature.fast.desc': 'ყველა შეკვეთის სწრაფი შესრულება',
        'feature.custom.title': 'ინდივიდუალური დიზაინი',
        'feature.custom.desc': 'გააცოცხლე შენი ხედვა',
        'feature.quality.title': 'პრემიუმ ხარისხი',
        'feature.quality.desc': 'მაღალი ხარისხის მასალა და დასრულება',

        // Products
        'products.title': 'გამორჩეული ',
        'products.titleHighlight': 'პროდუქტები',
        'products.description': 'დაათვალიერე ჩვენი პრემიუმ 3D დაბეჭდილი ნივთების კოლექცია',
        'product.quickView': 'სწრაფი ნახვა',
        'product.addToCart': 'კალათაში დამატება',

        // Product Names
        'product.vase': 'გეომეტრიული გრადიენტიანი ვაზა',
        'product.dragon': 'მოძრავი დრაკონის ფიგურა',
        'product.phoneStand': 'თანამედროვე ტელეფონის სადგამი',
        'product.planter': 'ექვსკუთხა სუკულენტის ქოთანი',
        'product.organizer': 'მოდულური მაგიდის ორგანაიზერი',
        'product.robot': 'ცისარტყელის მოძრავი რობოტი',

        // Custom Section
        'custom.title1': 'გჭირდება რაღაც ',
        'custom.title2': 'ინდივიდუალური',
        'custom.description': 'ჩვენ შეგვიძლია ნებისმიერი დიზაინის გაცოცხლება! გაგვიზიარე შენი იდეა და ჩვენი გუნდი შექმნის პერსონალიზებულ 3D დაბეჭდილ შედევრს.',
        'custom.button': 'ინდივიდუალური შეკვეთა',

        // Footer
        'footer.tagline': 'პრემიუმ 3D ბეჭდვითი პროდუქცია',
        'footer.contact': 'კონტაქტი',
        'footer.email': '📧 info@3dprintshop.ge',
        'footer.follow': 'გამოგვყევი',
        'footer.copyright': '© 2026 3D პრინტშოპი. ყველა უფლება დაცულია.',
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
