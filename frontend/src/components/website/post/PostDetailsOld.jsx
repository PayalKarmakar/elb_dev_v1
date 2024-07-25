import React, { useState, useEffect } from "react";
import customFetch from "../../../utils/customFetch";
import { nanoid } from "nanoid";
import { FaRegHeart } from "react-icons/fa";

const PostDetails = ({ postSlug }) => {
  let id = postSlug.postId;

  const [product, setProduct] = useState(null); // State to store product data

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await customFetch.get(`/website/post/${id}`);
        setProduct(response.data.data.rows[0]); // Assuming your API response structure
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]); // Fetch data whenever id changes

  if (!product) {
    return <div>Loading...</div>; // Show loading message until data is fetched
  }
  // console.log(product.image);

  return (
    <div className="container my-6">
      <div className="row">
        <div className="col-md-6">
          {/* Product Images Carousel (Placeholder) */}
          <div
            id="product-images-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner my-5">
              <div className="carousel-item active">
                <button className="service-card-wishlist-btn">
                  <FaRegHeart />
                </button>
                <div className="row">
                  {product.image.map((images) => {
                    if (images.is_cover) {
                      return (
                        <img
                          key={nanoid()}
                          src={`${import.meta.env.VITE_BASE_URL}/${
                            images.image_path
                          }`}
                          className="d-block w-80"
                          style={{ maxWidth: "80%" }}
                          alt="Product Image 1"
                        />
                      );
                    }
                  })}
                </div>
                <div className="row">
                  {product.image.map((images) => {
                    if (!images.is_cover) {
                      return (
                        <img
                          key={nanoid()}
                          src={`${import.meta.env.VITE_BASE_URL}/${
                            images.image_path
                          }`}
                          className="d-block w-20 h-20"
                          style={{ maxWidth: "20%" }}
                          alt="Product Image 1"
                        />
                      );
                    }
                  })}
                </div>
              </div>
              {/* Add more carousel items as needed */}
            </div>
            {/* <a
              className="carousel-control-prev"
              href="#product-images-carousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#product-images-carousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a> */}
          </div>
        </div>
        <div className="col-md-6">
          {/* Product Info */}
          <div className="product-info">
            <h1 className="my-4">{product.title}</h1>
            <p className="h3">{product.price}</p>
            <p>Sold by: {product.seller}</p>
            <hr />
            <h3>Product Details</h3>
            <p>{product.description}</p>
            <ul></ul>
            <hr />
            {/* Action Buttons (Placeholder) */}
            <div className="mb-3">
              <button className="btn btn-outline-primary mr-2">
                Add to cart
              </button>
              <button className="btn btn-primary">Buy Now</button>
            </div>
            {/* Reviews */}
            <div className="reviews">
              <h3>Customer Reviews</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
