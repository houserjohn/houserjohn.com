import Tag from './Tag';

function SkillCard() {
    return (
        <div className="bg-white shadow-lg px-4 py-4 h-64 justify-center text-center rounded-xl">
            <div className="font-medium">
                Front End
            </div>
            <img alt="skill" src="" className="w-32 h-32 bg-gray-100 m-auto rounded-full"/>
            <div className="text-gray-500">
                Description
            </div>
            <Tag/>
        </div>
    );
}

export default SkillCard;