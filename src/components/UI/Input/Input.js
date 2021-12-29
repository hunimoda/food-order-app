import classes from "./Input.module.css";

const Input = (props) => {
	const showError = props.error.show;
	const controlClassName = `${classes["form-control"]} ${
		showError ? classes.invalid : ""
	}`;
	const errorMessage = (
		<p className={classes["error-message"]}>
			{showError && props.error.message}
		</p>
	);

	return (
		<div className={controlClassName}>
			<div className={classes.inputContainer}>
				<label htmlFor={props.id}>{props.label}</label>
				<input
					type={props.type ?? "text"}
					id={props.id}
					onChange={props.onChange}
					onBlur={props.onBlur}
					value={props.value}
				/>
			</div>
			{errorMessage}
		</div>
	);
};

export default Input;
