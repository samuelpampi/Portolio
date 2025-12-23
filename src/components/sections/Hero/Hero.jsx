import "./hero.css";
import Avatar from "../../ui/Avatar/Avatar.jsx";
import Button from "../../ui/Buttons/Button.jsx";
import { GitHubIcon , LinkedInIcon, DownloadIcon, MailIcon} from "../../ui/Icons/Icons.jsx";

export default function Hero(){
    return(
        <section id="about" className="hero" data-reveal>
            <article className="hero-data">
                <div className="hero-content">
                    <h1 className="hero-title">Hola! Soy Samuel </h1>
                    <h2 className="hero-subtitle">Desarrollador Full Stack</h2>
                    <p className="hero-text"><span>+2 años de experiencia</span> de desarrollador en el sector de la ciberseguridad. Trabajo con una mentalidad de mejora continua y aprendizaje constante. <br/><br/>Me defino como una persona curiosa, perseverante y autodidacta.</p>
                </div>
                <ul className="social-buttons">
                    <li>
                        <Button url="https://www.linkedin.com/in/samuelpampillonroa/">
                            <LinkedInIcon size="18" className="linkedin-icon"/>
                            <span className="button-text">Linkedin</span>
                        </Button>
                    </li>
                    <li>
                        <Button url="https://github.com/samuelpampi">
                            <GitHubIcon size="18" className="github-icon"/>
                            <span className="button-text">Github</span>
                        </Button>
                    </li>
                    <li>
                        <Button url="/files/CV-SamuelPampillon.pdf">
                            <DownloadIcon size="18" className="download-icon"/>
                            <span className="button-text">Descargar CV</span>
                        </Button>
                    </li>
                    <li>
                        <Button url="mailto:samuelpampillonroa@gmail.com">
                            <MailIcon size="18" className="download-icon"/>
                            <span className="button-text">Contactame</span>
                        </Button>
                    </li>
                </ul>

            </article>
            
            <Avatar/>                   
        </section>
    );
}
