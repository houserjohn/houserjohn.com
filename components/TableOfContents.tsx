import IndexOfContent from "./IndexOfContent";

function TableOfContents() {
    return (
        <div className="fixed text-center h-screen z-50 w-2/12">
            <div className="h-1/3"></div>
            <div className="flex-col h-1/3">
                <IndexOfContent>Home</IndexOfContent>
                <IndexOfContent>Projects</IndexOfContent>
                <IndexOfContent>Skill Set</IndexOfContent>
                <IndexOfContent>Contact</IndexOfContent>
            </div>
        </div>
    );
}

export default TableOfContents;