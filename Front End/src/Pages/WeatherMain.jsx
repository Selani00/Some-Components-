import React, { useState } from "react";
import search from "../assets/WeatherApp/icons/search.svg";

const WeatherMain = () => {
  const [input, setInput] = useState("");

  const {weather} = useStateContext();

  console.log(weather);
  return (
    <div className="w-full h-screen text-black px-8">
      <nav className="w-full p-3 flex justify-between items-center">
        <h1 className="font-bold tracking-wide text-3xl">Weather App</h1>
        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          <img src={search} alt='search' className="w-[1.5rem] h-[1.5rem]"/>
          <input
            type="text"
            className="focus:outline-none w-full text-[#212121] text-lg"
            onKeyUp={(e) => {
                if(e.key==='Enter'){
                    console.log(input);
                }
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </nav>
    </div>
  );
};

export default WeatherMain;
