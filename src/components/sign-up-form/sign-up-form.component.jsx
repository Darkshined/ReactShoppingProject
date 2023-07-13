import { useState  } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button , {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { SignUpContainer } from "./sign-up-form.style.jsx";


const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;


  const resetSignUpForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleSummit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match , try again!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName });
      
      resetSignUpForm();
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("Your email is already used! Try again with a new one!");
      }

      console.log("User creation encountered an error", e);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
   <SignUpContainer>
      <h2>Don't have an account? </h2>
      <span>Sign up with you email and password</span>
      
        <form onSubmit={handleSummit}>
          <FormInput
            label="Display Name"
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />

          <FormInput
            label="Email"
            type="email"
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

          <FormInput
            label="Confirm Password"
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
          <Button  type="submit" buttontype= {BUTTON_TYPE_CLASSES.base} >Sign Up</Button> 
        </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
