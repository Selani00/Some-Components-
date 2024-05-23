import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const stateContext = createContext();

export const StateContextProvider = ({ childern }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("Colombo");
  const [location, setLocation] = useState("");

  //fetch api
  const featcWeather = async () => {
    const option = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",

      params: {
        location: place,
        aggregateHours: "24",
        contentType: "json",
        unitGroup: "metric",
        shortColumnNames: 0,
      },

      header: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(option);
      console.log(response.data);

      const thisData = Object.values(response.data.locations)[0];
      setLocation(thisData.address);
      setValues(thisData.values);
      setWeather(thisData.values[0]);
    } catch (error) {
      console.log(error);

      //if the api throws an error
      alert("This place does not exist");
    }
  };

  useEffect(() => {
    featcWeather();
  }, [place]);

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <stateContext.Provider
      value={{ weather, values, setPlace, location }}
    >
      {childern}
    </stateContext.Provider>
  );
};


export const useStateContext = () => useContext(stateContext);