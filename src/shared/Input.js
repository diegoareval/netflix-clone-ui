import React from 'react'

const Input = ({label, type}) => {
    return (
        <div class="login__group">
          <input class="login__group__input" type={type} required="true" />
    <label class="login__group__label">{label}</label>
        </div>
    )
}

export default Input
