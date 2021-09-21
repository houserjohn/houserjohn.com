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
        <div className="flex gap-3 justify-center flex-wrap p-1 my-4  space-y-0">
            {project_info.map((value: any, index: number) => (
                <ProjectCard key={index}/>
            ))}
        </div>
    );
}

export default ProjectManager;