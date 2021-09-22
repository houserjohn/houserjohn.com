interface Index_Props {
    children: any;
};

function IndexOfContent(props: Index_Props) {
    return (
        <div className="">
            <nav className="py-2 px-3 rounded-full text-gray-500 cursor-pointer hover:bg-gray-200 inline-block w-auto" aria-label="Table of contents">
                {props.children}
            </nav>
        </div>
    );
}

export default IndexOfContent;