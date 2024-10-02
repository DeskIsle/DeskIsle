import { useComponentAtom } from "@/atoms/components";
import { type BaseComponentMeta, componentsRegistry } from "@/atoms/components";
import { cn } from "@/lib/utils";
import { type MotionProps, motion } from "framer-motion";
import { type PrimitiveAtom, useAtom } from "jotai";
import type React from "react";
import { useContext } from "react";
import { type MouseEventHandler, forwardRef } from "react";
import { createContext } from "react";
import { BaseContextMenu } from "../common/context-menu";

interface WidgitWrapperProps extends MotionProps {
	componentAtom: PrimitiveAtom<BaseComponentMeta>;
	preview?: boolean;
	className?: string;
	onClickCapture?: MouseEventHandler<HTMLDivElement>;
}

// biome-ignore lint/style/noNonNullAssertion: context must be initialized
export const CurrentComponentAtomContext = createContext<PrimitiveAtom<BaseComponentMeta>>(null!);

export function useCurrentComponent() {
	return useComponentAtom(useContext(CurrentComponentAtomContext));
}

export const WidgetWrapper = forwardRef<HTMLDivElement, WidgitWrapperProps>(
	({ componentAtom, preview, onClickCapture, className, ...props }, ref) => {
		const [component] = useAtom(componentAtom);
		const { element, elementProps } = component;
		const Element = componentsRegistry[element].Element as React.ElementType<typeof elementProps>;
		return (
			<motion.div
				onClickCapture={onClickCapture}
				ref={ref}
				className={cn(className, "bg-transparent rounded-lg")}
				{...props}
			>
				<CurrentComponentAtomContext.Provider value={componentAtom}>
					<BaseContextMenu menus={[]}>
						<Element {...elementProps} />
					</BaseContextMenu>
				</CurrentComponentAtomContext.Provider>
			</motion.div>
		);
	},
);

WidgetWrapper.displayName = "WidgetWrapper";
