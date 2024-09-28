import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const layoutConfigAtom = atomWithStorage("config", {
	unit: 50,
	gap: 10,
	editMode: true,
	compactType: "vertical",
	preventCollision: false,
	isDraggable: true,
});

export function useLayoutConfig() {
	const [layoutConfig, setLayoutConfig] = useAtom(layoutConfigAtom);

	const setIsDraggable = (isDraggable: boolean) => {
		setLayoutConfig({ ...layoutConfig, isDraggable });
	};

	return {
		layoutConfig,
		setLayoutConfig,
		setIsDraggable,
	};
}
