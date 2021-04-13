
import React, {ReactEventHandler, useContext, useState} from 'react'
export const ThemeContext = React.createContext(true)
export const ThemeUpdateContext = React.createContext(null)

export function useTheme():Boolean{
    return useContext(ThemeContext)
}
export function useUpdateTheme():ReactEventHandler{
    return useContext(ThemeUpdateContext)
}
export const ThemeProvider:React.FC = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(true)
    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}
