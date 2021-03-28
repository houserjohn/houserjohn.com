import 'materialize-css/dist/css/materialize.min.css'
import { Navbar, NavItem, Icon } from 'react-materialize';
import { NavLink } from "react-router-dom";

const Topbar = () => {
    return (
        <div  style={{backgroundColor: "yellow", marginBottom: "0px", zIndex: 1,}} className="row">
            <div>
                <Navbar
                alignLinks="right"
                brand={<a className="brand-logo black-text"  href="/">Logo</a>}
                centerChildren
                id="mobile-nav"
                menuIcon={<Icon className="black-text">menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    outDuration: 200,
                    preventScrolling: true
                }}
                className="white"
                >
                <NavLink to="/techopedia" className="grey-text" activeClassName="black-text">Techopedia</NavLink>
                <NavItem className="grey-text" href="https://github.com/houserjohn/houserjohn.com">Source</NavItem>
                </Navbar>
            </div>
        </div>
    );
}

//<NavLink to="/" className="grey-text" activeClassName="black-text">Home</NavLink>

export default Topbar;