import { useState } from "react";
import "./App.css";
import Contact from "./assets/components/crm/contact";
import Deal from "./assets/components/main-meanu/Dashboard/DealsDashboard/index"
import {BrowserRouter, Route, Routes,Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
    
       <BrowserRouter>


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

        <div className="bg-gray-50 shadow-md w-64  overflow-y-auto h-screen border-r-1 ">
          <div>
            <p className="p-4 font-bold">main menu</p>

            <ul>
              <li>
                {/* <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded">💰 Deals Dashboard </a> */}
                 <Link to ="/deal" className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded">💰 Deals Dashboard</Link>
              </li>
              <li>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded">👥 Leads Dashboard</a>
              </li>
              <li>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded">📋 Project Dashboard</a>
              </li>
            </ul>
            <p className="p-4 font-bold">Crm</p>
            
            <ul>
              <li>
                {/* <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded" > Contacts </a> */}
                <nav>

               <Link to ="/contact" className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded">Contact</Link>
                </nav>

              </li>
              <li>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded" > Companies </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded"> Deals </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded">Leads</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Content */}
        
      </div>
      <nav>
        <Link to ="/deal">Contacts</Link>
      </nav>

      <Routes>
        <Route path="/Deal" element={<Deal/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
