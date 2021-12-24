import { useEffect, useState } from "react";

const useEffectSkipMount = (callback, dependencies) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		if (!isMounted) {
			setIsMounted(true);
			return;
		}
		callback();
	}, dependencies);
};

export default useEffectSkipMount;
