import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const theme = require('../theme.css');

const types = {
    edit: 'edit',
    add: 'add'
};

const title = {
    edit: 'Edit Post',
    add: 'Add New Post'
};

const submitText = {
    edit: 'Edit Post',
    add: 'Add Post'
};

export default class AddOrEditPostModal extends Component {
    type = types.add;

    state = {
        authorName: '',
        errorMsg: null
    };

    componentDidUpdate(prevProps) {
        if (this.props.isOpen !== prevProps.isOpen && this.props.isOpen === true) {
            const { postId, getPostData } = this.props;

            if (postId) {
                const postData = postId ? getPostData(postId) : null;

                this.type = types.edit;
                this.setState({
                    authorName: postData.authorName
                })
            } else {
                this.type = types.add;
                this.clearForm();
            }
        }
    }

    render() {
        const { isOpen, onClose } = this.props;
        const type = this.type;

        return (
            <Modal isOpen={isOpen} >
                <ModalHeader>{ title[type] }</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col xs="12">
                            <Form>
                                <FormGroup>
                                    <Label for="inputAuthor">Author Name</Label>
                                    <Input
                                        value={this.state.authorName}
                                        onChange={this.handleAuthorNameChange}
                                        id="inputAuthor"
                                        type="text" />
                                </FormGroup>
                                { this.state.errorMsg && <Alert color="danger">
                                    { this.state.errorMsg }
                                </Alert> }
                            </Form>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button outline color="primary" onClick={onClose}>{ submitText[type] }</Button>{' '}
                    <Button outline color="secondary" onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </Modal>

        )
    }

    clearForm = () => this.setState({
        authorName: ''
    });

    handleAuthorNameChange = (event) => this.setState({authorName: event.target.value});
}
