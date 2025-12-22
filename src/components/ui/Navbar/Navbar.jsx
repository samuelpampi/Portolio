import { useEffect, useState } from "react";
import "./navbar.css";

const NAV_ITEMS = [
    { label: "Home", href: "#" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Skills", href: "#skills" },
];

export default function NavBar() {
    const [activeHref, setActiveHref] = useState(() => window.location.hash || "#");

    useEffect(() => {
        // Sync active link if the hash changes outside of clicks (e.g. back/forward navigation)
        const handleHashChange = () => setActiveHref(window.location.hash || "#");
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const handleNavClick = (event, href) => {
        event.preventDefault();
        setActiveHref(href || "#");

        if (!href || href === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }

        // Update URL hash without jumping
        if (href) {
            window.history.pushState(null, "", href);
        }
    };

    return (
        <nav className="menu-nav">
            {NAV_ITEMS.map((item) => (
                <a
                    key={item.href}
                    className={`nav_link ${activeHref === item.href ? "is_selected" : ""}`}
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );
}
