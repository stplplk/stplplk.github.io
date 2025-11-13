import "./Contact.css";

function Contact({ link, title }: { link: string, title: string }) {
    const domain = new URL(link).hostname;
    const icon = `/icons/${domain}.png`;
    return (
        <a className="contact" href={link} target="_blank" rel="noopener noreferrer">
            <img src={icon} className="icon" />
            <span>{title}</span>
        </a>
    )
}

export default Contact;