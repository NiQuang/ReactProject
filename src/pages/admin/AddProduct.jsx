import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkox, Radio, Select } from 'antd';


const AddProduct = (props) => {



    const { Option } = Select;

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    let navigate = useNavigate();

    const submit = (data) => {
        console.log(data)
        // props.onAdd(data);
        // navigate("/product", { replace: true });
    };


    const AddProductForm = () => {
        return (
            <form onSubmit={handleSubmit(submit)}>
                <input type="text"
                    placeholder="Ten san pham"
                    {...register("name")} />
                {errors.name && <p>Field is required</p>}
                <br />
                <input type="number"
                    palcehoder="gia san pham"
                    {...register("price")} />
                <br />
                <select {...register("category")}>
                    <option value="1">Hang loai 1</option>
                    <option value="2">Hang loai 2</option>
                    <option value="3">Hang loai 3</option>
                </select>
                <br />
                <textarea placeholder="mota" {...register("detail")} />
                <br />
                <button>Them san pham</button>
            </form>

        );
    };

    

    const onFinish = (e) =>{
        console.log(e);
        // props.onAdd(e);
    }

    const ProductCRUDForm = () => {
        return (
            <Form
                name="productCRUD"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input product name!' }]}
                >
                    <Input placeholder="Enter product name" {...register("name")}/>
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                        { required: true, message: 'Please input product price!' },
                        {min : 0, message:"Gia phai la so duong"}

                    ]}
                >
                    <Input placeholder="Enter price of product"/>
                </Form.Item>
                <Form.Item label="Popukar" name="popular">
                    <Radio.Group>
                        <Radio.Button value={true}>Yes</Radio.Button>
                        <Radio.Button value={false}>No</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Model" name="modelId"
                    rules={[{ required: true, message: 'Please input product name!' }]}
                >
                    <Select  placeholder="Choose a model">
                        {props.models.map( (item,index) =>{
                            return(
                            <Option value={item.id} key={index}>{item.name}</Option>
                            )
                        })}
                    </Select>
                </Form.Item>
                <Form.Item label="Rom" name ="rom">
                    <Select placeholder="Choose rom option">
                        <Option value="32">32GB</Option>
                        <Option value="64">64GB</Option>
                        <Option value="128">128GB</Option>
                        <Option value="256">256GB</Option>
                        <Option value="512">512GB</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Image Link" name="img">
                    <Input placeholder="Enter image link"/>
                </Form.Item>
                <Form.Item label="Note" name="detail">
                    <Input.TextArea rows={4}  placeholder="Detail about product"/>
                </Form.Item>
                <Form.Item>
                    <Button  htmlType='submit' type='primary'>ADD PRODUCT</Button>
                </Form.Item>
            </Form>
        );
    }

    return <div>{ProductCRUDForm()}</div>;


};

export default AddProduct;