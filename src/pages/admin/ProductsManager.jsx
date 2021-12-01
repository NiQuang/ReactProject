import { Link } from 'react-router-dom';
import { Table, Tag, Space, Image } from 'antd';
import { useEffect, useState } from 'react';
import { inMemoryPersistence } from '@firebase/auth';
const ProductManager = ({ products, onRemove, models }) => {
    const dataProducts = products;
    const { Column, ColumnGroup } = Table;
    const data = products;
    
    const getModelName = (id) => {
        const model=models.find((item) =>{
            return item.id === id;
        });
        return model?.name;
    }

    return (

        <Table dataSource={data} rowKey="id" bordered>
            <Column title="Name" dataIndex="name" key ="name" />
            <Column title="img" dataIndex="img" key="img" 
                    render={(text, record) => (
                        <img src={record.img} alt={record.name} className="prd__manage-img"/>
                    )}
            />
            <Column title="Model" dataIndex="modelId" key="modelId" 
                render={(text, record) =>(
                    <p>{getModelName(record.modelId)}</p>
                )
                }
            />
            <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                        <Link to={`${record.id}/edit`}>Edit</Link>
                        <button onClick={() => onRemove(record.id)}>Remove</button>
                    </Space>
                )}
            />
        </Table>
        // <table>
        //     <tbody>
        //         {
        //             products ? (products.map((item, index) => {
        //                 return (
        //                     <tr key={index}>
        //                         <td>
        //                             <h4>
        //                                 {item.name}
        //                                 <button onClick={() => onRemove(item.id)}>Remove</button>
        //                                 <Link to={`${item.id}/edit`}>Edit</Link>
        //                             </h4>
        //                         </td>
        //                     </tr>
        //                 );
        //             })) : null
        //         }
        //         {/* {products && 

        //         }; */}
        //     </tbody>
        // </table>
    );
};

export default ProductManager;

