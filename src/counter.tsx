import React, {useReducer} from 'react'

interface InitialState{
    count: number
}
interface Action{
    type: String
}
const initialState = {count:0}

const reducer = (state:InitialState, action:Action)=>{
    switch(action.type){
        case 'increment':
            return(
                {count:state.count+=1}
            )
        case 'decrement':
            return(
                {count:state.count-=1}
            )
        default:
            return state
    }
}

const Counter:React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
        Count: {state.count}
        <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type:'increment'})}>Increment</button>
        </>
    )
}

export default Counter