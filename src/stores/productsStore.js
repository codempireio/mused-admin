import { observable, action, computed } from 'mobx';
import _ from 'lodash'

import { getAllProducts } from '../services';

const CHUNK_SIZE = 100;

export default class ObservableStore {
    constructor(root) {}

    @observable products = [];
    @observable categories = [];
    @observable pagination = 0;
    @observable selectedIds = [];

    @computed get listOfProducts (){

        return this.products.slice(
            this.pagination*CHUNK_SIZE,
            (this.pagination+1)*CHUNK_SIZE);
    }
    get allCategories (){
        return this.categories;
    }
    get listOfIds (){
        return this.selectedIds;
    }

    @action
    paginate = (n) => {
        if (typeof n === 'string') {
            return n === 'prev' ? this.decrPaginate() : this.incPaginate()
        }
        this.pagination = n;
        return this.pagination;
    };
    incPaginate = () => {
        const maxSize =  this.allProducts.length / CHUNK_SIZE;
        return this.pagination === maxSize ? 0 : this.pagination += 1;
    };
    decrPaginate = () => {
        return this.pagination === 0 ? 0 : this.pagination -= 1;
    };

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
