import axios from 'axios';

let authToken = '';

const login = () => axios.post('https://fptfunding.com/api/Auth/Login', {
    userName: 'voduytan',
    password: '123'
});

const logout = () => axios.post('https://fptfunding.com/api/Auth/Logout', {}, {
    headers: {
        'Authorization': `Bearer ${authToken}`
    },
})

const setToken = token => authToken = token;

const getToken = () => authToken;

const authService = {
    login, logout,
    saveToken: setToken, getToken
}

export default authService;
