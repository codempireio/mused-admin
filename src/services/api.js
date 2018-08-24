import { getClient, login } from './db';

export const loginViaFBProvider = (token) => {
    return login('facebook', token);
};

export const loginViaAnonProvider = () => {
    return login('anonymous');
};

export const logout = () => {
    const client = getClient();
    return client.auth.logout();
};

export const getAuthUserData = () => {
    const client = getClient();
    const { isLoggedIn } = client.auth;
    if (!isLoggedIn) return null;

    const { user: { id, profile } } = client.auth;
    const { email, firstName, lastName, name } = profile;

    return {
        userId: id,
        userProfile: {
            email,
            firstName,
            lastName,
            name,
        },
    };
};

export const getProducts = () => {
    const client = getClient();
    return client.callFunction("search", ["shorts", "Black"]);
};

export const getAuthors = () => {
    const client = getClient();
    return client.callFunction("getAuthors", []);
};

export const getOutfits = () => {
    const client = getClient();
    return client.callFunction("getOutfits", []);
};

export const getProductsByIds = (ids) => {
    const client = getClient();
    const _ids = [...ids];
    return client.callFunction("getProductsByIds", [_ids]);
};

export const updateUser = (userProfile) => {
    const client = getClient();
    return client.callFunction("updateUser", [userProfile]);
};

export const getUserDetails = (email) => {
    const client = getClient();
    return client.callFunction("getUserDetails", [email]);
};
