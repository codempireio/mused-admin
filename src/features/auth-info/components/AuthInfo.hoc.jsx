import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ROOT_STORE } from '../../../stores';
import AuthInfo from './AuthInfo';

function AuthInfoHOC(AuthInfo) {
    @inject(ROOT_STORE)

    @observer
    class NewComponent extends Component {
        render() {
            const { root: { user } } = this.props;
            const { userProfile, logout} = user;

            return <AuthInfo
                profile={userProfile}
                logout={logout}
            />
      }
    }
    return NewComponent;
}

export default AuthInfoHOC(AuthInfo);
