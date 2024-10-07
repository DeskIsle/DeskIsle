import type { BaseComponentMeta } from "@/atoms/components";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DataUrlIcon } from "@/icons/data-url";
import { arrayMove } from "@/lib/utils";
import { DragDropProvider } from "@dnd-kit/react";
import { useSortable } from "@dnd-kit/react/sortable";
import { useEffect, useState } from "react";
import type { LinkWidgetProps } from "../link";
import { useCurrentComponent } from "../widget-wrapper";

export interface FolderWidgetProps {
	title: string;
	components: BaseComponentMeta[];
}

export function FolderWidget(props: FolderWidgetProps) {
	const { component, setComponent } = useCurrentComponent<"FolderWidget">();
	const { components, title } = props;
	const gapValue = component.width;
	const [open, handleModalOpen] = useState(false);
	const handleTitleChange = (title: string) => {
		setComponent({
			...component,
			elementProps: {
				...component.elementProps,
				title,
			},
		});
	};

	return (
		<>
			<div
				className={`gap-${gapValue} p-${gapValue} w-full h-full grid grid-cols-2 grid-rows-2 hover:cursor-pointer bg-black/25 rounded-lg`}
				onClick={() => handleModalOpen(true)}
			>
				{components.slice(0, 4).map((component) => {
					const { icon, bgColor } = component.elementProps as LinkWidgetProps;
					return (
						<div
							key={component.id}
							style={{
								backgroundColor: bgColor,
							}}
							className={"w-full h-full rounded-sm text-5xl select-none flex justify-center items-center"}
						>
							<DataUrlIcon className="w-3/4 h-3/4" src={icon} />
						</div>
					);
				})}
			</div>
			<FolderModal
				open={open}
				onOpenChange={handleModalOpen}
				title={title}
				onTitleChange={handleTitleChange}
				component={component}
				setComponent={setComponent}
			/>
		</>
	);
}

interface FolderModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	title: string;
	onTitleChange: (title: string) => void;
	component: BaseComponentMeta<"FolderWidget">;
	setComponent: (component: BaseComponentMeta<"FolderWidget">) => void;
}

function FolderModal(props: FolderModalProps) {
	const { open, onOpenChange, onTitleChange, component, setComponent } = props;
	const { components } = component.elementProps;

	const [title, setTitle] = useState(props.title);
	useEffect(() => {
		onTitleChange(title);
	}, [title, onTitleChange]);

	const handleDragOver = (event) => {
		const { initialIndex, previousIndex } = event.operation.source.sortable;
		const newComponents = arrayMove(components, initialIndex, previousIndex);
		setComponent({
			...component,
			elementProps: {
				...component.elementProps,
				components: newComponents,
			},
		});
	};

	return (
		<>
			<Dialog open={open} onOpenChange={onOpenChange}>
				<DialogContent className={"sm:max-w-[425px] bg-black/10 backdrop-blur-sm text-white"}>
					<DialogHeader>
						<DialogTitle>
							<Input
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								className="w-fit h-fit focus-visible:ring-none focus-visible:ring-transparent text-lg p-0 border-none"
							/>
						</DialogTitle>
						<DialogDescription className={"hidden"}>{props.title}</DialogDescription>
					</DialogHeader>
					<DragDropProvider onDragOver={handleDragOver}>
						<ul className="flex flex-wrap gap-2 items-center justify-start">
							{components.map((component, index) => {
								const { icon, bgColor } = component.elementProps as LinkWidgetProps;
								return (
									<Sortable
										key={component.id}
										id={component.id}
										index={index}
										style={{
											backgroundColor: bgColor,
										}}
										className="w-16 h-16 rounded-md text-5xl select-none flex justify-center items-center"
									>
										<DataUrlIcon className="w-3/4 h-3/4" src={icon} />
									</Sortable>
								);
							})}
						</ul>
					</DragDropProvider>
				</DialogContent>
			</Dialog>
		</>
	);
}

function Sortable({ id, index, children, className, style }) {
	const { ref } = useSortable({ id, index });

	return (
		<li className={className} ref={ref} style={style}>
			{children}
		</li>
	);
}
