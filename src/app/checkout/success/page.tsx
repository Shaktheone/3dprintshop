'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import styles from './success.module.css';
import Header from '../../components/Header';

export default function SuccessPage() {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Thank You!</h1>
                <p className={styles.message}>
                    Your order has been placed successfully. We'll send a confirmation email with tracking details shortly.
                </p>

                <div className={styles.links}>
                    <Link href="/#track" className={styles.link}>
                        Track Order
                    </Link>
                    <span className={styles.separator}>|</span>
                    <Link href="/" className={styles.link}>
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}
