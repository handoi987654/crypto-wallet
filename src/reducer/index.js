import {DISCARD_CARD, RELOAD_CARD, UPDATE_WALLET, UPDATE_CARD, RELOAD_BALANCE} from "../constant";

const reducer = (store, payload) => {
    switch (payload.action) {
        case UPDATE_WALLET:
            return {...store,
                walletId: payload.params.walletId,
                balance: payload.params.balance,
            }
        case UPDATE_CARD:
            return {...store, card: payload.params.card, cardExisted: true}
        case DISCARD_CARD:
            return {...store, cardExisted: false}
        case RELOAD_CARD:
            return {...store, cardExisted: null}
        case RELOAD_BALANCE:
            return {...store, balance: -1}
        default:
            return store;
    }
};

export default reducer;
