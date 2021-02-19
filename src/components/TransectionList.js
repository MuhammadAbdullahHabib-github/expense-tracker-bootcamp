import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

const TransectionList = () => {
    const { transection } = useContext(GlobalContext);
    

    return (
        <div>
            <h3>History</h3>
            <ul className='list'>
                {transection.map((item) => {
                    return (
                    <li key={item.id} className={ item.amount < 0 ? 'minus' : 'plus'}>
                        {item.text}<span>{item.amount < 0 ? '-' : '+'}${Math.abs(item.amount)}</span><button className='del-btn'>X</button>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default TransectionList
