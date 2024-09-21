import { type Comp, compAtoms, registryComps, splitCompAtoms } from "@/atoms/comps";
import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { cn } from "@/lib/utils";
import { type MotionProps, motion } from "framer-motion";
import { type PrimitiveAtom, useAtom } from "jotai";
import { type RefObject, forwardRef, useEffect, useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "@/grid-layout.css";

const ReactGridLayout = WidthProvider(RGL);

interface Layout {
	x: number;
	y: number;
	w: number;
	h: number;
	i: string;
}

interface AppLayoutProps {
	parentRef: RefObject<HTMLDivElement>;
}

export const AppLayout = ({ parentRef }: AppLayoutProps) => {
	const [layoutConfig] = useAtom(layoutConfigAtom);
	const { unit, gap, compactType, preventCollision } = layoutConfig;
	const [compSplitAtoms] = useAtom(splitCompAtoms);
	const [comps, setComps] = useAtom(compAtoms);
	const [cols, setCols] = useState(10);
	const [fixedLayoutWidth, setFixedLayoutWidth] = useState(500);

	useEffect(() => {
		const layoutWidth = parentRef.current?.offsetWidth;
		let newCols = 0;
		let fixedLayoutWidth = 0;
		if (layoutWidth && layoutWidth > gap) {
			newCols = Math.floor((layoutWidth - gap) / (unit + gap));
			fixedLayoutWidth = (unit + gap) * newCols;
			setCols(newCols);
			setFixedLayoutWidth(fixedLayoutWidth);
		}
	}, [parentRef, unit, gap]);

	const generateLayout = () => {
		return comps.map((comp) => {
			return {
				x: comp.col,
				y: comp.row,
				w: comp.width,
				h: comp.height,
				i: comp.id,
			};
		});
	};
	const [layout, setLayout] = useState<Layout[]>(generateLayout());

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		console.log("comps", comps);
		const newLayout = comps.map((comp) => {
			return {
				x: comp.col,
				y: comp.row,
				w: comp.width,
				h: comp.height,
				i: comp.id,
			};
		});
		setLayout(newLayout);
	}, [comps]);

	const generateDOM = () => {
		return comps.map((comp, i) => <CompElement key={comp.id} compAtom={compSplitAtoms[i]} />);
	};
	return (
		<ReactGridLayout
			className="border-2 bg-[#F3F4F6] rounded-md border-dashed relative h-full"
			style={{ width: fixedLayoutWidth }}
			layout={layout}
			onLayoutChange={(newLayout) => {
				console.log("newLayout", newLayout);
			}}
			onDragStop={(layout) => {
				const newComps = layout.map((item) => {
					const comp = comps.find((comp) => comp.id === item.i);
					return {
						...comp,
						col: item.x,
						row: item.y,
					};
				});
				setComps(newComps);
			}}
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
export const CompElement = forwardRef<HTMLDivElement, CompProps>(function CompElement(
	{ compAtom, preview, className, ...props },
	ref,
) {
	const [comp] = useAtom(compAtom);
	const { element } = comp;
	const Element = registryComps[element].Element;
	return (
		<motion.div ref={ref} className={cn(className, "w-full h-full bg-transparent rounded-lg")} {...props}>
			<Element compAtom={compAtom} />
		</motion.div>
	);
});

CompElement.displayName = "CompElement";
