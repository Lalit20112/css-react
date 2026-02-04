import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-between'>
           <div className='flex'>
             <div>crm logo</div>
             <div>searc box</div>
           </div>
        <div className='flex'>
          <div>profile</div>
          <div>notification</div>
        </div>
        
      </div>
    </>
  )
}

export default App
