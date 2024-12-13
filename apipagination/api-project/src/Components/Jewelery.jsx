import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apifetch } from '../Features0/Features';
import { useNavigate } from 'react-router-dom';

export default function Jewelery() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(apifetch())
  }, [dispatch])
  const jewelery = useSelector((state) => state.apikey.data)
  const home = ()=>{
    navigate('/')
}

  return (
    <div className="h-screen w-full bg-gray-100 p-4 flex  flex-col justify-center items-center gap-3">
      <h1 className="text-5xl font-bold text-center mb-8 text-indigo-500">Jewelery Collection</h1>

      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
     
        {jewelery && jewelery.map((e, i) => (
          e.category === "jewelery" && (
            <div key={i} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border border-gray-200">
              <div className="flex justify-center mb-4">
                <img src={e.image} alt="" className='h-60 w-full object-contain rounded-lg' />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-semibold text-gray-600">{e.id}</span>
                <span className="text-lg font-medium text-gray-600">{e.category}</span>
                <span className="text-lg font-medium text-gray-600">${e.price}</span>
              </div>
            </div>
          )
        ))}
    


      </div>
      <button onClick={home} className='h-9 w-[120px] bg-black text-white '> 
                    back
                  </button>
    </div>
  )
}
