import {
  signInWithGooglePopup,
  createUserProfileDocument,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logInGooglePopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userRef = await createUserProfileDocument(user);
  };

  return (
    <div className="sign-in">
      <h2>This is a Sign In page</h2>
      <button onClick={logInGooglePopup}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
