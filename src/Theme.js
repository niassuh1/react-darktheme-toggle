import React, { useState, useContext, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(getTheme());

  function toggleTheme() {
    setDarkTheme(!darkTheme);
    localStorage.setItem("darkTheme", !darkTheme);
  }

  //Initialize the value
  function getTheme() {
    const savedTheme = localStorage.getItem("darkTheme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  }
  
  //Initialize in the user's local storage
  useEffect(() => {
    localStorage.getItem("darkTheme")
      ? localStorage.getItem("darkTheme")
      : localStorage.setItem("darkTheme", darkTheme);
  }, []);

  //Extract the values
  const themeValues = { darkTheme, toggleTheme };
  return (
    <>
      <ThemeContext.Provider value={themeValues}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}
