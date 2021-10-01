import ProjectCard from './ProjectCard';

let project_info = [
    {
        title: "Sorting Visualizer", 
        img_src: "sorting_visualizer_2_1.png",
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
        img_src: "portfolio_2_1.png",
        img_alt: "Portfolio",
        tags: [
            {name: "Next.js", bg: "bg-gradient-to-r from-indigo-400 to-indigo-500 "},
            {name: "Typescript", bg: "bg-gradient-to-r from-red-400 to-red-500 "},
            {name: "Tailwind CSS", bg: "bg-gradient-to-r from-purple-400 to-purple-500 "},
            {name: "React Icons", bg: "bg-gradient-to-r from-yellow-400 to-yellow-500 "},
        ],
        description: `
            Hub for all the projects I have worked on. It is fully responsive to the various
            screen sizes that may visit this site.
        `,
        src_link: "https://github.com/houserjohn/houserjohn.com",
        demo_link: "https://houserjohn.com",
    },
    {
        title: "Recreationists",
        img_src: "recreationists_2_1.png",
        img_alt: "Virtual UCLA",
        tags: [
            {name: "JS", bg: "bg-gradient-to-r from-red-400 to-red-500 " },
                {name: "Express", bg: "bg-gradient-to-r from-purple-400 to-purple-500 " },
                {name: "Heroku", bg: "bg-gradient-to-r from-pink-400 to-pink-500 " },
                {name: "Socket.io", bg: "bg-gradient-to-r from-green-400 to-green-500 " },

        ],
        description: `
            With a team of four, we virtually recreated a portion of UCLA's campus. 
            The final project allows a multiplayer experience where users can walk around
            and explore a part of the campus at a time when we were all remote due to the pandemic.
            I was responsible for handling collisions, all networking, and the physics.        
        `,
        src_link: "https://github.com/intro-graphics/team-project-recreationists",
        demo_link: "http://www.cs174a.com",
    } 
];

function ProjectManager() {
    return (
        <div className="flex gap-3 justify-center flex-wrap space-y-0">
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