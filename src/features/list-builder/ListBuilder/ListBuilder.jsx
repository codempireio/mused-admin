import React, { Component } from 'react';
import { Container,  Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ListBuilderItem from "./ListBuilderItem"

export default class ListBuilder extends Component {
    state = {
        dropdownOpen: false
    };

    render() {
        const { products, categories } = this.props;

        return (
            <Container>
                <Row>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            Categories
                        </DropdownToggle>
                        <DropdownMenu>
                        { categories.map((category, i) => (
                            <DropdownItem
                                key={i}>
                                { category }
                            </DropdownItem>))}
                        </DropdownMenu>
                    </Dropdown>
                </Row>
                <Row>
                    { this._renderListOgProducts(products) }
                </Row>
            </Container>
        )
    }

    _renderListOgProducts = (products) => {
        if (!products.length) return null;

        return products.map((product, i) => (
            <ListBuilderItem
                key={i}
                product={product}
            />
        ));
    };

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
 }
