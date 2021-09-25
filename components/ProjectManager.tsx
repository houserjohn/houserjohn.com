import ProjectCard from './ProjectCard';

let project_info = [
    {
        title: "Sorting Visualizer", 
        img_src: "/sorting_visualizer.png",
        img_alt: "Sorting visualizer",
        tags: [
            {name: "React", bg: ""},
            {name: "Redux", bg: "bg-gradient-to-r from-green-400 to-green-500 "},
            {name: "Typescript", bg: "bg-gradient-to-r from-red-400 to-red-500 "},
            {name: "Styled Components", bg: "bg-gradient-to-r from-pink-400 to-pink-500 "},

        ],
        description: `Visualize the algorithms behind well known sorting algorithms such as 
        Insertion, Bubble, Selection, Quick, Heap, Radix, and Merge. Pause and control the playback
        speed of any of the sorting algorithms.
        `,
        src_link: "https://github.com/houserjohn/sort",
        demo_link: "https://houserjohn.github.io/sort/",
    },
    {
        title: "This Portfolio", 
        img_src: "/portfolio.png",
        img_alt: "Portfolio",
        tags: [
            {name: "Next.js", bg: "bg-gradient-to-r from-indigo-400 to-indigo-500 "},
            {name: "Typescript", bg: "bg-gradient-to-r from-red-400 to-red-500 "},
            {name: "Tailwind CSS", bg: "bg-gradient-to-r from-purple-400 to-purple-500 "},
        ],
        description: `
            Hub for all the projects I have worked on. It is fully responsive to the various
            screen sizes that may visit this site.
        `,
        src_link: "https://github.com/houserjohn/houserjohn.com",
        demo_link: "https://houserjohn.com",
    },
    
];

function ProjectManager() {
    return (
        <div className="flex gap-3 justify-center flex-wrap p-1 my-4  space-y-0">
            {project_info.map((project: any, index: number) => (
                <ProjectCard key={index} title={project.title} tags={project.tags}
                 img_src={project.img_src} src_link={project.src_link} 
                 demo_link={project.demo_link} img_alt={project.img_alt}>  
                    {project.description} 
                </ProjectCard>
            ))}
        </div>
    );
}

export default ProjectManager;