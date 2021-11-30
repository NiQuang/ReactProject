import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { read } from "../../api/productAPI";

const ProductDetail = ({products}) => {
    const imgSize = 'https://bizweb.dktcdn.net/100/140/774/files/79148.png?v=1507729359345';
    const imgdetal = {
        "width": "100%",
        "height": "100%"
    }
    //popular list 

    const [popularList, setPopularList] = useState([]);
    useEffect(() =>{
        setPopularList(products.filter((item, index) =>{
            return item.isInfluence;
        }));
    },[]);
    // lay id tu url
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        read(id).then((response) => {
            setProduct(response.data);
        });
    }, [id]);

    return (
        product && (
            <div className="row">
                <div className="row">
                    <div className="col l-4">
                        <img style={imgdetal} src={product.img} alt={product.name} />
                    </div>
                    <div className="col l-8">
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <p>{product.detail}</p>
                    </div>
                </div>
                <div className="row">
                    <h2>San pham noi bat</h2>
                        {(popularList) ? (
                            popularList.map((item, index) =>{
                                return (
                                    <div className="col l-2-4 c-6" key={index}>
                                        {/* <!-- product-item --> */}
                                        <Link to={`/product/${item.id}`} className="home-product-item">
                                            <div className="home-product-item__img">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                            <h4 className="home-product-item__name">
                                                {item.name}
                                            </h4>
                                            <div className="home-product-item__price">
                                                <span className="home-product-item__price-old">
                                                    {item.price}
                                                </span>
                                                <span className="home-product-item__price-curent">
                                                    {item.price}
                                                </span>
                                            </div>
                                            <div className="home-product-item__action">
                                                <span className="home-product-item__like home-product-item__like--liked">
                                                    <i className="home-product-item__like-icon-yes fas fa-heart"></i>
                                                    <i className="home-product-item__like-icon-no far fa-heart"></i>
                                                </span>
                                                <div className="home-product-item__rating">
                                                    <i className="home-product-item__star-gold fas fa-star"></i>
                                                    <i className="home-product-item__star-gold fas fa-star"></i>
                                                    <i className="home-product-item__star-gold fas fa-star"></i>
                                                    <i className="home-product-item__star-gold fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <span className="home-product-item__sold">88 Đã bán</span>
                                            </div>
                                            <div className="home-product-item__origin">
                                                <span className="home-product-item__brand">Whoo</span>
                                                <span className="home-product-item__origin-name">Nhật bản</span>
                                            </div>
                                            <div className="home-product-item__favorite">
                                                <i className="fas fa-check"></i>
                                                <span>Yêu thích</span>
                                            </div>
                                            <div className="home-product-item__sale-off">
                                                <span className="home-product-item__sale-off-percent">10%</span>
                                                <span className="home-product-item__sale-off-label">GIẢM</span>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })
                        ) : null}
                    </div>
                </div>
        )

    )
}

export default ProductDetail;