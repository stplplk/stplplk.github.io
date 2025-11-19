import { useEffect, useState } from "react";
import Badge from "../components/Badge";
import Contact from "../components/Contact";
import Orders from "../components/Orders";
import Price from "../components/Price";
import Gallery from "../components/Gallery";

interface Contact {
    title: string;
    link: string;
}

function HomePage() {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => void import("../content/socials.json")
        .then((result) => 
            setContacts(result.default.socials as Contact[])), []);

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
        </div>
    )
}

export default HomePage;