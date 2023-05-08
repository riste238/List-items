import { useState, useReducer } from "react"

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 }
        case 'decrement':
            return { ...state, count: state.count - 1 }

        case 'userInput':
            return { ...state, userInput: action.payload }

        case 'tgColor':
            return { ...state, color: !state.color }
        default:
            throw new Error()
    }
}

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    TG_COLOR: 'tgColor',
}

const ComponentaReducer = () => {

    // userInput, count, 
    const [state, dispatch] = useReducer(reducer, { count: 0, userInput: '', color: false })
    // const [userInput, setUserInput] = useState('')
    // const [count, setCount] = useState(0)
    const [color, setColor] = useState(false)

    // const decreaseState = () => {
    //     dispatch(prev => prev - 1);
    // }
    // const increaseState = () => {
    //     dispatch(prev => prev + 1);
    // }
    // const changeColor = () => {
    //     setColor(color)
    // }



    return (
        <section style={{ color: state.color ? '#FFF' : '#F0F' }}>

            <h1>Component Reducer</h1>

            <input type="text"
                value={state.userInput}
                onChange={(e) => dispatch({ type: 'userInput', payload: e.target.value })}
            />
            <p>{state.userInput}</p>

            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
            <button onClick={() => dispatch({ type: ACTIONS.TG_COLOR })}>Color</button>
            <p>Count: {state.count}</p>
            <button >Color</button>
        </section>
    )
}

export default ComponentaReducer