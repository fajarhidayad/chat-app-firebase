import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { app } from "./firebase";

const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithRedirect(auth, provider);
    const credentials = await GoogleAuthProvider.credentialFromResult(result);
    if (!credentials) throw new Error();

    const token = await credentials.accessToken;
    return token;
  } catch (error) {
    console.error("Something went wrong: " + error);
  }
};
