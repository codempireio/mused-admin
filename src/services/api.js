import { getClient, login } from './db';

export const loginEmailPassword = login;

export const logout = () => {
    const client = getClient();
    return client.auth.logout();
};


export const getAllProducts = () => {
    const client = getClient();
    return client.callFunction("getProducts");
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

export const updateUser = (userProfile) => {
    const client = getClient();
    return client.callFunction("updateUser", [userProfile]);
};

export const getUserDetails = (email) => {
    const client = getClient();
    return client.callFunction("getUserDetails", [email]);
};
