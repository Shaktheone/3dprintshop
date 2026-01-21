'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
    const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

    return (
        <>
            <div
                className={`${styles.overlay} ${isCartOpen ? styles.open : ''}`}
                onClick={closeCart}
            />
            <div className={`${styles.drawer} ${isCartOpen ? styles.open : ''}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Your Basket</h2>
                    <button onClick={closeCart} className={styles.closeBtn}>×</button>
                </div>

                <div className={styles.items}>
                    {cartItems.length === 0 ? (
                        <p className={styles.emptyState}>Your basket is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className={styles.cartItem}>
                                <div className={styles.itemImageWrapper}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className={styles.itemImage}
                                    />
                                </div>
                                <div className={styles.itemDetails}>
                                    <h3 className={styles.itemName}>{item.name}</h3>
                                    <span className={styles.itemPrice}>₾{item.price.toFixed(2)}</span>
                                    <div className={styles.qtyControls}>
                                        <button
                                            className={styles.qtyBtn}
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        >
                                            -
                                        </button>
                                        <span className={styles.qtyInput}>{item.quantity}</span>
                                        <button
                                            className={styles.qtyBtn}
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className={styles.removeBtn}
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    ×
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className={styles.footer}>
                        <div className={styles.totalRow}>
                            <span>Total</span>
                            <span>₾{cartTotal.toFixed(2)}</span>
                        </div>
                        <Link href="/checkout" onClick={closeCart} style={{ display: 'block' }}>
                            <button className={styles.checkoutBtn}>Proceed to Checkout</button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
