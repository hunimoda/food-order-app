import { useContext } from "react";

import { Cart } from "../../../contexts/cart";
import Button from "../../UI/Button/Button";

import classes from "./OrderFooter.module.css";

const OrderFooter = (props) => {
	const cart = useContext(Cart);
	const isCartEmpty = cart.items.length === 0;

	return (
		<footer className={classes.buttonContainer}>
			<Button onClick={props.onClose} className={classes.transparentBtn}>
				Close
			</Button>
			{!isCartEmpty && (
				<Button
					onClick={props.onOrder}
					className={`${classes.filledBtn} ${classes.rightmostBtn}`}
				>
					Order
				</Button>
			)}
		</footer>
	);
};

export default OrderFooter;
