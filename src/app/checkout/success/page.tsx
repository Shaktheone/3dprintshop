'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import styles from '../checkout.module.css'; // Reusing some basic styles or creating new inline for simplicity
import Header from '../../components/Header';

export default function SuccessPage() {
    const { cartItems } = useCart(); // We'll assume we clear it here if not done before

    // In a real app, we'd probably clear the cart on the checkout page after successful API call
    // But we can double check here or just show the message.

    return (
        <div>
            <Header />
            <div className={styles.container} style={{ textAlign: 'center', paddingTop: '6rem' }}>
                <h1 className={styles.title} style={{ fontSize: '3rem', marginBottom: '1rem' }}>Thank You!</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
                    Your order has been placed successfully. We'll send a confirmation email with tracking details shortly.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link href="/#track" style={{
                        textDecoration: 'underline',
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                        fontWeight: 500
                    }}>
                        Track Order
                    </Link>
                    <span style={{ color: 'var(--border)' }}>|</span>
                    <Link href="/" style={{
                        textDecoration: 'underline',
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                        fontWeight: 500
                    }}>
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}
