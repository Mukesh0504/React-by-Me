import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props

}, ref) {
    const id = useId()
    return (
        <h1>test</h1>
    )
})

export default Input