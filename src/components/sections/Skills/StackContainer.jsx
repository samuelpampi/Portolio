import TechItem from "./TechItem";

export default function StackContainer({title, techs}){
    return(
        <article className="stack-container">
            <h2 className="stack-title">{title}</h2>
            <ul className="stack-list">
                {techs.map((tech, index) => (
                    <TechItem key={index} tech={tech}/>
                ))}
            </ul>
        </article>
    );
}