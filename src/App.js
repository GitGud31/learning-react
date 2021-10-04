import React from "react";
import { FunctionComponent } from "./FunctionComponent.jsx";
import { ButtonTheme } from "./ThemeButton.jsx";
import { ThemeProvider } from "./ThemeProvider.jsx";


function App() {

  return (
    <ThemeProvider>

      <ButtonTheme />
      <FunctionComponent />

    </ThemeProvider>
  );
}

export default App;
