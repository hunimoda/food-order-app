import { useContext } from "react";
import { Cart } from "../../../../contexts/cart";

import classes from "./OrderItem.module.css";

const OrderItem = (props) => {
	const item = props.item;

	const cart = useContext(Cart);

	const decreaseAmountHandler = () => {
		cart.reduce(item.id);
	};
	const increaseAmountHandler = () => {
		cart.add(item, 1);
	};

	return (
		<li className={classes["order-item"]}>
			<div className={classes["order-item__info"]}>
				<h4>{item.name}</h4>
				<div>
					<h5 className={classes["order-item__price"]}>
						${item.price.toFixed(2)}
					</h5>
					<div className={classes["order-item__count"]}>x {item.amount}</div>
				</div>
			</div>
			{!props.isCheckoutMode && (
				<div className={classes.control}>
					<button onClick={decreaseAmountHandler}>
						<i className="fas fa-minus" />
					</button>
					<button onClick={increaseAmountHandler}>
						<i className="fas fa-plus" />
					</button>
				</div>
			)}
		</li>
	);
};

export default OrderItem;
