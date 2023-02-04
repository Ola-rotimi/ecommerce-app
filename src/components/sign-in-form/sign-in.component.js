import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  createUserProfileDocument,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./sign-in.styles.scss";
import Button from "../button/button.component";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const logInWithGooglePopup = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserProfileDocument(user);
  };

  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await signInAuthUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user);
      setFormField(defaultFormField);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;      
        default:
          alert("Error signing in");
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with Email and Password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
          minLength="8"
        />
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logInWithGooglePopup}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
