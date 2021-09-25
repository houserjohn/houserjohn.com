interface Index_Props {
    children: any;
    active?: boolean;
};

function IndexOfContent(props: Index_Props) {
    return (
        <div className="">
            <nav className={(props.active ? "font-medium " : "text-gray-500 ") + "py-2 px-3 rounded-full cursor-pointer hover:bg-gray-200 hover:shadow inline-block w-auto"} aria-label="Table of contents">
                {props.children}
            </nav>
        </div>
    );
}

export default IndexOfContent;