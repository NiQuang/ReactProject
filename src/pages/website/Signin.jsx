import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { singin } from '../../api/authAPI';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { authenticate } from '../../authenticate';


const SignIn = () => {
    const {register, handleSubmit, reset} = useForm();

    const navigate = useNavigate();

    const onSignIn = (data) => {
        //call api
        singin(data).then((response) =>{
            toast.success("Signin successfully!");

            //luu thong tin vao localStorage
            authenticate(response.data.user);

            //lay thong tin
            if(response.data.user.id === 1){
                navigate("/admin/dashboard");
            }else{
                navigate("/");
            }
        }).catch((error) => {
            toast.error(error.response.data)
        });
    };

    return(
        <form onSubmit={handleSubmit(onSignIn)}>
            <div>
                <input type="email" {...register("email")} />
            </div>
            <div>
                <input type="password" {...register("password")} />
            </div>
            <button>Sign in</button>
        </form>
    );
}

export default SignIn;