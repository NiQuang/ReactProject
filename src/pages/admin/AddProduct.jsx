import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddProduct = (props) =>{
    const{
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();
    let navigate = useNavigate();

    const submit = (data) =>{
        props.onAdd(data);
        navigate("/product",{replace: true});
    };


    const AddProductForm = () => {
        return (
            <form onSubmit={handleSubmit(submit)}>
                <input type="text"
                    placeholder="Ten san pham"
                    {...register("name")}/>
                {errors.name && <p>Field is required</p>}
                <input type="number"
                    palcehoder="gia san pham"
                    {...register("price")}/>
                    <button>Them san pham</button>
            </form>

        );
    };

    return <div>{AddProductForm()}</div>;


};

export default AddProduct;