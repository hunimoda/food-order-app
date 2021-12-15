import { useContext, useState } from "react";
import CartContext from "../../../contexts/cart";

import Button from "../../UI/Button/Button";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
	const ctx = useContext(CartContext);
	const [amount, setAmount] = useState("1");

	const submitHandler = (event) => {
		event.preventDefault();

		ctx.setCart((prevCart) => {
			return [
				{ name: props.name, price: props.price, amount: amount },
				...ctx.cart,
			];
		});
	};

	const changeHandler = (event) => {
		setAmount(event.target.value);
	};

	return (
		<div className={classes["menu-item"]}>
			<div>
				<h4>{props.name}</h4>
				<p>{props.description}</p>
				<h5>${props.price}</h5>
			</div>
			<form onSubmit={submitHandler}>
				<div className={classes["amount-container"]}>
					<label>Amount</label>
					<input
						type="number"
						defaultValue={amount}
						onChange={changeHandler}
					/>
				</div>
				<Button type="submit" className={classes["add-btn"]}>
					+Add
				</Button>
			</form>
		</div>
	);
};

export default MenuItem;
