import "./App.css";
import { React, useState, useEffect, createContext } from "react";
import ReactSwitch from "react-switch";
import Search from "./components/Search/Search";
import weatherIcon from "./assets/images/weather.png";
import Footer from "./components/footer/Footer";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [mode, setMode] = useState("");
  const [weatherType, setWeathertype] = useState("");
  const [icon, setIcon] = useState("");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    if (theme === "dark") {
      setMode("dark");
    }
    if (theme === "light") {
      setMode("light");
    }
  }, [theme]);

  // this function is passed as props to the search component to get the current weather:sunny,rainy etc
  const getCurrentWeather = (current) => {
    setWeathertype(current.current.weather[0].description);
    setIcon(current.current.weather[0].icon);
    console.log(current.current);
  };
  console.log(weatherType);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* utilizing ternary to determine type of sky and type of class */}

      <div className="App" id={theme}>
        <section
          className={
            weatherType === "clear sky" && icon === "01n"
              ? "clearNight"
              : weatherType === "clear sky" && icon === "01d"
              ? "sunny"
              : weatherType === "few clouds" && icon === "02d"
              ? "fewCloudsday"
              : weatherType === "few clouds" && icon === "02n"
              ? "cloudyNight"
              : weatherType === "overcast clouds" && [icon === "03d" || icon === "04d"]
              ? "cloudyDay"
              : weatherType === "scattered clouds" && icon === "03d"
              ? "scateredDay"
              : [
                  weatherType === "scattered clouds" ||
                    weatherType === "overcast clouds",
                ] && icon === "03n"
              ? "scateredNight"
              : [
                  weatherType === "broken clouds" ||
                    weatherType === "overcast clouds",
                ] && icon === "04n"
              ? "brokenNight"
              
              :weatherType === "broken clouds" && icon === "04d" ? "brokenDay"
              : weatherType === "shower rain" && icon === "09d"
              ? "showerDay"
              : weatherType === "shower rain" && icon === "09n"
              ? "showerNight"
              : [weatherType === "rain" || weatherType === "light rain"] &&
                icon === "10d"
              ? "rainDay"
              : [weatherType === "rain" || weatherType === "light rain"] &&
                icon === "10n"
              ? "rainNight"
              : weatherType === "moderate rain"
              ? "moderateRain"
              : weatherType === "thunderstorm" && icon === "11d"
              ? "thunderDay"
              : weatherType === "thunderstorm" && icon === "11d"
              ? "thunderNight"
              : weatherType === "snow" && icon === "13d"
              ? "snowDay"
              : weatherType === "snow" && icon === "13d"
              ? "snowNight"
              : weatherType === "mist" || weatherType === "fog"
              ? "mist"
              : ""
          }
        >
          <header>
            <h1>
              Weather Dashboard &nbsp; &nbsp; 
              <img width="50px" src={weatherIcon} alt="weather icon" />
            </h1>
            <div className="switch">
              <span className="theme-description">{mode} Mode</span>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
          </header>

          <Search getCurrentWeather={getCurrentWeather} />
        </section>
      
     
      </div>
     <Footer />
    
    </ThemeContext.Provider>
  );
}

export default App;
