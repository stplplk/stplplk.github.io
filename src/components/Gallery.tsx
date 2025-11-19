import { useEffect, useState } from "react";
import type { PortfolioItem } from "../types/Portfolio";
import "./Gallery.css";

function Gallery() {
    const [items, setItems] = useState<PortfolioItem[]>([]);
    
    useEffect(() => {
        const loadPortfolioItems = async () => {
            const modules = import.meta.glob("../content/gallery/*.json");
            const collected: PortfolioItem[] = [];
            const pendingLoads: Promise<void>[] = [];

            Object.values(modules).forEach((resolver) => {
                pendingLoads.push(
                    resolver().then((module) => {
                        const item = (module as { default: PortfolioItem }).default;
                        collected.push(item);
                    })
                );
            });

            await Promise.all(pendingLoads);

            collected.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            const topThree = collected.slice(0, 3);
            setItems(topThree);
        };

        loadPortfolioItems();
    }, []);

    return (
        <a className="gallery" href="/gallery">
            { items.map((item, i) => (
                <img key={i} src={item.image} />
            )) }
        </a>
    );
}

export default Gallery;