import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import AuthControls from './AuthControls';
import { ROOT_STORE } from '../../../stores';
import { ListBuilder } from '../../../features/list-builder'
import { getAuthUserData } from '../../../services';
import {action} from "mobx/lib/mobx";


function AuthControlsHOC(AuthControls) {
    @inject(ROOT_STORE)

    @observer
    class NewComponent extends Component {

        componentDidMount() {
            // const userAuthData = getAuthUserData();
            // // user logged in
            // if (userAuthData) {
            //     const { userId, userProfile } = userAuthData;
            //     const { setUserDetails } =  this.props.root.user;
            //     this.setState({ userId });
            //     setUserDetails(userId, userProfile);
            // }
        }

        render() {
            const { root: { user } } = this.props;
            const { setUser, userId, userProfile } = user;

            // user Auth ID
            if (!userId) {
                return <AuthControls
                    setUser={setUser}
                    userProfile={userProfile}
                />
            }

            return (
                <ListBuilder/>
            )
      }
    }
    return NewComponent;
}

export default AuthControlsHOC(AuthControls);
