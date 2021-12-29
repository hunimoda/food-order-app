import { useContext } from "react";

import { Cart } from "../../../contexts/cart";
import OrderItem from "./OrderItem/OrderItem";
import classes from "./OrderList.module.css";

const OrderList = (props) => {
	const cart = useContext(Cart);

	if (cart.items.length === 0) {
		return <p className={classes["empty-text"]}>Your cart is empty now.</p>;
	}

	return (
		<ul>
			{cart.items.map((item) => (
				<OrderItem
					key={item.id}
					item={item}
					isCheckoutMode={props.isCheckoutMode}
				/>
			))}
		</ul>
	);
};

export default OrderList;
