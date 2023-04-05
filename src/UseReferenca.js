import { useEffect, useRef, useState } from "react";

const UseReferenca = () => {

    const [item, setItem] = useState('');

    const count = useRef(0);
    const inputCurrent = useRef();
    console.log(count.current);

    // useEffect(() => {
    //     count.current = count.current + 1;
    // console.log(count.current);


    // },
    //     [0])

    const handleInput = () => {
        setItem('')
            inputCurrent.current.focus()
    }

    return (
        <>
            <input type="text"
            className=""
                ref={inputCurrent}

                value={item}
                onChange={(e) => { setItem(e.target.value) }}
            />
            <button onClick={handleInput}>Click</button>
            <h1>Number: {count.current}</h1>
        </>
    )
}

export default UseReferenca;