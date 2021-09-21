import Tag from './Tag';

function ProjectCard() {
    return (
        <div className="bg-white inline-block w-auto h-auto rounded-xl  shadow-lg">
            <div className="">
                <img className="bg-gray-200 rounded-t-xl w-96 h-40 " alt="sorting visualizer"/>
                <div className="w-12/12 border rounded-b-xl relative h-fit px-4">
                    <div className="text-md pt-2 font-medium inline-block w-auto pr-2">Sorting Visualizer</div>
                    <Tag/>
                    <div className="text-gray-500 font-small">
                        Description
                    </div>
                    <div className="pb-2 ">
                        <hr className="my-1 "/>
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

    );
}

export default ProjectCard;