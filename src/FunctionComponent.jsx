import React, { useContext } from "react";
import { ThemeContext } from "./App";


export function FunctionComponent() {

    const darkTheme = useContext(ThemeContext);

    const themeStyles = (dark) => {
        return {
            backgroundColor: dark ? '#333' : '#ccc',
            color: dark ? '#ccc' : '#333',
            padding: '2rem',
            margin: '2rem',
        };
    }

    return (
        <div style={themeStyles(darkTheme)}> Function Component</div>
    );
}
