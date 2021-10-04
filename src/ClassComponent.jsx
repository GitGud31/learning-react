import React, { Component } from "react";
import { ThemeContext } from "./App";


export class ClassComponent extends Component {
    themeStyles(dark) {
        return {
            backgroundColor: dark ? '#333' : '#ccc',
            color: dark ? '#ccc' : '#333',
            padding: '2rem',
            margin: '2rem',
        };
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {
                    //The value we passed via Provider.
                    darkTheme => {
                        return <div style={this.themeStyles(darkTheme)}>Class theme</div>
                    }
                }
            </ThemeContext.Consumer>
        );
    }

}