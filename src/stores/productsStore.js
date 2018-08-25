import { observable, action, computed } from 'mobx';
import { getAllProducts } from '../services';

export default class ObservableStore {
    constructor(root) {}

    @observable products = [];
    // @observable categories = [];

    get listOfProducts (){
        return this.products;
    }

    @computed get allCategories (){
        if (!this.products.length) return [];
        let categories = [];
        this.products.forEach(product => {
            if (!categories.includes(product.category)) {
                categories = [...categories, product.category]
            }
        });
        return categories;
    }

    @action
    getAllProducts = async () => {
        this.products = await getAllProducts();
    };
}
