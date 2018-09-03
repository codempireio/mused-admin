import React, { Component } from 'react';
import {
    Pagination, PaginationItem, PaginationLink
} from 'reactstrap';

const theme = require('../theme.css');

export default class ListPagination extends Component {
    state = {
        paginationCount: 0,
    };

    render() {


        return (
            <Pagination aria-label="Page navigation">
                <PaginationItem>
                    <PaginationLink previous href="#"
                                    onClick={() => this.onPaginate('prev')}
                    />
                </PaginationItem>
                { this.renderPaginationItem() }
                <PaginationItem>
                    <PaginationLink next href="#"
                                    onClick={() => this.onPaginate('next')}
                    />
                </PaginationItem>
            </Pagination>
        )
    }

    onPaginate = (n) => {
        const { paginate } = this.props;

        this.setState({paginationCount: paginate(n)})
    };

    renderPaginationItem = () => {
        return [1,2,3,4,5].map((n, i) => (
            <PaginationItem key={i}
                            active={this.state.paginationCount === i}>
                <PaginationLink href="#"
                                onClick={() => this.onPaginate(i)}>
                    { n }
                </PaginationLink>
            </PaginationItem>)
        );
    };

};
