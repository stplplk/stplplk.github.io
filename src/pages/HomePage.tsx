import { useState, useEffect } from "react";
import Badge from "../components/Badge";
import Contact from "../components/Contact";
import Price from "../components/Price";

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
            <div className="center">
                <Price />
            </div>
        </div>
    )
}

export default HomePage;