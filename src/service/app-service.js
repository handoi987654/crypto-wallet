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

const appService = {
    getTransaction,
    getWallet,
    getProfile,
    addCard,
    getCard,
    removeCard,
}

export default appService;
