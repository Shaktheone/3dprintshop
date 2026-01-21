'use client';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Header from '../components/Header';
import styles from './Account.module.css';

// Mock Order History Data
const MOCK_ORDERS = [
    { id: 'ORD-7721', date: 'Jan 20, 2026', total: 125.00, status: 'Shipped', items: ['Geometric Vase', 'Articulated Dragon'] },
    { id: 'ORD-7602', date: 'Dec 15, 2025', total: 45.00, status: 'Delivered', items: ['Mini Robot'] },
];

export default function AccountPage() {
    const { user, logout, isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/auth/signin');
        }
    }, [isAuthenticated, router]);

    if (!user) return null;

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>My Account</h1>
                    <button onClick={logout} className={styles.logoutBtn}>Sign Out</button>
                </div>

                <div className={styles.profileCard}>
                    <div className={styles.avatar}>
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.name}>{user.name}</h2>
                        <p className={styles.email}>{user.email}</p>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Order History</h2>
                    <div className={styles.ordersList}>
                        {MOCK_ORDERS.map(order => (
                            <div key={order.id} className={styles.orderCard}>
                                <div className={styles.orderHeader}>
                                    <span className={styles.orderId}>{order.id}</span>
                                    <span className={`${styles.status} ${styles[order.status.toLowerCase()]}`}>
                                        {order.status}
                                    </span>
                                </div>
                                <div className={styles.orderDetails}>
                                    <span className={styles.date}>{order.date}</span>
                                    <span className={styles.total}>₾{order.total.toFixed(2)}</span>
                                </div>
                                <p className={styles.items}>
                                    {order.items.join(', ')}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
