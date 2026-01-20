'use client';

import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import styles from './page.module.css';
import './globals.css';

const products = [
  {
    id: 1,
    name: 'Geometric Gradient Vase',
    nameKey: 'product.vase',
    price: 45.00,
    originalPrice: 65.00,
    image: '/vase.png',
    category: 'Home Decor'
  },
  {
    id: 2,
    name: 'Articulated Dragon Figurine',
    nameKey: 'product.dragon',
    price: 89.00,
    image: '/dragon.png',
    category: 'Figurines'
  },
  {
    id: 3,
    name: 'Modern Phone Stand',
    nameKey: 'product.phoneStand',
    price: 25.00,
    originalPrice: 35.00,
    image: '/phone-stand.png',
    category: 'Tech Accessories'
  },
  {
    id: 4,
    name: 'Hexagonal Succulent Planter',
    nameKey: 'product.planter',
    price: 32.00,
    image: '/planter.png',
    category: 'Home Decor'
  },
  {
    id: 5,
    name: 'Modular Desk Organizer',
    nameKey: 'product.organizer',
    price: 55.00,
    originalPrice: 75.00,
    image: '/organizer.png',
    category: 'Office'
  },
  {
    id: 6,
    name: 'Rainbow Articulated Robot',
    nameKey: 'product.robot',
    price: 68.00,
    image: '/robot.png',
    category: 'Figurines'
  }
];

function MainContent() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <Header />
      <Hero />

      <main className={styles.main}>
        <section className={styles.productsSection} id="products">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                {t('products.title')}<span className={styles.gradient}>{t('products.titleHighlight')}</span>
              </h2>
              <p className={styles.sectionDescription}>
                {t('products.description')}
              </p>
            </div>

            <div className={styles.productsGrid}>
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.customSection} id="custom">
          <div className={styles.container}>
            <div className={styles.customContent}>
              <h2 className={styles.customTitle}>
                {t('custom.title1')}<span className={styles.gradient}>{t('custom.title2')}</span>?
              </h2>
              <p className={styles.customDescription}>
                {t('custom.description')}
              </p>
              <button className={styles.customBtn}>
                {t('custom.button')}
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>3DPrintShop</h3>
              <p>{t('footer.tagline')}</p>
            </div>
            <div className={styles.footerSection}>
              <h4>{t('footer.contact')}</h4>
              <p>{t('footer.email')}</p>
              <p>{t('header.phone')}</p>
            </div>
            <div className={styles.footerSection}>
              <h4>{t('footer.follow')}</h4>
              <div className={styles.socialLinks}>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
