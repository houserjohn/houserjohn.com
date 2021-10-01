import { title } from "process";
import SkillCard from "./SkillCard";

let skill_info = [
    {
        title: "Front End",
        description: "",
        img_src: "https://houserjohn.com/frontend_1_1.png",
        img_alt: "front end image",
        tags: [
            {name: "React", bg: ""},
            {name: "Redux", bg: "bg-gradient-to-r from-green-400 to-green-500 "},
            {name: "Typescript", bg: "bg-gradient-to-r from-red-400 to-red-500 "},
            {name: "Styled Components", bg: "bg-gradient-to-r from-pink-400 to-pink-500 "},
            {name: "Tailwind CSS", bg: "bg-gradient-to-r from-purple-400 to-purple-500 "},
        ]
    },
    {
        title: "Back End",
        description: "",
        img_src: "https://houserjohn.com/backend_1_1.png",
        img_alt: "back end image",
        tags: [
            {name: "Next.js", bg: "bg-gradient-to-r from-indigo-400 to-indigo-500 "},
            {name: "Node.js", bg: "bg-gradient-to-r from-yellow-400 to-yellow-500 "},
            {name: "Express", bg: "bg-gradient-to-r from-purple-400 to-purple-500 "},
            {name: "Socket.io", bg: "bg-gradient-to-r from-green-400 to-green-500 "},
            {name: "Postgres/SQL", bg: "bg-gradient-to-r from-gray-400 to-gray-500 "},
        ]
    },
    {
        title: "Misc",
        description: "",
        img_src: "https://houserjohn.com/misc_1_1.png",
        img_alt: "misc image",
        tags: [
            {name: "Python", bg: "bg-gradient-to-r from-blue-400 to-blue-500 "},
            {name: "Java", bg: "bg-gradient-to-r from-pink-400 to-pink-500 "},
            {name: "C", bg: "bg-gradient-to-r from-green-400 to-green-500 "},
            {name: "C++", bg: "bg-gradient-to-r from-purple-400 to-purple-500 "},
            {name: "Bash", bg: "bg-gradient-to-r from-yellow-400 to-yellow-500 "},
        ]
    },
];

function SkillManager() {
    return (
        <div className="flex flex-wrap gap-3 justify-center">
            {skill_info.map((skill: any, index: number) => (
                <SkillCard key={index} title={skill.title} tags={skill.tags} 
                description={skill.description} img_src={skill.img_src} 
                img_alt={skill.img_alt}/>            
            ))}
        </div>
    );
}

export default SkillManager;