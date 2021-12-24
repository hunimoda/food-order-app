import { useState, useCallback } from "react";

const useHttp = () => {
	const [response, setResponse] = useState({ data: {}, hasError: false });
	const [isLoading, setIsLoading] = useState(false);

	const sendHttpRequest = useCallback(async (url, jsObject = null) => {
		setIsLoading(true);
		const settings =
			jsObject !== null
				? {
						method: "POST",
						headers: "Content-Type: application/json",
						body: JSON.stringify(jsObject),
				  }
				: null;
		try {
			const fetchResponse = await fetch(url, settings);
			if (!fetchResponse.ok) {
				throw new Error("Not OK!");
			}
			const responseJson = await fetchResponse.json();
			setResponse({ data: responseJson, hasError: false });
		} catch (error) {
			setResponse({ data: {}, hasError: true });
		}
		setIsLoading(false);
	}, []);

	return { response, sendHttpRequest, isLoading };
};

export default useHttp;
