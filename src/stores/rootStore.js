import UserStore from './userStore';
import ProductsStore from './productsStore';
import PostsStore from './postsStore';

export default class RootStore {
    constructor() {
        this.user = new UserStore(this);
        this.products = new ProductsStore(this);
        this.posts = new PostsStore(this);
    }
}

