import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { useState} from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.style.scss";

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
    <div className="sign-in-container">
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
          <div className="buttons-container">
            <Button buttontype="" type="submit">
              Sign in
            </Button>
            <Button
              type="button"
              buttontype="google"
              onClick={SignInWithGoogle}
            >
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
