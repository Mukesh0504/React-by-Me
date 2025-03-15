import { useState } from "react"

import './chai.css'
function Chai() {

    let [counter, setCounter] = useState(10)

    const addValue = () => {
        counter++;
        setCounter(counter)
    }
    const removeValue = () => {
        counter--;
        setCounter(counter)
    }
    return (
        <>
            <h2>counter value: {counter}</h2>
            <button
                onClick={addValue}
             id="add">Add Value {counter}</button>
            <button
                onClick={removeValue}
             id="remove">Remove Value {counter}</button>

        </>
    )
}

export default Chai