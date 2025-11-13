import "./Contact.css";

function Contact({ link, title }: { link: string, title: string }) {
    return (
        <a className="contact" href={link} target="_blank" rel="noopener noreferrer">
            {title}
        </a>
    )
}

export default Contact;