import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Hotbar() {
    return (
        <div className="bg-white sm:top-0 z-50">
            <div className="sm:w-6/12 sm:flex py-2 m-auto">
                <div className="sm:flex w-1/2">
                    <Link href="/">
                        <div className="p-1 font-medium cursor-pointer">Portfolio</div>
                    </Link>
                </div>
                
                <div className="sm:flex w-1/2 place-content-end space-x-4">
                    <a href="https://github.com/houserjohn" className="my-auto">
                        <AiFillGithub size="1.5rem" href="https://github.com/houserjohn" className=" my-auto text-gray-400 hover:text-black" />
                    </a>
                    <a href="https://www.linkedin.com/in/houserjohn/" className="my-auto">
                        <AiFillLinkedin size="1.5rem" className="my-auto text-gray-400 hover:text-black"/>
                    </a>
                    <a href="https://github.com/houserjohn/houserjohn.com" className="my-auto text-gray-400 cursor-pointer hover:text-black">
                        Source
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hotbar;
