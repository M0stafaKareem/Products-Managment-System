import { Product } from "../ProductCard.component";
import "./ProductDetails.css";
import { useState, MouseEvent } from "react";
interface ProductDetailsInterface {
  productData: Product;
}

const ProductDetails: React.FC<ProductDetailsInterface> = ({ productData }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [mainPhoto, setMainPhoto] = useState<string>(productData.images[0]);

  const quantityChangeHandler = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (event.currentTarget.innerText === "+") {
      setQuantity((quantity) => quantity + 1);
    } else {
      setQuantity((quantity) => (quantity > 1 ? quantity - 1 : quantity));
    }
  };

  const changePhotoHandler = (photo: string) => {
    setMainPhoto(photo);
  };

  return (
    <section className="porductOverview">
      <div className="currDirectory">
        <p>Products</p>
        <i className="bx bx-chevron-right"></i>
        <p>{productData.category}</p>
        <i className="bx bx-chevron-right"></i>
        <p>{productData.name}</p>
      </div>
      <div className="productEssintials">
        <div className="productImages">
          <aside>
            {productData.images.map((image) => {
              return (
                <button
                  key={image}
                  onClick={() => {
                    changePhotoHandler(image);
                  }}
                >
                  <img src={image} alt="Product Image" />
                </button>
              );
            })}
          </aside>
          <div className="mainImageContainer">
            <img className="mainImage" src={mainPhoto} alt="" />
          </div>
        </div>
        <div className="productInfo">
          <div>
            <h2 className="productName">{productData.name}</h2>
            <h2 className="price">$ {productData.price}</h2>
            <h3 className="description">{productData.description}</h3>
          </div>
          <form className="numberOfItems">
            <div className="quantity">
              <button className="op" onClick={quantityChangeHandler}>
                -
              </button>
              <div className="qun">{quantity}</div>
              <button className="op" onClick={quantityChangeHandler}>
                +
              </button>
            </div>
            <button className="addBtn">Add to Cart</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
