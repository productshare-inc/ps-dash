// @ts-ignore
import { load } from "@cashfreepayments/cashfree-js";
import { Button } from "../../../atoms/shadcn/button";
import { useState } from "react";

export const Checkout = () => {

    // Function to handle the "Buy Now" button click
    const handleBuyNow = async () => {
    try {
      const response = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_id: `order_${new Date().getTime()}`,
          order_amount: 50,
          customer_id: `cust_${new Date().getTime()}`,
          customer_phone: "9999999999", // Sample phone number
        }),
      });
  
      const data = await response.json();
      if (!data.success) {
        alert("Failed to initiate payment. Please try again.");
        return;
      }
  
      // Store payment session ID and initiate payment
      initiatePayment(data.data.payment_session_id);
    } catch (error) {
      console.error("Network Error:", error);
    }
  };
    let cashfree:any;
   const initializeSDK = async function () {          
        cashfree = await load({
            mode: "production"
        });
        return cashfree;
    }

    const initiatePayment = async (sessionId:string) => {
        const cashfree = await initializeSDK();
        let checkoutOptions = {
            paymentSessionId: sessionId,
            redirectTarget: "_self",
        };
        console.log("Starting checkout with options:", checkoutOptions);
        cashfree.checkout(checkoutOptions);
    };

    return (
        <div className="row">
            <p>Click below to open the checkout page in current tab</p>
            <Button type="submit"  id="renderBtn" onClick={handleBuyNow}>
                Trial Payment
            </Button>
        </div>
    );
}
export default Checkout;