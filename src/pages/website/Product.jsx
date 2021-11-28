import { Link } from 'react-router-dom';



const ProductsWebsite = ({ products, categories}) => {

    return (
        <div className="row">
            <div className="col l-4">
                <div className="col">
                    CATEGORIES
                </div>
                {categories.map( (item, index) => {
                    return (
                        <div className="col" key={index}>
                            {item.name}
                        </div>
                    );
                })}
            </div>
            <div className="col l-8">
                <div className="row">
                    {products.map((item, index) => {
                        return (
                            <div className="col l-2-4 c-6" key={index}>
                                {/* <!-- product-item --> */}
                                <Link to={`${item.id}`} className="home-product-item">
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
                    })}
                </div>
            </div>
        </div>
    )
};

export default ProductsWebsite;