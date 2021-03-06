import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StripeCheckoutButton = ({ price }) => {
  const paymentSuccess = () => {
    toast.success("Payment successfull!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H6a3jJWQAosoFKzA1zUWW43iBBCVxKfU0odyw1ktAzyrwnozBDM7zYr3VDDAYsYUIhIcV7CkMwy86m7yDrgL53700mes2jZbB";
  const onToken = () => {
    paymentSuccess();
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Intelligent Farm"
      billingAddress
      shippingAddress
      description={`Your total ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
