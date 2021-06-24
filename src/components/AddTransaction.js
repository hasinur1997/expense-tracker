import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


function AddTransaction() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)
    }

    return(
        <>
            <h3>Add New Transaction</h3>
            <form action="" onSubmit={onSubmit}>
                <table className="form-table">
                    <tbody>
                        <tr>
                            <th>
                                <label 
                                    htmlFor="text"
                                >
                                    Text
                                </label>
                            </th>
                            <td>
                                <input 
                                    type="text" 
                                    id="text" 
                                    className="regular-text"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th><label htmlFor="amount">Amount</label></th>
                            <td>
                                <input 
                                    type="text" 
                                    id="amount" 
                                    className="regular-text"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className="submit">
                    <input 
                        type="submit" 
                        value="Add Transaction"
                        className="button button-primary"
                    />
                </p>
            </form>
        </>
    )
}

export default AddTransaction