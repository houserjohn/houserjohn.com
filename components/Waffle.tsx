import { AiOutlineMenu, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';

const Waffle = () => {
    const [isNavMenuVisible, setNavMenuVisible] = useState(false);

    const onWaffleClick = () => {
        setNavMenuVisible(!isNavMenuVisible);
    }

    return (
        <div className={(isNavMenuVisible ? "bg-gray-100 fixed " : "absolute ") + " z-40"}>
            <div onClick={() => onWaffleClick()} className="inline-block w-auto p-4 z-40">
                <AiOutlineMenu size="2.5rem" className={( isNavMenuVisible ? "text-black " : "text-gray-400 " )+"my-auto mt-5 mx-2 cursor-pointer sm:hidden"}/>
            </div>
            <div className={(isNavMenuVisible ? "" : "hidden ") + " bg-gray-100 z-50 w-screen py-10 pl-10"}>
                <div className="flex flex-col gap-2">
                    <Link href="/">
                        <div className=" font-medium text-gray-400 cursor-pointer hover:text-black text-xl">Portfolio</div>
                    </Link>
                    <a href="https://github.com/houserjohn" className="my-auto">
                        <div className="inline-block w-auto pr-2 m-auto text-gray-400 text-xl">Github</div>
                        <AiFillGithub size="1.5rem" href="https://github.com/houserjohn" className="inline-block w-auto my-auto text-gray-400 hover:text-black" />
                    </a>
                    <a href="https://www.linkedin.com/in/houserjohn/" className="my-auto">
                        <div className="inline-block w-auto pr-2 m-auto text-gray-400 text-xl">LinkedIn</div>
                        <AiFillLinkedin size="1.5rem" className="inline-block w-auto my-auto text-gray-400 hover:text-black"/>
                    </a>
                    <a href="https://github.com/houserjohn/houserjohn.com" className="my-auto text-xl text-gray-400 cursor-pointer hover:text-black">
                        Source
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Waffle;