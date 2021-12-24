import { useEffect } from "react/cjs/react.development";

import Card from "../UI/Card/Card";
import MenuItem from "./MenuItem/MenuItem";
import useHttp from "../../hooks/useHttp";
import useEffectSkipMount from "../../hooks/useEffectSkipMount";

import classes from "./MenuList.module.css";

const availableMealsURL =
	"https://react-http-33900-default-rtdb.firebaseio.com/meals.json";

const MenuList = (props) => {
	const { response, sendHttpRequest, isLoading } = useHttp();

	useEffect(() => {
		sendHttpRequest(availableMealsURL);
	}, [sendHttpRequest]);
	useEffectSkipMount(() => {
		console.log("HERE!!!");
		if (!response.hasError) {
			// No error, success!
		} else {
			// Has error
		}
	}, [response]);

	return (
		<Card className={classes["menu-list"]}>
			{props.items.map((item) => (
				<MenuItem key={item.id} item={item} />
			))}
			{isLoading && <p>Loading...</p>}
		</Card>
	);
};

export default MenuList;
