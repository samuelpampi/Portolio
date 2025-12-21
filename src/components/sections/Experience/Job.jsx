import { CalendarIcon } from "../../ui/Icons/Icons";
import { BadgeList } from "../../ui/Badges/Badge";
import "./experience.css";

export default function Job({ job }) {
    return(
        <li className="timeline__item">
            <span className="timeline__dot" aria-hidden="true">
                <CalendarIcon size="22" className="timeline__dotIcon" />
            </span>
            <time className="timeline__time">{job.time}</time>
            <h3 className="timeline__title">{job.title}</h3>
            <h4 className="timeline__company">{job.company}</h4>
            <p className="timeline__text">{job.description}</p>
            <BadgeList techs={job.techs}/>
        </li>
    );
}