import "./Hero.css";
import Avatar from "../../ui/Avatar/Avatar.jsx";
import Button from "../../ui/Buttons/Button.jsx";
import { GitHubIcon , LinkedInIcon, DownloadIcon } from "../../ui/Icons/Icons.jsx";

export default function Hero(){
    return(
        <section className="hero">
            <article>
                <div className="hero-content">
                    <h1 className="hero-title">Hola! Soy Samuel </h1>
                    <h2 className="hero-subtitle">Desarrollador Full Stack</h2>
                    <p className="hero-text"><span>+2 años de experiencia</span> de desarrollador en el sector de la ciberseguridad. Trabajo con una mentalidad de mejora continua y aprendizaje constante.</p>
                </div>
                <ul>
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
                </ul>

            </article>
            
            <Avatar/>                   
        </section>
    );
}