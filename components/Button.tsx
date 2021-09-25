function Button() {
    return (
        <button onClick={()=>console.log("Hello")} className="p-3 border justify-center rounded-xl inline-block mt-6 text-center text-white text-sm bg-green-400 hover:bg-gray-400 hover:shadow font-medium">
            Resume
        </button>
    );
}

export default Button;