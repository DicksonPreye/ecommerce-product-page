"use client"

import React from "react";
import { useState } from "react";

// Define the props interface to specify the type for updateCheckoutQuantity
interface FeatureTextProps {
  updateCheckoutQuantity: (quantity: number) => void;
}

export default function FeatureText({ updateCheckoutQuantity }: FeatureTextProps) {
  const [quantity, setQuantity] = useState(0);

  // Increment quantity
  const handleAdd = () => {
    setQuantity((prev) =>  prev + 1);
  };

  // Decrement quantity
  const handleMinus = () => {
    setQuantity((prev) =>  (prev > 0 ? prev - 1 : 0
    ));
  };

  // Handle "Add to Cart" click
  const handleAddToCart = (): void => {
    updateCheckoutQuantity(quantity);  // Update the header with the current quantity
  };

  return (

    <section className="feature_text">
      <p className="feature_text-header">sneaker company</p>
      <h1 className="feature_text-edition">
        Fall Limited Edition <br /> Sneakers
      </h1>
      <p className="feature_text-story">
        These low-profile sneakers are your perfect casual wear <br />{" "}
        companion. Featuring a durable rubber outer sole, they’ll <br />{" "}
        withstand everything the weather can offer.
      </p>
      <div className="feature_text-price_list">
        <p className="feature_text-price_list-main">$125.00</p>
        <p className="feature_text-price_list-off">50%</p>
      </div>
      <div className="feature_text-slashed_price">$250.00</div>

      <div className="feature_text-checkout">
        <div className="feature_text-checkout_number">
          <button aria-label="Decrease quantity" className="feature_text-checkout_number-icon_minus" onClick={handleMinus}>
            <svg
              width="12"
              height="4"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                />
              </defs>
              <use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#a" />
            </svg>
          </button>
          {quantity}
          <button aria-label="Increase quantity" className="feature_text-checkout_number-icon_add" onClick={handleAdd}>
            <svg
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                  id="b"
                />
              </defs>
              <use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#b" />
            </svg>
          </button>
        </div>

        <button className="btn_cart" onClick={handleAddToCart}>
          <div className="btn_cart-icon">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fill-rule="nonzero"
              />
            </svg>
          </div> 
          Add to cart
        </button>
      </div> 
    </section>  
    
  );
}


