import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, Modal, ModalHeader, Row, Col } from 'reactstrap';
import PostItem from "./PostItem";
import AddOrEditPostModal from "./AddOrEditPostModal";

const theme = require('../theme.css');

export default class Posts extends Component {
    state = {
        isModalShown: false,
        currentPost: null
    };

    addNewPost = () => {
        this.setState({
            currentPost: null,
            isModalShown: true
        })
    };

    editPost = (id) => {
        this.setState({
            currentPost: id,
            isModalShown: true
        })
    };

    cancel = () => {
        this.setState({isModalShown: false})
    };

    render() {
        const { posts, getPostData, setPostData, addNewPost } = this.props;

        return (
            <div className={theme.listWrapper}>
                <h3>Posts:</h3>
                <Button outline color="secondary"
                        onClick={this.addNewPost}>
                    {'Add New Post'}
                </Button>
                <ListGroup>
                    { posts.map((post, i) => (
                        <ListGroupItem key={i}>
                            <PostItem
                                editPost={this.editPost}
                                post={post} />
                        </ListGroupItem>
                    )) }
                </ListGroup>

                <AddOrEditPostModal
                    isOpen={this.state.isModalShown}
                    onClose={this.cancel}
                    postId={this.state.currentPost}
                    getPostData={getPostData}
                    setPostData={setPostData}
                    addNewPost={addNewPost}
                />
            </div>
        )
    }

};
