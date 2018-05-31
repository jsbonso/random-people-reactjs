"use strict"
import React from 'react';
import { Col, ControlLabel, Checkbox, Form, FormControl, FormGroup, Modal, Button } from 'react-bootstrap';
class PersonItem extends React.Component{

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){

        var p = this.props.data;
        var dob = new Date(p.dob ? p.dob : new Date() );
        var regDate = new Date(p.registered ?  p.registered : new Date()  );
        var dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };


        return(
            <div>
            <div className="person">
                <Button block bsStyle="info" bsSize="large" onClick={this.handleShow}>
                <div className="picture">{p.picture && p.picture.large ? <img src={p.picture.large} /> : ''}</div>
                <div className="name">{p.name.first} {p.name.last}</div>
                <div className="location">{p.location.city}, {p.location.state}</div>

                <div className="email">{p.email}</div>
                </Button>
            </div>

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">

                            <div className="picture">{p.picture && p.picture.thumbnail ? <img src={p.picture.thumbnail} /> : ''}
                            <span className="text-capitalize">&nbsp;&nbsp;{p.name.first} {p.name.last}</span>'s Profile</div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form horizontal>
                            <FormGroup >
                                <Col componentClass={ControlLabel} sm={2}>
                                    ID
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="id" placeholder="Id" value={p.id.name + ' ' + p.id.value} readOnly />
                                </Col>

                            </FormGroup>

                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Title
                                </Col>
                                <Col sm={3}>
                                    <FormControl className="text-capitalize" type="title" placeholder="title" value={p.name.title} readOnly />
                                </Col>
                                <Col componentClass={ControlLabel} sm={3}>
                                    Username
                                </Col>
                                <Col sm={4}>
                                    <FormControl id="dob" placeholder="dob"
                                                 value={p.login.username} readOnly />
                                </Col>
                            </FormGroup>

                            <FormGroup >
                                <Col componentClass={ControlLabel} sm={2}>
                                    Full Name
                                </Col>
                                <Col sm={10}>
                                    <FormControl className="text-capitalize" id="fullName" placeholder="fullName" value={p.name.first + ' ' + p.name.last} readOnly />
                                </Col>
                            </FormGroup>

                            <FormGroup >
                                <Col componentClass={ControlLabel} sm={2}>
                                    Gender
                                </Col>
                                <Col sm={3}>
                                    <FormControl className="text-capitalize" id="gender" placeholder="gender" value={p.gender} readOnly />
                                </Col>
                                <Col componentClass={ControlLabel} sm={3}>
                                    Date of Birth
                                </Col>
                                <Col sm={4}>
                                    <FormControl className="text-capitalize" id="dob" placeholder="dob"
                                                 value={dob.toLocaleDateString("en-US", dateOptions)} readOnly />
                                </Col>
                            </FormGroup>

                            <FormGroup >
                                <Col componentClass={ControlLabel} sm={2}>
                                    Phone
                                </Col>
                                <Col sm={3}>
                                    <FormControl className="text-capitalize" id="dob" placeholder="dob"
                                                 value={p.phone} readOnly />
                                </Col>
                                <Col componentClass={ControlLabel} sm={3}>
                                    Registered
                                </Col>
                                <Col sm={4}>
                                    <FormControl className="text-capitalize" id="city" placeholder="dob"
                                                 value={regDate.toLocaleDateString("en-US", dateOptions)} readOnly />
                                </Col>
                            </FormGroup>


                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Street
                                </Col>
                                <Col sm={4}>
                                    <FormControl className="text-capitalize" id="street" placeholder="street" value={p.location.street} readOnly />
                                </Col>
                                <Col componentClass={ControlLabel} sm={2}>
                                    State
                                </Col>
                                <Col sm={4}>
                                    <FormControl className="text-capitalize" id="state" placeholder="state" value={p.location.state} readOnly />
                                </Col>
                            </FormGroup>


                            <FormGroup >
                                <Col componentClass={ControlLabel} sm={2}>
                                    City
                                </Col>
                                <Col sm={4}>
                                    <FormControl className="text-capitalize" id="city" placeholder="city" value={p.location.city} readOnly />
                                </Col>
                                <Col componentClass={ControlLabel} sm={2}>
                                    PostCode
                                </Col>
                                <Col sm={4}>
                                    <FormControl className="text-capitalize" id="postcode" placeholder="postcode" value={p.location.postcode} readOnly />
                                </Col>
                            </FormGroup>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}
export default PersonItem;