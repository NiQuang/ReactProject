import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { read } from "../../api/productAPI";
import { Form, Input, Button, Checkox, Radio, Select } from 'antd';

const EditProduct = (props) => {
    const { Option } = Select;
    const onFinish = (e) => {
        console.log(e)
    }

    let navigate = useNavigate();

    // su dung hook use Params de lay id tu tren url

    const { id } = useParams();

    const [item, setItem] = useState({});

    //call api de lay thong tin sp

    useEffect(() => {
        read(id).then((response) => {
            setItem(response.data);
        });
    }, [id]);

    // const onSubmit = (data) => {
        //sau khi submit, du lieu input dc gan vao bien data
        // day len App.js mot object bao hom id va dulieu input
    //     props.onUpdate({ id, ...data });
    // };

    // const editProductForm = () => {
    //     return (
    //         <form onSubmit={handleSubmit(onSubmit)}>

    //             <input type="text"
    //                 placeholder="Ten san pham"
    //                 {...register("name")}
    //             />
    //             {errors.name && <p>Field is required</p>}
    //             <input type="number"
    //                 palcehoder="gia san pham"
    //                 {...register("price")} />
    //             <button>Save</button>

    //         </form>
    //     );
    // };

    const updateProductForm = () => {
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
                    <Input placeholder="Enter product name" />
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                        { required: true, message: 'Please input product price!' },
                        { min: 0, message: "Gia phai la so duong" }

                    ]}
                >
                    <Input placeholder="Enter price of product" />
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
                    <Select placeholder="Choose a model">
                        {props.models.map((item, index) => {
                            return (
                                <Option value={item.id} key={index}>{item.name}</Option>
                            )
                        })}
                    </Select>
                </Form.Item>
                <Form.Item label="Rom" name="rom">
                    <Select placeholder="Choose rom option">
                        <Option value="32">32GB</Option>
                        <Option value="64">64GB</Option>
                        <Option value="128">128GB</Option>
                        <Option value="256">256GB</Option>
                        <Option value="512">512GB</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Image Link" name="img">
                    <Input placeholder="Enter image link" />
                </Form.Item>
                <Form.Item label="Note" name="detail">
                    <Input.TextArea rows={4} placeholder="Detail about product" />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit' type='primary'>ADD PRODUCT</Button>
                </Form.Item>
            </Form>
        );
    }

    return <div>{updateProductForm()}</div>
};

export default EditProduct;