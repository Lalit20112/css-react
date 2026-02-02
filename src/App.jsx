import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="fixed z-1 w-full flex justify-between bg-blue-900  px-6 py-4">
        <div className=" text-white text-center backdrop-blur-2xl pt-2.5 ">
          BR Architects
        </div>
        <div className="flex gap-4 pt-2.5 ">
          <a href="# ">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
      {/* main section  */}

      <div className="px-4">
        <div className="relative ">
          <img src="../image.png" alt="" className="w-full h-auto " />
          <span className=" absolute inset-0 flex items-center justify-center font-bold text-white ">
            <span className="bg-black bg-blue-2xl text-2xl py-1 rounded ">
              BR{" "}
            </span>{" "}
            Architects
          </span>
        </div>
        {/* Projects */}

        <div>
          <h3 className="py-12 text-2xl">Projects</h3>

          <div className="grid grid-cols-4 gap-4 ">
            <div className="relative">
              <img src="../image.png" alt="" className=" " />
              <span className="absolute top-0 left-0  bg-black text-white p-2">
                Summer House
              </span>
            </div>
            <div className="relative">
              <img src="../image.png" alt="" className=" " />
              <span className="absolute top-0 left-0  bg-black text-white p-2">
                Summer House
              </span>
            </div>
            <div className="relative">
              <img src="../image.png" alt="" className=" " />
              <span className="absolute top-0 left-0  bg-black text-white p-2">
                Summer House
              </span>
            </div>
            <div className="relative">
              <img src="../image.png" alt="" className=" " />
              <span className="absolute top-0 left-0  bg-black text-white p-2">
                Summer House
              </span>
            </div>
            <div className="relative">
              <img src="../image.png" alt="" className=" " />
              <span className="absolute top-0 left-0  bg-black text-white p-2">
                Summer House
              </span>
            </div>
            <div className="relative">
              <img src="../image.png" alt="" className=" " />
              <span className="absolute top-0 left-0  bg-black text-white p-2">
                Summer House
              </span>
            </div>
            <div className="relative">
              <img src="../image.png" alt="" className=" " />
              <span className="absolute top-0 left-0  bg-black text-white p-2">
                Summer House
              </span>
            </div>
            <div className="relative">
              <img src="../image.png" alt="" className=" " />
              <span className="absolute top-0 left-0  bg-black text-white p-2">
                Summer House
              </span>
            </div>
          </div>
        </div>
        {/* About  */}
        <h3 className="py-12 text-2xl">About</h3>
        <div>
          <p className="text-1xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div className="grid grid-cols-4 my-4">
            <div className="m-2 p-2">
              <img src="./team2.jpg" alt="" />
              <h3 className="text-2xl py-1">John Doe</h3>
              <h4 className="text-1xl py-2">CEO & Founder</h4>
              <p className="text-justify py-4">
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                sodales pellentesque elementum.
              </p>
              <button className="w-full bg-gray-200 text-black text-1xl hover:bg-gray-300 py-2">contact</button>
            </div>
            <div className="m-2 p-2">
              <img src="./team2.jpg" alt="" />
              <h3 className="text-2xl py-1">John Doe</h3>
              <h4 className="text-1xl py-2">CEO & Founder</h4>
              <p className="text-justify py-4">
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                sodales pellentesque elementum.
              </p>
              <button className="w-full bg-gray-200 text-black text-1xl hover:bg-gray-300 py-2">contact</button>
            </div>
            <div className="m-2 p-2">
              <img src="./team2.jpg" alt="" />
              <h3 className="text-2xl py-1">John Doe</h3>
              <h4 className="text-1xl py-2">CEO & Founder</h4>
              <p className="text-justify py-4">
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                sodales pellentesque elementum.
              </p>
              <button className="w-full bg-gray-200 text-black text-1xl hover:bg-gray-300 py-2">contact</button>
            </div>
            <div className="m-2 p-2 ">
              <img src="./team2.jpg" alt="" />
              <h3 className="text-2xl py-1">John Doe</h3>
              <h4 className="text-1xl py-2">CEO & Founder</h4>
              <p className="text-justify py-4">
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                sodales pellentesque elementum.
              </p>
              <button className="w-full bg-gray-200 text-black text-1xl hover:bg-gray-300 py-2">contact</button>
            </div>
          </div>
        </div>
        {/* Contact */}
         <h3 className="py-12 text-2xl">Contact</h3>
        <div className="py-8 ">
         <p>Lets get in touch and talk about your next project.</p>
         <div className=" grid grid-cols-1 gap-3">
         <input className="border-1 border-gray-300 px-2 py-1 " type="text" name="name" id="" placeholder="Name"/>
         <input className="border-1 border-gray-300 px-2 py-1" type="text" name="name" id="" placeholder="Email" />
         <input className="border-1 border-gray-300 px-2 py-1" type="text" name="name" id="" placeholder="Subject" />
         <input className="border-1 border-gray-300 px-2 py-1" type="text" name="name" id="" placeholder="Comment" />
         <button className="py-4 my-4 bg-black text-white w-70 text-1xl ">send message</button>
         </div>

        </div>
        {/* map  */}

        <div>
          <img className="w-full " src="./map.jpg" alt="" />
        </div>

        {/* footer  */}


      </div>
        <div className="bg-black text-white h-25">
          <p className=" text-center py-8">Powered by root4xl</p>

        </div>
    </>
  );
}

export default App;
