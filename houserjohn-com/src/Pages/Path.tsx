import React from 'react';
import { RouteProps } from 'react-router';
import { connect } from 'react-redux';

import { Navbar, NavItem, Icon, Breadcrumb, Button, Dropdown, TextInput, Range } from 'react-materialize';
import Box from "../Components/Box";

interface Props {
    set_grid: any,
    set_alg: any,
    alg: any,
}

interface State {
    someString: string,
    loading: boolean
}


class Path extends React.Component<Props & RouteProps, State> {
    /*
    constructor(props: any) {
        super(props);
    }
    */

    on_grid_change = (e: any) => {
        this.props.set_grid(e.target.value);
        //alert(e.target.value);
    }

    on_dropdown_click = (option: string) => {
        this.props.set_alg(option);   
    }

    create_grid = () : any => {
        
        let a = [];
        let i = 0;
        for (i = 0; i < 3; i++) {
            a.push(<Box/>);
        }
        return (
            <div>
                {a}
            </div>
        );
    }

    create_dropdown_item = (active_option: string, option: string) : any => {
        //onClick={() => this.on_dropdown_click("DFS")
        if (option === active_option) {
            return (
                <span className="grey-text" onClick={() => this.on_dropdown_click(option)}>
                {option}
                </span>
            );
        }
        return (
            <span className="black-text" onClick={() => this.on_dropdown_click(option)}>
            {option}
            </span>
        )
    }
    render() {
        return (
            <div style={{margin: "0px"}}>
                <Breadcrumb
                className="grey"
                cols={12}
                >
                <a href="/">
                    Home
                </a>
                <a href="/path">
                    Path
                </a>
                </Breadcrumb>

                <Navbar
                alignLinks="left"
                id="mobile-nav"
                className="white"
                menuIcon={<Icon>menu</Icon>}
                >
                <NavItem className="teal white-text">
                    <strong>Pathfinding Visualizer</strong>
                </NavItem>

                <Dropdown
                    className="white orange-text"
                    id="Dropdown-1"
                    options={{
                    alignment: 'left',
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    container: null,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    outDuration: 250,
                    }}
                    trigger={<a href="#!" className="grey-text"> {this.props.alg} {' '}<Icon right>arrow_drop_down</Icon></a>}
                >
                    {this.create_dropdown_item(this.props.alg, "DFS")}
                    {this.create_dropdown_item(this.props.alg, "BFS")}
                    {this.create_dropdown_item(this.props.alg, "three")}
                </Dropdown>
                <NavItem className="">
                <TextInput
                id="TextInput-1"
                placeholder="5x5"
                s={1}
                l={1}
                label="Rows x Cols"
                onChange={this.on_grid_change}
                />
                </NavItem>
                <NavItem onClick={function noRefCheck(){}} className="grey-text">
                    Getting started
                </NavItem>
                <NavItem href="components.html" className="grey-text">
                    Components
                </NavItem>
                <Button
                    large
                    node="a"
                >
                    START
                </Button>
            
                </Navbar>
                
                <div style={{backgroundColor: "green", height: "85vh", width: "100%", margin: "auto", marginTop: "0px"}}>
                    {this.create_grid()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
     
  
    // component receives additionally:
    return { grid: state.grid, alg: state.alg };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
      // dispatching plain actions
      set_grid: (new_grid: string): any => dispatch({ type: 'path/set_grid', payload: new_grid }),
      set_alg: (new_alg: string): any => dispatch({ type: 'path/set_alg', payload: new_alg }),
    }
}

//export default Path;
export default connect(mapStateToProps, mapDispatchToProps)(Path);