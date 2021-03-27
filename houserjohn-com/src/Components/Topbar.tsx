import 'materialize-css/dist/css/materialize.min.css'
import { Navbar, Icon } from 'react-materialize';
import { Link } from "react-router-dom";

const Topbar = () => {
    return (
        
        <Navbar
        alignLinks="left"
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        >
        <Link to="/">Home</Link>
        <Link to="/techopedia">Techopedia</Link>
        </Navbar>
        /*
        <Button
            node="button"
            style={{
            marginRight: '5px'
            }}
            waves="light"
        >
            button
        </Button>
        */
    );
}

export default Topbar;