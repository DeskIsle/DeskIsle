import { useRef } from "react";

export interface IFrameWidgetProps {
	src: string;
	scale?: number;
}

export default function IFrameWidget({ src, scale }: IFrameWidgetProps) {
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const maskRef = useRef<HTMLDivElement>(null);
	return (
		<>
			<div
				style={{ transform: `scale(${scale})` }}
				className={`w-full h-full relative`}
			>
				<iframe
					ref={iframeRef}
					title={src}
					src={src}
					className="w-full h-full"
				/>
			</div>
			<div ref={maskRef} className="absolute w-full h-full" />
		</>
	);
}
