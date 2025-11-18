import { useEffect, useState } from "react";
import "./PricesPage.css";
import type { Category, Item, Prices } from "../types/Prices";
import Markdown from "react-markdown";

function PricesPage() {
    const [prices, setPrices] = useState<Prices>();

    useEffect(() => {
        void import("../content/prices.json")
            .then((result) => {
                setPrices(result.default);
            });
    }, []);

    function renderCategory(category: Category) {
        return (
            <div key={category.name}>
                <h2>{category.name}</h2>
                { category.items.map(renderItem) }
            </div>
        )
    }

    function renderItem(item: Item) {
        return (
            <div key={item.title} className="price-item">
                <span className="price-item-title">{item.title}</span>
                <span className="price-item-separator">
                    {".".repeat(150)}
                </span>
                <span className="price-item-price">{item.value}</span>
            </div>
        )
    }

    return (
        <div className="center">
            <div className="check-container">
                <div className="check">
                    <h1 className="text-center">Price List</h1>
                    <h2 className="text-center">Terms</h2>
                    <Markdown>
                        { prices?.terms }
                    </Markdown>
                    { prices?.categories.map(renderCategory) }
                </div>
            </div>
        </div>
    )
}

export default PricesPage;