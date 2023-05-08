// import './App.css';
// import UseReferenca from './UseReferenca';
// import ComponentaReducer from './ComponentaReducer';
import ComponentataReducer from "./vezbi/ComponentataReducer";
// import { useEffect, useState, useCallback } from 'react';

// function App() {

//   const [userInput, setUserInput] = useState('');
//   const [result, setResult] = useState(0)

//   const [num1] = useState(4);
//   const [num2] = useState(5);

//   const sum = useCallback(() => num1 + num2, [num1, num2]);

//   const buildArray = useCallback(() => [num1,num2], [num1, num2]);

//   useEffect(() => {
//     // console.log(`New sum. Value ${sum()}`);
//     // setResult(sum())

//     console.log(`New array. ${buildArray()}`);
//       setResult(buildArray())
//   }, [buildArray])


//   return (

//     <main>
  // <title>UseCallback & useMemo app</title>
//       <input type="text"
//         placeholder='input'
//         value={userInput}
//         onChange={(e) => setUserInput(e.target.value)}
//       />
//       <h1>Output: {userInput || "--"}</h1>
//     </main>
//   );
// }


function App(){
  return (
    <div>
      <title>Reference's app</title>
      {/* <UseReferenca/> */}
      <ComponentataReducer/>
    </div>
  )
}

export default App;
