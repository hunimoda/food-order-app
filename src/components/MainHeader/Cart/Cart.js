import { useContext, useState, Fragment } from "react";
import { Cart as CartContext } from "../../../contexts/cart";

import Button from "../../UI/Button/Button";
import Alert from "../../Alert/Alert";
import Order from "../../Order/Order";
import classes from "./Cart.module.css";

const Cart = () => {
	const cart = useContext(CartContext);
	const [showAlert, setShowAlert] = useState(false);
	const [showCart, setShowCart] = useState(false);

	const openCartHandler = () => {
		if (cart.items.length === 0) {
			setShowAlert(true);
		} else {
			setShowCart(true);
		}
	};

	return (
		<Fragment>
			<Button className={classes["cart-btn"]} onClick={openCartHandler}>
				<i className="fas fa-shopping-cart" />
				<div className={classes["cart-btn__text"]}>Your Cart</div>
				<div className={classes["cart-btn__count"]}>{cart.items.length}</div>
			</Button>
			<Alert
				show={showAlert}
				onConfirm={() => {
					setShowAlert(false);
				}}
			>
				Your cart is empty!
			</Alert>
			<Order show={showCart} />
		</Fragment>
	);
};

export default Cart;
