import { JavaScriptIcon, ReactIcon, PythonIcon, TypeScriptIcon, AngularIcon, KafkaIcon, PostgreSQLIcon, 
    ViteIcon, NextIcon, NodeIcon, MongoDBIcon, DockerIcon } from "../ui/Icons/Icons";

export const TECHBADGETS = [
    { 
        id: "javascript", 
        icon: <JavaScriptIcon size={16} className="tech-badget-icon" />, 
        name: "JavaScript" ,
        background: "#473f0bff",
        color: "var(--text-primary)"
    },
    { 
        id: "react", 
        icon: <ReactIcon size={16} className="tech-badget-icon" />,
        name: "React" ,
        background: "#005168ff",
        color: "#ffffff"
    }, 
    {
        id: "python",
        icon: <PythonIcon size={16} className="tech-badget-icon" />,
        name: "Python" ,
        background: "#11263fff",
        color: "#ffffff"
    },
    {
        id: "typescript",
        icon: <TypeScriptIcon size={16} className="tech-badget-icon" />,
        name: "TypeScript" ,
        background: "#11263fff",
        color: "#ffffff"
    },
    {   
        id: "angular",
        icon: <AngularIcon size={16} className="tech-badget-icon" />,
        name: "Angular" ,
        background: "#000000",
        color: "#ffffff"
    },{
        id: "kafka",
        icon: <KafkaIcon size={16} className="tech-badget-icon" />,
        name: "Apache Kafka" ,
        background: "#000000",
        color: "#ffffff"
    },{
        id: "postgresql",
        icon: <PostgreSQLIcon size={16} className="tech-badget-icon" />,
        name: "PostgreSQL" ,
        background: "#11263fff",
        color: "#ffffff"
    },
    {
        id: "vite",
        icon: <ViteIcon size={16} className="tech-badget-icon" />,
        name: "Vite" ,
        background: "#11263fff",
        color: "#ffffff"
    },
    {
        id: "next",
        icon: <NextIcon size={16} className="tech-badget-icon" />,
        name: "Next.js" ,
        background: "#000000",
        color: "#ffffff"
    },
    {
        id: "node",
        icon: <NodeIcon size={16} className="tech-badget-icon" />,
        name: "Node.js" ,
        background: "#0b2008ff",
        color: "#ffffff"
    },
    {
        id: "mongodb",
        icon: <MongoDBIcon size={16} className="tech-badget-icon" />,
        name: "MongoDB" ,
        background: "#0b2008ff",
        color: "#ffffff"
    },
    {
        id: "docker",
        icon: <DockerIcon size={16} className="tech-badget-icon"/>,
        name: "Docker" ,
        background: "#11263fff",
        color: "#ffffff"
    }
];