import React from 'react';
import Header from './components/Header';
import './style/main.css';
import { ThemeContext } from './Theme'


function App() {
  const ThemeCont = React.useContext(ThemeContext)
  const dark = ThemeCont.darkTheme
  return (
    <>
    <Header/>
    <div className= {dark ? "content dark" : "content"}>

    </div>
    </>
  );
}

export default App;
