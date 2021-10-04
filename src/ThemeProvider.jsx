import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();
const ThemeToggleContext = createContext();


/* These two custom hooks gives easy access to darkTheme and toggleTheme(). */
export function useTheme() {
    return useContext(ThemeContext);
}

export function useToggleTheme() {
    return useContext(ThemeToggleContext);
}


/* Holds all the theme logic and information */
export function ThemeProvider({ children }) {

    // creating theme state
    const [darkTheme, setDarkTheme] = useState(true);

    // handles updating theme state
    const toggleTheme = () => {
        setDarkTheme(prevTheme => !prevTheme);
    }

    return (

        //persisting the values (darkTheme, toggleTheme() ) to children.
        <ThemeContext.Provider value={darkTheme}>
            <ThemeToggleContext.Provider value={toggleTheme}>
                {children}
            </ThemeToggleContext.Provider>
        </ThemeContext.Provider>
    );
}