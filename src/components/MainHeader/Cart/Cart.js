import { useContext, useState, useEffect, Fragment } from "react";
import { Cart as CartContext } from "../../../contexts/cart";

import Button from "../../UI/Button/Button";
import Alert from "../../Alert/Alert";
import Order from "../../Order/Order";
import classes from "./Cart.module.css";

const Cart = () => {
	const cart = useContext(CartContext);

	const [showEmptyCartAlert, setShowEmptyCartAlert] = useState(false);
	const [showCartModal, setShowCartModal] = useState(false);
	const [shouldCartButtonJerk, setShouldCartButtonJerk] = useState(false);

	const totalAmountOfItems = cart.items.reduce((previousSum, item) => {
		return previousSum + item.amount;
	}, 0);

	useEffect(() => {
		if (totalAmountOfItems === 0) {
			return;
		}
		setShouldCartButtonJerk(true);
		setTimeout(() => {
			setShouldCartButtonJerk(false);
		}, 500);
	}, [totalAmountOfItems]);

	const openCartHandler = () => {
		if (totalAmountOfItems === 0) {
			setShowEmptyCartAlert(true);
		} else {
			setShowCartModal(true);
		}
	};

	const cartEmptyAlert = (
		<Alert
			show={showEmptyCartAlert}
			onConfirm={() => {
				setShowEmptyCartAlert(false);
			}}
		>
			Your cart is empty!
		</Alert>
	);

	const orderCart = (
		<Order
			show={showCartModal}
			onClose={() => {
				setShowCartModal(false);
			}}
		/>
	);

	const buttonClasses = `${classes["cart-btn"]} ${
		shouldCartButtonJerk && classes["jerk"]
	}`;

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
