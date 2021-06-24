import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: []
}

const GlobalContext = createContext(initialState)

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    function moneyFormatter(num) {
        let p = num.toFixed(2).split('.')
        return (
            '$ ' +
            p[0]
                .split('')
                .reverse()
                .reduce(function(acc, num, i, orig){
                    return num === '-' ? acc : num + (i && !(i%3) ? ', ' : '') + acc
                }, '') + 
                '.' + 
                p[1]
        )
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        moneyFormatter
    }}>
        {children}
    </GlobalContext.Provider>)
}

export { GlobalContext, GlobalProvider }