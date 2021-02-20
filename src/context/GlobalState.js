import React, { createContext, useReducer } from 'react';
import { Reducer } from './Reducer';

// Initial stata

const initialState = { transection: [] }
// Creating Context
export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    function deleteTransection(id) {
        dispatch({
            type: 'DELETE',
            payload: id,
        })
    }

    function addTransection(transection){
        dispatch({
            type:"ADD",
            payload: transection
        })
    }

    return (
        <GlobalContext.Provider value={
            {
                transection: state.transection,
                deleteTransection:deleteTransection,
                addTransection:addTransection
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}
