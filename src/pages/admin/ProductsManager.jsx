import { Link } from 'react-router-dom';
import { Table, Tag, Space, Image } from 'antd';
import { useEffect, useState } from 'react';
const ProductManager = ({ products, onRemove }) => {
    const dataProducts = products;
    const { Column, ColumnGroup } = Table;
    const data = products;
    return (

        <Table dataSource={data} rowKey="id">
            <Column title="Index" dateIndex="index" key="index" 
                
            />
            <Column title="Name" dataIndex="name" key ="name" />
            <Column title="img" dataIndex="img" key="img" 
                    render={(text, record) => (
                        <img src={record.img} alt={record.name} className="prd__manage-img"/>
                    )}
            />
            <Column title="Categoty" dataIndex="categotyId" key="category" />
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