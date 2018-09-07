import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ROOT_STORE } from "../../../stores";

import ListBuilder from './ListBuilder';

function CollectionHOC(ListBuilder) {
    @inject(ROOT_STORE)

    @observer
    class NewComp extends Component {
        componentDidMount() {
            const { root: { products } } = this.props;
            const { getAllProducts } = products;

            getAllProducts();
        }

        render() {
            const { root: { products } } = this.props;
            const {
                    listOfProducts, allCategories, listOfIds,
                    setCategory, addIdToList, removeIdFromList
                } = products;

            return <ListBuilder
                products={listOfProducts}
                categories={allCategories}
                addIdToList={addIdToList}
                removeIdFromList={removeIdFromList}
                listOfIds={listOfIds}
                setCategory={setCategory}
            />
        }

    }
    return NewComp;
}

export default CollectionHOC(ListBuilder);
