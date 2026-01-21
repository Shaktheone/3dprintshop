'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './BackgroundElements.module.css';

export default function BackgroundElements() {
    const [scrollY, setScrollY] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className={styles.wrapper} aria-hidden="true">
            {/* Smooth Floating Orb 1 */}
            <div
                className={`${styles.shape} ${styles.orb} ${styles.orb1}`}
                style={{
                    transform: `translate3d(${mousePos.x * 1.5}px, ${scrollY * 0.15}px, 0)`
                }}
            />

            {/* Smooth Floating Orb 2 */}
            <div
                className={`${styles.shape} ${styles.orb} ${styles.orb2}`}
                style={{
                    transform: `translate3d(${mousePos.x * -1}px, ${scrollY * 0.25}px, 0)`
                }}
            />

            {/* Abstract Tube / Capsule */}
            <div
                className={`${styles.shape} ${styles.tube} ${styles.tube1}`}
                style={{
                    transform: `translate3d(${mousePos.x * 0.5}px, ${scrollY * 0.1}px, 0) rotate(${scrollY * 0.05}deg)`
                }}
            />

            {/* Wireframe Grid - Perspective */}
            <div
                className={styles.gridContainer}
                style={{
                    transform: `translate3d(0, ${scrollY * 0.05}px, 0)`
                }}
            >
                <div className={styles.grid} />
            </div>

            {/* Subtle Gradient Fog for Depth */}
            <div className={styles.fog} />
        </div>
    );
}
