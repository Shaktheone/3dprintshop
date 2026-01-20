'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import styles from './Header.module.css';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.contact}>
            <span>{t('header.location')}</span>
            <span className={styles.divider}>|</span>
            <span>{t('header.phone')}</span>
          </div>
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
                ENG
              </button>
            </div>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button className={styles.cart}>
              <span className={styles.cartIcon}>🛒</span>
              <span className={styles.cartText}>{t('header.cart')}</span>
              <span className={styles.badge}>0</span>
            </button>
          </div>
        </div>

        <div className={styles.mainHeader}>
          <div className={styles.logo}>
            <h1 className={styles.logoText}>
              <span className={styles.gradient}>3D</span>{language === 'ka' ? 'პრინტშოპი' : 'PrintShop'}
            </h1>
            <p className={styles.tagline}>{t('header.tagline')}</p>
          </div>

          <button
            className={`${styles.menuToggle} ${isMenuOpen ? styles.menuActive : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <a href="#home" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</a>
            <a href="#products" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{t('nav.products')}</a>
            <a href="#custom" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{t('nav.custom')}</a>
            <a href="#about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</a>
            <a href="#contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a>
          </nav>
        </div>

        <div className={styles.categoriesWrapper}>
          <div className={styles.categories}>
            <button className={`${styles.categoryBtn} ${styles.active}`}>{t('cat.all')}</button>
            <button className={styles.categoryBtn}>{t('cat.decor')}</button>
            <button className={styles.categoryBtn}>{t('cat.tech')}</button>
            <button className={styles.categoryBtn}>{t('cat.figurines')}</button>
            <button className={styles.categoryBtn}>{t('cat.office')}</button>
            <button className={styles.categoryBtn}>{t('cat.custom')}</button>
          </div>
        </div>
      </div>
      {isMenuOpen && <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />}
    </header>
  );
}
