import logo from './logo.svg';
import './App.css';

import { React, useState, useEffect, createContext } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null)
function App() {

  const [theme, setTheme] = useState('dark')


  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className='switch-container'>
      <div className='switch'>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
        </div>
        <div className='test'>
          test
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
