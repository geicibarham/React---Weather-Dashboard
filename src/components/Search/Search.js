import { React, useState, useEffect } from "react";
import "./search.css";
import axios from "axios";
import Cardlist from "../CardList/Cardlist";

import { TiWeatherSnow } from "react-icons/ti";
const Search = (props) => {
  const [city, setCity] = useState("");
  const [Weatherdata, setdata] = useState([]);
  const [citytoDisplay, setcityTodisplay] = useState("");
  const [current, setCurrent] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const getLatandLong = () => {
    const ApiKey = "ee601a5be4293bbbbc2b2665840ba595";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=imperial`;
    axios.get(apiUrl).then((res) => {
      const data = {
        ApiKey: ApiKey,
        lat: res.data.coord.lat,
        long: res.data.coord.lon,
      };

      setcityTodisplay(res.data.name);
      getForecast(data);
    });
  };

  // console.log(Weatherdata)
  const getForecast = (data) => {
    const lat = data.lat;
    const lon = data.long;
    const apiKey = data.ApiKey;

    let fiveDaysWeatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${apiKey}`;
    axios.get(fiveDaysWeatherURL).then((res) => {
      setdata(res.data);

      // calling function coming from app.js
      props.getCurrentWeather(res.data);
      console.log(current)
    });

  };


  const handleSubmit = (e) => {
    e.preventDefault();
    getLatandLong();
    setCity("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <TiWeatherSnow /> */}
        <div>

          <input value={city} onChange={handleChange} type="text" />

        </div>
        <button type="submit">Search</button>
      </form>

      <Cardlist citytoDisplay={citytoDisplay} Weatherdata={Weatherdata} />
    </>
  );
};

export default Search;
