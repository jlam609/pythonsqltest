import React from "react";
import {useTheme, useUpdateTheme } from "./themecontext";


const Child: React.FC = () => {
  const darkTheme = useTheme()
  const toggleTheme = useUpdateTheme()
  const themeStyles = {
      backgroundColor: darkTheme ? 'black':'gray',
      color: darkTheme ? 'white':'black',
      padding: '2rem',
      margin: '2rem'
  }
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
};

export default Child