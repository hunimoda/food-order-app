import { useContext } from "react";
import CartContext from "../../../contexts/cart";

import Button from "../../UI/Button/Button";
import classes from "./Cart.module.css";

const Cart = () => {
	const ctx = useContext(CartContext);

	const clickHandler = () => {
		ctx.cart.forEach((item) => console.log(item));
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
