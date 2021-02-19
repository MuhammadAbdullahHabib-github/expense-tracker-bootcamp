import React , {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

const IncomeExpense = () => {
     const {transection} = useContext(GlobalContext);
     const amount  = transection.map((item)=>(item.amount));
     const positive = amount.filter(value => value > 0).reduce((acc, item)=>(acc = acc + item),0).toFixed(2);
     const negative = Math.abs(amount.filter(value => value < 0).reduce((acc , item )=>(acc = acc + item),0)).toFixed(2);
    return (
        <div className='income-expense-container'>
            <div>
                <h4>INCOME</h4>
                <p className='money plus'>+${positive}</p>
            </div>
            <div>
                <h4>EXPENSE</h4>
                <p className='money minus'>-${negative}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
