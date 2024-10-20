import React from "react";
import { Review } from "../ProductCard.component";
import "./ProductReviews.css";
interface ProductReviewsInterface {
  reviews: Review[];
}
const ProductReviews: React.FC<ProductReviewsInterface> = ({ reviews }) => {
  return (
    <div className="reviews">
      {reviews.map((rev, index) => (
        <div key={index} className="review">
          <div className="reviewer">
            <h2 className="reviewerName">{rev.reviewerName}</h2>
            <div className="rating">
              {[5, 4, 3, 2, 1].map((item) => (
                <React.Fragment key={item}>
                  <input
                    value={item}
                    name={`star-${rev.comment}`}
                    id={`star${item}-${rev.comment}`}
                    type="radio"
                    disabled
                    checked={rev.rating === item}
                  />
                  <label htmlFor={`star${item}-${rev.comment}`}></label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <p className="comment">{rev.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;
