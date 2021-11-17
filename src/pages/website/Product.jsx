import {Link} from 'react-router-dom';



const ProductsWebsite = ({products, onRemove}) => {
    return (
        <div>
            {products && 
                products.map((item, index) => {
                    return (
                        <div key={index}>
                            <h4>
                                <Link to={`${item.id}`}>{item.name}</Link> 
                            </h4>
                        </div>
                    );
                })};
        </div>
    )
};

export default ProductsWebsite;