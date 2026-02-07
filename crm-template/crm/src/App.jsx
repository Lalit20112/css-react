import { useState } from 'react'
import './App.css'
import DealsChart from "./chart"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex justify-between bg-gray-50 shadow-md">
        <div className="flex gap-2">
          <div className="font-bold items-center flex ml-4">crm</div>
          {/* <div>searc box</div> */}
        </div>
        <div className="flex m-2 gap-2">
          <div>
            <img
              src="./public/notifiction.png"
              alt=""
              className="w-5 h10 items-center mt-3 mr-2"
            />
          </div>
          <div>
            <img src="./public/profile.png" alt="" className="w-10 h-10 mr-2" />
          </div>
        </div>
      </div>

      <div className="flex h-screen mt-16">
        {/* Sidebar */}
        
        <div className="bg-gray-50 shadow-md w-64 border-r-2 overflow-y-auto h-screen ">
          <div>
            <p className="p-4 font-bold">main menu</p>
           
            <ul>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded"
                >
                  💰 Deals Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded"
                >
                  👥 Leads Dashboard
                </a>
              </li>
              <li><a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded" >📋 Project Dashboard</a></li>
            </ul>
             <p className="p-4 font-bold">Crm</p>
             <ul>
             
              <li><a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded" >contacts</a></li>
              <li><a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded" >companies</a></li>
              <li><a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded" >deals</a></li>
              <li><a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded" >leads</a></li>
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col p-4 h-screen overflow-y-auto">
          <h2>Deals Dashboard</h2>
          <div className='flex flex-wrap'>
          <div ><DealsChart/></div>
          <div className="flex-1 border-2 m-2 p-4 w-50 h-20 min-w-[45%]">report-1</div>
          <div className="flex-1 border-2 m-2 p-4 w-50 h-20 min-w-[45%]">report-2</div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App
