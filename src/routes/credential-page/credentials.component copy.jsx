import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import { CredentialContainer } from "./credentials.styles.jsx";

const Credentials = () => {
  return (
    <CredentialContainer>
      <SignInForm />

      <SignUpForm />
    </CredentialContainer>
  );
};

export default Credentials;
