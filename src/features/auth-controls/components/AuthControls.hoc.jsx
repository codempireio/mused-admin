import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import AuthControls from './AuthControls';
import { ROOT_STORE } from '../../../stores';
import { ListBuilder } from '../../../features/list-builder'
import { getAuthUserData } from '../../../services';

function AuthControlsHOC(AuthControls) {
    @inject(ROOT_STORE)

    @observer
    class NewComponent extends Component {

        render() {
            const { root: { user } } = this.props;
            const { setUser, authId, userProfile } = user;

            // user Auth ID
            if (!authId) {
                return <AuthControls
                    setUser={setUser}
                    userProfile={userProfile}
                />
            }

            return (
                <ListBuilder />
            )
      }
    }
    return NewComponent;
}

export default AuthControlsHOC(AuthControls);
