import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { singin } from '../../api/authAPI';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { authenticate } from '../../authenticate';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


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
        // <form onSubmit={handleSubmit(onSignIn)}>
        //     <div>
        //         <input type="email" {...register("email")} />
        //     </div>
        //     <div>
        //         <input type="password" {...register("password")} />
        //     </div>
        //     <button>Sign in</button>
        // </form>
        <Form onSubmit={handleSubmit(onSignIn)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" {...register("email")} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" {...register("password")}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
}

export default SignIn;