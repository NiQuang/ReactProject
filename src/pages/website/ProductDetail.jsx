import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { read } from "../../api/productAPI";

const ProductDetail = (props) => {
    // lay id tu url
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        read(id).then((response) =>{
            setProduct(response.data);
        });
    }, [id]);
    return (
        product &&
        <div>
            <h2>{product.name}</h2>
            <img src={product.img} alt={product.name} />
        </div>
    )
}

export default ProductDetail;