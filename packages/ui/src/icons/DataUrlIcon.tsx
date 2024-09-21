import type { HTMLAttributes } from "react";

interface DataUrlIconProps extends HTMLAttributes<HTMLDivElement> {
	src: string;
	className?: string;
}

export default function DataUrlIcon({ src, className, ...props }: DataUrlIconProps) {
	return <img className={className} draggable={false} {...props} alt="" src={src} />;
}
