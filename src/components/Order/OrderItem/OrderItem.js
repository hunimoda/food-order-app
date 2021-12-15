import { useContext } from "react";
import CartContext from "../../../contexts/cart";

import classes from "./OrderItem.module.css";

const OrderItem = (props) => {
	const ctx = useContext(CartContext);

	const decreaseAmount = () => {
		ctx.setCart((prevCart) => {
			const newCart = prevCart.map((item) => {
				const newItem = { ...item };
				if (item.id === props.id) {
					newItem.amount = String(+newItem.amount - 1);
				}
				return newItem;
			});
			return newCart;
		});
	};
	const increaseAmount = () => {
		ctx.setCart((prevCart) => {
			const newCart = prevCart.map((item) => {
				const newItem = { ...item };
				if (item.id === props.id) {
					newItem.amount = String(+newItem.amount + 1);
				}
				return newItem;
			});
			return newCart;
		});
	};

	return (
		<li className={classes["order-item"]}>
			<div className={classes["order-item__info"]}>
				<h4>{props.name}</h4>
				<div>
					<h5 className={classes["order-item__price"]}>
						${props.price}
					</h5>
					<div className={classes["order-item__count"]}>
						x {props.amount}
					</div>
				</div>
			</div>
			<div className={classes.control}>
				<button onClick={decreaseAmount}>
					<i className="fas fa-minus"></i>
				</button>
				<button onClick={increaseAmount}>
					<i className="fas fa-plus"></i>
				</button>
			</div>
		</li>
	);
};

export default OrderItem;
