import { useContext, useState } from "react";
import { Cart } from "../../../contexts/cart";

import Button from "../../UI/Button/Button";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
	const item = props.item;

	const cart = useContext(Cart);
	const [amount, setAmount] = useState(1);

	const addCartItemHandler = (event) => {
		event.preventDefault();

		cart.add({ id: item.id, name: item.name, price: item.price }, amount);

		console.log("Show item add result as modal");
		// cart.setAlert({
		// 	content: `Added ${amount} pcs of ${props.name.toLowerCase()} to cart!`,
		// 	show: true,
		// });
	};

	const itemAmountChangeHandler = (event) => {
		setAmount(parseInt(event.target.value));
	};

	return (
		<li className={classes["menu-item"]}>
			<div>
				<h4>{item.name}</h4>
				<p>{item.desc}</p>
				<h5>${item.price.toFixed(2)}</h5>
			</div>
			<form onSubmit={addCartItemHandler}>
				<div className={classes["amount-container"]}>
					<label>Amount</label>
					<input
						type="number"
						defaultValue="1"
						onChange={itemAmountChangeHandler}
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
