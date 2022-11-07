import moment from "moment/moment";
import { React} from "react";
import "./cardlist.css";
import downarrow from '../../assets/images/down-arrow.png'
import uparrow from '../../assets/images/up-arrow-37.png'
const Cardlist = (props) => {
  if (props.Weatherdata.length === 0) {
    return <h2>Enter the city to get started</h2>;
  }

  return (
    <section>
      <div className="current-weather-outer-container">
        <div className="current-weather">
          {moment().format("MMM Do YY")}
          <h3>
            {props.citytoDisplay}

            <img
              className="icon"
              src={
                "https://openweathermap.org/img/wn/" +
                props.Weatherdata.current.weather[0].icon +
                "@2x.png"
              }
              alt="weather icon"
            />
          </h3>
          <span>Temperature: {props.Weatherdata.current.temp}°F</span>

          <span
            className={
              props.Weatherdata.current.uvi < 3
                ? "lowUv"
                : props.Weatherdata.current.uvi >= 3 &&
                  props.Weatherdata.current.uvi <= 5
                  ? "mediumUv"
                  : props.Weatherdata.current.uvi > 5 &&
                    props.Weatherdata.current.uvi < 8
                    ? "highUv"
                    : props.Weatherdata.current.uvi >= 8 &&
                      props.Weatherdata.current.uvi < 11
                      ? "veryhighUv"
                      : props.Weatherdata.current.uvi > 11
                        ? "extremeUv"
                        : ""
            }
          >
            Current Uvi : {props.Weatherdata.current.uvi}
          </span>
          <span>Wind Speed: {props.Weatherdata.current.wind_speed} Mph</span>
          <span>Humidity: {props.Weatherdata.current.humidity}%</span>
        </div>
      </div>
      <article className="cards-container">
        {props.Weatherdata.daily.slice(0, 5).map((day,index) => (
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
            {
              moment().add(index + 1, 'day').format('M/D/YYYY')
            }
            <span>
              <img width="16px"src={uparrow} alt="up arrow" />
              {day.temp.max}°F</span>
            <span>
              <img width="16px" src={downarrow} alt="down arrow" />
              {day.temp.min}°F</span>
            <span>Humidity {day.humidity}%</span>
            <span>Wind Speed: {day.wind_speed} Mph</span>
          </section>
        ))}
      </article>
      {/* props.Weatherdata.daily[0].temp.max */}
    </section>
  );
};

export default Cardlist;
