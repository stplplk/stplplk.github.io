import { useEffect, useState } from "react";
import type { PortfolioItem } from "../types/Portfolio";

function GalleryPage() {
    const [items, setItems] = useState<PortfolioItem[]>([]);


    useEffect(() => {
        const loadPortfolioItems = async () => {
            const modules = import.meta.glob("../content/gallery/*.json");
            const loadedItems: PortfolioItem[] = [];
            for (const resolver of Object.values(modules)) {
                const module = await resolver();
                const item = (module as { default: PortfolioItem }).default;
                loadedItems.push(item);
                loadedItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                setItems([...loadedItems]);
            }
        };

        loadPortfolioItems();
    }, []);


    return (
        <div className="gallery-grid">
            { items.map((item) => (
                <a className="gallery-item" key={item.title} href={item.image}>
                    <img src={item.image} />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>{item.date}</p>
                </a>
            )) }
        </div>
    )
}

export default GalleryPage;