import React, {createContext, useContext, useReducer} from 'react';

export const Store = createContext();

export const StoreProvider = ({reducer, store, children}) => (
    <Store.Provider value={useReducer(reducer, store)}>
        {children}
    </Store.Provider>
)

export const useStore = () => useContext(Store);
