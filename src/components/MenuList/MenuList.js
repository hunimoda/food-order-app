import Card from "../UI/Card/Card";
import MenuItem from "./MenuItem/MenuItem";

import classes from "./MenuList.module.css";

const MenuList = () => {
	return (
		<Card className={classes["menu-list"]}>
			<MenuItem
				name="Sushi"
				description="Finest fish and veggies"
				price="22.99"
			/>
			<MenuItem
				name="Schnitzel"
				description="A german specialty!"
				price="16.50"
			/>
		</Card>
	);
};

export default MenuList;
