export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    size: string;
    weight: string;
    originalPrice?: number;
}

export const products: Product[] = [
    {
        id: 'vase',
        name: 'The Geometric Vase',
        price: 45.00,
        image: '/vase.png',
        description: 'A stunning geometric vase that blends modern aesthetics with functional design. Perfect for dried flowers or as a standalone art piece.',
        size: '25cm x 12cm',
        weight: '450g'
    },
    {
        id: 'dragon',
        name: 'Articulated Dragon',
        price: 35.00,
        image: '/dragon.png',
        originalPrice: 45.00,
        description: 'A fully articulated dragon figurine with intricate scale details and fluid movement. A masterpiece of 3D printing engineering.',
        size: '45cm length',
        weight: '120g'
    },
    {
        id: 'stand',
        name: 'Minimal Phone Stand',
        price: 18.00,
        image: '/phone-stand.png',
        description: 'Keep your workspace organized with this ultra-minimal phone stand. Designed for stability and optimal viewing angles.',
        size: '10cm x 8cm',
        weight: '85g'
    },
    {
        id: 'planter',
        name: 'Hex Planter',
        price: 22.00,
        image: '/planter.png',
        description: 'A hexagonal succulent planter with built-in drainage. Adds a touch of nature to your modern desk setup.',
        size: '12cm x 12cm',
        weight: '200g'
    },
    {
        id: 'organizer',
        name: 'Desk Organizer',
        price: 28.00,
        image: '/organizer.png',
        description: 'Modular desk organizer to keep your pens, cards, and small items in check. Customizable layout.',
        size: '20cm x 15cm',
        weight: '300g'
    },
    {
        id: 'robot',
        name: 'Mini Robot',
        price: 15.00,
        image: '/robot.png',
        description: 'A playful and posable mini robot figure. Great as a desk companion or a unique gift.',
        size: '8cm height',
        weight: '50g'
    }
];
