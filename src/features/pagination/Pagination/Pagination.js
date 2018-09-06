import React, { Component } from 'react';
// import _ from 'lodash'
// import {
//     Pagination, PaginationItem, PaginationLink
// } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import theme from '../theme.css';

export default class ListPagination extends Component {
    // state = {
    //     paginationCount: 0,
    // };

    render() {
        const { length } = this.props;
        if (length <= 1) return null;

        return (
            <div className={theme.paginationWrapper}>
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={<a href="">...</a>}
                    breakClassName={theme.break}
                    pageCount={length}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    onPageChange={this.onPaginate}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    activeClassName={"active"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item previous"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item next"}
                    nextLinkClassName={"page-link"}
                />
            </div>
        );

        // return (
        //     <Pagination aria-label="Page navigation">
        //         <PaginationItem>
        //             <PaginationLink previous href="#"
        //                             onClick={() => this.onPaginate('prev')}
        //             />
        //         </PaginationItem>
        //         { this.renderPaginationItem(length) }
        //         <PaginationItem>
        //             <PaginationLink next href="#"
        //                             onClick={() => this.onPaginate('next')}
        //             />
        //         </PaginationItem>
        //     </Pagination>
        // )
    }

    onPaginate = ({ selected }) => {
        this.props.paginate(selected)
        // this.setState({paginationCount: paginate(selected)})
    };

    // renderPaginationItem = (length) => {
    //     return _.range(length).map((i) => (
    //         <PaginationItem key={i}
    //                         active={this.state.paginationCount === i}>
    //             <PaginationLink href="#"
    //                             onClick={() => this.onPaginate(i)}>
    //                 { `${i + 1}` }
    //             </PaginationLink>
    //         </PaginationItem>)
    //     );
    // };

};
