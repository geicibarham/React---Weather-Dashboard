import { React, useState} from "react";
import "./search.css";
import axios from "axios";
import Cardlist from "../CardList/Cardlist";
const Search = (props) => {
  const [city, setCity] = useState("");
  const [Weatherdata, setdata] = useState([]);
  const [citytoDisplay, setcityTodisplay] = useState("");
 

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

  console.log(Weatherdata);
  const getForecast = (data) => {
    const lat = data.lat;
    const lon = data.long;
    const apiKey = data.ApiKey;

    let fiveDaysWeatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${apiKey}`;
    axios.get(fiveDaysWeatherURL).then((res) => {
      setdata(res.data);

      // calling function coming from app.js
      props.getCurrentWeather(res.data);
     
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getLatandLong();
    setCity("");
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {/* <TiWeatherSnow /> */}
        <div>
          
          <input placeholder="Enter The City"size="50" value={city} onChange={handleChange} type="text" />
        </div>
        <button type="submit">Search</button>
      </form>

      <Cardlist citytoDisplay={citytoDisplay} Weatherdata={Weatherdata} />
    </>
  );
};

export default Search;
