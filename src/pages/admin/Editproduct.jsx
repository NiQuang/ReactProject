import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { read } from "../../api/productAPI";

const EditProduct = (props) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm();

    let navigate = useNavigate();

    // su dung hook use Params de lay id tu tren url

    const { id } = useParams();

    const [product, setProduct] = useState({});

    //call api de lay thong tin sp

    useEffect(() => {
        read(id).then((response) => {
            // set thong tin san pham lay dc vao product
            setProduct(response.data);
            //reset lai input de tranh loi k nhap gi ma van bao validate
            reset(response.data);
        });
    }, id);

    const onSubmit = (data) => {
        //sau khi submit, du lieu input dc gan vao bien data
        // day len App.js mot object bao hom id va dulieu input
        props.onUpdate({id, ...data});
    };

    const editProductForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input type="text"
                    placeholder="Ten san pham"
                    {...register("name")}
                     />
                {errors.name && <p>Field is required</p>}
                <input type="number"
                    palcehoder="gia san pham"
                    {...register("price")}/>
                    <button>Save</button>

            </form>
        );
    };

    return <div>{editProductForm()}</div>
};

export default EditProduct;