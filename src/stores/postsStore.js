import { observable, action } from 'mobx';
import _ from 'lodash'
import { getAllPosts, addPost, updatePost } from '../services';

export default class ObservableStore {
    constructor(root) {}

    @observable posts = [
        {
            postId: 1,
            authorName: 'Ivan Ivanov',
            authorProfilePhoto: 'https://uploads-ssl.webflow.com/5a2841982551540001970010/5b3f97762cfda077fea09a33_prof.jpg',
            inspirationalImage: '',
            backgroundImage: '',

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
        }];

    get listOfPosts (){
        return this.posts;
    }

    @action
    getAllPosts = async () => {
        this.posts = await getAllPosts();
    };

    @action
    setPostData = async (post) => {
        const newPost = await updatePost(post);
        // TODO: check new post and refactor this logic
        console.log(newPost);

        const index = _.findIndex(this.posts, {postId: post.postId});
        this.posts.splice(index, 1, _.merge(this.posts[index], post));
        this.posts = [...this.posts];
    };

    @action
    addNewPost = async (post) => {
        post.postId = this.posts.length + 1;
        // TODO: test it
        try {
            const newPost = await addPost(post);
            this.posts = [...this.posts, newPost];
        } catch(error) {
            console.error(error)
        }
    };

    @action
    getPostData = (id) => {
        return _.find(this.posts, post => post.postId === id);
    };
}
