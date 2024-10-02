import type { BaseComponentMeta } from "@/atoms/components";

import { DataUrlIcon } from "@/icons/data-url";
import type { LinkWidgetProps } from "../link";
import { useCurrentComponent } from "../widget-wrapper";

export interface FolderWidgetProps {
	components: BaseComponentMeta[];
}

export const FolderWidget = (props: FolderWidgetProps) => {
	// @ts-ignore
	const { component } = useCurrentComponent();
	const { components } = props;

	return (
		<>
			<div className={"w-full h-full grid grid-cols-2 grid-rows-2 hover:cursor-pointer bg-black/25 rounded-lg"}>
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
