import { useContext, useState } from "react";
import { Cart } from "../../../contexts/cart";

import Button from "../../UI/Button/Button";
import Alert from "../../Alert/Alert";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
	const item = props.item;

	const cart = useContext(Cart);
	const [amount, setAmount] = useState(1);
	const [alert, setAlert] = useState("");

	const addCartItemHandler = (event) => {
		event.preventDefault();

		if (isNaN(amount) || !Number.isInteger(amount) || amount <= 0) {
			setAlert("Invalid value! Please check the amount.");
			return;
		}
		cart.add({ id: item.id, name: item.name, price: item.price }, amount);
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
			<div className={classes["item-adder"]}>
				<div className={classes["amount-container"]}>
					<label>Amount</label>
					<input
						type="number"
						defaultValue="1"
						min="1"
						step="1"
						onChange={itemAmountChangeHandler}
					/>
				</div>
				<Button
					type="submit"
					className={classes["add-btn"]}
					onClick={addCartItemHandler}
				>
					+Add
				</Button>
			</div>
			<Alert
				show={alert !== ""}
				onConfirm={() => {
					setAlert("");
				}}
			>
				{alert}
			</Alert>
		</li>
	);
};

export default MenuItem;
