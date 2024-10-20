import { useState, useEffect } from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

export interface Review {
  id: number;
  productId: number;
  reviewerName: string;
  rating: number;
  comment: string;
}
export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  images: string[];
  reviews: Review[];
}

interface ProductItemProps {
  product: Product;
}

const ProductCard: React.FC<ProductItemProps> = ({ product }) => {
  const [imageUrl, setImageUrl] = useState("product_placeholder.png");
  const navigate = useNavigate();

  useEffect(() => {
    const checkImageUrl = async () => {
      const url = product.images[0];
      const isValid = await isValidImageUrl(url);
      setImageUrl(
        isValid
          ? url
          : "https://img.freepik.com/free-vector/coming-soon-message-illuminated-with-stage-light_1284-3612.jpg"
      );
    };

    checkImageUrl();
  }, [product.images]);

  const isValidImageUrl = (url: string) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;

      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };
  const handleNavigation = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <>
      <article
        className="card d-flex justify-content-center"
        onClick={handleNavigation}
      >
        <div className="card__name">
          <p>Browse Details</p>
        </div>
        <div className="d-flex flex-column align-items-center ">
          <div className="card__img">
            <img src={imageUrl} alt="" />
          </div>
          <div className="product_info">
            <a className="card__icon">
              <i className="bx bx-heart"></i>
            </a>

            <div>
              <p className="product-name">{product.name || "Product Name"}</p>
              <span className="product_price">${product.price || 120}</span>
            </div>
            <a className="card__icon">
              <i className="bx bxs-cart-alt"></i>
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductCard;
