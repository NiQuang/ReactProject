import { useForm } from 'react-hook-form';
import { signup } from '../../api/authAPI';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { authenticate } from '../../authenticate';


const SignUp = () => {
    const { register, handleSubmit, reset } = useForm();

    const navigate = useNavigate();

    const onSignUp = (data) => {
        signup(data).then((response) => {
            console.log(response.data);
            toast.success("dang ki thanh cong");
            authenticate(response.data.user);
            navigate("/signin");
            // reset(response.data);
        })
    };
    return (
        <form onSubmit={handleSubmit(onSignUp)} className="row">
            <h2>Dang ky tai khoan</h2>
            <label>Email</label>
            <input type="email" {...register("email")} placeholder="Enter email"/>
            <label>Password</label>
            <input type="password" {...register("password")} placeholder="Enter password"/>
            <br />
            <label>Full Name</label>
            <input type="text" {...register("fulname")}  placeholder="Enter your full name"/>
            <br />
            <label>Gender</label>
            <select {...register("gender")}>
                <option value="true">Male</option>
                <option value="false">Female</option>
            </select>
            <button>Sign up</button>
        </form>
    );
}

export default SignUp;