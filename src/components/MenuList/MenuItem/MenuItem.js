import { useContext, useState } from "react";
import { Cart } from "../../../contexts/cart";

import Button from "../../UI/Button/Button";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
	const cart = useContext(Cart);
	const [amount, setAmount] = useState(1);

	const addCartItemHandler = (event) => {
		event.preventDefault();

		console.log("Add cart item here");
		// cart.setCart((prevCart) => {
		// 	let itemExists = false;

		// 	const newCart = prevCart.map((item) => {
		// 		const newItem = { ...item };

		// 		if (item.id === props.id) {
		// 			newItem.amount = item.amount + amount;
		// 			itemExists = true;
		// 		}
		// 		return newItem;
		// 	});

		// 	if (!itemExists) {
		// 		newCart.unshift({
		// 			id: props.id,
		// 			name: props.name,
		// 			price: props.price,
		// 			amount: amount,
		// 		});
		// 	}
		// 	return newCart;
		// });

		console.log("Show item add result as modal");
		// cart.setAlert({
		// 	content: `Added ${amount} pcs of ${props.name.toLowerCase()} to cart!`,
		// 	show: true,
		// });
	};

	const itemCountChangeHandler = (event) => {
		setAmount(parseInt(event.target.value));
	};

	return (
		<li className={classes["menu-item"]}>
			<div>
				<h4>{props.name}</h4>
				<p>{props.desc}</p>
				<h5>${props.price.toFixed(2)}</h5>
			</div>
			<form onSubmit={addCartItemHandler}>
				<div className={classes["amount-container"]}>
					<label>Amount</label>
					<input
						type="number"
						defaultValue="1"
						onChange={itemCountChangeHandler}
					/>
				</div>
				<Button type="submit" className={classes["add-btn"]}>
					+Add
				</Button>
			</form>
		</li>
	);
};

export default MenuItem;
