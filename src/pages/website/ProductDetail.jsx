import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { read } from "../../api/productAPI";

const ProductDetail = (props) => {
    const imgdetal ={
        "width":"100%",
        "height":"100%"
    }
    // lay id tu url
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        read(id).then((response) =>{
            setProduct(response.data);
        });
    }, [id]);
    return (
        product &&(
            <div className="row">
                <div className="col l-4">
                    <img style={imgdetal} src={product.img} alt={product.name} />
                </div>
                <div className="col l-8">
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>

                
            </div>
        )
        
    )
}

export default ProductDetail;