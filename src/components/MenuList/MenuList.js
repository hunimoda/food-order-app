import { useState, useEffect, Fragment } from "react";

import Card from "../UI/Card/Card";
import MenuItem from "./MenuItem/MenuItem";
import useHttp from "../../hooks/useHttp";
import useEffectSkipMount from "../../hooks/useEffectSkipMount";
import Alert from "../Alert/Alert";

import classes from "./MenuList.module.css";

const availableMealsURL =
	"https://react-http-33900-default-rtdb.firebaseio.com/meals.json";

const MenuList = (props) => {
	const { response, sendHttpRequest, isLoading } = useHttp();
	const [items, setItems] = useState([]);
	const [showError, setShowError] = useState(false);
	const [isLoadingComplete, setIsLoadingComplete] = useState(false);

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
		setIsLoadingComplete(true);
	}, [response]);

	return (
		<Fragment>
			{isLoadingComplete && !response.hasError && (
				<Card className={classes["menu-list"]}>
					{items.length > 0 ? (
						items.map((item) => <MenuItem key={item.id} item={item} />)
					) : (
						<p className={classes["no-meals"]}>No meals available</p>
					)}
				</Card>
			)}
			{isLoading && <i className={`fas fa-spinner ${classes.loading}`} />}
			<Alert
				show={showError}
				onConfirm={() => {
					setShowError(false);
				}}
			>
				Couldn't fetch data due to an error!
			</Alert>
		</Fragment>
	);
};

export default MenuList;
