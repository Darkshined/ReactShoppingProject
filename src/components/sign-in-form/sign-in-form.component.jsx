import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { useState} from "react";
import  Button,{ BUTTON_TYPE_CLASSES}   from "../button/button.component"; 
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.style.scss";
import { SignInContainer,ButtonsContainers } from "./sign-in-form.style";


const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;



  const SignInWithGoogle = async () => {
     await signInWithGooglePopUp();

  };

  const resetSignInForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSummit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signUserWithEmailAndPassword(email, password);
      resetSignInForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <SignInContainer>
      <h2>I already have an account </h2>
      <span>Sign in with your email and password</span>
      <div className="signin-info">
        <form onSubmit={handleSummit}>
          <FormInput
            label="Email"
            type="text"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <ButtonsContainers>
            <Button buttontype={BUTTON_TYPE_CLASSES.base} type="submit">
              Sign in
            </Button>
            <Button
              type="button"
              buttontype={BUTTON_TYPE_CLASSES.google}
              onClick={SignInWithGoogle}
            >
              Sign in with Google
            </Button>
          </ButtonsContainers>
        </form>
      </div>
    </SignInContainer>
  );
};

export default SignInForm;
