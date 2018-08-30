import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { isNumber } from '../../../services/utils'

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

const SLOTS = [
    1, 2, 3, 4, 5
];

const getSlots = slots => {
    const s1 = {};
    if (!slots) return s1;
    slots.forEach((slot, i) => {
        s1[`slot${i + 1}Product`] = slot.productId;
        s1[`slot${i + 1}Alts`] = slot.alternatives.join('\n');
    });

    return s1;
};

export default class AddOrEditPostModal extends Component {
    type = types.add;

    state = {
        authorName: '',
        authorProfilePhotoURL: '',
        inspirationalImageURL: '',
        backgroundImageURL: '',

        slot1Product: '',
        slot2Product: '',
        slot3Product: '',
        slot4Product: '',
        slot5Product: '',

        slot1Alts: '',
        slot2Alts: '',
        slot3Alts: '',
        slot4Alts: '',
        slot5Alts: '',

        errorMsg: null
    };

    componentDidUpdate(prevProps) {
        if (this.props.isOpen !== prevProps.isOpen && this.props.isOpen === true) {
            const { postId, getPostData } = this.props;

            if (postId) {
                const postData = getPostData(postId);

                this.type = types.edit;
                const slots = getSlots(postData.slots);
                this.setState({
                    authorName: postData.authorName,
                    authorProfilePhotoURL: postData.authorProfilePhoto || '',
                    inspirationalImageURL: postData.inspirationalImage || '',
                    backgroundImageURL: postData.backgroundImage || '',
                    ...slots
                })
            } else {
                this.type = types.add;
                this.clearForm();
            }
        }
    }

    savePost = () => {
        const { onClose, setPostData, addNewPost, postId } = this.props;
        const post = {
            authorName: this.state.authorName,
            authorProfilePhoto: this.state.authorProfilePhotoURL,
            inspirationalImage: this.state.inspirationalImageURL,
            backgroundImage: this.state.backgroundImageURL,
            slots: this.setSlots()
        };

        this.type === types.edit ? setPostData({postId, ...post}) : addNewPost(post);
        onClose()
    };

    setSlots = () => {
        return SLOTS.map((slot, i) => {
            return this.state[`slot${i + 1}Product`] ? {
                productId: this.state[`slot${i + 1}Product`],
                alternatives: this.state[`slot${i + 1}Alts`] ? this.state[`slot${i + 1}Alts`].split('\n') : []
            } : null;
        }).filter(Boolean);
    };

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
                                    <Label for="authorName">Author Name</Label>
                                    <Input
                                        value={this.state.authorName}
                                        onChange={this.handleAuthorNameChange}
                                        id="authorName"
                                        type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="authorProfile">Author Profile Image URL</Label>
                                    <Input
                                        value={this.state.authorProfilePhotoURL}
                                        onChange={this.handleAuthorProfilePhoto}
                                        id="authorProfile"
                                        type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="inspirationalImage">Inspirational Image URL</Label>
                                    <Input
                                        value={this.state.inspirationalImageURL}
                                        onChange={this.handleInspirationalImage}
                                        id="inspirationalImage"
                                        type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="backgroundImageURL">Background Image URL</Label>
                                    <Input
                                        value={this.state.backgroundImageURL}
                                        onChange={this.handleBackgroundImage}
                                        id="backgroundImageURL"
                                        type="text" />
                                </FormGroup>
                                <Row>
                                    { this.renderSlots() }
                                </Row>
                                { this.state.errorMsg && <Alert color="danger">
                                    { this.state.errorMsg }
                                </Alert> }
                            </Form>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button outline color="primary" onClick={this.savePost}>{ submitText[type] }</Button>{' '}
                    <Button outline color="secondary" onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }

    renderSlots = () =>
        SLOTS.map((slot, i) => {
            return (
                <Col style={{width: '20%'}} key={i}>
                    <FormGroup>
                        <Label for={`slot${slot}`}>{`Slot #${slot} Product Id`}</Label>
                        <Input
                            value={this.state[`slot${slot}Product`]}
                            onChange={(event) => this.handleSlotProduct(slot, event.target.value)}
                            id={`slot${slot}`}
                            type="text" />
                        <Label for={`slot${slot}Alts`}>{`Slot #${slot} Alternatives`}</Label>
                        <Input
                            value={this.state[`slot${slot}Alts`]}
                            onChange={(event) => this.handleSlotAlts(slot, event.target.value)}
                            id={`slot${slot}Alts`}
                            type="textarea"
                            rows="8" />
                    </FormGroup>
                </Col>
            )
        });

    clearForm = () => this.setState({
        authorName: '',
        authorProfilePhotoURL: '',
        inspirationalImageURL: '',
        backgroundImageURL: '',
        slot1Product: '',
        slot2Product: '',
        slot3Product: '',
        slot4Product: '',
        slot5Product: '',
        slot1Alts: '',
        slot2Alts: '',
        slot3Alts: '',
        slot4Alts: '',
        slot5Alts: '',
    });

    handleAuthorNameChange = (event) => this.setState({authorName: event.target.value});
    handleAuthorProfilePhoto = (event) => this.setState({authorProfilePhotoURL: event.target.value});
    handleInspirationalImage = (event) => this.setState({inspirationalImageURL: event.target.value});
    handleBackgroundImage = (event) => this.setState({backgroundImageURL: event.target.value});

    handleSlotProduct = (slot, value) => {
        (isNumber(value) || value === '') &&
            this.setState({[`slot${slot}Product`]: value});
    };
    handleSlotAlts = (slot, value) => {
        (isNumber(value.replace(/\n/g,'')) || value === '') &&
            this.setState({[`slot${slot}Alts`]: value});
    }
}
