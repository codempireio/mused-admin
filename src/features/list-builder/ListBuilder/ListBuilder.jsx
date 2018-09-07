import React, { Component } from 'react';
import {
    Container,  Row, Col,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import ListBuilderItem from "./ListBuilderItem";
import SelectedIDs from "./SelectedIDs";
import { Pagination } from "../../pagination";

const theme = require('../theme.css');

export default class ListBuilder extends Component {
    state = {
        dropdownOpen: false,
        currentCategory: null
    };

    render() {
        const { products, categories, listOfIds, removeIdFromList } = this.props;

        return (
            <div>
                <Container style={{width: '80%', float: 'left'}}>
                    <Row>
                        <Col  xs='12'>
                            <Pagination />
                        </Col>
                    </Row>
                    <Row className={theme.listWrapper}>
                        { this._renderListOfProducts(products) }
                    </Row>
                </Container>
                <Container style={{width: '20%', float: 'right'}}>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className={theme.selectWrapper}>
                        <DropdownToggle caret>
                            { this.state.currentCategory || "Categories" }
                        </DropdownToggle>
                        <DropdownMenu>
                            { this.state.currentCategory &&
                            <DropdownItem
                                onClick={() => this.onCategorySelected(null)}
                                key={0}>
                                { "All" }
                            </DropdownItem> }
                            { categories.map((category, i) => (
                                <DropdownItem
                                    onClick={() => this.onCategorySelected(category)}
                                    key={i+1}>
                                    { category }
                                </DropdownItem>))}
                        </DropdownMenu>
                    </Dropdown>
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
        if (category === this.state.currentCategory) return;

        this.props.setCategory(category);
        this.setState({currentCategory: category})
    };

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
};
