import Tag from './Tag';

function ProjectCard() {
    return (
        <div className="bg-white h-64 rounded-xl shadow-lg">
            <div className="flex">
                <div className="flex space-x-2 ">
                    <img className="bg-gray-200 rounded-xl w-64 h-64" alt="sorting visualizer"/>
                    <div className="w-64 relative">
                        <div className="text-xl text-center pt-2 font-medium">Sorting Visualizer</div>
                        <div className="text-gray-500">
                            Description
                        </div>
                        <div className="bottom-2 absolute w-64 ">
                            <Tag/>
                            <hr className="mt-2"/>
                            <div className=" flex justify-center space-x-2">
                                <div className="text-gray-500 text-sm">
                                    Source
                                </div>
                                <div className="text-gray-500 text-sm">
                                    Demo
                                </div>     
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProjectCard;