import SkillCard from "./SkillCard";

let skill_info = [
    {},
    {}, 
    {}, 
    {}, 
    {},
];

function SkillManager() {
    return (
        <div className="flex flex-wrap gap-3 justify-center my-5">
            {skill_info.map((value: any, index: number) => (
                <SkillCard key={index}/>            
            ))}
        </div>
    );
}

export default SkillManager;