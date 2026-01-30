import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* navbar */}
    <div className='flex justify-between bg-blue-900 sticky'>
      <div>BR Architects</div>
      <div className='flex gap-4 '>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
    {/* main section  */}

    <div className='relative'>
      <img src="../image.png" alt="" className='w-full h-auto ' />
      <span className=' absolute inset-0 flex items-center justify-center font-bold text-white '>
        <span className='bg-black bg-opacity-0 text-2xl py-1 rounded '>BR </span> Architects
        </span>
    </div>
    {/* Projects */}

    <div>
      <h3>Projects</h3>
      <div className='flex gap-4 '>
        <div className='relative w1/4 '>
          <img src="../image.png" alt="" className='w-1/4 h-auto' />
          <span className=' text-1xl inset-0 absolute'>Summer House</span>
          
        </div>
        <img src="../image.png" alt="" className='w-1/4 h-auto ' />
        <img src="../image.png" alt="" className='w-1/4 h-auto' />
        <img src="../image.png" alt="" className='w-1/4 h-auto' />
      </div>
    </div>
    </>
  )
}

export default App
