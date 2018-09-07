import React, { Component } from 'react';
import classNames from 'classnames';
import {
    Container, Row, Col,
    TabContent, TabPane,
    Nav, NavItem, NavLink } from 'reactstrap';
import { ListBuilder } from "../../list-builder";
import { Posts } from "../../posts";
import { AuthInfo } from "../../auth-info";

export default class Main extends Component {
    state = {
        activeTab: 'products'
    };

    render() {

        return (
            <Container>
                <Row key={"header"}>
                    <AuthInfo />
                </Row>
                <Row key={"navigation"}>
                    <Col  xs='12'>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classNames({ active: this.state.activeTab === 'products' })}
                                    onClick={() => { this.toggleTab('products'); }}
                                >
                                    List of Products
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classNames({ active: this.state.activeTab === 'posts' })}
                                    onClick={() => { this.toggleTab('posts'); }}
                                >
                                    Posts
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
                <Row key={"tab-content"}>
                    <Col  xs='12'>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="products">
                                <ListBuilder />
                            </TabPane>
                            <TabPane tabId="posts">
                                <Posts />
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </Container>)
    }

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

};
