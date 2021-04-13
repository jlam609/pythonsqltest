import React from 'react'
import Child from './child'
import Counter from './counter'
import { ThemeProvider } from './themecontext'



const App:React.FC = () => {
    return (
       <ThemeProvider>
           <Child/>
           <Counter/>
       </ThemeProvider>
    )
}
export default App