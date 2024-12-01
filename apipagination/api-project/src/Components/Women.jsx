import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apifetch } from '../Features0/Features';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Women() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(apifetch())
  }, [dispatch])
  const Womendata = useSelector((state) => state.apikey.data)
  const home = ()=>{
    navigate('/')
}
  return (
    <>
      <div className="bg-gray-100 p-4 flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl font-bold text-center mb-4">Women's Clothing</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {Womendata && (
            Womendata.map((e, i) => (
              e.category === "women's clothing" && (
                <div key={i} className="card gap-4 h-[300px] w-[300px] border border-gray-300 flex flex-col justify-center items-center md:w-[200px] md:h-[250px] sm:w-full sm:h-[200px] shadow-md">
                  <span className="text-lg font-semibold">{e.id}</span>
                  <div> <img src={e.image} alt="" className='h-[150px] w-[150px] md:h-[100px] md:w-[100px] sm:h-[100px] sm:w-[100px] object-cover rounded-lg' />
                  </div>
                  <span className="text-lg font-semibold">{e.category}</span>
                  <p className="text-gray-600">Rating: {e.rating.rate} ({e.rating.count} reviews)</p>
                </div>
              )
            ))
          )}
          
        </div>
        <button onClick={home} className='h-9 w-[120px] bg-black text-white '> 
                    back
                  </button>
      </div>
      </>
  )

}
