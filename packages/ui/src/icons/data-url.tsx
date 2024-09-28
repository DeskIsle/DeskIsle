import type { HTMLAttributes } from "react";

interface DataUrlIconProps extends HTMLAttributes<HTMLImageElement> {
	src: string;
	className?: string;
}

export function DataUrlIcon({ src, className, ...props }: DataUrlIconProps) {
	return <img className={className} draggable={false} {...props} alt={props["aria-label"]} src={src} />;
}
