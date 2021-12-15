import React from "react";
import Cart from "./Cart/Cart";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
	return (
		<header className={classes.header}>
			<h1>ReactMeals</h1>
			<Cart />
		</header>
	);
};

export default MainHeader;
