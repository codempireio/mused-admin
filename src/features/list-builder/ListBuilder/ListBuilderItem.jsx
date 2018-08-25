import React, { Component } from 'react';
import { Col, Button } from 'reactstrap';

const theme = require('../theme.css');

export default class ListBuilderItem extends Component {
    render() {
        const { product, addId } = this.props;
        return (
            <Col xs="3" className={theme.itemWrapper}>
                <img src={product.image} width="50" height="50" />
                <Button outline color="secondary"
                    onClick={() => addId(product.id)}>
                        {`Add #${product.id}`}
                </Button>
            </Col>
        )
    }

 }
