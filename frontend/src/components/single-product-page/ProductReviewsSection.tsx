import "./ProductReviewsSection.css";
import React, { useState } from "react";
import NewReviewForm from "./NewReviewForm";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";
import { Product } from "../ProductCard.component";

interface ProductReviewsSection {
  productData: Product;
}
const ProductReviewsSection: React.FC<ProductReviewsSection> = ({
  productData,
}) => {
  const [detailsMode, setDetailsMode] = useState("description");
  const changeDetailsMode = (mode: string) => {
    setDetailsMode(mode);
  };
  return (
    <section className="productDetails">
      <nav>
        <ul>
          <li>
            <button
              id="productDesc"
              onClick={() => changeDetailsMode("description")}
            >
              Description
            </button>
          </li>
          <li>
            <button
              id="productRev"
              onClick={() => changeDetailsMode("reviews")}
            >
              Reviews
            </button>
          </li>
          <span className="revCount">{productData.reviews.length}</span>
          <li>
            <button
              id="writeNewRev"
              onClick={() => changeDetailsMode("newReview")}
            >
              Write a review
            </button>
          </li>
        </ul>
      </nav>
      <div className="productInformation">
        {(() => {
          switch (detailsMode) {
            case "description":
              return (
                <ProductDescription description={productData.description} />
              );
            case "reviews":
              return <ProductReviews reviews={productData.reviews} />;
            case "newReview":
              return <NewReviewForm />;
            default:
              return null;
          }
        })()}
      </div>
    </section>
  );
};

export default ProductReviewsSection;
