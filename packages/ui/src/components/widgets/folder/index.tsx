import type { BaseComponentMeta } from "@/atoms/components";

import { useModal } from "@/components/ui/use-modal";
import { DataUrlIcon } from "@/icons/data-url";
import type { LinkWidgetProps } from "../link";
import { useCurrentComponent } from "../widget-wrapper";

export interface FolderWidgetProps {
	title: string;
	components: BaseComponentMeta[];
}

export const FolderWidget = (props: FolderWidgetProps) => {
	// @ts-ignore
	const { component, setComponent } = useCurrentComponent();
	const { components, title } = props;
	const gapValue = component.width;
	const { confirm } = useModal();
	const handleTitleChange = (title: string) => {
		setComponent({
			...component,
			elementProps: {
				...component.elementProps,
				title,
			},
		});
	};
	const openFolderModal = () => {
		confirm({
			title: title,
			body: <FolderModal component={component as BaseComponentMeta<"FolderWidget">} setComponent={setComponent} />,
			dialogContentClassName: "bg-black/10 backdrop-blur-sm text-white",
			onTitleChange: handleTitleChange,
		});
	};
	return (
		<>
			<div
				className={`gap-${gapValue} p-${gapValue} w-full h-full grid grid-cols-2 grid-rows-2 hover:cursor-pointer bg-black/25 rounded-lg`}
				onClick={openFolderModal}
			>
				{components.map((component) => {
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
		</>
	);
};

interface FolderModalProps {
	component: BaseComponentMeta<"FolderWidget">;
	setComponent: (component: BaseComponentMeta<"FolderWidget">) => void;
}

export const FolderModal = ({ component, setComponent }: FolderModalProps) => {
	const { components } = component.elementProps;
	return (
		<div className="flex flex-wrap gap-2 items-center justify-center">
			{components.map((component) => {
				const { icon, bgColor } = component.elementProps as LinkWidgetProps;
				return (
					<div
						key={component.id}
						style={{
							backgroundColor: bgColor,
						}}
						className={"w-16 h-16 rounded-md text-5xl select-none flex justify-center items-center"}
					>
						<DataUrlIcon className="w-3/4 h-3/4" src={icon} />
					</div>
				);
			})}
		</div>
	);
};
