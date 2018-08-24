import { observable, action } from 'mobx';

import { getUserDetails, logout } from '../services';

export default class ObservableStore {

    constructor(root) {}

    @observable id = null;
    @observable profile = null;
    @observable userDetails = null;

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

    get userId() {
        return this.id;
    }

    @action
    setUserDetails = async (userId, userProfile) => {
        const { email } = userProfile;
        const userData = await getUserDetails(email);

        this.setUser({ userId, userData });
    };

    @action
    setUser = (user) => {
        const { userId, userData: { profile, details } } = user;

        this.id = userId;
        this.profile = profile;
        this.userDetails = details;
    }

}
