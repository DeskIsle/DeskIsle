import { type BaseComponentMeta, componentsRegistry } from "@/atoms/components";
import { cn } from "@/lib/utils";
import { type MotionProps, motion } from "framer-motion";
import { type PrimitiveAtom, useAtom } from "jotai";
import type React from "react";
import { type MouseEventHandler, forwardRef } from "react";

interface CompProps extends MotionProps {
	componentAtom: PrimitiveAtom<BaseComponentMeta>;
	preview?: boolean;
	className?: string;
	onClickCapture?: MouseEventHandler<HTMLDivElement>;
}
export const WidgetWrapper = forwardRef<HTMLDivElement, CompProps>(
	({ componentAtom, preview, onClickCapture, className, ...props }, ref) => {
		const [component] = useAtom(componentAtom);
		const { element, elementProps } = component;
		const Element = componentsRegistry[element].Element as React.ElementType<typeof elementProps>;
		return (
			<motion.div
				onClickCapture={onClickCapture}
				ref={ref}
				className={cn(className, "w-full h-full bg-transparent rounded-lg")}
				{...props}
			>
				<Element {...elementProps} />
			</motion.div>
		);
	},
);

WidgetWrapper.displayName = "WidgetWrapper";
