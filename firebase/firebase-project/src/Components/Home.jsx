import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Home() {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [userDetail, setUserDetail] = useState(null)

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, data => {
            if (data) {
                setUser(data)
            }
        })
    }, [])
    useEffect(() => {
        if (user) {
            getDoc(doc(db, "users", user.uid)).then(data => {
                setUserDetail(data.data())
            })
        }
    }, [user])
    const handlesignup = () => {
        navigate('/signin')
    }


    return (
        <>
            <h1>welcome, {userDetail && userDetail.name}</h1>
            <button onClick={handlesignup}>signup</button>
        </>
    )
}
