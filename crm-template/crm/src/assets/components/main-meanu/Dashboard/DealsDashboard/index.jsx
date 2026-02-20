import React from "react"
import DealsChart from "./chart";
import Wonchart from "./wonchart";

const Deal =()=>{
  
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
      <div >

        <div className=" flex flex-col p-4 h-screen overflow-y-auto w-full ">
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
    )
}
export default Deal