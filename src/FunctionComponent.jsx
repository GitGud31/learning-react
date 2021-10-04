import React from "react";
import { useTheme } from "./ThemeProvider";


export function FunctionComponent() {

    /* Consume the custom hook value (darkTheme) */
    const theme = useTheme();

    const themeStyles = {
        backgroundColor: theme ? '#333' : '#ccc',
        color: theme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem',
    }

    return (
        <div style={themeStyles}> Function Component</div>
    );
}
