'use client';

import { useLanguage } from '../context/LanguageContext';
import styles from './Hero.module.css';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        {t('hero.title1')}
                        <span className={styles.highlight}> {t('hero.title2')}</span>
                    </h1>
                    <p className={styles.description}>
                        {t('hero.description')}
                    </p>
                    <div className={styles.cta}>
                        <button className={styles.primaryBtn}>
                            {t('hero.explore')}
                        </button>
                        <button className={styles.secondaryBtn}>
                            {t('hero.custom')}
                        </button>
                    </div>
                </div>

                <div className={styles.features}>
                    <div className={styles.feature}>
                        <div className={styles.featureIcon}>⚡</div>
                        <h3>{t('feature.fast.title')}</h3>
                        <p>{t('feature.fast.desc')}</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureIcon}>🎨</div>
                        <h3>{t('feature.custom.title')}</h3>
                        <p>{t('feature.custom.desc')}</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureIcon}>✨</div>
                        <h3>{t('feature.quality.title')}</h3>
                        <p>{t('feature.quality.desc')}</p>
                    </div>
                </div>
            </div>

            <div className={styles.bgAnimation}>
                <div className={styles.floatingShape}></div>
                <div className={styles.floatingShape}></div>
                <div className={styles.floatingShape}></div>
            </div>
        </section>
    );
}
