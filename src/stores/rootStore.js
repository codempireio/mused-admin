import UserStore from './userStore';
import ProductsStore from './productsStore';


export default class RootStore {
    constructor() {
        this.user = new UserStore(this);
        this.products = new ProductsStore(this);
    }
}

