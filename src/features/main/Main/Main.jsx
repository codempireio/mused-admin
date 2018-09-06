import React, { Component } from 'react';
import classNames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import { ListBuilder } from "../../list-builder";
import { Posts } from "../../posts";

export default class Main extends Component {
    state = {
        activeTab: 'products'
    };

    render() {
        return (
            <div>
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
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="products">
                        <ListBuilder />
                    </TabPane>
                    <TabPane tabId="posts">
                        <Posts />
                    </TabPane>
                </TabContent>
            </div>
        )
    }

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

};
