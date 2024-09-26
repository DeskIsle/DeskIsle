import type { BaseComponentMeta } from "@/atoms/components";
import { type PrimitiveAtom, useAtom } from "jotai";

export interface ImageWidgetProps {
	componentAtom: PrimitiveAtom<BaseComponentMeta>;
}

export function ImageWidget({ componentAtom }: ImageWidgetProps) {
	const [comp] = useAtom(componentAtom);
	const { img } = comp.elementProps as { img: string };
	return <img className="object-cover w-full h-full" draggable={false} src={img} alt="" />;
}
