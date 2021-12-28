import { useContext, useState, useEffect, Fragment } from "react";
import { Cart as CartContext } from "../../../contexts/cart";

import Button from "../../UI/Button/Button";
import Alert from "../../Alert/Alert";
import Order from "../../Order/Order";
import classes from "./Cart.module.css";

const Cart = () => {
	const cart = useContext(CartContext);
	const [showAlert, setShowAlert] = useState(false);
	const [showCart, setShowCart] = useState(false);
	const [shouldButtonJerk, setShouldButtonJerk] = useState(false);

	const totalAmountOfItems = cart.items.reduce((previousSum, item) => {
		return previousSum + item.amount;
	}, 0);

	const openCartHandler = () => {
		if (cart.items.length === 0) {
			setShowAlert(true);
		} else {
			setShowCart(true);
		}
	};

	useEffect(() => {
		if (totalAmountOfItems === 0) {
			return;
		}
		setShouldButtonJerk(true);
		setTimeout(() => {
			setShouldButtonJerk(false);
		}, 500);
	}, [totalAmountOfItems]);

	const buttonClasses = `${classes["cart-btn"]} ${
		shouldButtonJerk && classes["jerk"]
	}`;

	const cartEmptyAlert = showAlert && (
		<Alert
			show={showAlert}
			onConfirm={() => {
				setShowAlert(false);
			}}
		>
			Your cart is empty!
		</Alert>
	);

	const orderCart = showCart && (
		<Order
			show={showCart}
			onClose={() => {
				setShowCart(false);
			}}
		/>
	);

	return (
		<Fragment>
			<Button className={buttonClasses} onClick={openCartHandler}>
				<i className="fas fa-shopping-cart" />
				<div className={classes["cart-btn__text"]}>Your Cart</div>
				<div className={classes["cart-btn__count"]}>{totalAmountOfItems}</div>
			</Button>
			{cartEmptyAlert}
			{orderCart}
		</Fragment>
	);
};

export default Cart;
