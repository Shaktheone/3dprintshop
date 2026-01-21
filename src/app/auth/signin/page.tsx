'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import styles from '../auth.module.css';
import Header from '../../components/Header';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { signIn } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Mock API delay
        await new Promise(resolve => setTimeout(resolve, 800));

        signIn(email);
        router.push('/account');
    };

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Welcome Back</h1>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Email Address</label>
                        <input
                            type="email"
                            required
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            required
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                        {isSubmitting ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <div className={styles.footer}>
                    New here?
                    <Link href="/auth/signup" className={styles.link}>
                        Create an account
                    </Link>
                </div>
            </div>
        </div>
    );
}
