import "./experience.css";
import { JOBS } from "../../data/ExperienceData";
import { CalendarIcon } from "../../ui/Icons/Icons";
import Job from "./Job";




export default function Timeline(){
    return(
        <ol className="timeline">
            {JOBS.map((job, index) => (
                <Job key={index} job={job} />
            ))}
        </ol>
    );
}