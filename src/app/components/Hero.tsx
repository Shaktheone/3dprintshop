'use client';

import { useLanguage } from '../context/LanguageContext';
import styles from './Hero.module.css';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className={styles.hero} id="home">
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{t('hero.title')}</h1>
                    <p className={styles.subtitle}>{t('hero.subtitle')}</p>
                </div>
            </div>
        </section>
    );
}
