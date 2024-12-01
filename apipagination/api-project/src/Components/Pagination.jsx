import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Pagination() {
    const navigate = useNavigate();
    const menscategory = () => {
        navigate('/Mens')
    }
    const Women = () => {
        navigate('/Womens')
    }
    const Jewelery = () => {
        navigate('/Jewelery')
    }
    const Electronics = () => {
        navigate('/Electronics')
    }
    return (
        <div className='flex justify-center gap-4 p-4'>
            <div className="bg-white rounded-lg shadow-md p-4 w-64 h-64 flex flex-col justify-center items-center cursor-pointer" onClick={menscategory}>
                <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" className='h-32 w-32 object-cover rounded-lg' />
                <div className="text-lg font-bold mt-2">Mens Clothing</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-64 h-64 flex flex-col justify-center items-center cursor-pointer" onClick={Women}>
                <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" alt="" className='h-32 w-32 object-cover rounded-lg' />
                <div className="text-lg font-bold mt-2">Womens Clothing</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-64 h-64 flex flex-col justify-center items-center cursor-pointer" onClick={Jewelery}>
                <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="" className='h-32 w-32 object-cover rounded-lg' />
                <div className="text-lg font-bold mt-2">Jewelery</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-64 h-64 flex flex-col justify-center items-center cursor-pointer" onClick={Electronics}>
                <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" alt="" className='h-32 w-32 object-cover rounded-lg' />
                <div className="text-lg font-bold mt-2">Electronics</div>
            </div>
        </div>
    )
}
