import { Title, TitleShine } from "../../ui/Titles/Title";
import Section from "../../ui/Containers/Section";
import { PROJECTS } from "../../data/ProjectsData";
import ProjectItem from "./ProjectItem";
import "./projects.css";

export default function Projects(){
    return(
        <Section className="projects-section">
            <Title text="Proyectos personales"/>
            <div className="projects-list">
                {PROJECTS.map((project, index) => (
                    <ProjectItem key={index} project={project}/>
                ))}
            </div>
            <TitleShine>
                <a className="git-link" href="https://github.com/samuelpampi" target="_blank" rel="noopener noreferrer">Más proyectos en GitHub</a>
            </TitleShine>
            
        </Section>
    );
}