import Hotbar from './Hotbar';
import ProjectManager from './ProjectManager';
import SkillManager from './SkillManager';
import Divider from './Divider';

let wave_style: any = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    overflow: "hidden",
    lineHeight: "0",
};

let wave_svg_style: any = {
    position: "relative",
    display: "block",
    width: "calc(169% + 1.3px)",
    height: "152px",
};

let wave_shape_fill_style_1: any = {
    fill: "#FFFFFF"
}

let wave_shape_fill_style_2: any = {
    fill: "#F3F4F6"
}



function Portfolio() {
    return (
        <div>
            <Hotbar/>
            <div className="h-screen">
                <div className="mt-20 mb-20">
                    <div className="shadow-lg bg-gray-100 w-4/12 rounded-xl m-auto p-5 sm:flex space-x-2">
                        <img alt="Headshot" className="bg-gray-200 w-40 h-40 rounded-full"/>
                        <div className="flex-1">
                            <div className="text-3xl mb-2">John Houser</div>
                            <div className="text-sm text-gray-600 mb-1">3rd year CS student @ UCLA. </div>
                            <div className="text-sm text-gray-600 mb-1"> Passionate about computer science.</div>
                            <div className="text-sm text-gray-600"> Building useful tools with software.</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="p-3 justify-center hover:shadow-xl rounded-xl inline-block mt-6 text-center text-white text-sm bg-green-400 hover:bg-green-600 font-medium">
                            Resume
                        </button>
                    </div>
                </div> 
            </div>
            <div className="relative">
                <div style={wave_style}>
                    <svg style={wave_svg_style} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path style={wave_shape_fill_style_1} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path>
                    </svg>
                </div>
            </div>
            <div className="bg-gray-100 py-10">
                <div className="w-10/12 m-auto">
                    <Divider/>
                    <div className="text-4xl font-medium">Projects</div>
                    <ProjectManager/>
                    <Divider/>
                    <div className="text-4xl font-medium mt-3">Skill Set</div>
                    <SkillManager/>
                </div>
            </div>
            <div className="relative">
                <div style={wave_style}>
                    <svg style={wave_svg_style} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path style={wave_shape_fill_style_2} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path>
                    </svg>
                </div>
            </div>
            <div className="w-10/12 m-auto pb-20">
                <div className="w-20 h-3 mt-40 bg-gray-500 text-opacity-0 text-black rounded-full bg-gradient-to-r from-green-400 to-blue-500">a</div>
                <div className="text-4xl font-medium mt-2">Contact</div>
                <div className="grid grid-cols-2 mt-5">
                    <div>
                        <div className="text-gray-500 font-medium text-sm">Email</div>
                        <div>john (at) houserjohn (dot) com</div>
                    </div>
                    <div>
                        <div className="text-gray-500 font-medium text-sm">Cell</div>
                        <div>208-412-5439</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;