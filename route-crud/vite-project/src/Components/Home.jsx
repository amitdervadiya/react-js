import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    const [store, setStore] = useState([{ name: 'amit', age: '18', }, {
        name: 'rohit', age: '19',
    }])
    return (
        <div>
            <h1>home</h1>
            <Link to={"/create"}>create</Link>
            <Link to={"/update"}>update</Link>
            <Link to={"/delete"}>delete</Link>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        store && store.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>

                            </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
