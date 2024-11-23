import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adddata1 } from '../../features/CountSlice';
import { useState } from 'react';

export default function MoneyManager() {
    const counter = useSelector((state) => state.moneymanagerkey)
    const dispatch = useDispatch()
    const [money, setMoney] = useState('');
useEffect(()=>{

},[])
    const addmoney = () => {
        dispatch(adddata1({ money :money}))
    }

    return (
        <>
            <input type="text" onChange={(e) => setMoney(e.target.value)} />
            <button onClick={addmoney()}>add</button>

            {
                counter &&
                counter.map((e, i) => {
                    return <ul key={i}>
                        <li>{e.money}</li>
                    </ul>
                })
            }

        </>

    )
}
