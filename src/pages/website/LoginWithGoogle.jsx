import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../../firebase/firebase.config.jsx";

const LoginWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    const googleSignin = () => {
        const user = signInWithPopup(auth, provider);
    };

    return(
        <div>
            <button onClick={googleSignin}>Sign with google</button>
        </div>
    )
}

export default LoginWithGoogle;