import React, { Component } from 'react';
import { Container,  Row, Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import ListBuilderItem from "./ListBuilderItem"

export default class ListBuilder extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="8">
                        <ListBuilderItem/>
                    </Col>
                </Row>
            </Container>
        )
    }

 }
