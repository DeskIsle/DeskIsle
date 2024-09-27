import { iconsAtom } from "@/atoms/icons";
import { DataUrlIcon } from "@/icons/data-url";
import { useAtomValue } from "jotai";

interface IconShopProps {
	onSelect: (icon: string) => void;
}

export function IconShop({ onSelect }: IconShopProps) {
	const icons = useAtomValue(iconsAtom);
	return (
		<div className="flex flex-wrap gap-2">
			{icons.map((icon, index) => (
				<div
					// biome-ignore lint/suspicious/noArrayIndexKey:
					key={index}
					onMouseDown={() => onSelect(icon)}
					className="flex justify-center items-center w-8 h-8 p-1 rounded-sm hover:bg-slate-200"
				>
					<DataUrlIcon className="w-3/4 h-3/4" src={icon} />
				</div>
			))}
		</div>
	);
}
