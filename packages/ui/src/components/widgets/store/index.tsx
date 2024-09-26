import { type BaseComponentMeta, componentsAtoms, registryComponents } from "@/atoms/components";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { atom, useAtom } from "jotai";
import { v4 as uuidv4 } from "uuid";

import { DraggableCard } from "@/components/common/card";
import { splitAtom } from "jotai/utils";
import { WidgetWrapper } from "../widget-wrapper";

const defaultCompAtoms = splitAtom(
	atom<BaseComponentMeta[]>(
		Object.keys(registryComponents).map((key) => {
			const k = key as keyof typeof registryComponents;
			return {
				id: uuidv4(),
				row: 0,
				col: 0,
				width: registryComponents[k].defaultProps.width,
				height: registryComponents[k].defaultProps.height,
				element: k,
				elementProps: registryComponents[k].defaultProps.elementProps,
			};
		}),
	),
);

export function StoreWidget() {
	const [defaultComps] = useAtom(defaultCompAtoms);
	const [comps, setComps] = useAtom(componentsAtoms);
	const addComp = (k: keyof typeof registryComponents) => {
		setComps([
			...comps,
			{
				id: uuidv4(),
				row: 0,
				col: 0,
				width: registryComponents[k].defaultProps.width,
				height: registryComponents[k].defaultProps.height,
				element: k,
				elementProps: registryComponents[k].defaultProps.elementProps,
			},
		]);
	};
	return (
		<div className="flex justify-center items-center">
			<Carousel className="w-full h-full max-w-xs">
				<CarouselContent>
					{Object.keys(registryComponents).map((key, index) => {
						const k = key as keyof typeof registryComponents;
						return (
							<CarouselItem key={key}>
								<div className="flex aspect-square items-center justify-center m-6 border-2 border-slate-200 rounded-md border-dashed bg-[#F3F4F6] p-4">
									<WidgetWrapper preview={true} componentAtom={defaultComps[index]} drag={false} />
									<div onMouseDown={() => addComp(k)} className="absolute z-10 w-full h-full bg-transparent" />
									<div className="absolute w-full flex justify-center bottom-0">{registryComponents[k].name}</div>
								</div>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
		// <div className="">

		//   {Object.keys(registryComps).map((key, index) => {
		//     const k = key as keyof typeof registryComps
		//     return (
		//       <WidgetItem key={index} k={k}></WidgetItem>
		//     )
		//   })}
		// </div>
	);
}

export function WidgetItem({ k }: { k: keyof typeof registryComponents }) {
	const { name, defaultProps } = registryComponents[k];
	const [comps, setComps] = useAtom(componentsAtoms);
	function addWidget() {
		setComps([
			...comps,
			{
				id: uuidv4(),
				row: 0,
				col: 0,
				width: defaultProps.width,
				height: defaultProps.height,
				element: k,
				elementProps: defaultProps.elementProps,
			},
		]);
	}
	return (
		<DraggableCard onClick={addWidget} className="p-4">
			{name}
		</DraggableCard>
	);
}
