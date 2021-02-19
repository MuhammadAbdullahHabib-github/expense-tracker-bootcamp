import React , {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';


const Balance = () => {
    const {transection} = useContext(GlobalContext);
    const amount = transection.map((item) => item.amount);
    const total = amount.reduce((acc , total)=>( acc = acc + total ), 0).toFixed(2);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </div>
    )
}

export default Balance
