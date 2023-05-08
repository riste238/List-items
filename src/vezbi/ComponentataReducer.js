import { useRef, useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return ({ ...state, count: state.count + 1 })

        case 'decrement':
            return ({ ...state, count: state.count - 1 })

        case 'userInput':
            return ({ ...state, userInput: action.payload })

        case 'changeColor':
            return ({ ...state, color: !state.color })

        default: return state;
    }
}

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    COLOR: 'changeColor'
}

const ComponentataReducer = () => {

    const [sostojba, dispatch] = useReducer(reducer, { count: 0, userInput: '', color: false });
    const inputFocus = useRef();

    const handleFocus = () => {
        inputFocus.current.focus()
    }
    // change background color:
    // change text color;

    return (
        <div>
            <div style={{ backgroundColor: sostojba.color?.true ? 'red' : 'green' }}>
                <input type="text"
                    value={sostojba.userInput}
                    ref={inputFocus}
                    name="input-user"
                    
                    // onClick={() => dispatch({type: 'changeColor', payload: randColor()})}
                    onChange={(e) => dispatch({ type: 'userInput', payload: e.target.value, })} />
                {<p>User input value: {sostojba.userInput}</p>}
                <button onClick={() => handleFocus()}>Remain focus at input</button>
            </div>
            <div>

                <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>increment</button>
                <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>Decrement</button>
                <button onClick={() => dispatch({ type: ACTIONS.COLOR })}>Change Color</button>
                {sostojba.count}
            </div>
        </div>
    )
}
export default ComponentataReducer