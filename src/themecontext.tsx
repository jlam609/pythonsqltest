import React, {useContext, useState} from 'react'

export const ThemeContext = React.createContext()
export const ThemeUpdateContext = React.createContext()

export function useTheme():Boolean{
    return useContext(ThemeContext)
}
export function useUpdateTheme():Boolean{
    return useContext(ThemeUpdateContext)
}
export const ThemeProvider:React.FC = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(true)
    function toggleTheme():void{
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
