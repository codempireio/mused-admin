import React, { Component } from 'react';
import {
    Container,  Row, Col,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import ListBuilderItem from "./ListBuilderItem";
import SelectedIDs from "./SelectedIDs";
import Pagination from "./Pagination";

const theme = require('../theme.css');

export default class ListBuilder extends Component {
    state = {
        dropdownOpen: false,
    };

    render() {
        const { products, categories, listOfIds, removeIdFromList, userProfile, paginate, logout } = this.props;

        return (
            <div>
                <Container style={{width: '80%', float: 'left'}}>
                    <Row className={theme.selectWrapper}>
                        <Col  xs='6'>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret>
                                    Categories
                                </DropdownToggle>
                                <DropdownMenu>
                                    { categories.map((category, i) => (
                                        <DropdownItem
                                            onClick={() => this.onCategorySelected(category)}
                                            key={i}>
                                            { category }
                                        </DropdownItem>))}
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                        <Col  xs="6" className={theme.logOutWrapper}>
                            <p>
                                {`User: ${userProfile.email}`}
                                <span className={theme.logOut}
                                    onClick={logout}>logout</span>
                            </p>
                        </Col>
                    </Row>
                    <Row className={theme.listWrapper}>
                        { this._renderListOfProducts(products) }
                    </Row>
                    <Row> <Col  xs="12">
                        <Pagination
                            paginate={paginate}
                        />
                    </Col></Row>
                </Container>
                <Container style={{width: '20%', float: 'right'}}>
                    <SelectedIDs
                        ids={listOfIds}
                        removeId={removeIdFromList}
                    />
                </Container>
            </div>
        )
    }

    _renderListOfProducts = (products) => {
        if (!products.length) return null;

        return products.map((product, i) => (
            <ListBuilderItem
                key={i}
                product={product}
                addId={this.props.addIdToList}
            />
        ));
    };

    onCategorySelected = category => {
        this.props.filterProducts(category);
    };

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
};
