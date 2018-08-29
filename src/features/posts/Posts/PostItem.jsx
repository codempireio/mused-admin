import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

const theme = require('../theme.css');

export default class PostItem extends Component {
    render() {
        const { post, editPost } = this.props;
        const { postId, authorName, authorProfilePhoto } = post;

        return (
            <Row className={theme.itemWrapper}>
                <Col xs="2">
                    { authorProfilePhoto && <img src={authorProfilePhoto} width="50" height="50" /> }
                </Col>
                <Col xs="6">
                    <h4>{ authorName }</h4>
                </Col>
                <Col xs="4">
                    <Button outline color="secondary"
                        onClick={() => editPost(postId)}>
                            {`Edit #${postId}`}
                    </Button>
                </Col>
            </Row>
        )
    }

 }
