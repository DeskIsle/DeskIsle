import "@/grid-layout.css";
import { useAtom } from "jotai";
import { type RefObject, useEffect, useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";

import { componentsAtoms, splitComponentsAtoms } from "@/atoms/components";
import { layoutConfigAtom } from "@/atoms/layout-config";
import { WidgetWrapper } from "@/components/widgets/widget-wrapper";

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
	const [{ unit, gap, compactType, preventCollision }] = useAtom(layoutConfigAtom);

	const [compSplitAtoms] = useAtom(splitComponentsAtoms);
	const [comps, setComps] = useAtom(componentsAtoms);
	const [cols, setCols] = useState(10);
	const [fixedLayoutWidth, setFixedLayoutWidth] = useState(500);
	const [isDragging, setIsDragging] = useState(false);

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

	useEffect(() => {
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

	return (
		<ReactGridLayout
			className="border-2 bg-[#F3F4F6] rounded-md border-dashed relative h-full"
			style={{ width: fixedLayoutWidth }}
			layout={layout}
			onDrag={() => {
				setIsDragging(true);
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
			{comps.map((comp, i) => (
				<WidgetWrapper
					key={comp.id}
					componentAtom={compSplitAtoms[i]}
					onClickCapture={(e) => {
						if (isDragging) {
							e.stopPropagation();
						}
						setIsDragging(false);
					}}
				/>
			))}
		</ReactGridLayout>
	);
};
