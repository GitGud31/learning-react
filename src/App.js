import React, { createContext, useState } from "react";
import { ClassComponent } from "./ClassComponent.jsx";
import { FunctionComponent } from "./FunctionComponent.jsx";

export const ThemeContext = createContext();


function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prevTheme => !prevTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionComponent />
        <ClassComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
