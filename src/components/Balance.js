import {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function Balance() {
    const { transactions, moneyFormatter } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((acc, item) => (acc += item), 0 )

    return (
        <>
            <h4>Your Balance</h4>
            <h2>{moneyFormatter(total)}</h2>
        </>
    )
}

export default Balance