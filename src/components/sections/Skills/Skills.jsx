import Section from "../../ui/Containers/Section";
import { Title } from "../../ui/Titles/Title";
import StackContainer from "./StackContainer";
import { BACKEND, DEVOPS, FRONTEND, LEARNING } from "../../data/TechData";
import "./skills.css";

export default function Skills(){
    return(
        <Section className="skills-section">
            <Title text="Stack Tecnológico"/>
            <div className="gridStack">
                <StackContainer title="Frontend" techs={FRONTEND}/>
                <StackContainer title="Backend" techs={BACKEND}/>
                <StackContainer title="Herramientas" techs={DEVOPS}/>
                <StackContainer title="Aprendiendo" techs={LEARNING}/>
            </div>          
        </Section>
    );
}