import React from 'react'

const Button = ({label, clas="login__sign-in", type="button"}) => {
    return (
        <button class={clas} type={type}>
         {label}
        </button>
    )
}

export default Button
