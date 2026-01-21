'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import styles from '../auth.module.css';
import Header from '../../components/Header';

export default function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { signUp } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Mock API delay
        await new Promise(resolve => setTimeout(resolve, 800));

        signUp(email, name);
        router.push('/account');
    };

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Create Account</h1>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Full Name</label>
                        <input
                            type="text"
                            required
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

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
                        {isSubmitting ? 'Creating account...' : 'Sign Up'}
                    </button>
                </form>

                <div className={styles.footer}>
                    Already have an account?
                    <Link href="/auth/signin" className={styles.link}>
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}
