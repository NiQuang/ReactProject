import { Link } from 'react-router-dom';

const ProductManager = ({products, onRemove}) => {
    return (
        <table>
            <tbody>
                {products && 
                    products.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <h4>
                                        {item.name}
                                        <button onClick={() => onRemove(item.id)}>Remove</button>
                                        <Link to={`${item.id}/edit`}>Edit</Link>
                                    </h4>
                                </td>
                            </tr>
                        );
                    })
                };
            </tbody>
        </table>
    );
};

export default ProductManager;