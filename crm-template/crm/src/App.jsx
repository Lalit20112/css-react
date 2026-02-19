import { useState } from "react";
import "./App.css";
import DealsChart from "./chart";
import Contact from "./assets/components/crm/contact";
import Wonchart from "./wonchart";
import {BrowserRouter, Route, Routes,Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const data = [
    {
      id: 1,
      deal: "SkyHigh Annual Booking",
      stage: "Appointment",
      amount: "$5000",
      status: "won",
    },
    { id: 2, deal: "CRM Onboarding Package",stage: "Appointment", amount: "$3000", status: "lost" },
    { id: 3, deal: "Enterprise Plan Upgrade",stage: "Appointment", amount: "$7000", status: "won" },
    { id: 4, deal: "CRM Migration Project",stage: "Appointment", amount: "$7000", status: "lost" },
    {
      id: 5,
      deal: "Sales Pipeline Optimization",stage: "Appointment",
      amount: "$7000",
      status: "",
    },
  ];

  return (
    <>
     <BrowserRouter>
      <nav>
        <Link to ="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>


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
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded">💰 Deals Dashboard </a>
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
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded" > Contacts </a>
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
        <div className=" flex flex-col p-4 h-screen overflow-y-auto w-full">
          <h2 className="text-2xl font-bold mb-4 ">Deals Dashboard</h2>

          <div className="flex flex-col-2 gap-8  ">
            <div className="flex-1 rounded border-0.5 w-50 ">
              <div className="flex justify-between border border-gray-200 bg-white shadow-sm">
                <h2 className="text-lg font-bold mb--2 px-4 py-4">recentaly created</h2>
                <h2 className="p-4">last 30 day</h2>
              </div>
              <div className="overflow-x-auto ">
                <table className="min-w-full border-collapse border border-gray-300 h-82">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Deal Name
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Stage
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Deal Value
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row) => (
                      <tr key={row.id} className="hover:bg-gray-50">
                        {/* <td className="border border-gray-300 px-4 py-2">{row.id}</td> */}
                        <td className="border border-gray-300 px-4 py-2">
                          {row.deal}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {row.stage}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {row.amount}
                        </td>
                        {/* <td className={`border-2 rounded-full text-center ${row.status ==="won" ? "bg-green-400  ": row.status=== "lost" ? "bg-red-800" :""}`}>
                          {row.status}
                        </td> */}
                        <td className="border border-gray-300 px-4 py-2 text-center"><span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold
                           ${row.status === "won" ? "bg-green-400 text-white" : row.status ==="lost" ? "bg-red-800 text-white" : "bg-gray-300 text-black" }`}>{row.status}</span></td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className=" flex-1 rounded border border-gray-200 bg-white shadow-sm">
              <h2 className="text-lg font-bold mb--2 pl-4 pt-4">Deals Overview</h2>
              <DealsChart />
            </div>
          </div>
          <div className="flex flex-col-2 gap-8 pt-4 ">

          <div className=" flex-1 rounded border border-gray-200 bg-white shadow-sm ">
            <h3 className="text-lg font-bold mb--2 px-4 py-4">Lost Deals Stage</h3><DealsChart />
            </div>
          <div className=" flex-1 rounded border border-gray-200 bg-white shadow-sm">
            <h3 className="text-lg font-bold mb--2 px-4 py-4 ">Won Deals Stage</h3><Wonchart type="bar"/>
            </div>
          </div>
          <div className=" flex-1 rounded border border-gray-200 bg-white shadow-sm">
            <h3 className="text-lg font-bold mb--2 px-4 py-4 ">Won Deals Stage</h3><Wonchart type="line"/>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
