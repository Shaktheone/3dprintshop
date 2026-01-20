'use client';

import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    id: number;
    name: string;
    nameKey: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
}

export default function ProductCard({ name, nameKey, price, originalPrice, image, category }: ProductCardProps) {
    const { t } = useLanguage();
    const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

    return (
        <div className={styles.card}>
            {discount > 0 && (
                <div className={styles.badge}>-{discount}%</div>
            )}

            <div className={styles.imageContainer}>
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={400}
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <button className={styles.quickView}>{t('product.quickView')}</button>
                </div>
            </div>

            <div className={styles.content}>
                <span className={styles.category}>{category}</span>
                <h3 className={styles.title}>{t(nameKey)}</h3>

                <div className={styles.priceContainer}>
                    <span className={styles.price}>₾{price.toFixed(2)}</span>
                    {originalPrice && (
                        <span className={styles.originalPrice}>₾{originalPrice.toFixed(2)}</span>
                    )}
                </div>

                <button className={styles.addToCart}>
                    <span className={styles.cartIcon}>🛒</span>
                    {t('product.addToCart')}
                </button>
            </div>
        </div>
    );
}
