import { useCallback, useRef } from "react";

export const useEventCallback = <T extends (...args: unknown[]) => unknown>(fn: T) => {
	const ref = useRef<T>(fn);
	ref.current = fn;

	return useCallback((...args: unknown[]) => ref.current(...args), []) as T;
};
