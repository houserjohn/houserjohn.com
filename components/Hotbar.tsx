import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Hotbar() {
    return (
        <div className="bg-white sm:sticky sm:top-0 z-50">
            <div className="sm:w-9/12 sm:flex py-2 m-auto">
                <div className="sm:flex w-1/3">
                    <div className="p-1">Portfolio</div>
                </div>
                <div className="sm:flex w-1/3 space-x-10"> 
                    <div className="p-1 text-gray-500">Home</div>
                    <div className="p-1 text-gray-500">Projects</div>
                    <div className="p-1 text-gray-500 whitespace-nowrap">Skill Set</div>
                    <div className="p-1 text-gray-500">Contact</div>
                </div>
                <div className="sm:flex w-1/3 place-content-end space-x-4">
                    <a href="https://github.com/houserjohn" className="my-auto">
                        <AiFillGithub size="1.5rem" href="https://github.com/houserjohn" className=" my-auto text-gray-500" />
                    </a>
                    <a href="https://www.linkedin.com/in/houserjohn/" className="my-auto">
                        <AiFillLinkedin size="1.5rem" className="my-auto text-gray-500"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hotbar;
