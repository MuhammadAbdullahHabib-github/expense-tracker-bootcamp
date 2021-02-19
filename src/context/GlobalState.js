import React, { createContext, useReducer } from 'react';
import { Reducer } from './Reducer';

// Initial stata

const initialState = {
    transection: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}
// Creating Context
export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    function DeleteTransection(id) {
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
                addTransection:addTransection
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}
