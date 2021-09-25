
interface Tag_Props {
    children: any,
    bg?: string,
}

// <div className="rounded-4xl bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl  inline-block w-auto px-2 text-white">
function Tag(props: Tag_Props) {
    return (
        <div className={(props.bg !== "" ? props.bg : "bg-gradient-to-r from-blue-400 to-blue-500 ") + "border py-1 text-white inline-block w-auto rounded-xl font-medium text-xs px-2"}>
            {props.children}
        </div>
    );
}

export default Tag;