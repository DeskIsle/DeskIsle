import "@/grid-layout.css";
import { useAtom } from "jotai";
import { type RefObject, useEffect, useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";

import { componentsAtoms, splitComponentsAtoms } from "@/atoms/components";
import { layoutConfigAtom } from "@/atoms/layout";
import { WidgetWrapper } from "@/components/widgets/widget-wrapper";

const ReactGridLayout = WidthProvider(RGL);

interface Layout {
	// A string corresponding to the component key
	i: string;

	// These are all in grid units, not pixels
	x: number;
	y: number;
	w: number;
	h: number;
	minW?: number;
	maxW?: number;
	minH?: number;
	maxH?: number;

	// If true, equal to `isDraggable: false, isResizable: false`.
	static?: boolean;
	// If false, will not be draggable. Overrides `static`.
	isDraggable?: boolean;
	// If false, will not be resizable. Overrides `static`.
	isResizable?: boolean;
	// By default, a handle is only shown on the bottom-right (southeast) corner.
	// As of RGL >= 1.4.0, resizing on any corner works just fine!
	resizeHandles?: Array<"s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne">;
	// If true and draggable, item will be moved only within grid.
	isBounded?: boolean;
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

	const handleLayoutChange = (layout: Layout[]) => {
		return layout;
	};

	const isOverlap = (itemA: Layout, itemB: Layout) => {
		return itemA.x === itemB.x && itemA.y === itemB.y;
	};

	return (
		<ReactGridLayout
			className="border-2 bg-[#F3F4F6] rounded-md border-dashed relative h-full"
			style={{ width: fixedLayoutWidth }}
			layout={layout}
			onLayoutChange={handleLayoutChange}
			onDrag={() => {
				setIsDragging(true);
			}}
			onDragStop={(layout, _oldItem, newItem) => {
				let overlapIndex = -1;
				let newItemIndex = -1;
				const newComps = layout.map((item, index) => {
					if (item.i === newItem.i) {
						newItemIndex = index;
					}
					if (overlapIndex === -1 && item !== newItem && isOverlap(item, newItem)) {
						overlapIndex = index;
					}
					return {
						...components[index],
						col: item.x,
						row: item.y,
					};
				});
				if (
					overlapIndex !== -1 &&
					components[newItemIndex].element === "LinkWidget" &&
					components[overlapIndex].element === "FolderWidget"
				) {
					let filterComps = newComps[overlapIndex].elementProps.components.push(newComps[newItemIndex]);
					filterComps = newComps.filter((component) => component.id !== newItem.i);
					setComponents(filterComps);
				} else {
					setComponents(newComps);
				}
			}}
			compactType={compactType}
			cols={columns}
			isDraggable={isDraggable}
			margin={[gap, gap]}
			rowHeight={unit}
			preventCollision={preventCollision}
			allowOverlap={true}
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
