import { removeAuthenticate } from "../../authenticate";
import { Navigate } from "react-router-dom";

const SignOut = () => {
    removeAuthenticate();
    return <Navigate to="/signin" />;
}

export default SignOut;