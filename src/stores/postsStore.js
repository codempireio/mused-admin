import { observable, action } from 'mobx';
import _ from 'lodash'
import { getAllPosts } from '../services';

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
    setPostData = (post) => {
        const index = _.findIndex(this.posts, {postId: post.postId});

        this.posts.splice(index, 1, _.merge(this.posts[index], post));
        this.posts = [...this.posts];
    };

    @action
    addNewPost = (post) => {
        post.postId = this.posts.length + 1;

        this.posts = [...this.posts, post];
    };

    @action
    getPostData = (id) => {
        return _.find(this.posts, function(post) { return post.postId === id; });
    };
}
