
import './App.css';
import { React, useState, useEffect, createContext } from 'react';
import ReactSwitch from 'react-switch';
import Search from './components/Search/Search';
export const ThemeContext = createContext(null);


function App() {

  const [theme, setTheme] = useState('light')
  const [mode, setMode] = useState('')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark'
      : 'light'))

  };
  useEffect(() => {
    if (theme === 'dark') {
      setMode('dark')
    }
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
          
            <span className='theme-description'>{mode} Mode</span>
            <ReactSwitch


              onChange={toggleTheme} checked={theme === 'dark'} />
          </div>
        </header>

        <Search />

      </div>
    </ThemeContext.Provider >
  );
}

export default App;
