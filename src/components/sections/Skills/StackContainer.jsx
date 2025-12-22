import TechItem from "./TechItem";

export default function StackContainer({title, techs, index = 0}){
    return(
        <article
            className="stack-container"
            data-reveal
            style={{ "--reveal-delay": `${index * 0.1}s` }}
        >
            <h2 className="stack-title">{title}</h2>
            <ul className="stack-list">
                {techs.map((tech, index) => (
                    <TechItem key={index} tech={tech}/>
                ))}
            </ul>
        </article>
    );
}
