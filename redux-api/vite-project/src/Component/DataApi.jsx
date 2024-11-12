import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apifetch } from '../../features/DataSlice'

export default function DataApi() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(apifetch())
    }, [])
    const name1 = useSelector((state) => state.moneydatakey)

    return (
        <div>
            <h1>nghoide</h1>
            {
                name1 &&
                name1.data.map((e, i) => {
                    return <ul key={i}>
                        <li>{e.price}</li>
                        <li>{e.title}</li>
                    </ul>
                })
            }
        </div>
    )
}
