import type { BaseComponentMeta } from "@/atoms/components";
import { BaseContextMenu } from "@/components/common/context-menu";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { DataUrlIcon } from "@/icons/data-url";
import { type PrimitiveAtom, useAtom } from "jotai";
import type { LinkWidgetElementProps } from "../link";

export interface FolderWidgetProps {
	componentAtom: PrimitiveAtom<BaseComponentMeta>;
}

export interface FolderWidgetElementProps {
	comps: BaseComponentMeta[];
}

export const FolderWidget = ({ componentAtom }: FolderWidgetProps) => {
	const [comp] = useAtom(componentAtom);
	const { comps } = comp.elementProps as FolderWidgetElementProps;
	return (
		<>
			<ContextMenu modal={false}>
				<ContextMenuTrigger className="w-full h-full">
					<div
						className={`w-full h-full grid grid-cols-2 grid-rows-2 gap-${comp.width} p-${comp.width} hover:cursor-pointer bg-black/25 rounded-lg`}
					>
						{comps.map((comp) => {
							const { icon, bgColor } = comp.elementProps as LinkWidgetElementProps;
							return (
								<div
									key={comp.id}
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
				</ContextMenuTrigger>
				<BaseContextMenu componentAtom={componentAtom} />
			</ContextMenu>
		</>
	);
};
