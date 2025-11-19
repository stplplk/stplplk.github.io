import { useEffect, useState } from "react";
import Badge from "../components/Badge";
import Contact from "../components/Contact";
import Orders from "../components/Orders";
import Price from "../components/Price";
import Gallery from "../components/Gallery";
import StatusButton from "../components/Status";
import type { Status } from "../types/Status";

interface Contact {
    title: string;
    link: string;
}

function HomePage() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [status, setStatus] = useState<Status>();

    useEffect(() => void import("../content/socials.json")
        .then((result) => 
            setContacts(result.default.socials as Contact[])), []);

    useEffect(() => void import("../content/status.json")
        .then((result) => 
            setStatus(result.default as Status)), []);

    return (
        <div>
            <Badge />
            <div className="contacts">
                { contacts.map((contact) => (
                    <Contact 
                        key={contact.title} 
                        title={contact.title} 
                        link={contact.link}
                    />
                )) }
            </div>
            <div className="center flex-row">
                <Price />
                <Orders />
                <Gallery />
            </div>
            <div className="center flex-row">
                <StatusButton isOpen={status?.isOpen ?? false} />
                <div>
                    <h3>
                        Commissions {status?.isOpen ? "Open" : "Closed"}
                    </h3>
                    <p className="comment">
                        {status?.comment}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;