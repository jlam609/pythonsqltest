import React from 'react'
import Child from './child'
import { ThemeProvider } from './themecontext'



const App:React.FC = () => {
    return (
       <ThemeProvider>
           <Child/>
       </ThemeProvider>
    )
}
export default App