import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ROOT_STORE } from '../../../stores';
import { getAuthUserData } from '../../../services';

import AuthControls from './AuthControls';
import { ListBuilder } from '../../../features/list-builder';

function AuthControlsHOC(AuthControls) {
    @inject(ROOT_STORE)


    @observer
    class NewComponent extends Component {
        componentDidMount() {
            const userData = getAuthUserData();
            if (userData) {
                const { root: { user: { setUser } } } = this.props;
                setUser(userData);
            }
        }
        render() {
            const { root: { user } } = this.props;
            const { setUser, authId, userProfile, logout } = user;

            // user Auth ID
            if (!authId) {
                return <AuthControls
                    setUser={setUser}
                />
            }

            return (
                <ListBuilder
                    userProfile={userProfile}
                    logout={logout}
                />
            )
      }
    }
    return NewComponent;
}

export default AuthControlsHOC(AuthControls);
