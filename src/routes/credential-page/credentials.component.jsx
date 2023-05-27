import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import "./credentials.styles.scss";

const Credentials = () => {
  return (
    <div className="credential-container">
      <SignInForm />

      <SignUpForm />
    </div>
  );
};

export default Credentials;
