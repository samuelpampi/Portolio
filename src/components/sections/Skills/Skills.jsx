import Section from "../../ui/Containers/Section";
import { Title } from "../../ui/Titles/Title";
import StackContainer from "./StackContainer";
import { BACKEND, DEVOPS, FRONTEND, LEARNING } from "../../data/TechData";
import "./skills.css";

export default function Skills(){
    return(
        <Section id="skills" className="skills-section">
            <Title text="Stack Tecnológico"/>
            <div className="gridStack">
                <StackContainer title="Frontend" techs={FRONTEND} index={0}/>
                <StackContainer title="Backend" techs={BACKEND} index={1}/>
                <StackContainer title="Herramientas" techs={DEVOPS} index={2}/>
                <StackContainer title="DevOps" techs={LEARNING} index={3}/>
            </div>          
        </Section>
    );
}
