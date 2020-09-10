import React from "react";
import "./checkout-page.scss";
import { connect } from "react-redux";
import { selectCartItems, selectTotal } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="head">
          <span>Product</span>
        </div>
        <div className="head">
          <span>Description</span>
        </div>
        <div className="head">
          <span>Quantity</span>
        </div>
        <div className="head">
          <span>Price</span>
        </div>
        <div className="head">Remove</div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>Total: ${total}</span>
      </div>
      <StripeCheckoutButton id price={total} />
      {/* 4000056655665556	 test credit card, cvc any number, exp date any future date */}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
