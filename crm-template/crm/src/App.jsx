import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-between bg-gray-50 shadow-md relative'>
           <div className='flex gap-2'>
             <div className='font-bold items-center flex ml-4'>crm</div>
             {/* <div>searc box</div> */}
           </div>
        <div className='flex m-2 gap-2'>
          <div><img src="./public/notifiction.png" alt="" className='w-5 h10 items-center mt-3 mr-2' /></div>
          <div><img src="./public/profile.png" alt="" className='w-10 h-10 mr-2'/></div>
        </div>
        
      </div>
      <div className='bg-gray-50 shadow-md w-50 h-screen absolute border-r-2 justify-between flex'>
        <div>
        <p>Dashboard</p>
        <ul>
          <li>
            <a href="#" className='flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded'> 💰 Deals Dashboard</a>
            </li>
            <li>
              <a href="#" className='flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded'>👥 Leads Dashboard</a>
            </li>
            <li>
              <a href="#" className='flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded'>📋 Project Dashboard</a>
            </li>
        </ul>
        </div>
      </div>
      <div className='border-2 m-2 '>hi</div>
      <div className='border-2 m-2 '>hi</div>

    
    </>
  )
}

export default App
