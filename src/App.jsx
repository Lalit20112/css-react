import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className='fixed top-0 z-100 w-full flex justify-between bg-blue-900 h-25 px-6 py-4'>
      <div className=' text-white border-white-4 border-2 h-42 w-40 text-center backdrop-blur-2xl pt-2.5 '>BR Architects</div>
      <div className='flex gap-4 pt-8 mt-8 '>
        <a href="# " className='mt-8' >Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
    {/* main section  */}

    <div className='relative '>
      <img src="../image.png" alt="" className='w-full h-auto ' />
      <span className=' absolute inset-0 flex items-center justify-center font-bold text-white '>
        <span className='bg-black bg-opacity-0 text-2xl py-1 rounded '>BR </span> Architects
        </span>
    </div>
    {/* Projects */}

    <div>
      <h3>Projects</h3>
      <div className='flex gap-4 '>
        <div className='relative '>
          <img src="../image.png" alt="" className=' border-2  bg-black' />
          <span className=' inset-0 absolute border-2'> <span className='border-2'>Summer House</span></span>
        </div>
        <div className='relative'>
        <img src="../image.png" alt="" className=' ' />
        <h3 className='inset-0 absolute border-2'> summer house</h3>
        </div>
        <div className='relative'>
        <img src="../image.png" alt="" className=' ' />
        <span className='font-extrabold'>sumer house</span>
        </div>
        <div className='relative'>
        <img src="../image.png" alt="" className=' ' />
        </div>
        
      </div>
    </div>
    <h3>root</h3>
    </>
  )
}

export default App
