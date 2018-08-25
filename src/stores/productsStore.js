import { observable, action } from 'mobx';
import _ from 'lodash'

import { getAllProducts } from '../services';

export default class ObservableStore {
    constructor(root) {}

    @observable products = [];
    @observable categories = [];
    @observable selectedIds = [];

    get listOfProducts (){
        return this.products;
    }
    get allCategories (){
        return this.categories;
    }
    get listOfIds (){
        return this.selectedIds;
    }

    @action
    filterProductsByCategory = (category) => {
        this.products = this.allProducts.filter(product => product.category === category);
    };

    @action
    addIdToList = (id) => {
        if (!this.selectedIds.includes(id)) {
            this.selectedIds = [id, ...this.selectedIds];
        }
    };

    @action
    removeIdFromList = (id) => {
        _.remove(this.selectedIds, n => n === id);
        this.selectedIds = [...this.selectedIds]; //trigger change
    };

    @action
    getAllProducts = async () => {
        this.allProducts = await getAllProducts();
        this.products = this.allProducts;
        this.categories = this.getCategories();
    };

    getCategories = () => {
        if (!this.allProducts.length) return [];
        let categories = [];
        this.allProducts.forEach(product => {
            if (!categories.includes(product.category)) {
                categories = [...categories, product.category]
            }
        });
        return categories;
    }
}
