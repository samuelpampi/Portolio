import "./section.css";

export default function Section({children, className="", id}) {
    return(
        <section id={id} className={`section ${className}`} data-reveal>
            {children}
        </section>
    );
}
