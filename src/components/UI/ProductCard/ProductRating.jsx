"use client";

import ReactStars from "react-rating-stars-component";

const ProductRating = ({ rating }) => {
  return (
    <>
      <ReactStars
        count={5}
        value={rating}
        size={20}
        isHalf={true}
        edit={false}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#fd3d57"
      />
    </>
  );
};

export default ProductRating;
