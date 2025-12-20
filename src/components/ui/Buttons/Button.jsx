import "./button.css";

export default function Button({children, url="#"}) {
    return (
        <a className="button" href={url} target="_blank" rel="noopener noreferrer">{children}</a>
    );
}