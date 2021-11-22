import {useForm} from 'react-hook-form';
import { signup } from '../../api/authAPI';
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { authenticate } from '../../authenticate';

const SignUp = () => {
    const {register, handleSubmit, reset} = useForm();

    const navigate = useNavigate();

    const onSignUp = (data) =>{
        signup(data).then((response) => {
            console.log(response.data);
            toast.success("dang ki thanh cong");
            authenticate(response.data.user);
            navigate("/signin");
            // reset(response.data);
        })
    };
    return(
        <form onSubmit={handleSubmit(onSignUp)}>
            <div>
                <input type="email" {...register("email")} />
            </div>
            <div>
                <input type="password" {...register("password")} />
            </div>
            <button>Sign up</button>
        </form>
    );
}

export default SignUp;