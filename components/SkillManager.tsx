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
        <div className="grid grid-cols-3 gap-3 my-5">
            {skill_info.map((value: any, index: number) => (
                <SkillCard/>            
            ))}
        </div>
    );
}

export default SkillManager;