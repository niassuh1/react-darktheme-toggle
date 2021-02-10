import React from "react";
import "react-toggle/style.css";
import Toggle from "react-toggle";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from '../Theme'

function Header(props) {
  const ThemeCont = React.useContext(ThemeContext)
  const dark = ThemeCont.darkTheme
  const toggle = ThemeCont.toggleTheme

  return (
    <div className={dark ? "header dark" : "header" }>
      <Toggle
      checked = {dark}
        onClick = {toggle}
        className="toggle"
        icons={{
          checked: <FaMoon size="10px" />,
          unchecked: <FaSun size="10px" color="white" />,
        }}
      />
    </div>
  );
}

export default Header;
