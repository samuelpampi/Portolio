import "./skills.css";

export default function TechItem({tech}){
    return(
        <li className="tech-item">
            {tech.icon}
            <span>{tech.name}</span>
        </li>
    );
}