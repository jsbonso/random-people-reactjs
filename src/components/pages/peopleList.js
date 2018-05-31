import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPeople} from '../../actions/peopleActions';
import {bindActionCreators} from 'redux';
import { Popover, Alert,OverlayTrigger, Nav, Navbar, NavItem, Button, Jumbotron, ProgressBar, Glyphicon } from 'react-bootstrap';

import PersonItem from './personItem';

class PeopleList extends React.Component{

    componentDidMount(){
        this.props.getPeople();
    }
    handleClick(){
        this.fetching = true;
        this.props.getPeople(this.props.people)

        this.fetching = false;

    }
    render(){
        const button = <Button bsStyle="primary" bsSize="large" onClick={this.handleClick.bind(this)} >Fetch More...</Button>
        const list = this.props.people.map(function(peopleArr,index){

            return(

                <PersonItem
                    key={index}
                    id={index}
                    data={peopleArr}
                />

            )
        });


        const popover = (
            <Popover id="modal-popover" title="Instructions" >
                <div>
                1. Click the person to view full details <br />
                2. Click <code>Fetch More</code> below to load more data <br />
                </div>
            </Popover>
        );

        const about = (
            <Popover id="modal-popover" title="About" >
                <div>
                    - Random People React + Redux App <br />
                    - Developed by Jon Bonso <br />
                </div>
            </Popover>
        );

        return(
            <div >

                {(list.length)?
                    <div id="peopleListWrapper">
                        <Navbar inverse collapseOnSelect>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a href="#"><strong>Random People</strong></a>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav>
                                    <NavItem eventKey={1} href="#">
                                        <OverlayTrigger overlay={about} placement="bottom">
                                           <span>About</span>
                                        </OverlayTrigger>
                                    </NavItem>
                                    <NavItem eventKey={2} href="#">
                                        <OverlayTrigger overlay={popover} placement="bottom">
                                            <span>Instructions</span>
                                        </OverlayTrigger>
                                    </NavItem>
                                </Nav>
                                <Nav pullRight>
                                    <NavItem eventKey={3} href="https://linkedin.com/in/jonbonso">
                                        Author: Jon Bonso
                                    </NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <div id="peopleList">{list}</div>
                        <div id="peopleButton">{button}</div>

                    </div>
                    : <div className={"row"}>
                        <Alert bsStyle="info" className="text-center">
                            <strong>Fetching Random People data. . .</strong>

                            <ProgressBar bsStyle="success" className={"center-block"} active now={100} />
                        </Alert>
                      </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        people: state.people.people
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getPeople:getPeople
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
