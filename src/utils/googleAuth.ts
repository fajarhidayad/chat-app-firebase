import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import { app } from './firebase';

const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const signInWithGoogle = async () => {
  try {
    // const result = await signInWithRedirect(auth, provider);
    // const credentials = await GoogleAuthProvider.credentialFromResult(result);
    // if (!credentials) throw new Error();

    // const token = await credentials.accessToken;
    // return token;

    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;

    return user;
  } catch (error) {
    console.error('Something went wrong: ' + error);
  }
};
