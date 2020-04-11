const tokenName = 'userToken';

const saveUserToken = token => {
    // clear token
    clearUserToken();
    window.sessionStorage.setItem(tokenName, token)
}

const clearUserToken = () => (
    window.sessionStorage.removeItem(tokenName)
);

const getUserToken = () => (
    window.sessionStorage.getItem(tokenName)
)

export default {
    getUserToken,
    saveUserToken,
    clearUserToken,
}