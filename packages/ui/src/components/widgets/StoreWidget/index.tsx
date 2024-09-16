import { type Comp, compAtoms, registryComps } from "@/atoms/comps";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { atom, useAtom } from "jotai";
import { v4 as uuidv4 } from "uuid";

import DraggableCard from "@/components/common/DraggableCard";
import { CompElement } from "@/pages/applayout";
import { splitAtom } from "jotai/utils";

const defaultCompAtoms = splitAtom(
	atom<Comp[]>(
		Object.keys(registryComps).map((key) => {
			const k = key as keyof typeof registryComps;
			return {
				id: uuidv4(),
				row: 0,
				col: 0,
				width: registryComps[k].defaultProps.width,
				height: registryComps[k].defaultProps.height,
				element: k,
				elementProps: registryComps[k].defaultProps.elementProps,
			};
		}),
	),
);

export default function StoreWidget() {
	const [defaultComps] = useAtom(defaultCompAtoms);
	const [comps, setComps] = useAtom(compAtoms);
	const addComp = (k: keyof typeof registryComps) => {
		console.log("addCmop: ", k);
		setComps([
			...comps,
			{
				id: uuidv4(),
				row: 0,
				col: 0,
				width: registryComps[k].defaultProps.width,
				height: registryComps[k].defaultProps.height,
				element: k,
				elementProps: registryComps[k].defaultProps.elementProps,
			},
		]);
	};
	return (
		<div className="flex justify-center items-center">
			<Carousel className="w-full h-full max-w-xs">
				<CarouselContent>
					{Object.keys(registryComps).map((key, index) => {
						const k = key as keyof typeof registryComps;
						return (
							<CarouselItem key={key}>
								<div className="p-1">
									<div className="flex aspect-square items-center justify-center p-6">
										<CompElement
											className="w-2/3 h-2/3"
											preview={true}
											compAtom={defaultComps[index]}
											drag={false}
										/>
										<div
											onKeyDown={() => addComp(k)}
											className="z-10 w-full h-full bg-transparent"
										>
										</div>
										<div className="absolute w-full flex justify-center bottom-0">
											{registryComps[k].name}
										</div>
									</div>
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

export function WidgetItem({ k }: { k: keyof typeof registryComps }) {
	const { name, defaultProps } = registryComps[k];
	const [comps, setComps] = useAtom(compAtoms);
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
