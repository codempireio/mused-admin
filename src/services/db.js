import {
    Stitch,
    UserPasswordCredential,
} from 'mongodb-stitch-browser-sdk';

const clientAppId = "musedadmin-vcmqy";

class Client{
    constructor(){
        this.clientAppId = clientAppId;
        this.clientInst = null;
    }

    init() {
        const clientId = this.clientAppId;
        const that = this;

        return new Promise(function(resolve, reject) {
            try {
                const stitchClient = Stitch.initializeDefaultAppClient(clientId);
                that.setClient(stitchClient);
                resolve();
            } catch (err) {
                reject(err)
            }
        })
    };

    setClient(client) {
        this.clientInst = client;
    };

    getClient() {
        return this.clientInst;
    };

    emailPasswordAuth = async function (email, password) {
        const client = this.clientInst;

        if (!client.auth.isLoggedIn) {
            // Log the user in
            const credential = new UserPasswordCredential(email, password);
            await client.auth.loginWithCredential(credential);
        }
        const { user: { id, profile } } = client.auth;

        return {
            userAuthId: id,
            userProfile: profile.data,
        };
    }
}

const client = new Client();

export const initClient = () => {
    return client.init();
};

export const getClient = () => client.getClient();

export const login = async (email, password) => await client.emailPasswordAuth(email, password);

