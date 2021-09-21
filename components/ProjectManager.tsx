import ProjectCard from './ProjectCard';

let project_info = [
    {},
    {},
    {},
    {},
    {},
    
];

function ProjectManager() {
    return (
        <div className=" grid grid-cols-2 gap-4 p-1 my-4 space-x-0 space-y-0">
            {project_info.map((value: any, index: number) => (
                <ProjectCard/>
            ))}
        </div>
    );
}

export default ProjectManager;