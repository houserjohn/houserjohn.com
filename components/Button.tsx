function Button() {
    return (
        <a href="/9.30.2021.pdf" onClick={()=>console.log("Hello")} className="cursor-pointer p-3 border justify-center rounded-xl inline-block mt-6 text-center text-white text-sm bg-green-400 hover:bg-gray-400 hover:shadow font-medium">
            Resume
        </a>
    );
}

export default Button;