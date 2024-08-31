import type { SVGProps } from "react";

// from: https://icones.js.org/collection/meteocons

export function MeteoconsClearDayFill(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 512 512"
			role="img"
			aria-label="Emoji"
			{...props}
		>
			<defs>
				<linearGradient
					id="meteoconsClearDayFill0"
					x1="150"
					x2="234"
					y1="119.2"
					y2="264.8"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#fbbf24" />
					<stop offset=".5" stopColor="#fbbf24" />
					<stop offset="1" stopColor="#f59e0b" />
				</linearGradient>
				<symbol id="meteoconsClearDayFill1" viewBox="0 0 384 384">
					<circle
						cx="192"
						cy="192"
						r="84"
						fill="url(#meteoconsClearDayFill0)"
						stroke="#f8af18"
						strokeMiterlimit="10"
						strokeWidth="6"
					/>
					<path
						fill="none"
						stroke="#fbbf24"
						strokeLinecap="round"
						strokeMiterlimit="10"
						strokeWidth="24"
						d="M192 61.7V12m0 360v-49.7m92.2-222.5l35-35M64.8 319.2l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M61.7 192H12m360 0h-49.7"
					>
						<animateTransform
							additive="sum"
							attributeName="transform"
							dur="6s"
							repeatCount="indefinite"
							type="rotate"
							values="0 192 192; 45 192 192"
						/>
					</path>
				</symbol>
			</defs>
			<use
				width="384"
				height="384"
				href="#meteoconsClearDayFill1"
				transform="translate(64 64)"
			/>
		</svg>
	);
}

export function MeteoconsClearNightFill(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			role="img"
			aria-label="Emoji"
			height="1em"
			viewBox="0 0 512 512"
			{...props}
		>
			<defs>
				<linearGradient
					id="meteoconsClearNightFill0"
					x1="54.3"
					x2="187.2"
					y1="29"
					y2="259.1"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#86c3db" />
					<stop offset=".5" stopColor="#86c3db" />
					<stop offset="1" stopColor="#5eafcf" />
				</linearGradient>
				<symbol id="meteoconsClearNightFill1" viewBox="0 0 270 270">
					<path
						fill="url(#meteoconsClearNightFill0)"
						stroke="#72b9d5"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="6"
						d="M252.3 168.6A133.4 133.4 0 0 1 118 36.2A130.5 130.5 0 0 1 122.5 3A133 133 0 0 0 3 134.6C3 207.7 63 267 137.2 267c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"
					>
						<animateTransform
							additive="sum"
							attributeName="transform"
							dur="6s"
							repeatCount="indefinite"
							type="rotate"
							values="-15 135 135; 9 135 135; -15 135 135"
						/>
					</path>
				</symbol>
			</defs>
			<use
				width="270"
				height="270"
				href="#meteoconsClearNightFill1"
				transform="translate(121 121)"
			/>
		</svg>
	);
}

export function MeteoconsCloudyFill(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 512 512"
			{...props}
			role="img"
			aria-label="Emoji"
		>
			<defs>
				<linearGradient
					id="meteoconsCloudyFill0"
					x1="99.5"
					x2="232.6"
					y1="30.7"
					y2="261.4"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#f3f7fe" />
					<stop offset=".5" stopColor="#f3f7fe" />
					<stop offset="1" stopColor="#deeafb" />
				</linearGradient>
				<symbol id="meteoconsCloudyFill1" viewBox="0 0 350 222">
					<path
						fill="url(#meteoconsCloudyFill0)"
						stroke="#e6effc"
						strokeMiterlimit="10"
						strokeWidth="6"
						d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
					>
					</path>
				</symbol>
			</defs>
			<use
				width="350"
				height="222"
				href="#meteoconsCloudyFill1"
				transform="translate(81 145)"
			>
				<animateTransform
					additive="sum"
					attributeName="transform"
					dur="6s"
					repeatCount="indefinite"
					type="translate"
					values="-18 0; 18 0; -18 0"
				>
				</animateTransform>
			</use>
		</svg>
	);
}

export function MeteoconsDrizzleFill(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 512 512"
			role="img"
			aria-label="Emoji"
			{...props}
		>
			<defs>
				<linearGradient
					id="meteoconsDrizzleFill0"
					x1="99.5"
					x2="232.6"
					y1="30.7"
					y2="261.4"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#f3f7fe" />
					<stop offset=".5" stopColor="#f3f7fe" />
					<stop offset="1" stopColor="#deeafb" />
				</linearGradient>
				<linearGradient
					id="meteoconsDrizzleFill1"
					x1="1314.8"
					x2="1324.2"
					y1="-739.9"
					y2="-715.3"
					gradientTransform="rotate(-9 7682.04 6929.539)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#0b65ed" />
					<stop offset=".5" stopColor="#0a5ad4" />
					<stop offset="1" stopColor="#0950bc" />
				</linearGradient>
				<linearGradient
					id="meteoconsDrizzleFill2"
					x1="1370.1"
					x2="1379.5"
					y1="-731.1"
					y2="-706.5"
					href="#meteoconsDrizzleFill1"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDrizzleFill3"
					x1="1425.4"
					x2="1434.9"
					y1="-722.4"
					y2="-697.8"
					href="#meteoconsDrizzleFill1"
				>
				</linearGradient>
				<symbol id="meteoconsDrizzleFill4" viewBox="0 0 350 222">
					<path
						fill="url(#meteoconsDrizzleFill0)"
						stroke="#e6effc"
						strokeMiterlimit="10"
						strokeWidth="6"
						d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
					>
					</path>
				</symbol>
			</defs>
			<use
				width="350"
				height="222"
				href="#meteoconsDrizzleFill4"
				transform="translate(81 145)"
			>
			</use>
			<path
				fill="url(#meteoconsDrizzleFill1)"
				stroke="#0a5ad4"
				strokeMiterlimit="10"
				d="M200 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z"
				opacity="0"
			>
				<animateTransform
					id="meteoconsDrizzleFill5"
					additive="sum"
					attributeName="transform"
					begin="0s; x1.end+1s"
					dur="1s"
					keyTimes="0; .25; 1"
					type="translate"
					values="0 -32; 0 -32; 0 120;"
				>
				</animateTransform>
				<animate
					id="meteoconsDrizzleFill6"
					attributeName="opacity"
					begin="0s; y1.end+1s"
					dur="1s"
					keyTimes="0; .25; 1"
					values="0; 1; 0"
				>
				</animate>
			</path>
			<path
				fill="url(#meteoconsDrizzleFill2)"
				stroke="#0a5ad4"
				strokeMiterlimit="10"
				d="M256 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z"
				opacity="0"
			>
				<animateTransform
					id="meteoconsDrizzleFill7"
					additive="sum"
					attributeName="transform"
					begin="1.34s; x2.end+1s"
					dur="1s"
					keyTimes="0; .25; 1"
					type="translate"
					values="0 -32; 0 -32; 0 120;"
				>
				</animateTransform>
				<animate
					id="meteoconsDrizzleFill8"
					attributeName="opacity"
					begin="1.34s; y2.end+1s"
					dur="1s"
					keyTimes="0; .25; 1"
					values="0; 1; 0"
				>
				</animate>
			</path>
			<path
				fill="url(#meteoconsDrizzleFill3)"
				stroke="#0a5ad4"
				strokeMiterlimit="10"
				d="M312 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z"
				opacity="0"
			>
				<animateTransform
					id="meteoconsDrizzleFill9"
					additive="sum"
					attributeName="transform"
					begin=".67s; x3.end+1s"
					dur="1s"
					keyTimes="0; .25; 1"
					type="translate"
					values="0 -32; 0 -32; 0 120;"
				>
				</animateTransform>
				<animate
					id="meteoconsDrizzleFilla"
					attributeName="opacity"
					begin=".67s; y3.end+1s"
					dur="1s"
					keyTimes="0; .25; 1"
					values="0; 1; 0"
				>
				</animate>
			</path>
		</svg>
	);
}

export function MeteoconsDustFill(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			role="img"
			aria-label="Emoji"
			viewBox="0 0 512 512"
			{...props}
		>
			<defs>
				<linearGradient
					id="meteoconsDustFill0"
					x1="99.5"
					x2="232.6"
					y1="30.7"
					y2="261.4"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#f3f7fe" />
					<stop offset=".5" stopColor="#f3f7fe" />
					<stop offset="1" stopColor="#deeafb" />
				</linearGradient>
				<linearGradient
					id="meteoconsDustFill1"
					x1="6"
					x2="18"
					y1="169.6"
					y2="190.4"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#fde68a" />
					<stop offset=".5" stopColor="#fde68a" />
					<stop offset="1" stopColor="#fde171" />
				</linearGradient>
				<linearGradient
					id="meteoconsDustFill2"
					x1="66"
					x2="78"
					y1="169.6"
					y2="190.4"
					href="#meteoconsDustFill1"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustFill3"
					x1="38"
					x2="50"
					y1="137.6"
					y2="158.4"
					href="#meteoconsDustFill1"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustFill4"
					x1="98"
					x2="110"
					y1="137.6"
					y2="158.4"
					href="#meteoconsDustFill1"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustFill5"
					x1="70"
					x2="82"
					y1="101.6"
					y2="122.4"
					href="#meteoconsDustFill1"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustFill6"
					x1="130"
					x2="142"
					y1="101.6"
					y2="122.4"
					href="#meteoconsDustFill1"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustFill7"
					x1="102"
					x2="114"
					y1="69.6"
					y2="90.4"
					href="#meteoconsDustFill1"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustFill8"
					x1="162"
					x2="174"
					y1="69.6"
					y2="90.4"
					href="#meteoconsDustFill1"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustFill9"
					x1="134"
					x2="146"
					y1="33.6"
					y2="54.4"
					href="#meteoconsDustFill1"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustFilla"
					x1="194"
					x2="206"
					y1="33.6"
					y2="54.4"
					href="#meteoconsDustFill1"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustFillb"
					x1="166"
					x2="178"
					y1="1.6"
					y2="22.4"
					href="#meteoconsDustFill1"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustFillc"
					x1="226"
					x2="238"
					y1="1.6"
					y2="22.4"
					href="#meteoconsDustFill1"
				>
				</linearGradient>
				<symbol id="meteoconsDustFilld" viewBox="0 0 350 222">
					<path
						fill="url(#meteoconsDustFill0)"
						stroke="#e6effc"
						strokeMiterlimit="10"
						strokeWidth="6"
						d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
					>
					</path>
				</symbol>
				<symbol id="meteoconsDustFille" viewBox="0 0 244 192">
					<circle cx="12" cy="180" r="12" fill="url(#meteoconsDustFill1)">
						<animate
							attributeName="opacity"
							begin="-1s"
							dur=".67s"
							repeatCount="indefinite"
							values=".5; 1; .5"
						>
						</animate>
					</circle>
					<circle cx="72" cy="180" r="12" fill="url(#meteoconsDustFill2)">
						<animate
							attributeName="opacity"
							begin="-1.08s"
							dur=".67s"
							repeatCount="indefinite"
							values=".5; 1; .5"
						>
						</animate>
					</circle>
					<circle cx="44" cy="148" r="12" fill="url(#meteoconsDustFill3)">
						<animate
							attributeName="opacity"
							begin="-1.16s"
							dur=".67s"
							repeatCount="indefinite"
							values=".5; 1; .5"
						>
						</animate>
					</circle>
					<circle cx="104" cy="148" r="12" fill="url(#meteoconsDustFill4)">
						<animate
							attributeName="opacity"
							begin="-1.24s"
							dur=".67s"
							repeatCount="indefinite"
							values=".5; 1; .5"
						>
						</animate>
					</circle>
					<circle cx="76" cy="112" r="12" fill="url(#meteoconsDustFill5)">
						<animate
							attributeName="opacity"
							begin="-1.32s"
							dur=".67s"
							repeatCount="indefinite"
							values=".5; 1; .5"
						>
						</animate>
					</circle>
					<circle cx="136" cy="112" r="12" fill="url(#meteoconsDustFill6)">
						<animate
							attributeName="opacity"
							begin="-1.40s"
							dur=".67s"
							repeatCount="indefinite"
							values=".5; 1; .5"
						>
						</animate>
					</circle>
					<circle cx="108" cy="80" r="12" fill="url(#meteoconsDustFill7)">
						<animate
							attributeName="opacity"
							begin="-1.48s"
							dur=".67s"
							repeatCount="indefinite"
							values=".5; 1; .5"
						>
						</animate>
					</circle>
					<circle cx="168" cy="80" r="12" fill="url(#meteoconsDustFill8)">
						<animate
							attributeName="opacity"
							begin="-1.56s"
							dur=".67s"
							repeatCount="indefinite"
							values=".5; 1; .5"
						>
						</animate>
					</circle>
					<circle cx="140" cy="44" r="12" fill="url(#meteoconsDustFill9)">
						<animate
							attributeName="opacity"
							begin="-1.64s"
							dur=".67s"
							repeatCount="indefinite"
							values=".5; 1; .5"
						>
						</animate>
					</circle>
					<circle cx="200" cy="44" r="12" fill="url(#meteoconsDustFilla)">
						<animate
							attributeName="opacity"
							begin="-1.72s"
							dur=".67s"
							repeatCount="indefinite"
							values=".5; 1; .5"
						>
						</animate>
					</circle>
					<circle cx="172" cy="12" r="12" fill="url(#meteoconsDustFillb)">
						<animate
							attributeName="opacity"
							begin="-1.80s"
							dur=".67s"
							repeatCount="indefinite"
							values=".5; 1; .5"
						>
						</animate>
					</circle>
					<circle cx="232" cy="12" r="12" fill="url(#meteoconsDustFillc)">
						<animate
							attributeName="opacity"
							begin="-1.88s"
							dur=".67s"
							repeatCount="indefinite"
							values=".5; 1; .5"
						>
						</animate>
					</circle>
				</symbol>
				<clipPath id="meteoconsDustFillf">
					<path fill="none" d="M0 0h512L0 512V0z" />
				</clipPath>
			</defs>
			<g clipPath="url(#meteoconsDustFillf)">
				<use
					width="350"
					height="222"
					href="#meteoconsDustFilld"
					transform="translate(85 145)"
				>
				</use>
			</g>
			<use
				width="244"
				height="192"
				href="#meteoconsDustFille"
				transform="translate(192 182)"
			>
			</use>
		</svg>
	);
}

export function MeteoconsDustWindFill(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 512 512"
			role="img"
			aria-label="Emoji"
			{...props}
		>
			<defs>
				<linearGradient
					id="meteoconsDustWindFill0"
					x1="138.5"
					x2="224.2"
					y1="5.1"
					y2="153.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#d4d7dd" />
					<stop offset=".5" stopColor="#d4d7dd" />
					<stop offset="1" stopColor="#bec1c6" />
				</linearGradient>
				<linearGradient
					id="meteoconsDustWindFill1"
					x1="77.7"
					x2="169"
					y1="96.2"
					y2="254.4"
					href="#meteoconsDustWindFill0"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustWindFill2"
					x1="90"
					x2="102"
					y1="185.6"
					y2="206.4"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#fde68a" />
					<stop offset=".5" stopColor="#fde68a" />
					<stop offset="1" stopColor="#fde171" />
				</linearGradient>
				<linearGradient
					id="meteoconsDustWindFill3"
					x1="174"
					x2="186"
					y1="185.6"
					y2="206.4"
					href="#meteoconsDustWindFill2"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustWindFill4"
					x1="258"
					x2="270"
					y1="185.6"
					y2="206.4"
					href="#meteoconsDustWindFill2"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustWindFill5"
					x1="216"
					x2="228"
					y1="245.6"
					y2="266.4"
					href="#meteoconsDustWindFill2"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustWindFill6"
					x1="300"
					x2="312"
					y1="245.6"
					y2="266.4"
					href="#meteoconsDustWindFill2"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustWindFill7"
					x1="384"
					x2="396"
					y1="245.6"
					y2="266.4"
					href="#meteoconsDustWindFill2"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustWindFill8"
					x1="166"
					x2="178"
					y1="305.6"
					y2="326.4"
					href="#meteoconsDustWindFill2"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustWindFill9"
					x1="250"
					x2="262"
					y1="305.6"
					y2="326.4"
					href="#meteoconsDustWindFill2"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsDustWindFilla"
					x1="334"
					x2="346"
					y1="305.6"
					y2="326.4"
					href="#meteoconsDustWindFill2"
				>
				</linearGradient>
				<symbol id="meteoconsDustWindFillb" viewBox="0 0 348 240">
					<path
						fill="none"
						stroke="url(#meteoconsDustWindFill0)"
						strokeDasharray="148"
						strokeLinecap="round"
						strokeMiterlimit="10"
						strokeWidth="24"
						d="M267.2 24.3A40 40 0 1 1 296 92H12"
					>
						<animate
							attributeName="stroke-dashoffset"
							dur="6s"
							repeatCount="indefinite"
							values="0; 2960"
						>
						</animate>
					</path>
					<path
						fill="none"
						stroke="url(#meteoconsDustWindFill1)"
						strokeDasharray="110"
						strokeLinecap="round"
						strokeMiterlimit="10"
						strokeWidth="24"
						d="M151.2 215.7A40 40 0 1 0 180 148H12"
					>
						<animate
							attributeName="stroke-dashoffset"
							dur="6s"
							repeatCount="indefinite"
							values="0; 1540"
						>
						</animate>
					</path>
				</symbol>
			</defs>
			<g opacity="0">
				<circle
					cx="96"
					cy="196"
					r="12"
					fill="url(#meteoconsDustWindFill2)"
				>
				</circle>
				<circle
					cx="222"
					cy="256"
					r="12"
					fill="url(#meteoconsDustWindFill5)"
				>
				</circle>
				<circle
					cx="172"
					cy="316"
					r="12"
					fill="url(#meteoconsDustWindFill8)"
				>
				</circle>
				<animateTransform
					id="meteoconsDustWindFillc"
					additive="sum"
					attributeName="transform"
					begin="1s; x1.end+1.17s"
					dur=".83s"
					type="translate"
					values="-24 0; 24 0"
				>
				</animateTransform>
				<animate
					id="meteoconsDustWindFilld"
					attributeName="opacity"
					begin="1s; y1.end+1.17s"
					dur=".83s"
					keyTimes="0; .17; .83; 1"
					values="0; 1; 1; 0"
				>
				</animate>
			</g>
			<g opacity="0">
				<circle
					cx="180"
					cy="196"
					r="12"
					fill="url(#meteoconsDustWindFill3)"
				>
				</circle>
				<circle
					cx="306"
					cy="256"
					r="12"
					fill="url(#meteoconsDustWindFill6)"
				>
				</circle>
				<circle
					cx="256"
					cy="316"
					r="12"
					fill="url(#meteoconsDustWindFill9)"
				>
				</circle>
				<animateTransform
					id="meteoconsDustWindFille"
					additive="sum"
					attributeName="transform"
					begin=".5s; x2.end+1.17s"
					dur=".83s"
					type="translate"
					values="-24 0; 24 0"
				>
				</animateTransform>
				<animate
					id="meteoconsDustWindFillf"
					attributeName="opacity"
					begin=".5s; y2.end+1.17s"
					dur=".83s"
					keyTimes="0; .17; .83; 1"
					values="0; 1; 1; 0"
				>
				</animate>
			</g>
			<g opacity="0">
				<circle
					cx="264"
					cy="196"
					r="12"
					fill="url(#meteoconsDustWindFill4)"
				>
				</circle>
				<circle
					cx="390"
					cy="256"
					r="12"
					fill="url(#meteoconsDustWindFill7)"
				>
				</circle>
				<circle
					cx="340"
					cy="316"
					r="12"
					fill="url(#meteoconsDustWindFilla)"
				>
				</circle>
				<animateTransform
					id="meteoconsDustWindFillg"
					additive="sum"
					attributeName="transform"
					begin="0s; x3.end+1.17s"
					dur=".83s"
					type="translate"
					values="-24 0; 24 0"
				>
				</animateTransform>
				<animate
					id="meteoconsDustWindFillh"
					attributeName="opacity"
					begin="0s; y3.end+1.17s"
					dur=".83s"
					keyTimes="0; .17; .83; 1"
					values="0; 1; 1; 0"
				>
				</animate>
			</g>
			<use
				width="348"
				height="240"
				href="#meteoconsDustWindFillb"
				transform="translate(83 136)"
			>
			</use>
		</svg>
	);
}

export function MeteoconsFogFill(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 512 512"
			role="img"
			aria-label="Emoji"
			{...props}
		>
			<defs>
				<linearGradient
					id="meteoconsFogFill0"
					x1="99.5"
					x2="232.6"
					y1="30.7"
					y2="261.4"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#f3f7fe" />
					<stop offset=".5" stopColor="#f3f7fe" />
					<stop offset="1" stopColor="#deeafb" />
				</linearGradient>
				<linearGradient
					id="meteoconsFogFill1"
					x1="96"
					x2="168"
					y1="-2.4"
					y2="122.3"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#d4d7dd" />
					<stop offset=".5" stopColor="#d4d7dd" />
					<stop offset="1" stopColor="#bec1c6" />
				</linearGradient>
				<linearGradient
					id="meteoconsFogFill2"
					x2="168"
					y1="-50.4"
					y2="74.3"
					href="#meteoconsFogFill1"
				>
				</linearGradient>
				<symbol id="meteoconsFogFill3" viewBox="0 0 350 222">
					<path
						fill="url(#meteoconsFogFill0)"
						stroke="#e6effc"
						strokeMiterlimit="10"
						strokeWidth="6"
						d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
					>
					</path>
				</symbol>
				<symbol id="meteoconsFogFill4" viewBox="0 0 264 72">
					<path
						fill="none"
						stroke="url(#meteoconsFogFill1)"
						strokeLinecap="round"
						strokeMiterlimit="10"
						strokeWidth="24"
						d="M12 60h240"
					>
						<animateTransform
							additive="sum"
							attributeName="transform"
							dur="6s"
							repeatCount="indefinite"
							type="translate"
							values="-24 0; 24 0; -24 0"
						>
						</animateTransform>
					</path>
					<path
						fill="none"
						stroke="url(#meteoconsFogFill2)"
						strokeLinecap="round"
						strokeMiterlimit="10"
						strokeWidth="24"
						d="M12 12h240"
					>
						<animateTransform
							additive="sum"
							attributeName="transform"
							dur="6s"
							repeatCount="indefinite"
							type="translate"
							values="24 0; -24 0; 24 0"
						>
						</animateTransform>
					</path>
				</symbol>
			</defs>
			<use
				width="350"
				height="222"
				href="#meteoconsFogFill3"
				transform="translate(81 145)"
			>
			</use>
			<use
				width="264"
				height="72"
				href="#meteoconsFogFill4"
				transform="translate(124 402)"
			>
			</use>
		</svg>
	);
}

export function MeteoconsHurricaneFill(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 512 512"
			role="img"
			aria-label="Emoji"
			{...props}
		>
			<defs>
				<linearGradient
					id="meteoconsHurricaneFill0"
					x1="175.8"
					x2="336.2"
					y1="117"
					y2="395"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#d4d7dd" />
					<stop offset=".5" stopColor="#d4d7dd" />
					<stop offset="1" stopColor="#bec1c6" />
				</linearGradient>
			</defs>
			<path
				fill="none"
				stroke="url(#meteoconsHurricaneFill0)"
				strokeLinecap="round"
				strokeMiterlimit="10"
				strokeWidth="24"
				d="M344 256a88 88 0 1 1-88-88a88 88 0 0 1 88 88ZM200 116.9l-3.8 7.7A269.7 269.7 0 0 0 169 267h0m143.1 128l3.8-7.7A269.7 269.7 0 0 0 343.2 245h0"
			>
				<animateTransform
					additive="sum"
					attributeName="transform"
					dur="6s"
					repeatCount="indefinite"
					type="rotate"
					values="1440 256 256; 0 256 256"
				>
				</animateTransform>
			</path>
		</svg>
	);
}

export function MeteoconsOvercastDayRainFill(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 512 512"
			role="img"
			aria-label="Emoji"
			{...props}
		>
			<defs>
				<linearGradient
					id="meteoconsOvercastDayRainFill0"
					x1="99.5"
					x2="232.6"
					y1="30.7"
					y2="261.4"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#f3f7fe" />
					<stop offset=".5" stopColor="#f3f7fe" />
					<stop offset="1" stopColor="#deeafb" />
				</linearGradient>
				<linearGradient
					id="meteoconsOvercastDayRainFill1"
					x1="52.7"
					x2="133.4"
					y1="9.6"
					y2="149.3"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#9ca3af" />
					<stop offset=".5" stopColor="#9ca3af" />
					<stop offset="1" stopColor="#6b7280" />
				</linearGradient>
				<linearGradient
					id="meteoconsOvercastDayRainFill2"
					x1="1381.3"
					x2="1399.5"
					y1="-1144.7"
					y2="-1097.4"
					gradientTransform="rotate(-9 8002.567 8233.063)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#0b65ed" />
					<stop offset=".5" stopColor="#0a5ad4" />
					<stop offset="1" stopColor="#0950bc" />
				</linearGradient>
				<linearGradient
					id="meteoconsOvercastDayRainFill3"
					x1="1436.7"
					x2="1454.9"
					y1="-1137"
					y2="-1089.7"
					gradientTransform="rotate(-9 8009.537 8233.037)"
					href="#meteoconsOvercastDayRainFill2"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsOvercastDayRainFill4"
					x1="1492.1"
					x2="1510.3"
					y1="-1129.3"
					y2="-1082.1"
					gradientTransform="rotate(-9 8016.566 8233.078)"
					href="#meteoconsOvercastDayRainFill2"
				>
				</linearGradient>
				<linearGradient
					id="meteoconsOvercastDayRainFill5"
					x1="78"
					x2="118"
					y1="63.4"
					y2="132.7"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#fbbf24" />
					<stop offset=".5" stopColor="#fbbf24" />
					<stop offset="1" stopColor="#f59e0b" />
				</linearGradient>
				<symbol id="meteoconsOvercastDayRainFill6" viewBox="0 0 196 196">
					<circle
						cx="98"
						cy="98"
						r="40"
						fill="url(#meteoconsOvercastDayRainFill5)"
						stroke="#f8af18"
						strokeMiterlimit="10"
						strokeWidth="4"
					>
					</circle>
					<path
						fill="none"
						stroke="#fbbf24"
						strokeLinecap="round"
						strokeMiterlimit="10"
						strokeWidth="12"
						d="M98 31.4V6m0 184v-25.4M145.1 51l18-17.9M33 163l18-17.9M51 51L33 33m130.1 130.1l-18-18M6 98h25.4M190 98h-25.4"
					>
						<animateTransform
							additive="sum"
							attributeName="transform"
							dur="6s"
							repeatCount="indefinite"
							type="rotate"
							values="0 98 98; 45 98 98"
						>
						</animateTransform>
					</path>
				</symbol>
				<symbol id="meteoconsOvercastDayRainFill7" viewBox="0 0 200.3 126.1">
					<path
						fill="url(#meteoconsOvercastDayRainFill1)"
						stroke="#848b98"
						strokeMiterlimit="10"
						d="M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z"
					>
					</path>
				</symbol>
				<symbol id="meteoconsOvercastDayRainFill8" viewBox="0 0 350 222">
					<path
						fill="url(#meteoconsOvercastDayRainFill0)"
						stroke="#e6effc"
						strokeMiterlimit="10"
						strokeWidth="6"
						d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
					>
					</path>
				</symbol>
				<symbol id="meteoconsOvercastDayRainFill9" viewBox="0 0 398 222">
					<use
						width="200.3"
						height="126.1"
						href="#meteoconsOvercastDayRainFill7"
						transform="translate(198 27)"
					>
						<animateTransform
							additive="sum"
							attributeName="transform"
							dur="6s"
							repeatCount="indefinite"
							type="translate"
							values="-9 0; 9 0; -9 0"
						>
						</animateTransform>
					</use>
					<use width="350" height="222" href="#meteoconsOvercastDayRainFill8">
						<animateTransform
							additive="sum"
							attributeName="transform"
							dur="6s"
							repeatCount="indefinite"
							type="translate"
							values="-18 0; 18 0; -18 0"
						>
						</animateTransform>
					</use>
				</symbol>
				<symbol id="meteoconsOvercastDayRainFilla" viewBox="0 0 410.8 258">
					<use
						width="196"
						height="196"
						href="#meteoconsOvercastDayRainFill6"
					>
					</use>
					<use
						width="398"
						height="222"
						href="#meteoconsOvercastDayRainFill9"
						transform="translate(12.84 36)"
					>
					</use>
				</symbol>
				<symbol id="meteoconsOvercastDayRainFillb" viewBox="0 0 129 57">
					<path
						fill="url(#meteoconsOvercastDayRainFill2)"
						stroke="#0a5ad4"
						strokeMiterlimit="10"
						d="M8.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z"
						opacity="0"
					>
						<animateTransform
							id="meteoconsOvercastDayRainFillc"
							additive="sum"
							attributeName="transform"
							begin="0s; x1.end+.33s"
							dur=".67s"
							type="translate"
							values="0 -60; 0 60"
						>
						</animateTransform>
						<animate
							id="meteoconsOvercastDayRainFilld"
							attributeName="opacity"
							begin="0s; y1.end+.33s"
							dur=".67s"
							keyTimes="0; .25; 1"
							values="0; 1; 0"
						>
						</animate>
					</path>
					<path
						fill="url(#meteoconsOvercastDayRainFill3)"
						stroke="#0a5ad4"
						strokeMiterlimit="10"
						d="M64.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z"
						opacity="0"
					>
						<animateTransform
							id="meteoconsOvercastDayRainFille"
							additive="sum"
							attributeName="transform"
							begin=".33s; x2.end+.33s"
							dur=".67s"
							type="translate"
							values="0 -60; 0 60"
						>
						</animateTransform>
						<animate
							id="meteoconsOvercastDayRainFillf"
							attributeName="opacity"
							begin=".33s; y2.end+.33s"
							dur=".67s"
							keyTimes="0; .25; 1"
							values="0; 1; 0"
						>
						</animate>
					</path>
					<path
						fill="url(#meteoconsOvercastDayRainFill4)"
						stroke="#0a5ad4"
						strokeMiterlimit="10"
						d="M120.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z"
						opacity="0"
					>
						<animateTransform
							id="meteoconsOvercastDayRainFillg"
							additive="sum"
							attributeName="transform"
							begin="-.33s; x3.end+.33s"
							dur=".67s"
							type="translate"
							values="0 -60; 0 60"
						>
						</animateTransform>
						<animate
							id="meteoconsOvercastDayRainFillh"
							attributeName="opacity"
							begin="-.33s; y3.end+.33s"
							dur=".67s"
							keyTimes="0; .25; 1"
							values="0; 1; 0"
						>
						</animate>
					</path>
				</symbol>
			</defs>
			<use
				width="410.8"
				height="258"
				href="#meteoconsOvercastDayRainFilla"
				transform="translate(56 109)"
			>
			</use>
			<use
				width="129"
				height="57"
				href="#meteoconsOvercastDayRainFillb"
				transform="translate(191.5 343.5)"
			>
			</use>
		</svg>
	);
}
