export const PRODUCT_CATEGORIES = [
    {
        label: 'Watches',
        value: "watches" as const,
        featured: [
            {
                name: "Rolex",
                href: "/rolex",
                image: "rolex.jpg",
            },
            {
                name: "Omega",
                href: "/omega",
                image: "omega.jpg",
            }
        ]
    },
    {
        label: 'Shoes',
        value: "shoes" as const,
        featured: [
            {
                name: "Nike",
                href: "/nike",
                image: "nike.jpg",
            },
            {
                name: "Adidas",
                href: "/adidas",
                image: "adidas.jpg",
            }
        ]
    }
]