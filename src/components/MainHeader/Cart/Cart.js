import { useContext } from "react";
import { Cart as CartContext } from "../../../contexts/cart";

import Button from "../../UI/Button/Button";
import classes from "./Cart.module.css";

const Cart = () => {
	const cart = useContext(CartContext);

	const clickHandler = () => {
		if (cart.items.length === 0) {
			// cart.setAlert({ content: "Your cart is empty!", show: true });
			console.log("Show an alert that the cart is empty");
		} else {
			// cart.setShowCart(true);
			console.log("Show the cart/order modal");
		}
	};

	return (
		<Button className={classes["cart-btn"]} onClick={clickHandler}>
			<i className="fas fa-shopping-cart"></i>
			<div className={classes["cart-btn__text"]}>Your Cart</div>
			<div className={classes["cart-btn__count"]}>{cart.items.length}</div>
		</Button>
	);
};

export default Cart;
