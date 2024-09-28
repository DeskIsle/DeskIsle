import "@/grid-layout.css";
import { useAtom } from "jotai";
import { type RefObject, useEffect, useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";

import { componentsAtoms, splitComponentsAtoms } from "@/atoms/components";
import { layoutConfigAtom } from "@/atoms/layout";
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
	const [{ unit, gap, compactType, preventCollision, isDraggable }] = useAtom(layoutConfigAtom);

	const [componentSplitAtoms] = useAtom(splitComponentsAtoms);
	const [components, setComponents] = useAtom(componentsAtoms);
	const [columns, setColumns] = useState(10);
	const [fixedLayoutWidth, setFixedLayoutWidth] = useState(500);
	const [isDragging, setIsDragging] = useState(false);

	// Calculate the number of columns based on the parent width
	// TODO: listen to window resize event to recalculate the number of columns
	useEffect(() => {
		const layoutWidth = parentRef.current?.offsetWidth;

		if (layoutWidth && layoutWidth > gap) {
			const columns = Math.floor((layoutWidth - gap) / (unit + gap));
			const fixedLayoutWidth = (unit + gap) * columns;
			setColumns(columns);
			setFixedLayoutWidth(fixedLayoutWidth);
		}
	}, [parentRef, unit, gap]);

	const generateLayout = () => {
		return components.map((component) => {
			return {
				x: component.col,
				y: component.row,
				w: component.width,
				h: component.height,
				i: component.id,
			};
		});
	};
	const [layout, setLayout] = useState<Layout[]>(generateLayout());

	useEffect(() => {
		const newLayout = components.map((component) => {
			return {
				x: component.col,
				y: component.row,
				w: component.width,
				h: component.height,
				i: component.id,
			};
		});
		setLayout(newLayout);
	}, [components]);

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
					const component = components.find((component) => component.id === item.i);
					return {
						...component,
						col: item.x,
						row: item.y,
					};
				});
				setComponents(newComps);
			}}
			compactType={compactType}
			cols={columns}
			isDraggable={isDraggable}
			margin={[gap, gap]}
			rowHeight={unit}
			preventCollision={preventCollision}
		>
			{components.map((component, i) => (
				<WidgetWrapper
					key={component.id}
					componentAtom={componentSplitAtoms[i]}
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
