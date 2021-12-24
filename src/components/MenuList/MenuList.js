import { useState, useEffect, Fragment } from "react";

import Card from "../UI/Card/Card";
import MenuItem from "./MenuItem/MenuItem";
import useHttp from "../../hooks/useHttp";
import useEffectSkipMount from "../../hooks/useEffectSkipMount";
import Modal from "../UI/Modal/Modal";
import Alert from "../Alert/Alert";

import classes from "./MenuList.module.css";

const availableMealsURL =
	"https://react-http-33900-default-rtdb.firebaseio.com/meals.json";

const MenuList = (props) => {
	const { response, sendHttpRequest, isLoading } = useHttp();
	const [items, setItems] = useState([]);
	const [showError, setShowError] = useState(false);

	useEffect(() => {
		sendHttpRequest(availableMealsURL);
	}, [sendHttpRequest]);
	useEffectSkipMount(() => {
		if (!response.hasError) {
			const newItems = [];
			for (const id in response.data) {
				newItems.push({ ...response.data[id], id });
			}
			setItems(newItems);
		} else {
			setShowError(true);
		}
	}, [response]);

	return (
		<Fragment>
			<Card className={classes["menu-list"]}>
				{items.length > 0 ? (
					items.map((item) => <MenuItem key={item.id} item={item} />)
				) : (
					<p>No meals available</p>
				)}
			</Card>
			<Alert
				show={showError}
				onConfirm={() => {
					setShowError(false);
				}}
			>
				Couldn't fetch data due to an error!
			</Alert>
			{isLoading && <Modal show={true}>Loading...</Modal>}
		</Fragment>
	);
};

export default MenuList;
