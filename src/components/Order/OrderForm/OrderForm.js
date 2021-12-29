import { useInput } from "../../../hooks/useInput";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

import classes from "./OrderForm.module.css";

/*** Validate helper functions ***********************/
const isEmpty = (value) => {
	return value.trim().length === 0;
};
/*****************************************************/

/*** Validate functions ******************************/
const validateName = (name) => {
	if (isEmpty(name)) {
		return "This is a required field.";
	}
	if (name.match(/[^a-z ]/i) !== null) {
		return "Name should contain only alphabets and spaces.";
	}
	return "";
};
const validateStreetOrCity = (street) => {
	if (isEmpty(street)) {
		return "This is a required field.";
	}
	const matchedBadChars = street.match(/[^a-z0-9-., ]/gi);
	if (matchedBadChars !== null) {
		const badCharsString = matchedBadChars.join(", ");
		return (
			"The field contains bad character" +
			(matchedBadChars.length > 1 ? "s" : "") +
			": " +
			badCharsString
		);
	}
	return "";
};
const validatePostalCode = (postalCode) => {
	if (isEmpty(postalCode)) {
		return "This is a required field.";
	}
	if (postalCode.match(/^[0-9]{5}$/) === null) {
		return "Postal code should contain only numbers of width 5.";
	}
	return "";
};
/******************************************************/

const OrderForm = (props) => {
	const {
		value: name,
		error: nameError,
		changeHandler: nameChangeHandler,
		blurHandler: nameBlurHandler,
	} = useInput(validateName);
	const {
		value: street,
		error: streetError,
		changeHandler: streetChangeHandler,
		blurHandler: streetBlurHandler,
	} = useInput(validateStreetOrCity);
	const {
		value: postalCode,
		error: postalCodeError,
		changeHandler: postalCodeChangeHandler,
		blurHandler: postalCodeBlurHandler,
	} = useInput(validatePostalCode);
	const {
		value: city,
		error: cityError,
		changeHandler: cityChangeHandler,
		blurHandler: cityBlurHandler,
	} = useInput(validateStreetOrCity);

	// Check if the overall form is valid
	const isFormValid =
		isEmpty(nameError.message) &&
		isEmpty(streetError.message) &&
		isEmpty(postalCodeError.message) &&
		isEmpty(cityError.message);

	const submitHandler = (event) => {
		event.preventDefault(); // Don't refresh
		if (!isFormValid) {
			return; // Return if form is not valid
		}
		/*** Submit form here ***********************/
		console.log("First name : " + name);
		/********************************************/
	};

	return (
		<form onSubmit={submitHandler} className={classes.checkoutForm}>
			<Input
				error={nameError}
				id="name"
				label="Your Name"
				onChange={nameChangeHandler}
				onBlur={nameBlurHandler}
				value={name}
			/>
			<Input
				error={streetError}
				id="street"
				label="Street"
				onChange={streetChangeHandler}
				onBlur={streetBlurHandler}
				value={street}
			/>
			<Input
				error={postalCodeError}
				id="postal-code"
				label="Postal Code"
				onChange={postalCodeChangeHandler}
				onBlur={postalCodeBlurHandler}
				value={postalCode}
			/>
			<Input
				error={cityError}
				id="city"
				label="City"
				onChange={cityChangeHandler}
				onBlur={cityBlurHandler}
				value={city}
			/>
			<div className={classes.formAction}>
				<Button className={classes.cancelButton}>Cancel</Button>
				<Button disabled={!isFormValid} className={classes.confirmButton}>
					Confirm
				</Button>
			</div>
		</form>
	);
};

export default OrderForm;
