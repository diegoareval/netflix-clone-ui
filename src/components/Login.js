import React from 'react'
import Button from '../shared/Button'
import Input from '../shared/Input'
import "./login.css"

const Login = ({change}) => {
    return (
        <div className="body">
        <a className="logoo" href="#">
          <img src="https://bit.ly/2VdIFUK" />
        </a>
        <div className="login">
          <h1 className="login__title">Sign In</h1>
          <Input type="text" label="Email or phone number"/>
          <Input type="password" label="Password"/>
          <Button label={"Sign in"} change={change}/>
          <div className="login__secondary-cta">
            <a className="login__secondary-cta__text" href="#">
              Remember me
            </a>
            <a
              className="login__secondary-cta__text login__secondary-cta__text--need-help"
              href="#"
            >
              Need help?
            </a>
          </div>
        </div>
      </div>
    )
}

export default Login
