import React from 'react'

const Button = ({label, clas="login__sign-in", type="button", change}) => {
    return (
        <button class={clas} type={type} onClick={()=>change(false)}>
         {label}
        </button>
    )
}

export default Button
