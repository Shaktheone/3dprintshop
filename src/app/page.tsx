'use client';

import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import styles from './page.module.css';
import './globals.css';

import { products } from '@/data/products';


import { useCart } from './context/CartContext';

function MainContent() {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const [orderId, setOrderId] = useState('');
  const [trackResult, setTrackResult] = useState<string | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      setTrackResult(t('track.notfound'));
    }
  };

  return (
    <div className={styles.page}>
      <Header />
      <Hero />

      <main className={styles.main}>
        <section className={styles.section} id="shop">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{t('products.title')}</h2>
            </div>
            <div className={styles.productsGrid}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  onBuy={() => addToCart(product)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="track">
          <div className={styles.container}>
            <div className={styles.trackContent}>
              <h2 className={styles.sectionTitle}>{t('track.title')}</h2>
              <form onSubmit={handleTrack} className={styles.trackForm}>
                <input
                  type="text"
                  placeholder={t('track.placeholder')}
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className={styles.trackInput}
                />
                <button type="submit" className={styles.trackBtn}>{t('track.button')}</button>
              </form>
              {trackResult && <p className={styles.trackResult}>{trackResult}</p>}
            </div>
          </div>
        </section>

        <section className={styles.section} id="contact">
          <div className={styles.container}>
            <div className={styles.contactContent}>
              <h2 className={styles.sectionTitle}>{t('nav.contact')}</h2>
              <p className={styles.contactText}>hello@minimalist3d.com</p>
              <p className={styles.contactText}>+995 555 123 456</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.copyright}>{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return <MainContent />;
}
