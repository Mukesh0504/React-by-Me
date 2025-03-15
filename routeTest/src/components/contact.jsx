import React from 'react'
import { useParams } from 'react-router-dom'


function contact() {
    const { num } = useParams()
    return (
        <div>your number is : {num}</div>
    )
}

export default contact