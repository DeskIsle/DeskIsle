import { componentsRegistry } from "@/atoms/components";
import { useCurrentComponent } from "@/components/widgets/widget-wrapper";
import { RadixIconsDimensions } from "@/icons/radix";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { ContextMenuItem } from "../ui/context-menu";

export function ResizeMenuItem() {
	const { component, resizeComponent } = useCurrentComponent();
	const sizes = componentsRegistry[component.element].optionalSizes;

	return (
		<div className="relative flex gap-1 flex-col cursor-default select-none justify-center rounded-sm px-2 py-1.5 text-sm outline-none">
			<div className="flex gap-2 items-center">
				<RadixIconsDimensions className="text-md" />
				<span>布局</span>
			</div>
			<div className="grid grid-cols-3 gap-1">
				{sizes.map((size, index) => (
					<ContextMenuItem key={`${size.w}-${size.h}-${index}`} className="p-0">
						<Button
							variant="outline"
							className="w-full p-2 h-[2rem]"
							type="button"
							onClick={() => resizeComponent(size.w, size.h)}
						>
							{size.w}x{size.h}
						</Button>
					</ContextMenuItem>
				))}
			</div>
		</div>
	);
}

export function DeleteMenuItem() {
	const { deleteComponent } = useCurrentComponent();
	return (
		<ContextMenuItem
			onClick={deleteComponent}
			className="flex gap-2 text-[#FF0000] focus:text-[#FF0000] focus:bg-[#FFDBDC]"
		>
			<TrashIcon />
			<span>Delete</span>
		</ContextMenuItem>
	);
}
