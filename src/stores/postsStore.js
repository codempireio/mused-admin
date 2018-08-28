import { observable, action } from 'mobx';
import _ from 'lodash'
// import { getPosts } from '../services';

export default class ObservableStore {
    constructor(root) {}

    @observable posts = [
        {id: 1, authorName: 'Ivan Ivanov', authorImg: 'https://uploads-ssl.webflow.com/5a2841982551540001970010/5b3f97762cfda077fea09a33_prof.jpg'},
        {id: 2, authorName: 'Max Sushin', authorImg: 'https://uploads-ssl.webflow.com/5a2841982551540001970010/5b3f97762cfda077fea09a33_prof.jpg'},
        {id: 3, authorName: 'Igor Suvorov', authorImg: 'https://uploads-ssl.webflow.com/5a2841982551540001970010/5b3f97762cfda077fea09a33_prof.jpg'},
        {id: 4, authorName: 'Sergei Lititn', authorImg: 'https://uploads-ssl.webflow.com/5a2841982551540001970010/5b3f97762cfda077fea09a33_prof.jpg'},
        {id: 5, authorName: 'Ivan Borman', authorImg: 'https://uploads-ssl.webflow.com/5a2841982551540001970010/5b3f97762cfda077fea09a33_prof.jpg'}
    ];

    get listOfPosts (){
        return this.posts;
    }

    @action
    setPostData = (post) => {
        const { userAuthId, userProfile } = user;

        this.id = userAuthId;
        this.profile = userProfile;
    };

    @action
    getPostData = (id) => {
        return _.find(this.posts, function(post) { return post.id === id; });
    };
}
