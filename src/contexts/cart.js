import { createContext } from "react";

const CartContext = createContext({
	cart: [],
	setCart: () => {},
	setAlert: () => {},
	setShowCart: false,
});

export default CartContext;
