import "./section.css";

export default function Section({children, className=""}) {
    return(
        <section className={`section ${className}`}>
            {children}
        </section>
    );
}