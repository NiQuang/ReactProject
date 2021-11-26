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
                <br/>
                <input type="number"
                    palcehoder="gia san pham"
                    {...register("price")}/>
                <br/>
                <select {...register("category")}>
                    <option value="1">Hang loai 1</option>
                    <option value="2">Hang loai 2</option>
                    <option value="3">Hang loai 3</option>
                </select>
                <br/>
                <textarea placeholder="mota" {...register("detail")}/>
                <br/>
                    <button>Them san pham</button>
            </form>

        );
    };

    return <div>{AddProductForm()}</div>;


};

export default AddProduct;