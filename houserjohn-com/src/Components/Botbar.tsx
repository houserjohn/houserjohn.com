import { Footer } from 'react-materialize';

//rgb(240,237,234) #F0EDEA

const Botbar = () => {
    return (
        <Footer
        className="grey lighten-5 black-text"
        copyrights="Created by John Houser"
        links={<ul><li><a className="grey-text text-darken-3" href="#!">Link 1</a></li>
        <li><a className="grey-text text-darken-3" href="#!">Link 2</a></li>
        <li><a className="grey-text text-darken-3" href="#!">Link 3</a></li>
        <li><a className="grey-text text-darken-3" href="#!">Link 4</a></li></ul>}
        moreLinks={<a className="grey-text text-darken-4 right" href="#!">More Links</a>}
        >
        <h5 className="black-text">
            Footer Content
        </h5>
        <p className="grey-text text-darken-4">
            You can use rows and columns here to organize your footer content.
        </p>
        </Footer>
    );
}

export default Botbar;