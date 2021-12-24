import { useContext } from "react";

import { Cart } from "../../../contexts/cart";
import OrderItem from "./OrderItem/OrderItem";

const OrderList = () => {
	const cart = useContext(Cart);

	return (
		<ul>
			{cart.items.map((item) => (
				<OrderItem key={item.id} item={item} />
			))}
		</ul>
	);
};

export default OrderList;
