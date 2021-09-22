
import Divider from './Divider';

interface Header_Props {
    children: any;
    id: string;
}

function Header(props: Header_Props) {
    return (
        <div>
        <Divider/>
        <h2 className="text-4xl font-medium" id={props.id}>{props.children}</h2>
        </div>
    );
}

export default Header;