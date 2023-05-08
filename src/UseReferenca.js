import { useRef, useState } from 'react'

// const UseReferenca = () => {

//     // put/attach the focus at input field
//     const renders = useRef(0)
//     const inputRef = useRef()

//     const [items, setItems] = useState(0)


//     // const handleChange = (e) => { setItems(e.target.value) }
//     const handleChange = (event) => {
//         setItems(event.target.value)
//         renders.current++;

//     }
//     const focusOnInput = () => {
//         inputRef.current.focus()
//     }

//     const resetState = () => {
//         setItems(0)
//         focusOnInput()
//     }


//     return (
//         <div>
//             <input type="text"
//                 value={items}
//                 onChange={handleChange}
//                 ref={inputRef}
//             />
//             {/* <button type='submit' onClick={handleChange}>Show data</button> */}
//             <p>Renders: {renders.current} </p>

//             <button onClick={focusOnInput}>Stay with focus</button>

//             <button onClick={resetState}>Reset Button</button>
//         </div>
//     )
// }

const UseReferenca = () => {

  const [value, setValue] = useState('');
  const [seconds, setSeconds] = useState(0);
  const render = useRef(0)
  // const focusTowards = useRef();
  const timerId = useRef()

  const handleChange = (e) => {
    setValue(e.target.value)
    render.current++;
  }

  const startTimer = () => {
    timerId.current = setInterval(()=> {
      render.current++;
      setSeconds(prev => prev + 1)
    },1000)
  }

  const stopTimer = () => {
    clearInterval(timerId.current)
    timerId.current = 0;
  }

  const resetTimer = () => {
      stopTimer();
      if(seconds) {
        render.current++;
        setSeconds(0)
      }
  }

  // const putFocus = () => {
  //   focusTowards.current.focus()
  // }

  return (
    <div>
      <input type="text"
        value={value}
        onChange={handleChange}
      />
      <p>Value: {value}</p>
      <br /><br />

      <p>Render: {render.current}</p>

      <br />
        
      <section>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
     <p>Seconds: {seconds}</p>
      </section>
    </div>
  )
}
export default UseReferenca;
