import React, { Component } from 'react';
import theme from '../theme.css';

export default class AuthInfo extends Component {

    handleLogout = () => {
        const { logout} = this.props;
        console.log(logout);
        logout();
    };

    render() {
        const { profile } = this.props;

        return (
            <div className={theme.logOutWrapper}>
                {`User: ${profile.email}`}
                <span className={theme.logOut}
                      onClick={this.handleLogout}>
                    logout
                </span>
            </div>
        )
    };
}
