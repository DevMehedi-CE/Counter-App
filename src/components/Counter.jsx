import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incremant,decrement } from '../redux/counter/action'


const Counter = () => {
  const count = useSelector(state=>state.value)
  const  dispatch = useDispatch()


  const handleIncrement =()=>{
        dispatch(incremant())
  }
  const handleDecrement =()=>{
    dispatch(decrement())
  }
  return (
    <div className=' mx-auto p-4 h-52 w-96 flex items-center justify-center space-x-5'>
        
       <div>
       <div className='text-2xl font-semibold'>{count}</div>
        <div  className='space-x-5 mt-2'>
            <button className='bg-indigo-400 text-white px-3 py-2 rounded shadow'
            onClick={handleIncrement}>Increment</button>
            <button className='bg-red-400 text-white px-3 py-2 rounded shadow'
            onClick={handleDecrement}>Decrement</button>
        </div>
       </div>
        </div>
  )
}

export default Counter