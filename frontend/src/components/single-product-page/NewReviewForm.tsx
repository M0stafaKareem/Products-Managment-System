import React, { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import "./NewReviewForm.css";
import { useAuth } from "../../context/AuthContext";

const NewReviewForm = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { id: productId } = useParams();
  const { idToken } = useAuth();

  const newReviewAPI = `http://127.0.0.1:3333/api/products/review/${productId}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch(newReviewAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        rating,
        comment,
        reviewerName: name,
        // email,
      }),
    });
  };

  return (
    <div className="newReview">
      <div className="newReviewHeading">
        <h2>Add a review</h2>
        <h3>Your email address will not be published.</h3>
        <br />
      </div>
      <div className="newRating">
        <h3>Your Rating</h3>
        <div className="rating">
          {[5, 4, 3, 2, 1].map((star) => (
            <React.Fragment key={star}>
              <input
                value={star}
                checked={rating === star}
                name="rating"
                id={`star${star}`}
                type="radio"
                onChange={() => setRating(star)}
              />
              <label htmlFor={`star${star}`}></label>
            </React.Fragment>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="reviewBody">
          <h3>Your review</h3>
          <textarea
            name="reviewerComment"
            id="reviewerComment"
            cols={40}
            rows={7}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <div className="reviewerData">
          <div className="reviewerName">
            <h3>Name</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />
          </div>
          <div className="reviewerEmail">
            <h3>Email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
        </div>
        <button type="submit" className="submitBtn">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default NewReviewForm;
