import { useSelector } from 'react-redux'
import '../CSS/Home.css'
import { CardPanel, Button, Icon, Row, Col, CardTitle, Card } from 'react-materialize';

import Prompt from "../Components/Prompt";
import Txt from "../Components/Txt";

//rgb(246,244,241) #F6F4F1


const Home = () => {
    const vl = useSelector((state: {txt: string}) => state.txt);
    return (
        <div>
            <div style={{backgroundColor: "transparent"}} className="row">
                <div className="col s2" >
                    <ul style={{padding: "10% 0%", float: "left", clear: "right", position: "fixed", }}>
                        <li>
                            <Button
                            flat
                            node="button"
                            waves="light"
                            
                            >
                            About
                            </Button>
                        </li>
                        <li>
                            <Button
                            flat
                            node="button"
                            waves="light"
                            
                            >
                            Projects
                            </Button>
                        </li>
                    </ul>
                </div>
                <div  style={{backgroundColor: "transparent"}}  className="col s8">
                                
                    <CardPanel className="white col s8 offset-s2">
                    <span className="gray-text">
                        <strong>Hi, I'm John</strong> <br></br>
                        I'm a passionate computer science student at UCLA and this is my web porfolio. I made this site using React, Redux, TypeScript, 
                        and various other technologies that you can find using the source tab. 
                    </span>
                    </CardPanel>

                    <Txt>{vl}</Txt>
                    <Prompt/>
                </div>
                <div  style={{backgroundColor: "transparent"}}  className="col s2"></div>          
                
            </div>
            <div style={{marginBottom: "0px", backgroundColor: "white",}} className="row">
                <div className="col s8 offset-s2">
                    <h5>Projects</h5>
                    <Row>
                        <Col
                            s={12}
                        >
                            <Card
                            actions={[
                                <a key="1" href="/path">This is a link</a>
                            ]}
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
                            horizontal
                            revealIcon={<Icon>more_vert</Icon>}
                            >
                            Path Finding Algorithm Visualizer
                            </Card>
                            <Card
                            actions={[
                                <a key="1" href="/">This is a link</a>
                            ]}
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
                            horizontal
                            revealIcon={<Icon>more_vert</Icon>}
                            >
                            Sorting Algorithm Visualizer
                            </Card>
                            <Card
                            actions={[
                                <a key="1" href="/">This is a link</a>
                            ]}
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
                            horizontal
                            revealIcon={<Icon>more_vert</Icon>}
                            >
                            Recursive Chess Bot Algorithm
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Home;