import { Title } from "../../ui/Titles/Title";
import Section from "../../ui/Containers/Section";
import Timeline from "./Timeline";
import "./experience.css";

export default function Experience(){
    return(
        <Section className="experience-section">
            <Title text="Experiencia"/>
            <Timeline />
        </Section>
    );
}