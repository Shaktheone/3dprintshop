'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import styles from './Header.module.css';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { openCart, itemCount } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.mainHeader}>
          <div className={styles.logo}>
            <h1 className={styles.logoText}>
              <span className={styles.minimal}>3D</span> {language === 'ka' ? 'პრინტ' : 'Print'}
            </h1>
          </div>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <a href="/#shop" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{t('nav.shop')}</a>
            <a href="/#track" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{t('nav.track')}</a>
            <a href="/#contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a>
          </nav>

          <div className={styles.actions}>
            <div className={styles.languageSwitcher}>
              <button
                className={`${styles.langBtn} ${language === 'ka' ? styles.active : ''}`}
                onClick={() => setLanguage('ka')}
              >
                ქარ
              </button>
              <button
                className={`${styles.langBtn} ${language === 'en' ? styles.active : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '●' : '○'}
            </button>

            {isAuthenticated ? (
              <Link href="/account" className={styles.iconLink} aria-label="Account">
                👤
              </Link>
            ) : (
              <Link href="/auth/signin" className={styles.iconLink} aria-label="Sign In">
                🔑
              </Link>
            )}

            <button
              className={styles.cart}
              onClick={openCart}
            >
              <span className={styles.cartIcon}>🛒</span>
              {itemCount > 0 && <span className={styles.badge}>{itemCount}</span>}
            </button>
          </div>

          <button
            className={`${styles.menuToggle} ${isMenuOpen ? styles.menuActive : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      {isMenuOpen && <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />}
    </header>
  );
}
