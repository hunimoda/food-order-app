import React, { useState, useContext } from "react";
import { Cart } from "../../contexts/cart";
import useHttp from "../../hooks/useHttp";
import useEffectSkipMount from "../../hooks/useEffectSkipMount";

import Modal from "../UI/Modal/Modal";
import OrderList from "./OrderList/OrderList";
import TotalPriceContainer from "./TotalPriceContainer/TotalPriceContainer";
import OrderForm from "./OrderForm/OrderForm";
import OrderFooter from "./OrderFooter/OrderFooter";
import Card from "../UI/Card/Card";
import Alert from "../Alert/Alert";

import classes from "./Order.module.css";

const Order = (props) => {
	const cart = useContext(Cart);

	const { response, sendHttpRequest, isLoading: isOrdering } = useHttp();
	const [showSuccessfulOrder, setShowSuccessfulOrder] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [showCheckoutForm, setShowCheckoutForm] = useState(false);

	const orderCartHandler = () => {
		setShowCheckoutForm(true);
	};

	const cancelCheckoutHandler = () => {
		setShowCheckoutForm(false);
	};

	const confirmCheckoutHandler = (client) => {
		const order = {};
		cart.items.forEach((item) => {
			order[item.id] = item.amount;
		});
		sendHttpRequest(
			"https://react-http-33900-default-rtdb.firebaseio.com/orders.json",
			{ client, order }
		);
	};
	useEffectSkipMount(() => {
		if (!response.hasError) {
			setShowCheckoutForm(false);
			setShowSuccessfulOrder(true);
			cart.reset();
		} else {
			setHasError(true);
		}
	}, [response]);

	if (isOrdering) {
		return (
			<Modal>
				<i className={`fas fa-spinner ${classes.loadingSpinner}`} />
			</Modal>
		);
	}

	if (showSuccessfulOrder) {
		return (
			<Alert
				onConfirm={() => {
					setShowSuccessfulOrder(false);
					props.onClose();
				}}
			>
				Order was successful!
			</Alert>
		);
	}

	if (hasError) {
		return (
			<Alert
				onConfirm={() => {
					setHasError(false);
				}}
			>
				Something went wrong!
			</Alert>
		);
	}

	return (
		<Modal show={props.show}>
			<Card className={classes.orderModal}>
				<main>
					<OrderList isCheckoutMode={showCheckoutForm} />
					<TotalPriceContainer />
					{showCheckoutForm && (
						<OrderForm
							onCancel={cancelCheckoutHandler}
							onConfirm={confirmCheckoutHandler}
						/>
					)}
				</main>
				{!showCheckoutForm && (
					<OrderFooter onClose={props.onClose} onOrder={orderCartHandler} />
				)}
			</Card>
		</Modal>
	);
};

export default Order;
