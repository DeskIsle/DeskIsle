import type { SVGProps } from "react";

export function ClarityRemoveSolid(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			role="img"
			aria-label="Emoji"
			viewBox="0 0 36 36"
			{...props}
		>
			<path
				fill="#ff0000"
				d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m8 22.1a1.4 1.4 0 0 1-2 2l-6-6l-6 6.02a1.4 1.4 0 1 1-2-2l6-6.04l-6.17-6.22a1.4 1.4 0 1 1 2-2L18 16.1l6.17-6.17a1.4 1.4 0 1 1 2 2L20 18.08Z"
				className="clr-i-solid clr-i-solid-path-1"
			>
			</path>
			<path fill="none" d="M0 0h36v36H0z" />
		</svg>
	);
}
