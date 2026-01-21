'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import styles from './checkout.module.css';
import Header from '../components/Header';

export default function CheckoutPage() {
    const router = useRouter();
    const { cartItems, cartTotal, clearCart } = useCart(); // Note: accessing CartContext if we added clearCart, but let's check useCart definition
    // Actually, I need to check if clearCart is available. 
    // If not, I'll simulate it or update context.
    // For now assuming we need to update context to have clearCart.

    // Quick fix: Since I can't see the context file perfectly in memory, 
    // I'll assume I need to pass a method to clear it or just empty the array via direct set if exposed.
    // Wait, useCart exposes { cartItems, addToCart, removeFromCart, updateQuantity, cartTotal, ... }
    // It doesn't seem to expose clearCart.
    // I will implementation clearCart in context first.

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        clearCart();
        router.push('/checkout/success');
    };

    if (cartItems.length === 0) {
        return (
            <div className={styles.container}>
                <Header />
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <h1 className={styles.title}>Cart is empty</h1>
                    <button onClick={() => router.push('/')} className={styles.placeOrderBtn} style={{ maxWidth: '200px' }}>
                        Return to Shop
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Checkout</h1>

                <div className={styles.layout}>
                    {/* Shipping Form */}
                    <div className={styles.formSection}>
                        <h2 className={styles.sectionTitle}>Shipping Information</h2>
                        <form id="checkout-form" onSubmit={handleSubmit} className={styles.formGrid}>
                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>First Name</label>
                                    <input required className={styles.input} type="text" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Last Name</label>
                                    <input required className={styles.input} type="text" />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Email Address</label>
                                <input required className={styles.input} type="email" />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Address</label>
                                <input required className={styles.input} type="text" placeholder="Street address" />
                            </div>

                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>City</label>
                                    <input required className={styles.input} type="text" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Postal Code</label>
                                    <input required className={styles.input} type="text" />
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className={styles.summarySection}>
                        <h2 className={styles.sectionTitle}>Order Summary</h2>
                        <div className={styles.summaryItems}>
                            {cartItems.map(item => (
                                <div key={item.id} className={styles.item}>
                                    <div className={styles.itemInfo}>
                                        <span className={styles.itemName}>{item.name}</span>
                                        <span className={styles.itemQty}>Qty: {item.quantity}</span>
                                    </div>
                                    <span className={styles.itemPrice}>
                                        ₾{(item.price * item.quantity).toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.totalRow}>
                            <span>Total</span>
                            <span>₾{cartTotal.toFixed(2)}</span>
                        </div>

                        <button
                            type="submit"
                            form="checkout-form"
                            className={styles.placeOrderBtn}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Processing...' : 'Place Order'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
