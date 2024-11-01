"use client"

import "./globals.css";
import Header from "./components/Header";
import HeaderTop from "./components/HeaderTop";
import FreeColumn from "./components/FreeColumn";
import FeatureImage from "./components/FeatureImage";
import FeatureText from "./components/FeatureText";

export default function Page() {
    let checkoutQuantity = 0;  
  
    // Function to handle checkout quantity update
    const updateCheckoutQuantity = (quantity: number): void => {
      checkoutQuantity = quantity;  // Update checkout quantity directly (no useState)
      document.getElementById("checkoutQuantityDisplay")!.textContent = String(quantity);  // Update the header directly
    };

    return (
    <div className="container">
        <Header/>
        <HeaderTop/>
        <FreeColumn/>
        <FeatureImage/>
        <FeatureText updateCheckoutQuantity={updateCheckoutQuantity}/>
      </div>
    )
}
