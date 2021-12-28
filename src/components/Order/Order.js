import React, { useState, Fragment, useContext } from "react";
import { Cart } from "../../contexts/cart";
import useHttp from "../../hooks/useHttp";
import useEffectSkipMount from "../../hooks/useEffectSkipMount";

import Modal from "../UI/Modal/Modal";
import OrderList from "./OrderList/OrderList";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Alert from "../Alert/Alert";

import classes from "./Order.module.css";

const Order = (props) => {
	const cart = useContext(Cart);

	const { response, sendHttpRequest, isLoading } = useHttp();
	const [showSuccessfulOrder, setShowSuccessfulOrder] = useState(false);

	const isCartEmpty = cart.items.length === 0;
	const totalPrice = !isCartEmpty
		? cart.items
				.map((item) => item.price * item.amount)
				.reduce((previous, current) => previous + current, 0)
				.toFixed(2)
		: null;

	const orderCartHandler = () => {
		const order = {};
		cart.items.forEach((item) => {
			order[item.id] = item.amount;
		});
		sendHttpRequest(
			"https://react-http-33900-default-rtdb.firebaseio.com/orders.json",
			order
		);
	};
	useEffectSkipMount(() => {
		if (!response.hasError) {
			setShowSuccessfulOrder(true);
		} else {
			//
		}
	}, [response]);

	return (
		<Fragment>
			<Modal show={props.show && !isLoading && !showSuccessfulOrder}>
				<Card className={classes.orderModal}>
					<main>
						<OrderList />
						{!isCartEmpty && (
							<div className={classes.totalPriceContainer}>
								<h3>Total Price</h3>
								<h3>${totalPrice}</h3>
							</div>
						)}
					</main>
					<footer className={classes.buttonContainer}>
						<Button onClick={props.onClose} className={classes.transparentBtn}>
							Close
						</Button>
						{!isCartEmpty && (
							<Button
								onClick={orderCartHandler}
								className={`${classes.filledBtn} ${classes.rightmostBtn}`}
							>
								Order
							</Button>
						)}
					</footer>
				</Card>
			</Modal>
			<Modal show={isLoading}>
				<p>Wait...</p>
			</Modal>
			<Alert
				show={showSuccessfulOrder}
				onConfirm={() => {
					setShowSuccessfulOrder(false);
					props.onClose();
				}}
			>
				Order was successful!
			</Alert>
		</Fragment>
	);
};

export default Order;
