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
			let itemExists = false;

			const newCart = prevCart.map((item) => {
				const newItem = { ...item };

				if (item.id === props.id) {
					newItem.amount = String(+item.amount + +amount);
					itemExists = true;
				}
				return newItem;
			});

			if (!itemExists) {
				newCart.unshift({
					id: props.id,
					name: props.name,
					price: props.price,
					amount: amount,
				});
			}
			return newCart;
		});

		ctx.setAlert({
			content: `Added ${amount} pcs of ${props.name.toLowerCase()} to cart!`,
			show: true,
		});
	};

	const changeHandler = (event) => {
		setAmount(event.target.value);
	};

	return (
		<li className={classes["menu-item"]}>
			<div>
				<h4>{props.name}</h4>
				<p>{props.desc}</p>
				<h5>${props.price}</h5>
			</div>
			<form onSubmit={submitHandler}>
				<div className={classes["amount-container"]}>
					<label>Amount</label>
					<input
						type="number"
						defaultValue="1"
						onChange={changeHandler}
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
