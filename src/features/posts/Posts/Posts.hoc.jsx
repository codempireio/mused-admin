import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ROOT_STORE } from "../../../stores";

import Posts from './Posts';

function CollectionHOC(Posts) {
    @inject(ROOT_STORE)

    @observer
    class NewComp extends Component {
        componentDidMount() {
            const { root: { posts } } = this.props;
            const { getAllPosts } = posts;

            getAllPosts();
        }

        render() {
            const { root: { posts } } = this.props;
            const { listOfPosts, getPostData, setPostData, addNewPost } = posts;

            return <Posts
                posts={listOfPosts}
                getPostData={getPostData}
                setPostData={setPostData}
                addNewPost={addNewPost}
            />
        }

    }
    return NewComp;
}

export default CollectionHOC(Posts);
