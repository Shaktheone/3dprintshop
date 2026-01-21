'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    image: string;
    onBuy?: () => void;
}

export default function ProductCard({ id, name, price, image, onBuy }: ProductCardProps) {
    const { t } = useLanguage();

    return (
        <div className={styles.card}>
            <Link href={`/product/${id}`} className={styles.link}>
                <div className={styles.imageContainer}>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        className={styles.image}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h3 className={styles.title}>{name}</h3>
                        <span className={styles.price}>₾{price.toFixed(2)}</span>
                    </div>
                </div>
            </Link>
            <button
                className={styles.buyBtn}
                onClick={(e) => {
                    e.preventDefault();
                    onBuy?.();
                }}
            >
                {t('product.buy')}
            </button>
        </div>
    );
}
