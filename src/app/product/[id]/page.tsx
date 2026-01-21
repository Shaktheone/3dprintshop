'use client';

import { use, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import styles from './product.module.css';
import Header from '../../components/Header';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const { t } = useLanguage();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <Link href="/" className={styles.backLink}>
                    ← Back to Shop
                </Link>

                <div className={styles.content}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className={styles.image}
                            priority
                        />
                    </div>

                    <div className={styles.details}>
                        <div className={styles.header}>
                            <h1 className={styles.title}>{product.name}</h1>
                            <span className={styles.price}>₾{product.price.toFixed(2)}</span>
                        </div>

                        <p className={styles.description}>{product.description}</p>

                        <div className={styles.specs}>
                            <div className={styles.specItem}>
                                <span className={styles.specLabel}>Size</span>
                                <span className={styles.specValue}>{product.size}</span>
                            </div>
                            <div className={styles.specItem}>
                                <span className={styles.specLabel}>Weight</span>
                                <span className={styles.specValue}>{product.weight}</span>
                            </div>
                        </div>

                        <button
                            className={styles.addToBasketBtn}
                            onClick={() => addToCart(product)}
                        >
                            Add to Basket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
