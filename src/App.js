import "./App.css";
import { React, useState, useEffect, createContext } from "react";
import ReactSwitch from "react-switch";
import Search from "./components/Search/Search";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [mode, setMode] = useState("");
  const [weatherType, setWeathertype] = useState("");
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

  // this function is passed as props to the serach component to get the current weather:sunny,rainy etc
  const getCurrentWeather = (current) => {
    // console.log(current.current.weather[0].main);
    setWeathertype(current.current.weather[0].main);

  };
console.log(weatherType)
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* utilizing ternary to determine type of sky and type of class */}
      <section className={weatherType === "Clouds" ? "cloudy" :
      weatherType === "Clear" ? "clear" :
      ""}>
        <div className="App" id={theme}>

          <header>
            <h1>Weather Dashboard</h1>
        
            <div className="switch">
              <span className="theme-description">{mode} Mode</span>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
          </header>

          <Search getCurrentWeather={getCurrentWeather} />

        </div>
      </section>
    </ThemeContext.Provider>
  );
}

export default App;
