import { observable, action } from 'mobx';

import { logout } from '../services';

export default class ObservableStore {

    constructor(root) {}

    @observable id = null;
    @observable profile = null;

    @action
    logout = () => {
        logout().then(() => {
            console.log(`user ${this.userProfile.name} logged out`);
            this.id = null;
            this.profile = null;
            this.userDetails = null;
        });
    };

    get userProfile() {
        return this.profile;
    };

    get authId() {
        return this.id;
    }

    @action
    setUser = (user) => {
        const { userAuthId, userProfile } = user;

        this.id = userAuthId;
        this.profile = userProfile;
    }

}
