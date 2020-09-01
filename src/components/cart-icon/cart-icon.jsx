import React from "react";
import "./cart-icon.scss";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="items-count">{itemsCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden),
});

const mapStateToProps = (state) => ({
  itemsCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
