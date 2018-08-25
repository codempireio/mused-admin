import { getClient, login } from './db';

export const loginEmailPassword = login;

export const getAuthUserData = () => {
    const client = getClient();
    if (!client.auth.isLoggedIn) return null;

    const { user: { id, profile } } = client.auth;
    return {
        userAuthId: id,
        userProfile: profile.data,
    };
};

export const logout = () => {
    const client = getClient();
    return client.auth.logout();
};

export const getAllProducts = () => {
    const client = getClient();
    return client.callFunction("getProducts");
};


