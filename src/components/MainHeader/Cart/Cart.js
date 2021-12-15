import { useContext } from "react";
import CartContext from "../../../contexts/cart";

import Button from "../../UI/Button/Button";
import classes from "./Cart.module.css";

const Cart = () => {
	const ctx = useContext(CartContext);

	const clickHandler = () => {
		if (ctx.cart.length === 0) {
			ctx.setAlert({ content: "Your cart is empty!", show: true });
		} else {
			ctx.setShowCart(true);
		}
	};

	return (
		<Button className={classes["cart-btn"]} onClick={clickHandler}>
			<i className="fas fa-shopping-cart"></i>
			<div className={classes["cart-btn__text"]}>Your Cart</div>
			<div className={classes["cart-btn__count"]}>{ctx.cart.length}</div>
		</Button>
	);
};

export default Cart;
