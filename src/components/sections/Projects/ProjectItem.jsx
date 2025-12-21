import { BadgeList } from "../../ui/Badges/Badge";
import { Title3 } from "../../ui/Titles/Title";
import Button from "../../ui/Buttons/Button";
import { CodeIcon, LinkIcon } from "../../ui/Icons/Icons";
import "./projects.css"

export default function ProjectItem({project}){
    return(
        <article className="project-item">
            <div className="project-mockup-wrapper">
                <img className="project-mockup" src={project.mockup} alt={`Mockup del projecto ${project.name}`} />
                <div className="project-mockup-overlay" aria-hidden="true"></div>
            </div>
            <div className="project-content">
                <Title3 className="project-title" text={project.name}/>
                <p className="project-description">{project.description}</p>
                <BadgeList techs={project.techs}/>
                <ul className="list-buttons">
                    <li>
                        <Button url={project.github}>
                            <CodeIcon size="18" className="github-icon"/>
                            <span className="button-text">Code</span>
                        </Button>
                    </li>

                    {project.preview && <li>
                        <Button url={project.preview}>
                            <LinkIcon size="18" className="download-icon"/>
                            <span className="button-text">Preview</span>
                        </Button>
                    </li>}
                </ul>
            </div>
        </article>
    );
}
