import "./App.css";
import Button from "./shared/Button";
import Input from "./shared/Input";

function App() {
  return (
    <>
      <a class="logo" href="#">
        <img src="https://bit.ly/2VdIFUK" />
      </a>
      <div class="login">
        <h1 class="login__title">Sign In</h1>
        <Input type="text" label="Email or phone number"/>
        <Input type="password" label="Password"/>
        <Button label={"Sign in"}/>
        <div class="login__secondary-cta">
          <a class="login__secondary-cta__text" href="#">
            Remember me
          </a>
          <a
            class="login__secondary-cta__text login__secondary-cta__text--need-help"
            href="#"
          >
            Need help?
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
