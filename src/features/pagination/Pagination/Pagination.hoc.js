import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ROOT_STORE } from "../../../stores";

import Pagination from './Pagination';

function PaginationHOC(Pagination) {
    @inject(ROOT_STORE)

    @observer
    class NewComp extends Component {

        render() {
            const { root: { products } } = this.props;
            const { paginate, paginationLength } = products;

            return <Pagination
                paginate={paginate}
                length={paginationLength}
            />
        }

    }
    return NewComp;
}

export default PaginationHOC(Pagination);
