import React from "react";
import { useToggleTheme } from "./ThemeProvider.jsx";

export function ButtonTheme() {

    /* Consume the value of the custom hook (toggleTheme() ) */
    const toggleTheme = useToggleTheme();

    return (
        <button onClick={toggleTheme}>Toggle Theme</button>
    );
}