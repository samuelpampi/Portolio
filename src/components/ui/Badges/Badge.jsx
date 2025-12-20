import "./badge.css";
import { TECHBADGETS } from "../../data/TechBadgets";

export default function Badge({tech}){
    const techData = TECHBADGETS.find(t => t.id === tech);
    return(
        <li className="badge" style={{ backgroundColor: techData.background, color: techData.color }}>
            {techData.icon}
            <span>{techData.name}</span>
        </li>
    );
}