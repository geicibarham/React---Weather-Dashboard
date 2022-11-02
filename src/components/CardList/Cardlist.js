import axios from "axios";
import moment from "moment/moment";
import { React, useState, useEffect, createContext } from "react";
import "./cardlist.css";

const Cardlist = (props) => {

  if (props.Weatherdata.length === 0) {
    return <h2>Enter the city to get started</h2>;
  }

  return (
    <section
      className={
        props.Weatherdata.current.weather[0].main === "Clouds" ? "cloudy" : 
        props.Weatherdata.current.weather[0].main ==="Clear" ? "clear" :
        ""
      }
    >
      <div className="current-weather-outer-container">
        <div className="current-weather">
          {moment().format("MMM Do YY")}
          <h5>{props.citytoDisplay}</h5>

          <img
            className="icon"
            src={
              "https://openweathermap.org/img/wn/" +
              props.Weatherdata.current.weather[0].icon +
              "@2x.png"
            }
            alt="weather icon"
          />

          <span>Temperature: {props.Weatherdata.current.temp}°F</span>
          <span>Uv-Index: {props.Weatherdata.current.uvi}</span>
          <span>Wind Speed: {props.Weatherdata.current.wind_speed} Mph</span>
          <span>Humidity: {props.Weatherdata.current.humidity}</span>
        </div>
      </div>
      <article className="cards-container">
        {props.Weatherdata.daily.map((day) => (
          <section className="weather-card" key={day.temp.max}>
            <img
              className="icon"
              src={
                "http://openweathermap.org/img/wn/" +
                day.weather[0].icon +
                "@2x.png"
              }
              alt="weather icon"
            />
            {/* var icon = i.weather[0].icon; */}

            {/* console.log(props.Weatherdata.daily[1].weather[0].icon); */}
            <span>{day.temp.max}°F</span>
            <span>{day.temp.min}°F</span>
            <span>Humidity {day.humidity}%</span>
          </section>
        ))}
      </article>
      {/* props.Weatherdata.daily[0].temp.max */}
    </section>
  );
};

export default Cardlist;
