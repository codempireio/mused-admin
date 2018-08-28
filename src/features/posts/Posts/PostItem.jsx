import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

const theme = require('../theme.css');

export default class PostItem extends Component {
    render() {
        const { post, editPost } = this.props;

        return (
            <Row className={theme.itemWrapper}>
                <Col xs="8">
                    <h4>{ post.authorName }</h4>
                </Col>
                <Col xs="4">
                    <Button outline color="secondary"
                        onClick={() => editPost(post.id)}>
                            {`Edit #${post.id}`}
                    </Button>
                </Col>
            </Row>
        )
    }

 }
