import React, { useState, useContext } from "react";
import { Cart } from "../../contexts/cart";
import useHttp from "../../hooks/useHttp";
import useEffectSkipMount from "../../hooks/useEffectSkipMount";

import Modal from "../UI/Modal/Modal";
import OrderList from "./OrderList/OrderList";
import TotalPriceContainer from "./TotalPriceContainer/TotalPriceContainer";
import OrderFooter from "./OrderFooter/OrderFooter";
import Card from "../UI/Card/Card";
import Alert from "../Alert/Alert";

import classes from "./Order.module.css";

const Order = (props) => {
	const cart = useContext(Cart);

	const { response, sendHttpRequest, isLoading } = useHttp();
	const [showSuccessfulOrder, setShowSuccessfulOrder] = useState(false);

	const isCartEmpty = cart.items.length === 0;

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

	if (isLoading) {
		return (
			<Modal show={isLoading}>
				<p>Wait...</p>
			</Modal>
		);
	}

	if (showSuccessfulOrder) {
		return (
			<Alert
				show={showSuccessfulOrder}
				onConfirm={() => {
					setShowSuccessfulOrder(false);
					props.onClose();
				}}
			>
				Order was successful!
			</Alert>
		);
	}

	return (
		<Modal show={props.show}>
			<Card className={classes.orderModal}>
				<main>
					<OrderList />
					{!isCartEmpty && <TotalPriceContainer />}
				</main>
				<OrderFooter onClose={props.onClose} onOrder={orderCartHandler} />
			</Card>
		</Modal>
	);
};

export default Order;
