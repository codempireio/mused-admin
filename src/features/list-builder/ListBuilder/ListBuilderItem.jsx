import React, { Component } from 'react';
import { Col, Button } from 'reactstrap';
import theme from '../theme';


export default class ListBuilderItem extends Component {
    render() {
        const { product } = this.props;
        return (
            <Col xs="4">
                <img src={product.image} width="50" height="50" />
                <Button outline color="secondary">
                    {`Add #${product.id}`}
                </Button>
            </Col>
        )
    }

 }
