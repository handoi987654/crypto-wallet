import axios from 'axios';
import authService from "./auth-service";

const getWallet = () => axios.get('https://fptfunding.com/api/Wallet/GetWallet', {
    headers: {
        Authorization: `Bearer ${authService.getToken()}`
    }
})

const addCard = card => axios.post('https://fptfunding.com/api/Payment/AddCard', card, {
    headers: {
        Authorization: `Bearer ${authService.getToken()}`
    }
})

const getCard = () => axios.get('https://fptfunding.com/api/Payment/GetCard', {
    headers: {
        Authorization: `Bearer ${authService.getToken()}`
    }
})

const removeCard = () => axios.delete('https://fptfunding.com/api/Payment/RemoveCard', {
    headers: {
        Authorization: `Bearer ${authService.getToken()}`
    }
})

const getTransaction = () => axios.get('https://fptfunding.com/api/Donation/History', {
    headers: {
        Authorization: `Bearer ${authService.getToken()}`
    },
})

const getProfile = () => axios.get('https://fptfunding.com/api/User/UserProfile', {
    headers: {
        Authorization: `Bearer ${authService.getToken()}`
    },
})

const updateProfile = userProfile => axios.put('https://fptfunding.com/api/User/UpdateProfile', userProfile, {
    headers: {
        Authorization: `Bearer ${authService.getToken()}`
    },
})

const deposit = amount => axios.post('https://fptfunding.com/api/Wallet/Deposit', {amount}, {
    headers: {
        Authorization: `Bearer ${authService.getToken()}`
    },
})

const withdraw = amount => axios.post('https://fptfunding.com/api/Wallet/Withdraw', {amount}, {
    headers: {
        Authorization: `Bearer ${authService.getToken()}`
    },
})

const appService = {
    getTransaction,
    getWallet,
    getProfile,
    updateProfile,
    addCard,
    getCard,
    removeCard,
    deposit,
    withdraw,
}

export default appService;
