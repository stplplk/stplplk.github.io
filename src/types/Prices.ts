interface Prices {
    terms: string;
    categories: Category[];
}

interface Category {
    name: string;
    items: Item[];
}

interface Item {
    title: string;
    value: string;
}

export type { Prices, Category, Item };