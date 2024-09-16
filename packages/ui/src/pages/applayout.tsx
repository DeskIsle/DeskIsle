import {
	type Comp,
	compAtoms,
	isDraggingAtom,
	registryComps,
	splitCompAtoms,
} from "@/atoms/comps";
import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { cn } from "@/lib/utils";
import { type MotionProps, motion } from "framer-motion";
import { type PrimitiveAtom, useAtom } from "jotai";
import { type RefObject, forwardRef, memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "@/grid-layout.css";
// import "react-resizable/css/styles.css";

const ReactGridLayout = WidthProvider(RGL);

interface Layout {
	x: number,
	y: number,
	w: number,
	h: number,
	i: string
}

export const AppLayout = ({ parentRef }: { parentRef: RefObject<HTMLDivElement> }) => {
	const [layoutConfig] = useAtom(layoutConfigAtom);
	const { unit, gap, compactType, preventCollision } = layoutConfig;
	const [compSplitAtoms] = useAtom(splitCompAtoms);
	const [comps] = useAtom(compAtoms);
	const [cols, setCols] = useState(10)
	const [fixedLayoutWidth, setFixedLayoutWidth] = useState(500)
	const [layout, setLayout] = useState<Layout[]>([]);

	useEffect(() => {
		const layoutWidth = parentRef.current?.offsetWidth;
		let newCols = 0
		let fixedLayoutWidth = 0
		if (layoutWidth && layoutWidth > gap) {
			newCols = Math.floor((layoutWidth - gap) / (unit + gap))
			fixedLayoutWidth = (unit + gap) * newCols
			setCols(newCols)
			setFixedLayoutWidth(fixedLayoutWidth)
		}
	}, [parentRef, unit, gap])

	useEffect(() => {
		const newLayout = comps.map((comp, i) => {
			return {
				x: comp.col,
				y: comp.row,
				w: comp.width,
				h: comp.height,
				i: comp.id
			};
		});
		setLayout(newLayout)
	}, [comps])


	const generateDOM = () => {
		return comps.map((comp, i) => (
			<CompElement key={comp.id} compAtom={compSplitAtoms[i]} />
		));
	};
	return (
		<ReactGridLayout
			className='border-2 bg-[#F3F4F6] rounded-md border-dashed relative h-full'
			style={{ width: fixedLayoutWidth }}
			layout={layout}
			compactType={compactType}
			cols={cols}
			margin={[gap, gap]}
			rowHeight={unit}
			preventCollision={preventCollision}
		>
			{generateDOM()}
		</ReactGridLayout>
	);
};

interface CompProps extends MotionProps {
	compAtom: PrimitiveAtom<Comp>;
	preview?: boolean;
	className?: string;
}
export const CompElement = forwardRef<HTMLDivElement, CompProps>(function CompElement({
	compAtom,
	preview,
	className,
	...props
}, ref) {
	const [comp,] = useAtom(compAtom);
	const { element } = comp;
	const Element = registryComps[element].Element;
	return (
		<motion.div
			ref={ref}
			className={cn(
				className,
				"w-full h-full bg-transparent rounded-lg",
			)}
			{...props}
		>
			<Element compAtom={compAtom} />
		</motion.div>
	);
});

CompElement.displayName = "CompElement"
