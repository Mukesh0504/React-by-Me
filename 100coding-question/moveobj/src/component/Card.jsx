import React from 'react'
import { useRef, useCallback, useEffect, useState } from 'react'


function Card({ boxId }) {
    let [isActive, setIsActive] = useState(false)


    const boxRef = useRef(null)

    function activateBox() {
        setIsActive(true)
        console.log("grab");
    }


    const handleBoxMove = useCallback((evt) => {
        console.log("move");
        let box = boxRef.current

        if (box) {
            box.style.left = [evt.clientX - 50] + "px"
            box.style.top = [evt.clientY - 50] + "px"
            return
        }
    }, [])

    function deActivateBox() {
        console.log("leave");
        setIsActive(false)
        document.removeEventListener("mousemove", handleBoxMove)
        document.removeEventListener("mouseup", deActivateBox)
    }

    useEffect(() => {
        if (isActive) {
            document.addEventListener("mousemove", handleBoxMove);
            document.addEventListener("mouseup", deActivateBox)
        }
        else {
            document.removeEventListener("mousemove", handleBoxMove);
        }

    }, [isActive])

    return (
        <div
            className={`w-30 bg-green-500 h-30 absolute  cursor-grab rounded-2xl pl-1.5 `}
            onMouseDown={activateBox}
            ref={boxRef}
        >

            test {boxId}
        </div >
    )
}

export default Card