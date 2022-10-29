
import './App.css';

import { React, useState, useEffect, createContext } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('dark')
  const [mode, setMode] = useState('')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark'
      : 'light'))

  };
  useEffect(() => {
    if (theme === 'dark') {
      setMode('dark')
    }

    console.log(theme)
    if (theme === 'light') {
      setMode('light')
    }
  }, [theme])


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>


      <div className="App" id={theme}>
        <header>

          <h1>Weather Dashboard</h1>

          <div className='switch'>
            {/* <span className='theme-description'>Mode</span> */}
            <span className='theme-description'>{mode} Mode</span>
            <ReactSwitch


              onChange={toggleTheme} checked={theme === 'dark'} />
          </div>
        </header>


        <div className='test'>
          test
        </div>
      </div>
    </ThemeContext.Provider >
  );
}

export default App;
