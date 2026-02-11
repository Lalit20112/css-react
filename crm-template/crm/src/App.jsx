import { useState } from "react";
import "./App.css";
import DealsChart from "./chart";

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
    { id: 2, deal: "CRM Onboarding Package", amount: "$3000", status: "lost" },
    { id: 3, deal: "Enterprise Plan Upgrade", amount: "$7000", status: "won" },
    { id: 4, deal: "CRM Migration Project", amount: "$7000", status: "won" },
    {
      id: 4,
      deal: "Sales Pipeline Optimization",
      amount: "$7000",
      status: "won",
    },
  ];

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
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded"
                >
                  📋 Project Dashboard
                </a>
              </li>
            </ul>
            <p className="p-4 font-bold">Crm</p>
            <ul>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded"
                >
                  contacts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded"
                >
                  companies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded"
                >
                  deals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-red-500 rounded"
                >
                  leads
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className=" flex flex-col p-4 h-screen overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Deals Dashboard</h2>

          <div className="flex flex-row gap-4 w-200">
            <div className="flex-1 border-2 p-4 min-w-[40%] ">
              <div className="flex justify-between">
                <h2 className="p-4">recentaly created</h2>
                <h2 className="p-4">last 30 day</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
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
                        <td className="border border-gray-300 px-4 py-2">
                          {row.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className=" flex border-2 p-4 bg-gray-300 ">
              <DealsChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
