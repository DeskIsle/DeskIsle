import React from "react";

export default function ClimaSvg({ weatherClass }: { weatherClass: string[] }) {
	return (
		<>
			<svg id="noise-svg">
				<filter id="noiseFilter">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.5"
						numOctaves="3"
						stitchTiles="stitch"
					/>
				</filter>
				<rect id="noise-rect" filter="url(#noiseFilter)" />
			</svg>
			<div className="outer-rim power-on">
				<div className="outer-rim-2">
					<div className="inner-rim relative top-2">
						<div className="outer-window">
							<div className="window">
								<div className="window-rounded">
									<svg
										className={weatherClass.join(" ")}
										id="mountains"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
										viewBox="0 0 875.7 446.1"
									>
										<defs>
											<clipPath id="clippath">
												<path
													d="M657.1,414.5c-48.8,21-204.4,7.1-235.4,7.6-32.7,1-35.2-6-76.3-13.8-11,6.6-159.8-26.3-108.6-31.5,1.6-1.1,.3-3.6,.4-4.3,.7-.9,6.8,3,7.3,2.3,1-4.7-20.7-12-16.3-15.8,3.5-2.7,11.3,1.2,11.9,.1-.4-1.7-7.8-6.6-3.5-10.6-.1-2.7-5.8-3.8-5.7-5.4,.2-2.1,9.7-2.5,9.9-4.7-8.8-7-.8-5.8-7.1-11.3-.7-2.7,1.8-12.5-.5-15.6,5.5,6.6,6.8,2.5,1.6-5.2-5.1-5.2-14-5.1-3.2-5.9-.9-12.5-4.2-11.2-9.3-15.5,1.9-2.9,1.4-13.6-.5-16,.3-3.7,208.5,13,486.5,36.9,32.3,27.8,39.3,63.2,26.5,79.1-9.2,11.5-27.5,11.3-32.6,11.2-8.6,15.5-27,13.3-45.1,18.4Z"
													style={{ fill: "none" }}
												/>
											</clipPath>
										</defs>
										<path
											id="sky"
											d="M873.8,7c-.1-1.6,0-3.2,.1-4.9H2.6V444.2H873.8V7h0Z"
										/>
										<g id="moon">
											<path
												d="M438,125.5c-2,1.5-3.5,3.4-4.4,5.6-.8,1.8-2.1,3.7-4.1,5.9-5.3,5.7-11.2,9.9-17.9,12.7-6.3,2.6-12.9,3.7-19.9,3.1-10-.8-19.3-4.4-28-11-.5-.4-.8-1.1-.5-1.8,.5-1.4,.7-2.7,.5-3.8-.1-1.2-.8-2.2-2-2.9-2.4-1.5-4.4-.8-5.9,2.1-.1,.2-.2,.4-.2,.7-.5,1.8-.8,1.7-1-.4,0-.5,0-.9,.2-1.4,.6-1.5,.6-2.7,0-3.7-2.3-3.6-4-7.4-5.1-11.5-.7-2.6-1-4.9-.9-6.8,0,0,.2-1,.6-2.9,.4-2-.6-2.8-3-2.4-.2,0-.5,.1-.9,.2-1.7,.6-1.9,.3-.7-1,.5-.4,1-.7,1.6-.9,1.2-.2,1.8-.8,1.7-1.7-.1-.5-.1-.8,0-1,1-5,2.1-9.9,3.6-14.8,0-.1,.1-.4,.1-.9,.1-.6,.4-.9,1-.9,.4,0,.7-.1,.9-.3,1.3-1.1,2.2-2.3,2.7-3.7,1.8-4.8,4.7-8.6,8.5-11.4,1.2-.9,1.7-1.8,1.5-2.8"
												style={{
													fill: "none",
													stroke: "#f2f2f3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M438,125.5c-2,1.5-3.5,3.4-4.4,5.6-.8,1.8-2.1,3.7-4.1,5.9-5.3,5.7-11.2,9.9-17.9,12.7-6.3,2.6-12.9,3.7-19.9,3.1-10-.8-19.3-4.4-28-11-.5-.4-.8-1.1-.5-1.8,.5-1.4,.7-2.7,.5-3.8-.1-1.2-.8-2.2-2-2.9-2.4-1.5-4.4-.8-5.9,2.1-.1,.2-.2,.4-.2,.7-.5,1.8-.8,1.7-1-.4,0-.5,0-.9,.2-1.4,.6-1.5,.6-2.7,0-3.7-2.3-3.6-4-7.4-5.1-11.5-.7-2.6-1-4.9-.9-6.8,0,0,.2-1,.6-2.9,.4-2-.6-2.8-3-2.4-.2,0-.5,.1-.9,.2-1.7,.6-1.9,.3-.7-1,.5-.4,1-.7,1.6-.9,1.2-.2,1.8-.8,1.7-1.7-.1-.5-.1-.8,0-1,1-5,2.1-9.9,3.6-14.8,0-.1,.1-.4,.1-.9,.1-.6,.4-.9,1-.9,.4,0,.7-.1,.9-.3,1.3-1.1,2.2-2.3,2.7-3.7,1.8-4.8,4.7-8.6,8.5-11.4,1.2-.9,1.7-1.8,1.5-2.8,15.6-6.1,30.3-5.6,44,1.5,6.2,3.2,11.5,7.4,16,12.5,6.6,7.6,10.6,16.6,12.1,27,.6,5.3,.5,10.8-.5,16.7h0Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M366.2,67.9c.2,1-.3,1.9-1.5,2.8-3.8,2.8-6.6,6.7-8.5,11.4-.5,1.3-1.4,2.6-2.7,3.7-.2,.2-.5,.3-.9,.3-.5,0-.9,.3-1,.9s-.1,.9-.1,.9c-1.5,4.9-2.6,9.8-3.6,14.8v1c.1,.8-.5,1.4-1.7,1.7-.6,.1-1.2,.4-1.6,.9-1.2,1.2-1,1.6,.7,1,.4-.1,.6-.2,.9-.2,2.4-.4,3.4,.4,3,2.4-.4,1.9-.6,2.8-.6,2.9-.1,1.9,.2,4.2,.9,6.8,1.1,4.1,2.8,8,5.1,11.5,.6,1,.6,2.2,0,3.7-.2,.4-.3,.9-.2,1.4,.2,2,.5,2.1,1,.4,.1-.3,.2-.5,.2-.7,1.5-2.9,3.5-3.6,5.9-2.1,1.2,.7,1.9,1.7,2,2.9,.1,1.1,0,2.4-.5,3.8-.2,.7,0,1.4,.5,1.8,8.6,6.6,17.9,10.3,28,11,7,.5,13.6-.5,19.9-3.1,6.6-2.8,12.6-7,17.9-12.7,2-2.1,3.3-4.1,4.1-5.9,.9-2.2,2.4-4.1,4.4-5.6-3.6,16.4-12.6,28.5-27,36.3-5.6,3.1-11.7,4.9-18.3,5.7-6.2,.7-12.4,.2-18.7-1.4-12.2-3.1-22-9.7-29.2-19.8-4.1-5.6-7-11.8-8.6-18.3-2.7-10.6-2-21.1,2.1-31.6,5.4-13.1,14.7-22.6,28.1-28.6h0Z"
												style={{ fill: "#e5e5e7" }}
											/>
											<circle
												cx="375.7"
												cy="85"
												r="6"
												style={{ fill: "#e5e5e7" }}
											/>
											<circle
												cx="394.8"
												cy="104.3"
												r="3.2"
												style={{ fill: "#e5e5e7" }}
											/>
											<ellipse
												cx="368.75"
												cy="110.67"
												rx="3.1"
												ry="3.2"
												transform="translate(78.16 363.22) rotate(-57.7)"
												style={{ fill: "#e5e5e7" }}
											/>
											<circle
												cx="420.6"
												cy="113.6"
												r="6.1"
												style={{ fill: "#e5e5e7" }}
											/>
											<circle
												cx="383.5"
												cy="124.5"
												r="2.2"
												style={{ fill: "#e5e5e7" }}
											/>
											<ellipse
												cx="407.51"
												cy="130.9"
												rx="1.2"
												ry="1.4"
												transform="translate(-20.51 129.36) rotate(-17.6)"
												style={{ fill: "#e5e5e7" }}
											/>
											<circle
												cx="392.6"
												cy="143.3"
												r="3.1"
												style={{ fill: "#e5e5e7" }}
											/>
										</g>
										<g id="stars">
											<path
												d="M408,32.3c-.6-.3-.6-.5,0-.8,3.8-1.6,5.9-3.8,6.5-6.7,.3-1.3,.6-1.3,1.1-.1,1.3,3.4,3.7,5.7,7.1,6.8,1.2,.4,1.1,.7,0,1-3.1,.8-5.5,3-7,6.7-.3,.7-.5,.7-.8,0-1.5-3.2-3.8-5.5-6.9-6.9h0Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M338.7,52.3c-.4-.2-.4-.4,0-.6,1.2-.6,2.2-1.4,2.9-2.6,.2-.4,.7-.5,1-.3l3.1,2.8c.3,.2,.1,.7-.2,.9-1.1,.6-2.1,1.4-2.8,2.4-.2,.3-.6,.3-.8,0-.9-1.1-1.9-2-3.2-2.6h0Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M481.3,79.4c-.3-.4-.3-1,0-1.4l2-2.3c.3-.3,.7-.4,1-.2,1,.8,1.9,1.7,2.5,2.8,.2,.3,.1,.8-.2,1.1l-2.3,2.5c-.2,.2-.6,.2-.8,0l-2.2-2.5h0Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M464.1,186.1c1.4,.4,1.4,.8,0,1.2-1.3,.4-2.2,1.3-2.7,2.7-.5,1.6-1,1.6-1.5,0-.4-1.4-1.2-2.2-2.4-2.4-1.7-.3-1.8-.8-.3-1.7,1.2-.7,2.2-1.7,2.9-2.9,.8-1.4,1.2-1.3,1.4,.3,.1,1.4,1,2.4,2.6,2.8Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M75.2,29c.7,.3,.7,.6-.1,.8-2.7,.8-5.1,2.9-6.9,6.1-.3,.6-.6,.6-.9-.1-1.1-2.9-3.2-5-6.1-6.1-.6-.2-.6-.5-.1-.8,3.3-2,5.4-4.2,6.2-6.7,.3-.8,.6-.8,.9-.1,1.5,3.1,3.8,5.3,7,6.9h0Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M268.6,126c-.6-.3-.6-.5,0-.8,3.8-1.6,5.9-3.8,6.5-6.7,.3-1.3,.6-1.3,1.1-.1,1.3,3.4,3.7,5.7,7.1,6.8,1.2,.4,1.1,.7,0,1-3.1,.8-5.5,3-7,6.7-.3,.7-.5,.7-.8,0-1.6-3.3-3.8-5.6-6.9-6.9h0Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M82.5,93.7c-.4-.2-.4-.4,0-.6,1.2-.6,2.2-1.4,2.9-2.6,.2-.4,.7-.5,.9-.3l3.1,2.8c.3,.2,.1,.7-.2,.9-1.2,.6-2.1,1.4-2.8,2.4-.2,.3-.6,.3-.8,0-.8-1-1.8-1.9-3.1-2.6h0Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M369.4,227.7c1.4,.4,1.4,.8,0,1.2-1.3,.4-2.2,1.3-2.7,2.7-.5,1.6-1,1.6-1.5,0-.4-1.4-1.2-2.2-2.4-2.4-1.7-.3-1.8-.8-.3-1.7,1.2-.7,2.2-1.7,2.9-2.9,.8-1.4,1.2-1.3,1.4,.3,.2,1.4,1,2.3,2.6,2.8Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M210.3,59.3c.7,.3,.7,.6-.1,.8-2.7,.8-5.1,2.9-6.9,6.1-.3,.6-.6,.6-.9-.1-1.1-2.9-3.2-5-6.1-6.1-.6-.2-.6-.5-.1-.8,3.3-2,5.4-4.2,6.2-6.7,.3-.8,.6-.8,.9-.1,1.6,3.1,3.9,5.4,7,6.9h0Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M554.3,64.5c-.5,.2-.6,.1-.5-.4,1-3.2,.7-5.8-.8-7.7-.7-.8-.5-1.1,.5-.7,2.9,1,5.5,.7,8-.9,.8-.5,1-.4,.6,.6-1.2,2.4-1,5,.6,8,.3,.5,.1,.7-.4,.5-2.9-.9-5.5-.7-8,.6h0Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M530.2,118.9c-.4,.2-.5,.1-.4-.3,.3-1.1,.3-2.2-.1-3.2-.1-.3,0-.7,.3-.7l3.4-.5c.3,0,.5,.3,.4,.6-.2,1-.2,2.1,0,3.1,.1,.3-.1,.5-.4,.5-1-.1-2.1,.1-3.2,.5Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M622.8,42.9c-.4,0-.8-.3-.8-.7l-.4-2.5c-.1-.3,.1-.7,.4-.7,1-.2,2.1-.3,3.1-.1,.3,0,.5,.3,.6,.7l.4,2.8c0,.3-.2,.5-.4,.5h-2.9Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M681.3,110.2c1-.7,1.3-.5,.8,.7-.5,1-.4,2.1,.3,3.2,.7,1.2,.5,1.5-.8,.9-1.1-.5-2-.4-2.8,.2-1.1,1-1.5,.7-1.2-.7,.2-1.2,.1-2.3-.3-3.4-.5-1.2-.2-1.4,.9-.7,.9,.6,2,.5,3.1-.2h0Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M714.1,54.6c.6-.3,.7-.1,.5,.5-.9,2.2-.8,4.7,.2,7.6,.2,.5,0,.7-.5,.5-2.4-.8-4.8-.6-7.1,.7-.4,.2-.6,.1-.5-.4,.5-3.2,.2-5.7-1-7.5-.4-.6-.2-.8,.5-.6,2.6,.7,5.3,.4,7.9-.8h0Z"
												style={{ fill: "#fff" }}
											/>
										</g>
										<g id="Fillgaps">
											<path
												d="M157,72.6c.3-.3,.4-.5,.4-.8"
												style={{
													fill: "none",
													stroke: "#3b9bbd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M157.2,71.8c.1,0,.2,0,.2,.1-.2,.2-1.3-.1-.2-.1"
												style={{
													fill: "none",
													stroke: "#3b9bbd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M871.7,179.5c-10.7,.6-16,18.7-24.4,7.7"
												style={{
													fill: "none",
													stroke: "#175883",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M847.2,187.1c-5.6-1.6,1.7-11.3-4.9-7.6"
												style={{
													fill: "none",
													stroke: "#103c5f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M842.2,179.6c-3.8-19.5,17.7-11.9,29.1-18.7"
												style={{
													fill: "none",
													stroke: "#1e5b86",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M157,72.6c-5.3,5.1-10.9,9.7-17,13.8"
												style={{
													fill: "none",
													stroke: "#7eabd1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M34.7,85.9c-6.9-15.6-20.3,.8-30.4,3.9"
												style={{
													fill: "none",
													stroke: "#2f87af",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M802.9,87.9c-1.2-6.2-7.2-5.4-11.7-7.5"
												style={{
													fill: "none",
													stroke: "#398cb2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M791.3,80.3c-4.8-.9-10.9-5.7-15.5-3.2"
												style={{
													fill: "none",
													stroke: "#4d8cb6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M775.7,77.1c-1.9,.8-1.3-2.4-2.7-1.7"
												style={{
													fill: "none",
													stroke: "#4692b4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M773,75.3c-2.2-2.2-3.4,7.1-5,9.1"
												style={{
													fill: "none",
													stroke: "#8eb9d5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M179.8,88.1c-6.5-5.6-14.2-9.7-21.1-15"
												style={{
													fill: "none",
													stroke: "#3e7ca1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M158.7,73.1c-.4-.6-1-.7-1.7-.5"
												style={{
													fill: "none",
													stroke: "#7eabd1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M872.1,97.4c-8.6,11.7-10.6,26.7-16.8,39.8"
												style={{
													fill: "none",
													stroke: "#8994be",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M855.3,137.2l-1.5,1.9"
												style={{
													fill: "none",
													stroke: "#7e91b9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M853.8,139.1c2.1-6.9,5.4-15.3,7-22.8"
												style={{
													fill: "none",
													stroke: "#9cbcdb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M860.7,116.3c1.2-3.5,1.8-9.4,4.8-13"
												style={{
													fill: "none",
													stroke: "#96b8d8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M865.5,103.4c2.3-2.9,4.1-6.1,5.5-9.6"
												style={{
													fill: "none",
													stroke: "#91b5d7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M870.6,147.7c-4.1-4.6-8.1-9.6-15.3-10.5"
												style={{
													fill: "none",
													stroke: "#2e608b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M158.7,73.1l-1.8,2.2"
												style={{
													fill: "none",
													stroke: "#7c88b3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M156.9,75.3l-9.5,8.5"
												style={{
													fill: "none",
													stroke: "#8f95c5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M147.5,83.8c-4.1,3.7-8.8,6.5-14,8.2"
												style={{
													fill: "none",
													stroke: "#7987b0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M133.5,92.1l-5.2,2.6"
												style={{
													fill: "none",
													stroke: "#6e81a8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M128.2,94.6c-5.1,.9-7.7,8.9-9.3,13"
												style={{
													fill: "none",
													stroke: "#7289b1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M119,107.6c-.6-.5-.8-.9-.6-1.3"
												style={{
													fill: "none",
													stroke: "#8bb4d5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M118.4,106.3c2-3.2,2-7.5,4.3-10.4"
												style={{
													fill: "none",
													stroke: "#86b0d3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M122.7,95.9c6.1-2.6,11.8-5.8,17.2-9.5"
												style={{
													fill: "none",
													stroke: "#82aed2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M179.8,88.1l6.2,14.5"
												style={{
													fill: "none",
													stroke: "#437fa3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M186,102.6c-3.9-4.3,.5,7.9-2.5,11-2,3.1-1.7-3.4-3.1-.8"
												style={{
													fill: "none",
													stroke: "#385881",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M180.3,112.8c-6.4-12.9-11.4-10.2-24.9-22.9"
												style={{
													fill: "none",
													stroke: "#2e557a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M155.4,89.8c-1-1.2-2.5-4.4-4.5-3.7"
												style={{
													fill: "none",
													stroke: "#2d5278",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M151,86.1l6-10.7"
												style={{
													fill: "none",
													stroke: "#4f6696",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M773,75.3l-.3,1.2"
												style={{
													fill: "none",
													stroke: "#94acca",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M772.7,76.6c-4.6,13-6.2,25.3-9,37.3"
												style={{
													fill: "none",
													stroke: "#90a6c8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M763.7,113.9c-.5-.6-.7-1.5-.6-2.6"
												style={{
													fill: "none",
													stroke: "#9bc2da",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M763,111.3l1.1-4.7"
												style={{
													fill: "none",
													stroke: "#98bfd8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M764.2,106.6l3.9-22.2"
												style={{
													fill: "none",
													stroke: "#94bcd7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M775.7,77.1l5,3.8"
												style={{
													fill: "none",
													stroke: "#537fab",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M780.7,80.9c-1.5,7-3.7,13.7-6.5,20.2"
												style={{
													fill: "none",
													stroke: "#3f7fa6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M774.2,101.1l-.5,.2"
												style={{
													fill: "none",
													stroke: "#8eaec4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M773.7,101.3c-.4-11.9,2.9-16-1-24.7"
												style={{
													fill: "none",
													stroke: "#487fa6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M151,86.1l-1.3,2"
												style={{
													fill: "none",
													stroke: "#415f8b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M149.7,88.1c-6.2,1.2-.2-4.1-2.1-4.2"
												style={{
													fill: "none",
													stroke: "#4c6593",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M791.3,80.3c-.2,3.6,1.2,15.4-1.7,14.2-3-2.8-6-21.2-8.8-13.7"
												style={{
													fill: "none",
													stroke: "#4679a9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M773.7,101.3l-10.2,18.5"
												style={{
													fill: "none",
													stroke: "#89a8c2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M763.5,119.9l.2-6"
												style={{
													fill: "none",
													stroke: "#4f95b6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M34.7,85.9l.5,.7"
												style={{
													fill: "none",
													stroke: "#338ab0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M35.3,86.6c-1.8,4,2.3,.9-.3,7.3,.1,3.9,5.7,12.2,.4,14.3-.5,12.5,11,27.9,19.2,32.9"
												style={{
													fill: "none",
													stroke: "#1d73a3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M54.5,141.1c-2.7,1.2-4.8,2.9-6.2,5.3"
												style={{
													fill: "none",
													stroke: "#23658f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M48.2,146.4l-1,1.2"
												style={{
													fill: "none",
													stroke: "#20618b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M47.3,147.6c0-.4-.1-.6-.5-.5"
												style={{
													fill: "none",
													stroke: "#3174a1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M46.8,147.1c-18.6-3.5-14.6-20.3-24.9-31.4"
												style={{
													fill: "none",
													stroke: "#1d6896",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M21.9,115.9c-5.4-6.8-10.4-14.8-17.2-20.5"
												style={{
													fill: "none",
													stroke: "#1e6c9a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M802.9,87.9l3.2,12.5"
												style={{
													fill: "none",
													stroke: "#3d8fb3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M806.2,100.3l.8,3.5"
												style={{
													fill: "none",
													stroke: "#4392b5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M806.9,103.9c-1.5,.2-2.8-.5-3.8-1.9"
												style={{
													fill: "none",
													stroke: "#2c8bb6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M803.1,101.9c-4.8-.4-17.6-.6-22.4,3.4"
												style={{
													fill: "none",
													stroke: "#2d8dba",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M780.7,105.3c-7.8,5.5-9.7,13.9-16.5,21.8"
												style={{
													fill: "none",
													stroke: "#7c9ec9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M764.2,127.1c-1.8,.2-.9-1-2-1"
												style={{
													fill: "none",
													stroke: "#2d8dba",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M762.2,126.1c4.5-8.1,8.5-16.4,12-24.9"
												style={{
													fill: "none",
													stroke: "#81a8c2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M44.2,97.4l-9-10.8"
												style={{
													fill: "none",
													stroke: "#328eb5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M149.7,88.1c-9.6,19.4-21.5,39.9-16.1,4"
												style={{
													fill: "none",
													stroke: "#2a5176",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M186.9,104.1c-.2-.6-.5-1.1-1-1.5"
												style={{
													fill: "none",
													stroke: "#407ea0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M155.4,89.8c-1.1,13.5,4.2,25.2,5.8,38.1"
												style={{
													fill: "none",
													stroke: "#204e6f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M161.3,127.9c3.1,20.2,8,40.1,14.5,59.5"
												style={{
													fill: "none",
													stroke: "#2a5176",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M175.8,187.3c1.3,6.6,.3,18.6,6.3,19.7-3.6,2.8-.1,8.5-5.8,8.9-1.6,1.1,.5,5.2-1.2,5-1.7-.8,0,2.1-1.6,1.9-6-1.6-3.3-.3-6.4,1.7"
												style={{
													fill: "none",
													stroke: "#204e6f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M167,224.6l-.2-.1"
												style={{
													fill: "none",
													stroke: "#2f567d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M166.7,224.6c-4.1-3.7-8.9-4.9-13.7-7.9"
												style={{
													fill: "none",
													stroke: "#2a5176",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M153,216.6c-12.4-21.7-19.2-39.5-23.1-65.7-18.5-13.3,16,62.6,20.3,67.8"
												style={{
													fill: "none",
													stroke: "#244e70",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M150.2,218.6c2.7,5.5,5.9,10.5,9.9,15"
												style={{
													fill: "none",
													stroke: "#2a5176",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M160,233.6c3.2,3.5,6.6,6.6,10.3,9.2"
												style={{
													fill: "none",
													stroke: "#2f567d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M170.4,242.8c-1.8,5,1.2,11.1-3,15.1-.6,2.8-5.8-.5-3.7,2.5,.6,.7,1.1,.8,1.6,.2"
												style={{
													fill: "none",
													stroke: "#1d4e72",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M165.3,260.6c.4,.4,.9,.6,1.5,.8"
												style={{
													fill: "none",
													stroke: "#21547a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M166.7,261.4c-1.9,1.3-.3,7-2.8,5.6-1.1-8.4-4.5,3.1-.7,6"
												style={{
													fill: "none",
													stroke: "#1d4e72",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M163.2,273.1c-3.7,.2-8.1-7.6-7.2-1.8-.4,.4-1-1.7-2.1-.6-3.4-1-4.7-6.2-6.3-1.7-5.8-2.2-9.4-41.7-13.2-22.1"
												style={{
													fill: "none",
													stroke: "#1a496e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M134.3,246.9c-2.5-3.1-2-26.8-3.2-11.1"
												style={{
													fill: "none",
													stroke: "#557498",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M131.2,235.9c-.2-6.4-4.7-.9-7.4-5-4.8-6.4-11.6-19.9-8.7-27.8-.2-5.7-2.8-9.4-5.8-12.8,1.3-2.4-.3-5-2.2-6.6-2-3-6,2-6.6-2.2,.2-3.5-4.7-.5-5-2.4-14.8,25.4-14.9,28-43,12.7-11.3-.5-24.8-12.6-34.1-6.9-2.8,.4-1.3-.4-1.1-1.6,0-2.1-1.7-1.1-2.9-1.1-2-1-7-1.7-9-2.4"
												style={{
													fill: "none",
													stroke: "#1d486a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M5.2,179.8c0-.1,.1-.2,.4-.2"
												style={{
													fill: "none",
													stroke: "#1c4f77",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M5.6,179.6l15.1-11.9"
												style={{
													fill: "none",
													stroke: "#1d5279",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M20.6,167.7c3.7-.9,17.2-3.4,20.4-8.8"
												style={{
													fill: "none",
													stroke: "#316289",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M41,158.9c6.6-5.3,14.3,10.3,22,7.9,3.5-1.8,6.2-7.9,10.1-6.3,19.4,9.1,23.5,22,32-5.5"
												style={{
													fill: "none",
													stroke: "#214f73",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M105.2,154.9c5-19.3,20.2-35,22.2-54.4"
												style={{
													fill: "none",
													stroke: "#235377",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M127.4,100.3c.7-1.3,1-2.8,.9-4.4"
												style={{
													fill: "none",
													stroke: "#415f8b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M128.4,95.9l-.2-1.3"
												style={{
													fill: "none",
													stroke: "#235377",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M44.2,97.4l8.5,11"
												style={{
													fill: "none",
													stroke: "#3690b6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M52.7,108.3c5.5,10.2,19.9,16.9,25.9,23.3"
												style={{
													fill: "none",
													stroke: "#3b94b8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M78.6,131.7c-7.4,9.3-12.1,10.9-24.2,9.4"
												style={{
													fill: "none",
													stroke: "#226994",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M180.3,112.8c3.3,25.5,13.7,60.7,19.4,85.3"
												style={{
													fill: "none",
													stroke: "#2b5478",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M199.8,198.1c0,2.4-1.1,3.9-3.3,4.5"
												style={{
													fill: "none",
													stroke: "#205a7f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M196.5,202.6c-12.2-9.9-13.9-25.6-16.8-39.6-5.2,22.4,12.8,48.7,22.6,68.3"
												style={{
													fill: "none",
													stroke: "#30577d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M202.5,231.3l4.5,9"
												style={{
													fill: "none",
													stroke: "#2a567b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M207,240.3c-2.7,2-2.1,3-4,4.9-3.2,2.5-7.5,.6-9.8,3.3"
												style={{
													fill: "none",
													stroke: "#22577c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M193.2,248.4c-11.6-5.2-20.5-12.5-26.3-23.8"
												style={{
													fill: "none",
													stroke: "#30597f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M175.8,187.3c.7-5-6-70.7-14.5-59.6"
												style={{
													fill: "none",
													stroke: "#2b5478",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M3,143.6c5.9-13.6,20.2-7.7,20.5,5.5,6.8-.9,1.7-6,0,0,6.8-.9,11.7,4.6,15.7,9.2"
												style={{
													fill: "none",
													stroke: "#1b5d89",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M39.2,158.2c-4.7,6-12.4,5.6-18.5,9.4"
												style={{
													fill: "none",
													stroke: "#2f6995",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M5.6,179.6c-.7-.9-1.5-1.8-2.4-2.6"
												style={{
													fill: "none",
													stroke: "#195683",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M3,133.1c3.2-2.4,2.7-5,.1-7.7"
												style={{
													fill: "none",
													stroke: "#1d6592",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M21.9,115.9c-2.4,6.5-7,26.6-6.5,5.2-4.5,4.6-7.4,10.6-12.6,14.6"
												style={{
													fill: "none",
													stroke: "#1d6592",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M128.4,95.9c-4.9,1-5.6,15.7-1,4.5"
												style={{
													fill: "none",
													stroke: "#456794",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M105.2,154.9c-7.6,3.8-23.7-12.3-25.7-7.5-13.4,18.8-6.7,9.5-24.2,10.2-6.9,1.2-1.1-12.2-7-11.3"
												style={{
													fill: "none",
													stroke: "#25577c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M78.6,131.7c6.7-16.7,25.5-17.2,40.3-24.1"
												style={{
													fill: "none",
													stroke: "#4186a4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M872,205.2c-7.4-1.4-12.1,5.4-18.3,5"
												style={{
													fill: "none",
													stroke: "#13547e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M853.7,210.1l-5.1-5.4"
												style={{
													fill: "none",
													stroke: "#0c3352",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M848.6,204.7c7.1,.4-4.2-7.1,2.1-8-4.4-3.1-4.6-4.3-3.5-9.5"
												style={{
													fill: "none",
													stroke: "#0d3b5d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M808.2,109.3l-1.2-5.5"
												style={{
													fill: "none",
													stroke: "#3da4c6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M187.2,105.4c-.3-.4-.4-.8-.3-1.3"
												style={{
													fill: "none",
													stroke: "#4481a2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M187.2,105.4c1.9,5.8,4.4,11.4,7.3,16.8"
												style={{
													fill: "none",
													stroke: "#4884a3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M194.6,122.2c5.9,12.7,5,28.1,10.2,41.6"
												style={{
													fill: "none",
													stroke: "#2f5479",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M204.7,163.8c-13.1-3.8,.2,36.4-.8,44.8"
												style={{
													fill: "none",
													stroke: "#3a5b83",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M199.8,198.1c1.6,3.8,1,6.9,4.2,10.5"
												style={{
													fill: "none",
													stroke: "#2a5d85",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M762.2,126.1c-.3,.4-.8,.6-1.2,.6"
												style={{
													fill: "none",
													stroke: "#7cbcd8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M761,126.6l-.2-.1"
												style={{
													fill: "none",
													stroke: "#81acc6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M760.7,126.6c-.3-2.2,2.5-4.4,2.8-6.7"
												style={{
													fill: "none",
													stroke: "#95c4d4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M803.1,101.9c-8.1,3.8-10.3,.9-16.8,11.5-20.4,19.6,19.8,5.2,31,6.3"
												style={{
													fill: "none",
													stroke: "#279fcc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M817.2,119.7c3.6,3,13.6,2.6,13.3,8.9"
												style={{
													fill: "none",
													stroke: "#44abce",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M830.5,128.6l-.4,1.7"
												style={{
													fill: "none",
													stroke: "#6ab3e1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M830.1,130.3c-19.1,1.4-40.4,9.7-56.5,11.7-4.9-1-12.1-3-17-3.1-2.6,.3-2.4-.9-2.2-2.6-.9-.8-2.6-1.6-2.4-3.3"
												style={{
													fill: "none",
													stroke: "#2ba5d3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M752.2,133.3c.1-.6,10.5-5.7,8.8-6.7"
												style={{
													fill: "none",
													stroke: "#2e91bf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M764.2,127.1c7.1-1.2,11-15.4,16.5-21.7"
												style={{
													fill: "none",
													stroke: "#77b2df",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M808.2,109.3c.3,5.9,8.2,3.5,9,10.3"
												style={{
													fill: "none",
													stroke: "#43a8c9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M760.7,126.6c-6.6-1.7-12.8-4.2-18.6-7.5"
												style={{
													fill: "none",
													stroke: "#4799bb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M742.1,119c-1.9,.7-3.1,1.9-3.7,3.6"
												style={{
													fill: "none",
													stroke: "#99cada",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M201.3,124.9l-6.8-2.7"
												style={{
													fill: "none",
													stroke: "#41819e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M853.8,139.1c-2.7,.1-5.3-.4-7.8-1.6"
												style={{
													fill: "none",
													stroke: "#4189a9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M845.9,137.5c-3.9-1.8-8.5-6.5-12.7-4.9"
												style={{
													fill: "none",
													stroke: "#459cc0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M833.3,132.6c-.7-1.3-.9-5.3-2.7-4"
												style={{
													fill: "none",
													stroke: "#85bcde",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M46.8,147.1l-7.6,11.1"
												style={{
													fill: "none",
													stroke: "#306d99",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M742.1,119c-7.3,14.6-11,19.9-21.4,30.3"
												style={{
													fill: "none",
													stroke: "#86b2cc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M720.7,149.3l-.2-.5"
												style={{
													fill: "none",
													stroke: "#87c3dc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M720.4,148.9c6.1-8.9,13.4-16.7,18-26.3"
												style={{
													fill: "none",
													stroke: "#9ecddc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M752.2,133.3l-9.8,6.5"
												style={{
													fill: "none",
													stroke: "#3195c2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M742.4,139.9l-4.5,3.5"
												style={{
													fill: "none",
													stroke: "#3895c0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M738,143.3l-5.5,5.8"
												style={{
													fill: "none",
													stroke: "#4b9ac6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M732.5,149.1l-1,1"
												style={{
													fill: "none",
													stroke: "#629ecb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M731.4,150.1c-3.4,2.5-6.7-3-10.7-.9"
												style={{
													fill: "none",
													stroke: "#3492bd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M201.3,124.9c2.6,4.1,4.1,8.6,4.6,13.5"
												style={{
													fill: "none",
													stroke: "#4684a0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M205.9,138.3l1.3,5.8"
												style={{
													fill: "none",
													stroke: "#4a88a2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M207.2,144.1c.6,4.3,1.6,8.2,2.8,11.9"
												style={{
													fill: "none",
													stroke: "#4e8aa4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M210,156c.8,6.1,2.1,11.8,4,17.1"
												style={{
													fill: "none",
													stroke: "#528da7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M214,173.1c-4.4,.7-2-13.6-6.9-16.1-1.1,4.6,3.4,21-2.4,6.9"
												style={{
													fill: "none",
													stroke: "#33587e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M720.4,148.9c-7-2.5-13.8-5.4-20.4-8.8"
												style={{
													fill: "none",
													stroke: "#4dadcc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M700,140.1c-3.5-5-8.4-8.4-14.7-10.1"
												style={{
													fill: "none",
													stroke: "#4c9cbd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M685.3,130c-2.5,2.7-3.8,6-4.1,9.8"
												style={{
													fill: "none",
													stroke: "#9ecddc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M833.3,132.6c-.5,1.4-.6,2.8-.2,4.2"
												style={{
													fill: "none",
													stroke: "#6ba4d3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M833,136.9l-2.5,5.8"
												style={{
													fill: "none",
													stroke: "#879ccd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M830.5,142.6c-7.1,11.2-13.1,22.3-24,29.4"
												style={{
													fill: "none",
													stroke: "#b8c3ef",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M806.5,172.1c-4.1-6-22.4-4.6-30.3-1.9-2.2,3.4-7.8,11.5-12.4,13.3"
												style={{
													fill: "none",
													stroke: "#94c0ed",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M763.7,183.4c-6.9-6.3-17.1-2.1-25.7-4.6"
												style={{
													fill: "none",
													stroke: "#6c90ba",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M738,178.8c-1.6-3.1-6.5,11.4-7.3,11.8"
												style={{
													fill: "none",
													stroke: "#cecef1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M730.8,190.6l-.8,.6"
												style={{
													fill: "none",
													stroke: "#90a7ce",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M730,191.2l-1.3,.7"
												style={{
													fill: "none",
													stroke: "#6c90ba",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M728.7,191.9c-5.5-1.2-10.8-2.8-16.7-.2"
												style={{
													fill: "none",
													stroke: "#7eb1e6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M712,191.6l-1.8-.5"
												style={{
													fill: "none",
													stroke: "#6488af",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M710.2,191.1c-4.3-3-10.8,.7-14.4-2"
												style={{
													fill: "none",
													stroke: "#607fa6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M695.7,189.1c20.3-12.4,7.1-9.8-6.2-2.2"
												style={{
													fill: "none",
													stroke: "#9ec0ed",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M689.5,186.9l-2.5-1"
												style={{
													fill: "none",
													stroke: "#607fa6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M687,185.9c-.4-2.1-10.8-6.5-13-5.9"
												style={{
													fill: "none",
													stroke: "#c4ccee",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M674,180.1c-4.7-3.1-9.9-5.1-15.6-5.9"
												style={{
													fill: "none",
													stroke: "#70b3df",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M658.4,174.2c1.2-3.3,7.3,.3,9.8-3.1"
												style={{
													fill: "none",
													stroke: "#93c7e6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M668.2,171.1c1.2-.2,2.3-.6,3.2-1.3"
												style={{
													fill: "none",
													stroke: "#6fa3cf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M671.5,169.8c5-1.9,5.9,1.2,7.4,5.2,13.4-8.5,31.2-10.3,45.7-16.6"
												style={{
													fill: "none",
													stroke: "#74b6e2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M724.5,158.6c.4,.1,2.7-1.5,2.7-.4,2.2,15.8,11.8,13.3,22,6.4"
												style={{
													fill: "none",
													stroke: "#9ec0ed",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M749.3,164.6l10.2-4.2"
												style={{
													fill: "none",
													stroke: "#87bbe8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M759.5,160.4l11.2-4.3"
												style={{
													fill: "none",
													stroke: "#74b6e2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M770.7,156.1c21.2-11,51.2,2.7,59.4-25.7"
												style={{
													fill: "none",
													stroke: "#6db6e4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M685.3,130c-4.2,14.6-5.2,31.1-17.3,40.9"
												style={{
													fill: "none",
													stroke: "#86b2cc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M668,170.9c2.3-5.9,9.8-14.3,11.5-22.5"
												style={{
													fill: "none",
													stroke: "#aad6e3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M679.5,148.4c.9-2.8,1.5-5.6,1.7-8.6"
												style={{
													fill: "none",
													stroke: "#a2d1de",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M700,140.1c-15,1.1-19.6,12.3-24.4,24.6"
												style={{
													fill: "none",
													stroke: "#3492bd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M675.5,164.8l-4.1,5.1"
												style={{
													fill: "none",
													stroke: "#3895c0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M668.2,171.1c-.1,0-.2-.1-.2-.2"
												style={{
													fill: "none",
													stroke: "#57a5c4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M770.7,156.1c-13,1.3-14.4-18.4-28.2-16.2"
												style={{
													fill: "none",
													stroke: "#36a8d4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M845.9,137.5c-3.9,.9-10.1-4.7-12.5-.6"
												style={{
													fill: "none",
													stroke: "#27709e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M833.4,136.9h-.4"
												style={{
													fill: "none",
													stroke: "#477baf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M842.2,179.6c-1.3,1.9,.1,4.6-2.5,6.3"
												style={{
													fill: "none",
													stroke: "#143e60",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M839.7,185.9c-2.3-3,1.3-13.1-.9-12.9-6.8,1.1-9.7,13.2-14.2,17.6-7.2,5.9-16.2,10.5-24.7,12.7-4.2,4.9-12.3,.8-14.9-5.3"
												style={{
													fill: "none",
													stroke: "#1e5b86",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M785.3,197.9c3.3-7.1,8.3-14.8,15-19.3"
												style={{
													fill: "none",
													stroke: "#1e577e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M800.2,178.6l1.5-1"
												style={{
													fill: "none",
													stroke: "#7490ba",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M801.8,177.6c11.1-3.6,20.7-8.9,29.5-18.7"
												style={{
													fill: "none",
													stroke: "#5773a4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M831.2,159c3.8-6.9,2.9-14.5,2.3-22.1"
												style={{
													fill: "none",
													stroke: "#426897",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M831.2,159c-5-5.1-5-5.8-2.1-13.4"
												style={{
													fill: "none",
													stroke: "#777eb5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M829.2,145.6l1.3-3"
												style={{
													fill: "none",
													stroke: "#949bcb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M637.5,149.5l-2.9-1.6"
												style={{
													fill: "none",
													stroke: "#57a3bf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M634.5,147.9c-2.7-3.4-6.7,4.4-8.5,6.4"
												style={{
													fill: "none",
													stroke: "#a4c9de",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M560.4,147.1c-.6-.6-1.7-3.7-2.9-2.3"
												style={{
													fill: "none",
													stroke: "#56a6c4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M557.5,144.9c.4-4.9-6.5,2.7-8.3,3.9"
												style={{
													fill: "none",
													stroke: "#aecbe1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M759.5,160.4c-8.1-4.8-9.2-16.8-21.4-17.1"
												style={{
													fill: "none",
													stroke: "#50add8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M731.4,150.1l-2.9,3.5"
												style={{
													fill: "none",
													stroke: "#63afdb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M728.5,153.6c-10,5.2-25.1,.9-37.1,5.7-13.7-4-6.6-3.7-15.9,5.5"
												style={{
													fill: "none",
													stroke: "#39a5cf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M829.2,145.6c-5.5,13.6-15.3,22.4-27.3,32"
												style={{
													fill: "none",
													stroke: "#a9a5d7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M800.2,178.6c-13,5-15.7,22.7-27.8,30.3"
												style={{
													fill: "none",
													stroke: "#708ab2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M772.5,208.9c-.9-.6-1.5-1.3-1.8-2.3"
												style={{
													fill: "none",
													stroke: "#b2a9de",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M770.7,206.6l4.5-4.5"
												style={{
													fill: "none",
													stroke: "#758cb4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M775.2,202.1l4.9-4.9"
												style={{
													fill: "none",
													stroke: "#798fb8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M780.1,197.2c2.8-2.5,5.1-5.5,6.9-9.1"
												style={{
													fill: "none",
													stroke: "#8db9e8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M787,188.1c5.8-9.2,7.2-7.4,19.5-16.1"
												style={{
													fill: "none",
													stroke: "#a1bfeb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M549.2,148.7c-4,3.6-2.6,10.2-7.2,14.1"
												style={{
													fill: "none",
													stroke: "#b2cde3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M557.5,144.9c-9.7,6-8.5,13.8-13.6,22.8"
												style={{
													fill: "none",
													stroke: "#98b2d3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M544,167.6c-.7,1.1-1.7,1.7-3,1.8"
												style={{
													fill: "none",
													stroke: "#e9cff1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M541,169.4c-1.9-.2-3.6-1-5-2.3"
												style={{
													fill: "none",
													stroke: "#a1b2da",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M535.9,167.1l.3-.5"
												style={{
													fill: "none",
													stroke: "#e9cff1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M536.2,166.6c2.6-.4,4.5-1.6,5.8-3.8"
												style={{
													fill: "none",
													stroke: "#b6d0e6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M749.3,164.6c-6.6-2.9-9.5-18.2-16.9-15.5"
												style={{
													fill: "none",
													stroke: "#7ab7e4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M560.4,147.1l7.5,13.8"
												style={{
													fill: "none",
													stroke: "#5ba9c7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M567.9,160.9l6.8,15.8"
												style={{
													fill: "none",
													stroke: "#61aecb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M574.8,176.6c-5.3,2.8-1,9.1-7.5,12.2-3.6,1.2-15.1,7.4-17.8,4-1.8-2-5.6,.6-4.3-4.4"
												style={{
													fill: "none",
													stroke: "#4594bd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M545.2,188.3c19.9-25.2,22-26.2-2.7-2.9"
												style={{
													fill: "none",
													stroke: "#90aad4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M542.4,185.4c3.8-4.4,13-15.8,3.4-15.6,.1-4.6,2.2-6.8-1.9-.8"
												style={{
													fill: "none",
													stroke: "#4191bc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M544,169.1c-.1-.5-.1-.9,0-1.4"
												style={{
													fill: "none",
													stroke: "#90aad4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M41,158.9l6.2-11.2"
												style={{
													fill: "none",
													stroke: "#33668e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M626,154.4l-5.5,9"
												style={{
													fill: "none",
													stroke: "#a9cce2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M634.5,147.9c-12.5,22.8-9.7,7.1-22.8,33.8"
												style={{
													fill: "none",
													stroke: "#8fadcc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M611.7,181.6c-3.6,.8,9.2-17.7,8.7-18.3"
												style={{
													fill: "none",
													stroke: "#afd1e6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M153,216.6c-1-.1-1.9,.6-2.8,2"
												style={{
													fill: "none",
													stroke: "#2f5479",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M724.5,158.6l4-5"
												style={{
													fill: "none",
													stroke: "#67b2de",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M637.5,149.5c4.8,5.3,13.1,6.4,14.5,13.8"
												style={{
													fill: "none",
													stroke: "#5fa8c4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M652,163.3c-6.3,2.6-14.5-.1-17.6,7.9"
												style={{
													fill: "none",
													stroke: "#3c95bc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M634.4,171.2l-5.7,3.9"
												style={{
													fill: "none",
													stroke: "#539fbc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M628.7,175.1c-6.9,5.1-18,11.5-6,.6,6.1-8-11.4,5.8-6.9,8.3"
												style={{
													fill: "none",
													stroke: "#8db5cc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M615.9,183.9l-5.4-.1"
												style={{
													fill: "none",
													stroke: "#3c95bc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M610.5,183.8c.6-.6,1-1.4,1.2-2.2"
												style={{
													fill: "none",
													stroke: "#62abc6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M658.4,174.2c-4.8,.3-4.2-8.6-6.4-10.9"
												style={{
													fill: "none",
													stroke: "#58b6d4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M536.2,166.6c-2.1-.7-4.1-.6-6,.2"
												style={{
													fill: "none",
													stroke: "#aec8e6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M298.7,170.8c-2.2-1.6-3.9-5.2-6.9-5.4"
												style={{
													fill: "none",
													stroke: "#71b1ce",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M291.8,165.3c-9.5,1.8-12.8,15.8-20,21.6"
												style={{
													fill: "none",
													stroke: "#a5d0dd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M271.8,187c-5.3-10.5-17.2-26.8-27.8-13.3"
												style={{
													fill: "none",
													stroke: "#5cb9d7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M244,173.8c-9.7,7.1-20.9,8.7-29.7-.4"
												style={{
													fill: "none",
													stroke: "#58b8d6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M214.3,173.3c0-.1-.1-.2-.2-.2"
												style={{
													fill: "none",
													stroke: "#5d94b2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M214.3,173.3l2.7,8.9"
												style={{
													fill: "none",
													stroke: "#3a82ac",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M216.9,182.2c6.6,27.1,11.2,27.5,30.6,64.1"
												style={{
													fill: "none",
													stroke: "#315a82",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M247.5,246.3c-1.1,6.8-14.8,.4-20.5,3"
												style={{
													fill: "none",
													stroke: "#365f89",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M227,249.3l-23.1-40.8"
												style={{
													fill: "none",
													stroke: "#2f618a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M610.5,183.8c-3.3,.4-3.9-2.8-7-4.4"
												style={{
													fill: "none",
													stroke: "#5cb8d6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M603.5,179.3c-7.2,2.1-9.7,7-7.4,14.8"
												style={{
													fill: "none",
													stroke: "#aec9e6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M596.1,194.1c-.2,1.1-.7,1.9-1.6,2.2"
												style={{
													fill: "none",
													stroke: "#94c5e4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M594.5,196.4c-14,.9-5.5-19.9-19.7-19.8"
												style={{
													fill: "none",
													stroke: "#67b5d2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M196.5,202.6c2.9,3,5.4,6.4,7.5,10"
												style={{
													fill: "none",
													stroke: "#2f618a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M204,212.6c-.9,5.1,1.5,13.7-1.5,18.8"
												style={{
													fill: "none",
													stroke: "#395d87",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M2.8,216c1.1,1.7,9.1,4.8,4.8,.5"
												style={{
													fill: "none",
													stroke: "#114065",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M7.7,216.6c.8-1.5,4.4-.6,4.2,1.4,.9,2.3,4.8-.8,4.8,3"
												style={{
													fill: "none",
													stroke: "#112e4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M16.8,220.9c.7,1-3.3,7.6-3.3,4.2,1.7-1.6,2-5.1-.9-4.9,.8,3.6-8.3,7-3.6,8,4,1.2,1.8,3.4,6.1,2.9,.5,1.1-1.8,5.8,.5,4.2,1.9-3.7,3.2-5.7,4.3-.7,1.2-3.5,3.3,.8,4.6-1.1,11.7-.2-2-6.2,.7-9"
												style={{
													fill: "none",
													stroke: "#0e2b4b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M25.2,224.6c6.5,7.5,9.1-3.9,13-7.8"
												style={{
													fill: "none",
													stroke: "#112e4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M38.2,216.8c.6,.6,.8,1.2,.8,1.5"
												style={{
													fill: "none",
													stroke: "#1d4369",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M39,218.3c-1.5,9.7,3.2,16.9,3.3,26.5"
												style={{
													fill: "none",
													stroke: "#0f2b4a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M42.3,244.9c2,8.8-.9,23.3,7.5,20.7,2.8-7.7-3.6-23.9,.1-27.1"
												style={{
													fill: "none",
													stroke: "#0d213e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M49.7,238.5c2,2.9,25.3,51.4,10.7,18.6"
												style={{
													fill: "none",
													stroke: "#1d4369",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M60.4,257.1c.6-5,9.4-7,13.1-8.2,.7,.6,4.8,19.6,6.6,11.4,.2-1.8-1-6.1,2.2-5.2"
												style={{
													fill: "none",
													stroke: "#112e4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M82.4,255.1c0,.6,.3,.9,.8,1"
												style={{
													fill: "none",
													stroke: "#405372",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M83.2,256.1c.3,.7,.4,1.5,.3,2.2"
												style={{
													fill: "none",
													stroke: "#112e4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M83.5,258.3c-1.3,1.6-1,2.8,1,3.6"
												style={{
													fill: "none",
													stroke: "#294369",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M84.5,261.9c.2,.8-.1,1.4-.8,1.7"
												style={{
													fill: "none",
													stroke: "#112e4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M83.7,263.6c-1.3,.7-3.8,2.5-3.1,4,1.7-1.6,2.9-3.2,4.8-.4"
												style={{
													fill: "none",
													stroke: "#253f62",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M85.5,267.1c.4,1.2,0,2.1-1,2.8"
												style={{
													fill: "none",
													stroke: "#112e4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M84.5,269.9c-2.9-2.4-2.4,.4-1.2,1.6,.2,3.2-7.8,2.2-4.3,4.8,2.2,1.2,4.6-2.6,5.5,.7"
												style={{
													fill: "none",
													stroke: "#0b1f3d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M84.5,276.9c-.1,1.2,.4,1.9,1.5,2"
												style={{
													fill: "none",
													stroke: "#112e4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M86,278.9l1,1.7"
												style={{
													fill: "none",
													stroke: "#0b1f3d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M87,280.6l-2.3,2.5"
												style={{
													fill: "none",
													stroke: "#203a5b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M84.7,283.1c-2.2-.9-4.5-2.6-4.7-4.9-2.4-1.1-9.9,7.8-6.3,6.9,4-5,9.1-3,3.9,2.4-.7,2.4-3.4-.3-4.1,1.7,1.1,2.5-4.6,3.2-2.4,4.6,4.4,3.5,9.5-2.3,11.4,3.3"
												style={{
													fill: "none",
													stroke: "#0b1f3d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M82.4,297.1c0,3-.1,7.2,3.8,7.7"
												style={{
													fill: "none",
													stroke: "#08172f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M86.2,304.8c-3,1.1-3.3,2.6-1,4.5"
												style={{
													fill: "none",
													stroke: "#264368",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M85.2,309.3c-1,1.5,1.5,5.7-2.3,2.7-2.2,.9-4.3-1.1-6.4-1.3-5.5,8.5,1.2,5.2-1.1,8.2-12.4,4.4-1.6-2.4-6.4-3-8.4,8.7,7.2,3.5,12.5,12,.1,.9-2.2,1.8-2.5,2.1,1.1-.1,1.6,.5,1.4,1.8"
												style={{
													fill: "none",
													stroke: "#08172f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M80.5,331.9c-3.8,3.1-5.3-13.1-13.3,.1,.4,6.5,7.8,5.6,0,9.8-4,6.6-17,1.3-4.6,9.3,1.3,6.1,5.3,.7-1.2-2.6-2.3-2.4,5.6-2.4,6.4-3.5,7.3-6.6,16,1.2,20.9,7.3"
												style={{
													fill: "none",
													stroke: "#08152b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M88.7,352.1c-2.5-.8-.4,4.1-2.8,1.3"
												style={{
													fill: "none",
													stroke: "#0b213f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M86,353.4c.3-4-7.4-7.1-8.3-2.4"
												style={{
													fill: "none",
													stroke: "#061020",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M77.7,351.1c-2,1-2.3-1.2-3.4-2.1-1.2,1.8-1,4.4-4.3,2.1-1.8-1.4-2.7,0-1.9,1.4,1.7,2.1-.8,1.4-2.1,2.1-3.1,4.1,.2,4.5,3.6,3.9,9.6-5.7,23,30-16.5,8.4"
												style={{
													fill: "none",
													stroke: "#071832",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M53.2,366.9c3.3-4.3-10.8-5.3-12.5-7.4"
												style={{
													fill: "none",
													stroke: "#0b213f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M40.7,359.5c4-1.2-.9-3.9-1.4-5.9"
												style={{
													fill: "none",
													stroke: "#08172f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M39.2,353.6c5.4,.7-2-4.8-2.5-5.8"
												style={{
													fill: "none",
													stroke: "#0d2441",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M36.7,347.8c7,.9,11.1,12.5,15.4,2.3-10-2-16.4-8.3-28.2-8.9"
												style={{
													fill: "none",
													stroke: "#071832",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M23.8,341.1c3-2.5-13.2-14.8-5.5-11.5,6.3,7.3,1.2-.5,2.7-.3,7.5,8,3.1-.6,10.1,1.3"
												style={{
													fill: "none",
													stroke: "#0b1f3d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M31.2,330.6c1.9,8,16.5-.3,2.9-3.3-16.6-10.7,9.2,.7,15-3.1,4.8,4.2,2.2-.4,.1-3.6"
												style={{
													fill: "none",
													stroke: "#071832",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M49,320.6c-1.5-4-4.2-6.7-8.3-8.2"
												style={{
													fill: "none",
													stroke: "#0b1f3d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M40.7,312.4c1.5-.9,2-2.1,1.5-3.8"
												style={{
													fill: "none",
													stroke: "#08152b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M42.3,308.6c8.3,5.6-2.5-13.6-18.5-4"
												style={{
													fill: "none",
													stroke: "#0b213f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M23.7,304.6c-.6-1.9,0-7.3,2-3.3,5.2,.4-7.4-10.7-2.4-12.5,5.8-4.6,7.3,5.2,6.2-2,17.1,.6,7-4.8-2.5-5.2"
												style={{
													fill: "none",
													stroke: "#0b1f3d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M26.9,281.6l-1-1.7"
												style={{
													fill: "none",
													stroke: "#08172f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M26,279.9c3.5-1.6,8.7,3.2,6.3-3.1-.6-1.1-.4-1.5,.8-1.4,1.7,.9,7.9,4.2,5-.7-3.6-4.3-7.4-6.3-7.3,.5-4.2,.7-10.2-3.8-8.8-8.2,1.1-2.3,7.6,4.5,6.4-.5,.3-2.3,5.4,1.5,3.9-.6-1.7-2.4-1.4-3,1-1.9,2,.6,.9-2.9,2.9-2.7,1.3-.1,1.2-1.5,.3-2.3"
												style={{
													fill: "none",
													stroke: "#0b1f3d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M36.5,259.1c.9-2.2,.8-5.4-1.3-6.5"
												style={{
													fill: "none",
													stroke: "#071832",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M35.2,252.6c-1.4-4.1-6.6-3.7-8.2-7.7"
												style={{
													fill: "none",
													stroke: "#0f2644",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M4.6,243.4c3.3,1.5,9.7-6.5,1.9-3.3l-1-1c5.8-3.8,8.8,4.5,1,5-6.8,6.1,8.6,.1,10,3-.4-3.8,2.2-3.7,4-.5"
												style={{
													fill: "none",
													stroke: "#0d2846",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M27,244.9c16.2,4.3-10.4-6.7,9.6-4.1,1.6-9.5-13.5-.5-18.5-1.2-5.6,.9-7.5-8-13.7-6.2"
												style={{
													fill: "none",
													stroke: "#0d2846",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M20.4,246.6c-1,1.4-2.9,1.3-4.5,2.3-1.4,1.2-4.3,3.3-3.9-.5,0-3-1.6,1.8-2.7,1.6-4.8-.1-7.6-2.2-5.8,3.4"
												style={{
													fill: "none",
													stroke: "#0f2644",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M5.2,261.4c-.2,1.7-4.8,5.3-.7,5"
												style={{
													fill: "none",
													stroke: "#0b1f3d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M3.1,268.3c5,1.4,4.7,3.5-.1,4.6"
												style={{
													fill: "none",
													stroke: "#08172f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M2.9,280.1c10.9-4,8.7,6,0,6"
												style={{
													fill: "none",
													stroke: "#0b1f3d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M674,180.1c3.7,.5-.6,5.8-.8,7.5"
												style={{
													fill: "none",
													stroke: "#89bbdc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M673.2,187.6h-.5"
												style={{
													fill: "none",
													stroke: "#74b2dd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M672.7,187.6c-18.8-10.5-49.3,8.8-71.5,9.6"
												style={{
													fill: "none",
													stroke: "#39a5cf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M601.2,196.9c.6-8.6,.1-10.3,2.4-17.5"
												style={{
													fill: "none",
													stroke: "#87b3dc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M615.9,183.9c5.1-1.7,9.6-4.5,13.4-8.3"
												style={{
													fill: "none",
													stroke: "#87c3dc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M629.3,175.6c2-1.1,3.7-2.6,5.2-4.4"
												style={{
													fill: "none",
													stroke: "#4dadcc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M291.8,165.3l-1.5,1.9"
												style={{
													fill: "none",
													stroke: "#9bb8d0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M290.3,167.2c-4.6,3.6-9.5,7.3-11.6,13.1"
												style={{
													fill: "none",
													stroke: "#8eaec4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M278.6,180.3c-3.7,4.4-6.4,11.8-9.7,15.3"
												style={{
													fill: "none",
													stroke: "#99b2ca",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M268.9,195.6l2.8-8.6"
												style={{
													fill: "none",
													stroke: "#86c0d9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M542.4,185.4c-6.7,7.6-6.1,19-17.2,22.9"
												style={{
													fill: "none",
													stroke: "#92aeda",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M525.2,208.3c-1.2,0-2.2,.3-3,.7"
												style={{
													fill: "none",
													stroke: "#69a5d2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M522.2,209.1c-13.1,2.4,.3-5.9-.6-9.8,2.2-14.5,15.9-18.8,22.4-30.3"
												style={{
													fill: "none",
													stroke: "#92aeda",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M298.7,170.8l6.3,7.3"
												style={{
													fill: "none",
													stroke: "#75b3d0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M304.9,178.1c5,5.8,9.7,11.8,14,18.1"
												style={{
													fill: "none",
													stroke: "#79b5d2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M319,196.1c4.2,7.3,9,16.3,17.2,18.2"
												style={{
													fill: "none",
													stroke: "#7fb6d4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M336.2,214.3c-.6,1.5-.5,2.8,.2,4.1"
												style={{
													fill: "none",
													stroke: "#629cc8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M336.5,218.4c-8-.1-7.5,10-11.5,14.7-6.4,2.6-3.3-11.4,.6-14.8"
												style={{
													fill: "none",
													stroke: "#5a96bd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M325.5,218.3c-1-13.3-18.4-30.1-22.4-36.9"
												style={{
													fill: "none",
													stroke: "#5590b6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M303.2,181.3c-3.8-5.2-8.1-9.9-12.9-14.1"
												style={{
													fill: "none",
													stroke: "#5a8eb4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M545.2,188.3c-3.2,6.9-4.4-4.5-6.7,8.3-15.8,28.4,9.4,4.1,25.9,8.1"
												style={{
													fill: "none",
													stroke: "#96b1da",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M564.5,204.9l-.3,.5"
												style={{
													fill: "none",
													stroke: "#9bb5df",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M564.2,205.3c-17.8,13-35.7,8.4-47,27"
												style={{
													fill: "none",
													stroke: "#96b1da",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M517.2,232.5c-2.9-.6-18.4,2.4-17-2.9"
												style={{
													fill: "none",
													stroke: "#d3c5ef",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M500.2,229.6c2.7-5.9-13.3,7.1-13.6-.9"
												style={{
													fill: "none",
													stroke: "#99b2dc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M486.6,228.6l4.6-4.7"
												style={{
													fill: "none",
													stroke: "#bccded",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M491.3,223.9l24.8-19.9c-4-1-2.1-6.3-1.5-10"
												style={{
													fill: "none",
													stroke: "#9aacd6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M514.5,193.9c2.8-7.5,11.3-9.6,13.4-16.4"
												style={{
													fill: "none",
													stroke: "#b6cceb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M527.9,177.6c.6-3.2,.2-8.2,2.2-10.7"
												style={{
													fill: "none",
													stroke: "#b2cbe9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M535.9,167.1c-11,1.2-6.4,20.3,5,2.2"
												style={{
													fill: "none",
													stroke: "#99aada",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M522.2,209.1c-16.8,17.9,4.2,13.9,3-.7"
												style={{
													fill: "none",
													stroke: "#b8bee9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M303.2,181.3c-2.4,.2-4,1.5-4.7,3.9"
												style={{
													fill: "none",
													stroke: "#4786aa",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M298.5,185.2c0-4.2-6.3,6.2-7,6.1"
												style={{
													fill: "none",
													stroke: "#5788ae",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M291.5,191.3c-7.9,8-7.7,14.8-13.8,22.7"
												style={{
													fill: "none",
													stroke: "#6c91b6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M277.7,214.1l-3.3-2"
												style={{
													fill: "none",
													stroke: "#3a7094",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M274.4,212.1c1.9-12.5,12.7-22.5,4.2-31.7"
												style={{
													fill: "none",
													stroke: "#5788ae",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M268.9,195.6l-.5,.8"
												style={{
													fill: "none",
													stroke: "#509ac3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M268.5,196.4c-4.9,4.5,.4,2.3-4-4.3,.2-5-5.1-6.2-6.9-11.8,.4-8.7-8.5-4.5-13.6-6.4"
												style={{
													fill: "none",
													stroke: "#39a7d1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M787,188.1c7.4-10.2-17.9-5.5-18.6-.6"
												style={{
													fill: "none",
													stroke: "#68b6e6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M768.4,187.6l-4.7-4.2"
												style={{
													fill: "none",
													stroke: "#558cb6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M872.4,239.5c-6.5,.4-8.6-2.9-12.1-6.7"
												style={{
													fill: "none",
													stroke: "#144e77",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M860.3,232.8c.1-.8-.3-1.5-1.1-2"
												style={{
													fill: "none",
													stroke: "#0a2b41",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M859.2,230.8c-.4-.5-.7-1.1-.8-1.7"
												style={{
													fill: "none",
													stroke: "#103a5e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M858.4,229.1c.7-6.6-7.8-9-10.2-14.2,1.1-1.9,2.7,2.3,4,2.5,3.9,0-4.5-5.2-3.5-8.4"
												style={{
													fill: "none",
													stroke: "#0a2b41",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M848.7,208.9c.9-1.8,3.9,4.3,5.1,1.3"
												style={{
													fill: "none",
													stroke: "#0c304e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M629.3,175.6c0-.4-.2-.6-.5-.5"
												style={{
													fill: "none",
													stroke: "#9ecddc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M839.7,185.9c1.2,4.8,.4,4.5-2,9.2"
												style={{
													fill: "none",
													stroke: "#103c5f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M837.8,195.1c-3,6.6,1.1-1.2,2.2,1.5"
												style={{
													fill: "none",
													stroke: "#1a4f76",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M840,196.6c0,2.3-6.4,6.5-2.3,8.5"
												style={{
													fill: "none",
													stroke: "#0f3454",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M837.8,205.1c-1.1,1-10.8,5.6-4.1,4.8"
												style={{
													fill: "none",
													stroke: "#336f97",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M833.7,209.9c0,.4,.3,.8,.8,1.1"
												style={{
													fill: "none",
													stroke: "#0f3454",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M834.5,210.9c-3.4,8-11.2,7.8-8,14.9"
												style={{
													fill: "none",
													stroke: "#245d88",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M826.6,225.8c-.8,3.7,3.7,0,4.7-1.2"
												style={{
													fill: "none",
													stroke: "#0e2f47",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M831.2,224.6c.7,.2,1,.7,.8,1.5"
												style={{
													fill: "none",
													stroke: "#1d527e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M832,226.1c-.3,2.5,.7,3.8,3.2,3.8"
												style={{
													fill: "none",
													stroke: "#0e2f47",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M835.2,229.9c-.6,1.7-1.5,3.2-2.8,4.5"
												style={{
													fill: "none",
													stroke: "#0f3454",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M832.4,234.3c-.7,.1-1.4-.1-2-.5"
												style={{
													fill: "none",
													stroke: "#175580",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M830.5,233.8c-.7-1.4-3.9,.5-2.2,1.6"
												style={{
													fill: "none",
													stroke: "#103351",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M828.2,235.4c-.4,1.8,2.3,.5,2.5,2.2"
												style={{
													fill: "none",
													stroke: "#175580",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M830.8,237.6c-1.5,2.5-5,.7-6.2,3.4"
												style={{
													fill: "none",
													stroke: "#0e2f47",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M824.5,241c-8.7-.5-33.7-50.8-29.8-17.1"
												style={{
													fill: "none",
													stroke: "#175580",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M794.7,223.8c-2.5-.8,.3-15.8-2.5-7.4"
												style={{
													fill: "none",
													stroke: "#537ba4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M792.2,216.3c-2-.3,.1-4.9-1.9-3-1.2,1.2-.3-2.4-4.9-4.5-9.7-3.5-5.3-5.5,0-11.1"
												style={{
													fill: "none",
													stroke: "#1a557e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M268.5,196.4l-4,9.5"
												style={{
													fill: "none",
													stroke: "#4c99c2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M264.4,205.9c-13.1-7.6-26-15.5-38.7-23.8"
												style={{
													fill: "none",
													stroke: "#2e81a8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M225.8,182.1c-2.4-1.2-5.8,1.6-8.8,.2"
												style={{
													fill: "none",
													stroke: "#2d7ea6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M514.5,193.9c-3.1-1.5-5.9-3.4-8.5-5.6"
												style={{
													fill: "none",
													stroke: "#6fb1cf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M506,188.3c-3.4-5.3-4.8,9.8-5.6,11.1"
												style={{
													fill: "none",
													stroke: "#bdd4ea",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M594.5,196.4c4.1,2-15.2,14.7-9.1,12.5,5.6-3,8.9-9.6,15-7.1"
												style={{
													fill: "none",
													stroke: "#79abd5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M600.4,201.9c-1.2,3.3-1.4,6.5,2.5,7.4,.6,.5-2.8,.8-.6,.7"
												style={{
													fill: "none",
													stroke: "#44a2cb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M602.3,210.1c-16.2,6-31.9,14.7-48.8,18.6"
												style={{
													fill: "none",
													stroke: "#7faed8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M553.5,228.7l-36.3,3.8"
												style={{
													fill: "none",
													stroke: "#88afd8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M564.2,205.3c-10.1,13.1,11.1,9.4,15.4,2.7-1.5-9.5,5-16.7,1.6-25.5-11-9.8,2.8,25.7-16.6,22.2"
												style={{
													fill: "none",
													stroke: "#509fc8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M738,178.8l-6.1,11.5"
												style={{
													fill: "none",
													stroke: "#8f99b9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M731.9,190.3l-1.2,.2"
												style={{
													fill: "none",
													stroke: "#b3b1ce",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M131.2,235.9l.2,2.2"
												style={{
													fill: "none",
													stroke: "#537195",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M131.4,238.1c-1.8,.5-4.9,14.1-3.4,16.1,.9,2.7-4.6,3.3-5,5.2"
												style={{
													fill: "none",
													stroke: "#102b46",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M123,259.4c-.3,2.1-21-10.5-17.8-16.3"
												style={{
													fill: "none",
													stroke: "#194263",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M105.2,243.1c21.4,4.5-27.1-11.4-25.7-18.4,3.5-10.8-58.6-36.4-36.8-23.5"
												style={{
													fill: "none",
													stroke: "#214669",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M42.7,201.1c-9-1.3-29.4-20.3-20.3,1.1-3.3-.8-2.8-4.3-5-6-3,5-10,4-14.5,7.4"
												style={{
													fill: "none",
													stroke: "#194263",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M792.2,216.3c-1.1,5.8-.9,12.4-2.4,18"
												style={{
													fill: "none",
													stroke: "#53779d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M789.7,234.3c-.4,0-.6,.2-.8,.5"
												style={{
													fill: "none",
													stroke: "#476593",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M789,234.8c-2,.8-.2,4.9,1.8,5.2"
												style={{
													fill: "none",
													stroke: "#53779d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M790.7,239.9l-.5,1.5"
												style={{
													fill: "none",
													stroke: "#10314e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M790.2,241.3c-4.8,3.4-6.7,3.2-2.5,7.8"
												style={{
													fill: "none",
													stroke: "#607da2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M787.7,249.1l-1,.7"
												style={{
													fill: "none",
													stroke: "#0e2b3f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M786.8,249.9c-1.5-1.1-3.1-1.2-4.8-.2"
												style={{
													fill: "none",
													stroke: "#53779d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M782,249.6c-.3-3.6-3,4.3-3.5,.6,.9-4.2-3.2-1.9-5.2-2-1.7-1.5-2.7-4.3-4.8-5.5-4.5-3.1-5.8-1.8-3.7,3.9-1.2,6.3-17.1-7.6-14.1-13.9"
												style={{
													fill: "none",
													stroke: "#1a4c71",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M750.5,232.6c2.9-5.3,6.6-9.9,11.2-13.8"
												style={{
													fill: "none",
													stroke: "#3e628f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M761.6,218.8c3.9-3,7.5-6.3,10.8-9.9"
												style={{
													fill: "none",
													stroke: "#5d70a3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M848.6,204.7c-.3-.3-.9-.5-1.6-.6"
												style={{
													fill: "none",
													stroke: "#05172e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M847,204.1c2.2-3.8-4-.9,0-6.2,2.2-2.2-5.4-9.4-3.4,.8-1.6,.1-.9-8-3.5-4.7-.4,1.4-1.1,2-2.4,1.1"
												style={{
													fill: "none",
													stroke: "#103250",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M768.4,187.6l11.7,9.6"
												style={{
													fill: "none",
													stroke: "#4186b2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M775.2,202.1c-16.9,11.2-8.7,4.2-22.7,7.5-2.9,1.7-10.1,1-11.4,5.3-.6,.1-7.1-.2-7.4,.4-6.1,3.5-26.8,3.9-23-5.5"
												style={{
													fill: "none",
													stroke: "#29597f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M710.7,209.7l3.5-7.2"
												style={{
													fill: "none",
													stroke: "#6675a9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M714.2,202.6c3.2-1.9,5.7-4.4,7.6-7.4"
												style={{
													fill: "none",
													stroke: "#255478",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M721.8,195.2c1.4,.3,2.9-.3,4.4-1.8"
												style={{
													fill: "none",
													stroke: "#6695b7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M726.2,193.3c1.3,.2,2.1-.2,2.5-1.4"
												style={{
													fill: "none",
													stroke: "#3f7caf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M730,191.2c-4.1,9.7,1.8,2.3,1.9-.8"
												style={{
													fill: "none",
													stroke: "#517397",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M687,185.9c-.5,.1-8.4-3.8-8.5-2.6l-9.7,17.6"
												style={{
													fill: "none",
													stroke: "#7886a3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M668.7,200.9c-.3,.1-.6,0-.8-.2"
												style={{
													fill: "none",
													stroke: "#cbbce4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M667.9,200.6c-.6-1.5-2-1.9-4.1-1.2"
												style={{
													fill: "none",
													stroke: "#8897b8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M663.8,199.4c3.1-2.5,8-2.6,9.4-11.7"
												style={{
													fill: "none",
													stroke: "#c8caec",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M601.2,196.9c-2.9,1.6-1.7-3.7-5.1-2.7"
												style={{
													fill: "none",
													stroke: "#c0c0e9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M274.4,212.1l-10-6.2"
												style={{
													fill: "none",
													stroke: "#45749a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M695.7,189.1l-6.2-2.2"
												style={{
													fill: "none",
													stroke: "#537aa2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M225.8,182.1c6.4,15.5,12.6,20.7,25,35.6"
												style={{
													fill: "none",
													stroke: "#26597e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M250.7,217.6l11.5,14.5"
												style={{
													fill: "none",
													stroke: "#325c84",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M262.2,232.1c.7,7-4.1,19.6-12.9,17.1"
												style={{
													fill: "none",
													stroke: "#235a81",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M249.3,249.1l-1.8-2.8"
												style={{
													fill: "none",
													stroke: "#295b83",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M325.5,218.3c-4.3,1.9-4.1,7.1-6.9,9.4-8.6,1.3-9.9-5.6-12.8-12.2"
												style={{
													fill: "none",
													stroke: "#478db3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M305.8,215.3c-7.4-8.6-13.9-18.4-7.3-30.2"
												style={{
													fill: "none",
													stroke: "#528ab0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M277.7,214.1l2.6,1.8"
												style={{
													fill: "none",
													stroke: "#597ca2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M280.3,215.9c14,4.3,21.1,18,33,23.3"
												style={{
													fill: "none",
													stroke: "#357196",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M313.4,239.1c12.7,6.3,20.8,9.8,26,22.4"
												style={{
													fill: "none",
													stroke: "#3a779d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M339.4,261.5c3.5,3.7,8,3.7,11.2,7.5"
												style={{
													fill: "none",
													stroke: "#6b81ae",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M350.6,269c-8.7,.7-6.1-8.8-11.7,4.4"
												style={{
													fill: "none",
													stroke: "#275f86",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M338.9,273.3c-19.7-12.9-36.6-21.4-54.7-31.6"
												style={{
													fill: "none",
													stroke: "#38638d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M284.2,241.8c-13.1-.7-25.3-41.7-33.5-24.3"
												style={{
													fill: "none",
													stroke: "#335e86",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M710.2,191.1c-8.3,2.7-19.9-1.8-29.3-6.1-11.9,15.7-21.5,38.5-31.4,57.2"
												style={{
													fill: "none",
													stroke: "#184364",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M649.6,242.2l1.1-5.1"
												style={{
													fill: "none",
													stroke: "#3b5682",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M650.7,237.1c4.3-12.2,2.1-9,9.5-18"
												style={{
													fill: "none",
													stroke: "#5a6495",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M660.2,219.1c4.8-5,7-11.4,8.4-18.2"
												style={{
													fill: "none",
													stroke: "#676f9c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M305.8,215.3c-.9,3-3-.6-4.1-1"
												style={{
													fill: "none",
													stroke: "#5790b7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M301.7,214.4c-2.8-3.7-6.1-6.9-9.9-9.6"
												style={{
													fill: "none",
													stroke: "#528ab0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M291.8,204.8c3.4-9.2-4.2-2.9-3-6,1.9-1.5,9.7-9.9,2.7-7.4"
												style={{
													fill: "none",
													stroke: "#7795bc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M672.7,187.6c-8.6,10-23.3,6.3-33.9,14.8-9.5,21.2-16.4,11.7-36.5,7.7"
												style={{
													fill: "none",
													stroke: "#78b5e0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M600.4,201.9l.8-5"
												style={{
													fill: "none",
													stroke: "#72b2dd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M712,191.6l6.2,1.9"
												style={{
													fill: "none",
													stroke: "#3675a4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M718.2,193.6l3.6,1.6"
												style={{
													fill: "none",
													stroke: "#5e8eac",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M714.2,202.6c-12.3,11.6-23.9,15.8-32.3,25.3"
												style={{
													fill: "none",
													stroke: "#5e6e9e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M682,227.8c-12.7,19.9-21,43.9-44.5,52.6"
												style={{
													fill: "none",
													stroke: "#617a9e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M637.5,280.4c-.7-.1-1-.6-1-1.3"
												style={{
													fill: "none",
													stroke: "#1e4c6d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M636.5,279.1c2.9-6.6,5.4-13.3,7.5-20.2"
												style={{
													fill: "none",
													stroke: "#32597f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M644,258.9l5.6-16.6"
												style={{
													fill: "none",
													stroke: "#3f608b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M506,188.3c-2.1,15.4-9.2,20.7-20.8,29.4"
												style={{
													fill: "none",
													stroke: "#a2b4d5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M485.3,217.7c.7-9.8,15.1-8.3,15.2-18.2"
												style={{
													fill: "none",
													stroke: "#c3d5ec",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M663.8,199.4c-21.8,4.2-14.2,10.8-23.3,24.7"
												style={{
													fill: "none",
													stroke: "#738eb9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M640.5,224.1c5.5-16.3-2.3-8.4-4,1.7"
												style={{
													fill: "none",
													stroke: "#99b4e4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M636.5,225.8c-5.3,2.4-3.3,6-5.7,11.1"
												style={{
													fill: "none",
													stroke: "#7e94bf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M630.8,236.9c-7-5.9-19.5-17.7-25.5-18.7,7.9,5.5,17.9,29.3,22.4,27.4"
												style={{
													fill: "none",
													stroke: "#88b0de",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M627.7,245.6l-3.2,5"
												style={{
													fill: "none",
													stroke: "#7e94bf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M624.5,250.6c-39.9-8.1-90-6-133.4-5.6"
												style={{
													fill: "none",
													stroke: "#adbeea",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M491,244.9c-.5-.4-.8-1.2-1.1-2.5"
												style={{
													fill: "none",
													stroke: "#82afda",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M489.9,242.4c12-3.5,34.8,5.1,38.9-7.9,6.3-3.1,24.7,2.4,24.7-5.9"
												style={{
													fill: "none",
													stroke: "#bcc2ed",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M491.3,223.9c.5-4.2-5.9-1.9-6-6.2"
												style={{
													fill: "none",
													stroke: "#75b2d1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M2.9,214.1l4.8,2.5"
												style={{
													fill: "none",
													stroke: "#185278",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M726.2,193.3c-2.7,1.5-5.9-1.1-8,.3"
												style={{
													fill: "none",
													stroke: "#78b6e3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M291.8,204.8c-3.5,4.3-7.3,8-11.5,11.1"
												style={{
													fill: "none",
													stroke: "#6792b8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M42.7,201.1c28.7,14.2,23.6,33.7,62.5,41.9"
												style={{
													fill: "none",
													stroke: "#1f4466",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M123,259.4l-.8,1.9"
												style={{
													fill: "none",
													stroke: "#0e2843",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M122.2,261.3c-9.4,10.1,13.4-1.5,1-.2"
												style={{
													fill: "none",
													stroke: "#0e263e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M123.2,261.1c1-5,4.7,.4,5.7-2.8"
												style={{
													fill: "none",
													stroke: "#0e2843",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M128.9,258.3c2.1-.3,2.7,.4,1.7,1.9"
												style={{
													fill: "none",
													stroke: "#2b5076",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M130.6,260.2c-3.6,3.4-6.7,7.1-9.3,11.3"
												style={{
													fill: "none",
													stroke: "#0e2741",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M121.4,271.5c-.4,8.4-12.4,.6-17.8-1.5-4.6,.3-17,7.6-19.2,0"
												style={{
													fill: "none",
													stroke: "#123151",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M85.5,267.1c1.5-1-.5-3.3-1.7-3.5"
												style={{
													fill: "none",
													stroke: "#2b5076",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M84.5,261.9c3.4,1-.1-3.4-1-3.5"
												style={{
													fill: "none",
													stroke: "#30557d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M83.2,256.1c.7-1.4-1.5-4.2-.8-1"
												style={{
													fill: "none",
													stroke: "#466585",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M60.4,257.1c-4-5.5,.2-20-6.6-16.7"
												style={{
													fill: "none",
													stroke: "#24547d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M53.9,240.4c.4-5-1.3-9-5-12.1"
												style={{
													fill: "none",
													stroke: "#0e2b48",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M48.9,228.2c-2.7-1.7-10.6-18.4-10.6-11.4"
												style={{
													fill: "none",
													stroke: "#24547d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M25.2,224.6c-3-3.1,3.3-1.8,4.5-1.7,4-.7-9.2-4.6-9.3-3.1"
												style={{
													fill: "none",
													stroke: "#143d5f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M20.5,219.9c-1.4-.4-2.4-.1-3,1"
												style={{
													fill: "none",
													stroke: "#0e2b48",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M17.4,220.9h-.7"
												style={{
													fill: "none",
													stroke: "#143d5f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M847,204.1c-2-1.9-3.6-3.5-6.1-4.4-.2-.8,1.1-5-1-3.1"
												style={{
													fill: "none",
													stroke: "#0f2944",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M486.6,228.6c-10.6-3-18.6-10.4-27.3-15.3"
												style={{
													fill: "none",
													stroke: "#73b8d8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M459.3,213.2c-2.7,5.5-6.1,10.4-10.1,14.6"
												style={{
													fill: "none",
													stroke: "#c3d5ec",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M449.2,227.9c-2-2.8-4.5-5.2-7.2-7.2"
												style={{
													fill: "none",
													stroke: "#73b8d8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M441.9,220.6c-2.5,.8-3.8,3.6-6.4,5"
												style={{
													fill: "none",
													stroke: "#bccded",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M342.2,221.6c-1.6-2.8-3.6-5.2-6-7.3"
												style={{
													fill: "none",
													stroke: "#7ab9dc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M848.7,208.9c-.2-.7-.5-.9-1.2-.6"
												style={{
													fill: "none",
													stroke: "#030915",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M847.5,208.3c1.6-1.8-2.4-2.8-2.9-4.6-1.1-2.2-2.8,3.2-3.5,4.2"
												style={{
													fill: "none",
													stroke: "#0d2541",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M841,207.9c.3,3.5-10.5,12.5-7,7,2.1-2.6,7-6.4,.5-4"
												style={{
													fill: "none",
													stroke: "#193756",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M833.7,209.9c0-1.1,5.9-3,4-4.9"
												style={{
													fill: "none",
													stroke: "#284965",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M227,249.3l13.7,24.5c5.1,1.9,24.9,4.3,20.3-5"
												style={{
													fill: "none",
													stroke: "#27628b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M261,268.8c8.5,3.6,18.2-2.2,27.8,.1,3.5-2,6.3,6,8.4,1.2,.4-2.2,2.7-1.5,3.5-2.1-2.5-3,2.6-2.9,2.9-.1,1.2,1.9,.4-.5,.5-1.3"
												style={{
													fill: "none",
													stroke: "#216089",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M304,266.6l6.5,7.3"
												style={{
													fill: "none",
													stroke: "#346793",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M310.5,273.9c7.1,15.6,16.2,3.8,26.7,4.6"
												style={{
													fill: "none",
													stroke: "#2c638e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M337.2,278.6c.5,.7,1.2,1.2,2,1.5"
												style={{
													fill: "none",
													stroke: "#346793",
													strokeWidth: "2px",
												}}
											/>
											<line
												x1="351.2"
												y1="295.8"
												x2="339.2"
												y2="280.1"
												style={{
													fill: "none",
													stroke: "#3c6e9d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M351.2,295.8c-6,1.1,2.1,4.9,0,7.9-.9,3-2.8,5.6-1.8,8.6-.2,3.4-6.3-3.3-7.4,2-.2,.5-3-3-3.2-3"
												style={{
													fill: "none",
													stroke: "#1e6691",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M338.7,311.1c-9.1-1.6-19-5.5-27.4-11.9-4.9-3.9-13.3,2.6-16.3-2.7-9.2-2.9-20.9-10-32.2-6.1-2.4-.4-4.7,1.6-6.5,1.5-.5-.9-4.5-1.6-4,.3,2.1,6.2,11.3,11.4,10.5,18"
												style={{
													fill: "none",
													stroke: "#1c648f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M262.7,310.3c-5.5-4.7-11.5-27.3-19.9-16.8"
												style={{
													fill: "none",
													stroke: "#3e81ae",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M242.8,293.6c-3.5,2.8-7.4,5.1-11.5,6.9"
												style={{
													fill: "none",
													stroke: "#184d74",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M231.3,300.4c-1.2-5.9-8.4-22.3-6.3-8.3"
												style={{
													fill: "none",
													stroke: "#4a779c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M225,292.1c-3.4-.5-2-1.9-1.6-3.7-.2-.9-.6-.8-1.2,.2-2.3,1.9-1-3.7-.6-4.8"
												style={{
													fill: "none",
													stroke: "#184f75",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M221.6,283.8c1.1-.4,1.4-.9,.7-1.6"
												style={{
													fill: "none",
													stroke: "#123a59",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M222.2,282.1c2.5-2.4,1-10.2-1.7-12.3"
												style={{
													fill: "none",
													stroke: "#3c6e9d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M220.5,269.9c-1.3-2.1,1.2-5.4-2-6.7"
												style={{
													fill: "none",
													stroke: "#216089",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M218.5,263.2c15.9-.8-11.5-40.4-14.6-50.7"
												style={{
													fill: "none",
													stroke: "#295f89",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M667.9,200.6c-2.3,6-5.4,11.6-9.1,16.9"
												style={{
													fill: "none",
													stroke: "#7780b1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M658.8,217.5c-4.7,3.6-8.2,8.2-10.3,13.6"
												style={{
													fill: "none",
													stroke: "#6975aa",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M648.5,231.1c.2-.9,.2-1.7-.1-2.5"
												style={{
													fill: "none",
													stroke: "#295379",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M648.4,228.6c2.8-3.2-.7-4.7-3.3-5.7-1.6-.2-5.2,4.2-6.1,2"
												style={{
													fill: "none",
													stroke: "#3e618b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M639,224.9l1.5-.8"
												style={{
													fill: "none",
													stroke: "#5981b0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M660.2,219.1c-1.6,.2-2-.4-1.4-1.7"
												style={{
													fill: "none",
													stroke: "#ad9ad6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M770.7,206.6l-16,13.8"
												style={{
													fill: "none",
													stroke: "#6273a5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M754.7,220.3l-9.6,11.6"
												style={{
													fill: "none",
													stroke: "#436592",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M745.1,231.9c-10.9,5.3-11.4,15.7-16.6,.1"
												style={{
													fill: "none",
													stroke: "#1f4f73",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M728.5,232.1c-4.8,3.6-11.5,8.9-17.7,11"
												style={{
													fill: "none",
													stroke: "#586f9e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M710.7,243.1l-.5,.3"
												style={{
													fill: "none",
													stroke: "#7a97ad",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M710.2,243.4c-2.9-.8-6.9,12.7-7.4,5.3,4.1-3.1-16-3-14.2-1.3-1.6-.5-2.3-.8-3.6,1.3-2.2-1.7-4.5,3.1-5.7,4.2"
												style={{
													fill: "none",
													stroke: "#1f5479",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M679.2,252.8l1.4-2.6"
												style={{
													fill: "none",
													stroke: "#4c6895",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M680.6,250.2c6.2-9.6,6.9-15.6,11.9-27"
												style={{
													fill: "none",
													stroke: "#5f6fa2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M692.5,223.2c2.3-3.7,6.2,2.5,8.5,2.1l9.8-15.6"
												style={{
													fill: "none",
													stroke: "#6273a5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M692.5,223.2c-4.5-.6-7.7,1.2-9.5,5.4"
												style={{
													fill: "none",
													stroke: "#9d8bcc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M683,228.6l-1-.8"
												style={{
													fill: "none",
													stroke: "#a39ccf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M847.5,208.3c-5.3-.8-.3,4.7-4.9,5.4"
												style={{
													fill: "none",
													stroke: "#0b2034",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M842.6,213.7c-.2,1.9-1.2,2.9-3.1,3.1"
												style={{
													fill: "none",
													stroke: "#0b2034",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M839.5,216.9c-.4-.3,3.7-10.5,1.5-9"
												style={{
													fill: "none",
													stroke: "#224e75",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M301.7,214.4c.9,9.2,11.6,17.2,11.7,24.7"
												style={{
													fill: "none",
													stroke: "#478db3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M761.6,218.8c-2.3,.4-5.7,5.8-7,1.5"
												style={{
													fill: "none",
													stroke: "#8181bc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M839.5,216.9c-.4,.2-1.7,3.4-2.4,2.3-2.9-1.8-7.5,5-10.5,6.5"
												style={{
													fill: "none",
													stroke: "#183249",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M858.4,229.1c-4.2-2.4-9.4-6-13.1-9.4-.4-3.2,1.5,.3,2.9,.3,4,.9-5-6.3-4.9-5.7"
												style={{
													fill: "none",
													stroke: "#071325",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M843.4,214.3c-.1-.3-.4-.5-.8-.6"
												style={{
													fill: "none",
													stroke: "#010408",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M284.2,241.8c-2.9,1.7-3.6,5.5-4.3,9.1"
												style={{
													fill: "none",
													stroke: "#446693",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M279.9,251c-6.9-5.3-12.8-11.6-17.6-18.9"
												style={{
													fill: "none",
													stroke: "#315f89",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M824.5,241c.5-.3,10.4-2.5,6.2-3.4"
												style={{
													fill: "none",
													stroke: "#0a2b41",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M828.2,235.4c.9-.3,1.7-.8,2.2-1.6"
												style={{
													fill: "none",
													stroke: "#0c2f4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M832.4,234.3c.7,1.9,3.9-3.1,3.7-4.7"
												style={{
													fill: "none",
													stroke: "#0c304e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M836.2,229.6c2.1-1.2,1.3,1.9,1.8,3"
												style={{
													fill: "none",
													stroke: "#0a2b41",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M838,232.6c.1,1.2,.5,2.5,1.2,3.7"
												style={{
													fill: "none",
													stroke: "#14456b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M839.2,236.3c-3.3,3.6-5.2,10.5-11.4,11.5"
												style={{
													fill: "none",
													stroke: "#0a2b41",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M827.8,247.9c-2.3,.2-6.7,3.8-6.8,5.7,4.1,1.8,3.8-3.5,6.8-5.2"
												style={{
													fill: "none",
													stroke: "#0a2b41",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M827.7,248.3c1.6,0,2.3,.9,2.3,2.5"
												style={{
													fill: "none",
													stroke: "#0a2b41",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M830,250.9c2,2.6-2.4,1.7-3.3,3.7"
												style={{
													fill: "none",
													stroke: "#1a4e78",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M826.8,254.6l-3.6,3"
												style={{
													fill: "none",
													stroke: "#0a2b41",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M823.2,257.6l-1.5,1"
												style={{
													fill: "none",
													stroke: "#1a4e78",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M821.7,258.6c-1.1,.4-1.9,1.1-2.5,2"
												style={{
													fill: "none",
													stroke: "#0c2f4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M819.2,260.6c.5,1.6,1.6,2.4,3.2,2.5"
												style={{
													fill: "none",
													stroke: "#1a4e78",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M822.5,263.1c.9,0,1.6-.4,2.2-1"
												style={{
													fill: "none",
													stroke: "#0a2b41",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M824.7,262.1c.4,0,.7,.1,.7,.2"
												style={{
													fill: "none",
													stroke: "#1a4e78",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M825.4,262.2l.1,1.4"
												style={{
													fill: "none",
													stroke: "#0a2b41",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M825.5,263.6c-2.5,4.1-7.6,6.9-9.7,10.3,2.4,1.3,2.7,2.5,.9,2-7.8-1.1-.1,2.7-3.8,4.4"
												style={{
													fill: "none",
													stroke: "#103e62",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M813,280.4c-25.2-8.7,5.2-18.9-11.7-12.7"
												style={{
													fill: "none",
													stroke: "#0c2f4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M801.2,267.6c-2-.2-2.1-2.8-4-3.6"
												style={{
													fill: "none",
													stroke: "#366594",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M797.2,263.9c2.4-1.4,9.2,1.3,3.6-1.8-.6-1.6,4.4-3.3,5.1-5.6-9.4-3.3,1.1-4-3.9-5.7-5.2-1,2.7,5.5-2.3,7.7-9.3-5.2,.9-7.2-3.8-9.1"
												style={{
													fill: "none",
													stroke: "#0c3150",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M796,249.4c2.4,.2-.3-1.4,.4-2.5"
												style={{
													fill: "none",
													stroke: "#436595",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M796.4,246.9c.2-.7,0-1.3-.7-1.7"
												style={{
													fill: "none",
													stroke: "#5d7da4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795.7,245.1c.6-1.8,.6-3.7,0-5.6"
												style={{
													fill: "none",
													stroke: "#0c3150",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795.7,239.5c-.4-.6-.6-1.3-.5-2.1"
												style={{
													fill: "none",
													stroke: "#446e93",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795.2,237.3v-3.5"
												style={{
													fill: "none",
													stroke: "#11385b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795.2,233.9c.8-1.2,.7-2.4-.2-3.5"
												style={{
													fill: "none",
													stroke: "#4f779f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795,230.3c-1.8-1.4-1.7-2.5,.2-3.5"
												style={{
													fill: "none",
													stroke: "#2e5c86",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795.2,226.8c.3-1.4,.1-2.4-.5-3"
												style={{
													fill: "none",
													stroke: "#4f779f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M218.5,263.2c-4.2-7.4-8-15.1-11.5-22.9"
												style={{
													fill: "none",
													stroke: "#2b5c86",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M459.3,213.2c-1,4.2-6.7,18-10.2,14.7"
												style={{
													fill: "none",
													stroke: "#a0badc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795.2,226.8c-5.2-3.4-2.3,3.8-1.7,6,.4,1.1-.2-2.6,1.5-2.5"
												style={{
													fill: "none",
													stroke: "#6a82aa",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795.2,233.9c-3.2-.8-2.5,2.6-3.5,4.5"
												style={{
													fill: "none",
													stroke: "#4d5e80",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M791.8,238.3l-1,1.5"
												style={{
													fill: "none",
													stroke: "#485775",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M789,234.8c1.7,2.2,1.9,2,.8-.5"
												style={{
													fill: "none",
													stroke: "#7f8bb9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M500.2,229.6c-5.8,4.6-18.8,3.7-10.2,12.8"
												style={{
													fill: "none",
													stroke: "#8bb0da",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M491,244.9l3,4.7"
												style={{
													fill: "none",
													stroke: "#7bacd7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M493.9,249.6l3.5,6.7"
												style={{
													fill: "none",
													stroke: "#6fa9d4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M497.5,256.3c-2.1,.7-2,4.3-4.7,3.1"
												style={{
													fill: "none",
													stroke: "#5aa8d3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M492.8,259.4c-9.7-7.8-17.3-19.7-30.3-22.6,2.4,3.7,8.9,3.1,11.8,7"
												style={{
													fill: "none",
													stroke: "#8bb0da",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M474.3,243.9l3.7,4.7"
												style={{
													fill: "none",
													stroke: "#5aa8d3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M478,248.6c-6.8,.7,4.1,7.7,1.6,11-.3,.6-2.1,3.3-2.1,4,.2,2.8-3.6,.9-3,4"
												style={{
													fill: "none",
													stroke: "#4ea0cc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M474.4,267.3l-15.7-11.1"
												style={{
													fill: "none",
													stroke: "#68a2d1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M458.7,256.2c-6.9,1.6-14.8,3.5-19.8,8.3"
												style={{
													fill: "none",
													stroke: "#52a0ca",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M438.9,264.5c-5.9,4.3-13.8,4.4-19.4,5.2"
												style={{
													fill: "none",
													stroke: "#82afda",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M419.5,269.6c-3.7,1.5-3.9-4.4-3-6.4"
												style={{
													fill: "none",
													stroke: "#78b6d9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M416.5,263.1c15.6-6.6,12-31.8,23.1-36.8,3.1,2.5-.1-4.3,2.4-5.7"
												style={{
													fill: "none",
													stroke: "#99b2dc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M435.5,225.6c-6,10.3-3.4,20.4-12,28.3-1.7,2.4-9.8,6.3-6.9,9.2"
												style={{
													fill: "none",
													stroke: "#c0cbee",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M419.5,269.6l.3,6.2"
												style={{
													fill: "none",
													stroke: "#a9c8ec",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M419.8,275.9c-2.8,1.5-5.8,2.3-9,2.2"
												style={{
													fill: "none",
													stroke: "#7bbce1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M410.7,278.1c-19.6-9.5-46.5-12-57.7-32.5"
												style={{
													fill: "none",
													stroke: "#7ec0e4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M353.1,245.5l-10.9-23.9"
												style={{
													fill: "none",
													stroke: "#7eb7dd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M843.4,214.3c.4,3.1-3.1,11,1.4,10.1,5.1-.4,8.6,6,14.4,6.4"
												style={{
													fill: "none",
													stroke: "#071325",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M860.3,232.8c-5.2-1.5-8.5-3.4-8.5,2.1"
												style={{
													fill: "none",
													stroke: "#0b283e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M851.7,234.8c-2.7-1.1-6.5-10.6-7.8-8.2-.5,7.8,2,5.8,5.2,8.7"
												style={{
													fill: "none",
													stroke: "#071d30",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M849.2,235.3c-4.9,0-.5,4.6,.3,6.5"
												style={{
													fill: "none",
													stroke: "#0b283e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M849.5,241.8c-.4,0-.6,.1-.5,.5"
												style={{
													fill: "none",
													stroke: "#030e1c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M848.9,242.3c-1.6-2.2-3.6-4.1-4.6-6,1.1-5.6-5-9.6-6.3-3.8"
												style={{
													fill: "none",
													stroke: "#0b1f32",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M836.2,229.6c-.4-.1-.7,0-1,.3"
												style={{
													fill: "none",
													stroke: "#030915",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M832,226.1c3.5-4.2,.1,7.3,7.7-2.3"
												style={{
													fill: "none",
													stroke: "#11283f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M839.7,223.8c.7,7.2,3.9,1.8,1.4-2.2"
												style={{
													fill: "none",
													stroke: "#0a1a2c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M841.2,221.6c1.1-7.3-7.7,1.3-9.9,2.9"
												style={{
													fill: "none",
													stroke: "#11283f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M639,224.9l-2.5,.9"
												style={{
													fill: "none",
													stroke: "#6486b6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M48.9,228.2c.8,4.4,2.5,8.4,5,12.1"
												style={{
													fill: "none",
													stroke: "#1a4065",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M49.7,238.5l-2.3-4.2"
												style={{
													fill: "none",
													stroke: "#20476f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M47.4,234.2c-.1-6.6-4.2-11.3-8.3-16"
												style={{
													fill: "none",
													stroke: "#22517b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M336.5,218.4l14,28.7"
												style={{
													fill: "none",
													stroke: "#5599c5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M350.4,247.1l8.9,14.1"
												style={{
													fill: "none",
													stroke: "#54a2cc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M359.3,261.2c-7.9,7.7-11.1,2.7-19.9,.3"
												style={{
													fill: "none",
													stroke: "#7d9dcb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M353.1,245.5c-1.3,0-2.2,.5-2.6,1.6"
												style={{
													fill: "none",
													stroke: "#5da8d6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M166.7,224.6c-3.8,.2-2.8,7.5-6.7,9"
												style={{
													fill: "none",
													stroke: "#3a5c85",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M650.7,237.1c-1.8,.6-3.1,.2-4-1.2"
												style={{
													fill: "none",
													stroke: "#8181bc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M646.7,235.9l1.8-4.8"
												style={{
													fill: "none",
													stroke: "#5f6d9e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M630.8,236.9c-.4,2.8-1.4,5.7-3.1,8.7"
												style={{
													fill: "none",
													stroke: "#5383b0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M47.4,234.2c-2.3,2.3-.6,15-5.1,10.6"
												style={{
													fill: "none",
													stroke: "#122f4f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M841.2,221.6c-.8,.6-1.3,1.4-1.5,2.2"
												style={{
													fill: "none",
													stroke: "#1a3e63",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M750.5,232.6c-7.3,11.8-15.4,16.3-5.4-.6"
												style={{
													fill: "none",
													stroke: "#3e5d8a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M17.4,220.9c.8,4.9,5.3,3.3,3-1"
												style={{
													fill: "none",
													stroke: "#0b2947",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M648.4,228.6c-10.3,10.9-13.8,27.2-26.5,32.6-2.6,9.7-.5,20.8-9.9,27.2"
												style={{
													fill: "none",
													stroke: "#34597f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M612,288.3c-1.5-5.9,8.1-10,6.9-16.9"
												style={{
													fill: "none",
													stroke: "#5d8bb7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M618.9,271.5l2.1-13.9"
												style={{
													fill: "none",
													stroke: "#6b8db9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M620.9,257.5c-.3-3.1,2.5-4.4,3.6-6.9"
												style={{
													fill: "none",
													stroke: "#7791bc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M680.6,250.2c-2.2-1.7-5.7,.7-5.9-2.9"
												style={{
													fill: "none",
													stroke: "#8780bc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M674.8,247.3l5.1-11.2"
												style={{
													fill: "none",
													stroke: "#5a679a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M679.9,236.2l3.1-7.6"
												style={{
													fill: "none",
													stroke: "#a098cb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M193.2,248.4c6.6,6.1,11.6,20.5-1.9,13.7"
												style={{
													fill: "none",
													stroke: "#315f89",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M191.4,262.1c-3.1-10.3-12.2-14.9-21.1-19.2"
												style={{
													fill: "none",
													stroke: "#2d5981",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M851.7,234.8l-2.5,.5"
												style={{
													fill: "none",
													stroke: "#114066",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M679.9,236.2c-10.2,17.8-20.8,40.4-43.4,45.5"
												style={{
													fill: "none",
													stroke: "#60789d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M636.5,281.6c.1-.5,.5-.9,1-1.2"
												style={{
													fill: "none",
													stroke: "#637a9e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M646.7,235.9c-2.8,7.4-5.1,14.9-6.9,22.5"
												style={{
													fill: "none",
													stroke: "#415f8b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M639.8,258.3c-.9,3.9-8.9,25.2-3.3,20.7"
												style={{
													fill: "none",
													stroke: "#34597f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M636.5,281.6l-2,.8"
												style={{
													fill: "none",
													stroke: "#1c496c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M634.5,282.3c-7,7.3-11.8,18.9-21.5,25"
												style={{
													fill: "none",
													stroke: "#49628e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M613,307.4c-1.1-1.6-3.2-1.1-4.7-1.7"
												style={{
													fill: "none",
													stroke: "#1b4566",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M608.3,305.6c1.5-5.2,2.7-10.6,3.4-16"
												style={{
													fill: "none",
													stroke: "#2d6c93",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M611.7,289.6l.3-1.2"
												style={{
													fill: "none",
													stroke: "#497da5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M848.9,242.3c3,1,.2,4.6-1.2,1.5-1.7-1.5-.5-5.5-3.9-4.7-4.3-7.7-.1,3.2-2.8,4.2"
												style={{
													fill: "none",
													stroke: "#0c2846",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M841,243.4c-.3-.8-4.2,.6-3.1-.9,2.8-1.5,3.1-12,1.3-6.3"
												style={{
													fill: "none",
													stroke: "#0b1f32",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M134.3,246.9c0,1.5-.5,1.6-1.5,.5"
												style={{
													fill: "none",
													stroke: "#507299",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M132.7,247.4c-4-2.9,1.2-6.3-1.3-9.2"
												style={{
													fill: "none",
													stroke: "#485775",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M872.8,250.9c-5.4,2.7-10.9,9.6-13.4,1"
												style={{
													fill: "none",
													stroke: "#134267",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M859.5,251.9l1.5-1.8"
												style={{
													fill: "none",
													stroke: "#0e3e61",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M861,250.1c3.5-3.1,7.5-4.1,11.9-4.2"
												style={{
													fill: "none",
													stroke: "#175883",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M861,250.1c-2.2,.7-16.2,.7-10.2-2.1,4.9,3.3,.4-5-1.3-6.2"
												style={{
													fill: "none",
													stroke: "#0d3152",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M782,249.6c.5,2.1,1.9,3.6,4.3,4.4"
												style={{
													fill: "none",
													stroke: "#527297",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M786.4,254c-2,1.4-1.9,2.1,.1,2.4"
												style={{
													fill: "none",
													stroke: "#0f2a44",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M786.4,256.3l-.5,1.5"
												style={{
													fill: "none",
													stroke: "#527297",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M786,257.8c-3.7,3,6.6,5.4-2.1,6.4"
												style={{
													fill: "none",
													stroke: "#0f2c49",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M783.8,264.3c-.7,1.2-1.7,1.5-3,.7-7.7-3.8,5,6,6.9,6.9"
												style={{
													fill: "none",
													stroke: "#47698b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M787.8,271.9c-.1,.5-.4,1-.8,1.5"
												style={{
													fill: "none",
													stroke: "#31577e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M787,273.3l-4.9,3.6"
												style={{
													fill: "none",
													stroke: "#527297",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M782.1,276.9c-5.5-8.1-14.8-11-22.2-16.9-6.6-5.5-10.4-11.6-20.1-9.3-11.4,11.6-7.7-13.5-12.2-17.3"
												style={{
													fill: "none",
													stroke: "#184365",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M727.5,233.4l1-1.3"
												style={{
													fill: "none",
													stroke: "#536896",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M727.5,233.4c-3.9,4.4-10.3,9-16.2,10.1"
												style={{
													fill: "none",
													stroke: "#526490",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M711.3,243.6c0-.4-.2-.6-.5-.5"
												style={{
													fill: "none",
													stroke: "#aeb0d0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M279.9,251c10.9,1.7,18.5,6.2,24.2,15.6"
												style={{
													fill: "none",
													stroke: "#356490",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M261,268.8l-11.7-19.7"
												style={{
													fill: "none",
													stroke: "#285f88",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M3.1,307.1c10-7.9,10.1-15.8,19.4-1.7"
												style={{
													fill: "none",
													stroke: "#081e3b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M22.5,305.3c-9.1,10.9-5.2-1.7-10.9-.3-3.3,1.5-7.5,13.4-1.9,12.1"
												style={{
													fill: "none",
													stroke: "#08203c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M9.7,317.4c-.7,2-3.5,.4-5.1,1"
												style={{
													fill: "none",
													stroke: "#051328",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M27,244.9c-.5-.3-1-.3-1.5,0"
												style={{
													fill: "none",
													stroke: "#113252",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M25.5,244.9c-1.9,0-7.5-3.5-4.3,1.2"
												style={{
													fill: "none",
													stroke: "#0a2340",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M21.2,246.1l-.8,.5"
												style={{
													fill: "none",
													stroke: "#113252",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M782.1,276.9c-9.4,7.7-6.1,9.2,1.5,1.4"
												style={{
													fill: "none",
													stroke: "#516e91",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M783.7,278.3c-.2,.8,0,1.4,.5,1.8"
												style={{
													fill: "none",
													stroke: "#0e2843",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M784.2,280.1c-.3,1.4-.9,2.6-1.8,3.8"
												style={{
													fill: "none",
													stroke: "#455c87",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M782.5,283.9l-.5-.1"
												style={{
													fill: "none",
													stroke: "#0e2843",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M782,283.8c1.6-2.6-2.9-1.2-.9,.3"
												style={{
													fill: "none",
													stroke: "#3d5984",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M781,284.1v1"
												style={{
													fill: "none",
													stroke: "#0e2843",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M781,285.1c-1.8,1.1-3.4,6.2,.5,3.8"
												style={{
													fill: "none",
													stroke: "#305378",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M781.5,288.9c1.1,.7,2,1.8,2.7,3.2"
												style={{
													fill: "none",
													stroke: "#0e2843",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M784.2,292.1c-19.3-.2-33.3,7.6-47.5,21.1"
												style={{
													fill: "none",
													stroke: "#2b5076",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M736.8,313.2c-4.8,5.8-11.3,7.8-18.6,6.9"
												style={{
													fill: "none",
													stroke: "#153857",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M718.2,320.1c11.8-13.9-5.2,4-8.8,9.2"
												style={{
													fill: "none",
													stroke: "#1f5980",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M709.4,329.3c-1.3-.3-2.2-.7-2.8-1.2"
												style={{
													fill: "none",
													stroke: "#153857",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M706.6,328.1c-12.1-9-20.3,16.9-34.3,24.6-7.6,5.1-10.8-8.6-15.4-2"
												style={{
													fill: "none",
													stroke: "#1f5980",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M657,350.8l-1.2,1"
												style={{
													fill: "none",
													stroke: "#2d5c82",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M655.8,351.9c2.5-5.7-1.3-2.2-4.1-.6-.6,.6,.6,1.6-1.2,1.4-8.6,0-10.7-3.2-9.7-9.2"
												style={{
													fill: "none",
													stroke: "#15395a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M640.8,343.6c4.7-6.3,11.7-14.1,14.9-20.1-18.1,20.7-32.2,44.2-58,55.5"
												style={{
													fill: "none",
													stroke: "#385c86",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M597.7,379.1c-1.5,.4-2.6,1.2-3.5,2.5"
												style={{
													fill: "none",
													stroke: "#15395a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M594.2,381.6h-1.8"
												style={{
													fill: "none",
													stroke: "#7891a5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M592.5,381.6c4.2-3.1-38.4-2.7-38.9,.1"
												style={{
													fill: "none",
													stroke: "#143150",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M553.5,381.6l-9.8-.2"
												style={{
													fill: "none",
													stroke: "#829dae",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M543.7,381.3c7.7-2.4,11.6-9.7,16.1-15.9"
												style={{
													fill: "none",
													stroke: "#69729e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M559.8,365.3c3.5-4.5,18.1-30.5,4.6-21"
												style={{
													fill: "none",
													stroke: "#305378",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M564.4,344.3c10.2-31.3,18.4-20.3,41.8-34.3"
												style={{
													fill: "none",
													stroke: "#526490",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M606.2,310c1-1,1.7-2.5,2-4.4"
												style={{
													fill: "none",
													stroke: "#29668c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M613,307.4c-17,21.5-37.4,40.9-46.8,67.4,14-25,32-48.3,51.3-69.5"
												style={{
													fill: "none",
													stroke: "#455c87",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M617.4,305.2c-8.8,18.2-5.7,14.1,3.6,.2"
												style={{
													fill: "none",
													stroke: "#2b5076",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M620.9,305.3l1.6-2.4"
												style={{
													fill: "none",
													stroke: "#455c87",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M622.5,302.9c6.1-4.1-4,5.4,7.4,5.5,9.2-.3,17.1,3.7,26.8,1.5,3.5,2.1,3.9-3.1,5.9-1.6,1.1,1.4,2,1.6,2.7,.4"
												style={{
													fill: "none",
													stroke: "#184365",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M665.3,308.8c10.9-10.5,21.1-21.3,28.3-34.7"
												style={{
													fill: "none",
													stroke: "#3d668a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M693.7,274.1c6.2-10,12-20.2,17.5-30.5"
												style={{
													fill: "none",
													stroke: "#738b9f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795.2,237.3c-1.5-.7-2.6-.4-3.2,1"
												style={{
													fill: "none",
													stroke: "#425574",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M792,238.3h-.2"
												style={{
													fill: "none",
													stroke: "#0a1831",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M841,243.4c.2,.2,.3,.4,.3,.7"
												style={{
													fill: "none",
													stroke: "#030e1c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M841.3,244.1c-.1,1.2-3.5,5.3-2.6,2.9,1.8-7.8-3.9,3.7-6.2,4.5"
												style={{
													fill: "none",
													stroke: "#0b2034",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M832.5,251.6c3.2-5.9,.4-5.1-2.5-.7"
												style={{
													fill: "none",
													stroke: "#11283f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M827.7,248.3v-.5"
												style={{
													fill: "none",
													stroke: "#010408",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M644,258.9c-1.5,.2-2.8,0-4.2-.5"
												style={{
													fill: "none",
													stroke: "#556d9d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M674.8,247.3c-4.7,10.1-10.7,20.2-14.9,30.7"
												style={{
													fill: "none",
													stroke: "#46608d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M659.9,278.1c-3.3,6.9-6.3,14.1-9,21.2,.6,1,11.5-19.4,12-19.5"
												style={{
													fill: "none",
													stroke: "#31577e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M662.9,279.9l7.1-12"
												style={{
													fill: "none",
													stroke: "#46608d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M670,267.9c3.5-1.6-.1,4.9,4.3,3.2,4.6-2.9,9.9,1.6,14.1,2.3,8.4-.8,10.1-16.4,17.3-21.9"
												style={{
													fill: "none",
													stroke: "#1a4c71",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M705.7,251.4l-12.8,22.5"
												style={{
													fill: "none",
													stroke: "#748fa5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M692.9,273.9c-8.2,14.8-19.3,25-27.6,35"
												style={{
													fill: "none",
													stroke: "#3e6a90",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M622.5,302.9c6-6,9-14.9,12-20.6"
												style={{
													fill: "none",
													stroke: "#46608d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M872.8,302c-4.9,.4-7.9-5.7-12.5-6.4"
												style={{
													fill: "none",
													stroke: "#091b36",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M859.5,251.9c-5.8-1.8-1.1,4.3,2,6.2-.6,7.6,5,18.8,11.2,25"
												style={{
													fill: "none",
													stroke: "#091b36",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M860.2,295.6c7.2-4.9-12.5-8.3-11.8-15.2,.5-3.4,1-8.8-3.1-4.7-1.7,1.1,4.3,10.1,2.6,14.9-5.4,2-3.5-5.1-2.5-8.1-3.1-5.7-4.3-6.7-7.7-.4"
												style={{
													fill: "none",
													stroke: "#041329",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M837.8,282l-.4-6.9"
												style={{
													fill: "none",
													stroke: "#09213d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M837.5,275.1l1.7-4"
												style={{
													fill: "none",
													stroke: "#041730",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M839.1,271c5.3,7.9,10-16.1,2.9-10.6"
												style={{
													fill: "none",
													stroke: "#030e1c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M842,260.3c1.1-.6,4.8-8.8,1.7-5.5-.6,.5-1.9,3.9-2.4,2.1"
												style={{
													fill: "none",
													stroke: "#041730",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M841.2,256.9c.5-2.1,.3-12.7,1.8-10.3-.9,9.1,9.3,.8,2.5-.1-.8,2.5-.6,1.5-1,.4-1.8-1.9,3.4-7.8-.6-5.9l-2.7,3"
												style={{
													fill: "none",
													stroke: "#0d2948",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M492.8,259.4c-6.3-3.8-14-10.7-18.5-15.6"
												style={{
													fill: "none",
													stroke: "#94bae6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795.7,239.5c-3.5,5.7-.8,.5-3.7-1.1"
												style={{
													fill: "none",
													stroke: "#3d4e69",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M872.7,306.2c-1.2-1.2-2.8-1.9-4.4-2.2"
												style={{
													fill: "none",
													stroke: "#091b36",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M868.3,304c-4.1-7.9-6.7,.2-9.6,0-1.1-4.1-7.3-11.5,1.7-8.3"
												style={{
													fill: "none",
													stroke: "#09172f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M132.7,247.4c.5,1.2,.1,1.6-1.2,1.2"
												style={{
													fill: "none",
													stroke: "#0d2c4a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M131.5,248.5c-3.5,4.3,.9,4.7,3.8,7.1"
												style={{
													fill: "none",
													stroke: "#3d4e69",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M135.3,255.6l1,2.7"
												style={{
													fill: "none",
													stroke: "#0d2c4a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M136.2,258.3c-.8,.3-1.5,.8-2,1.5"
												style={{
													fill: "none",
													stroke: "#3d4e69",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M134.2,259.9c-1.9-1-4.3-6.4-5.3-1.5"
												style={{
													fill: "none",
													stroke: "#223959",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M123.2,261.1c-.3,.3-.6,.4-1,.2"
												style={{
													fill: "none",
													stroke: "#050f22",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795.7,245.1c-4.4-.8-3.2,3.6-5.6-3.8"
												style={{
													fill: "none",
													stroke: "#565d7a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M163.2,273.1c10.4,17,33.4,32.2,52.7,25.2"
												style={{
													fill: "none",
													stroke: "#184c72",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M215.9,298.2l.4,2.6"
												style={{
													fill: "none",
													stroke: "#134066",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M216.3,300.9c-.2,3.3-4.8,2.5-6.7,5.5"
												style={{
													fill: "none",
													stroke: "#0d2a46",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M209.5,306.3c-23.2,3.4-42.8-10.6-62.9-23.4"
												style={{
													fill: "none",
													stroke: "#134066",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M146.6,283c-.7-2.8-2.5-4.2-5.4-4.2"
												style={{
													fill: "none",
													stroke: "#27557f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M141.2,278.8c-.1-1.1-.6-1.9-1.3-2.4"
												style={{
													fill: "none",
													stroke: "#123355",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M139.9,276.4c.4-2-.5-3.1-2.7-3.3"
												style={{
													fill: "none",
													stroke: "#2f5884",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M137.2,273.1l.5-3"
												style={{
													fill: "none",
													stroke: "#254f76",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M137.7,270.1c7.4,3.2,3.4-2.1-1-4"
												style={{
													fill: "none",
													stroke: "#45688d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M136.7,266.1l.8-3.2"
												style={{
													fill: "none",
													stroke: "#0d2a48",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M137.5,262.9c4,1.3-1.4-4.5-1.3-4.5"
												style={{
													fill: "none",
													stroke: "#45688d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M135.3,255.6c.5-2.3-.6-5.5-3-3.5-1.5-.8,2.2-2-.7-3.6"
												style={{
													fill: "none",
													stroke: "#45688d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M220.5,269.9l-.1,1"
												style={{
													fill: "none",
													stroke: "#3e6b9a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M220.4,270.9c-2.2,3.2-1.5,12.4-4.6,15.5-4.7,1.4-5.3,8.7-.3,4.5,3.1-1.3-2.3,3.2-2.6,3.5"
												style={{
													fill: "none",
													stroke: "#143756",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M213,294.4c-16.7-4.4-26.1-29.7-46.1-32.9"
												style={{
													fill: "none",
													stroke: "#1e577e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M165.3,260.6c7.8-1.5,20,11.2,26.1,1.6"
												style={{
													fill: "none",
													stroke: "#1e577e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M841.2,256.9c-2.3-.2-4.6-1.8-5.4,2.3"
												style={{
													fill: "none",
													stroke: "#0d2948",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M835.9,259c-.8,1.5-1.5,1.6-2.2,.3"
												style={{
													fill: "none",
													stroke: "#113354",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M833.7,259.3c2-5.6-4.9,4.4-5.8,6.5"
												style={{
													fill: "none",
													stroke: "#0b2034",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M827.9,265.9c.2,4.1-14.4,11.8-8.8,5.7,3.1-1.8,5.2-4.5,6.3-7.9"
												style={{
													fill: "none",
													stroke: "#113354",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M825.5,263.6c.6-1.4,8.7-9,4.9-6.7"
												style={{
													fill: "none",
													stroke: "#0b2034",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M830.3,256.8c-2.3-3.3,1.1-3.2,2.2-5.3"
												style={{
													fill: "none",
													stroke: "#1b436b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M796.4,246.9h-.7"
												style={{
													fill: "none",
													stroke: "#8d91bf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795.7,246.9c-2.1-1.3-1.4,3.8-4.8,3.3"
												style={{
													fill: "none",
													stroke: "#565d7a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M791,250.1c-.7-1.4-1.8-1.8-3.2-1"
												style={{
													fill: "none",
													stroke: "#54566b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M338.9,273.3l5,5.2"
												style={{
													fill: "none",
													stroke: "#386693",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M343.9,278.6c-2.1-3.7-9.8-3.7-4.7,1.4"
												style={{
													fill: "none",
													stroke: "#5172a4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M337.2,278.6c-4.5-6.3-6.8,1.4-11.9,1.9-5.8-11.1-5.9-2.7-14.9-6.6"
												style={{
													fill: "none",
													stroke: "#416795",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M693.7,274.1c-.3,.1-.6,0-.8-.3"
												style={{
													fill: "none",
													stroke: "#99b2ca",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M705.7,251.4l4.5-8"
												style={{
													fill: "none",
													stroke: "#7594ab",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M25.5,244.9c4,4.5-2,2.4-4.3,1.2"
												style={{
													fill: "none",
													stroke: "#0c223d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M670,267.9l9.2-15"
												style={{
													fill: "none",
													stroke: "#476593",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M620.9,257.5c-40.7-3.7-84.8-6.5-127-8"
												style={{
													fill: "none",
													stroke: "#9ab8e4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M497.5,256.3l2,3.1"
												style={{
													fill: "none",
													stroke: "#79b3e0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M499.5,259.4c2.8,12.2,15.8,8.5,24.7,10.2,16.8,1.5,31.3,2.8,47.4,4.2,9.5-3.5,20.7,4.6,29.8,3.1,11,.7,16.1,.6,7.5,10.8"
												style={{
													fill: "none",
													stroke: "#6bb1de",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M608.8,287.9c-10.2,8.7-21-4.4-30.9,.6-18.8,16.5-46.6,34.4-70.8,19.2"
												style={{
													fill: "none",
													stroke: "#8facde",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M507,307.6c-.3-.2-.6-.4-1-.3"
												style={{
													fill: "none",
													stroke: "#4da2d0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M506,307.3c-16.1,6.5-30.2,26.8-48.1,11.1"
												style={{
													fill: "none",
													stroke: "#89acdd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M457.8,318.4c12.3-5.5,25.4-8.5,35.8-17.8,4.4-3.8,31.9-.8,22.4-9.9"
												style={{
													fill: "none",
													stroke: "#60b1de",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M515.9,290.7c-15.3-12.2-29-26.2-37.9-42.1"
												style={{
													fill: "none",
													stroke: "#58aad8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M35.2,252.6c-1,.2-4.8-1-4.9,.8,0,4.6-2.3-1.9-3.8-1.2,.4,1.7,1.2,3.4,1,5.2-3.6,2.3-2-9.6-7.1-3.1-.5,1.6,.2,2,2,2.9,5.1,5.4-2.7,3.1-3.6-1.4-1.6-2.6-10.8-1-15.2-2.3"
												style={{
													fill: "none",
													stroke: "#0c223d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M410.7,278.1c-14.9,13.9,31.5,17.7,42.3,17,4.4,.1,6.2-4.3,11-3.9,3.3-.1,.8-4.3,5.1-3.4,8.5-3.3,15.5-8.2,24.4-9.1"
												style={{
													fill: "none",
													stroke: "#59adda",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M493.5,278.7c7.2,4.5,14.7,8.5,22.4,12"
												style={{
													fill: "none",
													stroke: "#54a9d7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M457.8,318.4c-13.4-4.4-23.8-10.5-34.5-19.4-26.8-2.5-47.6-19.3-64-37.7"
												style={{
													fill: "none",
													stroke: "#85abdd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795.7,246.9c-.3,.9-.3,1.8,.2,2.5"
												style={{
													fill: "none",
													stroke: "#3c456b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M797.2,263.9c-6.5-2.4,.3,4.1-3.5,3.7-.6-2.1-2.7-4.9-3.2-.6"
												style={{
													fill: "none",
													stroke: "#2f456a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M790.5,266.9c-.1,.2-.3,.3-.5,.3"
												style={{
													fill: "none",
													stroke: "#050f22",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M790,267.1c-1.5-1.6-3.5-2.6-6.1-2.9"
												style={{
													fill: "none",
													stroke: "#3d4e69",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M786,257.8c.4,1.3,1.3,2.1,2.5,2.5"
												style={{
													fill: "none",
													stroke: "#485775",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M788.5,260.3c6.3,3.8,5.6-3,.7-2.5"
												style={{
													fill: "none",
													stroke: "#565d7a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M789.2,257.9l1.5-1.8"
												style={{
													fill: "none",
													stroke: "#485775",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M790.7,256.1c6.3,8,7.9,1.8,1.6-3.1"
												style={{
													fill: "none",
													stroke: "#3d4e69",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M792.3,252.9c-.3-.8-.8-1.3-1.5-1.8"
												style={{
													fill: "none",
													stroke: "#485775",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M790.8,251.1l.2-1"
												style={{
													fill: "none",
													stroke: "#030b17",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M830.3,256.8l-5,5.4"
												style={{
													fill: "none",
													stroke: "#11283f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M824.7,262.1c1.5-2-2.4-.8-2.3,1"
												style={{
													fill: "none",
													stroke: "#11283f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M819.2,260.6c1.9,.2,2.7-.4,2.5-2"
												style={{
													fill: "none",
													stroke: "#132c4a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M823.2,257.6c1.1,.2,6.9-3.1,3.6-3"
												style={{
													fill: "none",
													stroke: "#11283f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M662.9,279.9c-2,1-3,.5-3-1.8"
												style={{
													fill: "none",
													stroke: "#5e70a0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M493.5,278.7l-18.2-10.5"
												style={{
													fill: "none",
													stroke: "#51a6d4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M475.3,268.2c-.2-.4-.5-.7-.9-.9"
												style={{
													fill: "none",
													stroke: "#66a4d6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M790.8,251.1c-1.5,2.7-3,.4-4-1.2"
												style={{
													fill: "none",
													stroke: "#465166",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M792.3,252.9c-1.1,.9-1.6,2-1.5,3.2"
												style={{
													fill: "none",
													stroke: "#8094b7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M789.2,257.9c-2.8,.1,.2,1.2-.7,2.4"
												style={{
													fill: "none",
													stroke: "#99a3c9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M786.4,256.3c2-1.5,2-2.3-.1-2.4"
												style={{
													fill: "none",
													stroke: "#485570",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M618.9,271.5c-37.3-9.3-80-9.3-119.3-12.1"
												style={{
													fill: "none",
													stroke: "#80b2df",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M36.5,259.1c-6-.3-12.8,7.4-17.6,1.6-3.7-2.2-8.8,2.1-13.8,.8"
												style={{
													fill: "none",
													stroke: "#081b37",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M842,260.3c-2.5,3.9,3.4-1.1,2.5,2.3,.6,5.1-4.9,4-5.4,8.5"
												style={{
													fill: "none",
													stroke: "#030e1c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M837.5,275.1c-3.3-1.4-2.2-4.9-3.7-7.2-2.7-1-3-1.6-1.1-1.8,1.8-1,9.2-6.7,3.2-7.1"
												style={{
													fill: "none",
													stroke: "#09213d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M475.3,268.2c-1.4,.2-2.7-.3-3.8-1.4"
												style={{
													fill: "none",
													stroke: "#6ba8d9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M471.5,266.8c-4.8-2.8-9.1-6.3-12.8-10.6"
												style={{
													fill: "none",
													stroke: "#6aa4d4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M134.2,259.9c.2,.8,.6,1.5,1.3,2"
												style={{
													fill: "none",
													stroke: "#5a769c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M135.5,261.8c-1.9,2.6-3.6,2.1-4.8-1.6"
												style={{
													fill: "none",
													stroke: "#223857",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M471.5,266.8c-1.8,1.8-4.8-.8-6.7,.3-7.7,12-28.6,4.4-38.7,5.4"
												style={{
													fill: "none",
													stroke: "#55a6d2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M426.1,272.5c4.9-1.7,9.2-4.3,12.8-8"
												style={{
													fill: "none",
													stroke: "#84b2dd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M833.7,259.3c-.4,2-4.3,2.2-2,4.6,.9,.6-4.2,5.4-3.8,2"
												style={{
													fill: "none",
													stroke: "#071729",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M137.5,262.9l-2-1.1"
												style={{
													fill: "none",
													stroke: "#3d4c67",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M837.8,282c-.9,1.6-.9,3.5,0,5.4"
												style={{
													fill: "none",
													stroke: "#091c36",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M837.8,287.3l1.8,2.5"
												style={{
													fill: "none",
													stroke: "#0e2846",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M839.5,289.9c-1.1,2.1-2.9,3.4-5.2,3.8"
												style={{
													fill: "none",
													stroke: "#091c36",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M834.3,293.6c1.6-7.3-.7-6.8-6.5-3.3"
												style={{
													fill: "none",
													stroke: "#0d3050",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M827.7,290.3c-5.9,21.4-6.6,2-1.6-2.8"
												style={{
													fill: "none",
													stroke: "#091c36",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M826.2,287.6c5.7,.3,6.4-3,6-7.8,.2-1.3,5-4.8,1.5-4.4-4,5.7-9.5,9.2-13.4,13.1-1.6,.1,.3-3.5-1.9-3.1-1,3.5-3.2,2.5-4-.9"
												style={{
													fill: "none",
													stroke: "#173b60",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M814.4,284.6c1.9-2,1.4-2.8-1.4-2.2"
												style={{
													fill: "none",
													stroke: "#123554",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M813,282.3c.2-.6,.2-1.3,0-2"
												style={{
													fill: "none",
													stroke: "#091c33",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M26,279.9c-9.7-.6-.9,7.1,1.1,1.6"
												style={{
													fill: "none",
													stroke: "#091a34",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M23.7,304.6c-.5,.1-.9,.4-1.2,.8"
												style={{
													fill: "none",
													stroke: "#0c2444",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M3.1,295.7c9.8-3.1,30.7-8.3,10.4-16.6,.9,2.4,3.3-.1,0,0,.9,2.4,5.1,2,5.4,4.5-2,7.5-10.6,2.4-15.8,9.7"
												style={{
													fill: "none",
													stroke: "#091a34",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M4.7,274.7c5.2-3.3,10.4,1.6,15.3,2.6,6.5,1.3,3-6.4-1.8-5-1.7,.5-4.2,3-3.1,0,6.5-8.3,3.1-5.5-3.6-3.9-2.2-.3-5-4.1-7.1-1.9"
												style={{
													fill: "none",
													stroke: "#091a34",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M611.7,289.6c-.5,.2-.9,.3-1.4,.2"
												style={{
													fill: "none",
													stroke: "#579ecb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M610.3,289.9c1.4-2.5,1.1-2.8-1.5-2"
												style={{
													fill: "none",
													stroke: "#96aadd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M136.7,266.1l-.5,1"
												style={{
													fill: "none",
													stroke: "#3d4c67",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M136.2,267.1c-1.1-1.2-4.3-4.4-4.3-.7"
												style={{
													fill: "none",
													stroke: "#1d3350",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M131.9,266.3c-.4,1.1-1,1.9-2,2.5"
												style={{
													fill: "none",
													stroke: "#0c243f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M129.9,268.9c-3.8-1-5,4.2-8.6,2.7"
												style={{
													fill: "none",
													stroke: "#081832",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M506,307.3c-7.7,8.8-32.7,18-25.8,22.1-8.2-1.4-18-7.1-26.2-11.2"
												style={{
													fill: "none",
													stroke: "#729ccf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M374.5,282.6c-3.9-4.6-9.5-19.6-11.6-12.2-2.9-12.4-4.7-4.1-12.4-1.4"
												style={{
													fill: "none",
													stroke: "#6b84b4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M213,294.4c.3,.9,.9,1,1.8,.4"
												style={{
													fill: "none",
													stroke: "#10314e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M214.7,294.8c3.6-.8,2.7,1.5,1.2,3.4"
												style={{
													fill: "none",
													stroke: "#16466a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M357.4,291.9c-4.3-2.8-9.6-9-13.5-13.3"
												style={{
													fill: "none",
													stroke: "#406e9c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M790,267.1c1.8,2.2,.6,5.9,3.9,7.2"
												style={{
													fill: "none",
													stroke: "#3d4c64",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M793.8,274.3c-.2,1.8-2.2,.5-2.8,1.5"
												style={{
													fill: "none",
													stroke: "#517397",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M790.9,275.9c-.3-.5-.7-.6-1.2-.5"
												style={{
													fill: "none",
													stroke: "#7a95bd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M789.7,275.3c1.4-1.6,1.3-2.7-.5-3.2"
												style={{
													fill: "none",
													stroke: "#3d4e69",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M789.3,272.1c-.5-.3-1-.4-1.5-.2"
												style={{
													fill: "none",
													stroke: "#5f789e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M801.2,267.6c-.8,1-1.8,1.6-3,2"
												style={{
													fill: "none",
													stroke: "#2f4365",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M798.2,269.6c1-4.9-2.7-4.3-1.2,.3"
												style={{
													fill: "none",
													stroke: "#375984",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M797,269.8c-3.3,1.7-4.1,0-6.4-3"
												style={{
													fill: "none",
													stroke: "#2f4365",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M426.1,272.5c-1,3.1-3.1,1.8-6.3,3.3"
												style={{
													fill: "none",
													stroke: "#85b5e2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M136.2,267.1c.1,1.3,.6,2.3,1.5,3"
												style={{
													fill: "none",
													stroke: "#557195",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M137.2,273.1c-.5-.1-.8,.1-.8,.5"
												style={{
													fill: "none",
													stroke: "#3f618c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M136.4,273.6c-.4-.2-.6-.5-.5-1"
												style={{
													fill: "none",
													stroke: "#223b5d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M135.9,272.6c1.1-2.4-2-2.4-2.9-3.3"
												style={{
													fill: "none",
													stroke: "#1d3350",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M133,269.3l-1-3"
												style={{
													fill: "none",
													stroke: "#25486d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M813,282.3c-2.5,4.9-15.7-12.1-14-4.4,1.5,3.7-4.2-2-2,3"
												style={{
													fill: "none",
													stroke: "#0e263e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M796.8,280.9l-3.7,1.2"
												style={{
													fill: "none",
													stroke: "#050e20",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M793.2,282.1c1.3-1.1,4.2-5.3,1.7-6.7"
												style={{
													fill: "none",
													stroke: "#344063",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795,275.3c-.3-.5-.7-.8-1.2-1"
												style={{
													fill: "none",
													stroke: "#193450",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M797,269.8l1.2-.2"
												style={{
													fill: "none",
													stroke: "#0d233c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M133,269.3c-3.4,.8-5,6.7-.2,6.6"
												style={{
													fill: "none",
													stroke: "#0c243f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M132.7,275.9c.4,.3,.7,.6,.8,.9"
												style={{
													fill: "none",
													stroke: "#112c4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M133.6,276.8l-.4,5.6"
												style={{
													fill: "none",
													stroke: "#274e76",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M133.2,282.3c-1.6-.5-3.1-.5-4.7,0"
												style={{
													fill: "none",
													stroke: "#0d233c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M128.5,282.4c-1.1-1-1.3-2.3-.8-3.8"
												style={{
													fill: "none",
													stroke: "#102e4f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M127.7,278.6c2-1.3,2-2.5,0-3.6"
												style={{
													fill: "none",
													stroke: "#0b1f32",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M127.7,275.1c-2.2-3.2,1.7-3.5,2.3-6.2"
												style={{
													fill: "none",
													stroke: "#102e4f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M127.7,275.1c-8.7,1.4-7,4.5,0,3.6"
												style={{
													fill: "none",
													stroke: "#071325",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M128.5,282.4c-4.9,.9-3.9,5.3,.7,2.6,.5,2.9-14.3,13.8-2.4,10.9"
												style={{
													fill: "none",
													stroke: "#091830",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M126.8,295.9l-.1,.8"
												style={{
													fill: "none",
													stroke: "#102e4f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M126.7,296.6c-3.4-2.4,1.2,7.3-2.4,4.9-.2-.2-.3-.5-.3-.8,1.6-4.7-2.9,1.5-3.1-.8-.3-5.5-8,4.6-10.7,5.6-4.3,4.4,15.5,.9,17.9-.9"
												style={{
													fill: "none",
													stroke: "#091830",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M128.2,304.6l-.7,5.5"
												style={{
													fill: "none",
													stroke: "#0e2746",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M127.5,310.1c-5,6.5-3.3-4.9-5.5,.3-1.6,4.4-5.7,1.4-7.7,4.2-.9,1.7-2.2,2.6-4,2.5-2.9-1.4,5.3-3.7,4-5.5-3.7,2.8-16.9,3.9-9.1,10.1"
												style={{
													fill: "none",
													stroke: "#081832",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M105.1,321.6c.6,5.8-3.8,2.5-2.9,6.3"
												style={{
													fill: "none",
													stroke: "#0b284a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M102.2,327.9c2.7,4.8-2.6,1.3-2.7,4.2"
												style={{
													fill: "none",
													stroke: "#091830",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M99.4,332.1c-1.5-3.3-4.2-5.3-7.9-6.1"
												style={{
													fill: "none",
													stroke: "#173b5d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M91.5,326c-.1-.6-.6-.8-1.3-.4"
												style={{
													fill: "none",
													stroke: "#091a34",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M90.3,325.6c.2-.3-1.9-5.7-.2-4.1,4.9,3.2,3.8-3.2,.4-4.6"
												style={{
													fill: "none",
													stroke: "#0f2e50",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M90.5,316.9c3.2-1.2,3.1-2.5-.1-4"
												style={{
													fill: "none",
													stroke: "#091a34",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M90.3,312.9c.4-2.4-1.2-4.1-2.8-5.5,1.5-1.8,6.3,7,10.3,7.1,4.8,.2-3.8-7.7-7.2-7.3"
												style={{
													fill: "none",
													stroke: "#27466d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M90.6,307.2c.3-4.9-4.2-6.8-6.1-10.8"
												style={{
													fill: "none",
													stroke: "#091a34",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M84.5,296.4c2.9-1.6,3.5,2.7,6.3,3,2.4,.4-6.6-7.6-6.9-3.2"
												style={{
													fill: "none",
													stroke: "#1a3557",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M84,296.3c-.7-.1-1.2,.2-1.5,.8"
												style={{
													fill: "none",
													stroke: "#091a34",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M84.7,283.1c.4,7.2,13.3-2.5,2.3-2.5"
												style={{
													fill: "none",
													stroke: "#213d60",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M86,278.9c2.3-.2,.3-3.3-1.5-2"
												style={{
													fill: "none",
													stroke: "#123151",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M135.9,272.6c-.6,1.5-1.7,2.6-3.2,3.3"
												style={{
													fill: "none",
													stroke: "#09172f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M222.2,282.1c-1-.2-1.7-.8-2-1.8"
												style={{
													fill: "none",
													stroke: "#2f456a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M220.2,280.3c.3-1.6,1.7-2.7,.3-4.3"
												style={{
													fill: "none",
													stroke: "#40618d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M220.4,276.1c.4-1.8,.4-3.5,0-5.2"
												style={{
													fill: "none",
													stroke: "#2f456a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M220.4,276.1c-.5,1.4-.6,2.8-.2,4.2"
												style={{
													fill: "none",
													stroke: "#162d49",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M221.6,283.8c-6.5,6.2,5,6.9-6.7,11.1"
												style={{
													fill: "none",
													stroke: "#0b2642",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M789.3,272.1c-.3,.6-.7,1.1-1.2,1.5"
												style={{
													fill: "none",
													stroke: "#273c5c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M788,273.6c-.3-.3-.6-.4-1-.3"
												style={{
													fill: "none",
													stroke: "#6a82aa",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M789.7,275.3c-.9,.6-1.2,1.5-1,2.5"
												style={{
													fill: "none",
													stroke: "#42597a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M788.8,277.9c.1,2.1,1.2,3.5,3.2,4"
												style={{
													fill: "none",
													stroke: "#193654",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M792,281.8l.5,.3"
												style={{
													fill: "none",
													stroke: "#344267",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M792.5,282.1c.3,.6,.5,1.3,.5,2"
												style={{
													fill: "none",
													stroke: "#051024",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M792.9,284.1c-.8,.1-1.1,.6-1,1.5"
												style={{
													fill: "none",
													stroke: "#1c3656",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M792,285.6c-1.8,4-4.1,7.6-7,10.8"
												style={{
													fill: "none",
													stroke: "#494d74",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M784.9,296.3c-1.2,.5-1.8,0-1.8-1.2"
												style={{
													fill: "none",
													stroke: "#0c213b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M783.2,295.1c1.7-1,2-2,1-3"
												style={{
													fill: "none",
													stroke: "#223959",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M781.5,288.9c-1.8-1.2,1.6-3.6-.6-3.8"
												style={{
													fill: "none",
													stroke: "#273c5c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M781,284.1c.4,0,.7,0,1-.3"
												style={{
													fill: "none",
													stroke: "#344267",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M782.5,283.9c.4,6.9,6.5,.5,5.7-3.1"
												style={{
													fill: "none",
													stroke: "#3c456b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M788.2,280.9c-.4-1.5-1.2-1.9-2.6-1.1"
												style={{
													fill: "none",
													stroke: "#162d49",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M785.6,279.8l-1.4,.4"
												style={{
													fill: "none",
													stroke: "#3c456b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M783.7,278.3c1.8-1.2,3.3-2.8,4.3-4.8"
												style={{
													fill: "none",
													stroke: "#485775",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M136.4,273.6c.6,1.3,1.8,2.2,3.5,2.8"
												style={{
													fill: "none",
													stroke: "#2b456b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M141.2,278.8c-2.5-.2-5.1-.9-7.7-2"
												style={{
													fill: "none",
													stroke: "#244166",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M872.7,347.7c-3.3,.4-12.7,1.4-9.2-4.5,1,1.1,2.5,3.5,3.5,1.2-.7-5.9-6.3-7.2-11-3.5"
												style={{
													fill: "none",
													stroke: "#041329",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M868.3,304c3.3,7-10.3,7.2-5.8,12.1-16.2-5.8-2.4,7.4,4,14,5.5,5.9-12.6,2.2,6.2,13.3"
												style={{
													fill: "none",
													stroke: "#041329",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M856,340.8c1.2-5.4,11.5-5.8,2.5-12.7-3.2-1.2-5.2,8.2-9.4,6.3-1.7-8.3-6.1,16.7,3.7,2.4,5-3-3.9,6.1-1.8,9.2,1,1.9,3.7-3.1,4.2-4.1"
												style={{
													fill: "none",
													stroke: "#05162c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M870.8,382.3c-7.2-4.3-3,1.9,.2,4.7"
												style={{
													fill: "none",
													stroke: "#041329",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M855.1,341.9c13.4,12-.4,16.4-5.6,2.2-7-2.8-.4,26.3,7.1,19.3,2.1,2.6-1.7,2.9,0,0,1.1,8.3,6.7,13.5,14.3,17.1"
												style={{
													fill: "none",
													stroke: "#041329",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M871,392.1c-2.4-.3-7.9-7.5-6.8-2.7-.8,3.8-3-.4-5.1-1.2,1.9,3.6-3.6,3-5.5,3"
												style={{
													fill: "none",
													stroke: "#05172e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M853.6,391.3c-8.1-4.2-17.5,3.5-25.8,5.5"
												style={{
													fill: "none",
													stroke: "#0f2b47",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M827.8,396.8c-1.7,.5-3.6,.4-5.6-.2"
												style={{
													fill: "none",
													stroke: "#0c213b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M822.2,396.6c2-8.2,15.5-1.5,14.3-12.7"
												style={{
													fill: "none",
													stroke: "#041127",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M836.4,383.9c.8-18.9,6.9-46.4,.4-61.8-3.6,2.7-8.1,5.1-11.7,8.7"
												style={{
													fill: "none",
													stroke: "#071e3a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M825.2,330.9c-4-.9,5.6-10.5,6.9-11.1,2.1,1.6,2.9,1.4,2.5-.8-.8-9.6-9.1,5.1-12.1,7.9-4.5,1.6-3.6-4.1,0-6.2"
												style={{
													fill: "none",
													stroke: "#041127",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M822.4,320.7c1.8-.8,9.6-6.9,6.4-6.7-6,7.7-2.1-5.3,3-2.2,2.7-9.3,2.4,2.4,4.8,5.7,1,1.9,2-2,4-1.7,2.2-.5-.5-3.9,.2-4.7,1.6,.4,5.2,4.1,7.5,1.3,2.7-4-8.6-2.9-.2-5.7,3,6.6,4.6-4.1,.3-3.3-10.8,7.6,8.7-9.4-.4-9.9-3,4.9-10.3,11.1-7.9,14.9-4.4-1-10.5-10.9-17.7-3.2"
												style={{
													fill: "none",
													stroke: "#081832",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M822.3,304.9c-4-1-12,3.7-4.6,4.5-.1,2.4-5-1-6.8,1.8-.9,1.3-3.8,.1-4.3,.8,2.1,3.5,5.2,1.6,7.1-.9,1.6-1.2,2.7,1.2,4,1.3,2.3-2.7,6.5-2.3,8.5-5.1"
												style={{
													fill: "none",
													stroke: "#122d4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M826.2,307.4c6.3,.8-10.2,8-11.8,9-1.1,.6-1,.9,.2,.9,3.9,.7-2.4,2.7-.4,5.5"
												style={{
													fill: "none",
													stroke: "#081832",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M814.1,322.9c-10.5-6.2-11.1-.2-3.1,2.4,3.5,0,9.4,2.2,7,6.8-1.7,2.2-1.6-3.8-4-3-1.6,1-3.4-3.8-3.8-1.5-1.1,2.4,3.9,2.8,3.6,5-1.6,2.6-5.2-2.2-7.4-2.4-5.5-.5,5.4,3.8,.7,4.9-4.4-4.5-4.9,.9-6.8-1.4-3.2-1.3-3,4.9-4.4,6.7"
												style={{
													fill: "none",
													stroke: "#041127",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795.8,340.3c-1-.5-1.7-.2-2.3,1"
												style={{
													fill: "none",
													stroke: "#050e20",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M793.5,341.3c-.3-4,10.5-14.1,4.3-12.4-2.4,.9-3.8,.5-5.5-1"
												style={{
													fill: "none",
													stroke: "#04142b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M792.3,327.8l-1.1-1.1"
												style={{
													fill: "none",
													stroke: "#050e20",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M791.2,326.6c3.5-9.4,5.9,1.9,10.7,.6-2.1-.5-4.9-10.8-5.6-5.6-.1,.9-1.1,.4-1.2-.3,.3-.9,.6-4.3-.8-3,.6,2.2-.2,2.8-2.3,1.6"
												style={{
													fill: "none",
													stroke: "#0e2741",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M792,320.1c-.2-.4-.4-.5-.8-.5"
												style={{
													fill: "none",
													stroke: "#2f4468",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M791.2,319.6c-.3-.6-.8-.9-1.5-1"
												style={{
													fill: "none",
													stroke: "#0e1a33",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M789.8,318.6c-.8-1.3-1.6-1.6-2.5-.7"
												style={{
													fill: "none",
													stroke: "#2f4468",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M787.2,317.9c-.2,0-.3,.1-.5,.2"
												style={{
													fill: "none",
													stroke: "#0e1a33",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M786.7,318.1c-.3,0-.5-.1-.5-.3"
												style={{
													fill: "none",
													stroke: "#263c5e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M786.2,317.9l-.4-2"
												style={{
													fill: "none",
													stroke: "#0e1a33",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M785.8,315.9c0-.4-.3-.8-.9-1.1"
												style={{
													fill: "none",
													stroke: "#3d4c67",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M784.8,314.7c-.1-1.1,.3-1.8,1.4-2.1"
												style={{
													fill: "none",
													stroke: "#0b1931",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M786.2,312.6l1.7,.4"
												style={{
													fill: "none",
													stroke: "#3c4469",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M787.9,313l7.5,2.9"
												style={{
													fill: "none",
													stroke: "#051024",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795.4,315.9c0,3.2,6.3,6,3.2,1.3"
												style={{
													fill: "none",
													stroke: "#162b47",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M798.7,317.1c.4-1.1-1.5-2.4,.3-2.8"
												style={{
													fill: "none",
													stroke: "#051024",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M799,314.3c1.7,1.4,7.1,4.2,7.2,.4-.7-2.2-8.6-6.7-1.9-5.9"
												style={{
													fill: "none",
													stroke: "#162b47",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M804.2,308.8c8.3,4.4,22.4-20.5,7.7-7.9"
												style={{
													fill: "none",
													stroke: "#1c3554",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M812,300.9c-.5-.5-.7-1.1-.5-1.8"
												style={{
													fill: "none",
													stroke: "#051024",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M811.4,299.1c4.1-3.2,10.7-12.5,14.9-11.5"
												style={{
													fill: "none",
													stroke: "#122d4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M827.7,290.3l.2,6c.5,4.2,4.7-8.3,5.2-5.7-1.7,2-1.9,7,1,3"
												style={{
													fill: "none",
													stroke: "#09223d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M839.5,289.9c4-1,3.9-3.3,1-6.8-2-2.9-.9,3.8-2.8,4.3"
												style={{
													fill: "none",
													stroke: "#0a1a33",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795,275.3c-2.7,1.3-2.3,4-2.9,6.4"
												style={{
													fill: "none",
													stroke: "#486795",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M788.8,277.9c2.3,.9,3.1,.3,2.2-2"
												style={{
													fill: "none",
													stroke: "#567ea8",
													strokeWidth: "2px",
												}}
											/>
											<line
												x1="389.9"
												y1="334.3"
												x2="383.9"
												y2="328.6"
												style={{
													fill: "none",
													stroke: "#3d78ac",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M383.9,328.6l-13.2-11.7"
												style={{
													fill: "none",
													stroke: "#3c74a6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M370.8,316.9c-6.5-7.7-9.1-18.6-19.6-21.2"
												style={{
													fill: "none",
													stroke: "#3b71a2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M793.2,282.1h-.7"
												style={{
													fill: "none",
													stroke: "#334165",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M811.4,299.1c-1.5,0-.7-2.4-2.7-2.5"
												style={{
													fill: "none",
													stroke: "#132e4e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M808.8,296.6c-5.8-6,5.2-2.9,.7-9.3,3.3,.3,6.8,3.8,3.2-1.5"
												style={{
													fill: "none",
													stroke: "#122d4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M812.7,285.9c0-1.4,.6-1.8,1.8-1.2"
												style={{
													fill: "none",
													stroke: "#1c456b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M812.7,285.9c-6.4-4-12.9-5.9-5.3,1-4.4,.1-4.2-3-4.7-5.8-3.8,1.7-.1,6.1-5.9-.1"
												style={{
													fill: "none",
													stroke: "#0e2741",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M146.6,283c-1.4-1.2-2.2-1-2.6,.4"
												style={{
													fill: "none",
													stroke: "#254f77",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M144,283.4c-2.7-2.5-5.9,1.8-10.7-.9"
												style={{
													fill: "none",
													stroke: "#1f3d60",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M133.3,282.6l-.1-.2"
												style={{
													fill: "none",
													stroke: "#1f3857",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M788.2,280.9c-3.4-1.8-.6,3.5-3.4,4.2-2,2.5,1.9-4,.8-5.3"
												style={{
													fill: "none",
													stroke: "#4d618e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M808.8,296.6c-2,2.7-3.3-.9-5.5-.6-5.6-.8,.4-8.9-5.3-6.3"
												style={{
													fill: "none",
													stroke: "#051024",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M798,289.6c-2.4-1.3-4-3.1-5-5.5"
												style={{
													fill: "none",
													stroke: "#1c3554",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M133.3,282.6c-1.3,1.4-1.8,3-1.3,4.8"
												style={{
													fill: "none",
													stroke: "#051227",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M132,287.4c.7,2.3,1.9,4.3,3.5,6"
												style={{
													fill: "none",
													stroke: "#1c3451",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M135.5,293.3c-.7,1.6,2.1,4.7-1.3,4.4"
												style={{
													fill: "none",
													stroke: "#0b243e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M134.3,297.9c-2.4-1.3-4.8-2-7.5-2"
												style={{
													fill: "none",
													stroke: "#0d233c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M144,283.4c2.2,1.4,2.2,2-.2,1.8-.8,1.2,0,3.4-1.8,4.6"
												style={{
													fill: "none",
													stroke: "#0b2947",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M142,289.9l-2.1-.8"
												style={{
													fill: "none",
													stroke: "#2f486f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M139.9,289.1c-1.5-2.4-4.7-2.1-5.9-4.5-4-1,3.1,2.9,1.3,4.2-1.3,.4-1.9-1.5-3.3-1.4"
												style={{
													fill: "none",
													stroke: "#1c395b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M209.5,306.3c-6.5,8.5-3,12.3,3,4.7,3.6-1.5-2.6,7,2.5,2.4,2.8-3.4,11.3-22.7,1.2-12.5"
												style={{
													fill: "none",
													stroke: "#0b243e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M225,292.1c2.3-.5,5,5.5,1.9,4.1-2.4-1.6-3.6-.9-3.5,2.1"
												style={{
													fill: "none",
													stroke: "#436285",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M223.4,298.3c-2.8,1-1,5.1-.5,7.3,1.2,2.4-4.5,2.4-1,4.7"
												style={{
													fill: "none",
													stroke: "#0e2b4b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M222.1,310.3c2.4,1,3.4,2.8,2.9,5.3"
												style={{
													fill: "none",
													stroke: "#436285",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M224.9,315.6c-2.6-1.4-11.4-4.3-7.8,1.4-.2,2,1.6,.3,2.2,1.2,1.3,3.9-.4,4.8-3.4,6.5-1.8,2.8,2.5,.9,2.7,2.7-3.5,5.4-8.4,4.5-12.7,11.3"
												style={{
													fill: "none",
													stroke: "#0b2440",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M206,338.6c.3-.6,.2-1.2-.2-1.7"
												style={{
													fill: "none",
													stroke: "#0f3357",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M205.8,336.9c-7-10.7-18.1-29.1-28.9-28.8"
												style={{
													fill: "none",
													stroke: "#1c4e75",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M176.9,308.1c-2.7-.2-6.4-2.8-8.2,.3"
												style={{
													fill: "none",
													stroke: "#0f3357",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M168.7,308.4c-.7-.5-1-.4-1,.5"
												style={{
													fill: "none",
													stroke: "#174366",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M167.7,308.9c-2.1,.3-.6,4.2-1.7,5.8"
												style={{
													fill: "none",
													stroke: "#0b243e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M165.9,314.6c-7.4,6.9-9.7-.5-13.8-6.5"
												style={{
													fill: "none",
													stroke: "#0f3254",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M152.2,308.1c-2.1-4.5-5.6-7.7-10.2-9.5"
												style={{
													fill: "none",
													stroke: "#4e6c91",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M142,298.6c-2.6,.1-4.5-2.3-7,.2"
												style={{
													fill: "none",
													stroke: "#19436a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M135,298.9l-1.2-.1"
												style={{
													fill: "none",
													stroke: "#0b243e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M133.7,298.8c.3-.3,.5-.6,.5-1"
												style={{
													fill: "none",
													stroke: "#133a5d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M135.5,293.3c1.5,.1,3.9,2.7,4.7,.7"
												style={{
													fill: "none",
													stroke: "#224b72",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M140.2,294.1c.5-1.3,4.3,3.1,6.1,3.5"
												style={{
													fill: "none",
													stroke: "#355a86",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M146.2,297.6c2.1,3.4,3.4-1.9,.5-2.4"
												style={{
													fill: "none",
													stroke: "#4e6c91",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M146.7,295.3c-2.8-.8-4.4-2.5-4.8-5.4"
												style={{
													fill: "none",
													stroke: "#355a86",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M620.9,305.3c-1.7,.1-2-2-3.5-.1"
												style={{
													fill: "none",
													stroke: "#596d9e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M798,289.6c-2.5,3.4,2.6,9.1-3.3,7.7"
												style={{
													fill: "none",
													stroke: "#1c3656",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M794.8,297.3c-1.4-1.4,1.1-9.5-1.3-6.5-3.5,2.5,.9-5.5-1.5-5.2"
												style={{
													fill: "none",
													stroke: "#6072a3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M139.9,289.1c2.5,4.5-8.6-1.6-2.5,3.3,1.2,1,2.2,1.6,2.8,1.7"
												style={{
													fill: "none",
													stroke: "#466a99",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M794.8,297.3c-.5,.7-.9,.6-1.2-.1-2.1-5.3-3.8,2-2.6,3.8"
												style={{
													fill: "none",
													stroke: "#494d74",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M791,301.1c0,.4-.2,.6-.5,.8"
												style={{
													fill: "none",
													stroke: "#6471a2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M790.5,301.9l-1.5-3"
												style={{
													fill: "none",
													stroke: "#4f5681",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M789,298.9c-.3-2.6-1-2.8-2.2-.3"
												style={{
													fill: "none",
													stroke: "#6a77a9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M786.8,298.6c-4.4,4.5-16.3,12.5-6.6,2.6"
												style={{
													fill: "none",
													stroke: "#4f5681",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M780.2,301.1l.8-.2"
												style={{
													fill: "none",
													stroke: "#9998c8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M781,300.9l3.9-4.5"
												style={{
													fill: "none",
													stroke: "#505c88",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M231.3,300.4c-3,1.7-4.8-1.5-7.5-1.6"
												style={{
													fill: "none",
													stroke: "#436084",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M223.8,298.9l-.3-.5"
												style={{
													fill: "none",
													stroke: "#405372",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M610.3,289.9c-6.7,4.5-11.7,4.5-19.7,1.7-16.9-8.3-25.4,17.4-42.1,18.7"
												style={{
													fill: "none",
													stroke: "#7b99cb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M548.5,310.3c-14.2,6.3-29.9,8.1-41.5-2.7"
												style={{
													fill: "none",
													stroke: "#789bcf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M606.2,310c-12.8,7-33.5,1.9-36.2,19.3"
												style={{
													fill: "none",
													stroke: "#648bbd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M570.2,329.3c.8-6,6.9-15.3-4-13-4-.9-6.4-5.9-11.4-4.2-.6-3.2-4.1-.4-6.3-1.7"
												style={{
													fill: "none",
													stroke: "#398fbd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M812,300.9c-1.8,2.5-4,4.6-6.5,6.2"
												style={{
													fill: "none",
													stroke: "#1c3656",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M805.5,307.1c-2.7,1-6,.1-5,4.6,.2,1-.1,1.2-.9,.5-1.9-1.8-2.9,1.9-.7,2.1"
												style={{
													fill: "none",
													stroke: "#162d49",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M798.7,317.1c-1.3,.1-4-4.8-3.2-1.2"
												style={{
													fill: "none",
													stroke: "#162d49",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M787.9,313c1.5-.9,6-.3,5.5-2.6"
												style={{
													fill: "none",
													stroke: "#3c456b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M793.4,310.3c.3-.3,.5-.6,.5-1"
												style={{
													fill: "none",
													stroke: "#0b1a33",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M794,309.4c12,3.7-4.7-3.8-3-8.4"
												style={{
													fill: "none",
													stroke: "#203555",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M146.7,295.3c-.8,.5-1,1.3-.5,2.3"
												style={{
													fill: "none",
													stroke: "#728bb8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M338.7,311.1c-2.7,.7-1.6,4.7-4.2,5.2-3.1,.3-1.2,1.3-.5,2.8-.1,2.8,2.6,2.6,3.6,3.9-.5,.7-.9,6.3-2.4,3.7-2.1-2.2-5.8,1.2-8.6-.2,.2,3.2,1.8,7.3,3.5,10.3,1.7-6.8,4.8,5.4-3,11.1"
												style={{
													fill: "none",
													stroke: "#1b6794",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M327.1,348c-2.3-.4-7-4.4-7.4-.9"
												style={{
													fill: "none",
													stroke: "#1b6a98",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M319.7,347.1l-9.5-4.1"
												style={{
													fill: "none",
													stroke: "#185b89",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M310.3,343c-5.8-6.5-10.1-11.6-14.1-18.8"
												style={{
													fill: "none",
													stroke: "#2d769f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M296.2,324.2c-9.2,9.1-20.7-4.5-28-5.9"
												style={{
													fill: "none",
													stroke: "#155079",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M268.2,318.3l-5.5-8"
												style={{
													fill: "none",
													stroke: "#3b82b0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M268.2,318.3l5.6,8.8"
												style={{
													fill: "none",
													stroke: "#386e98",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M273.8,327.1c-11.3-9.8-16.5-27.1-26.3-34.9"
												style={{
													fill: "none",
													stroke: "#376b96",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M247.5,292.1l-4.5,2"
												style={{
													fill: "none",
													stroke: "#3f75a3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M243,294.1l-.2-.5"
												style={{
													fill: "none",
													stroke: "#376b96",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M273.8,327.1c-1.2,5.6,5.4,10,2.4,16.3,.1,1.6-.3,8.2,3.4,6.5,2.8,1.9-1.9,2.1-1.3,3.4,3.1,3.8,5.6,9.4,4.9,13.4"
												style={{
													fill: "none",
													stroke: "#11395f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M283,366.6c-1.6-1-6.1-7.7-5.8-5.6,7.6,14.1,22.6,15.6,36.2,20.3"
												style={{
													fill: "none",
													stroke: "#20507b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M313.3,381.4l-36,.7"
												style={{
													fill: "none",
													stroke: "#3d6a95",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M277.2,382.1c-1,.4-35.4,.2-36.1,1.3,11.5,1.8,26.3,.3,38.9,1.1"
												style={{
													fill: "none",
													stroke: "#2e5d82",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M280,384.6l44,.2"
												style={{
													fill: "none",
													stroke: "#3d6a95",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M324,384.8l11.2,.1"
												style={{
													fill: "none",
													stroke: "#6089a8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M335.2,384.9c-.3,3.5-17.9,0-27,1.7,5,.7-.9,2.2,.4,4.7,2.2,5.1-.7,11.2-.9,13.7,3.5,1.3,22.3,2.5,11,3.5"
												style={{
													fill: "none",
													stroke: "#103d66",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M318.7,408.6l-6.5-1.2"
												style={{
													fill: "none",
													stroke: "#7095aa",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M312.2,407.4l-60.5-14.8"
												style={{
													fill: "none",
													stroke: "#6a96ac",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M251.7,392.6l-20.3-5.2"
												style={{
													fill: "none",
													stroke: "#5e96ac",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M231.4,387.5c-2.3-1.4-4.9-2.3-7.9-2.6"
												style={{
													fill: "none",
													stroke: "#5090aa",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M223.5,384.8c9.1-18.6,12.4-2.7,14.1-9.7"
												style={{
													fill: "none",
													stroke: "#0a223f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M237.5,375.1c2.8,.1-2.2-2.8,.4-2.7"
												style={{
													fill: "none",
													stroke: "#23476d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M237.9,372.3c12.8,6.8,1.2-3.8-3.4-6.3"
												style={{
													fill: "none",
													stroke: "#4e6a90",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M234.5,366.1l-2.2-1.4"
												style={{
													fill: "none",
													stroke: "#23476d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M232.2,364.6c-2.4-5.1,.8-2.3,3.2-6.3"
												style={{
													fill: "none",
													stroke: "#0b223d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M235.4,358.4c-.2-1.9-1.2-3.2-3.2-4"
												style={{
													fill: "none",
													stroke: "#284c74",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M232.2,354.4c.5-.2,.7-.7,.5-1.3"
												style={{
													fill: "none",
													stroke: "#0a2544",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M232.8,353.1c4.4-2.7-5.8-4.2-5.8-7.9"
												style={{
													fill: "none",
													stroke: "#284c74",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M227,345.1c.2-.2,.5-.3,.8-.3"
												style={{
													fill: "none",
													stroke: "#184169",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M227.7,344.8c2,.1,6.1,6.7,6.3,3.5"
												style={{
													fill: "none",
													stroke: "#355885",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M234,348.3h.7"
												style={{
													fill: "none",
													stroke: "#29507a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M234.7,348.3c1.4,5.3,2.8-1.6,0-2"
												style={{
													fill: "none",
													stroke: "#476b95",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M234.7,346.3c-.2-.3-.6-.6-1-.7"
												style={{
													fill: "none",
													stroke: "#29507a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M233.8,345.6l-3-2.5"
												style={{
													fill: "none",
													stroke: "#355885",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M230.7,343.1c1.4-3.4,7.4-1.3,5.2-6"
												style={{
													fill: "none",
													stroke: "#0a2544",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M236,337.1c6.7,4.4,4.3-1.9-.3-3.9"
												style={{
													fill: "none",
													stroke: "#4e6a90",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M235.7,333.3c.4-.6,.4-1.2,0-1.7"
												style={{
													fill: "none",
													stroke: "#0a223f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M235.7,331.6c.7-2.5-1.2-2.3-2.7-4.5"
												style={{
													fill: "none",
													stroke: "#436084",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M233,327.1c3.7,.6,.1-7.3,.8-9.3"
												style={{
													fill: "none",
													stroke: "#0d2949",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M233.7,317.9c2-2.7-.7-4.9-1.8-6.8"
												style={{
													fill: "none",
													stroke: "#436084",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M231.9,311.1c.1-.3,.3-.3,.5-.2"
												style={{
													fill: "none",
													stroke: "#0d294a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M232.5,310.9c2.1,2.3,8.4,5.8,3.6,.7"
												style={{
													fill: "none",
													stroke: "#436084",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M236.2,311.6c.2-1.8-.4-3.2-1.9-4.2"
												style={{
													fill: "none",
													stroke: "#0d294a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M234.3,307.4c-3-.7-7-7.5-9.1-5.6"
												style={{
													fill: "none",
													stroke: "#355885",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M225.2,301.9c-1.4-.4-1.9-1.4-1.4-3"
												style={{
													fill: "none",
													stroke: "#0d294a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M243,294.1c2.1,19.3,7.3,13.6,4.4-1.9"
												style={{
													fill: "none",
													stroke: "#184169",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M783.2,295.1c-6.7,1.7-.5,3.3-4.4,2.5-16.9-8.2-28.2,8.6-41.9,15.6"
												style={{
													fill: "none",
													stroke: "#29496e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M822.4,320.7c-2.4,.8-.8-2.2,0-3-.5-5.8-6.2,3.8-8.3,5.1"
												style={{
													fill: "none",
													stroke: "#081b37",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M826.2,307.4l-3.9-2.5"
												style={{
													fill: "none",
													stroke: "#16375c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M84.5,296.4l-.5-.1"
												style={{
													fill: "none",
													stroke: "#162d49",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M781,300.9c.2-2.5-10.4-4.9-7-1"
												style={{
													fill: "none",
													stroke: "#5d6c8f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M774,299.9c-.3,8.8-12.9,13.2-18.3,21.6"
												style={{
													fill: "none",
													stroke: "#122a48",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M755.7,321.4c-12.8,19-37.8,26.6-57.6,28.5-4.4-1.6-11,8.6-15.9,3.1-2.1-1.2,5.1-2.5-2.7-4.1"
												style={{
													fill: "none",
													stroke: "#122e4d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M679.5,348.8c8.2-7.9,18.1-25.4,27.1-20.7"
												style={{
													fill: "none",
													stroke: "#1d5278",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M709.4,329.3c3.2-2.8,6.2-5.9,8.8-9.2"
												style={{
													fill: "none",
													stroke: "#1d5278",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M133.7,298.8c-3,2.6-4.6-2.4-5.2-.9-.6,6.3-2.3,.8-1.8-1.5"
												style={{
													fill: "none",
													stroke: "#0d233c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M370.8,316.9c-1.8,1.3-2.6,4.3-3.9,5.5-1-.3-1.7,1.1-1.6,2.1-.1,6.7-9.1,10.6-12.8,15.6-7,17.8-9.6,17.7-25.5,8.1"
												style={{
													fill: "none",
													stroke: "#1e6c9a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M135,298.9l-3,3"
												style={{
													fill: "none",
													stroke: "#132c4a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M131.9,301.9l-3.8,2.8"
												style={{
													fill: "none",
													stroke: "#0b1c34",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M90.6,307.2l-4.4-2.4"
												style={{
													fill: "none",
													stroke: "#243d5f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M804.2,308.8c.2-.7,.7-1.2,1.2-1.7"
												style={{
													fill: "none",
													stroke: "#2d5279",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M789,298.9c-.8,.2-1.5,.1-2.2-.3"
												style={{
													fill: "none",
													stroke: "#2d4569",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M142,298.6c-.3,1.1,.2,2,1.2,2.7"
												style={{
													fill: "none",
													stroke: "#56749d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M143.2,301.3c-2.7,1.1,3.5,4.1,2.4,6.9"
												style={{
													fill: "none",
													stroke: "#173b60",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M145.6,308.2c-.5-.2-6.5-9.1-7.2-8.4-1.2,2,.9,5,2.1,6.9"
												style={{
													fill: "none",
													stroke: "#132e4e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M140.5,306.7c-1.7-.4-3-1.3-4-2.7"
												style={{
													fill: "none",
													stroke: "#173b60",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M136.4,303.9c-1.8,.1-3.3-.6-4.5-2.1"
												style={{
													fill: "none",
													stroke: "#183b60",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M780.2,301.1l-6.2-1.2"
												style={{
													fill: "none",
													stroke: "#5c6687",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M225.2,301.9c2,3.4,5.1,5.2,9.1,5.6"
												style={{
													fill: "none",
													stroke: "#324b73",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M236.2,311.6c-1.2-.5-2.4-.7-3.7-.7"
												style={{
													fill: "none",
													stroke: "#405372",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M231.9,311.1c-4.3-1.3-5.3-4.2-4.3,1.4-1.6-1.2-2.3-3.7-5.6-2.3"
												style={{
													fill: "none",
													stroke: "#405372",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M152.2,308.1l-9-6.8"
												style={{
													fill: "none",
													stroke: "#4c6486",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M790.5,301.9c.5,3.1-.1,2.7-2.5,2.3"
												style={{
													fill: "none",
													stroke: "#263e62",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M788,304.1c-1.5-3.2-11.5,2.8-10,4.1,2.8,1.5,3.3-2.4,5.9-1.9"
												style={{
													fill: "none",
													stroke: "#435776",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M784,306.4c-11,13.7-6.8,15.9,1.1,.3"
												style={{
													fill: "none",
													stroke: "#435776",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M785.2,306.6c.2-1.5,.9-2,2.2-1.5"
												style={{
													fill: "none",
													stroke: "#435776",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M787.5,305.1l6.5,4.2"
												style={{
													fill: "none",
													stroke: "#263e62",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M793.4,310.3c-2.3-3.8-11.3-.9-7.2,2.2"
												style={{
													fill: "none",
													stroke: "#424e78",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M784.8,314.7c-1.7,1.4-3.1,3-4.1,4.9"
												style={{
													fill: "none",
													stroke: "#435776",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M780.7,319.6c-.2,.1-.4,.2-.5,.5"
												style={{
													fill: "none",
													stroke: "#233d5f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M780.2,320.1c-5.1,2.2-1.6,4.4-7.5,2.8"
												style={{
													fill: "none",
													stroke: "#435776",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M772.7,322.8c-6.1,2.3-14.8,4-19.2,7.6l12-.8"
												style={{
													fill: "none",
													stroke: "#606e89",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M765.6,329.6c-.4,.8-4.5,3.5-2.6,4,3.5-1.4,4.4-4.8,7.1-2.8"
												style={{
													fill: "none",
													stroke: "#435776",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M770.2,330.8c-3.6-.1-2.2,2.7,0,3.3"
												style={{
													fill: "none",
													stroke: "#0b1a33",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M770.2,334.1c-4.7,5.1-15.1,7.7-16,11.9l9.8-3.6"
												style={{
													fill: "none",
													stroke: "#5c6687",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M764,342.3l4.7-1.7"
												style={{
													fill: "none",
													stroke: "#435776",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M768.7,340.6c-1.5,1.2-1.3,1.8,.5,1.8"
												style={{
													fill: "none",
													stroke: "#0b182f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M769.2,342.4c-6.5,4.4-4.7,3.6-9.8,11.7"
												style={{
													fill: "none",
													stroke: "#435776",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M759.5,354.1c-6.1,8.4,11.9-6.1,9.3,4.1,3.2,5.9-18.6,13.2-9.2,12.9"
												style={{
													fill: "none",
													stroke: "#0b182f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M759.4,371c4.7,0,8.3-1.9,10.8-5.9"
												style={{
													fill: "none",
													stroke: "#424e78",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M770.2,365.2c4.1-5.6-3.6-1.7,6.8-8,1.5,1.3-8.3,4.7-2.5,6"
												style={{
													fill: "none",
													stroke: "#0b182f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M774.5,363.1c-3,5.1-6.8,9.4-11.6,12.9"
												style={{
													fill: "none",
													stroke: "#3a4b74",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M762.9,376.1c-5-2.8-9.4-2.5-13.3,1"
												style={{
													fill: "none",
													stroke: "#5c6687",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M749.5,377.1c-1.6-2.5-6.1-5.2-4.2-9.5-2.5-4.7,6.3,.6,2.5-3.9"
												style={{
													fill: "none",
													stroke: "#0b1931",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M747.8,363.7c.4-2.9-.5-5.2-2.7-7"
												style={{
													fill: "none",
													stroke: "#143150",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M745.1,356.7c-.4-.7-.6-1.5-.6-2.4"
												style={{
													fill: "none",
													stroke: "#0b1931",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M744.5,354.3c1.7-.8,3-2.1,4.1-4"
												style={{
													fill: "none",
													stroke: "#2d4569",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M748.6,350.3c.1-10.4-.5-20.8,7.1-29"
												style={{
													fill: "none",
													stroke: "#112745",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M145.6,308.2c-2.6,1.9-3.5-.4-5.1-1.6"
												style={{
													fill: "none",
													stroke: "#091e38",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M42.3,308.6c-5.4-4.2-13,4.6-18.5,3.3-2.5-.3,.5,2.5-1.3,2.1-4-.1-8.9,1.9-12.7,3.4"
												style={{
													fill: "none",
													stroke: "#081a31",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M787.5,305.1c.3-.3,.5-.6,.5-1"
												style={{
													fill: "none",
													stroke: "#587297",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M165.9,314.6c1.9,7.2-2.4,17.3-3.7,20.9,6.9-2,3.1,9,.3,11.3"
												style={{
													fill: "none",
													stroke: "#091c33",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M162.6,346.7c-.6-.1-1.1-.2-1.4-.1"
												style={{
													fill: "none",
													stroke: "#0b233f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M161.3,346.6c-1.2-2.2-2.8-4-4.8-5.5"
												style={{
													fill: "none",
													stroke: "#1a466a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M156.5,341.1c-.9-.9-1.5-1.9-1.7-3"
												style={{
													fill: "none",
													stroke: "#0b233f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M154.8,338.1c4.2-.4-12-9.6-10.8-1.6"
												style={{
													fill: "none",
													stroke: "#3a6185",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M144,336.6h-1"
												style={{
													fill: "none",
													stroke: "#0b233f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M143,336.6c.6-1.9,0-3-2-3.4"
												style={{
													fill: "none",
													stroke: "#1a486d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M141,333.1c1.5-.5,.3-1.5,.9-2.2,1.6-1.3,4.1-3.4,5.2-5"
												style={{
													fill: "none",
													stroke: "#091c33",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M147.2,325.9c7.5,2.3-5.2-4.7-5.5-5.5"
												style={{
													fill: "none",
													stroke: "#3a6185",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M141.7,320.3c-2.5-3.3,3-4.9,.9-6.3"
												style={{
													fill: "none",
													stroke: "#091f3a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M142.5,314.1c8.3-.4-3.7-5-6-5.4"
												style={{
													fill: "none",
													stroke: "#2b4a72",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M136.5,308.6l-1-.2"
												style={{
													fill: "none",
													stroke: "#0f3254",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M135.5,308.4l-.2-.1"
												style={{
													fill: "none",
													stroke: "#204367",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M135.2,308.3c-.8-1.8-.4-3.2,1.2-4.4"
												style={{
													fill: "none",
													stroke: "#0f2b4a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M135.2,308.3c-2.1,1.4-2.1,2.9,.2,4.2"
												style={{
													fill: "none",
													stroke: "#224368",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M135.5,312.6c-2,0-.8,4.7-2.6,2.8-.6-.8,.3-3.2-1.3-1.7-1,2.3-4.8,7.6,.2,4.9"
												style={{
													fill: "none",
													stroke: "#0a1f3b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M131.8,318.7c-1.4,2-1,3.7,1.2,5.1"
												style={{
													fill: "none",
													stroke: "#25476d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M133,323.8c-13.4-2-.5,11.1-13.5-5.3"
												style={{
													fill: "none",
													stroke: "#0b1c34",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M119.5,318.3c.3-1-.1-1.4-1.2-1.2"
												style={{
													fill: "none",
													stroke: "#0d2d4e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M118.3,317.1c3-5.1,5.9,6,7.8,.2,.1-3.8,9.8-10.5,7.2-12.3l-5.7,5.1"
												style={{
													fill: "none",
													stroke: "#0a1d36",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M785.2,306.6l-1.2-.2"
												style={{
													fill: "none",
													stroke: "#758aab",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M855.1,341.9c.2-.5,.5-.9,.9-1.1"
												style={{
													fill: "none",
													stroke: "#051a33",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M90.3,312.9c-2.1-.7-2.5-3.1-5.1-3.6"
												style={{
													fill: "none",
													stroke: "#243d5f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M118.3,317.1c-4.2,1.4-8.9,1.5-13.3,4.5"
												style={{
													fill: "none",
													stroke: "#071e3a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M176.9,308.1c2.9,5.7,8.8,7.6,14.2,10.4,4.3,5,9.6,19.3,14.7,18.3"
												style={{
													fill: "none",
													stroke: "#1a476d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M206,338.6c-4,1.3-5.4,12.7,.8,5.6"
												style={{
													fill: "none",
													stroke: "#081d39",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M206.8,344.2c3.3-.4,2.1-.9,4,2.3"
												style={{
													fill: "none",
													stroke: "#113357",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M210.7,346.4c-1.2,1.1-1.2,1.7,.1,1.7"
												style={{
													fill: "none",
													stroke: "#081d39",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M210.8,348.1c-3,3.2-8.2,4.8-8.2,9.8"
												style={{
													fill: "none",
													stroke: "#0e3156",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M202.6,357.9c-4.6,1.2-3.6,5.8-.2,1.6,1.3-1.3,2.3-1.5,3,0,1.4-.5,2.3-2.5,4.5-1.2"
												style={{
													fill: "none",
													stroke: "#081d39",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M209.9,358.3c-.2,.5-.3,1-.2,1.5"
												style={{
													fill: "none",
													stroke: "#0e2f52",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M209.7,359.8c-.3,3.1-12.4,5-7.6,6.7,7.4-2.5,1.7,.9,1.5,3.9,1.6-.4,2.8-1.9,3.5-3.4,3-2.3,.5,1.7-.3,2.6-4.3,10.2-18.9-1.8-22.5,10.3"
												style={{
													fill: "none",
													stroke: "#081d39",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M184.4,379.9c-3.3,1-8.5,2-11.1-1.4"
												style={{
													fill: "none",
													stroke: "#15537f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M173.2,378.4c5-1.6-6.1-9,1.2-6.8,.3-2.3-6.2-4.4-5.2-9.1"
												style={{
													fill: "none",
													stroke: "#091e3b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M169.3,362.4c1.3-1.4,2.8-.5,4.3,.4,1.3-1.6-4.5-3.9-1.7-7.5"
												style={{
													fill: "none",
													stroke: "#0b2647",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M171.9,355.4c-1.3-3-9-15.1-.2-9.3-2.8-7.4-3.4-15.4-3.8-24.6"
												style={{
													fill: "none",
													stroke: "#091c36",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M168,321.6c4.1,.2,2.9-10.2,.7-13.2"
												style={{
													fill: "none",
													stroke: "#143c5e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M40.7,312.4c-1.8-1.3-2.2,0-1.8,1.3,3.6,4.3-9.4-1.4-13.3,4-2,1.1-4.9,.7-4.2,3.4-9.8-.9-3.2,2.2,2,6v2c-6.2-8.5-13.6,2.5-18.8-6.5"
												style={{
													fill: "none",
													stroke: "#091830",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M570.2,329.3c-1.5,4.6-3.8,8.8-7.1,12.4"
												style={{
													fill: "none",
													stroke: "#618dc1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M563.1,341.8c1.2-2.6,8.4-12.8,3.4-10.4-5.4,3.6-18.9,4.9-25.2,.1-8.2-1.8-15.5,1.8-23.6,1.1-15,10.3-35.3,5.1-53.8,10-11.5,6.3-32-4.9-39.5,5.3"
												style={{
													fill: "none",
													stroke: "#3694c5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M423.9,348.1l-3.4-5.4"
												style={{
													fill: "none",
													stroke: "#88abd6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M168,321.6l-.3-12.8"
												style={{
													fill: "none",
													stroke: "#112d45",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M135.5,308.4c.1,2.6,1.3,4.7,3.5,6.2"
												style={{
													fill: "none",
													stroke: "#224b72",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M138.9,314.6c-.3,.6-.2,1,.2,1.3"
												style={{
													fill: "none",
													stroke: "#3e6390",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M139.2,315.9c-1.7-.5-3-1.6-3.7-3.3"
												style={{
													fill: "none",
													stroke: "#1c3758",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M136.5,308.6c-.3,2.9,4.3,3.3,2.5,5.9"
												style={{
													fill: "none",
													stroke: "#2d527c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M142.5,314.1l-3.3,1.8"
												style={{
													fill: "none",
													stroke: "#263f63",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M171.9,355.4l-8.1-6.5"
												style={{
													fill: "none",
													stroke: "#08172e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M163.9,348.9c-3.9,.7-4.3,0-1.2-2.2"
												style={{
													fill: "none",
													stroke: "#071429",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M90.5,316.9c-2.4-1.4-3.1-4.9-1.8,.1,.7,3.1-3.4-.5-4.5-.6-3.9,1-2.7,6.6,1.2,6.3,2.4-.4,3.1,6.3,4.9,3"
												style={{
													fill: "none",
													stroke: "#0b2642",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M91.5,326c.7,.1,8.3,12.6,8.4,8.1"
												style={{
													fill: "none",
													stroke: "#14324f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M100,334.1c5.8,12.2-5,.1-9.3,4.1"
												style={{
													fill: "none",
													stroke: "#050f22",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M90.8,338.1c1.2-2.6-4.1-7.2-2.8-2.8"
												style={{
													fill: "none",
													stroke: "#0a1b35",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M88,335.3c-12.5,6.3,2.8-4.8-7.4-3.3"
												style={{
													fill: "none",
													stroke: "#050f22",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M233.7,317.9c-2.3-1.3-5.9-7.4-7.5-2.4"
												style={{
													fill: "none",
													stroke: "#3f5370",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M226.2,315.6c-.5,.2-.9,.2-1.3,0"
												style={{
													fill: "none",
													stroke: "#3d4c67",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M564.4,344.3c-1,1.7-1.5,3.5-1.5,5.5"
												style={{
													fill: "none",
													stroke: "#6a77a9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M562.9,349.9h-.3"
												style={{
													fill: "none",
													stroke: "#5b82b6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M562.6,349.9c-.5-2.6-.3-5.3,.5-8.1"
												style={{
													fill: "none",
													stroke: "#6190c5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M49,320.6c-4-2.1-23.1-1.4-23.5,2.8,1.3,2.6,14.1,6.3,5.6,7.1"
												style={{
													fill: "none",
													stroke: "#081b37",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M3.2,336.1c12.8-2.8,3.8,8-.1,13.6"
												style={{
													fill: "none",
													stroke: "#081b37",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M23.8,341.1c-9.3-10.8-7.8-11.6-20.9-9.1"
												style={{
													fill: "none",
													stroke: "#081b37",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M141.7,320.3c-3.2-1.3-3.3-2.3-4.2,.8"
												style={{
													fill: "none",
													stroke: "#365676",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M137.4,321.2c-1.3-2.2-3.6-.8-5.7-2.5"
												style={{
													fill: "none",
													stroke: "#1f3b5e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M226.2,315.6c1.5,.2,1.9,1,1.2,2.3"
												style={{
													fill: "none",
													stroke: "#07152c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M227.5,317.9c-1.5,3.4-4.6-4-3.1,1.5"
												style={{
													fill: "none",
													stroke: "#263c5e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M224.3,319.3c0,.8-.3,1.6-.8,2.2"
												style={{
													fill: "none",
													stroke: "#0a1a33",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M223.5,321.6c.2,2.5,1.2,4.5,3,6.3"
												style={{
													fill: "none",
													stroke: "#1d3350",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M226.5,327.9c.5,.4,1.1,.6,1.7,.5"
												style={{
													fill: "none",
													stroke: "#0a1a33",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M228.2,328.3l7.5,3.3"
												style={{
													fill: "none",
													stroke: "#3d4c67",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M235.7,333.3l-3.4-.5"
												style={{
													fill: "none",
													stroke: "#485673",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M232.3,332.9c-.3-.3-.6-.4-1-.2"
												style={{
													fill: "none",
													stroke: "#041127",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M231.3,332.6c-2.3-1.3-3.2,.5-4.7,1-.9-3.4-9.2-8.7-5.7-1"
												style={{
													fill: "none",
													stroke: "#122d4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M220.8,332.6c-1.5,.2-2.4,1-2.6,2.3"
												style={{
													fill: "none",
													stroke: "#050e20",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M218.2,334.9c-3.4,3.6-7.9,5.1-11.3,9.3"
												style={{
													fill: "none",
													stroke: "#0d2541",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M233,327.1l-.8-.6"
												style={{
													fill: "none",
													stroke: "#3f5370",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M232.2,326.6c-.2-.5-.3-.9-.3-1.5"
												style={{
													fill: "none",
													stroke: "#0c203c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M231.9,325.1c.9-2.7-2.6-5.8-4.5-7.2"
												style={{
													fill: "none",
													stroke: "#294368",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M785.8,315.9c-1.8,3.5-4,6.5-6.8,9.2"
												style={{
													fill: "none",
													stroke: "#475878",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M779,325.1c-2.2,2.8-7.5,3-8.8,5.8"
												style={{
													fill: "none",
													stroke: "#3d4e69",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M765.6,329.6c1.6-1.2,10.8-5.6,7.1-6.8"
												style={{
													fill: "none",
													stroke: "#92a2bf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M780.2,320.1c-.9,4,1.5,1.9,.6-.4"
												style={{
													fill: "none",
													stroke: "#557195",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M825.2,330.9c-6.3,7.4-1.2,4.5,3.3-.1,2.6,1.6-5.1,7.9-8,9.1-1.4,6.3,10.7-5.1,10.2-9.7,2.8-3.1-.5,4.2-1.3,6-.8,3.4-13.6,12.8-4.4,8,1.9-2.1-.8,2.4,.9,2,3.2,.7-5.8,8.5-2.6,9.8,.6,4.5,4.2,.2,4.1-1.7-.8-.7-2.7,2-2.1,.2,8.9-4,9.1-11.3,9-19.3"
												style={{
													fill: "none",
													stroke: "#07213f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M834.5,334.8c.7-1.2,1-2.5,1-4"
												style={{
													fill: "none",
													stroke: "#041127",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M835.5,330.9c5.2,16.3-6.1,40.8,.9,53.1"
												style={{
													fill: "none",
													stroke: "#07213f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M822.2,396.6l-16.5-.2"
												style={{
													fill: "none",
													stroke: "#0c2340",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M805.7,396.3c-.1-5.7-8.6,.6-11.5,.9-1.1,.1-.8,4.2-1,4.8"
												style={{
													fill: "none",
													stroke: "#081b37",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M793.2,402.1c-.8-7.3-.8-14.6,0-21.9"
												style={{
													fill: "none",
													stroke: "#051024",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M793.2,380.2c.8-2.4-7.8-11.3-5.3-4.1"
												style={{
													fill: "none",
													stroke: "#0e2945",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M788,376.1c-.2,.2-.4,.3-.7,.3"
												style={{
													fill: "none",
													stroke: "#051024",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M787.3,376.3c-.1-5.4-4.7-1.9-7.7,0"
												style={{
													fill: "none",
													stroke: "#162e4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M779.5,376.3c-2.3,1.7-7.8,3.5-8.2,0"
												style={{
													fill: "none",
													stroke: "#3c466d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M771.3,376.3c6.4-2.2,11.4-12.9,5.1-9.1-.8,1.4-1.3,1.2-1.5-.4"
												style={{
													fill: "none",
													stroke: "#203657",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M774.9,366.9c2.2-4.3,1.7-4.3,5.9-2.9,.8,.1,.9,.4,.1,.8-1.4,.1,0,6.5,1.9,4.7"
												style={{
													fill: "none",
													stroke: "#33436a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M782.8,369.6c12.4-5.6-3.7-8.4,15.4-2.9"
												style={{
													fill: "none",
													stroke: "#162e4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M798.2,366.6c-3.2-14.8,4-8,0-15.9,8,5.8,2.1-4-1.1-4.9-3.4,2.3-1.1,7.1-1.7,10.6-4.5-3.3-4.7-11.3,0-16"
												style={{
													fill: "none",
													stroke: "#051024",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M786.2,317.9c-4,6.1-.3,7.7,.5,.4"
												style={{
													fill: "none",
													stroke: "#30486f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M787.2,317.9c-.7,5.8-.9,5.5,2.5,.7"
												style={{
													fill: "none",
													stroke: "#394f79",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M791.2,319.6c-1.5,.8-2.5,2.1-2.8,3.8"
												style={{
													fill: "none",
													stroke: "#394f79",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M788.5,323.3c-9.1,4.6,2.7,2.1-2.6,7.5-1.9,.9,.6-2.3-1.2-2.6-3.4-.9,1.1-6.9-3.7-2.3"
												style={{
													fill: "none",
													stroke: "#0f1931",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M781,325.9c-.8,0-1.4-.3-2-.8"
												style={{
													fill: "none",
													stroke: "#0f1b35",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M231.9,325.1c-3.1,1.7-4.7,.7-1.8-2-.7-2-5.5,.2-5.7-3.9"
												style={{
													fill: "none",
													stroke: "#2c486f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M383.9,328.6c-.6,8.9-7.7,10.9-13,15.5-2.2,3.3-8.5,6-9.5,9.4-.9,1.9-.7,2.6-2.9,1.7"
												style={{
													fill: "none",
													stroke: "#2073a4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M358.7,355.1c-1.2-.2-2.4-2.6-4.3-2.2"
												style={{
													fill: "none",
													stroke: "#387eb1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M354.4,352.9c-11.9,9.8-23.5-.1-34.6-5.8"
												style={{
													fill: "none",
													stroke: "#1b618f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M119.5,318.3c-3.8,2.6-5.9,6.2-6.3,10.8"
												style={{
													fill: "none",
													stroke: "#081e38",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M113.2,329.1c-.4-.2-.8-.3-1.2-.3"
												style={{
													fill: "none",
													stroke: "#0d3153",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M112,328.8c1.7-3.5-3.9-2.2-4.4-.2"
												style={{
													fill: "none",
													stroke: "#081e38",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M107.5,328.6c-.4-.2-.8-.2-1.2,0"
												style={{
													fill: "none",
													stroke: "#0d3153",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M106.3,328.6c-.2-1.9-2.5-.1-4.1-.8"
												style={{
													fill: "none",
													stroke: "#081e38",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M296.2,324.2c-.5,5.8,.2,11,5.3,14.4"
												style={{
													fill: "none",
													stroke: "#2a6287",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M301.5,338.6c-.3,7.1-1.2,14.1-2.8,21"
												style={{
													fill: "none",
													stroke: "#1d5179",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M298.7,359.6c-1.2,4.3-3.7,7.4-4.7,12"
												style={{
													fill: "none",
													stroke: "#144168",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M294,371.5l-11.1-4.9"
												style={{
													fill: "none",
													stroke: "#21537e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M791.2,326.6l-2.8-3.3"
												style={{
													fill: "none",
													stroke: "#0e263e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M788.5,323.3c1.6-.7,2.8-1.8,3.5-3.2"
												style={{
													fill: "none",
													stroke: "#385c86",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M133,323.8c1.8,2.9,4.3,4.4,7.8,4.5"
												style={{
													fill: "none",
													stroke: "#1f3857",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M140.7,328.3c2.3-.4-.6-3.4-1-4.3,.8-1.6,3.3,2.4,7.5,1.8"
												style={{
													fill: "none",
													stroke: "#36536f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M141,333.1l-6.8-2.8"
												style={{
													fill: "none",
													stroke: "#163a57",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M134.2,330.4c-10.1,.5-8.7,4.7,.1,5.8"
												style={{
													fill: "none",
													stroke: "#0c1f36",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M134.2,336.3c8-5.2-2.2,3.1,8,.8"
												style={{
													fill: "none",
													stroke: "#163a57",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M142.2,337.1c2.3-.2,4,2.7,4.5,4.9,1.4,1.5,5,1.7,.4,3.1"
												style={{
													fill: "none",
													stroke: "#071429",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M147,345.1l-.5,.1"
												style={{
													fill: "none",
													stroke: "#294963",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M146.5,345.1c-1.4-1.3-9.8-10.5-9.5-4.6,.8,2.7,17.6,13,11.5,6.5"
												style={{
													fill: "none",
													stroke: "#1f3857",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M148.4,347.1c3.9-.3,4.6,2.9,10,5.8"
												style={{
													fill: "none",
													stroke: "#294963",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M158.5,352.9c1.7,1,.2,2.9,1.4,3.8,1.7,.4,1.5,1.8,.2,2.3-4.7,2-3.5-3.6-6.4-4.7-2.7-1.1-4.8-.6-6.4,1.6-1.8,.8-5.9-2.8-6.2-.6,1.4,5.8-1.4,6.6,4.6,7.4,2.6,11.6-6.5-3.9-8.6,1.1-4.5,8.5-2.9,1-1.9-2.7"
												style={{
													fill: "none",
													stroke: "#08172e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M135.3,361.3c-1.1-5.8,5.4-.8,4.9-3.8-1.2-4.4-5-6.2-8.2-8.2,2.2-2.6,4.4-2.3,6.8,1.1"
												style={{
													fill: "none",
													stroke: "#05152a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M138.8,350.3c4.3,4,6.8-.7,1.7-3.3"
												style={{
													fill: "none",
													stroke: "#162b45",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M140.5,347.1c-1.7-3.2-14.5-12.3-10.9-5.4,6,4.3-19.9,13.3-22.7,12.7"
												style={{
													fill: "none",
													stroke: "#05152a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M107,354.6c0-.5,.2-.8,.6-.9"
												style={{
													fill: "none",
													stroke: "#051024",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M107.6,353.7c3.6-.9,8.5-7.3,7.5-10.1-2.5,1-3.1-1.9-4.7-1.2-1,2.1-4.2-.3-3.8-1.8,2.7-6.4,5.3,4,8.7-1.5"
												style={{
													fill: "none",
													stroke: "#08172e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M115.5,339.4c2.2-1.1,4.5-4.3,8.2-3"
												style={{
													fill: "none",
													stroke: "#081e38",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M123.7,336.4c3.6,4.3-4.8,4.6-5.9,8-1.3,7,6.4-2.9,9.2-3,1.7-.4-2.3-4.8-2.4-5.5"
												style={{
													fill: "none",
													stroke: "#06162b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M124.7,335.8c.4-2.8-5.9-3.2-3.6-5.7,1-1.1,.9-2.2-.2-3.2-3.5,2.7-8.4,5.3-10.2,10.2"
												style={{
													fill: "none",
													stroke: "#081e38",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M110.7,337.1c-3.4-1.5-4,.1-4.9,3.5-2.3,.7-4.7,0-4.1,4.1"
												style={{
													fill: "none",
													stroke: "#08172e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M101.8,344.6c.7,4.8-.2,3.5-3.3,5.1-1.1,2.5-5.3,2-3.9,5.3"
												style={{
													fill: "none",
													stroke: "#051024",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M94.4,355.1l-5.7-3"
												style={{
													fill: "none",
													stroke: "#081a31",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M88,335.3c.6,1.4,1.5,2.3,2.8,2.8"
												style={{
													fill: "none",
													stroke: "#0a1930",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M100,334.1l-.6-2"
												style={{
													fill: "none",
													stroke: "#14304b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M106.3,328.6c-14.4,10.2,9,8.9,6.9,.5"
												style={{
													fill: "none",
													stroke: "#0a2039",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M137.4,321.2c-.8,3.3,2.9,4.2,3.4,7"
												style={{
													fill: "none",
													stroke: "#507ea8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M232.2,326.6c-3.1,2.6-3.8-.5-4.1,1.8"
												style={{
													fill: "none",
													stroke: "#425877",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M226.5,327.9c.4-2.5-.6-5-2.9-6.3"
												style={{
													fill: "none",
													stroke: "#223e61",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M748.6,350.3c-2.1-.5-3.5,0-4.4,1.5"
												style={{
													fill: "none",
													stroke: "#2c496e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M744.2,351.9c-.2-1.8-.8-2-1.9-.5"
												style={{
													fill: "none",
													stroke: "#0a1d36",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M742.3,351.4c-20.6,12-41.2,25.5-60.3,30.3"
												style={{
													fill: "none",
													stroke: "#25476d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M682,381.5c-14.4-1.1-28.8-1-43.1,.3"
												style={{
													fill: "none",
													stroke: "#0b1e38",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M638.9,381.7c-3.5,.7-7.1,.8-10.7,.3"
												style={{
													fill: "none",
													stroke: "#74879b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M628.2,382.1v-1"
												style={{
													fill: "none",
													stroke: "#122f4f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M628.2,381.1c11.9-7.6,23.4-16.8,29.5-29.5"
												style={{
													fill: "none",
													stroke: "#2a5277",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M657.8,351.6c5.1-1,6,4.7,6.3,7.7,5.1-6.1,10.7-1.2,15.5-10.3"
												style={{
													fill: "none",
													stroke: "#1b4f76",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M835.5,330.9c1.5-14.1-7.2,11.7-6.7,15.6,6.4-2.1,.3-3.6,2.5-4.6,1.6-2.5-.4-3.7,3.4-7.2"
												style={{
													fill: "none",
													stroke: "#071e3a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M640.8,343.6c-13.1,14.7-24.4,35.1-43,35.6"
												style={{
													fill: "none",
													stroke: "#365681",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M792.3,327.8c2.4,2.8-2.8,15,1.1,13.6"
												style={{
													fill: "none",
													stroke: "#051328",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M798.2,366.6c-6.1-2.9-11.3-6.4-17-7.9"
												style={{
													fill: "none",
													stroke: "#162b45",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M781.2,358.8c-2.7,.7-5,2.2-6.8,4.3"
												style={{
													fill: "none",
													stroke: "#344063",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M770.2,365.2c-3.4,2.4-7,4.3-10.8,5.9"
												style={{
													fill: "none",
													stroke: "#3c4366",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M759.5,354.1c6-3.6,10.4-10.9,12.6-7.9,1.3-3.6,3.9-1.6,7.1-3.1"
												style={{
													fill: "none",
													stroke: "#3d4c64",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M779.3,343.1c20.5,14.1,1.4-12.6-2.7-2.9"
												style={{
													fill: "none",
													stroke: "#051227",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M776.6,340.2c-.7-.1-1.2-.1-1.7,.1"
												style={{
													fill: "none",
													stroke: "#3d4c64",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M774.9,340.4c-1.7-.4-3.1,0-4.2,1.2"
												style={{
													fill: "none",
													stroke: "#0e263e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M770.7,341.6c-.3,.6-.8,.9-1.5,.8"
												style={{
													fill: "none",
													stroke: "#3d4c64",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M768.7,340.6l1.5-1"
												style={{
													fill: "none",
													stroke: "#3d4c64",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M770.2,339.6c1.1-.2,1.7-.9,1.8-2"
												style={{
													fill: "none",
													stroke: "#565b76",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M772,337.6c.4,0,.7-.2,.8-.5"
												style={{
													fill: "none",
													stroke: "#1d324e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M772.8,337.1c.6-.1,.9-.4,1-1"
												style={{
													fill: "none",
													stroke: "#565b76",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M773.8,336.1c1-1.3,2.3-2.4,3.7-3.2"
												style={{
													fill: "none",
													stroke: "#1d324e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M777.5,332.9c2.2,1.3,3.6,.5,4.2-2.2"
												style={{
													fill: "none",
													stroke: "#050f22",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M781.7,330.6c1.8-1.4,1.5-2.5-.8-3.3"
												style={{
													fill: "none",
													stroke: "#162b45",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M781,327.3v-1.4"
												style={{
													fill: "none",
													stroke: "#050f22",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M310.3,343l2.5,4.4"
												style={{
													fill: "none",
													stroke: "#2d6d96",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M312.7,347.3c-.2,.1-.4,.3-.5,.5"
												style={{
													fill: "none",
													stroke: "#5693bd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M312.2,347.9c-.9-.9-1.2-.5-.9,1"
												style={{
													fill: "none",
													stroke: "#2c678d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M311.3,348.9c-.4,2.2-1.3,2.4-2.8,.8"
												style={{
													fill: "none",
													stroke: "#38749b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M308.5,349.6c-.3-.5-.5-1.1-.6-1.8"
												style={{
													fill: "none",
													stroke: "#2c678d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M307.9,347.9c.8-5.2-1.3-8.3-6.4-9.2"
												style={{
													fill: "none",
													stroke: "#35779f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M657.8,351.6c.1-.6-.2-.9-.8-.8"
												style={{
													fill: "none",
													stroke: "#3576a3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M781,327.3c-2.3-.5-.6,3,.8,3.3"
												style={{
													fill: "none",
													stroke: "#162d49",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M777.5,332.9c3.5-6.8-3.4-.4-5.7,1.2"
												style={{
													fill: "none",
													stroke: "#1d3452",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M771.8,334.1c-.6-.6-1.1-.6-1.6,0"
												style={{
													fill: "none",
													stroke: "#565d7a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M36.7,347.8c-2.7-5.1-25.1-5.3-16.8-.5"
												style={{
													fill: "none",
													stroke: "#0a1f3b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M19.9,347.3c-.1,.3,.1,.6,.5,.9"
												style={{
													fill: "none",
													stroke: "#051229",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M20.5,348.1c-.6,8.7-10.9-11.9-13.8,11.8-2.2,4.4,4.4-1.6,5.5-1.4,2.4-.1,2.7,.8,1,2.8-.3,3.7,6-5.2,7.5-6.3,.9-.5,1.5-.1,1.8,1.4-.7,1.3-4.8-.1-2.2,2.7,4.2,1.2,8.2,1.9,11.3,5.6,1.3,.4,1.1-3.4,2.6-1.9,3.2,2.5,5.9,2.2,8.4,5.6,3.3,2.4-4.1-6.4-.9-5.5,1.8,.3,3.3,3.3,4.9,2.9,1.2-2.9,3.6,4,4,1.1,.2-1.4,1-1.3,2.7,.2"
												style={{
													fill: "none",
													stroke: "#081d38",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M77.7,351.1c.3,1,1.1,1.4,2.3,1"
												style={{
													fill: "none",
													stroke: "#030c1a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M80,352.1c-4.5,4.7,6.6,8.8,9.3,5.9,.1-1.8,.9-1.8,2.3,0,3.7,3.7,8.6,1.1,3-3"
												style={{
													fill: "none",
													stroke: "#081d38",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M101.8,344.6c4,1.3,2.6,6.7,5.8,9.2"
												style={{
													fill: "none",
													stroke: "#071a35",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M107,354.6c-12-14,6.8,19.9,1,22.4"
												style={{
													fill: "none",
													stroke: "#051831",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M108,376.9c-3.1,4.3,6.1-.3,8.3,.7"
												style={{
													fill: "none",
													stroke: "#133859",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M116.3,377.5c-20.1,4.9,4,9.9-10.1,11.5"
												style={{
													fill: "none",
													stroke: "#0a2949",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M106.2,389.1c-4.9-.7-2.8-6.8-4.5-9.3-1.6-.4-3.3,.7-2.2-2.5,1.7-5.5-1.9,.1-3.7-.1"
												style={{
													fill: "none",
													stroke: "#091f3a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M95.7,377.3c-19.1-9.2-13.8,8.7-14.1,20.7"
												style={{
													fill: "none",
													stroke: "#0a2949",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M81.6,398.1c7.7,4.4-.8,2.9-5,1.9"
												style={{
													fill: "none",
													stroke: "#0c3556",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M76.7,400.1l1.2-6.2"
												style={{
													fill: "none",
													stroke: "#092745",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M77.9,393.9c.2-.4,.3-1,.3-1.8"
												style={{
													fill: "none",
													stroke: "#0c3556",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M78.3,392c6-20.6-9.8-15.3-24.7-14.9-13.6-1.5-31.4,2.5-44.1,1.9"
												style={{
													fill: "none",
													stroke: "#0b2745",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M9.5,379.1c-2-.9-4.4-.6-6.5-.4"
												style={{
													fill: "none",
													stroke: "#0a1f3b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M112,328.8c-3,2.4-8.2,5.9-4.4-.2"
												style={{
													fill: "none",
													stroke: "#0a2039",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M124.7,335.8l-1,.6"
												style={{
													fill: "none",
													stroke: "#082746",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M115.5,339.4c-2.1-2,5.5-6,3-6.5-2.1,1.6-3.7,6.5-7.8,4.1"
												style={{
													fill: "none",
													stroke: "#0a2848",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M231.3,332.6c0,.3-.1,.5-.3,.8"
												style={{
													fill: "none",
													stroke: "#122f51",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M230.9,333.3c-1.8,.1-2,.9-.5,2.5"
												style={{
													fill: "none",
													stroke: "#44729b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M230.5,335.8c-2.2,.1,.4,2,1,2.6"
												style={{
													fill: "none",
													stroke: "#1c456b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M231.4,338.3c-.4,.6-.2,.9,.5,.8"
												style={{
													fill: "none",
													stroke: "#44729b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M232,339.1c-3.3,1.3-3.1-3.2-4.9-3.5,.7,2.5-2.1,5.9,1.1,7.3"
												style={{
													fill: "none",
													stroke: "#122f51",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M228.2,342.9c-.5,.6-.7,1.2-.5,1.9"
												style={{
													fill: "none",
													stroke: "#3d6292",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M227,345.1c-.5-3.7-4-1.6-2.9,1.1"
												style={{
													fill: "none",
													stroke: "#305681",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M224,346.3c-2.1-2.5-7.5-1.1-7.6-5"
												style={{
													fill: "none",
													stroke: "#122d4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M216.4,341.3c.4-.4,.8-.9,1-1.5"
												style={{
													fill: "none",
													stroke: "#1b436b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M217.4,339.9c4-3.5,1.2,.4,2.3,2.5,1.8,.5,1.5-3.3,2.8-3.4,7.9,4.1,.3-4-1.6-6.3"
												style={{
													fill: "none",
													stroke: "#132c4a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M395.2,339.5c1.5-3.4,3.7-6.1,6.6-8.4"
												style={{
													fill: "none",
													stroke: "#3d78ac",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M403,330.3c2.4,1.6,7.7,12.5,6.9,4.3"
												style={{
													fill: "none",
													stroke: "#5780b6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M413.2,332.9c2.2,4.6,4.7,9,7.5,13.2"
												style={{
													fill: "none",
													stroke: "#7d9ecb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M420.7,346.1c-9.8-.7-5.2-8.3-11.3,.3-14.4,1-29.1,6.6-40.6,15.8"
												style={{
													fill: "none",
													stroke: "#217bae",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M368.7,361.9l-10-6.8"
												style={{
													fill: "none",
													stroke: "#3982b7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M773.8,336.1c-1.1-.6-1.8-1.3-2-2"
												style={{
													fill: "none",
													stroke: "#6e80a6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M134.2,330.4c.9,2-1.2,3.8-.1,5.9"
												style={{
													fill: "none",
													stroke: "#1d4b70",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M143,336.6l-.8,.5"
												style={{
													fill: "none",
													stroke: "#184163",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M562.6,349.9c-8,.8-17.6-9.5-25.4-13.3"
												style={{
													fill: "none",
													stroke: "#308aba",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M537.3,336.6c-2.7-1-10.8,9.5-12.3,13.5"
												style={{
													fill: "none",
													stroke: "#89b5da",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M524.9,350.1c-1,0-13.9-6.5-14.5-4.7"
												style={{
													fill: "none",
													stroke: "#2f8bbe",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M510.5,345.4c-3.9,2.1-6.6,7-9.6,10.2"
												style={{
													fill: "none",
													stroke: "#7fbddc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M500.9,355.6c-4.1,3.1-11.3,4-11.7,10.1"
												style={{
													fill: "none",
													stroke: "#789ed3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M489.3,365.6c-2.3-2.4-5.2-4-8.5-4.5"
												style={{
													fill: "none",
													stroke: "#3093c7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M480.8,361.1c.4-1.6,0-1.9-1.3-.8"
												style={{
													fill: "none",
													stroke: "#499bcc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M479.5,360.3c-15.2-5.8-36.2-2.3-53.3-8.6"
												style={{
													fill: "none",
													stroke: "#369bce",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M426.2,351.9l-2.4-3.8"
												style={{
													fill: "none",
													stroke: "#87aeda",
													strokeWidth: "2px",
												}}
											/>
											<line
												x1="426.8"
												y1="353.1"
												x2="426.2"
												y2="351.9"
												style={{
													fill: "none",
													stroke: "#88b1df",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M426.8,353.1c0,.3-.1,.5-.3,.5"
												style={{
													fill: "none",
													stroke: "#97bae7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M426.5,353.6l-5.8-7.5"
												style={{
													fill: "none",
													stroke: "#7da1cf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M217.4,339.9c-2.1-.9,1-4.3,.8-5"
												style={{
													fill: "none",
													stroke: "#0d243e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M232.3,332.9l3.7,4.3"
												style={{
													fill: "none",
													stroke: "#485877",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M230.7,343.1c-.8-.6-1.6-.7-2.5-.2"
												style={{
													fill: "none",
													stroke: "#2f466c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M232,339.1c3.9-1,0-4.2-1-5.8"
												style={{
													fill: "none",
													stroke: "#365676",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M154.8,338.1l-10.8-1.5"
												style={{
													fill: "none",
													stroke: "#385a7b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M231.4,338.3c.5-1,.2-1.9-1-2.5"
												style={{
													fill: "none",
													stroke: "#3f6c90",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M772.8,337.1c-1.6-1.6-1.9-1.4-.8,.5"
												style={{
													fill: "none",
													stroke: "#6e80a6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M770.2,339.6c-.3,.1-.6,0-.8-.3"
												style={{
													fill: "none",
													stroke: "#8e99bd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M769.4,339.3c2.1-4.6-.8-3.1-3-.5"
												style={{
													fill: "none",
													stroke: "#5f7497",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M766.4,338.9c-3.4,.5-2,2.1-2.4,3.5"
												style={{
													fill: "none",
													stroke: "#8e99bd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M216.4,341.3c-2-.5-3,4.7-5.7,5"
												style={{
													fill: "none",
													stroke: "#0d2541",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M537.3,336.6c-3.1,5.5-7.1,10.2-11.8,14.2"
												style={{
													fill: "none",
													stroke: "#83a8cb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M525.4,350.8l-.5-.7"
												style={{
													fill: "none",
													stroke: "#82a9cf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M769.4,339.3c-.5,1-1.9-.9-3-.5"
												style={{
													fill: "none",
													stroke: "#466585",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M156.5,341.1c.4,2.3,2.5,6,4.8,5.4"
												style={{
													fill: "none",
													stroke: "#183f60",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M163.9,348.9c-2.1,1-3.9,.9-5.4-.2"
												style={{
													fill: "none",
													stroke: "#0a1e3a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M158.5,348.7c-3.2-2.9-7-4.2-11.5-3.7"
												style={{
													fill: "none",
													stroke: "#2b506f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M562.9,349.9c-.9,5.2-2.2,10.3-3.8,15.2"
												style={{
													fill: "none",
													stroke: "#39719e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M559.1,365.1l-3.4,3.5"
												style={{
													fill: "none",
													stroke: "#7291c4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M555.8,368.6c.8-2.8,3.9-9.6-.5-9-4.1-1.5-13.2-3.8-16.4-.5-4.1-.4-3-.9-3.8-3.8-1.7-3-9.9-1.1-9.8-4.2"
												style={{
													fill: "none",
													stroke: "#297eaf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M779.3,343.1c-.7-1.1-1.6-2.1-2.7-2.9"
												style={{
													fill: "none",
													stroke: "#3d516e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M307.9,347.9c-3.3-2-10.9,26.9-9.3,11.8"
												style={{
													fill: "none",
													stroke: "#1e5680",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M146.5,345.1c0,1.3,.6,2,2,2"
												style={{
													fill: "none",
													stroke: "#43749c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M140.5,347.1c-1.1,.5-1.6,1.6-1.6,3.3"
												style={{
													fill: "none",
													stroke: "#163351",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M135.3,361.3c.2-.9-.2-1.2-1-1"
												style={{
													fill: "none",
													stroke: "#081f3a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M134.3,360.3c.5-2.6-4.6-2-5.8-4.2,.4-3.3-5.4-5.6-5.8-1.9,.3,2.1,1.1,2.5,2.4,1.2,3-1.8,.3,3.7-1.8,3.3-3.2-.6-.7-5.2-6.3-4.6-1.8,3.4-4.9,4.2-6.9,7,7.3,3.2,6.4-3.5,6.8,7.1,12.8-10.9,10.3-8.7,9.8,8"
												style={{
													fill: "none",
													stroke: "#05152a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M126.7,376.1h-2.2"
												style={{
													fill: "none",
													stroke: "#0b2e4e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M124.5,376.1c-5.7-.1-11.3-3-16.5,.6"
												style={{
													fill: "none",
													stroke: "#143d5e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M770.7,341.6c1.5,.1,2.9-.3,4.2-1.2"
												style={{
													fill: "none",
													stroke: "#466585",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M224,346.3c4,3,4.3,6.6,7.9,9.9"
												style={{
													fill: "none",
													stroke: "#223857",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M231.9,356.2c-3.4-1.3-19.6-10.7-15.7-.6,4.9,1.7,19.1,12.1,6.2,8.5"
												style={{
													fill: "none",
													stroke: "#1d3350",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M222.4,364.1c-4.8,5.8,6.1,18.2,4.5,4.6"
												style={{
													fill: "none",
													stroke: "#0c213b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M227,368.8c.4,.4,5.3,2.7,4.9,3.5-1,5.5,1.6-4.9,5.7,2.9"
												style={{
													fill: "none",
													stroke: "#1d3350",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M223.5,384.8c-2,.3-.5,3.3-.7,4.8"
												style={{
													fill: "none",
													stroke: "#4a7c8d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M222.8,389.6l.4,3.5"
												style={{
													fill: "none",
													stroke: "#38758c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M223.2,393.1c-.2,3.9-.9,8.4,1.3,12.4"
												style={{
													fill: "none",
													stroke: "#2c6d86",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M224.5,405.6c-2.5-.6-5-.8-7.5-.7"
												style={{
													fill: "none",
													stroke: "#215b7a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M217,404.9c-.1-.2-.1-.5,0-.8"
												style={{
													fill: "none",
													stroke: "#062f4e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M216.9,404.1c4.2-2.1,3.4-11.3,1.9-14.6l-12.7,1.3"
												style={{
													fill: "none",
													stroke: "#1b5d7b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M206.2,390.8l-13.2-1.9"
												style={{
													fill: "none",
													stroke: "#174f74",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M193,388.9l-10.7-3.8"
												style={{
													fill: "none",
													stroke: "#0d3656",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M182.3,385.1c1.2-1.5,2-3.3,2.2-5.2"
												style={{
													fill: "none",
													stroke: "#114468",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M209.7,359.8c1.1,1,.6,2.1-1.3,3.3-1.6,1,0,4.2,1.2,1.2,8.1-9.3-1.2,8-4.2,10.4,3,1.6,9.8-11.7,12.2-13.6-2.2-.4-6.2-6.1-7.7-2.7"
												style={{
													fill: "none",
													stroke: "#0a213b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M202.6,357.9c.4-.3,9.3-4,9-4.6,.6-2.5,5.1-6.9-.7-5.2"
												style={{
													fill: "none",
													stroke: "#0a223f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M559.8,365.3c-.2-.3-.4-.3-.6-.2"
												style={{
													fill: "none",
													stroke: "#8186b7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M426.5,353.6c-9.4,8-23.4-1.2-32.8,6.9"
												style={{
													fill: "none",
													stroke: "#2284b9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M393.7,360.6c-.4-.4-.9-.7-1.6-.9"
												style={{
													fill: "none",
													stroke: "#2a80b0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M392.1,359.7l-14.5,10.5"
												style={{
													fill: "none",
													stroke: "#1b6da2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M377.6,370.2l-8.9-8.3"
												style={{
													fill: "none",
													stroke: "#3986bb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M233.8,345.6c-2.4,1.2,.6,1.3,.2,2.8"
												style={{
													fill: "none",
													stroke: "#4e71a3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M354.4,352.9c3.5,4.8,7.5,9.2,12,13.2"
												style={{
													fill: "none",
													stroke: "#3570a2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M366.3,366.1c1.1,4.5-1.9,8.5-.9,13,10.7,3.4,25.1-1.9,38.1,2.1"
												style={{
													fill: "none",
													stroke: "#175789",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M403.5,381.1l-31.1,.3"
												style={{
													fill: "none",
													stroke: "#82a6be",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M372.5,381.4l-9-.1"
												style={{
													fill: "none",
													stroke: "#74a3bc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M363.5,381.3c-20.5-4.5-38.6-16.4-50.7-34"
												style={{
													fill: "none",
													stroke: "#4178a7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M232.8,353.1c-3.1-6.1-4.6-.7-.6,1.3"
												style={{
													fill: "none",
													stroke: "#223a5c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M235.4,358.4l-2.2-.5"
												style={{
													fill: "none",
													stroke: "#223755",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M233.2,357.8c-.3-.7-.7-1.2-1.3-1.6"
												style={{
													fill: "none",
													stroke: "#3a5c85",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M39.2,353.6c-5.4-3.5-2,3.2-6.5-.2-4.2,8.2-7-11.1-12.9-6.2"
												style={{
													fill: "none",
													stroke: "#0b1e38",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M655.8,351.9c-3.8,11.3-28.6,23.2-27.6,29.3"
												style={{
													fill: "none",
													stroke: "#2b567c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M628.2,382.1c-11.3,.2-22.7,.1-34-.5"
												style={{
													fill: "none",
													stroke: "#768ba0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M555.8,368.6l-6.6,6"
												style={{
													fill: "none",
													stroke: "#7192c8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M549.2,374.6c3.9-6.2-7.9-6.4-10.4-4.6-9,.3-21.4-6.2-30-1.4-4.3,1.4-7.2-7.4-11.7-2.8"
												style={{
													fill: "none",
													stroke: "#2983b7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M497,365.9l-2.2-2"
												style={{
													fill: "none",
													stroke: "#498fc0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M494.7,363.9c-1.3,.6-2.1,.3-2.5-.8"
												style={{
													fill: "none",
													stroke: "#2987bc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M492.2,363.1c1.6-4.3,6.9-3.6,9.6-7"
												style={{
													fill: "none",
													stroke: "#7192c8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M501.7,356.1c3.7-2.9,6.7-6.5,8.8-10.8"
												style={{
													fill: "none",
													stroke: "#78b1d0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M158.5,348.7c-.7,1.3,1.8,4.2-.1,4.1"
												style={{
													fill: "none",
													stroke: "#2b5373",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M501.7,356.1c-.5,.1-.8-.1-.8-.5"
												style={{
													fill: "none",
													stroke: "#c1c4e6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M234.7,346.3c-.3,.6-.3,1.3,0,2"
												style={{
													fill: "none",
													stroke: "#6085b3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M40.7,359.5c-12.1,3.4-15.2-6-20.2-11.4"
												style={{
													fill: "none",
													stroke: "#081c36",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M308.5,349.6c.9,17.3,5.6,15.1,2.7-.8"
												style={{
													fill: "none",
													stroke: "#22537c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M312.2,347.9c11.9,15.8,25.2,33.2,46.8,33.2"
												style={{
													fill: "none",
													stroke: "#40729e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M359,381c-1.4,.4-2.8,.6-4.1,.4"
												style={{
													fill: "none",
													stroke: "#739db3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M355,381.4l-35.5,.4"
												style={{
													fill: "none",
													stroke: "#6291b1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M319.5,381.8l-2.2-.5"
												style={{
													fill: "none",
													stroke: "#40729e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M317.2,381.3c-7.5-3.9-15.3-7.2-23.2-9.8"
												style={{
													fill: "none",
													stroke: "#235884",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M363.5,381.3c-1.5,.3-3,.2-4.4-.3"
												style={{
													fill: "none",
													stroke: "#9dc9e3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M86,353.4c-2.4,.8-3.9-1.5-6-1.2"
												style={{
													fill: "none",
													stroke: "#061527",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M169.3,362.4c-1.4-12.8-.9-1.8-6.6,2.1-5.8,4.2,2.8,7.2-2.5,12.8"
												style={{
													fill: "none",
													stroke: "#081932",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M160.2,377.5l-28.9-1.6"
												style={{
													fill: "none",
													stroke: "#114368",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M131.2,375.9c-1.7-5.8-.7-11,3-15.5"
												style={{
													fill: "none",
													stroke: "#08172e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M744.5,354.3c-.3-.8-.4-1.6-.3-2.5"
												style={{
													fill: "none",
													stroke: "#263a5a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M745.1,356.7c-.3,2.8,.6,5.1,2.7,7"
												style={{
													fill: "none",
													stroke: "#0e2741",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M749.5,377.1c-.8,1.4-4.6,2.2-1.8,3.8"
												style={{
													fill: "none",
													stroke: "#555b78",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M747.7,380.9c.6,1.3,.3,2.4-.8,3.4"
												style={{
													fill: "none",
													stroke: "#0e2741",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M747,384.3c-.4,1.5-1.3,2.4-2.8,2.6"
												style={{
													fill: "none",
													stroke: "#263c5e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M744.2,386.9l-3-1"
												style={{
													fill: "none",
													stroke: "#041127",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M741.2,385.9c-13.1,4.8-25.4,13.2-39.5,11"
												style={{
													fill: "none",
													stroke: "#637283",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M701.7,396.9c-.2-.1-.3-.2-.5-.2"
												style={{
													fill: "none",
													stroke: "#07152c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M701.2,396.6l-38.3-.3"
												style={{
													fill: "none",
													stroke: "#6a7381",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M662.9,396.3c2.4-1.7,5.1-2.2,8-1.3"
												style={{
													fill: "none",
													stroke: "#0a213b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M671,395.1c22.1-1.3,64.7,7,69.5-22.2,3-2.9,.8-5.7-2.4-2.7-5.1,.3,6.1-5,4.9-7.6,.1-2.6-2.3-5.1-1.1-7.6"
												style={{
													fill: "none",
													stroke: "#081832",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M741.9,355.1c.4-1,.6-2.3,.4-3.7"
												style={{
													fill: "none",
													stroke: "#1f3959",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M233.2,357.8c-7.7,.5-6.7,3.8-1,6.9"
												style={{
													fill: "none",
													stroke: "#1d324e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M234.5,366.1c-5.3,.9,2.8,3.9,3.5,6.3"
												style={{
													fill: "none",
													stroke: "#607aa1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M227,368.8c-1.2-1.9-4-2.2-4.6-4.8"
												style={{
													fill: "none",
													stroke: "#244569",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M741.9,355.1c-15.7,11.9-36.8,19.7-50.2,28.8-2.3-10.1-9.8,2.9-15.7,4.2"
												style={{
													fill: "none",
													stroke: "#234369",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M676.2,388.1c-.8-.1-.9-.6-.4-1.5"
												style={{
													fill: "none",
													stroke: "#244b72",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M675.8,386.6c.2-2.4-1.5-3.2-5.1-2.3"
												style={{
													fill: "none",
													stroke: "#213f63",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M670.7,384.3c.5-.5,.6-1,.5-1.7"
												style={{
													fill: "none",
													stroke: "#6280aa",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M671.2,382.6c3.7-.7,7.6,1.3,10.8-1.1"
												style={{
													fill: "none",
													stroke: "#1f3a5b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M479.5,360.3c-3.7,.3-8.3,15.9-2.5,11.8"
												style={{
													fill: "none",
													stroke: "#4a9fd1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M476.9,372.1c2.9,9.4-7,6.3-11.2,9"
												style={{
													fill: "none",
													stroke: "#3097cc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M465.2,381.3c.1-.2,.3-.3,.5-.3"
												style={{
													fill: "none",
													stroke: "#91cce8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M465.2,381.3l-2.2-.7"
												style={{
													fill: "none",
													stroke: "#1e5678",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M463,380.6c2.7-1.5-4.1-1.2-3.3-3,4.2-3.2,14.2-10.9,13.5-14.5-9.1,14.6-22.6,9.7-36.3,12.1"
												style={{
													fill: "none",
													stroke: "#79abdb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M437,375.2c3.9-5.9-6.4-11.3-8.8-19.3"
												style={{
													fill: "none",
													stroke: "#2d94ca",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M428.2,355.9c-.1-1.1-.5-2-1.4-2.8"
												style={{
													fill: "none",
													stroke: "#45a7db",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M131.2,375.9c0,1,.3,1.9,.8,2.8"
												style={{
													fill: "none",
													stroke: "#0f3957",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M132,378.6c2.5,5.4-2.1,4.3-5.6,5.1-.8-1.9,1.2-5.6,.3-7.6"
												style={{
													fill: "none",
													stroke: "#0b2642",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M377.6,370.2c-1.9,0-11.6-9.9-11.3-4.2"
												style={{
													fill: "none",
													stroke: "#3375aa",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M428.2,355.9l-1.7-2.2"
												style={{
													fill: "none",
													stroke: "#3c9dd1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M437,375.2c-1.1-.8-1.9-1-2.5-.6"
												style={{
													fill: "none",
													stroke: "#70a0d1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M434.5,374.6c-2.8-3-4.4,.7-5.4,3.3"
												style={{
													fill: "none",
													stroke: "#1a5680",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M429,377.9l-1.8,3.8"
												style={{
													fill: "none",
													stroke: "#144b6f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M427.2,381.6l-3.5-.5"
												style={{
													fill: "none",
													stroke: "#88c2de",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M423.7,381.1c-11.5-6.1-14.4-6.5-22.3-14.6"
												style={{
													fill: "none",
													stroke: "#74a6d7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M401.4,366.4c-1.2-1.1-2.5-1.6-3.9-1.5"
												style={{
													fill: "none",
													stroke: "#1c73a9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M397.5,364.9l-3.8-4.3"
												style={{
													fill: "none",
													stroke: "#2b85b7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M173.2,378.4c-4.5-4.3,.4,2.5,1.4,3.5"
												style={{
													fill: "none",
													stroke: "#11466a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M174.5,381.9c-.3,4.2-18,6.3-14,1.9"
												style={{
													fill: "none",
													stroke: "#0b2846",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M160.5,383.8l2.6-4.2c.3-3.2-7.9,5-3-2"
												style={{
													fill: "none",
													stroke: "#0f3b5c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M671,395.1c3.2-1.3,5-3.6,5.2-7"
												style={{
													fill: "none",
													stroke: "#0e2b4b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M492.2,363.1c-.4,.7-4.4,7.6-3,2.6"
												style={{
													fill: "none",
													stroke: "#729ad1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M782.8,369.6c.5-3.6-.1-7.8-1.5-10.8"
												style={{
													fill: "none",
													stroke: "#455e8a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M774.9,366.9c-3.5,2.8-5.5,6.5-7,9.9"
												style={{
													fill: "none",
													stroke: "#4f6696",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M767.9,376.9l-5.1-.8"
												style={{
													fill: "none",
													stroke: "#848ebb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M480.8,361.1c-.8,3.9-2,7.5-3.8,11"
												style={{
													fill: "none",
													stroke: "#4497ca",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M392.1,359.7c.4,12.6-2.6,26.3,5.4,5.3"
												style={{
													fill: "none",
													stroke: "#246f9f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M401.4,366.4c4.8,9.6,9.7,10.5,20.3,14.9"
												style={{
													fill: "none",
													stroke: "#6d8fbf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M421.7,381.3l-18.2-.2"
												style={{
													fill: "none",
													stroke: "#81abc7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M317.2,381.3c-1.3,.4-2.7,.4-4,.1"
												style={{
													fill: "none",
													stroke: "#4d84b4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M494.7,363.9c-.3,2.2,.4,9.2,1.9,9.1"
												style={{
													fill: "none",
													stroke: "#4a97ca",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M496.7,373c6.3,11.7-8.8,5.7-13.7,8.2"
												style={{
													fill: "none",
													stroke: "#2a8bc1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M483,381.3l-17.3-.2"
												style={{
													fill: "none",
													stroke: "#8bc5e1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M463,380.6c-1.6-.5-3.2-.6-4.7-.4"
												style={{
													fill: "none",
													stroke: "#616280",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M458.3,380.2c-6.5-4.1-16.5-.1-23.8-5.7"
												style={{
													fill: "none",
													stroke: "#676d91",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M497,365.9c1.8,2.5,1.7,4.8-.3,7.1"
												style={{
													fill: "none",
													stroke: "#4a93c5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M549.2,374.6l-8.7,6.7"
												style={{
													fill: "none",
													stroke: "#7296cd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M540.5,381.3h-57.5"
												style={{
													fill: "none",
													stroke: "#8bc1dc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M543.7,381.3h-3.2"
												style={{
													fill: "none",
													stroke: "#d3d0ed",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M771.3,376.3c2.2-4.8,2.9-7.3-1.7-1.9,.1,3.3-.9,4.6-4,6.4"
												style={{
													fill: "none",
													stroke: "#576999",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M765.5,380.9c-.1-.2-.3-.4-.5-.5"
												style={{
													fill: "none",
													stroke: "#203657",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M765,380.3c1.5-.8,2.4-2,3-3.4"
												style={{
													fill: "none",
													stroke: "#7181a9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M423.7,381.1l-2,.2"
												style={{
													fill: "none",
													stroke: "#d9def5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M9.5,379.1l-2.5,.8"
												style={{
													fill: "none",
													stroke: "#113354",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M7,379.8c-1.2,.7-2.5,1.3-3.8,1.7"
												style={{
													fill: "none",
													stroke: "#124166",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M779.5,376.3c1.4,.5,1.8,1.5,1.2,3"
												style={{
													fill: "none",
													stroke: "#4d618e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M780.7,379.3l-1.5,2"
												style={{
													fill: "none",
													stroke: "#3c4366",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M779.2,381.3c-1,.1-1.7,.6-2.2,1.5"
												style={{
													fill: "none",
													stroke: "#4d618e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M777,382.9c-.5,.5-3.7,6.3-4.3,6.4-2.6,.9,4.9-7.8,2.8-7.8-3.8,5.4-11.6,6.4-4.1-.6,2.2-4-8.8,7.7-5.8-.1"
												style={{
													fill: "none",
													stroke: "#3c466d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M793.2,380.2c-2.3-1-4.1-2.3-5.3-4.1"
												style={{
													fill: "none",
													stroke: "#0e263e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M458.3,380.2c-9.2,.3-23.4,3.2-29.3-2.5"
												style={{
													fill: "none",
													stroke: "#0b182f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M787.3,376.3c-.3,1.4,.5,5-1.1,5.2-1.3-2.7-1-5.3-1.9,.4-1.9,3.5,0-3.8-1.4-4.2-.9,5.1-2.9,9.5-2.3,1.4"
												style={{
													fill: "none",
													stroke: "#162b45",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M765,380.3c-3.7,1.4-6.4,7.4-3.9,.3"
												style={{
													fill: "none",
													stroke: "#555e7d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M761,380.6c1.8-1.4,1.6-1.5-.5-.5"
												style={{
													fill: "none",
													stroke: "#7787b0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M760.5,380.1c-1.8,.2-3.9,.9-6.2,2.1"
												style={{
													fill: "none",
													stroke: "#555e7d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M754.3,382.2c-1.9-4.1,6.4-3.6,4.7-6-2.5-.3-4.8,2.6-6.1,4.6"
												style={{
													fill: "none",
													stroke: "#8d91bf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M753,380.8c-.6,.5-1.1,1.1-1.5,1.8"
												style={{
													fill: "none",
													stroke: "#555e7d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M751.5,382.6c-1.1-1-2.3-1.6-3.8-1.8"
												style={{
													fill: "none",
													stroke: "#5f7497",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M124.5,376.1c.4,2.3-6.2,.5-8.1,1.4"
												style={{
													fill: "none",
													stroke: "#194e76",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M106.2,389.1c-6-.7-4.3,6.4-10.1-1"
												style={{
													fill: "none",
													stroke: "#0f3558",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M96.2,388.1c3.6-.9,4.9-3.2,3.8-6.7"
												style={{
													fill: "none",
													stroke: "#091f3a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M100,381.5c-.5-2-6.2-.2-8,.9-3.5,1.6,2.9-4.3,3.7-5.1"
												style={{
													fill: "none",
													stroke: "#0f3558",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M100,381.5c-2.7,.9-7.8,5.5-3.8,6.7"
												style={{
													fill: "none",
													stroke: "#0a2949",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M132,378.6l28.5,5.2"
												style={{
													fill: "none",
													stroke: "#14527c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M174.5,381.9c2.8,4.2-2.1,5.6-6.2,6.7"
												style={{
													fill: "none",
													stroke: "#175d8a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M168.3,388.6c-13,8.6-29.7,2.1-42.3,6.1"
												style={{
													fill: "none",
													stroke: "#11527c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M126,394.6c-7,.3-15.8,4.2-22.2,1-5.8-3.3-18.7-4-22,2.4"
												style={{
													fill: "none",
													stroke: "#124b74",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M754.3,382.2c-.4,.3-.9-.1-1.3-1.4"
												style={{
													fill: "none",
													stroke: "#3c466d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M78.3,392l-27.1,4.7c-14.1-8.4-29.1-12-44.2-17"
												style={{
													fill: "none",
													stroke: "#124970",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M793.2,402.1c-2.7,3.3-4.6-.6-4.5-3.3-1-2.1-3.3,4.8-3.6,1.6,6.8-20.9,.7-7.8-7.8-13.4"
												style={{
													fill: "none",
													stroke: "#051024",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M777.3,386.9l-.1-.5"
												style={{
													fill: "none",
													stroke: "#1d324e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M777.2,386.3c0-.4,.1-.7,.2-1"
												style={{
													fill: "none",
													stroke: "#051024",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M777.4,385.3c1.3-1,1.9-2.4,1.8-4"
												style={{
													fill: "none",
													stroke: "#162b45",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M182.3,385.1c0,1,.4,1.7,1.2,2.2"
												style={{
													fill: "none",
													stroke: "#1a6c9c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M183.5,387.3c-5.8,7.4,9.6,12.2,15,15.1"
												style={{
													fill: "none",
													stroke: "#2485ba",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M198.5,402.3l-7.2,.2"
												style={{
													fill: "none",
													stroke: "#125985",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M191.2,402.5c-8.6,1.6-35.9-5.7-20.3-10.8,2.4-2.8-3.5-1.2-2.7-3.2"
												style={{
													fill: "none",
													stroke: "#186fa0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M465.2,381.3c-10.1,3.8-26.3,.8-38,.3"
												style={{
													fill: "none",
													stroke: "#79848d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M761,380.6c-.1-.2-.3-.4-.5-.5"
												style={{
													fill: "none",
													stroke: "#263d5e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M592.5,381.6l-3.5-.1"
												style={{
													fill: "none",
													stroke: "#758396",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M589,381.5l-35.5,.1"
												style={{
													fill: "none",
													stroke: "#7f8f9e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M77.9,393.9c-35.5,10.7-22.5,4.6-1.2,6.2"
												style={{
													fill: "none",
													stroke: "#104970",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M126,394.6c-1.9,1.7,1.6,1.5,1.9,3,2.8,5.6,9,6.2,14.6,6.9"
												style={{
													fill: "none",
													stroke: "#135e8a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M142.5,404.6c-6.5,.3-13.5-1.5-16.6,.8,8.9,3,17.5,.7,24.8,2.2"
												style={{
													fill: "none",
													stroke: "#11456b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M150.7,407.6c-2-.4-3.2,.1-3.8,1.4"
												style={{
													fill: "none",
													stroke: "#135e8a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M146.9,409c-3.3,3.2-26-1.4-12.9,5.6"
												style={{
													fill: "none",
													stroke: "#0c3454",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M134,414.6c-.3,1.7,0,1.9-2,1.7"
												style={{
													fill: "none",
													stroke: "#124b74",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M132,416.3c.3-7.1-18.9-.7-25-.3"
												style={{
													fill: "none",
													stroke: "#135c87",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M107.1,416c-3.3,1.3-7.2-1.9-10.1,.1"
												style={{
													fill: "none",
													stroke: "#0d3e62",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M97,416.1c-8.3,3.8-3,4.1,1.4,8.2"
												style={{
													fill: "none",
													stroke: "#0c3454",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M98.3,424.3c-12.5-7.6-33.2-6.6-42.8-18.4"
												style={{
													fill: "none",
													stroke: "#12476f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M55.5,406.1c-4.3-7.8-15.9-10.8-25-16.6"
												style={{
													fill: "none",
													stroke: "#14517b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M30.5,389.5c-8,0-14.7-3.3-21.3-6.6"
												style={{
													fill: "none",
													stroke: "#12476f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M9.2,382.9c-1.3-.9-4.4,3.1-6.1,3.7"
												style={{
													fill: "none",
													stroke: "#0c3454",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M777,382.9c2.1,.2-1.8,2.2,.4,2.5"
												style={{
													fill: "none",
													stroke: "#162e4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M777.2,386.3c-3.7,4-2,6.5,.1,.5"
												style={{
													fill: "none",
													stroke: "#1d3555",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M793.2,402.1c1.3,1.9-2.6,1-3.1,1.8"
												style={{
													fill: "none",
													stroke: "#081b37",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M790.1,404c-5.7-.9-11.5-.7-17.2,.4"
												style={{
													fill: "none",
													stroke: "#0c2340",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M772.9,404.4c-13.1,1.4-23.5,5.5-35.8,9.1"
												style={{
													fill: "none",
													stroke: "#0f3251",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M737.2,413.6c-.4,0-.8,0-1,.2"
												style={{
													fill: "none",
													stroke: "#1d5b7c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M736.2,413.8l-7.5,1.8"
												style={{
													fill: "none",
													stroke: "#286182",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M728.7,415.6c-7.8,2.2-15.7,3.5-23.8,3.9"
												style={{
													fill: "none",
													stroke: "#3b728c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M705,419.6l-6.9,.2"
												style={{
													fill: "none",
													stroke: "#4a7f91",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M698,419.7l-11.8-.3"
												style={{
													fill: "none",
													stroke: "#588493",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M686.2,419.4c-4.4-.5-10.6,1.9-3.7-4"
												style={{
													fill: "none",
													stroke: "#648494",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M682.5,415.3c6.2,2.6,27.7,4.6,14.9-2.5-1-.4-3.3-.3-1.6-1.9"
												style={{
													fill: "none",
													stroke: "#0b1b36",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M695.9,410.7c6.9-1.1,.2-6.8,4.1-10.1"
												style={{
													fill: "none",
													stroke: "#5a778f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M700,400.6c.9-.4,1.8-.6,2.8-.5"
												style={{
													fill: "none",
													stroke: "#637487",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M702.7,400.1c0,8.7,10.2,1.1,14.8,.9"
												style={{
													fill: "none",
													stroke: "#1c3758",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M717.5,401.1c7,3.3,13.3-3.9,17.5-7.2"
												style={{
													fill: "none",
													stroke: "#0c223d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M735,393.9l1.2-.3"
												style={{
													fill: "none",
													stroke: "#637487",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M736.2,393.6c1.9,.3,.3,4.3,3.2,2.2,2.5-1.8,1.6-4-1.4-4"
												style={{
													fill: "none",
													stroke: "#1f3b5e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M738,391.8l3.2-5.9"
												style={{
													fill: "none",
													stroke: "#637487",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M744.2,386.9c-.4,.5-.3,.9,.2,1.2"
												style={{
													fill: "none",
													stroke: "#263f63",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M744.5,388.1c-.2,5.8,.5,7.5,2.8,1.2"
												style={{
													fill: "none",
													stroke: "#162e4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M747.2,389.3c5.8,3.2,3.9,1.7,2.3-4"
												style={{
													fill: "none",
													stroke: "#263f63",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M749.5,385.3c1.1-.6,1.7-1.5,2-2.7"
												style={{
													fill: "none",
													stroke: "#0e2945",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M671.2,382.6h-7.8"
												style={{
													fill: "none",
													stroke: "#485775",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M663.5,382.6c-8.1,.3-16.3,0-24.6-.9"
												style={{
													fill: "none",
													stroke: "#6f7a89",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M749.5,385.3c-.6-1-1.4-1.4-2.5-1"
												style={{
													fill: "none",
													stroke: "#30557d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M589,381.5c5.1,.5,10.5,2.2,1.3,3.3"
												style={{
													fill: "none",
													stroke: "#e2eff4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M590.2,384.8l-22.5,.1"
												style={{
													fill: "none",
													stroke: "#7e97a8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M567.7,384.9l-29.2,.2"
												style={{
													fill: "none",
													stroke: "#7f9baf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M538.5,385.1l-58.8-.2"
												style={{
													fill: "none",
													stroke: "#82b4cf",
													strokeWidth: "2px",
												}}
											/>
											<line
												x1="479.7"
												y1="384.9"
												x2="436.2"
												y2="384.9"
												style={{
													fill: "none",
													stroke: "#8ac9e6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M436.2,384.9h-21.8"
												style={{
													fill: "none",
													stroke: "#81aecb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M414.5,384.9h-25.8"
												style={{
													fill: "none",
													stroke: "#81abc7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M388.7,384.9l-16.2-.1"
												style={{
													fill: "none",
													stroke: "#7fa7c1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M372.5,384.8c-5.7-1.3-1.2-1-.1-3.4"
												style={{
													fill: "none",
													stroke: "#def7fa",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M319.5,381.8c-2.5,2.9,2.7,2.8,4.5,3"
												style={{
													fill: "none",
													stroke: "#8dbde1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M280,384.6c-1.4,.1-5.8-1.3-2.7-2.4"
												style={{
													fill: "none",
													stroke: "#5b91bb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M355,381.4c-5.6-.3-1.9,3.5,1,3.4"
												style={{
													fill: "none",
													stroke: "#c0e7f6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M356,384.8l-20.8,.1"
												style={{
													fill: "none",
													stroke: "#6090b2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M372.5,384.8l-7.8,.1"
												style={{
													fill: "none",
													stroke: "#71a3bf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M364.7,384.9l-8.8-.1"
												style={{
													fill: "none",
													stroke: "#709cb4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M663.5,382.6c2.3,.4,2.4,.9,.2,1.7"
												style={{
													fill: "none",
													stroke: "#b2c0d7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M663.7,384.3l-69.2,.6"
												style={{
													fill: "none",
													stroke: "#717f90",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M594.5,384.9l-4.2-.1"
												style={{
													fill: "none",
													stroke: "#748ba0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M9.2,382.9c-1.4,9.6,11.5,11.3,18,14.9"
												style={{
													fill: "none",
													stroke: "#0b2441",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M27.2,397.8c5.4,3.2,10.4,8.6,17.5,11.6"
												style={{
													fill: "none",
													stroke: "#0d2e4d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M44.7,409.3c-6.7,.9-12.8,9.4-19,7"
												style={{
													fill: "none",
													stroke: "#0c213b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M25.7,416.3c-8.2-2.2-17.2,.8-22.7,6.9"
												style={{
													fill: "none",
													stroke: "#091a34",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M670.7,384.3h-7"
												style={{
													fill: "none",
													stroke: "#4a5c7c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M30.5,389.5c.7,4.2-4.1,5.4-3.4,8.4"
												style={{
													fill: "none",
													stroke: "#134168",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M747.2,389.3l-2.7-1.2"
												style={{
													fill: "none",
													stroke: "#385983",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M675.8,386.6c-39.2-2.5-57,3.8-81.4-1.7"
												style={{
													fill: "none",
													stroke: "#0c2745",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M231.4,387.5c20.3,17.7,40.5,13.8,68.7,29.4"
												style={{
													fill: "none",
													stroke: "#9ef0f9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M300.1,416.9c-.9,3.2-2,7.8-6.4,6.4"
												style={{
													fill: "none",
													stroke: "#4a7c8a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M293.7,423.4l-3.8-.1"
												style={{
													fill: "none",
													stroke: "#66c9e5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M290,423.3c-.9-.4-1.2-.6-.8-.6"
												style={{
													fill: "none",
													stroke: "#71dbf1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M289.2,422.7c34.5-1.8-60.4-25-66.3-33.1"
												style={{
													fill: "none",
													stroke: "#7ee3f7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M364.7,384.9c2.1,1.4,18.3,.5,12.4,2.3-9.5,.1-18.9-.2-28.4-.5-6.5,.8,.6,10.6-2.8,15-1.2,.6-.8,5.9-2.6,3.2-1.7,4.3,15,4.1,19.1,7.3"
												style={{
													fill: "none",
													stroke: "#114c7b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M362.3,412.2c-5.8-.6-11.5-1.9-17.1-3.9"
												style={{
													fill: "none",
													stroke: "#6c93af",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M345.2,408.3c-8.9,.5-17.7,.5-26.5,.2"
												style={{
													fill: "none",
													stroke: "#709cb4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M388.7,384.9c.9,.3,8.6,.3,5.2,.2-6.1-.2-7.3,1.4-10.7,2.9-5,7.3-3.2,17.6-7.9,25.2,1,2.3,4.1,.9,4.3,3.4"
												style={{
													fill: "none",
													stroke: "#13588b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M379.7,416.6c-5.9-1.1-11.7-2.5-17.4-4.4"
												style={{
													fill: "none",
													stroke: "#6d9bba",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M414.5,384.9c-5.4,1.2-14.8,1.4-19.1,4.9,.4,5.4-3.1,13-3.3,18,.3,3.9-6.5,4.2-1.9,8"
												style={{
													fill: "none",
													stroke: "#155f96",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M390.3,415.9c-.6,1.1-.7,2.2-.3,3.5"
												style={{
													fill: "none",
													stroke: "#176ea4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M390,419.3l-10.3-2.7"
												style={{
													fill: "none",
													stroke: "#6f9fc0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M436.2,384.9l-4,1.8"
												style={{
													fill: "none",
													stroke: "#1f7db5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M432.2,386.6c-8.1,4.4-12.4,16.1-17,22.7"
												style={{
													fill: "none",
													stroke: "#1b74ad",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M415.2,409.3l-1.5,3"
												style={{
													fill: "none",
													stroke: "#1f7db5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M413.7,412.3c-2.9,4.2-4.7,0-6.9-1.9-2.4-.3-3.3,.9-2.9,3.7-2.4,3.8-10.7-2.2-13.7,1.7"
												style={{
													fill: "none",
													stroke: "#1771a8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M479.7,384.9c-6.5,3.5,19-.2,20.2,11.2"
												style={{
													fill: "none",
													stroke: "#2083b9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M500,396.1c-27,1-6,1,8.8,1.7"
												style={{
													fill: "none",
													stroke: "#7cb8d8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M508.7,397.8c-.9,7.8,18.6-4.7,20.2,5.4"
												style={{
													fill: "none",
													stroke: "#2083b9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M529.1,403.1c1.2,3.3,4.7,9.4,8.2,8.8"
												style={{
													fill: "none",
													stroke: "#46a5d7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M537.3,411.9l1.2,.5"
												style={{
													fill: "none",
													stroke: "#2083b9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M538.5,412.3c3.2,.3,5.4,2.8,9.5,3"
												style={{
													fill: "none",
													stroke: "#248fc8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M548,415.3c-28.5,.1-58,.2-86-.6,10.2,2.5,20.6,2.7,31,2.6"
												style={{
													fill: "none",
													stroke: "#8ac9e6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M493,417.4c1.9,1.1,2.1,2.5,1,4.3"
												style={{
													fill: "none",
													stroke: "#2e9cd4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M494,421.6c-9.2,5.6-17.8,22.2-29,13.6"
												style={{
													fill: "none",
													stroke: "#42a4d7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M465,435.3c-7.2-3.6-13.7-5-21.4-4.6"
												style={{
													fill: "none",
													stroke: "#539ccf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M443.6,430.8c-.2-1.3-.7-2.5-1.4-3.7"
												style={{
													fill: "none",
													stroke: "#2494ce",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M442.2,427.1c2.6-2-3.4-2.8-1.8-1"
												style={{
													fill: "none",
													stroke: "#75b7da",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M440.4,426.1c-7.9,4.1-11.8-3.3-19.2-1.9"
												style={{
													fill: "none",
													stroke: "#2494ce",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M421.2,424.2c-.1-.5-.4-.7-.8-.6"
												style={{
													fill: "none",
													stroke: "#175377",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M420.5,423.6c-1-2.5-7-.7-9.7-1.5"
												style={{
													fill: "none",
													stroke: "#78bddf",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M410.7,422.1c-4.6-3.2,2.3-7.5,3-9.7"
												style={{
													fill: "none",
													stroke: "#218cc3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M415.2,409.3c5.8-6.3,13.3-16.6,16.9-22.7"
												style={{
													fill: "none",
													stroke: "#248fc8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M538.5,385.1c-8,1.4,13.3,4.6,11.3,11"
												style={{
													fill: "none",
													stroke: "#155582",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M549.7,396.1c-16.6,.4-33.2,.4-49.8,0"
												style={{
													fill: "none",
													stroke: "#73a3c1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M567.7,384.9c-3.1,.5-6.4,.3-9.4,1.2-2.5,2.2,7.3,.7,9.3,1,3.2,1.5,.6,8.1-3.5,6.8-4.4,.1-7-1.1-9.4,2.2"
												style={{
													fill: "none",
													stroke: "#11385b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M554.7,396.1h-5"
												style={{
													fill: "none",
													stroke: "#718aa0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M662.9,396.3c-28.8,.2-81.7-1-108.2-.3"
												style={{
													fill: "none",
													stroke: "#6f859a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M193,388.9c-2.1,2.7-6.8-.4-9.4-1.6"
												style={{
													fill: "none",
													stroke: "#2077a8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M738,391.8l-1.8,1.8"
												style={{
													fill: "none",
													stroke: "#7e9cba",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M735,393.9c-7.1-1.4-11.2,2.3-16.6,6.1"
												style={{
													fill: "none",
													stroke: "#6b8399",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M718.4,400.1c-4.8,.2-10.5-1.9-15.7,0"
												style={{
													fill: "none",
													stroke: "#7b98b4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M700,400.6c-.2-.4-.4-.5-.8-.6"
												style={{
													fill: "none",
													stroke: "#b9d8eb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M699.2,400.1c1.1-.9,1.9-1.9,2.5-3.2"
												style={{
													fill: "none",
													stroke: "#66788c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M251.7,392.6c14.3,7,35.7,12.2,50.6,22.3"
												style={{
													fill: "none",
													stroke: "#b8f5fc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M302.5,414.9l-1.5,.9"
												style={{
													fill: "none",
													stroke: "#67b6d3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M301,415.8c-.3,.2-.6,.6-.8,1.1"
												style={{
													fill: "none",
													stroke: "#59818c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M867.2,403.6c-9.4-17.6-24.9,5.3-40.8-.2"
												style={{
													fill: "none",
													stroke: "#05172e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M826.4,403.3c1.2-1.4,2.6-2.4,4-2.9"
												style={{
													fill: "none",
													stroke: "#0d2947",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M830.5,400.4l23.1-9.1"
												style={{
													fill: "none",
													stroke: "#103352",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M206.2,390.8c-21.7,0,4,6.8,7.4,13.8"
												style={{
													fill: "none",
													stroke: "#2e9ecc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M213.7,404.6c-6.6,1-13.1,1.4-19.8,1.2"
												style={{
													fill: "none",
													stroke: "#19709f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M194,405.9c-2.1,.2-2.6-.1-1.2-1"
												style={{
													fill: "none",
													stroke: "#1e7aac",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M192.7,404.9c-.3-2.2,14.4-1.5,5.8-2.6"
												style={{
													fill: "none",
													stroke: "#186390",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M191.2,402.5c-1.4,1.8-.9,2.6,1.5,2.4"
												style={{
													fill: "none",
													stroke: "#0c4e77",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M194,405.9c-10.2,.9-21.6,2.3-4.5,2"
												style={{
													fill: "none",
													stroke: "#0d5a86",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M189.5,407.9c.4,7.4,20,8.7,25.5,15.7"
												style={{
													fill: "none",
													stroke: "#156998",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M215,423.6c-12.2,1.4,13.3,1.9,17.9,2.3"
												style={{
													fill: "none",
													stroke: "#0c3958",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M233,425.8c-22,4.4-42.4-3.9-63.6-1.5"
												style={{
													fill: "none",
													stroke: "#104f79",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M169.5,424.4c-2.7-.8-5.3-2-7.8-3.5"
												style={{
													fill: "none",
													stroke: "#0c446b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M161.7,420.9c12-4.3,39.3,3.7,12.6-4.1"
												style={{
													fill: "none",
													stroke: "#0c3b5c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M174.4,416.8c-6-4.8-15.2-1.8-23.2-4.1"
												style={{
													fill: "none",
													stroke: "#104f79",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M151.2,412.6c-1.6-.9-3.1-2.1-4.3-3.6"
												style={{
													fill: "none",
													stroke: "#0c3b5c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M150.7,407.6c12.3,.8-3.5-3.2-8.3-3.1"
												style={{
													fill: "none",
													stroke: "#114c73",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M216.9,404.1l-3.2,.5"
												style={{
													fill: "none",
													stroke: "#1d7ea6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M289.2,422.7c-17.9-14.5-47-14.6-66-29.5"
												style={{
													fill: "none",
													stroke: "#60d3f0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M830.5,400.4c-1.6-.4-2.5-1.6-2.7-3.6"
												style={{
													fill: "none",
													stroke: "#163d60",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M55.5,406.1c-.6,0-1,.2-1,.8"
												style={{
													fill: "none",
													stroke: "#134168",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M54.4,406.9l-9,4.3"
												style={{
													fill: "none",
													stroke: "#0d2e4d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M45.5,411.1c-.7-.3-1-.9-.8-1.8"
												style={{
													fill: "none",
													stroke: "#143e62",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M312.2,407.4c-1.8,1.2,1.7,4.4-1.8,3.8-1.7,0-2.1,1.8,.5,1.7"
												style={{
													fill: "none",
													stroke: "#caf4fa",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M311,412.9l-8.5,2"
												style={{
													fill: "none",
													stroke: "#72b6d3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M869,430.7c-1.6,1.1-3.4-1.7-5.2,.1"
												style={{
													fill: "none",
													stroke: "#13507a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M863.7,430.8c-1.5,.5-2.9,.7-4.3,.6"
												style={{
													fill: "none",
													stroke: "#134872",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M859.4,431.4c-18.5,5.1-20.5,2.5-49.4,2.9"
												style={{
													fill: "none",
													stroke: "#0d2c49",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M810,434.4c16.2-.8-1.2-2.2-4.5-1.8"
												style={{
													fill: "none",
													stroke: "#1a5d89",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M805.5,432.6c-5-7.4,2.2-11.4,2.9-17.7"
												style={{
													fill: "none",
													stroke: "#175883",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M808.5,414.9c20,5.2,41,.2,60.9-4.3"
												style={{
													fill: "none",
													stroke: "#16456a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M290,423.3c-23.1,1.5-42.8-15.7-65.5-17.6"
												style={{
													fill: "none",
													stroke: "#48bade",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M805.7,396.3c-5.4,2.4-8.2,8.7-15.6,7.6"
												style={{
													fill: "none",
													stroke: "#102b4b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M717.5,401.1l1-1"
												style={{
													fill: "none",
													stroke: "#23466a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M701.2,396.6c-9.3,3.8-28.1,.4-55.5,1.5"
												style={{
													fill: "none",
													stroke: "#6c798a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M645.7,398.1h-21.2"
												style={{
													fill: "none",
													stroke: "#708195",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M624.5,398.1c-20.3-.4-40.8,1-60.8,.4"
												style={{
													fill: "none",
													stroke: "#6f859a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M563.7,398.4l-7.2-.2"
												style={{
													fill: "none",
													stroke: "#72899f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M556.5,398.1l-47.8-.3"
												style={{
													fill: "none",
													stroke: "#73a3c1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M867.2,403.6c-16.8-1.7-27.8,7.8-42.1,2.5"
												style={{
													fill: "none",
													stroke: "#0e2741",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M825.1,406.1c0-1.6,.4-2.5,1.3-2.8"
												style={{
													fill: "none",
													stroke: "#0c213b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M871.2,434.6c-1.9-2.4-4.4-3.6-7.5-3.8"
												style={{
													fill: "none",
													stroke: "#104c78",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M808.5,414.9l9.1-9.8"
												style={{
													fill: "none",
													stroke: "#19486b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M817.5,405.1l7.6,1"
												style={{
													fill: "none",
													stroke: "#15395a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M817.5,405.1c-17-6.4-29.2,7.4-46.6,5.1-5.7-.5,6.9-5.2,1.9-5.9"
												style={{
													fill: "none",
													stroke: "#174265",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M699.2,400.1c-1.9,3.8-4.8,6.3-8.8,7.5"
												style={{
													fill: "none",
													stroke: "#5c7b94",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M690.5,407.6c-38,7.5-50,13.1-94.5,20"
												style={{
													fill: "none",
													stroke: "#689",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M596,427.6c-5.8-3.3,35.5-7.8,43.9-9.3"
												style={{
													fill: "none",
													stroke: "#0c2745",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M640,418.2c17.7-8,38.1-6.1,52.5-14.6-12-10.4-36.7,.4-52.5-4.1-.6-1.9,4.7-.9,5.6-1.3"
												style={{
													fill: "none",
													stroke: "#0d2340",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M556.5,398.1c-.3,1.5,0,2.9,.8,4.2"
												style={{
													fill: "none",
													stroke: "#165581",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M557.2,402.3c-7.9,.3-21.2-2.1-18.7,10"
												style={{
													fill: "none",
													stroke: "#1c7ab1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M537.3,411.9c-3-2.6-5.7-5.5-8.2-8.8"
												style={{
													fill: "none",
													stroke: "#3d90c0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M563.7,398.4c-2.5,3.6,5.4,1.2,7.2,2.5"
												style={{
													fill: "none",
													stroke: "#12375a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M570.9,400.9c.5,7.2,10,22.9,17.3,26.6"
												style={{
													fill: "none",
													stroke: "#1c476c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M588.2,427.4c-.1,.9,.3,1.2,1.3,1"
												style={{
													fill: "none",
													stroke: "#12375a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M589.5,428.4l-14.3,2.2"
												style={{
													fill: "none",
													stroke: "#6c98ae",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M575.2,430.6l-6.2,.2"
												style={{
													fill: "none",
													stroke: "#0d243e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M569,430.8c-1-4.2-7-8.3-6.1-13.5"
												style={{
													fill: "none",
													stroke: "#246e9b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M562.9,417.3c.2-.5,.1-.9-.3-1.3"
												style={{
													fill: "none",
													stroke: "#819bae",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M562.6,416.1c-.9-5-2.7-9.5-5.4-13.8"
												style={{
													fill: "none",
													stroke: "#1b618f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M624.5,398.1c-2,0-2.3,.7-1.1,2.2"
												style={{
													fill: "none",
													stroke: "#102f4f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M623.4,400.3c3.8,5.6,10.3,16.9,16.1,17.1"
												style={{
													fill: "none",
													stroke: "#173f61",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M639.5,417.4c.2,.1,.4,.4,.5,.8"
												style={{
													fill: "none",
													stroke: "#102f4f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M596,427.6l-6.5,.8"
												style={{
													fill: "none",
													stroke: "#6994a8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M588.2,427.4l-17.2-26.6"
												style={{
													fill: "none",
													stroke: "#194366",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M639.5,417.4c-7.7-5.8-9.9-13.9-16.1-17"
												style={{
													fill: "none",
													stroke: "#183b5c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M695.9,410.7l-4.9-1.4"
												style={{
													fill: "none",
													stroke: "#607f9a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M691,409.3l-.5-1.8"
												style={{
													fill: "none",
													stroke: "#b9e8f8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M562.6,416.1l-14.6-.8"
												style={{
													fill: "none",
													stroke: "#86c0de",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M808.5,414.9c-2.8-1.2-5.7-1.8-8.8-2"
												style={{
													fill: "none",
													stroke: "#195b84",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M799.7,412.9l-14.4,.7"
												style={{
													fill: "none",
													stroke: "#1c608a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M785.3,413.6l-16.8,.8"
												style={{
													fill: "none",
													stroke: "#1e6490",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M768.5,414.4c-8,.4-16,.3-24-.2"
												style={{
													fill: "none",
													stroke: "#246e9a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M744.5,414.1l-7.2-.6"
												style={{
													fill: "none",
													stroke: "#287aa1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M217,404.9c-.1,.2-.3,.3-.5,.2"
												style={{
													fill: "none",
													stroke: "#227ca6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M216.5,405.1l-18.2,2"
												style={{
													fill: "none",
													stroke: "#146796",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M198.3,407.1l-8.8,.8"
												style={{
													fill: "none",
													stroke: "#0f5f8c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M293.7,423.4l-40.7,.1"
												style={{
													fill: "none",
													stroke: "#215b78",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M253,423.5c-9.3-7-32.9-9.6-36.5-18.4"
												style={{
													fill: "none",
													stroke: "#2f93c2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M253,423.5h-29.8"
												style={{
													fill: "none",
													stroke: "#134668",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M223.2,423.6c-5.7-9.6-20.7-7.1-24.8-16.4"
												style={{
													fill: "none",
													stroke: "#1c76a8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M98.3,424.3c-6.4,11.8-28.7-14.7-41.4-7-3,.2-1.9-9-2.6-10.6"
												style={{
													fill: "none",
													stroke: "#0b2441",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M97,416.1c5.4,1.8,10.6,3.9,15.8,6.2"
												style={{
													fill: "none",
													stroke: "#061b35",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M112.7,422.3c15.7,8.8,16.2,3.8,29.4-3.5,4.3-.6-8.1-3.7-8.2-4.3"
												style={{
													fill: "none",
													stroke: "#0b2846",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M151.2,412.6c2.5,14.2,13.9-.5,23.1,4.1"
												style={{
													fill: "none",
													stroke: "#092643",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M161.7,420.9c-15.5,1.1,19.3,17.4,26.3,10.5"
												style={{
													fill: "none",
													stroke: "#061b35",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M188,431.4c7.8,0-1.1-7.9,5.7-3.7,12.9,7.8,27.7-1.4,41.5,3.9"
												style={{
													fill: "none",
													stroke: "#092643",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M235.2,431.6c-3.6-.1-15.1,2.4-18.5,4.2"
												style={{
													fill: "none",
													stroke: "#081c36",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M216.7,435.9c-18.6-.7-37,.5-55.4,.9"
												style={{
													fill: "none",
													stroke: "#113d5e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M161.2,436.8l-1.8-.7"
												style={{
													fill: "none",
													stroke: "#04152c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M159.4,436.1c-11.2-10.7-35.9,2.1-6.3-.2"
												style={{
													fill: "none",
													stroke: "#0b3256",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M153.1,436.1c1.2,4-8,8.9-5.1,4.7"
												style={{
													fill: "none",
													stroke: "#04152c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M148,440.9c2.4-.1,2.9-.9,1.5-2.3"
												style={{
													fill: "none",
													stroke: "#565d7a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M149.5,438.6c-1.5-.6-2-.1-1.5,1.2"
												style={{
													fill: "none",
													stroke: "#273c5c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M148,439.8c-.3,.2-.3,.5,0,.8"
												style={{
													fill: "none",
													stroke: "#565d7a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M147.9,440.6h-1.2"
												style={{
													fill: "none",
													stroke: "#04152c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M146.7,440.6c-2.3-1.8-7.1-.2-10.2-.7"
												style={{
													fill: "none",
													stroke: "#5a657c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M136.5,439.9c-13.3-1.7-20.7-.5-29.5-.3"
												style={{
													fill: "none",
													stroke: "#0b1e38",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M107,439.6c-8.8-6.4-20.3-.6-27.3-10.1"
												style={{
													fill: "none",
													stroke: "#103556",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M79.7,429.5c-31.5-1.8-27.5,14.1-2.5,3.9"
												style={{
													fill: "none",
													stroke: "#0b2846",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M77.2,433.3l1.3,1.8"
												style={{
													fill: "none",
													stroke: "#103556",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M78.5,435.1c5.6,10.9,17.5,2.6,26.4,5.6"
												style={{
													fill: "none",
													stroke: "#08203c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M104.9,440.8l2.3-.2"
												style={{
													fill: "none",
													stroke: "#103556",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M107.2,440.6c8.5-.1,16.8,.4,25.3,.2"
												style={{
													fill: "none",
													stroke: "#0b1e38",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M132.5,440.8c-9.5,4.8-32.7,.5-46.8,2.4"
												style={{
													fill: "none",
													stroke: "#04152c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M22.5,441.1c20.1,.1,44.3-1,9.2-6.5"
												style={{
													fill: "none",
													stroke: "#0d2c4a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M31.7,434.5c-2.8-3.7-8.2-6.8-6-11.4"
												style={{
													fill: "none",
													stroke: "#091a34",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M25.7,423.1c4.1,2.3,10.2-.5,14-1.9,1.6-3.4,1.5-7.9,5.8-10.1"
												style={{
													fill: "none",
													stroke: "#0c213b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M223.2,423.6h-8.2"
												style={{
													fill: "none",
													stroke: "#0e3e5e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M345.2,408.3c2.1,2.7,9.2,3.1,4.3,5.9"
												style={{
													fill: "none",
													stroke: "#ccebf3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M349.5,414.3c-2.8,1.5-3.9,4.4-6.9,6.1"
												style={{
													fill: "none",
													stroke: "#6f8fa1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M342.6,420.3c-6.4-3.3-12.3-9.8-19.6-6.9"
												style={{
													fill: "none",
													stroke: "#77b1cb",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M322.9,413.3c-4.2,1.3-5.5,6.3-9.4,7.3"
												style={{
													fill: "none",
													stroke: "#6a8594",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M313.5,420.7c-.4,.2-.7,.2-1,.1"
												style={{
													fill: "none",
													stroke: "#6b808b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M312.5,420.8c1.6-3.3,2.9-5.7-1.5-7.9"
												style={{
													fill: "none",
													stroke: "#79b5d1",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M691,409.3c-3.4,1.2-6.2,3.2-8.5,6"
												style={{
													fill: "none",
													stroke: "#6a8c9e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M686.2,419.4c1.2,14.3,15.2,12.4-6.8,13.3"
												style={{
													fill: "none",
													stroke: "#b8f5fc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M679.5,432.9c-34.8,0-69.5-1.4-104.2-2.2"
												style={{
													fill: "none",
													stroke: "#64818d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M390,419.3c6.8,1.4,13.8,2.4,20.8,2.8"
												style={{
													fill: "none",
													stroke: "#71b1d2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M420.5,423.6c-13.8,0-28.6-1.7-40.3-2.2"
												style={{
													fill: "none",
													stroke: "#677886",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M380,421.3c1.4-2,.9-2.8-1.5-2.5"
												style={{
													fill: "none",
													stroke: "#6a849a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M378.5,418.8c-3.2-1.1-6.9,0-9.8-2.2"
												style={{
													fill: "none",
													stroke: "#77abc8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M368.7,416.6c-3.3-2.4-7.8-2-11.5-.8"
												style={{
													fill: "none",
													stroke: "#6d92ac",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M357.2,415.9c-2.4-.9-4.8-1.4-7.2-1.5"
												style={{
													fill: "none",
													stroke: "#7aabc9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M350,414.4l-.5-.1"
												style={{
													fill: "none",
													stroke: "#6b869c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M25.7,423.1c-25.3,4.9-17.4-1.6,0-6.9"
												style={{
													fill: "none",
													stroke: "#102949",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M312.5,420.8c-1.9-3.5-8.3-4.8-11.5-5"
												style={{
													fill: "none",
													stroke: "#134264",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M342.6,420.3c-.2,.5-.8,.8-1.6,.8"
												style={{
													fill: "none",
													stroke: "#164d74",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M341,421.1l-3-.3"
												style={{
													fill: "none",
													stroke: "#123e5e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M338,420.8c-.9-2.8-5.5-2.2-6.8-4.7"
												style={{
													fill: "none",
													stroke: "#12537d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M331.1,416.1c-2-2.4-4.4-2.9-7.3-1.5"
												style={{
													fill: "none",
													stroke: "#45a5ca",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M323.8,414.6l-.9-1.2"
												style={{
													fill: "none",
													stroke: "#114367",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M799.7,412.9c.9,4.7-8.1,3.7-9.2,8.2-4.6,12.6,5.5,12,14.9,11.6"
												style={{
													fill: "none",
													stroke: "#1b6a98",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M810,434.4l-17.5-.1"
												style={{
													fill: "none",
													stroke: "#123e5e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M792.5,434.3c5.1-1.3-6.7-1.8-6.9-2.1-10.3-4.3-1.2-12.2-.4-18.5"
												style={{
													fill: "none",
													stroke: "#2073a4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M132,416.3c-12,3.8-8.9,4.3-19.3,3.6"
												style={{
													fill: "none",
													stroke: "#12507a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M112.7,419.9c-1.2-1.7-3.1-3-5.6-3.9"
												style={{
													fill: "none",
													stroke: "#0d4268",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M323.8,414.6c1.3,1.1,2.6,1.6,3.9,1.5"
												style={{
													fill: "none",
													stroke: "#387993",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M327.7,416.1c1.7,2.8,4.5,5.3,8,5"
												style={{
													fill: "none",
													stroke: "#052746",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M335.7,421.1c-7.4,1.8-15,2.1-22.2-.3"
												style={{
													fill: "none",
													stroke: "#051227",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M744.5,414.1c4.8,4.4,3.2,12.9,10.7,16.5"
												style={{
													fill: "none",
													stroke: "#3197c5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M755.2,430.6l-5-.9"
												style={{
													fill: "none",
													stroke: "#247aa3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M750.2,429.7c-11.1-2.4-12.1-10.2-14.1-15.8"
												style={{
													fill: "none",
													stroke: "#40a9d3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M792.5,434.3h-22.8"
												style={{
													fill: "none",
													stroke: "#134264",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M769.7,434.3c14.4-.6-5.8-4.3-3.4-12.4-.1-2.6,3.7-6,2.3-7.5"
												style={{
													fill: "none",
													stroke: "#2781b4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M331.1,416.1h-3.4"
												style={{
													fill: "none",
													stroke: "#3989a9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M750.2,429.7l-13.3-.1"
												style={{
													fill: "none",
													stroke: "#2f80aa",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M737,429.6c5.4-2-12.5-3.7-8.1-13.9"
												style={{
													fill: "none",
													stroke: "#5ec0e3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M769.7,434.3h-9.3"
												style={{
													fill: "none",
													stroke: "#194c6e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M760.4,434.4l-5.2-3.8"
												style={{
													fill: "none",
													stroke: "#206e9c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M350,414.4c.9,.3,1.4,1,1.5,2"
												style={{
													fill: "none",
													stroke: "#1c4f76",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M351.5,416.3l-3.4,4.5"
												style={{
													fill: "none",
													stroke: "#10365a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M348.1,420.8l-7.2,.3"
												style={{
													fill: "none",
													stroke: "#091c33",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M357.2,415.9c-1.8,1.4-3.7,1.6-5.7,.5"
												style={{
													fill: "none",
													stroke: "#1f5b87",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M112.7,422.3v-2.4"
												style={{
													fill: "none",
													stroke: "#0b3255",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M368.7,416.6c-.3,2.1-4.4,.8-3.3,3.9"
												style={{
													fill: "none",
													stroke: "#1c5b86",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M365.5,420.6l-17.3,.2"
												style={{
													fill: "none",
													stroke: "#0c2844",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M562.9,417.3h-70"
												style={{
													fill: "none",
													stroke: "#90cdea",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M31.7,434.5c-7.2-1.3-22.3-3.3-6.5,1.9,0,.6-11.2,3.6-9.9,.4"
												style={{
													fill: "none",
													stroke: "#113458",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M15.3,436.7c-3.9-2.4-4.8-8.3-10.9-8.9"
												style={{
													fill: "none",
													stroke: "#103a5e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M737,429.6c-.5,0-.9,.1-1.2,.3"
												style={{
													fill: "none",
													stroke: "#4291b4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M735.7,429.9c-3.8-1-6,2.5-9,4.2"
												style={{
													fill: "none",
													stroke: "#3b748f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M726.7,434.1c-2,1.8-4.3,2.1-6.6,1"
												style={{
													fill: "none",
													stroke: "#3b6f85",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M720.1,435.1c7.3-.2,6-8.4-.5-3.9"
												style={{
													fill: "none",
													stroke: "#5d9dc4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M719.7,431.1c-7.9-1.2-13.3-4.7-14.7-11.6"
												style={{
													fill: "none",
													stroke: "#80ddf2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M335.7,421.1c.8,.1,1.5,0,2.2-.2"
												style={{
													fill: "none",
													stroke: "#06223c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M365.5,420.6c2.1,1,4.3,1.1,6.5,.2"
												style={{
													fill: "none",
													stroke: "#16405f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M372,420.8c2.8,.9,5.5,1.1,8,.5"
												style={{
													fill: "none",
													stroke: "#081a31",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M421.2,424.2l-26.5,.7"
												style={{
													fill: "none",
													stroke: "#134f75",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M394.7,424.9l-6,.2"
												style={{
													fill: "none",
													stroke: "#134a6e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M388.7,425.1c-20.1,.2-33.2-.1-50.2,.4"
												style={{
													fill: "none",
													stroke: "#093253",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M338.5,425.4c-9.7-.8-16.4-1.8-25.3,1.4"
												style={{
													fill: "none",
													stroke: "#051b32",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M313.2,426.8c-.1,0-.2,.1-.3,.3"
												style={{
													fill: "none",
													stroke: "#0a4161",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M312.9,427.1l-8.2,2.5"
												style={{
													fill: "none",
													stroke: "#093253",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M304.7,429.6c-21.5-8.6-48.1-2.9-71.8-3.8"
												style={{
													fill: "none",
													stroke: "#09243e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M378.5,418.8c-2.1,.8-4.7,.4-6.5,2"
												style={{
													fill: "none",
													stroke: "#194d73",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M569,430.8l-31.5,.4"
												style={{
													fill: "none",
													stroke: "#1c577a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M537.5,431.2c-1-.1-2-.1-3-.1,5,.7-6.6,8.4-9.1,10.7"
												style={{
													fill: "none",
													stroke: "#37a1d8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M485.4,441.8c3-4.5,8.8-3.7,10.5-11-3,2.5-1,3,0,0-3.7,3.4-1.6-2.5-1-4.3,.2-.7,2.2-7.5-.3-4.7"
												style={{
													fill: "none",
													stroke: "#2e9cd4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M494.5,421.7c-.1-.1-.3-.2-.5-.1"
												style={{
													fill: "none",
													stroke: "#48a8da",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M3,441.1H22.4"
												style={{
													fill: "none",
													stroke: "#0c3050",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M132.5,440.8l4-.2"
												style={{
													fill: "none",
													stroke: "#0a223e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M136.5,440.6c3.4,1.1,6.9,1.1,10.2,0"
												style={{
													fill: "none",
													stroke: "#596982",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M147.9,440.6l.1,.2"
												style={{
													fill: "none",
													stroke: "#556180",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M153.1,436.1h6.3"
												style={{
													fill: "none",
													stroke: "#0a365c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M161.2,436.8c-1.1,2,8.5,1.3,11,1.3"
												style={{
													fill: "none",
													stroke: "#104164",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M172.2,438.1c2.1-.1,9.2,0,6.7,3.9"
												style={{
													fill: "none",
													stroke: "#041b34",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M698,419.7c3.3,13.7,14.6,12.5-6.6,13.2"
												style={{
													fill: "none",
													stroke: "#9ef0f9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M691.5,433l-12-.1"
												style={{
													fill: "none",
													stroke: "#59818c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M719.7,431.1l-1.2,2.2"
												style={{
													fill: "none",
													stroke: "#6caac9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M718.5,433.3l-27-.3"
												style={{
													fill: "none",
													stroke: "#4a7c8a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M169.5,424.4c5.6,4.1,12.9,3.4,18.5,6.9"
												style={{
													fill: "none",
													stroke: "#0a2f51",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M409.4,441.9c.3-1.1,.8-2.1,1.6-3"
												style={{
													fill: "none",
													stroke: "#2392ca",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M411,438.9c5.1-.5,10.1-.3,15,.7"
												style={{
													fill: "none",
													stroke: "#85c5e4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M426,439.6c14.3,4.2,35.5-.4,51,1.7"
												style={{
													fill: "none",
													stroke: "#17557b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M476.9,441.3c-1,2.3,3.2,.5,3-1"
												style={{
													fill: "none",
													stroke: "#80bede",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M479.9,440.3c7.3-1.1,1.6-1.4-2.3-1"
												style={{
													fill: "none",
													stroke: "#2179ab",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M477.7,439.4l-.8-.1"
												style={{
													fill: "none",
													stroke: "#17557b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M477,439.3c4.2-6.9,12.6-10.8,17.5-17.6"
												style={{
													fill: "none",
													stroke: "#42a4d7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M477,439.3c-4.7,1.1-8.5-1.3-12-3.3"
												style={{
													fill: "none",
													stroke: "#316182",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M465,436.1c.2-.2,.2-.5,0-.7"
												style={{
													fill: "none",
													stroke: "#6da8d6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M304.7,429.6c-5.4,.6-3,7,2.5,4.6"
												style={{
													fill: "none",
													stroke: "#0d4874",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M307.2,434.3l7.2,.3"
												style={{
													fill: "none",
													stroke: "#0e5782",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M314.5,434.6c10.9,.9,21,1.5,31.5,2.4"
												style={{
													fill: "none",
													stroke: "#0d4874",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M346,437.1c-12.8,.5-25.6,.5-38.5,0"
												style={{
													fill: "none",
													stroke: "#7896ac",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M307.5,437.1c-5-.8-10-1-15-.7"
												style={{
													fill: "none",
													stroke: "#1b618e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M292.5,436.3l-55.8,.3"
												style={{
													fill: "none",
													stroke: "#3c7da6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M236.7,436.6l-4.7-.3"
												style={{
													fill: "none",
													stroke: "#205e86",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M232,436.3c7.3-1.3,18.4-6.2,3.2-4.6"
												style={{
													fill: "none",
													stroke: "#0c3052",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M440.4,426.1c.5,.7,1.1,1,1.8,.9"
												style={{
													fill: "none",
													stroke: "#71b3d8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M443.6,430.8c-1.8,.8-14.3-1.6-14.1,.8"
												style={{
													fill: "none",
													stroke: "#4f98cd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M429.5,431.6c-1.1,1.4-1.7,3.1-1.8,5"
												style={{
													fill: "none",
													stroke: "#135179",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M427.7,436.6l-14.5,.2"
												style={{
													fill: "none",
													stroke: "#81c1e2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M413.2,436.8c-15.4-3.1,1-1.4-6.5-6.9,.3-7.1-10-1.5-11.9-5"
												style={{
													fill: "none",
													stroke: "#208bc6",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M338.5,425.4l-1.1,.6"
												style={{
													fill: "none",
													stroke: "#093f68",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M337.4,426c-3.1,5.9-12.2,2.2-14.7,6.4-3.4-2.3-4.5-6.9-9.3-5.5"
												style={{
													fill: "none",
													stroke: "#0a4e76",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M388.7,425.1c1.8,8.2-12.3,3.2-14.3,8.2,1,3.8,13.7,0,18.4,3.2"
												style={{
													fill: "none",
													stroke: "#166ea4",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M392.7,436.5l-46.8,.5"
												style={{
													fill: "none",
													stroke: "#77a4c0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M314.5,434.6c11.5-.1,25.8,.5,22.9-8.7"
												style={{
													fill: "none",
													stroke: "#0e6596",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M413.2,436.8l-20.5-.3"
												style={{
													fill: "none",
													stroke: "#81bcdc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M307.2,434.3c.8-3.3,6.6-1.1,4.9-6.2,0-.6,.4-.8,.8-1"
												style={{
													fill: "none",
													stroke: "#0e6596",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M15.3,436.7c-2.8,1.5-5.7,2.1-8.8,1.9"
												style={{
													fill: "none",
													stroke: "#144c74",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M6.5,438.6c-1-.9-2-1.6-3.3-2"
												style={{
													fill: "none",
													stroke: "#0c2f4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M79.7,429.5c-2.3,.3-3.2,1.6-2.5,3.8"
												style={{
													fill: "none",
													stroke: "#154c76",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M3.3,439.3c1.1-.2,2.2-.4,3.2-.7"
												style={{
													fill: "none",
													stroke: "#0d2a46",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M760.4,434.4l-21.2-.5"
												style={{
													fill: "none",
													stroke: "#0c2f4c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M739.2,433.8c-2.5,0-3.7-1.4-3.5-3.9"
												style={{
													fill: "none",
													stroke: "#0c3455",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M107,439.6c.2,.3,.3,.6,.2,.9"
												style={{
													fill: "none",
													stroke: "#154268",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M104.9,440.8c-7.9-6.7-18.8,.2-26.4-5.6"
												style={{
													fill: "none",
													stroke: "#12446c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M720.1,435.1l-1.6-1.8"
												style={{
													fill: "none",
													stroke: "#273c5c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M739.2,433.8c-3.7,1.2-9.4,.3-12.6,.2"
												style={{
													fill: "none",
													stroke: "#051227",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M465,436.1l-.8,.1"
												style={{
													fill: "none",
													stroke: "#42597a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M464.2,436.1c-7.3-.2-9.5-3.1-17.6,.9"
												style={{
													fill: "none",
													stroke: "#53749d",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M446.7,437.1c-5.5-3.2-11.6-1.3-17.2-5.5"
												style={{
													fill: "none",
													stroke: "#42597a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M859.4,431.4c-3.6,5.7,8.8,2.4,11.8,3.1"
												style={{
													fill: "none",
													stroke: "#0b2947",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M870.5,438.6c-3.7-.3-17.9-.9-23.2,.7"
												style={{
													fill: "none",
													stroke: "#081a31",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M847.2,439.3l-6.5-.5"
												style={{
													fill: "none",
													stroke: "#1d324e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M840.7,438.8c-13.6-2.6-28.9-1-42.7-2.1"
												style={{
													fill: "none",
													stroke: "#051327",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M798,436.9l-26,1"
												style={{
													fill: "none",
													stroke: "#071b34",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M772,437.9l-17.8,.2"
												style={{
													fill: "none",
													stroke: "#0b3555",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M754.2,438.1c-4.8-.4-9.5-.4-14.2,.1"
												style={{
													fill: "none",
													stroke: "#051327",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M740,438.1h-20.2"
												style={{
													fill: "none",
													stroke: "#0b2947",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M719.7,438.1c-4-.5-8-.6-12-.5"
												style={{
													fill: "none",
													stroke: "#0e3e5e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M707.7,437.6l-26.8-.2"
												style={{
													fill: "none",
													stroke: "#165572",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M681,437.4l-18-.1"
												style={{
													fill: "none",
													stroke: "#091c33",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M662.9,437.2c-24.3-2.2-49-.5-73.3-3.7"
												style={{
													fill: "none",
													stroke: "#0a2039",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M589.6,433.5c-10,0-13.7-1-20.4-.9"
												style={{
													fill: "none",
													stroke: "#0b243e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M569.2,432.6l-31.8-1.4"
												style={{
													fill: "none",
													stroke: "#20587b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M232,436.3l-15.3-.2"
												style={{
													fill: "none",
													stroke: "#1f5479",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M216.7,436.1v-.2"
												style={{
													fill: "none",
													stroke: "#14486e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M569.2,432.6c.8,3.1,1.7,6.2,2.8,9.2"
												style={{
													fill: "none",
													stroke: "#266e9c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M446.7,437.1c4.6,.5,20.6,4.3,17.6-.9"
												style={{
													fill: "none",
													stroke: "#162d49",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M477.7,439.4c0,.2,.1,.5,.2,.7"
												style={{
													fill: "none",
													stroke: "#103556",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M478,440.1l-1,1.3"
												style={{
													fill: "none",
													stroke: "#6f7a89",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M426,439.6c3.2,.4,3.8-.6,1.7-3"
												style={{
													fill: "none",
													stroke: "#74818f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M589.6,433.5c2.7,2.6,5.1,5.4,7.3,8.4"
												style={{
													fill: "none",
													stroke: "#103759",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M662.9,437.2c5.8,4.5,14-.1,19.4,4.6"
												style={{
													fill: "none",
													stroke: "#0e2f4f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M741.9,441.6c0-1.4-.7-2.7-1.9-3.5"
												style={{
													fill: "none",
													stroke: "#0a2e51",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M754.2,438.1c-1.9,.1-9.5,.5-8,3.7"
												style={{
													fill: "none",
													stroke: "#0a3b5f",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795.5,444.6c5.8,.7,3-4.5,2.5-7.6"
												style={{
													fill: "none",
													stroke: "#06213e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M840.7,438.8c3.2,.4,6.2,4,9.1,2.3"
												style={{
													fill: "none",
													stroke: "#1d3858",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M849.8,441.1c3.1-1.3,8-.7,10.4,1.5"
												style={{
													fill: "none",
													stroke: "#081f3b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M860.2,442.6c1.4,1.3,2.6,1.2,3.8-.2"
												style={{
													fill: "none",
													stroke: "#6e7e8e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M863.9,442.3c.2-2.4,5.1-1.7,6.8-1.7"
												style={{
													fill: "none",
													stroke: "#081f3b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M216.7,436.1c-1.9-.5-7.9,1.3-2.5,2.1"
												style={{
													fill: "none",
													stroke: "#2875a2",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M214.2,438.2h-42"
												style={{
													fill: "none",
													stroke: "#114366",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M236.7,436.6c-1.8,.6-2.1,1.2-1,2"
												style={{
													fill: "none",
													stroke: "#4fa1cd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M235.7,438.6l-21.5-.4"
												style={{
													fill: "none",
													stroke: "#1c4f72",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M292.5,436.3c4.3,2.1,8.8,2.6,13.5,1.3"
												style={{
													fill: "none",
													stroke: "#4aa4d5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M306,437.6c-1.3,2.3,2.4,1.4,3.5,2.2"
												style={{
													fill: "none",
													stroke: "#a7d9f3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M309.5,439.8l-71.8-1.2"
												style={{
													fill: "none",
													stroke: "#3e7ba5",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M237.7,438.6l-2-.1"
												style={{
													fill: "none",
													stroke: "#386f92",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M307.5,437.1c-.5,.6-1,.9-1.5,.6"
												style={{
													fill: "none",
													stroke: "#86bcda",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M411,438.9l-15.5,.2"
												style={{
													fill: "none",
													stroke: "#80bede",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M395.5,439.1c-4.1,.3-8.2,.2-12.2-.2"
												style={{
													fill: "none",
													stroke: "#7eb8d7",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M383.2,438.9l-8.9,.1"
												style={{
													fill: "none",
													stroke: "#7caac9",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M374.3,439h-24.1"
												style={{
													fill: "none",
													stroke: "#79a3bc",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M350.2,439c-1.1,0-28.9,.7-35.2,1.6"
												style={{
													fill: "none",
													stroke: "#779fb8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M315,440.6c-1.9-.7-3.8-1-5.6-.8"
												style={{
													fill: "none",
													stroke: "#7994aa",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M795.5,444.6c-3.7-5-16.5-.6-23.4-6.7"
												style={{
													fill: "none",
													stroke: "#0c436c",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M681,437.4c1.7,3.5,4.6,3.9,8.1,4.6"
												style={{
													fill: "none",
													stroke: "#1a6388",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M707.7,437.6c.2,5.3,11.8,2.4,17,4.9"
												style={{
													fill: "none",
													stroke: "#1f85b3",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M719.7,438.1c1.8-.6,4.2,2.8,5,4.4"
												style={{
													fill: "none",
													stroke: "#145987",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M237.7,438.6c1.5,.7,.7,2.3-.1,3.3"
												style={{
													fill: "none",
													stroke: "#0b2a49",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M863.9,442.3c-1.3-.5-2.5-.4-3.8,.2"
												style={{
													fill: "none",
													stroke: "#728598",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M849.8,441.1c-.3-1.3-1.2-1.9-2.5-1.8"
												style={{
													fill: "none",
													stroke: "#203f62",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M149.5,438.6c-.7,.1-1.2,.5-1.5,1.2"
												style={{
													fill: "none",
													stroke: "#7787b0",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M315,440.6c-7.5,1.4-15.2-1.8-22.4,1.4"
												style={{
													fill: "none",
													stroke: "#0e426a",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M347.7,441.9c1.4-.9,2.2-1.3,.1-1.7,.9-.3,1.8-.6,2.4-1.2"
												style={{
													fill: "none",
													stroke: "#0e517b",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M383.2,438.9c-1.5,.7-3.9,1.2-4.6,3"
												style={{
													fill: "none",
													stroke: "#1771a8",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M395.5,439.1c3.5-.5,1,1.5-.6,2.6"
												style={{
													fill: "none",
													stroke: "#1c85bd",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M136.5,439.9v.7"
												style={{
													fill: "none",
													stroke: "#60728e",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M479.9,440.3l-2-.3"
												style={{
													fill: "none",
													stroke: "#799eb8",
													strokeWidth: "2px",
												}}
											/>
										</g>
										<path
											id="sun"
											d="M403.5,51.8c39.8,0,72.1,32.3,72.1,72.1s-32.3,72.2-72.1,72.2-72.1-32.3-72.1-72.1c0-24,12.8-41.4,16.5-45.9,1.5-1.9,22.8-26.3,55.6-26.3h0Z"
											style={{ fill: "#c3f5fc" }}
										/>
										<g id="back-clouds-3">
											<g id="mid-clouds-2">
												<path
													d="M245.1,37.8c31.6-18.8,74-1.7,92,28.6,3.2,5,6.3,5,9-.4,12.9-37.4,90.4-6.8,81.3,21-4.1-24.4-41.8-35-62-32.7-.9,1.5,1.2,2.5,2.8,2.3,12.1-.9,22.9,2.1,32.7,9.1,17.2,15.3-34.2-19.3-46.7,4.7-19.6,25.7-37.8-34.9-64-33.5-7.3-.3-37.6-6-38,2.5-1.8-1.7-4.2-2.3-7.1-1.6h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M252.3,39.7c.5-8.7,30.8-2.7,38-2.5,26.3-1.5,43.8,58.9,64,33.5,11.3-16.1,30.1-7,45.1-1.7,20.6,5-21.8-17.2-31.1-12.1-2.9,.6-4.4-3-.9-3,16.5-.2,32.5,4.7,47.9,14.7,23.5,14.4,.9,29.3,13.3,24.3,11.1-9,25.9-15.2,38.1-4.4,20,22.6,11.4,6.3,34.4,10.3,3.1,11.7,18.4,10.4,28.3,10.2,20.8-.9,34.1-.6,53.3-1.2,8.8,3.3,20,4,33.5,2.2,29.1,2.3,56.3-2.3,83.5,6.1,17.3,7.3,35.3,7.4,53.9,0,19.9-1.6,52.9,13,42.2,36.9-37.5,43.4-95.9-35.8-135.2,3.2-24.5,16.4-44.5,10.8-59.9-16.5-16.4-1.8-32.5-2.4-48.4-1.6-35.5-1.1-77-5.3-112.8-7.9-23.3-3.3-41.8-19.8-66.6-9.8-52.9-9.6-109.8,5-166.6-1.5-6.4-.6-14.9-.4-25.6,.6-21.7,4-41.8-10-63-6.8-11.1-.1-12.4-12.7,.7-12.6,15.3-2.7,23.6-14,28.6-27.5l34.6,3.4c21.7-10.5-7.9-32.6,36.6-18.1,15.8,5.7,19.5-3.6,28.8-11.1,9.8-.6,18.8,2.5,28.1,5,9.3-2.9-10.5-8.3-22.8-12.1h0Z"
													style={{ fill: "#83c9e2" }}
												/>
												<path
													d="M245.1,37.8c8.4,.2,42,13.3,29.7,14.5-9.2-2.5-18.3-5.6-28.1-5-17.2,21.5-27.9,8.6-51.8,6.3-2-.2-3.9,1.3-3.9,3.4,1,31.1-26.4,15.3-44.3,16.1,18.4-24.2,37.5,16.3,34.8-14.4-.5-4.6,2.2-9.1,6.7-10.7,23.6-12.5,37,17.9,44.5,2.5,2.9-5.6,7-9.8,12.4-12.7Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M615.8,67.8c16.3-39,78.4-37.3,88,4.8,8.1,6.5,16.2,10.5,4.1,20.8-1,3.5-2.6,3.9-4.6,1.4,4-7,3.1-13-2.5-18.2-5.5-11.9-10.1-23.1-24.7-25.3-10.4-2.1-30.8-4.9-40.1,.7-8.2,.1-17.2,31.8-20.2,15.8h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M615.8,67.8c3.1,15.8,12.1-15.9,20.2-15.9,19.7-7.1,57-4.7,62.5,20.8,4.5,7.2,10.8,12.8,4.8,22-1.6-2.1-2.4-9.4-6.5-8.3-12.4,3.4-38.1-.7-46.7-.5-33.5,6.5-70.9-18.3-99.2-2.1,17.5-17.2,43.6-34,64.9-16Z"
													style={{ fill: "#c2dfe1" }}
												/>
												<path
													d="M430.7,82.3c21-6.4,31.9-15.6,49.7,7,8,3.7,18.3-1.2,20.6,9.4-6.8-1.8-13.2-1-19,2.5-10.2-2.7-17.4-21.2-30.9-18.5-10.2-2.7-39.6,26.7-20.4-.4Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M550.7,83.8c28.3-16.2,66,8.7,99.2,2.1,3.7-.1,11.4,.5,23.1,1.6,8.6,2.4,19.8-3.4,27.1,.5,1,2.6,5.3,13.6,7.6,5.3-.2,2.9,1.1,4,3.9,3.4-7.7,5.4-7.8,7.3-.1,5.5,22.6-8.2,39.5,17.8,38.9,9.4,1.5,0,2.4,1.6,2.9,4.6-25,12.3-48.1,.2-71.6-4.2-31.7-2.3-73.2,1.4-103.8-4.6-22.9,1.2-47,3.7-70.8-.4,6-9.1,15-16.7,24.8-12.9,9.5,6.9,12-7.4,18.8-10.3Z"
													style={{ fill: "#a1d0de" }}
												/>
												<path
													d="M135.9,112.5c20.6,11.3,49.7,5.5,70.3,6.6,56.8,6.5,113.7-8,166.6,1.5-14.4,6.2-52.1,45-73.9,19-.9-.8-2.4-.6-3,.4-13.3,23.1-41.7,11.5-54.8-4.7-12.1-18.2-35,19.4-42.6-2.9-.5-1.2-1.8-1.8-3.1-1.4-18.6,5.1-71.5,13.3-59.5-18.5Z"
													style={{ fill: "#6bc2e4" }}
												/>
												<path
													d="M711.9,96.8c16.2-6.6,36.1,0,38.1,17-24.8-24.9-57-1.8-38.1-17Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M418,125.6c25.4,8.5,52.3,4.3,78.5,9.6,35.5,4.3,69.3,1,104.2,4.7-31.5,22.8-70.4,25.7-97.7,.3-1.7-1.6-4.4-1.3-5.6,.7-22.1,39.9-64.8,20.9-79.4-15.3h0Z"
													style={{ fill: "#6bc2e4" }}
												/>
											</g>
											<g id="mid-clouds-1">
												<path
													d="M550.6,73.3c8.2,1.3,14.7,4.2,19.4,8.7-2.9-.9-5.3-.5-7.3,1.3-.1-8.8-30.3-5.4-37.7-5.8-26.3-3.7-47.5,55.1-65.8,27.9-11.1-25.1-64.6,5.2-46.2-8.6,10.1-6.1,21.2-8.1,33.1-6.3,1.6,.4,3.8-.6,2.9-2.1-20-3.8-58.2,3.4-63.8,27.5-5.6-30.5,72-51.7,82.4-14.2,6.7,17.6,28-42.1,83-28.4Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M562.8,80.8c.4,.7,.4,1.6-.1,2.6-12.7,2.7-20.4,4.8-23.1,6.4-12.5,10.7,28.8-5.2,31.3,4.1,8.6,20.4,30.8,7.5,48,8.1,2,0,3.8,1.7,3.7,3.7-2.7,31.1,24.8,17.3,43.1,19.7,4.2,13.9,11.6,25.8,26.8,29.7,12.3,1.2,12.3,13-.2,12.6-20.8-5.1-41.9,7.3-63.2,1.5-10.6-2-19.1-2.9-25.5-2.8-57,1.8-113.1-17.5-166.4-12.4-24.2-12-43.5,2.7-67.1,4-35.8-.3-77.7,.1-113.1-1.7-15.8-2.1-32-3-48.4-2.5-17.1,26-37.4,29.8-60.8,11.4-36.2-42.2-100.4,31.6-134.6-14.7-9-24.6,24.8-36.6,44.5-33.2,18.1,8.9,36.1,10.4,53.8,4.5,27.7-6.1,54.5,.9,83.7,.9,13.4,2.9,24.6,3.1,33.5,.6,19.2,2.2,32.4,3.1,53.2,5.7,40.6,5.9,13.4-16.6,51-4,13.6-17.8,35.1-20.8,50.5-3.6,12.1,6.1-9.7-10.6,14.7-23.1,15.9-8.7,32.2-12.3,48.6-10.7,3.5,.2,2,3.7-1,2.9-9.2-5.9-52.2,12.7-31.7,9.4,15.5-4.1,34.6-11.4,44.8,5.5,23.4,31.8,31.7-49.3,104-24.6Z"
													style={{ fill: "#83c9e2" }}
												/>
												<path
													d="M562.7,83.3c7.8-6.1,15.8,5.9,18.7,12.3,6.4,15.9,22.5-13.2,44.6,1.3,4.3,2,6.8,6.7,6,11.3-4.6,30.3,17-8.4,33.8,17.2-18.1-2.3-46,11.1-43.1-19.7,.1-2-1.6-3.7-3.7-3.7-24,.4-35.7,12.2-51.2-10.6-9.6-1.5-19,1-28.3,2.6-9.3-3.3,10.6-8.2,23.2-10.7Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M128.7,54.8c31.7-13,54.9-4.4,69.6,26-.8,4.5-2.4,5.5-5,3.1-6.7-25.4-31.5-28.1-54.1-24.8-11.9,1.6-19.9,8.1-23.7,19.6-5,6.9-11.5,12-6.1,21.5-2.2,2.3-3.8,1.7-4.5-1.8-8-8.3-7.4-14.2,2-17.6,9.1-7.3,6-21.2,21.8-26Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M193.3,83.9c2.5,2.4,4.2,1.4,5-3.1,22.7-16.2,47.7,3.1,63.9,21.5-27.3-18.6-66.4,3.2-99.1-6.1-8.6-1-34.5,.9-46.7-3.5-3.8-1.5-5.5,5.7-7.1,7.7-5.4-9.7,1.1-14.6,6.1-21.5,3.8-11.5,11.8-18,23.7-19.6,22.6-3.5,47.1-.5,54.2,24.6Z"
													style={{ fill: "#c2dfe1" }}
												/>
												<path
													d="M379,111.3c.8,.7,1.9,.5,3.1-.4,17.1,28.3-10-2.9-20.4-1.4-13.2-3.7-21.7,13.9-32,15.9-5.6-3.9-11.9-5.3-18.8-4.1,2.3-6.2,8-8.3,17.2-6.4,17.3-12.3,31.4-21.6,50.9-3.6Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M236.3,94.4c28.8-3.8,31.3,26.2,43.9,19.4,10-2.9,18.4,5.5,23.8,15-24.1,2.2-47.8-2.4-70.6-5.5-31,3.4-72-3.7-103.9-4.1-23.8,2.4-47.6,12.7-71.7-1.8,.6-2.9,1.7-4.4,3.2-4.3-1.3,8.3,17.8-16.1,39.4-6,7.6,2.4,7.6,.6,.2-5.5,2.8,.8,4.2-.2,4.1-3.1,1.9,8.6,6.6-2,8-4.6,25.1,.6,52.8,2.6,76.6,4.7,14.9,.2,29.4-3.9,47-4.2Z"
													style={{ fill: "#a1d0de" }}
												/>
												<path
													d="M629.1,169.2c15.3,2.8,30.4,1.7,45-3.4,10.3,32.7-42.6,19.8-60.5,13.3-1.2-.5-2.6,0-3.1,1.2-9.1,21.7-29.3-17.8-42.7-.7-14.4,15.5-43.1,23.9-54.9,.1-.6-1-2-1.3-3-.6-23.5,24.2-59-18-72.6-25.1,61.9-2.4,126.1,13.1,191.8,15.2Z"
													style={{ fill: "#6bc2e4" }}
												/>
												<path
													d="M61.1,113.1c15.4-32.3,59.4-1.9,39.4-6-21.6-10.1-40.7,14.3-39.4,6Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M392.1,155c-17.3,35.4-60.8,49.8-80.1,8.5-1.1-2-3.8-2.6-5.6-1.1-29.1,23.3-67.6,16.5-97.4-8.5,35-.8,68.6,5.4,104.3,4.2,26.4-3,52.8,3.4,78.8-3.1Z"
													style={{ fill: "#6bc2e4" }}
												/>
											</g>
										</g>
										<g id="back-clouds-2">
											<g id="mid-clouds-2-2" data-name="mid-clouds-2">
												<path
													d="M668.2,98.5c-2.4-.4-4.2,.2-5.6,1.8-2-6.8-23.9-.6-30.3-.1-21-.2-31.1,48.4-49.2,29.5-9.8-12.2-24.3-4.1-36,.8-16,4.4,17.7-14.8,24.1-11,11.1-9-50.1,7.2-45.6,26.8-7-23.6,51.1-48.7,63.6-20.6,2.5,4.1,4.9,4,7.2-.1,13-24.7,45.8-40.3,71.8-27.1Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M662.6,100.3c-9.4,3.2-25.1,9.5-17.3,11,7.1-2.4,14.3-5.3,22-5.3,13.4,15.7,23.7,5.6,41.5,2.5,1.6-.2,3.2,.9,3.3,2.5,.5,24.5,22.1,10.8,36,10.5,5,15.4,18.3,19.4,32.7,22.9-2.4,11.4-13.6,6.1-22.2,7.8-15.8,9.8-39.3,6.8-55.6,8.5-20,3.2-38.8,4.4-56.4,3.7-27.3-1.1-52.7,.7-76.1,5.5-20.1-6.6-34.1,7.1-52.5,10.9-42,7-85.5,10.8-127.7,15.3-10.9,22.3-26.5,27.6-46.8,15.9-33-29.1-75.7,36.3-107.6,3.9-9.6-18.4,16.1-31.4,31.8-31.1,15.2,4.9,29.5,4,42.9-2.6,21.2-7.9,43-5.6,66.1-8.9,26.8-.7,42.3-5.9,68.9-5,30.4,.7,10.7-14.7,40-8.9,8.9-15.4,25.3-20.6,39.5-8.7,9.6,3.4-8.1-8.3,9.4-19.8,3-6.3,47.1-19.7,36.8-11.5-6.6-3.7-39.9,15.4-24.1,11,11.7-5,26.2-12.9,36-.8,18,18.9,28.2-29.6,49.2-29.5,6.8-.6,28.3-6.7,30.2,.2h0Z"
													style={{ fill: "#83c9e2" }}
												/>
												<path
													d="M668.2,98.5c4.5,2.1,7.9,5.2,10.3,9.3,6.5,11.5,17.1-13,35.3-4.1,3.6,1.1,6,4.5,5.8,8.2-.9,23.9,13.4-8.3,28.4,9.6-14.2,.3-35.3,14-36-10.5-.1-1.6-1.6-2.7-3.3-2.5-18,3.1-27.9,13.3-41.5-2.5-7.7,0-14.9,2.9-22,5.3-9.7-.5,16.2-12.2,23-12.8Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M374.9,139.9c-2,12.4-10.3-12-16.9-11.6-16-4.6-45.6-1-48.7,19.5-3.2,5.9-8,10.7-2.7,17.6-1.5,2.1-2.8,1.8-3.8-.9-10.1-7.5-3.8-11.2,2.3-16.6,5.6-33.9,55.1-37.8,69.8-8Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M374.9,139.9c16.1-15.1,37.8-3.3,52.5,9.5-26.5-11.3-52.2,10.3-78.8,6.4-7,.2-27,4.7-37.1,2.5-3.2-.7-3.7,5-4.8,6.8-5.3-6.9-.5-11.7,2.7-17.6,3.1-20.5,32.7-24.1,48.7-19.5,6.4-.5,15,23.9,16.8,11.9Z"
													style={{ fill: "#c2dfe1" }}
												/>
												<path
													d="M522.8,142.5c16.3,20.3-8.1-1.2-16.3,1.3-10.9-1.4-15.8,13.6-23.7,16.2-4.8-2.4-9.9-2.8-15.3-1.1,.7-7.8,9.9-5.5,15.9-8.4,13.3-18.9,22.3-11.6,39.4-8Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M427.4,149.5c5.8,1.9,8,12.8,15.4,7,7.6-3.4,15.1,2.2,20.3,9.1-45.8,5.8-92.3,7.4-138.5,12.4-18.4,4.6-36.3,15.4-56.8,6.8,.2-2.4,.9-3.6,2.1-3.7-.4,6.4,13.6-14.8,30.5-9.3,6.2,1,6-.4-.4-4.4,2.3,.3,3.3-.6,3-2.9,2.3,6.4,5.1-2.3,5.9-4.5,.4-1,1.5-1.6,2.7-1.4,10,2.1,30.3-2.3,37.1-2.5,26.6,4.1,52.3-17.8,78.7-6.6Z"
													style={{ fill: "#a1d0de" }}
												/>
												<path
													d="M758.6,152.2c12.5,27.2-36.2,16.6-48.8,18.6-4.4,17.8-25.4-10.4-33.8,4.3-15.2,18.1-28.1,20.6-45.7,6.3-16.1,21.5-48.1-7.3-59.7-11.4,59-13,128.2,2.6,188-17.8Z"
													style={{ fill: "#6bc2e4" }}
												/>
												<path
													d="M299.9,167.3c15.8,10.7-12.6-4.7-29.5,15.4,1.1-13.7,16.2-19.7,29.5-15.4Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M535,176c-10,29.5-43,46.2-62.4,15.9-1.1-1.5-3.3-1.6-4.5-.2-20.5,21.4-51.5,20.9-77.7,4.4,47.9-6,97.7-7.2,144.6-20.1Z"
													style={{ fill: "#6bc2e4" }}
												/>
											</g>
											<g id="mid-clouds-1-2" data-name="mid-clouds-1">
												<path
													d="M427,141.1c42.8-13.5,62.9,32.5,67.5,18.5,6.9-30,68.7-17.5,66.2,7.3,1.1-19.7-61.9-24-49.7-17.1,5.4-5,42,6.8,25.7,6-12.5-2.5-28.1-7.3-35.4,6.6-13.9,22.2-33.1-23.4-53.7-19-6.7,.9-28.8-.9-29.7,6.3-1.7-1.3-3.6-1.5-5.9-.7,3.5-3.9,8.5-6.5,15-7.9Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M417.7,147.6c53.7-22.9,67.2,40.4,83.6,14.7,7.3-13.9,22.9-9.1,35.4-6.6,16.4,1-19.9-11-25.7-6-12.2-6,34.3-1.9,38.2,3.8,19.6,8,3.9,22.9,12.9,17.6,11.3-14.4,28.8-13,40.3,.5,26.9-11.6,11.9,7.4,40.8,.7,26-6.4,42-4.3,68.6-9.1,23.2-1.5,44.1-8.2,66.5-4.7,14.4,3.8,28.6,1.7,42.6-6.1,15.4-3.6,42.9,4.2,36.9,24.1-25,38.3-79.5-17-106.3,18.1-17.7,15.6-34,13.6-48.9-6.1-42.2,3.9-85.6,9.5-128.2,11-18.8,0-34.9-10.7-53.5,0-23.8,.1-49,3.4-75.6,10-17.2,4.3-35.8,6.9-56,7.8-16.2,1.5-38.7,9.4-56.1,2.9-8.8-.1-18.6,7.5-23.2-3.2,13.6-6.3,25.7-13.1,27.9-29.1l27.6-1.3c15.7-10.8-8.4-24.8,27.1-18.2,12.2,2.9,15.5-5.1,21.6-12,3.2-2.8,32.4,4.1,22.2-2.6,2.5-1.5-19.1-1.5-18.7-6.2Z"
													style={{ fill: "#83c9e2" }}
												/>
												<path
													d="M417.9,149.6c10.1,1.4,26,4.1,19.1,7.3-7.5-.8-15-2.3-22.6-.7-10.2,18.2-22.1,10.3-40.2,10.8-5.6,2.2-.5,14.4-5.4,17.8-.7,3-28.5,2.2-30.7,2.9,11.4-20.8,31.2,8.4,26.1-15.2-.9-3.6,.9-7.4,4.2-9.2,16-12.4,30.9,9.4,35.4-3.1,2-5,7.5-15,14.1-10.6Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M761.6,106.3c11.4,2,11.5,14.1,18.7,19.5,12.5,1.5,2.1,19.4-1.1,15.5,3.8-7.9-1.5-11.6-5.9-16.7-3.6-8.9-10.2-13.7-19.8-14.3-17.5-1.9-38.2,2.2-41.8,22.1-1.9,2-3.2,1.3-4.1-2.2,10.1-24.7,28.1-32.6,54-23.9Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M711.6,132.4c3.6-26.3,52.3-31.8,61.6-7.8,4.3,5.1,9.8,8.8,5.9,16.7-1.5-1.5-3-7-6-5.8-9.5,4-30.1,3.9-36.9,5-25.4,9.3-54.7-6.6-78.5,9.8,12-15.4,31-31.7,49.8-20,.8,3.4,2.2,4.1,4.1,2.1Z"
													style={{ fill: "#c2dfe1" }}
												/>
												<path
													d="M565.3,162.9c14.6-15.1,26.3-8.4,40.6,.4,7.2-2,11.9-.6,14,4.2-5.6-.6-10.5,.7-14.8,4.1-8.2-1-15.9-14.7-26.2-11-8.3-.9-28.5,25.4-16.1,2,1.1,.8,1.9,.9,2.5,.3Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M677.9,142.8c35.1,3,63.9-3.4,98.1-6.5,1.1,2,5.6,10.1,6.6,3.2,.1,2.3,1.2,3,3.4,2.2-5.6,5.1-5.5,6.6,.4,4.3,15.4-8.9,32.7,8.8,31.6,2.8,1.2-.1,2.1,1,2.7,3.2-18.6,12.6-37.9,5.6-57,4.8-46.3,4.5-92.1,12.4-138.2,15.9,9.8-22.4,22.4-5.6,27.3-17,4.3-9.2,16.3-13,25.1-12.9Z"
													style={{ fill: "#a1d0de" }}
												/>
												<path
													d="M369.2,220.5c52-4.7,102.5-20.2,151.7-21.2-10.6,6.3-36.6,41.2-56.5,23.3-15,17.7-26.9,18.1-46,3.1-11-12.8-26.4,19.1-33.9,2.6-12.7,.6-58.6,21-51.3-8.4,12,3.4,24,3.6,36,.6Z"
													style={{ fill: "#6bc2e4" }}
												/>
												<path
													d="M818.1,149.1c1,5.9-16.5-11.8-31.6-2.8-15.7,3.9,18.3-21.8,31.6,2.8Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M574.4,199.3c42.6-1.5,85.9-7.1,128.2-11-22.4,21.3-52.8,28.3-77.1,11.4-1.5-1-3.6-.5-4.4,1.2-13.4,33.5-48.7,24.2-64.1-2.9,5.8,.3,11.6,.7,17.4,1.3Z"
													style={{ fill: "#6bc2e4" }}
												/>
											</g>
										</g>
										<g id="clouds">
											<g>
												<path
													d="M866.5,108.7c-1.2,2.8-2.1,3.9-3.3,.2"
													style={{
														fill: "none",
														stroke: "#a2cde5",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M868.3,113.8c-3.5,4.6-8.6-5.1-12-6.8"
													style={{
														fill: "none",
														stroke: "#eaf2f2",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M264.4,156.9c-15.1-7.5-28.9-22-47.8-18.4"
													style={{
														fill: "none",
														stroke: "#d6e1e3",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M216.6,138.4c-13.4-11.2-34.7-22-46.8-4.2"
													style={{
														fill: "none",
														stroke: "#cddade",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M169.7,134.3c-1.6,.6-3.3,1.1-5.1,1.5"
													style={{
														fill: "none",
														stroke: "#d6e2e4",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M150.7,117.9c-.8,1.2-1.4,2.4-2,3.8"
													style={{
														fill: "none",
														stroke: "#e6eded",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M151.9,123.3c.9-2.2,2-4.2,3.3-6.1"
													style={{
														fill: "none",
														stroke: "#e6eded",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M868.3,128.9c-6.7-1.2-10.1,4.9-13.7-.8-11.1-9.7-29.7-19-44.3-15.7-8.5,1-20.8,15.7-13.5,22,5.7-3,9.6-1.9,11.7,3.2,1.6,2.2,3.6-1.4,6.3-.4,14.8,1,8.7,16,21.2,10.6"
													style={{
														fill: "none",
														stroke: "#bee1e9",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M835.8,147.9c-3.7,5.1,3.2,6.2,6.6,7.4"
													style={{
														fill: "none",
														stroke: "#e6efee",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M813.1,159.1c-2.8-1.8-7-2.4-7.1-6.3"
													style={{
														fill: "none",
														stroke: "#cedfe3",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M704.7,155.7c-.3,2.6-8,6.6-10.6,5.1"
													style={{
														fill: "none",
														stroke: "#d7e4e5",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M806,152.8c1.7-15.7-11.9-11.2-20.8-16.3-12.1-22.6-36.7-11-40.8,9.8-21.4,3.3-12.3,13.8-36.5,7.9"
													style={{
														fill: "none",
														stroke: "#d7e4e5",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M868.3,153.9c-1,.7-2.1,1.2-3.2,1.6"
													style={{
														fill: "none",
														stroke: "#91d4e7",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M854.2,154.7c-5.2-4.1-11.5-7.3-18.4-6.8"
													style={{
														fill: "none",
														stroke: "#c8e8ef",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M216.6,138.4l8.2,6.2"
													style={{
														fill: "none",
														stroke: "#c8d8dc",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M224.8,144.6c-19-2.4-35.6-3.4-53.9,.4"
													style={{
														fill: "none",
														stroke: "#baced6",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M166.9,138.9c.8-1.6,1.8-3.2,2.8-4.7"
													style={{
														fill: "none",
														stroke: "#c8d9dd",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M806,152.8c-6.3-4.8-21.9,2.2-23.1-5.3-3.4-2.5-8.7-.2-13.4,.5-2.9,1.3-8.5-2.8-8.8,2.2-1.3,2.1,4.8,8-.1,7.2-12.7-1.4-24.9,7.4-34.7,14.5"
													style={{
														fill: "none",
														stroke: "#c9dbe1",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M725.9,171.7c-7.5-8.2-14.6-1-22.3-1.5"
													style={{
														fill: "none",
														stroke: "#c5d7df",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M703.6,170.2c-1.5-4.7-16.6-8.6-14.3-1.2,.7,1.1-.3,3.4-1.1,.9-2.5-2.7-5.1-7.7-9.5-5.4"
													style={{
														fill: "none",
														stroke: "#c9dbe1",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M678.6,164.6l-.1-.3"
													style={{
														fill: "none",
														stroke: "#d3e3e4",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M554.7,159.8c-1.6-.3-3.2-.5-4.8-.5"
													style={{
														fill: "none",
														stroke: "#c5d8dd",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M328.3,193.5c4.2,1.6,7.8,4.1,10.8,7.2"
													style={{
														fill: "none",
														stroke: "#e1eaeb",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M339.1,200.7c-1.4,3.6,.6,17.4-6.5,12.4"
													style={{
														fill: "none",
														stroke: "#c8d8dc",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M332.6,213.2c-21.1-12.7-27,3-33.9-16.6"
													style={{
														fill: "none",
														stroke: "#bfd1da",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M298.7,196.5c-5.7-20.8-19.9-39.6-42.1-23.9-9.3-10.5-19.9-19.8-31.7-27.9"
													style={{
														fill: "none",
														stroke: "#c3d4db",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M298.7,196.5c-33-27.9-78-34.9-120.2-32.8"
													style={{
														fill: "none",
														stroke: "#b1c7d3",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M805.8,160.7c-18-7.9-36.9-1.1-53.2,8.3"
													style={{
														fill: "none",
														stroke: "#bed3de",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M332.6,213.2c3.4,2.8,13.2,8.7,17,6.1"
													style={{
														fill: "none",
														stroke: "#b5cbd5",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M349.6,219.2c-2,3.6-4.5,6.9-7.6,9.8"
													style={{
														fill: "none",
														stroke: "#a6becb",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M342,229c-10.2,8.1-36.1-16-47.3-21.3-5.7-2-11.2-4.5-15-9-3.5-.9-7.4-3.2-11-4-23.3-14.5-52.6-13.4-77-17-5.3,.6,15.7,15.8,14.6,21.9"
													style={{
														fill: "none",
														stroke: "#a6bfd0",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M199.3,195.1c-2.8-3.1-5.9-5.8-9.4-8.1"
													style={{
														fill: "none",
														stroke: "#a4bccc",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M612.6,187.2c-11.7-2.8-12.5-18-27.2-8.6-2.6,.8-3.2-.3-5.4-2"
													style={{
														fill: "none",
														stroke: "#a6c0cd",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M580,176.6c-7.5-18.1-21.8-1.9-25.2-16.8"
													style={{
														fill: "none",
														stroke: "#bed3da",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M580,176.6c-3.3-.3-2.9,5.6-6.4,4.7-10.3-1-17.2,2.8-21,11.2-.4,1.1-2.5,0-3.2,0"
													style={{
														fill: "none",
														stroke: "#9db7c8",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M549.4,192.4c-7.7-1.5-18.6-7-24.2,.1"
													style={{
														fill: "none",
														stroke: "#a7beca",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M525.3,192.4c-3-12.6,16.2-9,13.2-21.2"
													style={{
														fill: "none",
														stroke: "#bed3da",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M678.6,164.6c-8.1,13.9-8.3,11.9-24.9,13.1-13.2,3.5-.9,18.3-21.1,16.2"
													style={{
														fill: "none",
														stroke: "#cbdde2",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M632.6,193.8l-2.5-4.8"
													style={{
														fill: "none",
														stroke: "#adc5d0",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M703.6,170.2c-22.4,4.3-40.8,14.4-57.5,30.4"
													style={{
														fill: "none",
														stroke: "#bcd2dd",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M607.2,204.5c2.8-1.3,25.5-6.5,23.8-9"
													style={{
														fill: "none",
														stroke: "#d5e4e9",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M631,195.5c1.1-.2,1.6-.8,1.6-1.7"
													style={{
														fill: "none",
														stroke: "#a3bdcd",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M671.5,190.7c-3.4-.2-6.8,1-9.2,3.5"
													style={{
														fill: "none",
														stroke: "#9fb9cb",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M525.3,192.4c-6.9,9.4-19.4-10.2-28,15.6-8.3-2.8-21.4-6.6-23.9,6.8"
													style={{
														fill: "none",
														stroke: "#b0c7d0",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M631,195.5c-11.8-1-25.6,2-34.8,9.6"
													style={{
														fill: "none",
														stroke: "#b8cbd7",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M487.7,231.8c-1.2-1.9-1-3.1,1.2-4.9-2.1,0-3.2,1-4.3,3-8.1-3.6-16.1-.2-24.5,2.1"
													style={{
														fill: "none",
														stroke: "#7d9eb7",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M460.3,232.1l9.5-12.3"
													style={{
														fill: "none",
														stroke: "#9ab5c6",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M469.7,219.8c16.5-2.1,32-5.2,47.7-9"
													style={{
														fill: "none",
														stroke: "#8fabbe",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M520.4,208.7c-1.9-3.2,24.4-12.1,29-16.4"
													style={{
														fill: "none",
														stroke: "#8fabbe",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M342,229c-5,5.3-12.4,5.9-18.9,3.2"
													style={{
														fill: "none",
														stroke: "#95b0c5",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M323.1,232.2c-8.1-3.2-19,5.8-24.9-2-7.7-1.4-15.7-2-22-7.2"
													style={{
														fill: "none",
														stroke: "#8eacc3",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M276.3,223c-15.9-11.6-42.1-38.8-60.9-18.8"
													style={{
														fill: "none",
														stroke: "#94b0c5",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M343.7,196.7c-2,.8-3.5,2.3-4.7,3.9"
													style={{
														fill: "none",
														stroke: "#d7e4e6",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M469.7,219.8c.8-1.9,2-3.6,3.7-5.1"
													style={{
														fill: "none",
														stroke: "#a4bcc9",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M276.3,223c-3-.2-6-.5-8.9-1.2"
													style={{
														fill: "none",
														stroke: "#81a2bb",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M255.1,217.4c-7-7.4-18.9-13.8-28.9-8.7"
													style={{
														fill: "none",
														stroke: "#b5c8d4",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M354.4,208.2c-2.6,3.2-3.1,7.4-4.8,11"
													style={{
														fill: "none",
														stroke: "#afc4ce",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M375.7,223.6c-.2,1.8-.2,3.6-.1,5.4"
													style={{
														fill: "none",
														stroke: "#8dbed4",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M373.3,222.3c-14.1,.4-22.1-5.7-31.3,6.7"
													style={{
														fill: "none",
														stroke: "#94afc1",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M375.6,229c-.2-2.1-.2-4.5-1-6.4"
													style={{
														fill: "none",
														stroke: "#94afc1",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M248.3,215c-5.6-4.1-11.3-6.1-18.2-5.2"
													style={{
														fill: "none",
														stroke: "#d4e3e5",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M432.6,236.9c-1,1.1-1.6,2.5-1.8,4"
													style={{
														fill: "none",
														stroke: "#95c6db",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M430.7,240.9c-.4-.1-.6,0-.7,.3"
													style={{
														fill: "none",
														stroke: "#86bbd6",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M430,241.2l-3,1.5"
													style={{
														fill: "none",
														stroke: "#6ba7c7",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M427,242.7c-3-10.5-2.7-7.6-13.1-6.1"
													style={{
														fill: "none",
														stroke: "#7bb2cf",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M385.2,228.6c-2.6,.4-8.3,3.5-9.7,.4"
													style={{
														fill: "none",
														stroke: "#82b6d1",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M460.3,232.1l-5.3,6.1"
													style={{
														fill: "none",
														stroke: "#92afc2",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M455,238.2c-14.8,1-16.4,6.1-24.3,2.8"
													style={{
														fill: "none",
														stroke: "#a1bccc",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M323.1,232.2c8.7,2.8,19.3-2.9,28.3-.1,18.1,5.6,37.8,0,56.4,3.6"
													style={{
														fill: "none",
														stroke: "#82a2bb",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M427,242.7c-.5,.5-1.2,.8-1.9,1.1"
													style={{
														fill: "none",
														stroke: "#6c93b1",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M425.1,243.8c-39.9-.4-80,1.5-119.7-3,.3-.1,.6-.4,.9-.6-1.7-.6-3.5-.8-5.3-1.1"
													style={{
														fill: "none",
														stroke: "#7299b6",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M483.8,234c-12.4,1.2-28.8,4.2-37.3,13.4"
													style={{
														fill: "none",
														stroke: "#6990ae",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M446.5,247.5l8.4-9.4"
													style={{
														fill: "none",
														stroke: "#84a5bd",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M417,261.9c1.3-4-1.7-9.9-6.5-7.2"
													style={{
														fill: "none",
														stroke: "#6390b1",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M410.5,254.7c-7.7,.4-11,7.1-16.3,10.5-7.1-1.1-12.8,1-17.1,6.4"
													style={{
														fill: "none",
														stroke: "#86aec4",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M377.1,271.5c.1-4.9-9.8-2.8-12.8-2.8"
													style={{
														fill: "none",
														stroke: "#5281a6",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M352.9,264.7c16.6-21.9,50.5-8.9,72.2-21"
													style={{
														fill: "none",
														stroke: "#638eae",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M430,241.2c.5,3.9-8,10.8-3.6,11.6,7.5-.1,14.2-1.9,20-5.4"
													style={{
														fill: "none",
														stroke: "#779db8",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M381.1,272.6c7.2-10.8,11.7,.7,19.6-6.9,3-4,5-9,9.8-11"
													style={{
														fill: "none",
														stroke: "#8db6cb",
														strokeWidth: "2px",
													}}
												/>
											</g>
											<path
												d="M110.4,57.5c3.4,0,15,5.3,10.7,7.3-6.1-5.3-14.2-5.7-21.8-4.2-20.3,4.1,9.4,8.8-21.3,9.8,2.7-5.1,7.3-3.3,11.2-3.1-2.4-11.5,14.6-9.4,21.2-9.8Z"
												style={{ fill: "#f8fcfd" }}
											/>
											<path
												d="M122.5,63.9c.3,2.7,2.6,4.1,4.2,5.9-11.3,.5-22.7,.3-34-.7,.5-1.2,.3-2.2-.7-3.2-2.9-5.4,9.5-5.3,13-6,6.6-2.4,15.5,6.2,17.5,4Z"
												style={{ fill: "#bcdbdf" }}
											/>
											<path
												d="M73.8,81.4c12.1-4.8,14.5,6.9,25.7,4.1,3.5-.5,3.2,2.9,7.2,2.2-1.6-5.2,6.1-5,9.4-5.2,4.3,1.7,7.1,6.8,12.4,5.9,9.2,1,11.9-13.9,1.4-13.7-1.2,0-2-1-1.8-2.1-5.1-6.9-25.7-.4-35.3-3.6-4.7,2-9.2-1.3-14.8,1.3-1.2,.8-.6,3.5-2.3,3.8-6.3-.4-11.1,8.2-1.9,7.3Z"
												style={{ fill: "#90c8de" }}
											/>
											<path
												d="M868.3,108.5c2.2,22.1-19.4-23.6-60.8-8.2,17-14.2,47.3-12.3,56.3,9.9,1.9,4.6,1.7-3.6,4.5-1.7Z"
												style={{ fill: "#f8fcfd" }}
											/>
											<path
												d="M148.1,123.5c.5-10.5,24.9-19.8,18.3-15.1-8,4.2-13.2,9.8-15.6,16.9,7,3.9,10,14.4,19,9,4.3-5.9,9.7-9.1,16.2-9.6,9.6-.8,22.6,7.3,30.6,13.8,7.7-4.5,19.9,4.3,26.8,5.3,9.3,2.3,12.8,11.9,22.6,13.5-12.2-13.1-9.6-38.3-31-45.5-7-2.3-11.1,6.8-18.9,3.7-5-15.9-28.2-24.4-44.1-21.7-10.2,8.4-23.2,15.2-28.4,27.8,1.6,.4,3,1.1,4.5,1.9Z"
												style={{ fill: "#dbe3e5" }}
											/>
											<path
												d="M143.6,121.4c5.2-12.6,18.2-19.4,28.4-27.8-14.9,3.4-25.6,13.3-31,26.8,.9,.3,1.7,.6,2.6,1Z"
												style={{ fill: "#f8fcfd" }}
											/>
											<path
												d="M696.7,155.2c2,1.8-1.1,2.8-1.9,4-3,4.3,7.3,.3,9.6-2.3,3.8-7.1,20.7,4,27.5-5.9,3.6-7.9,8.4-1.6,12.3-3.2,2.2-15.7,19.2-29.5,34.5-20.5,5.1,1.8,3.8,10.2,9.6,11.2l8.3,1.4c2.2-.1,4.3-.7,5.8,2,7.5,29.1,21,14.4,43.6,14.8-3.7-2.4-14.4-2.1-10.1-8.8-12.6,5.5-6.2-9.5-21.2-10.6-2.6-1-4.7,2.6-6.3,.4-2.1-5.1-6-6.2-11.7-3.2-7.2-6.5,4.9-20.9,13.5-22,14.6-3.2,33.1,5.9,44.3,15.7,3.6,5.7,7.1-.4,13.7,.8v-15.1c-1.1,1.4-3.6,2.3-4.7,.6-2.8-7-11-8.3-17.1-11.7-12.5-8.5-27.5-4.6-39-3-8.6,4.2-12.1,12.1-16.6,19-14.3-11-34.1-7.9-49,.6-9.2,8.1-12.7,21.2-11.1,31.8-13-5.9-26-5.3-38.9,2.6,1.5,.3,3.9,.3,4.9,1.4Z"
												style={{ fill: "#dce8e7" }}
											/>
											<path
												d="M823.9,104c-4.4,3.3-12.3,1.3-17.7,4.3-2.2-2.1,14.8-6.7,17.7-4.3h0Z"
												style={{ fill: "#f5fafa" }}
											/>
											<g id="top-cloud">
												<path
													d="M472.4,73.6c-1-.2-1.7,.1-2.3,.7-19-7.9-25.1,20.1-32.1,11.3-3.9-4.6-9.8-1.7-14.5,.3-5.6,1,7-5.6,9.7-4.2,1.4-3.7-20.1,3.7-18.3,10.2-2.3-9.4,20.5-18.7,25.6-7.9,1,1.6,2,1.5,2.9-.1,5.3-9.6,18.6-15.6,29-10.3Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M470.1,74.3c-14.1,5.5-5.6,3.6,1.9,2.2,4.5,5.7,10.3,2.2,16.7,.9,2.5,.5,1.2,5.5,3.5,6.3,.7,1,11.3-1.3,12.3-1.3,2,5.9,7.6,7.4,13.2,8.8-13.8,8.5-37.7,6.4-54.1,7.7-36.1-1-67.6,10.9-103.4,12.1-8.5,17.1-17,2.6-28.9,3.4-12.2,1.9-24.6,14.5-34,3,.2-16.9,21.7-5.9,30.7-11.7,11.8-4.1,27-1.7,38.8-4.9,7.3-.1,15.2,.3,22.7-1.5,2.1-2.9,4.6-4,8-2.2,4.8-4.1,10.4-9.2,17-3.4,3.5,1.3-2.9-3.8,3.7-7.6,2.2-2.5,16.9-7.5,14.8-4.3-2.6-1.2-15.3,5-9.7,4.2,4.7-1.9,10.6-5,14.5-.3,7.2,8.5,13-19,32.3-11.4h0Z"
													style={{ fill: "#83c9e2" }}
												/>
												<path
													d="M472.4,73.6c9.8,10.3,7.2-1.1,18.4,2,1.5,.4,2.4,1.7,2.3,3.1-.3,8.9,6.3-3.2,11.4,3.7-1-.1-11.8,2.4-12.3,1.3-2.1-1-1.1-5.7-3.5-6.3-6.3,1.2-12.2,4.8-16.7-.9-13,3.1-12.5,1.1,.4-2.9Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M354.1,89.5c-1.3,4.6-4-4.6-6.8-4.5-8.9-3.3-24.3,3.5-20.7,14.2-.6,.8-1.1,.7-1.5-.3-4.2-3-1.4-4.3,.9-6.4,2.7-13.2,22.1-14.3,28.1-3Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M354.1,89.5c6.4-5.8,15.3-1.3,21.2,3.7-10.8-4.2-21,4-31.8,2.5-2.8,0-10.9,1.9-15,1-1.2-.3-1.6,2-2,2.7-3.5-10.7,11.7-17.6,20.7-14.2,3-.2,5.4,9.2,6.9,4.3Z"
													style={{ fill: "#c2dfe1" }}
												/>
												<path
													d="M413.7,90.5c6.3,7.6-3.3-.6-6.5,.4-9.7,1.9-2.9,6.7-15.7,5.7,.3-3,4-2.1,6.4-3.3,4.3-6.6,9.9-4.9,15.8-2.8Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M375.3,93.2c5.9,6.7,8.5-1.6,14.4,6.2-18.5,2.4-37.3,2.8-55.9,4.8-5.5,1-20.7,7.9-22.1,1.2,1.2,1.5,6.8-5.8,12.4-3.5,2.5,.4,2.4-.2-.1-1.7,.9,.1,1.3-.2,1.2-1.1,1,2.5,2-1,2.4-1.8,2.3-1.4,6,.3,8.7-.7,9.5-1.9,13.3,.1,22.2-2.7,5.2-1.1,11.1-3.8,16.8-.7Z"
													style={{ fill: "#a1d0de" }}
												/>
												<path
													d="M508.8,94.3c4,11-13.9,6.1-19.7,7.1-1.7,6.8-10.2-3.9-13.6,1.7-4.8,6.6-12.8,7.7-18.5,2.4-6.3,8.3-19.5-2.8-24.1-4.4,23.7-4.9,51.8,.9,75.9-6.8Z"
													style={{ fill: "#6bc2e4" }}
												/>
												<path
													d="M323.9,100.1c6.2,3.4-7.3-.6-12,5.9,.3-5.4,6.7-7.6,12-5.9Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M418.7,103.4c-6.5,15.1-16.5,14.5-27,6-8.3,8.3-20.8,7.9-31.3,1.7,19.3-2.4,39.4-2.7,58.3-7.7Z"
													style={{ fill: "#6bc2e4" }}
												/>
											</g>
											<path
												d="M782,109.2c-9.4-1.4-17.6-1.5-26,3.6,11.3-1.9,24.3-2.5,33.6,5.2,6.2,1.4-5.6-8.4-7.6-8.8h0Z"
												style={{ fill: "#f8fcfd" }}
											/>
											<path
												d="M150.8,125.3c2.1-7.7,9.7-14,17.3-17.9-8.5,.1-24.5,12.1-17.3,17.9Z"
												style={{ fill: "#f0f6f4" }}
											/>
											<path
												d="M240.5,110.3c15.2,8.6,18.3,29.3,24.8,42.1,8,9.6,19.4-5.1,30.1-.6,13,2.7,20.1,15.8,17.6,28.4-12.5-31.7-17.9-23.7-47.1-22.8-12.2-13.1-9.6-38.3-31-45.5-7-2.3-11,6.8-18.9,3.7,6.3-8.5,14.5-10.2,24.5-5.3Z"
												style={{ fill: "#f5fafa" }}
											/>
											<path
												d="M796.7,134.5c10.1-5.5,8.7,3,13.8,3.7,7.2-3.3,15.6,3,17.6,10.1,.3,.8,1.3,1.2,2.4,1,9.1-3.8,19.2,1,25.9,7.2,3.8-.5,8.6-.2,12-2.6v-25c-6.7-1.2-10.1,4.9-13.7-.8-7.6-6.7-16.7-11.8-26.6-14.6-15-7.2-39.7,5.9-31.4,21Z"
												style={{ fill: "#9fd9ea" }}
											/>
											<path
												d="M744.5,119.3c3.7-3,21.9-8.1,25.4-5.6-16.7,3.5-26.5,14.1-34.5,26.9-1.4-7,5.1-15.1,9.1-21.3Z"
												style={{ fill: "#f8fcfd" }}
											/>
											<path
												d="M242.7,127c2.4,5.9-11.6-.3-11.7-5.1,2.2-2.5,9.1,2.6,11.7,5.1Z"
												style={{ fill: "#d1e0e2" }}
											/>
											<path
												d="M168.4,145.7c18.6-5.3,37.9-3.1,56.4-1.1-10.7-8-25.3-20.8-38.8-20-8.5,.1-24.3,12-17.6,21.1Z"
												style={{ fill: "#bed1d7" }}
											/>
											<path
												d="M806,152.8c-7-2.8-14.2-2.1-21.4-1.8-1.9-.7-.8-4.2-2.9-4.5-4.7,.2-7.3,.1-12.2,1.5-18.5-2.4-1.8,10-8.9,9.4-12.7-1.5-24.9,7.4-34.7,14.5-7.5-8.2-14.6-1-22.3-1.5-1.6-4.7-16.5-8.7-14.3-1.2,.7,1.1-.3,3.4-1.1,.9-2.5-2.7-5.1-7.7-9.5-5.4,3.2-4.5,9.6-11.3,15.8-10.5,4.1,.8,2.7,3.6,.3,5.1-1.4,1.8-.7,2.4,2,1.6,10.8-2.7,4.7-8.8,18.9-5.6,13.7,4.5,16.7-11.6,25.4-7.5,2,1.9,3.7,.2,3.9-2.1,2-15.1,19.9-26.6,33.7-18.3,5.1,1.8,3.8,10.2,9.6,11.2,11.6,1.6,16.5,.4,17.7,14.2h0Z"
												style={{ fill: "#d1e0e2" }}
											/>
											<path
												d="M563,130.2c10.9,5,17.6,13.9,20.6,24.1,31.8-6.4,30.8,38.3,25,18.3-5-8.8-13-16-24.3-16.9-10.8-17.9-38.9-31.3-55.9-12.1-8.5,9.3-11.6,20.2-9.4,32.6-7.9,2.2-14,8.7-20.4,11.5-12.3-13.1-38.2-11.1-41.8,8.7-6.6-22.2,32.2-31.5,40.6-12.3,4.8-3.5,10.1-11.5,18.5-10.7-13-26.8,19.5-55.1,47.1-43.2Z"
												style={{ fill: "#f8fcfd" }}
											/>
											<path
												d="M165.8,141.4c1-2.4,2.3-4.8,3.9-7.1-2.6,1-5.1,1.6-7.7,1.8,1.4,1.7,2.6,3.4,3.8,5.3Z"
												style={{ fill: "#d1e0e2" }}
											/>
											<path
												d="M580.7,151.7c-.3,.2-1,2.1-1.5,1.5-7.7-2.6-15.6,8.1-24.5,6.5-8.8-1.9-14.3,1.3-16.3,9.4-7.2,.8-13.7,3.2-19.5,7-8.1-38.2,41.3-58.1,61.8-24.4Z"
												style={{ fill: "#d5e5e5" }}
											/>
											<path
												d="M265.9,157.2c29.3-1,34.6-8.9,47.1,22.8,.1,16.8-7.1,12.6,10.1,7.5-8.1,8.4,22.9,3,14.5,23-.4,3.4-1.9,5.1-5.1,2.5-27-14.8-25.9,8.4-38.5-28.5-7.3-18.6-22.2-22.2-37.5-12-11.2-13.2-25.8-23.8-39.9-34.1,7.7-4.5,19.9,4.3,26.8,5.3,9.4,2.2,12.6,12.1,22.5,13.5Z"
												style={{ fill: "#d1dee1" }}
											/>
											<path
												d="M730,147.1c8.2,11.4-24.3-14.9-51.4,17.2-1.3,.2-2-.2-1.9-1.4,9.8-18.7,35.1-29.3,53.3-15.8Z"
												style={{ fill: "#f0f6f4" }}
											/>
											<path
												d="M176.3,164.2c43.6-2.7,87,4.7,122.2,32.3-5.7-20.8-19.8-39.6-42.1-23.9-24.5-31.2-50.5-35.3-88.1-26.8,3.3,5.8,5.8,12.1,8,18.4Z"
												style={{ fill: "#b5cad4" }}
											/>
											<path
												d="M729.1,175.7c22.7-3,42.6-20.3,66.2-18.4,5.1,2.5,13.1,6.2,19.8,3.5-11.3-8.4-15.6-11.6-30.7-9.7-1.9-.7-.8-4.2-2.9-4.5-4.6,.2-7.3,.1-12.2,1.5-6.3-.1-11.8-1.4-7.4,7.4,2.3,4.3-11.2,0-14.2,3.5-4.5,4.4-28.8,10-18.6,16.7Z"
												style={{ fill: "#c0d5df" }}
											/>
											<path
												d="M838.7,154.2c5.9,2.5,11.4,2.7,17.6,2.3-3.3-6.7-32.1-13.6-17.6-2.3Z"
												style={{ fill: "#f0f6f4" }}
											/>
											<path
												d="M180.8,176.9c1.3,2.8,3,5.6,4.8,8.1,9.9,3.6,13.6,12.9,21.6,17.8,1.2-12.2-26.6-28.4-13-24.9,3.9-.7,6.4,5,10,2.1,26.1-1.3,45.4,5.2,69,16.1,15.7,7.4,36.4,22.7,51.9,29.5,1.5,3.9,6.9,2.8,9.7,5.5,6.4,1.3,12-6.8,15-11.9-3.6,2.7-13.6-3.3-17-6.1-8.7-5.7-19.1-5.7-29-6.6-6.6-17.7-26.8-24.2-43.4-30.6-25.5-13.4-53.9-12.6-83.5-11.1,1.1,4,2.4,8.1,3.9,12.1Z"
												style={{ fill: "#acc4d2" }}
											/>
											<path
												d="M580.7,151.7c-.5,4.7,6,4.3,7.7,4.5,12,2.9,19,13.8,22.9,22.6,3.6,2.8,9.7,.6,11,7.6-21.5,7-17.4-20-38.7-7.4-3.7-2-4.9-5.4-7.7-8.8-6.2-7.8-19.4,1.9-21-10.6,8.8,1.5,16.9-9.1,24.5-6.5,.6,.6,1-1.1,1.3-1.4Z"
												style={{ fill: "#c7dcdf" }}
											/>
											<path
												d="M868.3,157v-3.2c-2.4,2.7-6.8,.7-9.1,2.7,3,.2,6,.3,9.1,.5Z"
												style={{ fill: "#82cee4" }}
											/>
											<path
												d="M673.8,162.3c-20.3-5.1-32.8,6.8-44.2,22.1-.4-22.8,25.8-38.1,44.2-22.1Z"
												style={{ fill: "#f5fafa" }}
											/>
											<path
												d="M808.2,162.3c-19.2-10.3-41.9-2-59.4,9.3,20-2.4,39.7-3.9,59.4-9.3Z"
												style={{ fill: "#bbd0dc" }}
											/>
											<path
												d="M554.7,159.8c3.2,14.7,18.3-1,25.2,16.8-3.3-.3-2.9,5.6-6.4,4.7-11.4-1.6-16.8,4.3-22,11.7-8.4-1.3-20.2-8-26.4-.4-2.8-10.1,8.4-11.1,13.6-15-2.4-10.6,3.7-21.2,16-17.8Z"
												style={{ fill: "#b5cad4" }}
											/>
											<path
												d="M673.8,162.3c3.8,.1,2.3,2.4,4.8,2-.7,1.7-3.1,4.1-5.2,8.4-3.9,7.7-11.8,2.4-19.6,5-13.2,3.5-.9,18.3-21.1,16.2-1.1-2.2-4-6.9-3-9.5,11.4-15.2,23.7-27.1,44.1-22.1Z"
												style={{ fill: "#d5e5e5" }}
											/>
											<path
												d="M627.5,204.9c17,2.6,27.2-13,39.1-21,13.6-3.9,24.3-11.1,37-13.6-1.5-4.7-16.6-8.6-14.3-1.2,.7,1.1-.3,3.4-1.1,.9-2.5-2.7-5.1-7.7-9.5-5.4-8.1,13.9-8.4,11.9-24.9,13.1-13.2,3.5-.8,18.3-21.1,16.2,0,.9-.5,1.5-1.6,1.7-5,7-21,5.1-28.3,11.3,8.2-.9,16.4-1.6,24.7-2Z"
												style={{ fill: "#c0d5df" }}
											/>
											<path
												d="M548.6,166.8c-.2,.4-.7,.7-1.1,.6-3.5-.8,2.4-4.7,1.1-.6Z"
												style={{ fill: "#daeaef" }}
											/>
											<path
												d="M660.2,197.3c2.9-6.6,9.1-8,15.7-5.7,17.5-6.1,35.4-9.9,52.9-16.1-8.6-12.9-15.1-5.7-25.3-5.3-2.6-1.1-3.6,2.2-6.3,1.6-11.3,4.1-18.8,8.2-30.7,12-8.6,5.9-16.4,14.7-26.3,20.4,6.9-1,13.4-4.8,20-6.9Z"
												style={{ fill: "#b8cedb" }}
											/>
											<path
												d="M538.4,169.2c2.8,14.9-5.2,6.9-11.8,15.3-3.2,15.9-2.4,9.5-14.9,9.3-16.3-.5-7.2,20.4-22.5,11.5-7.1-2-14.4,1.5-15.8,9.4-6.9,.4-12.8,5.6-19.5,3-5-8.5,9.3-7.5,12.6-9.4-4.4-3.4-7.7-7.4-9.8-11.9,4.3-21.6,30-19.8,43.1-8.7,11-8.6,24.4-16.2,38.6-18.5Z"
												style={{ fill: "#c7dcdf" }}
											/>
											<path
												d="M743.5,172.5c-2.3,.1-4.6,.5-6.8,1.4,2.3-.5,4.6-1,6.8-1.4Z"
												style={{ fill: "#a3bed2" }}
											/>
											<path
												d="M729.1,175.7c-.1-.1-.2-.1-.2-.2-1.2,.4-2.3,.7-3.3,1.2,1.1-.4,2.3-.7,3.5-1Z"
												style={{ fill: "#a3bed2" }}
											/>
											<path
												d="M593.9,208c-1.6,.2-3.2,.4-4.8,.6,1.7-.2,3.3-.4,4.8-.6Z"
												style={{ fill: "#85a4bb" }}
											/>
											<path
												d="M676,191.6c-6.6-2.3-12.9-.8-15.7,5.7,5.2-1.9,10.4-3.9,15.7-5.7Z"
												style={{ fill: "#85a4bb" }}
											/>
											<path
												d="M480.6,228.4c1,.3,1.5,2.5,2.9,1.5,1.2-.7,6.9-5.3,4.8-2.1-7.4,13.7,27.9-11,29.4-14.3-.6-.1-.5-.9,.4-2.5-10.8-.8-20.6,6.5-32.1,6.5-15.1,1.2-17.2,1.7-25.7,14.5,6-1.6,14.4-4.9,20.3-3.6Z"
												style={{ fill: "#85a4bb" }}
											/>
											<path
												d="M521.8,210.6c23.2-15.4,48.1-.7,72.2-2.7,3.7-5.3,9.2-8.6,16.7-9.9,14.6-6.5,27.6,2.7,19-10.3-6.7-.6-12.7-.6-19.8-1.1-9-5.9-12.4-17.2-24.8-7.8-2.2,1.2-5.8-5.5-7.3-.9-7.1,8.3-14.9-3.6-25.9,14.8-6.9-.4-13.2,6.3-19.6,9-.5,1.7-16.1,3-10.5,8.9h0Z"
												style={{ fill: "#85a4bb" }}
											/>
											<path
												d="M191.9,181.2c9,5.9,13.3,12.6,15.1,21,6.5,8.5,16.8-9.9,30.7-4.2,21.1,5.5,36,31.8,59.4,31.6,3.3,2.4,5.9,5.4,10.9,3.5,11.4-5.1,24.7,6.3,34.1-4.1-2.7-.1-4.7,4-7.4,2.1-2.8-2.7-8.2-1.6-9.7-5.5-15.5-6.8-36.2-22.1-51.9-29.5-23.6-11-42.9-17.3-69-16.1-3.2,3.1-5.4-2.3-8.6-1.9-4-1.5-7.3-.4-3.6,3.1Z"
												style={{ fill: "#a0bacd" }}
											/>
											<path
												d="M214.1,206.5l1-1.8c-1.7-.2-3.1-.2-4.2,.2,1,.5,2.1,1.1,3.2,1.6Z"
												style={{ fill: "#92acc1" }}
											/>
											<path
												d="M186,185.7c2.5,3.9,9.3,9.9,12.3,12,1.6,1.1,3.3,2.1,4.9,3.1-4.3-6.8-10.2-12-17.8-15.7,.3,.1,.5,.3,.6,.6Z"
												style={{ fill: "#9bb3c6" }}
											/>
											<path
												d="M331.1,187c7.5,.2,15.7,3.8,20.7,10-5.3-2-9.5-.8-12.7,3.7-4.7-7.4-32.8-11.4-8-13.7Z"
												style={{ fill: "#f0f6f4" }}
											/>
											<path
												d="M549.4,192.4c-10.5,5-15,9.5-27.2,13.4-4.1,1.4,.5,4-4.2,5.4-15.6,1.4-31.6,8.1-48.3,8.7,7.2-15,12.4-17.8,27.6-11.9,4.2-11.8,10.2-16.7,24.5-12.8,3.3,.6,4.1-3.5,6-5.6,6.5-1.9,14.9,1.1,21.6,2.8Z"
												style={{ fill: "#98b1c0" }}
											/>
											<path
												d="M215.1,207c16.9,5.8,25.8-8.2,42.7,13.5,4.7-3.7,10,3.9,18.5,2.6-16.3-11.8-45.3-40.8-62.2-16.5,.3,0,.7,.2,1,.4Z"
												style={{ fill: "#87a5bc" }}
											/>
											<path
												d="M597.6,207.5c-1.2,.1-2.4,.3-3.7,.5h0c72.9-15.2,18.6-20-.1,.2,1.4-.4,2.6-.6,3.8-.7Z"
												style={{ fill: "#eaf2f2" }}
											/>
											<path
												d="M351.8,197c12.1,9.2,.1,9.1-2.3,22.2-3.5,2.7-13.6-3.4-17-6.1,10.2,5.8,.1-23.6,19.3-16.1Z"
												style={{ fill: "#bed1d7" }}
											/>
											<path
												d="M576.6,207.7c-5.9-3.2-13.2-4.5-20.2-3.5,6.7,.9,13.4,2.3,20.2,3.5Z"
												style={{ fill: "#eaf2f2" }}
											/>
											<path
												d="M357.6,205.1c1.3-1.2,8.2,5.5,9.1,6,1.6,3.7,4.5,7.6,8.8,8.2,2.9,1.1-1.2,5.4,.2,9.7-.5-.7,0-6.9-1.6-6.6l-22.8-1c-3.3,2-5.3,5.9-9.2,7.7,8.7-6.2,7.3-16.7,15.5-24Z"
												style={{ fill: "#9fb7c4" }}
											/>
											<path
												d="M225.8,210.8c12.5-5.5,21.4,5,31.8,9.5-8-10.4-22.7-18-33.8-10.3,.7,.3,1.3,.6,2,.8Z"
												style={{ fill: "#e3ebeb" }}
											/>
											<path
												d="M247.5,217.1c1.9,.6,3.7,1.1,5.6,1.8-7.3-7.2-17.4-11.8-27.3-8,7.2,2.2,14.5,4.1,21.7,6.2Z"
												style={{ fill: "#c5dbde" }}
											/>
											<path
												d="M517.7,213.6c.7-1.3,5.9-2.7,3.1-4-1.2,.2-4.8,3.3-3.1,4Z"
												style={{ fill: "#d5e5e5" }}
											/>
											<path
												d="M366.6,211.1c22.6,5,60.7,2.9,79.6,2.9,4.9-.1,6.9-.6,7.7,3.8-4.9,12.3-18.2-7.6-23.1,23.2-11.3,6.2,4.1-10.5-16.8-4.3-.2-19.9-29.9-3.3-38.2-7.7,1.8-18-2-3.1-9.2-17.9h0Z"
												style={{ fill: "#f0f6f4" }}
											/>
											<path
												d="M473.4,214.7c-5.3,6.5-12.6,17.5-18.5,23.5-12.2,.8-28.6,9.5-22.5-1.2,2-5.8,6.3-13.4,14.4-13.3,1.8,.2,2.5-.4,1.9-1.6,3.2,.4,4.9-1,4.9-4.2,6.8,2.7,12.9-2.9,19.8-3.2Z"
												style={{ fill: "#afc6d1" }}
											/>
											<path
												d="M283.4,231.4c6.8,4.4,14.3,7.9,22.6,8.6-1.1,2.3,10.7,.3,13.9,1.5,34.8,3,73.7,3.8,107.2,1.2-2.4-1.8,.3-8.2-4.8-7.6-12.8,2.7-29.1-1.8-43.6,.3-7.3-1-15.7,.1-22.7-1.1-2.4-4.7-5.7,.5-9.1-3-20.9,6.2-21.8-2.5-38.9,1.6-5,2-7.6-1.1-10.9-3.5-7.8,0-14.7-2.2-20.8-6.6-8.5,1.3-13.8-6.3-18.5-2.6,8.8,3.3,17.4,7,25.6,11.2Z"
												style={{ fill: "#7b9eb9" }}
											/>
											<path
												d="M375.6,229c8.3,4.4,38-12.2,38.2,7.7-19.1-3.2-46.2,.1-64.3-3.7-9.3-5.3-17.7,6.2-26.5-.9,11.4,5.7,20.4-4.1,28.1-10.9l22.8,1c1.6-.3,1.3,6.1,1.7,6.8Z"
												style={{ fill: "#89a6bd" }}
											/>
											<path
												d="M449,221.9c.5,1.3-.1,1.8-1.9,1.6-7.7,.2-12.5,6.4-14.1,13.3-1.5-9.4,5-16,16-14.9Z"
												style={{ fill: "#f8fcfd" }}
											/>
											<path
												d="M458.8,239.9c10.6-4.7,21.7-4.4,31.3-7.1-7.4-.8,3.2-9.5-4.5-4.1-3.8,3.8-5.2-2.5-12.1,.1-13.5,.8-18.7,9.8-26.9,19,2.9-3.5,7-6.1,12.2-7.9Z"
												style={{ fill: "#7598b2" }}
											/>
											<path
												d="M357.8,268.7c5,1.4,18.4-3.4,19.3,2.8,4.7-7.1,12.3-5.6,19.1-7.3,5.6-8.6,23.3-17.7,21,.1,42.1-9.4,35.6-4.2,71.5-30.7-13.2,1-31.9,3.6-42.1,13.7-5.9,3.4-12.5,5.2-20,5.4-4.4-.9,4-7.6,3.6-11.6-14,8.5-13.8,7.2-29.3,7.8-17.1,2.8-39,1.5-49,17.8,1.9,.7,3.9,1.4,5.9,2Z"
												style={{ fill: "#5c88a9" }}
											/>
											<path
												d="M311.1,248.6c12.6,7.8,26.5,13.5,40.5,18.2,3.9-6.8,8.8-10.4,17.3-11.7,16.9-9.7,39.7-.8,56.1-11.3-20.9-.5-42.1,.1-64,.6-22.7-1.7-46.7-2.5-65.7-5.9,5.4,3.3,10.5,6.8,15.8,10.1Z"
												style={{ fill: "#6993b2" }}
											/>
											<path
												d="M455,238.2c-6.5,9.4-16.4,15.1-28.4,14.8-1.8,0-2.2-.6-1.1-2,2.6-2.4,3.1-7.5,5.4-9.9,7.9,3.3,9.2-2,24.1-2.9Z"
												style={{ fill: "#92b1c7" }}
											/>
											<path
												d="M458.7,255.3c-3.8,.2-7.3,1.2-10.5,2.9,3.5-.9,7-1.9,10.5-2.9Z"
												style={{ fill: "#dbe3e5" }}
											/>
											<path
												d="M377.9,274c20.8,6.7,22.6-.1,39.1-9.6-.4-.9,.1-5.8,.1-6.8-2-2.2-3.7-5.5-7.2-2.6-7.5,4.9-10.3,16.8-20.5,12.6-4.9-2.5-8.8,10-12.8,4.6-.6,.2-.8,1-1.3,1.2,.9,.2,1.8,.4,2.6,.6Z"
												style={{ fill: "#6997b8" }}
											/>
											<path
												d="M410.5,254.7c-7.7,4.8-10.5,17-20.6,13-5.1-2.8-8.9,9.9-13.1,4.5,4.3-7.7,12.5-6.4,19.5-8,3.2-5.3,8-8.5,14.2-9.5Z"
												style={{ fill: "#b0d4de" }}
											/>
											<path
												d="M375.4,273.5c7.2-8.2-13.6-3.6-17.6-4.7,5.8,1.7,11.7,3.3,17.6,4.7Z"
												style={{ fill: "#477aa2" }}
											/>
											<path
												d="M384,275.2c-2-.7-4.1-1.1-6.2-1.3,2,.5,4.1,1,6.2,1.3Z"
												style={{ fill: "#add1e5" }}
											/>
										</g>
										<g id="back-mountains">
											<path
												d="M773,75.3l-.3,1.2c-1.6,4.2-2.8,8.4-3.8,12.8-1.2,5.8-1.8,8.8-1.8,8.8-1.2,5.2-2.4,10.4-3.4,15.7-.5-.6-.7-1.5-.6-2.6l1.1-4.7,3.9-22.2c1.3-3.1,2.5-6.2,3.6-9.1,.1-.3,.3-.5,.5-.7,.4-.1,.7,.1,.8,.8h0Z"
												style={{ fill: "#dcd3eb" }}
											/>
											<path
												d="M775.7,77.1l5,3.8c-1.5,7-3.7,13.7-6.5,20.2l-.5,.2c.2-7.1,.5-12,.8-14.7,.4-3.7-.2-7.1-1.8-10l.3-1.2c.6-.3,.9,0,1,.7,.1,.9,.7,1.2,1.7,1h0Z"
												style={{ fill: "#4c84a8" }}
											/>
											<path
												d="M791.3,80.3c.3,4.9,.1,9.6-.5,14-.2,1.4-.6,1.4-1.2,.2-2.5-4.9-4.6-9.9-6.4-15.1-.2-.4-.3-.8-.5-1-.6-.7-1-.4-1.3,.9,0,.2-.2,.8-.6,1.5l-5-3.8c.4-.7,1.3-.9,2.8-.6,1,.2,2,.3,3.1,.3,1.2,0,2.3,.4,3.3,1.4,.2,.2,.5,.3,.8,.4l5.5,1.8h0Z"
												style={{ fill: "#5979ad" }}
											/>
											<path
												d="M772.7,76.6c1.5,2.9,2.1,6.3,1.8,10-.3,2.7-.5,7.6-.8,14.7l-10.2,18.5,.2-6c1.1-5.2,2.2-10.5,3.4-15.7,0-.1,.6-3,1.8-8.8,1-4.3,2.2-8.6,3.8-12.7h0Z"
												style={{ fill: "#4379a4" }}
											/>
											<path
												d="M791.3,80.3c2.8,.9,5.6,1.8,8.4,2.8,1.6,.6,2.7,2.1,3.3,4.7l3.2,12.5,.8,3.5c-1.5,.2-2.8-.5-3.8-1.9-2.9-.3-7.1-.3-12.6,.2-4.1,.3-7.3,1.4-9.8,3.2-3.6,2.6-6.6,6.2-9,10.7-1.7,3.2-4.2,6.9-7.5,11.1l-1.3-.2c-.2,0-.2-.2-.1-.4,.2-.3,0-.5-.6-.4,4.5-8.1,8.5-16.4,12-24.9,2.8-6.5,5-13.3,6.5-20.2,.3-.7,.5-1.2,.6-1.5,.2-1.3,.7-1.6,1.3-.9,.2,.2,.4,.6,.5,1,1.8,5.2,4,10.2,6.4,15.1,.6,1.2,1,1.2,1.2-.2,.6-4.6,.7-9.2,.5-14.2h0Z"
												style={{ fill: "#3279a4" }}
											/>
											<path
												d="M774.2,101.1c-3.5,8.5-7.5,16.8-12,24.9-.3,.4-.8,.6-1.2,.6l-.2-.1c-.3-.4-.3-.8,0-1.2,1.2-1.7,2.1-3.6,2.8-5.5l10.1-18.5,.5-.2h0Z"
												style={{ fill: "#cfd7df" }}
											/>
											<path
												d="M830.5,128.6l-.4,1.7c-3,5.9-6.8,11.7-11.4,17.2-.5,.5-1.1,.9-1.8,1-3.5,.4-7,.9-10.5,1.2-1.7,.2-5.2,.4-10.5,.5-8.8,.2-17.2,2.2-25.2,5.8l-11.2,4.2c-1.5-.5-2.8-1.3-3.8-2.3-.6-.6-1.3-1.9-2.1-3.8-1.4-3.4-3.7-6.1-6.8-7.9-2.3-1.3-5.2-2.4-8.7-3.1l4.5-3.5,9.8-6.5,8.9-5.8c.2-.1,.2-.4,.1-.6l-.2-.3c.5,0,.9-.2,1.2-.6,.6,0,.8,.1,.6,.4-.1,.2-.1,.4,.1,.4l1.3,.2c-.1,.6,0,.8,.4,.5,2.2-1.5,4-3.2,5.7-5.2,.9-1.1,2.2-3.2,3.9-6.5,1.9-3.7,4.1-7.2,6.5-10.5,2.5-1.8,5.7-2.9,9.8-3.2,5.5-.4,9.8-.5,12.6-.2,1.1,1.4,2.3,2.1,3.8,1.9l1.2,5.5c0,2.4,1.2,3.8,3.5,4.3,2.7,.6,4.5,2.6,5.5,6,3.3,1.6,6.8,3.1,10.7,4.5,1.9,1,2.8,2.5,2.5,4.7h0Z"
												style={{ fill: "#28a1d0" }}
											/>
											<path
												d="M780.7,105.3c-2.4,3.4-4.6,6.9-6.5,10.5-1.8,3.3-3.1,5.5-3.9,6.5-1.6,2-3.5,3.7-5.7,5.2-.3,.2-.5,.1-.4-.5,3.2-4.1,5.8-7.8,7.5-11.1,2.4-4.4,5.4-7.9,9-10.6h0Z"
												style={{ fill: "#c5c2ed" }}
											/>
											<path
												d="M742.1,119c-3.9,6.2-6.2,10.8-6.9,13.8-.5,2-1.6,3.5-3.3,4.5-1.7,.9-3.1,2.2-4.2,3.8-2,3-4.4,5.7-7,8.2l-.2-.5c2-3.2,4.3-6.3,6.8-9.2,2.2-2.6,4-4.8,5.2-6.8,2-3.4,4.1-6.8,6-10.3,.5-1.6,1.7-2.7,3.6-3.5Z"
												style={{ fill: "#d8e3eb" }}
											/>
											<path
												d="M742.1,119c5.8,3.3,12,5.8,18.6,7.5l.2,.1,.2,.3c.1,.2,.1,.4-.1,.6l-8.9,5.8-9.8,6.5-4.5,3.5-5.5,5.8-1,1-1.9,1.1c-.2,.1-.5,.1-.7-.1-.8-.9-1.8-1.5-3.1-1.6-.3,0-.6-.2-.8-.4-.4-.3-.8-.5-1.2-.6-.3,0-.6,.1-.9,.3-.8,.5-1.5,.6-2.1,.4,2.7-2.5,5-5.2,7-8.2,1.1-1.6,2.5-2.9,4.2-3.8,1.8-1,2.8-2.5,3.3-4.5,.7-2.9,3.1-7.5,7-13.7h0Z"
												style={{ fill: "#3381ad" }}
											/>
											<path
												d="M685.3,130c-1,3.6-1.8,7.1-2.6,10.7-.9,4.4-1.9,8-2.8,10.6-1.6,4.4-3.4,8.3-5.2,12-1.5,2.9-3.7,5.5-6.7,7.6-.9-.3-.9-.7-.2-1.1,.3-.2,.5-.4,.7-.6,4.8-6.3,8.5-13.2,11-20.8,.9-2.8,1.5-5.6,1.7-8.6,.3-3.8,1.6-7.1,4.1-9.8h0Z"
												style={{ fill: "#d8e3eb" }}
											/>
											<path
												d="M685.3,130c6.3,1.8,11.2,5.1,14.7,10.1-1.8,.6-3.6,1-5.5,1.3-2.5,.4-4.2,1-5.3,1.7-1.7,1.1-3,2.5-4,4.2-.1,.2-.4,.4-.8,.4l-1,.1c-.3,0-.6,.2-.7,.6-1.4,2.6-2.5,5.2-3.3,8-.4,1.4-1,2.8-1.8,4.1s-1.4,2.7-2,4.2l-4.1,5.1c-1,.7-2.1,1.1-3.2,1.3-.1,0-.2-.1-.2-.2,3-2.1,5.2-4.7,6.7-7.6,1.9-3.6,3.6-7.6,5.2-12,1-2.6,1.9-6.2,2.8-10.6,.7-3.6,1.5-7.2,2.5-10.7h0Z"
												style={{ fill: "#3381ad" }}
											/>
											<path
												d="M729.6,151.2c-.2,.1-.5,.1-.7-.1-.8-.9-1.8-1.5-3.1-1.6-.3,0-.6-.2-.8-.4-.4-.3-.8-.5-1.2-.6-.3,0-.6,.1-.9,.3-.8,.5-1.5,.6-2.1,.4l-.2-.5c-7-2.5-13.8-5.4-20.4-8.8-1.8,.6-3.6,1-5.5,1.3-2.5,.4-4.2,1-5.3,1.7-1.7,1.1-3,2.5-4,4.2-.1,.2-.4,.4-.8,.4l-1,.1c-.3,0-.6,.2-.7,.6-1.4,2.6-2.5,5.2-3.3,8-.4,1.4-1,2.8-1.8,4.1s-1.4,2.7-2,4.2l-4.1,5.1,4.1-.6c.4-.1,.8,.1,.9,.4l2.4,5.4c.1,.3,.4,.4,.7,.2,2.6-1.5,5.2-2.9,8-4.2,1.5-.7,3.9-1.9,7.2-3.5,3-1.5,5.5-2.4,7.5-2.8,6.2-1.2,12.3-2.4,18.5-3.8,.9-.2,2.1-1,3.8-2.5l4-5,2.9-3.5-2.1,1.5Zm-28.4,6.2s.1-.1,.2-.1c-.1,0-.2,.1-.2,.1Z"
												style={{ fill: "#3da8d2" }}
											/>
											<path
												d="M557.5,144.9c-3.7,2.8-6.1,5.1-7.2,7.1-.9,1.4-1.8,3.9-2.8,7.5-.4,1.5-.9,2.9-1.6,4.2-.7,1.4-1.3,2.7-2,4-.7,1.1-1.7,1.7-3,1.8-1.9-.2-3.6-1-5-2.3l.3-.5c2.6-.4,4.5-1.6,5.8-3.8,2.2-2.4,3.5-4.9,4-7.5,.5-2.8,1.6-5,3.2-6.6,2.2-1.9,4.4-3.7,6.7-5.3,.5-.3,.9-.4,1.2-.3,.7,.1,.8,.7,.4,1.7Z"
												style={{ fill: "#f0d7f0" }}
											/>
											<path
												d="M738,143.3c3.5,.7,6.3,1.8,8.7,3.1,3.2,1.8,5.4,4.4,6.8,7.9,.8,1.9,1.5,3.2,2.1,3.8,1.1,1.1,2.4,1.8,3.8,2.3l-10.2,4.2c-3.3-2.5-5.9-5.6-7.9-9.2-.7-1.4-1.6-2.5-2.7-3.5-1.1-1-2.1-2.1-3.1-3.2-1-1.1-2-.9-3.2,.4l5.7-5.8Z"
												style={{ fill: "#63b2de" }}
											/>
											<path
												d="M560.4,147.1l7.5,13.8,6.8,15.8c-.8,1.3-1.9,2.1-3.3,2.4-.2,.1-.4,.3-.3,.5,1.1,2.5,.6,5-1.6,7.6-.7,.8-1.4,1.3-2.3,1.7l-15,5.9c-.2,.1-.5-.1-.5-.3-.3-1.2-1-1.7-2.3-1.6-.2,0-.4-.1-.5-.4l-.2-.4c-.1-.2-.5-.3-.8-.2-2.5,.7-3.4-.4-2.8-3.4,6.2-7,11.9-14.3,16.9-21.9,.7-1,.6-1.1-.3-.3-2.4,2.3-4.6,4.8-6.6,7.4-2.8,3.7-7.1,7.7-12.7,11.9,2.8-3.2,5.2-6.6,7.3-10.1,.2-.2,.2-.6,0-.9-.2-.7-.3-1.3,0-2,.2-.5,.3-.9,.3-1.1,.2-1.3-.1-1.7-.8-1.1-.2,.2-.5,.2-.8,.1-.6-.2-1.2-.3-1.8-.2-.3,.1-.6-.1-.8-.3-.5-.8-.4-1.6,.2-2.2,.2-.2,.3-.5,.4-.8l.2-1.2c.2-.9,0-.9-.4-.2l-2.3,3.6c-.1-.5-.1-.9,0-1.4,.7-1.4,1.3-2.7,2-4,.6-1.3,1.2-2.7,1.6-4.2,1-3.6,1.9-6.1,2.8-7.5,1.2-1.9,3.6-4.3,7.2-7.1l.5-.3c.2-.1,.5-.1,.7,.1l1.7,2.3h0Z"
												style={{ fill: "#3f8db6" }}
											/>
											<path
												d="M634.5,147.9c-3.2,6.4-7.1,12.4-11.6,18-.1,.2-.3,.3-.4,.3-.4,.1-.4-.2,0-.8,1.1-1.8,2.2-3.6,3.3-5.5,.2-.3,.2-.7,.1-.9-.2-.5-.7-.3-1.2,.6-4.8,7.1-9.1,14.4-13,22.1-.4,.1-.6,.1-.8-.1-.2-.2-.2-.5,0-.9l9.5-17.3,5.5-9c1.7-2.4,3.6-4.7,5.7-6.7,.5-.4,.9-.7,1.3-.7,.9-.1,1.4,.2,1.6,.9h0Z"
												style={{ fill: "#dcd3eb" }}
											/>
											<path
												d="M833,136.9l-2.5,5.8c-2.1,3-4,6.1-5.9,9.3-2.4,4.1-4.4,7.2-6.1,9.1-3.6,4.1-7.6,7.8-12,11,.4-1.3,.1-2.1-.9-2.3-6.7-1.3-14-1.7-21.6-1.3h-2.9c-1.9,0-3.6,.5-4.9,1.7-.4,.4-1.5,1.9-3.2,4.8-1.4,2.3-3.2,4.2-5.4,5.6-.3,.2-.6,.5-.9,.8-1,1.2-2,1.9-2.9,2.1-1.7-2-3.1-2.9-4.3-3-7.1-.2-14.3-.7-21.4-1.6-.1-.5-.4-.7-1-.4-.3,.1-.5,.4-.7,.7l-5.6,11.5-.8,.6-1.3,.7c-.3,.2-.7,.2-1.2,0-5-2.1-10.1-2.2-15.5-.2l-1.8-.5-5.2-1.7c-.3-.1-.7-.1-1.1,.1-3.3,1.2-6,1.1-8.1-.4,.4-2.4,1.8-3.6,4.3-3.5,.8,0,1.5-.2,2.1-.7,.2-.2,.5-.3,.9-.3,1,0,2-.5,2.8-1.5,1.5-1.8,1.3-2.7-.7-2.8-.6,0-1.4,.1-2.2,.4-4.7,1.7-9.1,3.7-13.4,6.2l-2.5-1c.7-.2,.7-.5,.1-.8-2.1-1.1-4.2-2.1-6.3-3.2-.5-.3-1.5-.6-2.8-.9-1-.2-1.9-.7-2.8-1.4-.3-.3-.7-.4-.9-.3-.2,.1-.3,.4-.3,.7-4.7-3.1-9.9-5.1-15.6-5.9,.2-1.3,1.4-1.8,3.6-1.4,2.2,.4,4.2-.1,6.2-1.7,1.2-.2,2.3-.6,3.2-1.3l4.1-.6c.4-.1,.8,.1,.9,.4l2.4,5.4c.1,.3,.4,.4,.7,.2,2.6-1.5,5.2-2.9,8-4.2,1.5-.7,3.9-1.9,7.2-3.5,3-1.5,5.5-2.4,7.5-2.8,6.2-1.2,12.3-2.4,18.5-3.8,.9-.2,2.1-1,3.8-2.5l4-5,2.9-3.5,1-1c1.2-1.4,2.2-1.5,3.2-.4s2,2.2,3.1,3.2c1,1,1.9,2.1,2.7,3.5,2,3.6,4.6,6.7,7.9,9.2l10.2-4.2,11.1-4.2c8.1-3.6,16.5-5.6,25.2-5.8,5.3-.1,8.8-.3,10.5-.5,3.4-.4,6.9-.8,10.5-1.2,.7-.1,1.3-.4,1.8-1,4.6-5.5,8.4-11.3,11.4-17.2l.4-1.7c.9-.6,1.4-.4,1.5,.7,0,.3,.1,.6,.3,.9,.5,.7,.8,1.5,.9,2.4-.5,1.3-.6,2.7-.2,4.2h0Z"
												style={{ fill: "#abc4f1" }}
											/>
											<path
												d="M634.5,147.9l2.9,1.6c3.8,3.3,7.7,6.1,11.9,8.3,.4,.2,.6,.4,.7,.6l1.9,4.9c-3.4,1.4-7,1.9-10.8,1.6-.3,0-.7,0-.9,.2-2.5,1.5-4.5,3.5-5.9,6.1l-5.6,3.9c-1.3,1.1-2.7,2.1-4.3,2.8-1.3,.6-2.4,1.3-3.5,2.2-1.2,1-2.4,1.8-3.8,2.5-1,.5-1.2,.3-.5-.6,1.7-2.2,3.7-4.3,6.1-6.3,.8-.7,1.3-1.8,1.4-3.3,0-.3-.1-.4-.3-.1-2.9,3.1-5.8,6.1-8.7,9.1-.9,.9-.7,1.8,.7,2.6l-5.4-.1c.6-.6,1-1.4,1.2-2.2,3.8-7.7,8.2-15,13-22.1,.6-.9,1-1.1,1.2-.6,.1,.2,.1,.6-.1,.9-1.1,1.9-2.2,3.7-3.3,5.5-.4,.6-.4,.9,0,.8,.2,0,.3-.1,.4-.3,4.6-5.6,8.5-11.5,11.7-18h0Z"
												style={{ fill: "#4287ac" }}
											/>
											<path
												d="M652,163.3c1.2,2.4,2.3,5.4,3.2,8.8,.5,1.7,1.5,2.4,3.2,2.1,5.7,.8,10.9,2.7,15.6,5.9,.7,.2,1.2,.6,1.5,1.1,.2,.2,.2,.6,0,.9l-2.3,5.5h-.5c-.2-1.8-.9-2.6-2.2-2.3-1.5,.2-2.2,.4-2.3,.4-.9-.1-1.7-.3-2.5-.6-.2-.1-.4-.1-.7-.1-1.2,.1-1.4-.1-.6-.4,.2-.1,.2-.2,0-.3-.9-.4-2-.4-3.1,0-3.1,.9-6.4,1.4-10,1.4-4.2-.1-8.1,.9-11.8,2.9-1.5,.8-3.2,.9-5.1,.3-.3-.1-.7-.1-1,0-3.8,1.3-7,2.3-9.7,3-1.2,.3-2.7,.9-4.3,1.7-1.4,.7-2.9,1.2-4.5,1.5-2,.4-3.9,.9-5.8,1.8-.3,.1-.6,.1-.9,.1l-2.8-.9c-.3-.1-.6,0-.8,.2-.9,1-2,1.3-3.4,.9,.2-4.9,.5-8.6,.8-11,.2-1.6,.7-3.8,1.6-6.5,1.8,1.3,3.1,2.4,4,3.4,.8,.9,1.8,1.2,3,1l5.4,.1c5.1-1.7,9.6-4.5,13.4-8.3,2-1.1,3.7-2.6,5.2-4.4,1.4-2.6,3.3-4.6,5.9-6.1,.3-.2,.6-.2,.9-.2,3.5,0,7.1-.5,10.6-1.9h0Z"
												style={{ fill: "#35a2cc" }}
											/>
											<path
												d="M291.8,165.3l-1.5,1.9c-2.2,1.8-4.4,3.7-6.8,5.6-1.1,.9-2,2-2.6,3.3-.7,1.4-1.4,2.8-2.2,4.2-3.4,4.9-6.4,9.9-9.1,15.2-.2,.4-.4,.5-.6,.1l2.8-8.6c1.8-1.4,3.5-3.4,4.9-5.7,1.3-2.1,2.5-4.1,3.8-6.2,2.7-4.4,6.4-7.8,11.1-10.1,.1-.1,.2,0,.2,.3h0Z"
												style={{ fill: "#cfd7df" }}
											/>
											<path
												d="M542.4,185.4c-3.1,3.2-5.1,7-6,11.4-.7,3.2-2.4,5.7-5.1,7.5-2,1.3-4,2.7-6.1,4-1.2,0-2.2,.3-3,.7l-6,.3c-.4,0-.4-.1-.2-.4,3.2-4.2,5-7.5,5.6-9.7,.8-3.1,2-6,3.5-8.7,1.3-2.4,2.3-4.1,3-5.1,1.1-1.6,2.6-3,4.3-4.2,1.8-1.3,3.9-2.9,6.2-4.8,1.2-1,2.1-2.1,3-3.5,.8-1.3,1.6-2.7,2.4-4l2.3-3.6c.5-.7,.6-.7,.4,.2l-.2,1.2c-.1,.4-.2,.6-.4,.8-.7,.7-.7,1.4-.2,2.2,.2,.2,.5,.3,.8,.3,.6-.1,1.2-.1,1.8,.2,.3,.1,.6,.1,.8-.1,.7-.6,.9-.2,.8,1.1,0,.2-.1,.6-.3,1.1-.2,.7-.2,1.4,0,2,.1,.3,.1,.6,0,.9-2.1,3.7-4.6,7.1-7.4,10.2h0Z"
												style={{ fill: "#4395c2" }}
											/>
											<path
												d="M291.8,165.3c.7-.1,1.3,.1,1.9,.6,1.8,1.6,3.5,3.2,5,4.8l6.3,7.3c5,5.8,9.7,11.8,14,18.1,3.2,5.8,7.2,11.4,11.8,16.8,.2,.2,.5,.3,.8,.2,2.1-.6,3.7-.2,4.6,1.2-.6,1.5-.5,2.8,.2,4.1l-4.8,1.1c-.3,.1-.5,.3-.7,.6-1.6,4.5-3.6,8.8-5.9,13q-.1,.1-.1,0c-.1-.5-.2-.6-.2-.1,0,.1-.1,.2-.2,.3-.6,.4-1.3,.6-2,.4-.3,0-.5-.3-.6-.6-1.3-5.5-.1-10.4,3.6-14.8,0-4-1.4-7.9-4-11.7-7.9-11.4-14-19.8-18.4-25.2-3.8-5.2-8.1-9.9-12.9-14.1l1.6-2h0Z"
												style={{ fill: "#6798c0" }}
											/>
											<path
												d="M545.2,188.3l-2.1,3c-.2,.4-.4,.3-.6-.1-.5-1.5-1.1-1.9-1.8-1.1-1,1.1-1.7,3.3-2.2,6.5-.7,4-2.9,8.4-6.7,13.1-.9,1.1-.7,1.5,.7,1.1,7.8-1.9,16.1-3.9,24.9-6.1,2.7-.6,5.1-.6,7,0l-.3,.5c-4.5,3.3-8.8,5.6-12.8,6.9-3.2,1.1-6.4,2.2-9.6,3.4-1.8,.7-3.4,1.1-4.8,1.3-1.8,.3-3.5,.4-5,.3-.6,0-1,.1-1.1,.4-.1,.2,.1,.5,.4,.6,1.1,.4,1.1,1-.1,1.9-2,1.5-5,3.4-9,5.8-2.5,1.5-4.2,3.6-5,6.4l-12.9,.3c-.3,0-.6-.1-.9-.3-.6-.4-1.2-.6-1.9-.6-1.6-.1-2-.8-1.3-2.3,1.2-1.1,1-1.6-.6-1.4-1.2,.1-3.8,1-7.8,2.5,0,0-.4,.2-1.1,.5-2.2,1-3.6,.1-4.1-2.5l4.6-4.7,24.8-19.9c.2-.2,.2-.3-.1-.4l-1.8-.4c-.3-.1-.5-.4-.5-.7-.1-2.9,.2-5.7,.9-8.5,2.5-4.6,5.7-8.2,9.5-10.8,2.2-1.5,3.5-3.3,3.9-5.6,.3-2.3,.5-4.6,.8-6.9,.2-1.8,.7-3,1.4-3.8,1.9-.9,3.9-1,6-.2l-.3,.5c-2.9-.2-4.6,.8-5.2,3-.3,1.1-.5,3.7-.7,7.9,0,.3,.1,.4,.4,.2,2.7-1.7,5.4-3.4,8-5.2,1.6-1.1,2.5-2.3,2.5-3.7,1.3-.1,2.3-.7,3-1.8-.1,.5-.1,1,0,1.4-.8,1.3-1.6,2.7-2.4,4-.8,1.4-1.8,2.5-3,3.5-2.3,1.9-4.4,3.5-6.2,4.8-1.7,1.2-3.2,2.6-4.3,4.2-.7,.9-1.7,2.6-3,5.1-1.5,2.8-2.7,5.7-3.5,8.7-.6,2.2-2.5,5.4-5.6,9.7-.2,.3-.2,.4,.2,.4l6-.3-5.5,7.1c-.7,.9-1,1.8-1.1,2.9-.2,2.4,.4,3.1,1.9,2.1,2.7-1.9,5.4-3.9,8-6.1,.4-.3,.4-.8,.1-1.2-1.3-1.7-1.5-3.5-.4-5.5,2-1.3,4.1-2.6,6.1-4,2.7-1.8,4.4-4.3,5.1-7.5,.9-4.4,3-8.2,6-11.4,5.6-4.2,9.9-8.2,12.7-11.9,2-2.6,4.2-5.1,6.6-7.4,.9-.9,1-.8,.3,.3-4.7,7.7-10.3,15.1-16.5,22h0Z"
												style={{ fill: "#e1c7f1" }}
											/>
											<path
												d="M290.3,167.2c4.8,4.2,9.1,8.9,12.9,14.1-2.4,.2-4,1.5-4.7,3.9l-.3-.9c-.1-.4-.3-.4-.6-.1l-6.1,7.1c-3.5,3.8-5.6,6.8-6.5,9.1-1.9,4.9-4.3,9.4-7.3,13.6l-3.3-2c.5-2.4,1.1-4.7,2-7,1-2.6,1.8-4.9,2.4-6.8,1.2-3.9,2.8-7.8,4.8-11.5,.1-.3,0-.6-.2-.8-1.5-.9-2.9-1.8-4.1-2.7-.8-.6-1.1-1.6-.7-2.9,.8-1.4,1.5-2.8,2.2-4.2,.6-1.3,1.5-2.4,2.6-3.3,2.5-1.9,4.7-3.7,6.9-5.6h0Z"
												style={{ fill: "#4c84a8" }}
											/>
											<path
												d="M535.9,167.1c1.4,1.3,3.1,2.1,5,2.3,0,1.4-.9,2.6-2.5,3.7-2.6,1.8-5.3,3.5-8,5.2-.3,.2-.4,.1-.4-.2,.2-4.2,.4-6.9,.7-7.9,.6-2.3,2.4-3.3,5.2-3.1Z"
												style={{ fill: "#518dc3" }}
											/>
											<path
												d="M271.8,187l-2.8,8.6-.5,.8c-1,.6-1.7,1.6-2.2,2.7-.1,.4-.2,.4-.3,0-.1-.4,0-.8,.3-1.1,.8-1.1,.8-1.9-.2-2.5-.4-.2-.6-.6-.7-1-.1-.8-.3-1.3-.6-1.6-.2-.3-.3-.6-.3-.8,.2-1.7-.5-3.3-1.9-4.7-1.1-1.1-2.7-3.1-4.8-6.2-.2-.3-.3-.6-.2-.9,.2-3.3-1.3-5.3-4.6-6-1.5-.3-3.7-.1-6.6,.7-.2,.1-.5-.1-.6-.3-.3-.6-.9-.9-1.8-.8l8-6.1c.5-.4,1.2-.4,1.8,0,1.8,1.2,3.7,2.4,5.6,3.7,2,1.4,3.7,2.9,5,4.4,3,3.2,5.4,6.9,7.4,11.1h0Z"
												style={{ fill: "#3da8d2" }}
											/>
											<path
												d="M806.5,172.1c-7.6,4.9-12.1,7.9-13.6,9-2.3,1.7-4.3,4.1-5.9,7.1,.2-1.3,.7-2.3,1.5-3.1,.6-.7,.4-1.8-.5-2.1-1.6-.6-3.2-.8-4.8-.6-1.7,.3-2.5,.4-2.5,.4-3.3,.3-7.1,1-11.3,2.1-.6,.1-.8,.9-.4,1.3s.2,.9-.6,1.4l-4.7-4.2c.9-.2,1.9-.9,2.9-2.1,.3-.3,.6-.6,.9-.8,2.2-1.4,4-3.3,5.4-5.6,1.7-2.9,2.8-4.4,3.2-4.8,1.4-1.1,3-1.7,4.9-1.7h2.9c7.7-.4,14.9,0,21.6,1.3,1,.3,1.3,1,1,2.4h0Z"
												style={{ fill: "#7cbce9" }}
											/>
											<path
												d="M634.4,171.2c-1.4,1.8-3.1,3.3-5.2,4.4,0-.4-.2-.6-.5-.5l5.7-3.9h0Z"
												style={{ fill: "#64b7cc" }}
											/>
											<path
												d="M628.7,175.1c.4,0,.6,.1,.5,.5-3.8,3.8-8.3,6.6-13.4,8.3-1.3-.8-1.6-1.6-.7-2.6,2.9-3,5.8-6.1,8.7-9.1,.2-.2,.3-.2,.3,.1-.1,1.5-.6,2.6-1.4,3.3-2.4,2-4.5,4.1-6.1,6.3-.7,.9-.5,1.1,.5,.6,1.4-.7,2.6-1.5,3.8-2.5,1.1-.9,2.2-1.6,3.5-2.2,1.6-.7,3-1.6,4.3-2.7h0Z"
												style={{ fill: "#d8e3eb" }}
											/>
											<path
												d="M214.3,173.3l10.6,7.1c.3,.2,.6,.3,.9,.2,6.6-1,12.6-3.3,18.2-6.9,.9-.1,1.5,.2,1.8,.8,.1,.3,.4,.4,.6,.3,2.9-.8,5-1,6.6-.7,3.2,.7,4.8,2.7,4.6,6,0,.3,.1,.7,.2,.9,2.1,3.1,3.7,5.1,4.8,6.2,1.4,1.4,2,3,1.9,4.7,0,.2,.1,.5,.3,.8,.2,.3,.4,.8,.6,1.6,.1,.4,.3,.8,.7,1,1,.6,1,1.4,.2,2.5-.3,.4-.4,.8-.3,1.1,.1,.4,.2,.4,.3,0,.4-1.1,1.1-2,2.2-2.7l-4,9.5c-13.1-7.6-26-15.5-38.7-23.8l-.4-.4c-.2-.2-.6-.3-.8-.1-2.4,1-5,1.3-7.6,.7l-2.7-8.8h0Z"
												style={{ fill: "#35a6d0" }}
											/>
											<path
												d="M574.8,176.6c.8,.5,1.8,.8,3,.8,1.5-.1,2.7,.4,3.7,1.2,.7,.6,1.3,1.6,1.8,3.1,1.3,4,2,6.5,2,7.4,0,2.5,.9,4.3,2.8,5.4,1.8,1.1,3.9,1.7,6.4,1.9,1.2,.4,1.4,.9,.7,1.6-3.4,3.4-6.8,6.9-10.3,10.3-1.9,1.8-1.7,2,.5,.6,3.1-2.1,6.2-4.4,9.3-6.9,.2-.2,.5-.5,.8-1,.5-.8,1-.8,1.5-.1,.2,.3,.5,.5,.7,.6,.8,.4,1.7,.5,2.7,.3-.6,1.8-.9,3.6-.7,5.4,0,.3,.2,.6,.5,.7l2.7,1.3c.3,.1,.3,.2,0,.3-1.5,.4-1.7,.5-.6,.4-13.7,5.7-27.5,11.3-41.3,16.8-1.2,.5-2.5,.9-3.7,1.1-1.3,.3-2.6,.5-3.8,.7l-36.3,3.8c.8-2.8,2.5-4.9,5-6.4,4-2.4,7-4.3,9-5.8,1.2-.9,1.2-1.5,.1-1.9-.3-.1-.5-.4-.4-.6,.2-.3,.5-.5,1.1-.4,1.6,.1,3.2,0,5-.3,1.4-.2,3-.6,4.8-1.3,3.2-1.2,6.4-2.3,9.6-3.4,4-1.3,8.2-3.6,12.8-6.9-.2,.5-.4,1-.6,1.5-.2,.3-.5,.7-1,1.2-1.3,1.2-1.5,2.6-.6,4.3,.1,.3,.2,.6,.1,.9-.1,.7,.1,1.2,.7,1.4,.3,.1,.9,.1,1.6,0,5-1,9.7-2.5,14-4.7,.7-.4,1.2-1.1,1.2-1.9,0-3.9,.2-7.6,.5-10.9,.1-1.1,.5-2.3,1-3.5,.5-1.1,1-2.2,1.5-3.4,.1-.3,.2-.6,.1-1-.3-2.3-.9-4.5-1.5-6.7-1-3.4-2.5-3.5-4.4-.6-.8,1.2-1.2,2.6-1.1,4,.1,2,.3,4.7,.6,8,.3,2.9-.4,5.3-2.1,7.1-.2,.2-.4,.5-.7,.9-.2,.3-.4,.6-.7,.9-.3,.3-.8,.6-1.4,.7-2,.3-4,.6-6,.7-.2,0-.5,.1-.6,.2l-.2,.3c-2-.6-4.3-.6-7,0-8.8,2.1-17.1,4.1-24.9,6.1-1.4,.3-1.6,0-.7-1.1,3.8-4.7,6-9.1,6.7-13.1,.5-3.2,1.3-5.4,2.2-6.5,.7-.8,1.2-.4,1.8,1.1,.1,.4,.3,.4,.6,.1l2.1-3c-.6,3,.3,4.1,2.8,3.4,.4-.1,.7,0,.8,.2l.2,.4c.1,.2,.3,.4,.5,.4,1.2-.1,2,.4,2.3,1.6,.1,.3,.3,.4,.5,.3l15-5.9c.9-.3,1.6-.9,2.3-1.7,2.2-2.6,2.7-5.1,1.6-7.6-.1-.2,0-.5,.3-.5,1.2-.2,2.3-1,3.1-2.3h0Z"
												style={{ fill: "#4b9bc3" }}
											/>
											<path
												d="M603.5,179.3c-.9,2.7-1.4,4.9-1.6,6.5-.2,2.4-.5,6.1-.8,11-1.4,.8-2.3,.1-2.6-2.2-.1-.5-.6-.7-1-.5-.3,.2-.8,.2-1.5,0-2.2-7.8,.3-12.7,7.5-14.8Z"
												style={{ fill: "#d9c4eb" }}
											/>
											<path
												d="M564.2,205.3l.3-.5,.2-.3c.1-.1,.3-.2,.6-.2,2-.1,4-.3,6-.7,.6-.1,1.1-.3,1.4-.7,.3-.3,.5-.6,.7-.9,.2-.4,.4-.7,.7-.9,1.7-1.8,2.4-4.1,2.1-7.1-.3-3.3-.5-6-.6-8-.1-1.4,.3-2.8,1.1-4,1.9-3,3.4-2.8,4.4,.6,.7,2.2,1.2,4.4,1.5,6.7,0,.3,0,.7-.1,1-.5,1.1-1,2.3-1.5,3.4-.6,1.2-.9,2.3-1,3.5-.3,3.3-.5,7-.5,10.9,0,.8-.5,1.5-1.2,1.9-4.3,2.2-9,3.8-14,4.7-.7,.1-1.2,.1-1.6,0-.6-.2-.8-.7-.7-1.4,.1-.3,0-.7-.1-.9-.8-1.6-.6-3.1,.6-4.3,.5-.5,.9-.9,1-1.2,.3-.5,.5-1,.7-1.6h0Z"
												style={{ fill: "#54a2cd" }}
											/>
											<path
												d="M278.6,180.3c-.4,1.3-.1,2.3,.7,2.9,1.2,1,2.6,1.9,4.1,2.7,.3,.2,.4,.5,.2,.8-2,3.8-3.6,7.6-4.8,11.5-.6,1.9-1.4,4.2-2.4,6.8-.9,2.3-1.6,4.6-2,7l-10-6.2,4-9.5,.5-.8c.2,.4,.4,.3,.6-.1,2.7-5.2,5.7-10.2,9.1-15.1h0Z"
												style={{ fill: "#628cb4" }}
											/>
											<path
												d="M695.7,189.1l-6.2-2.2c4.3-2.4,8.8-4.5,13.4-6.2,.8-.3,1.5-.4,2.2-.4,2,.1,2.2,1.1,.7,2.8-.9,1-1.8,1.5-2.8,1.5-.3,0-.6,.1-.9,.3-.6,.5-1.3,.7-2.1,.7-2.4-.1-3.9,1.1-4.3,3.5h0Z"
												style={{ fill: "#91bbe9" }}
											/>
											<path
												d="M787,188.1c-1.8,3.6-4.1,6.6-6.9,9.1l-11.7-9.6c.8-.5,1-1,.6-1.4s-.2-1.2,.4-1.3c4.2-1.1,8-1.8,11.3-2.1,0,0,.9-.1,2.5-.4,1.6-.2,3.2-.1,4.8,.6,.9,.3,1.1,1.4,.5,2.1-.8,.7-1.3,1.7-1.5,3h0Z"
												style={{ fill: "#54b0e2" }}
											/>
											<path
												d="M298.5,185.2c-.9,2.8-1.7,5.6-2.5,8.6-.5,1.6-.8,3-.8,4.2-.1,1.2,.3,2.5,1.1,4,1.6,2.7,3.1,4.9,4.5,6.6,2.3,2.6,3.9,4.8,5,6.8-.5,1.4-1.3,1.6-2.3,.5-.8-.8-1.3-1.3-1.8-1.5-2.8-3.7-6.1-6.9-9.9-9.6,.8-1.6,.9-3.5,.3-5.4-.1-.3-.4-.5-.7-.4-.6,.1-1.2,.3-1.6,.7-.3,.3-.6,.4-.9,.4s-.5-.2-.5-.5c0-.2,.1-.5,.4-.8l3.4-3.7c.2-.3,.5-.5,.8-.6,1.3-.6,1.8-1.6,1.2-2.9-.5-1.3-1.4-1.4-2.7-.2l6.1-7.1c.3-.3,.5-.3,.6,.1l.3,.8h0Z"
												style={{ fill: "#628cb4" }}
											/>
											<path
												d="M672.7,187.6c-1.7,3.1-4.1,4.9-7.4,5.4-2.7,.4-4.1,.7-4.2,.7-4.4,1.1-8.7,2.6-12.9,4.3,0,0-1.1,.4-3.2,1.2-1.8,.7-3.9,1.7-6.2,3.2-2.1,1.3-3.4,3-3.9,5.1-.1,.5-.3,1.1-.5,1.7-.2,.4-.3,1-.5,1.7-1,3.3-3.3,5.1-7,5.4-2.2,.2-4.1,0-5.8-.6-1.2-.4-5.1-1.9-11.6-4.4-2-.8-4.4-1.1-7.2-1.2-1,.1-.8-.1,.6-.4,.3-.1,.3-.2,0-.3l-2.7-1.3c-.3-.1-.5-.4-.5-.7-.2-1.9,.1-3.7,.7-5.4l.8-5c1.4,.4,2.5,.1,3.4-.9,.2-.2,.5-.3,.8-.2l2.8,.9c.3,.1,.6,.1,.9-.1,1.9-.8,3.8-1.4,5.8-1.8,1.6-.3,3.1-.8,4.5-1.5,1.7-.9,3.1-1.4,4.3-1.7,2.7-.7,6-1.7,9.7-3,.3-.1,.7-.1,1,0,1.9,.6,3.6,.5,5.1-.3,3.7-2,7.6-2.9,11.8-2.9,3.6,0,6.9-.4,10-1.4,1.1-.3,2.1-.3,3.1,0,.2,.1,.3,.2,0,.3-.8,.4-.7,.5,.6,.4,.2,0,.4,0,.7,.1,.8,.3,1.7,.5,2.5,.6,0,0,.8-.1,2.3-.4,1.3-.1,2,.7,2.2,2.5h0Z"
												style={{ fill: "#3da8d2" }}
											/>
											<path
												d="M506,188.3c-1.8,4.9-3.2,9.9-4.4,15-.9,3.7-3.2,6.1-7.2,7.3-3.6,1-6.6,3.4-9.2,7.1-.2-2.6,.9-4.5,3.1-5.9,3.9-2.4,6.7-4.2,8.4-5.4,2-1.4,3.2-3.7,3.7-6.9l2.5-10.5c.2-.8,.8-1.4,1.6-1.6,1-.2,1.5,.1,1.5,.9h0Z"
												style={{ fill: "#f0d7f0" }}
											/>
											<path
												d="M672.7,187.6h.5c-.8,3.3-2.3,6.5-4.5,9.6-.4,.6-1.2,1-2,.9-3.1-.2-4,.2-2.9,1.2-4.5,1.9-9.3,3.5-14.3,4.8-1.6,.4-2.6,1.4-2.9,3.1-.7,3.6-1.6,7.5-2.7,11.5,0,0-.1,.6-.3,1.7-.3,1.8-1.4,3-3.1,3.6,.5-.9,1-1.9,1.4-2.9,.3-.7,.4-1.8,.3-3.2,0-.9,0-1.9,.3-2.8,.1-.3-.1-.6-.3-.7-.5-.2-.9-.2-1.3,0-.4,.2-.7,.6-.9,1.2-1.2,3.4-2.4,6.8-3.5,10.1-2.8,1.3-4.3,3.5-4.3,6.6,0,.7-.5,2.2-1.4,4.5-7.7-7.2-16-13.6-25-19.2-1.1-.7-1.2-.5-.5,.5,2.1,2.8,4.3,5.5,6.7,8.1,3.3,3.5,5.5,6.2,6.7,8.1,2.5,3.8,4.6,7.9,6.3,12.2,.1,.2,.4,.3,.6,.2l2.1-1.2-3.2,5c-1.2,.5-1.9,.3-2.2-.7-.1-.4-.3-.7-.4-.9-1.5-1.5-3.2-2.2-5.1-2.2-3.5,.1-6.3,.1-8.5,.1-1.8,0-4.7,.1-8.5,.3-2.9,.1-5.9,.1-9-.1-5.6-.5-12-.8-19.2-.9-1.4,0-3.8-.3-7-.7-2-.3-4.3-.5-7-.6-7.1-.3-14.1-.5-21.2-.6-.3,0-.6-.1-.9-.2-1-.5-1.9-.6-3-.4-1.2,.2-1.8,.3-1.9,.3-8.4,.6-16.7,.7-25.1,.3-4.8-.2-9.6,0-14.4,.7-.5-.4-.8-1.2-1.1-2.5,8.4-.8,16.9-1,25.3-.8,3.4,.1,7.8-.9,13.3-3.1,.3-.1,.5-.4,.4-.7-.1-.6-.3-1.2-.7-1.8s-.1-1.4,.6-1.5c7.1-1,14.2-1.6,21.5-1.9,1.2-.1,2.1-.3,2.7-.7,1.2-.8,1.3-1.9,.5-3.3,1.2-.2,2.5-.4,3.8-.7,1.2-.2,2.5-.6,3.7-1.1,13.8-5.5,27.5-11.1,41.3-16.8,2.9,.1,5.3,.5,7.2,1.2,6.5,2.5,10.4,3.9,11.6,4.4,1.7,.6,3.7,.8,5.8,.6,3.7-.3,6-2.1,7-5.4,.2-.7,.4-1.3,.5-1.7,.2-.6,.4-1.2,.5-1.7,.5-2.1,1.7-3.8,3.9-5.1,2.3-1.4,4.4-2.5,6.2-3.2,2.1-.8,3.1-1.2,3.2-1.2,4.2-1.7,8.5-3.2,12.9-4.3,.1,0,1.5-.2,4.2-.7,3.2-.5,5.7-2.3,7.3-5.3h0Z"
												style={{ fill: "#b3c1ed" }}
											/>
											<path
												d="M506,188.3c2.6,2.2,5.4,4.1,8.5,5.6-.7,2.8-1,5.6-.9,8.5,0,.3,.2,.6,.5,.7l1.8,.4c.3,.1,.3,.2,.1,.4l-24.8,19.9-.2-1.7c0-.3-.2-.6-.4-.6-1.2-.3-2.4-.7-3.5-1.2-1.1-.4-1.7-1.3-1.9-2.7,2.5-3.7,5.6-6,9.2-7.1,3.9-1.1,6.3-3.6,7.2-7.3,1.2-5,2.7-9.9,4.4-14.9h0Z"
												style={{ fill: "#5391ba" }}
											/>
											<path
												d="M728.7,191.9c-.4,1.2-1.2,1.7-2.5,1.4-2.2,.6-4.3,.6-6.4-.2-.4-.1-.7-.2-.9-.1-.3,.1-.5,.3-.7,.6l-6.2-1.9c5.4-2,10.5-1.9,15.5,.2,.5,.2,.9,.2,1.2,0h0Z"
												style={{ fill: "#509ddb" }}
											/>
											<path
												d="M291.8,204.8c-3.5,4.3-7.3,8-11.5,11.1l-2.6-1.8c3-4.2,5.5-8.8,7.3-13.6,.9-2.2,3-5.2,6.5-9.1,1.3-1.1,2.2-1,2.7,.2,.5,1.3,.1,2.2-1.2,2.9-.3,.1-.5,.3-.8,.6l-3.4,3.7c-.3,.3-.4,.6-.4,.8,0,.4,.2,.5,.5,.5,.2,0,.5-.2,.9-.4,.5-.4,1-.7,1.6-.7,.3,0,.6,.1,.7,.4,.6,2,.5,3.8-.3,5.4h0Z"
												style={{ fill: "#8b9dc3" }}
											/>
											<path
												d="M726.2,193.3c-1.5,1.6-3,2.2-4.4,1.8l-3.6-1.6c.2-.3,.4-.5,.7-.6,.2-.1,.5,0,.9,.1,2.1,.9,4.2,1,6.4,.3h0Z"
												style={{ fill: "#9fcfeb" }}
											/>
											<path
												d="M601.2,196.9l-.8,5c-1,.2-1.9,.1-2.7-.3-.2-.1-.5-.3-.7-.6-.5-.7-1-.7-1.5,.1-.3,.5-.6,.8-.8,1-3.1,2.5-6.2,4.8-9.3,6.9-2.2,1.4-2.3,1.3-.5-.6,3.5-3.4,6.9-6.8,10.3-10.3,.7-.7,.5-1.3-.7-1.6,.9-.4,1.4-1.1,1.6-2.2,.7,.2,1.2,.2,1.5,0,.4-.2,.9,.1,1,.5,.3,2.1,1.2,2.8,2.6,2.1h0Z"
												style={{ fill: "#a6bbe7" }}
											/>
											<path
												d="M359.3,261.2l-7.5,4.8c-.8,.5-1.9,.4-2.6-.2-2.6-2.3-5.9-3.7-9.8-4.3-1.7-2.1-3.2-4.7-4.5-7.8-1.6-3.8-4.4-6.4-8.4-7.9-3.5-1.3-7.9-3.5-13.1-6.7-3.8-2-7-4-9.5-6.2-1.7-1.4-5-4.5-10.1-9.3-2.1-2-4.2-3.5-6.3-4.6-2.4-1.2-4.8-2.3-7.1-3.2,4.2-3.1,8-6.8,11.5-11.1,3.8,2.7,7.1,5.9,9.9,9.6,.4,.1,1,.6,1.8,1.5,1,1.1,1.8,.9,2.3-.5-1-2-2.7-4.3-5-6.8-1.5-1.6-3-3.8-4.5-6.6-.8-1.5-1.2-2.8-1.1-4s.4-2.6,.8-4.2c.9-2.9,1.7-5.8,2.5-8.6,.7-2.4,2.3-3.7,4.7-3.9,4.4,5.4,10.5,13.7,18.4,25.2,2.6,3.8,4,7.7,4,11.7-3.8,4.4-5,9.3-3.6,14.8,.1,.3,.3,.6,.6,.6,.7,.1,1.4,0,2-.4,.1-.1,.2-.2,.2-.3,.1-.4,.2-.4,.2,.1,0,.1,.1,.2,.1,0,2.3-4.2,4.3-8.5,5.9-13,.1-.3,.4-.5,.7-.6l4.8-1.1,14,28.7,8.7,14.3h0Z"
												style={{ fill: "#4287ac" }}
											/>
											<path
												d="M525.2,208.3c-1.1,2-.9,3.8,.4,5.5,.3,.4,.2,.9-.1,1.2-2.6,2.2-5.3,4.2-8,6.1-1.5,1-2.1,.3-1.9-2.1,.1-1.1,.5-2,1.1-2.9l5.5-7.1c.8-.4,1.8-.6,3-.7h0Z"
												style={{ fill: "#8eb4e1" }}
											/>
											<path
												d="M459.3,213.2c-.4,2-1,3.9-1.9,5.8-1.4,3-3.2,5.6-5.3,7.8-.2,.2-.4,.5-.5,.9-.5,2.2-1.4,2.2-2.5,.2,4.2-4.3,7.6-9.2,10.2-14.7h0Z"
												style={{ fill: "#f0d7f0" }}
											/>
											<path
												d="M515.9,290.7c-7.7-3.5-15.2-7.5-22.4-12l-18.2-10.5c-.2-.4-.5-.7-.9-.9l-15.7-11c-2.4,.1-4.7,.7-6.8,1.8-.5,.3-1.1,.5-1.7,.5-.9,.1-1.5,.3-1.7,.5-1.5,1.4-3.3,1.9-5.3,1.8-.4,0-.7,0-.9,.2l-3.4,3.4c-4.3,2.6-8.4,4.1-12.4,4.4-3.3,.2-12.6,8.7-14,9-1.5,.6-2.3,0-3.4-.4-1.3-.4-2.2-.8-3.5-1.3s-2.2-.7-3-1.1c3.3-3,20.3-17.9,23.4-21.2,1.7-1.8,2.8-3.9,3.5-6.2,1.3-4.7,2.7-9.4,4.2-14,0-.1,.2-.9,.6-2.5,.4-1.5,1.1-2.9,2-4.2,1.1-1.6,2.2-1.8,3.3-.6,1,1.1,1.5,1,1.5-.4,0-.2-.1-.6-.2-1.1-.3-1.4,0-2.8,1.1-4.2,2.8,2,5.2,4.4,7.2,7.2,1.1,2,2,2,2.5-.2,.1-.3,.2-.6,.5-.9,2.1-2.2,3.9-4.8,5.3-7.8,.9-1.9,1.5-3.8,1.9-5.8,3.2,1.8,6.8,4.1,10.6,6.9,4.8,3.6,10.3,6.4,16.7,8.4,.5,2.7,1.9,3.5,4.1,2.5,.7-.3,1-.5,1.1-.5,3.9-1.5,6.5-2.3,7.8-2.5,1.6-.2,1.8,.3,.6,1.4-3.9,2.6-8,4.2-12.5,5-.7,.1-1.1,.8-.9,1.5,.8,2.7,1.9,4.8,3.2,6.3,.3,1.3,.6,2.1,1.1,2.5l3,4.7,3.5,6.7-1.4,1c-.2,.1-.4,.4-.5,.8-.4,1.4-1.4,1.9-2.8,1.3-4-3.5-8-7.1-11.8-10.8,0,0-1.2-1.3-3.4-3.7-2.5-2.8-5.7-4.7-9.3-5.8-1.8-.6-3.4-1.3-5-2.2-.4-.2-.7-.3-.8-.1-.1,.2,0,.4,.3,.6,1.9,1.5,4.3,2.6,7,3.4,1.7,.5,3.2,1.5,4.5,3l3.7,4.7,2.3,2.7c.2,.2,.4,.4,.8,.5,1.5,.6,2,1.7,1.6,3.4-.3,1.2,0,2.4,.8,3.3,1.7,2.2,3.5,4.3,5.2,6.5,1.8,2.2,3.6,4.3,5.6,6.1,6.9,7,14.1,13.6,21.4,19.9h0Z"
												style={{ fill: "#509dc7" }}
											/>
											<path
												d="M640.5,224.1l-1.5,.8-2.5,.9c1.2-3.4,2.3-6.8,3.5-10.1,.2-.6,.5-1,.9-1.2s.9-.2,1.3,0c.2,.1,.4,.4,.3,.7-.2,.9-.3,1.9-.3,2.8,.1,1.4,0,2.4-.3,3.2-.4,1-.8,2-1.4,2.9Z"
												style={{ fill: "#7fa6db" }}
											/>
											<path
												d="M353.1,245.5c-1.3,0-2.2,.5-2.6,1.6l-14-28.7c-.8-1.2-.9-2.6-.2-4.1,2.4,2.1,4.4,4.5,6,7.3l10.8,23.9Z"
												style={{ fill: "#5d9fcf" }}
											/>
											<path
												d="M630.8,236.9c-.4,2.8-1.4,5.7-3.1,8.7l-2.1,1.2c-.2,.1-.5,.1-.6-.2-1.7-4.3-3.8-8.3-6.3-12.2-1.2-1.8-3.4-4.5-6.7-8.1-2.4-2.6-4.6-5.3-6.7-8.1-.8-1-.6-1.2,.5-.5,8.9,5.6,17.3,12,25,19.2Z"
												style={{ fill: "#5d9fcf" }}
											/>
											<path
												d="M441.9,220.6c-1.1,1.4-1.5,2.9-1.1,4.2,.1,.5,.2,.9,.2,1.1,0,1.4-.5,1.5-1.5,.4-1.1-1.2-2.2-1-3.3,.6-.9,1.3-1.6,2.7-2,4.2-.4,1.6-.6,2.4-.6,2.5-1.5,4.6-2.9,9.3-4.2,14-.7,2.4-1.8,4.4-3.5,6.2-3,3.2-17.1,15.6-20.4,18.6-.8,0-1-.5-.7-1.6,.2-.8,.7-1.5,1.3-2,2.1-1.9,15.1-13,17.2-14.8,2.1-1.9,3.7-3.8,4.5-5.7,1-2.2,1.8-4.7,2.3-7.4,.9-4.6,2.6-9.6,5.2-15.2,.6-.9,1.5-1.5,2.5-1.7,.4-.1,.7-.2,.8-.4,.4-.4,.7-.9,.9-1.5,.2-.6,.5-1,.8-1.1,.6-.3,1-.4,1.6-.4h0Z"
												style={{ fill: "#e1c7f1" }}
											/>
											<path
												d="M458.8,243.5c.6,.8,.6,1.1,0,.8-.1-.1-.2-.1-.4-.3-1.9-2-3.4-3.9-4.5-5.7-1-1.7-2.2-3-3.6-3.8-2.4-1.4-4.7-2.9-6.9-4.6-.7-.5-.8-.8-.4-.9,.2,0,.4,0,.6,.1,2.4,1.4,4.8,2.7,7.1,4.2,1.2,.7,2.2,1.7,3,3,1.6,2.5,3.3,4.9,5.1,7.2h0Z"
												style={{ fill: "#a6a8ce" }}
											/>
											<path
												d="M553.5,228.7c.8,1.4,.7,2.5-.5,3.3-.6,.4-1.5,.6-2.7,.7-7.2,.3-14.4,1-21.5,1.9-.7,.1-1.1,.9-.6,1.5,.4,.6,.6,1.1,.7,1.8,0,.3-.1,.6-.4,.7-5.5,2.1-9.9,3.2-13.3,3.1-8.5-.2-16.9,0-25.3,.8-1.3-1.5-2.4-3.6-3.2-6.3-.2-.7,.2-1.4,.9-1.5,4.5-.7,8.7-2.4,12.5-5-.8,1.4-.3,2.2,1.3,2.3,.7,0,1.3,.2,1.9,.6,.3,.2,.6,.3,.9,.3l12.9-.3,36.4-3.9h0Z"
												style={{ fill: "#c5c2ed" }}
											/>
											<path
												d="M624.5,250.6c-1.2,.5-1.9,.3-2.2-.7-.1-.4-.3-.7-.4-.9-1.5-1.5-3.2-2.2-5.1-2.2-3.5,.1-6.3,.1-8.5,.1-1.8,0-4.7,.1-8.5,.3-2.9,.1-5.9,.1-9-.1-5.6-.5-12-.8-19.2-.9-1.4,0-3.8-.3-7-.7-2-.3-4.3-.5-7-.6-7.1-.3-14.1-.5-21.2-.6-.3,0-.6-.1-.9-.2-1-.5-1.9-.6-3-.4-1.2,.2-1.8,.3-1.9,.3-8.4,.6-16.7,.7-25.1,.3-4.8-.2-9.6,0-14.4,.7l3,4.7,3.5,6.7,2,3.1,4,7.5c.2,.3,.4,.5,.7,.5,1.6,.4,3.1,.7,4.7,1.1s3.3,.5,5.2,.4c4-.2,7.3,0,10.1,.7,2.2,.5,4.3,.8,6.2,.9,3.8,.1,5.8,.2,6.2,.2,2.3,.2,4.6,.3,7,.3,2.2,0,4.3,.2,6.4,.6,3.6,.8,7.2,1.2,10.9,1.5,.3,0,.5,.1,.9,.3,.6,.4,1.1,.4,1.7,0,.3-.2,.6-.2,.9-.2l7.2,.6c.2,0,.3,0,.5-.2l.2-.2c.2-.2,.5-.3,.9-.4,4.3-.4,8.2,.1,11.6,1.2,4.6,1.6,8.9,2.5,12.9,2.6,2.4,.1,3.7,.1,3.7,.1,4.2,.3,8,.8,11.4,1.4,1.4,.2,1.7,1,.9,2.1l-4.8,7.3c.8,0,1.4-.2,2-.6,.3-.2,.4-.1,.4,.1-.1,.9-.4,1.7-.9,2.5,.5,0,1-.1,1.4-.2l.3-1.2c-.7-1.1-.7-2.1-.2-2.9,.9-1.5,2.2-3.2,3.8-5,1.2-1.3,1.9-2.6,2.3-3.9,.5-1.7,.8-3.4,1-5.1l2.1-13.9c-.1-1.3,.2-2.3,.9-3.1,.7-1.2,1.6-2.5,2.4-3.9h0Zm-9.1,6.2c-.7-.1-1.5-.2-2.1-.3,.7,0,1.4,.1,2.1,.3Z"
												style={{ fill: "#8eb4e1" }}
											/>
											<path
												d="M613.3,256.5c.7,.1,1.4,.1,2.1,.3-.7-.2-1.4-.3-2.1-.3Z"
												style={{ fill: "#8eb4e1" }}
											/>
											<path
												d="M613.3,256.5c.7,.1,1.4,.1,2.1,.3-.7-.2-1.4-.3-2.1-.3Z"
												style={{ fill: "#8eb4e1" }}
											/>
											<path
												d="M471.5,266.8c-.8,.7-1.7,.9-2.6,.5-.1,0-.4-.1-.9-.2l-2.5-.3c-.3,0-.6,.1-.7,.3-1.5,2.7-3.7,4.8-6.6,6.3-.4,.2-.9,.3-1.4,.2-5.3-.8-9.9-.6-13.9,.3-.3,.1-.6,.1-1,0-4.4-1.4-8.8-1.7-13.3-1-.3,0-.5,.2-.8,.5-.7,.7-1.3,.4-1.7-.9,4.9-1.7,9.2-4.3,12.8-8l3.4-3.4c.2-.2,.5-.2,.9-.2,2,.2,3.8-.4,5.3-1.8,.3-.2,.9-.4,1.7-.5,.6-.1,1.2-.3,1.7-.6,2.1-1.1,4.4-1.8,6.8-1.8,3.7,4.3,7.9,7.8,12.8,10.6h0Z"
												style={{ fill: "#54a2cd" }}
											/>
											<path
												d="M438.9,264.5c-3.6,3.7-7.9,6.4-12.8,8-.3,1.2-1,1.9-2.1,2.1-.8,.1-2.2,.5-4.2,1.2l-.3-6.2c1.4-.3,3.7-.5,7-.8,4-.3,8.1-1.7,12.4-4.3h0Z"
												style={{ fill: "#b3c1ed" }}
											/>
											<path
												d="M613.5,280.5l-4.8,7.3c-5.5,3.4-11.1,4-17,1.7-1.2-.5-2.2-.9-2.9-1.1-1-.3-2-.6-2.9-1-2.9-1.1-5.6-.7-8.1,1-5.2,3.6-10,7.6-14.5,12.1-1.4,1.4-3.3,2.6-5.6,3.6-6.9,2.9-13.3,5.4-19.2,7.4-4.4,1.5-8.2,2.2-11.4,2.2-6.1-.1-11.9-1.7-17.4-4.9-.9-.5-1.8-.9-2.7-1.2-.3-.2-.6-.4-1-.3,0-.5-.5-.5-1.4-.2-.6,.2-1.1,.5-1.6,.8-9.2,6.8-18.4,12.6-27.6,17.5-.4,.2-.8,.2-1.1,.1-5.9-1.9-11.3-4.2-16.4-7.1-4.7-3.1-9.9-4.8-15.6-5.3-1.3-.1-2.4-.6-3.4-1.4-3-2.6-5.9-5.3-8.8-8,0,0-.7-.7-1.9-2-1.6-1.7-3.2-2.6-4.8-2.7-6.8-.5-12.6-1.7-17.2-3.6-4.3-1.7-9.1-4.5-14.5-8.3-1-.7-2.1-1.3-3.4-1.7-1.2-.4-2.4-.9-3.6-1.4-.6-.3-1.3-.5-2-.6-4.1-.9-7-2.5-8.5-4.9-3.1-4.7-6.5-9.2-10.1-13.5-.1-.1-.5-.7-1.3-1.9-.8-1.2-2-1.8-3.4-1.8l-8.9-14.1c.4-1.1,1.3-1.6,2.6-1.6,1.9,2.5,3.6,5.1,5.2,7.8,1.4,2.5,3.4,4.3,6,5.5,15.2,7,30.7,13.4,46.5,19.2,3.2,.1,6.2-.7,9-2.2,2-.7,3.4-1.1,4.2-1.2,1.1-.2,1.8-.9,2.1-2.1,.5,1.3,1,1.6,1.7,.9,.3-.2,.5-.4,.8-.5,4.5-.7,9-.4,13.3,1,.3,.1,.6,.1,1,0,3.9-1,8.6-1.1,13.9-.3,.5,.1,.9,0,1.4-.2,2.9-1.5,5.1-3.6,6.6-6.3,.1-.2,.4-.3,.7-.3l2.5,.3c.5,.1,.8,.1,.9,.2,.9,.4,1.8,.2,2.6-.5,1.1,1.1,2.4,1.6,3.8,1.4l18.2,10.5c7.2,4.5,14.7,8.5,22.4,12-7.4-6.4-14.6-12.9-21.6-19.6-2-1.9-3.8-3.9-5.6-6.1-1.7-2.2-3.4-4.3-5.2-6.5-.8-1-1-2.1-.8-3.3,.4-1.7-.2-2.8-1.6-3.4-.4-.1-.7-.3-.8-.5l-2.3-2.7-3.7-4.7c3.7,4.1,8.2,8.1,13.5,12.2,2.1,1.6,3.7,2.7,5,3.4,1.5,.5,2.4,.1,2.8-1.3,.1-.4,.3-.6,.5-.8l1.4-1,2,3.1,4,7.5c.2,.3,.4,.5,.7,.5,1.6,.4,3.1,.7,4.7,1.1s3.3,.5,5.2,.4c4-.2,7.3,0,10.1,.7,2.2,.5,4.3,.8,6.2,.9,3.8,.1,5.8,.2,6.2,.2,2.3,.2,4.6,.3,7,.3,2.2,0,4.3,.2,6.4,.6,3.6,.8,7.2,1.2,10.9,1.5,.3,0,.5,.1,.9,.3,.6,.4,1.1,.4,1.7,0,.3-.2,.6-.2,.9-.2l7.2,.6c.2,0,.3,0,.5-.2l.2-.2c.2-.2,.5-.3,.9-.4,4.3-.4,8.2,.1,11.6,1.2,4.6,1.6,8.9,2.5,12.9,2.6,2.4,.1,3.7,.1,3.7,.1,4.2,.3,8,.8,11.4,1.4,1.2,.2,1.5,.9,.7,2h0Z"
												style={{ fill: "#269cc7" }}
											/>
											<path
												d="M492.8,259.4c-1.2-.7-2.9-1.8-5-3.4-5.3-4.1-9.8-8.1-13.5-12.2-1.3-1.5-2.9-2.5-4.5-3-2.7-.8-5-1.9-7-3.4-.3-.2-.4-.5-.3-.6s.3-.1,.8,.1c1.6,.9,3.2,1.7,5,2.2,3.7,1.1,6.8,3.1,9.3,5.8,2.2,2.4,3.4,3.7,3.4,3.7,3.8,3.7,7.7,7.3,11.8,10.8h0Z"
												style={{ fill: "#c5c2ed" }}
											/>
											<path
												d="M475.3,268.2c-1.4,.2-2.7-.3-3.8-1.4-4.8-2.8-9.1-6.3-12.8-10.6l15.7,11.1c.3,.2,.6,.5,.9,.9h0Z"
												style={{ fill: "#7fa6db" }}
											/>
										</g>
										<g id="mid-clouds">
											<g id="mid-clouds-2-3" data-name="mid-clouds-2">
												<path
													d="M567.2,254.7c-1.1-.2-2,.1-2.7,.9,.1-.4,.1-.7-.1-1-.1-.2-.4-.3-.8-.3-4.7-.2-9.2,.2-13.7,1.2-2.8,.6-5.3,2-7.4,4.1-2.9,3-5.5,6.1-7.9,9.6-2.5,3.7-5.4,3.8-8.4,.5s-6.7-4-11-2.2c-2.1,.9-4.2,1.8-6.3,2.6-2.7,1.1-2.9,.7-.7-1.1,3.6-2.9,7.7-4.2,12.3-4.2,.4,0,.8-.1,1-.3,.2-.2,.2-.4,0-.6-.1-.2-.4-.2-.8-.2-6.3,.3-12.3,2.5-18,6.7-2.8,2.1-4.2,4.5-4.2,7.4-.6-.5-1.1-1.1-1.4-1.8,3.5-7.4,9.4-12,17.7-13.9,6.3-1.4,11.1,.5,14.3,5.7,1.2,2,2.3,1.9,3.5-.1,5.8-10.3,14.8-15.4,26.8-15.2,3.2,.1,5.8,.8,7.8,2.2h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M564.5,255.6c-4.7,1.7-7.5,2.9-8.5,3.7-1.4,1.1-1.4,1.7,.1,1.6,.3,0,.7-.1,1.1-.3,3-1.4,6.2-2.1,9.5-2.3,.5,0,1,.3,1.3,.8,2.3,3.5,5.6,4.5,10,2.8,2.6-1,5.5-1.8,8.7-2.4,.8-.1,1.5,.4,1.6,1.2,.2,3,1.1,5.2,2.6,6.7,.4,.4,1,.6,1.6,.5l13.2-2.1c1.5,3.8,4,6.7,7.5,8.7,.8,.5,2.2,.9,4.1,1.1,1.5,.2,2.8,.6,4.2,1.2-.5,2.3-1.8,3.5-3.7,3.5-2.2,0-4.5,.1-7,.3-5.3,2.7-11,4-17,3.8-4.1-.2-7.4,0-9.8,.4-9.6,1.5-18.7,2.1-27.2,1.8-13.2-.5-25.4,.4-36.6,2.6-6.4-1.7-12.1-.7-17.2,2.9-2.7,.7-5.4,1.5-8.1,2.3-2.4,.8-5.2,1.2-8.2,1.2-4.6,0-9.1,.7-13.5,2-1.9,.6-3.9,.9-6,.9s-4.2,.2-6.2,.6c-3.8,.7-6.8,1-9.1,1-6.1,0-12.3,.6-18.5,1.7-5.3,10.8-12.8,13.3-22.6,7.6,0,0-1-.7-2.8-2.1-2.5-1.9-5.6-2.3-9.2-1.4-7.2,1.9-13.5,4.3-18.6,7.1-7.8,4.2-14.9,3.6-21.2-1.8-.5-.4-.7-.9-.8-1.5-.6-4.8,1.3-8.4,5.9-10.8,3.3-1.7,6.7-2.6,10.2-2.7,7.3,2.4,14.2,1.9,20.7-1.2,2.4-1.2,4.6-1.9,6.7-2,7.5-.5,15.2-1.3,23.3-2.2,.6-.1,1.2-.1,1.8,0,5.2,.4,9.5-.2,12.8-1.6,.6-.2,1.1-.4,1.7-.3,3.5,.3,7,.2,10.4-.2,2-.2,4.8-.3,8.3-.3,2.9,0,5.7-.4,8.4-1.3,1.2-.9,2-1.9,2.2-3.2,2.6-.8,5-.7,7.4,.5,.5,.2,1,.1,1.3-.3,1.3-1.8,2.7-3.5,4.3-5,1.8-1.7,3.7-2.5,5.8-2.5,2.7,0,5.2,.9,7.6,2.6,.5,.3,.9,.6,1.2,.7,2.2,.9,2.3,.2,.3-2.1,0-2.9,1.5-5.3,4.2-7.4,5.6-4.2,11.6-6.4,18-6.7,.4,0,.6,0,.8,.2s.1,.4,0,.6c-.2,.2-.5,.3-1,.3-4.6,0-8.7,1.3-12.3,4.2-2.3,1.8-2,2.2,.7,1.1,2.1-.9,4.2-1.7,6.3-2.6,4.3-1.8,8-1.1,11,2.2,3,3.4,5.9,3.2,8.4-.5,2.4-3.4,5-6.6,7.9-9.6,2.1-2.1,4.5-3.5,7.4-4.1,4.5-1,9.1-1.4,13.7-1.2,.4,0,.7,.1,.8,.3,.2,.3,.2,.6,.1,1h0Z"
													style={{ fill: "#83c9e2" }}
												/>
												<path
													d="M567.2,254.7c2.2,1,3.8,2.5,5,4.5,1.2,2.1,2.8,2.3,4.5,.6,3.3-3.2,7.5-4.1,12.5-2.6,1.7,.5,2.9,2.1,2.8,3.9-.3,4.7,1,5.9,3.8,3.4,2.9-2.5,6.2-2.1,9.9,1.2l-13.2,2.1c-.6,.1-1.2-.1-1.6-.5-1.5-1.5-2.4-3.7-2.6-6.7,0-.8-.8-1.3-1.6-1.2-3.2,.5-6.1,1.3-8.7,2.4-4.3,1.7-7.7,.7-10-2.8-.3-.5-.8-.8-1.3-.8-3.3,.1-6.5,.9-9.5,2.3-.4,.2-.8,.3-1.1,.3-1.5,.1-1.5-.4-.1-1.6,.9-.8,3.8-2,8.5-3.7,.6-.7,1.5-1,2.7-.8h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M425.9,274.7c-.1,1.8-.7,2.2-1.7,1.5-.4-.3-.7-.7-1-1.3-1.2-2.7-3-4.6-5.4-5.7-1.8-.9-4.3-1.1-7.4-.8-3,.3-5.7,.8-8,1.4-4.5,1.2-7.2,4.1-8.1,8.7-.1,.5-.4,1.1-.8,1.5-2,2.1-2.2,4.4-.5,7-.7,1-1.4,.9-1.8-.4-3.5-2.7-3.5-5-.1-6.8,.6-.3,1-.7,1.2-1.2,.4-1,.6-2,.5-3,.9-2.9,2.6-5.2,5.4-6.8,11.4-6.8,20.6-4.8,27.7,5.9h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M425.9,274.7c3.1-3,6.7-4,10.8-3.2,5.2,1.1,10,3.7,14.5,7.8-3.4-1.8-6.8-2.3-10.2-1.5-2.6,.6-4.3,1-5.1,1.1-1.8,.3-3.5,.7-5.1,1.3-3.1,1.1-5.6,1.6-7.5,1.8-3.4,.2-6.8,.4-10.1,.5-1.4,0-4.4,.4-8.8,1.1-3,.5-6,.5-9.1,.1-.6-.1-1.1,.2-1.3,.7l-1,2.6c-1.7-2.6-1.5-4.9,.5-7,.4-.4,.7-1,.8-1.5,.9-4.6,3.6-7.5,8.1-8.7,2.3-.6,4.9-1.1,8-1.4,3.1-.4,5.6-.1,7.4,.8,2.5,1.1,4.3,3.1,5.4,5.7,.3,.6,.6,1.1,1,1.3,1,.7,1.6,.2,1.7-1.5h0Z"
													style={{ fill: "#c2dfe1" }}
												/>
												<path
													d="M497.1,276c.3,.7,.7,1.3,1.4,1.8,2,2.3,2,3-.3,2.1-.4-.1-.8-.4-1.2-.7-2.4-1.8-4.9-2.6-7.6-2.6-2.1,0-4,.9-5.8,2.5-1.6,1.5-3,3.2-4.3,5-.3,.4-.8,.5-1.3,.3-2.3-1.2-4.8-1.3-7.4-.5,.6-2.5,2.6-3.6,6.2-3.4,.6,0,1.1-.2,1.4-.7,4.7-6.8,10.6-8,17.7-3.5,.4,.2,.8,.1,1.2-.3h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M451.2,279.3c1.1,.4,2,1.2,2.7,2.4,1.2,2,2.8,2.3,4.7,1,.6-.4,1.1-.6,1.6-.5,3.2,.2,5.9,1.8,8.1,4.9-2.7,.9-5.5,1.4-8.4,1.3-3.5,0-6.3,0-8.3,.3-3.5,.4-6.9,.5-10.4,.2-.6,0-1.2,0-1.7,.3-3.3,1.5-7.5,2-12.8,1.6h-1.8c-8.1,.9-15.9,1.7-23.3,2.2-2,.2-4.3,.8-6.7,2-6.5,3.2-13.4,3.6-20.7,1.2,.1-1.1,.4-1.8,1-1.8,0,.5,.1,.7,.3,.8,.2,.1,.6-.1,.9-.5,3.5-4.1,8-5.7,13.5-4.8,3,.5,2.9-.2-.2-2.1,1.1,.2,1.6-.3,1.4-1.4,.5,1.3,1.1,1.5,1.8,.4l1-2.6c.2-.5,.7-.8,1.3-.7,3,.4,6.1,.3,9.1-.1,4.5-.7,7.4-1.1,8.8-1.1,3.4-.1,6.8-.3,10.1-.5,1.9-.1,4.4-.7,7.5-1.8,1.6-.6,3.3-1,5.1-1.3,.7-.1,2.4-.5,5.1-1.1,3.5-.6,6.9-.1,10.3,1.7h0Z"
													style={{ fill: "#a1d0de" }}
												/>
												<path
													d="M610.7,280.6c2,4,1.3,6.5-2,7.7-6.3,2.2-13.1,2.4-20.3,.7-.5-.1-1,.1-1.1,.6-1.3,3.7-4.3,4-9.2,.8-2.8-1.8-5.2-1.4-7.1,1.3-1,1.5-2.5,2.9-4.5,4.4-1.9,1.5-3.8,2.4-5.5,2.9-4.3,1.1-8-.3-10.8-4.2-.3-.4-.8-.4-1.2-.1-4.7,4.6-9.9,5.2-15.5,1.9-6.5-3.9-10.9-6.4-13.3-7.4,11.2-2.3,23.5-3.2,36.6-2.6,8.5,.3,17.5-.3,27.2-1.8,2.4-.4,5.7-.5,9.8-.4,5.9,.2,11.6-1.1,16.9-3.8h0Z"
													style={{ fill: "#6bc2e4" }}
												/>
												<path
													d="M389.7,287.9c3.1,1.9,3.2,2.6,.2,2.1-5.4-.9-9.9,.7-13.5,4.8-.3,.4-.7,.6-.9,.5-.2-.1-.3-.4-.3-.8,2.8-6.4,7.7-8.5,14.5-6.6h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M503,292.1c-1.8,4.8-4.1,8.3-6.8,10.6-8.6,7.4-16.4,6.4-23.3-3-.5-.7-1.6-.8-2.2-.1-4,4.2-9,6.8-15.1,7.6-7.2,1-14.7-.8-22.3-5.5,6.2-1.1,12.4-1.7,18.5-1.7,2.3,0,5.3-.4,9.1-1,2-.4,4.1-.5,6.2-.6,2.1,0,4.1-.3,6-.9,4.4-1.3,8.9-1.9,13.5-2,3,0,5.8-.4,8.2-1.2,2.7-.7,5.4-1.5,8.2-2.2h0Z"
													style={{ fill: "#6bc2e4" }}
												/>
											</g>
											<g id="mid-clouds-1-3" data-name="mid-clouds-1">
												<path
													d="M451,275.3c11.8-2.6,21.5,.6,29.1,9.5,1.5,1.7,2.6,1.5,3.4-.6,2.2-5.8,6.5-8.6,12.9-8.5,8.5,.1,15.1,3.5,19.9,10-.2,.7-.5,1.4-1,2-.6-2.8-2.4-4.9-5.5-6.4-6.3-3-12.6-3.9-18.9-2.9-.4,.1-.6,.2-.7,.4-.1,.2-.1,.4,.2,.6,.2,.2,.6,.2,1,.1,4.5-1,8.8-.5,12.8,1.6,2.5,1.3,2.4,1.7-.5,1.2-2.2-.4-4.5-.8-6.7-1.3-4.6-.9-8,.6-10.4,4.4-2.4,3.9-5.2,4.3-8.4,1.2-3-2.9-6.1-5.5-9.5-7.8-2.4-1.6-5.1-2.5-8-2.5-4.6-.1-9.1,.5-13.7,1.6-.4,.1-.6,.2-.7,.5s-.1,.6,.1,1c-.8-.6-1.7-.7-2.8-.3,1.9-1.9,4.3-3.1,7.4-3.8h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M446.5,278.4c.1-.2,.4-.4,.7-.5,4.5-1.1,9.1-1.7,13.7-1.6,2.9,0,5.6,.9,8,2.5,3.4,2.3,6.6,4.9,9.5,7.8,3.2,3.1,6,2.7,8.4-1.2,2.4-3.9,5.8-5.3,10.4-4.4,2.2,.4,4.5,.9,6.7,1.3,2.9,.5,3,.1,.5-1.2-4-2.1-8.3-2.6-12.8-1.6-.4,.1-.8,0-1-.1-.2-.2-.3-.4-.2-.6,.1-.2,.4-.3,.7-.4,6.3-1,12.6,0,18.9,2.9,3.1,1.5,4.9,3.6,5.5,6.4-1.6,2.7-1.4,3.4,.7,2,.3-.2,.7-.5,1.1-.9,2-2.2,4.4-3.6,7-4.1,2-.4,4.1,0,6.2,1.3,1.8,1.1,3.6,2.5,5.2,4,.3,.3,.9,.3,1.3,0,2-1.6,4.4-2.3,7.1-2,.5,1.2,1.4,2.1,2.8,2.7,2.8,.4,5.6,.2,8.5-.4,3.5-.8,6.2-1.2,8.2-1.4,3.5-.3,6.9-.9,10.3-1.9,.6-.2,1.2-.2,1.8-.1,3.5,.8,7.8,.4,12.8-1,.6-.2,1.2-.3,1.8-.3,8.1-.7,15.9-1.6,23.3-2.6,2-.3,4.3,0,6.9,.6,6.9,1.8,13.8,.8,20.5-3,3.5-.6,7-.4,10.5,.6,4.9,1.4,7.5,4.6,7.8,9.4,0,.6-.2,1.1-.5,1.6-5.2,6.5-12,8.6-20.5,6-5.6-1.7-12.2-2.8-19.6-3.1-3.7-.2-6.6,.9-8.8,3.2-1.5,1.7-2.3,2.5-2.4,2.6-8.5,7.5-16.4,6.5-23.5-2.9-6.3,.2-12.5,.9-18.5,2.1-2.2,.5-5.3,.7-9.1,.8-2.1,0-4.1,.3-6.2,.7-2.1,.4-4.1,.6-6.1,.4-4.5-.4-9.1-.1-13.6,.8-3,.6-5.8,.8-8.3,.5-2.8-.3-5.6-.5-8.4-.6-5.6-2.6-11.4-2.4-17.4,.6-11.5,0-23.6,1.6-36.4,4.8-8.3,2-17.2,3.3-27,3.7-2.5,.1-5.7,.6-9.7,1.6-5.8,1.4-11.6,1.3-17.3-.2-2.5,.3-4.8,.7-6.9,1.2-1.9,.4-3.3-.5-4.3-2.7,1.2-.9,2.5-1.6,3.9-2.1,1.8-.6,3.1-1.2,3.8-1.9,3-2.7,5-6.1,5.8-10.1l13.3-.6c.6,0,1.1-.3,1.5-.8,1.2-1.8,1.6-4.1,1.3-7.1-.1-.8,.5-1.5,1.3-1.5,3.2-.1,6.2,.1,9,.6,4.6,.8,7.6-.8,9.2-4.8,.2-.5,.7-.9,1.2-1,3.3-.5,6.5-.4,9.8,.3,.4,.1,.8,.1,1.1,.1,1.5-.2,1.4-.7-.2-1.6-1.1-.5-4-1.2-9-1.9-.4-.3-.4-.6-.3-.9h0Z"
													style={{ fill: "#83c9e2" }}
												/>
												<path
													d="M446.6,279.4c4.9,.7,7.9,1.4,9,1.9,1.6,.8,1.6,1.4,.2,1.6-.3,0-.7,0-1.1-.1-3.2-.7-6.5-.8-9.8-.3-.5,.1-1,.5-1.2,1-1.6,3.9-4.7,5.5-9.2,4.8-2.8-.5-5.8-.7-9-.6-.8,0-1.4,.7-1.3,1.5,.3,3-.1,5.3-1.3,7.1-.3,.5-.9,.8-1.5,.8l-13.3,.6c3-4,6.2-5.1,9.5-3.2,3.2,1.9,4.2,.5,3.1-4.1-.4-1.7,.4-3.5,2-4.4,4.6-2.5,8.9-2.5,12.7,0,2.1,1.4,3.5,.8,4.4-1.5,.8-2.2,2.1-4,4.1-5.4,1-.5,1.9-.4,2.7,.3h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M612.2,258.5c3,1,5.1,2.9,6.5,5.6,.1,1.1,.5,2,1.1,2.9,.3,.4,.8,.8,1.4,.9,3.7,1.1,4,3.3,1.2,6.7-.2,1.4-.8,1.6-1.7,.8,1.2-2.9,.6-5.1-1.8-6.7-.5-.4-.8-.8-1.1-1.3-1.7-4.3-4.9-6.6-9.5-6.9-2.3-.1-5-.1-8.1,.2-3.1,.3-5.5,1-7.1,2.2-2.2,1.6-3.6,3.9-4.3,6.7-.2,.7-.4,1.2-.7,1.5-.9,1-1.6,.6-2-1.1,4.9-11.9,13.6-15.7,26.1-11.5h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M588.1,271.1c.3-.3,.5-.8,.7-1.5,.6-2.9,2.1-5.1,4.3-6.7,1.6-1.2,4-2,7.1-2.2,3.1-.3,5.7-.4,8.1-.2,4.6,.3,7.8,2.6,9.5,6.9,.2,.5,.6,1,1.1,1.3,2.4,1.6,3,3.9,1.8,6.7l-1.5-2.4c-.3-.4-.8-.6-1.4-.4-2.9,1-5.9,1.6-8.9,1.7-4.5,.2-7.5,.5-8.9,.7-3.3,.6-6.7,1.1-10,1.6-1.9,.3-4.5,.2-7.7-.2-1.7-.2-3.5-.3-5.2-.2-.8,0-2.5,0-5.2-.1-3.5-.1-6.7,1.1-9.7,3.6,3.6-4.9,7.9-8.4,12.8-10.5,3.9-1.7,7.6-1.4,11.2,.9,.3,1.6,1,2,1.9,1h0Z"
													style={{ fill: "#c2dfe1" }}
												/>
												<path
													d="M517.6,285.8c6.1-5.9,12.1-5.9,18-.2,.4,.4,1,.5,1.5,.4,3.5-1,5.7-.3,6.7,2-2.7-.3-5.1,.4-7.1,2-.4,.3-1,.3-1.3,0-1.6-1.5-3.3-2.8-5.2-4-2.1-1.3-4.1-1.7-6.2-1.3-2.7,.5-5,1.9-7,4.1-.4,.4-.8,.7-1.1,.9-2,1.3-2.3,.6-.7-2,.5-.6,.8-1.3,1-2,.7,.3,1.1,.4,1.4,.1h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M571.9,276.1c2.7,.1,4.4,.1,5.2,.1,1.8-.1,3.5,0,5.2,.2,3.2,.4,5.8,.5,7.7,.2,3.3-.5,6.7-1,10-1.6,1.4-.2,4.4-.5,8.9-.7,3-.2,6-.7,8.9-1.7,.5-.2,1.1,0,1.4,.4l1.5,2.4c.9,.8,1.5,.6,1.7-.8,0,1.1,.6,1.5,1.7,1.1-2.7,2.5-2.6,3.2,.2,2.1,5.2-2,9.9-1.3,14.1,1.9,.4,.3,.8,.4,1,.3s.3-.4,.2-.9c.6-.1,1,.5,1.3,1.6-6.7,3.8-13.6,4.8-20.5,3-2.6-.7-4.9-.9-6.9-.6-7.4,1-15.2,1.8-23.3,2.6-.6,.1-1.2,.2-1.8,.3-5,1.4-9.3,1.8-12.8,1-.6-.1-1.2-.1-1.8,.1-3.4,1-6.8,1.6-10.3,1.9-2,.2-4.8,.6-8.2,1.4-2.8,.6-5.7,.8-8.5,.4,1.6-3.5,4-5.6,7.1-6.5,.5-.1,1.1,0,1.7,.2,2.1,.9,3.6,.2,4.4-1.9,.5-1.3,1.2-2.2,2.2-2.9,2.9-2.6,6.2-3.8,9.7-3.6h0Z"
													style={{ fill: "#a1d0de" }}
												/>
												<path
													d="M423.1,313.5c4-1,7.2-1.5,9.7-1.6,9.7-.5,18.7-1.7,27-3.7,12.8-3.2,25-4.8,36.4-4.8-2.1,1.5-6,4.8-11.7,9.9-4.9,4.4-10.1,4.9-15.6,1.3-.4-.2-.9-.1-1.1,.3-2.1,4.4-5.4,6.5-9.9,6.3-1.8-.1-3.8-.6-6-1.7s-3.9-2.2-5.2-3.4c-2.4-2.2-4.8-2.2-7.2,.2-4.2,4.1-7.2,4.4-9.2,1-.2-.4-.8-.6-1.2-.4-6.8,3.2-13.5,4.3-20.1,3.5-3.5-.5-4.6-2.8-3.4-7.1,6,1.6,11.7,1.7,17.5,.2h0Z"
													style={{ fill: "#6bc2e4" }}
												/>
												<path
													d="M639.4,279.1c.1,.4,.1,.7-.2,.9-.2,.1-.6,0-1-.3-4.2-3.3-8.9-3.9-14.1-1.9-2.8,1.1-2.9,.4-.2-2.1,6.4-3.3,11.6-2.2,15.5,3.4h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M522,303.3c2.5,.3,5.3,.1,8.3-.5,4.5-.9,9-1.2,13.6-.8,2,.2,4,0,6.1-.4s4.1-.7,6.2-.7c3.8-.1,6.8-.4,9.1-.8,6-1.2,12.2-1.9,18.5-2.1-6.7,6.2-13.7,9.5-20.9,9.9-6.2,.4-11.6-1.1-16.2-4.5-.7-.5-1.7-.2-2.1,.6-5,10.6-12.4,13.2-22.3,7.7-3.1-1.7-6-4.8-8.6-9,2.7,.1,5.5,.3,8.3,.6Z"
													style={{ fill: "#6bc2e4" }}
												/>
											</g>
										</g>
										<g
											id="rocket"
											style={{ animation: "rocketAnimation 8s ease-in" }}
										>
											<path
												d="M180.9,403.2c-1.9,1.9-4.2,3-6.8,3.2,.5-2.6,.6-5.1,.2-7.6,.4-.1,1.6-.5,1.9-1,1.2,2.2,2.7,4,4.7,5.4Z"
												style={{ fill: "#ec6757" }}
											/>
											<path
												d="M175.8,369.9c.6,1.7,1,4.2,1.2,6,5.5,5.4,4.4,14.6,5.1,21.6,0,1.2,0,4.4-.2,5.5-1.6,2.8-6.2-4-6.3-6,0-.3-1.3,.5-1.4,.5h-.1c0-.9,.3-1.7,.4-2.7-1.8-1.3-5-1.3-6.8-.1,0,1,.3,1.8,.4,2.7h0c-.1,0-1.5-.7-1.6-.4,.3,2-5.8,9.8-6.3,5.4,.2-8.5-1.4-19.9,4.9-26.4,.7-7.7,6.3-20,10.7-6.1Zm-7.1-.4c.1,0,.3,0,.3-.1,1.8-.5,3.9-.4,5.6,.6-.4-2.1-1.7-4.2-3.2-5.8-.8-.9-6,7.8-2.7,5.3Zm.2,.9c-.3,0-.5,.1-.5,.2-3.6,2.7-1.7,9.3-2.2,13.5,2.9-1.6,6.9-1.6,9.8-.1-.3-5.4,1.8-16.4-7.1-13.6Zm-5.5,9.6c-2.1,7-2.7,15.3-2,22.3,1.8-1.9,3.1-4.2,3.7-6.8-.4-2.7,1.4-23.4-1.7-15.5Zm15.3,19.4c4.7,10.1,1.9-19.9-1.5-21.8,.4,6.9-1.7,15.3,1.5,21.8Zm-8.1-15.5c-1.6,.1-3.3,.4-4.5,1.5,.1,0-.2,9.1,.1,8.9,2.8-2.3,6.9-2.1,9.7,0v-8.8c-1.2-1.4-3.5-1.7-5.3-1.6Z"
												style={{ fill: "#20264c" }}
											/>
											<path
												d="M171.4,364.3c.8,1.7,1.4,3.4,1.8,5.2-.9-.2-1.7-.3-2.5-.3l.2-3.8c-1.4,.8-1.6,2.7-2.2,4.1-3.3,2.5,1.9-6.2,2.7-5.2Z"
												style={{ fill: "#8cbda8" }}
											/>
											<path
												d="M171.4,364.3c.9,.8,5.1,7.3,1.8,5.2-.4-1.8-1-3.5-1.8-5.2Z"
												style={{ fill: "#6e9c87" }}
											/>
											<path
												d="M170.9,365.4c-.9,1.2-.8,3.6-2.2,4.1,.6-1.4,.9-3.4,2.2-4.1Z"
												style={{ fill: "#f5f6f0" }}
											/>
											<path
												d="M170.9,365.4l-.2,3.8-1.7,.3c1-1,1.1-2.9,1.9-4.1Z"
												style={{ fill: "#b3dbc5" }}
											/>
											<path
												d="M170.7,370.1c0,1.5,0,2.9-.1,4.3-3.4,.7-3.2,5.3,.1,5.9v2.6c-.8,.1-1.6,.2-2.3,.4,.5-.1,.2-5.2-.6-4.2-.1-1.5-.1-2.9,0-4.4,1-.6,.7-3,1.2-4.2,.4-.3,1-.4,1.7-.4Z"
												style={{ fill: "#badec8" }}
											/>
											<path
												d="M170.7,370.1c1.1-.1,2.1,.1,3,.5,.7,4.3,.7,8.4,.4,12.7-1.1-.3-2.2-.4-3.4-.4v-2.6c4.6,.2,4.1-6.5-.1-5.9,.1-1.4,.1-2.9,.1-4.3Z"
												style={{ fill: "#8cbda8" }}
											/>
											<path
												d="M168.9,370.4c-.5,1.2-.1,3.6-1.2,4.2,.4-1.2-.1-3.6,1.2-4.2Z"
												style={{ fill: "#f5f6f0" }}
											/>
											<path
												d="M173.6,370.6c3.6,1.9,1.9,9.8,2.3,13.5-.6,0-1.3-.7-1.9-.8,.3-4.3,.4-8.4-.4-12.7Z"
												style={{ fill: "#6e9c87" }}
											/>
											<path
												d="M168.4,370.6c-1,4.1-1,8.8-.2,12.7-.7,.2-1.5,.7-2,.9,.5-4.2-1.5-10.8,2.2-13.6Z"
												style={{ fill: "#8cbda8" }}
											/>
											<path
												d="M170.7,380.3c-3.4-.6-3.5-5.2-.1-5.9,4.2-.6,4.7,6.1,.1,5.9Zm-1.6-4c-1.2,2.6,2.5,4.5,3.9,2.1,1.5-2.4-2.6-4.7-3.9-2.1Z"
												style={{ fill: "#23264b" }}
											/>
											<path
												d="M172.5,375.7v.4c-.8,.8-1.5,1.7-2.8,1.5,.3-.6,.7-1,1.2-1.3,.7-.8-1.6,.3-1.4,1.1,.1-.4-.2-.8-.4-1,.7-1.3,2.3-1.7,3.4-.7Z"
												style={{ fill: "#fe855d" }}
											/>
											<path
												d="M172.5,375.7c3.1,3.2-3.8,5.8-3.7,1.4,.7,2.9,4.7,1.3,3.7-1.4Z"
												style={{ fill: "#95374c" }}
											/>
											<path
												d="M169.7,377.5c-1.1-.6,2-2.3,1.2-1.3-.5,.3-.9,.7-1.2,1.3Z"
												style={{ fill: "#fefefe" }}
											/>
											<path
												d="M172.6,376.1c.9,3.2-4.7,3.4-3.5,.3,.3,.2,.5,.6,.4,1,1.2,.8,2.3-.6,3.1-1.3Z"
												style={{ fill: "#f36e53" }}
											/>
											<path
												d="M163.6,399.2c.4-8.3-1.9-18.6,1.5-21.6-.7,7,1.7,15.1-1.5,21.6Z"
												style={{ fill: "#a54956" }}
											/>
											<path
												d="M178.9,380.6c-.2,6.3,.1,12.6-.2,18.9-3.3-6.6-.9-14.6-1.6-21.8,.8,.4,1.5,1.9,1.8,2.9Z"
												style={{ fill: "#a64854" }}
											/>
											<path
												d="M168.3,383.3c-.8-.8-.4-3-.6-4.2,.8-1,1.1,4.1,.6,4.2Z"
												style={{ fill: "#f5f6f0" }}
											/>
											<path
												d="M163.4,380c.4,6.3-.2,9.7,.3,19.2-5,10.1-1.8-16.1-.3-19.2Z"
												style={{ fill: "#ff7d56" }}
											/>
											<path
												d="M178.9,380.6c1.2,3,4.5,28.1-.2,18.9,.3-6.3,0-12.7,.2-18.9Z"
												style={{ fill: "#ff7d56" }}
											/>
											<path
												d="M174,384.3l-.5,8.6c-1-.3-2-.4-2.9-.3,.1-2.9,.1-5.8,0-8.7,1.2-.1,2.3,.1,3.4,.4Z"
												style={{ fill: "#8cbda8" }}
											/>
											<path
												d="M170.6,383.9c.1,2.9,.1,5.8,0,8.7-.9,.1-1.7,.2-2.4,.5-.1-3.8-.1-6.4-.4-8.7l.5-.2c.1,5.6,1.2,5.3,.3-.1,.7-.1,1.3-.2,2-.2Z"
												style={{ fill: "#badec8" }}
											/>
											<path
												d="M168.7,384.2c.8,5.4-.2,5.6-.3,.1l.3-.1Z"
												style={{ fill: "#f5f6f0" }}
											/>
											<path
												d="M174,384.3c.6,.2,1.5,.5,1.9,1.1v8.8c-.7-.4-1.6-1.1-2.4-1.3l.5-8.6Z"
												style={{ fill: "#6e9c87" }}
											/>
											<path
												d="M167.8,384.5c.3,2.3,.3,4.9,.4,8.7-.7,.1-1.5,1.1-2,1.1v-8.8c.3-.6,1.1-.8,1.6-1Z"
												style={{ fill: "#8cbda8" }}
											/>
											<path
												d="M174.5,394.9c-2.3,.1-4.5-.2-6.8-.1,1.8-1.2,5-1.2,6.8,.1Z"
												style={{ fill: "#c1595d" }}
											/>
											<path
												d="M169.2,394.8c.1,.1,.2,.3,.3,.4-.5,.5,.8,5.5,.6,2.9,.9-.3,1-.4,1,.7,.3,.6,.3-.7,.3-1,.4-.2,.7-.2,1.1-.1-.5,3.3,1.2-1.9,.6-2.5l.4-.3c.3,.1,.7,.1,1.1,0-.1,1-.4,1.8-.4,2.7-2.1,13.1-5.9,5.1-6.4-2.8h1.4Z"
												style={{ fill: "#ff7d56" }}
											/>
											<path
												d="M169.2,394.8c1.4,0,2.8,0,4.2,.1l-.4,.3c-.6,.1-.3,1.9-.6,2.5-.4-.1-.8-.1-1.1,.1-.1-.6-.3,.1-.3,.3-.1-.5-.6,.1-.9,0-.3-.8,.1-2.4-.6-2.9-.1-.1-.2-.3-.3-.4Z"
												style={{ fill: "#ff936e" }}
											/>
											<path
												d="M173,395.2c.4,.2-.4,4.6-.8,3.5,.4-1,.1-3.1,.8-3.5Z"
												style={{ fill: "#7a334d" }}
											/>
											<path
												d="M169.4,395.2c.6,.8,.5,2.6,.6,3.7-.2,0-.9-3.2-.6-3.7Z"
												style={{ fill: "#82374b" }}
											/>
											<path
												d="M168,397.6c-.3,.9-.6,1.8-.8,2.8-.4-.1-1.3-.4-1.6-.8,1.1-1.6,0-3.2,2.4-2Z"
												style={{ fill: "#fe8640" }}
											/>
											<path
												d="M176.6,399.9c-.4,.7-1,1.2-1.7,1.4-.1-1.3-.5-2.5-.7-3.7l1.2-.6c.5,.8,.6,2.1,1.2,2.9Z"
												style={{ fill: "#fe8640" }}
											/>
											<path
												id="thrusterflame"
												d="M174.9,401.3c-.1-1.2-.4-2.4-.7-3.5h-.1c-1.2,9.5-4.8,8.5-6-.2-2,4.6-.7,10.5,1.2,14.7-.6-2.6-1.8-5.5-.9-8.1,.2,3.1,.9,6.9,1.6,10.1,1.8,7.7,.5,10.2,2.2,.5,.8-3.8,1.4-7.6,1.5-10.6,1,2.4-.2,5.2-.7,7.6,1.1-2.3,2.3-7.2,1.9-10.5Z"
												style={{ fill: "#fefefe" }}
											/>
											<path
												d="M171.2,397.8c0,.2,0,1.6-.3,1,0-.2,.1-1.7,.3-1Z"
												style={{ fill: "#f8f3ea" }}
											/>
											<path
												d="M174.1,397.6h0l.1,.2h-.1c-.1-.1-.1-.2,0-.2Z"
												style={{ fill: "#ffab87" }}
											/>
											<path
												d="M165.7,399.6c.3,.4,1.2,.7,1.6,.8-.3,1.9-.3,3.9,.1,5.9-2.2-.2-4.1-1.1-5.7-2.6,1.6-1.1,3-2.4,4-4.1Z"
												style={{ fill: "#ec6757" }}
											/>
										</g>
										<g id="foreground">
											<path
												d="M872.3,158.9c-.2,2.1-1.7,2.3-3.4,2.3-.5,.2-3,2.6-3.5,2.4-6.4-.5-11.6,.4-15.5,2.8-2,1.3-3.7,1.1-5.7,.3-2.6,3-1.9,9-2.1,12.7,.9-1.1,3.7-1.4,3.4,.2-3.4,4.4,1.6,6.2,2.5,10,0,.3,.4,.5,.7,.3,2.5-1.7,4.7-1,7-1.1,.7-.4,1.5-.5,2.3-.2,1,.4,2.1-.1,1.6-1.3-.7-2.3,1.2-4.1,3.5-4.5,1.6-1.1,2.9-2.5,5.1-1.7,.8,.5,3.9-2.3,4.6-2.5-.1-6.3-.3-13-.5-19.7h0Z"
												style={{ fill: "#1a5985" }}
											/>
											<path
												d="M873.8,83.3c-1.5,7.3-3.5,14.3-8.3,20.1-1.6,2.2-2.7,4.4-3.2,6.8-2.2,10.2-5.6,19.7-8.6,29,5.6-7.6,4.6-10.8,11.3-27.7,4.2-10,10.4-16,8.8-28.2h0Z"
												style={{ fill: "#d9c4eb" }}
											/>
											<path
												d="M873.8,113.9v-21.6c-1.3,6.4-6.8,13.3-8.8,19.2-5.7,15.4-6.3,19.8-9.8,25.8,12.3,1.3,9.8,9.7,16.8,10.9,.1-11.5,.4-23,1.8-34.3h0Z"
												style={{ fill: "#396390" }}
											/>
											<path
												d="M157,72.6c.7-.2,1.3-.1,1.7,.5-6.7,7.2-15.7,15.9-25.3,18.9-11.9,6-9.5,3.4-14.5,15.6-1.6-2,1.7-4.7,1.6-7.1,1.9-7.8,13.8-8.6,19.3-14.1,6.2-4.1,11.9-8.7,17.2-13.8Z"
												style={{ fill: "#bcb7e2" }}
											/>
											<path
												d="M158.7,73.1c6.9,5.2,14.6,9.4,21.1,15l6.2,14.5c-1.5,.1-.7-2-1.5-1.6-.5,3.5,1.2,8.8-1,12.6-2.4,3-1.6-3.7-3.1-.8-6.4-12.9-11.4-10.2-24.9-22.9l-2.6-3.5c-.4-.5-1.3,.1-1.9-.2,1.1-1.9,6.4-11.7,7.7-13.1h0Z"
												style={{ fill: "#3b5983" }}
											/>
											<path
												d="M156.9,75.3c-.9,1.5-6.4,11.6-7.3,12.7-1.7,.9-3.6-.5-2.8-2.1,.3-.4,2.4-2.3,.7-2.1l9.4-8.5h0Z"
												style={{ fill: "#6273a8" }}
											/>
											<path
												d="M53.4,140.6c-.7-.2-.8,1.5-1.2,.1-2.4-3.6-5.5-6.9-8-10.5-2.1-2.2-7.5-8.8-7.1-13.5-1.3-2.7-2.7-5.3-1.8-8.5,1.2-1.2,2.9-.4,2.3-3.3-.3-3.2-1.9-5.2-2-7.5,.3-.9,.2-1.8-.4-2.6-.2-.3-.4-.6-.3-.9,.2-.7,0-2.1,.7-2.6,2.2-1.7-2.6-1.7-.4-4.7l-.5-.7h0c-1.1-.7-6-8.8-7.7-7.6L2.6,90.7v2.2c.6,.9,0,1.9,0,2.9,2.3-1.5,4.5,1.1,5.3,2.6,3.6,4.7,8.8,9.9,11.4,15.1,2,2,5.7,4.3,6.7,6.6,8.4,20-1.2,17.3,20.8,27.3,.4-.1,.5,.1,.5,.5,2-2.6,4-5.2,7.2-6.5l-1.1-.8h0Z"
												style={{ fill: "#1e6f9e" }}
											/>
											<path
												d="M147.5,83.8c1.7-.2-.3,1.7-.7,2.1-.8,1.6,1.3,3.1,2.8,2.1-4.2,7.3-7.7,16.8-13.8,23.5-9.4,2.2-2.1-11.1-.8-18,.3-1.2-.2-1.7-1.5-1.5,5.2-1.7,9.9-4.5,14-8.2h0Z"
												style={{ fill: "#35577e" }}
											/>
											<path
												d="M155.4,89.8c-1.1,13.5,4.2,25.2,5.8,38.1,2.6,22.3,10.8,43.6,15.1,65.4,2.1,5.1,.4,9.1,2.7,13,2.6,.1,3.6,.4,3,.8-4.1,3.3,.8,7.7-5.8,8.9-1.5,1.1,.4,5.9-1.2,5-1.7-.8,0,2.1-1.6,1.9l-4.5-.8c-1,.7,0,2.7-1.9,2.5-4.2-3.6-9-5-13.9-8-5.5-11.4-12.8-22.9-16.5-34.8-2.1-8.6-4.3-18.9-6.6-30.9-.5-1-.8-3.1-2-3.4-8.3,.2-2.2,9.7-1,15.8,4.9,14.2,8.8,24.9,11.7,32.2,7.7,17.3,15.9,36.2,31.8,47.4-.1,.7-1.3,5.3-.9,5.9,1.4,2.3,.3,4.2-.6,6.4,0,1.2-.5,2.1-1.5,2.8-1.8,1.5,.3,1.5-2.9,1.3-3.1-1.6-.4,3,.8,1.4,.4,.4,.9,.6,1.5,.8-.7,1.4-1.7,3.1-1.4,4.8,.2,1.2-.2,1.5-1.4,.8-.6-1.2,.8-2.7-1.3-3.3-2.4,2-1.1,6.8,.6,9.3-3.1-.5-4.9-2.7-7.4-4.4-.2-.2-.3-.1-.1,.1,.4,.8,.6,1.6,.3,2.5-.3,.7-.7-1.8-2.1-.6-1,.4-5.3-5.1-5.8-3.4,.4,1.5,.2,2.1-.5,1.7-3.2-1.1-2-5.5-3.4-8.1-3.2-3.6-2.9-4.4-4.3-10.2-1.1-2.8-.8-8.1-2.1-9.9-.7,.9-2,.8-2.5,1.7l-.9,4.4c-.9-1.1-2-2.7-1.6-4.2,1.9-5.1-.8-5.4-.9-12.6-.1-1.1-.2-1.1-.3,0-.2,1.9-.3,3.8-.4,5.7-.9-1-.1-2.7-1-3.5-2.5-.6-4.6,1.7-6.4-1.5-5.3-5.9-6.4-10.7-8.1-19.1-2.1-4.4-3.5-4.2-.6-8.7-.6-3.9-1.2-8.2-3.8-10.7-1.3-.2-2-1-2-2.1-.1-.9,1.3-2.3,.4-3.1-1.2-.9-1.1-2.9-2.6-3.5-1-.7-2.6-2-3.8-.7-1.2,1-2.8,.1-2.8-1.5-.1-3.7-5.1-.5-5-2.3,0-.4-.1-.4-.4-.1-6.3,6.8-7,17.3-14.7,22.7-9.7,.9-16.5-5.4-25.7-8.8-1.6,.6-1.5-.5-2.2-1.1-4-2-8.3-1.8-12.3-2.8-1.7-1.7-3.8-2.3-6.2-2-2.6-2.3-7.4-3-10-4.1-2.8-1.4-3.9,.5-5.6,2-2.8,.4-1.3-.4-1.1-1.6,0-2.1-1.7-1.1-2.9-1.1l-5.6-1.8c-1.2-.2-2.2,.3-3.4-.6,0-.1,.1-.2,.4-.2l15.1-11.9c3.7-.9,17.2-3.4,20.4-8.8,1-.3,1.4-1.9,2.4-1.8,5.3,2.5,9.6,6,14.7,8.9,7.7,5.5,10.6-11.9,18.3-3.4,1.3,1,2.4,2.6,4,2.9,5.4-.1,7,2.6,10.8,4.8,1.7,1.1,5.6,5,7.3,0,5.6-12.6,10.8-25.3,15.8-38.2,2.2-7.9,14.5-19.7,12.4-28,.2-3,2.2-6.1,1.3-9.2,1.1-.2,7.5-4.9,6.7-1.1-1.6,5.7-2.8,9.8-3.5,12.3-1.5,3.6,.5,7.5,4.3,5.7,6.8-7.4,9.9-17.6,15.1-25.5,.6,.3,1.4-.3,1.9,.2,0,0,2.4,3.3,2.4,3.3h0Z"
												style={{ fill: "#1f4b6d" }}
											/>
											<path
												d="M35.3,86.6c4.6,5.3,13.3,16.2,17.5,21.8,5.5,10.3,19.9,16.9,25.9,23.3-3.4,2.3-5.9,5.2-7.5,8.9-4.9,2.9-10.9-.9-16.7,.5l-1.1-.5c-.7-.2-.8,1.5-1.2,.1-2.4-3.6-5.5-6.9-8-10.5-2.1-2.2-7.5-8.8-7.1-13.5-1.3-2.7-2.7-5.3-1.8-8.5,1.2-1.2,2.9-.4,2.3-3.3-.3-3.2-1.9-5.2-2-7.5,.3-.9,.2-1.8-.4-2.6-.2-.3-.4-.6-.3-.9,.2-.7,0-2.1,.7-2.6,2.3-1.8-2.7-1.7-.3-4.7h0Z"
												style={{ fill: "#1c77a8" }}
											/>
											<path
												d="M155.4,89.8c7.9,6.5,12.7,10.2,14.4,11.2,5,2.8,8.5,6.7,10.5,11.7,1.1,10,3.4,21.6,6.9,34.8,3.3,12.5,6,23.3,8,32.5,.3,7.6,8.7,20.2,1.2,22.5-7.3-6.6-13.4-17-14-26.5-.7-1.2-2.3-17-3.8-12.3-1.6,28.6,16.8,52.6,28.1,76.5-.2,1.5-1.4,.7-2,1.5-.4,.5-1.1,3.5-2,3.4-1.4,.1-2.8,.9-4.3,2.2-2.2,.7-3.6-2.4-5.5,1.1-20-11.5-12.7-3.7-26.3-23.8,1.8,.2,.9-1.7,1.9-2.5,.8-.2,5.7,1.9,5.3-.1-.2-1,0-1.3,.8-1,1.6,.9-.3-4,1.2-5,6.8-1.5,1.6-5.5,5.8-8.9,1.2-1.1-3.5,0-3.7-1.5-.2-6.2-2.5-11.7-2.6-18.2,2.8-.6,.2-6.2,.2-8.3-3.6-16.8-6.4-33.7-8.4-50.8-.2-1.7-.8-2.3-1.9-1.8-1.5,.4-3,0-4.4,1.3-1.7-12.8-6.8-24.5-5.4-38h0Z"
												style={{ fill: "#215071" }}
											/>
											<path
												d="M26.4,149c-2.2,.7-3.7,2.5-3.6-1.3,.7-1.6,2.3-3.1,.7-4.8-2.5-3.2-6.4-5.2-8.4-8.4-1.4,.7-2.8-.4-3.9,.2-2.7,3.2-5.5,6.2-8.6,9v33.1c1.3,1.1,2.3,2,3,2.8l15.1-11.9c6-3.8,13.8-3.5,18.5-9.4-3.5-4.3-7.7-7.4-12.8-9.3h0Z"
												style={{ fill: "#1a5985" }}
											/>
											<path
												d="M19.9,114c-3.3-5-8-10.9-12.1-15.8-.8-1.5-3.1-4.1-5.3-2.6v30.2c1.1,1.1,2,2.9,3.5,3.3-.8,1.5-2.2,2.8-3.4,4.1v2.6c4-3.6,6-5.2,9.1-10.3,.7-.8,3.6-5.6,4.1-4.2,.1,.5-.7,8.4-.2,8.6,3.4,2.4,3-14.9,6.3-14.3-.4-.6-1.1-1.2-2-1.6h0Z"
												style={{ fill: "#1d6996" }}
											/>
											<path
												d="M128.2,94.6l.2,1.3c-3.1,1.6-4.4,4.5-3.8,8.6,.1,.7,.3,.8,.6,.2l2.2-4.3-.6,3.5c2,8.4-10.1,20-12.4,28-3,7.7-6.1,15.3-9.2,22.9-2.6,2.1-5.8-1.8-9-1-3.4-1.2-6.5-3.3-10.2-4.2-1.3-.4-1.8-1.2-1.6-2.5-3.9-5.7-10.1,8.4-13.3,11.1-2.3,3.7-8-.8-10.8-1.5-.8-.3-4.2,.7-5,.8-6.9,1.2-1.1-12.2-7-11.3,4.7-9.7,16-2.6,22.9-5.8,4.3-7.9,11.8-11.8,15-21,10.7-4.3,22.3-7.3,32.8-12,.2-.3,4.2-10.7,4.6-10.4,0,0,4.6-2.4,4.6-2.4h0Z"
												style={{ fill: "#275b80" }}
											/>
											<path
												d="M128.4,95.9c.4,3-1.9,6.2-3.1,8.7-.3,.6-.5,.6-.6-.2-.7-4,.6-6.9,3.7-8.5Z"
												style={{ fill: "#6273a8" }}
											/>
											<path
												d="M873.1,191.9c0-4.3-.1-8.6-.2-12.9-.7,.3-3.8,3-4.6,2.5-2.2-.8-3.5,.6-5.1,1.7-2.2,.4-4.2,2.2-3.5,4.5,.7,2.7-2.8,.3-3.9,1.5-2.4,.1-4.5-.6-7,1.1-1.2,.2-.7-2.1-1.7-2.9,.4,1,.4,1.8-.1,2.4-3.4,4.4,2.3,4.5,3.6,7.1-.4,.7-2.5,.3-2.1,1.6,.2,2.4,5.4,6.8,0,6.4l5.1,5.4c.6-.1,2-.8,2.5-.4,1.8,1.7,2.3-1.5,3.9-1.5,.9,.2,1.8-1.3,2.3-1.8,4.1-1.2,5.7-.6,10.8-1.5,.1-4.5,0-8.9,0-13.2Z"
												style={{ fill: "#135781" }}
											/>
											<path
												d="M186,102.6c3,6.2,4.9,13.4,8.6,19.6,4.6,5.2,3,12.1,4.1,18.4,2.2,7.7,4.2,15.4,6.1,23.2-.6-1.6-1.3-.6-2.3-.6-1.5-.3-1.6,1.1-2.4,1.9-4.2,6.3,2.4,20.5,2.8,28.3-2.4,5.3,.5,9.3,1.1,15.2-5.3-9.5-5.6-16.9-8.7-28.5-3.8-18.2-13.3-48.8-14.9-67.3,.3-.8,.8-1.2,1-.3,.3,3.3,2.6,1.4,2.8-.5,.9-4,0-7.7,.3-11,.8-.5,0,1.8,1.5,1.6h0Z"
												style={{ fill: "#35577e" }}
											/>
											<path
												d="M5.7,129c-1.4-.4-1.9-2.2-3.1-3.1v7.4c.7-1,3.9-3.4,3.1-4.3h0Z"
												style={{ fill: "#1c608d" }}
											/>
											<path
												d="M39,143.3c-13.2-2.5-6.7-21.5-17.1-27.6-2.7-1.2-4.1,20.2-6.5,13.4l.4-7.7c-.4-1.6-3.5,3.4-4.1,4.2-3.1,5-5.2,6.8-9.1,10.3v7.9c3-2.8,5.9-5.8,8.6-9,1.1-.6,2.5,.5,3.9-.2,.3-.1,.6,.1,.6,.4,.2,1.1,.8,1.9,1.6,2.4,3.2,2.6,9.3,5.9,5.5,10.4-.1,2.6,.9,3.1,2.8,1.5,5.3,.4,10,5.1,13.5,9l7.6-11.1c-2.4-2-5-3.2-7.7-3.9h0Z"
												style={{ fill: "#1c608d" }}
											/>
											<path
												d="M89.4,120c.5-1.7,3.1-.7,2.8,.9-1,6.7-.2,13.7-2.1,18.1-1.4-5.7-1.3-13-.7-19h0Z"
												style={{ fill: "#3f618c" }}
											/>
											<path
												d="M194.6,122.2l6.8,2.7c3.9,5.5,4.3,12.8,5.9,19.3,2.2,9.9,3.8,19.8,6.8,29-.1,.9-.4,1-1,.2-3.1-4-1.3-12.7-5.9-16.3-1.7,3.8,2.1,9.3,.5,12.9-.2,.2-.5,.1-.6-.2-3.9-9.2-5.3-19.5-8.4-29-1.1-6.3,.4-13.4-4.1-18.6h0Z"
												style={{ fill: "#285173" }}
											/>
											<path
												d="M175.8,187.3c-6.5-19.4-11.4-39.2-14.5-59.5,1.2-1.2,2.9-1,4.4-1.3,1.1-.6,1.7,0,1.9,1.8,2,17.1,4.8,34,8.4,50.8,0,2.2,2.5,7.5-.2,8.2h0Z"
												style={{ fill: "#35577e" }}
											/>
											<path
												d="M845.9,137.5c-3.8,.8-10.6-4.7-12.5-.6h-.4c-.4-1.4-.3-2.9,.2-4.2,4.2-1.7,8.9,3,12.7,4.8h0Z"
												style={{ fill: "#2b83b5" }}
											/>
											<path
												d="M872.2,148.1c-7.1-1.3-4.3-9.6-16.8-10.9l-1.5,1.9c-2.7,.1-5.3-.4-7.8-1.6-3.8,.8-10.6-4.7-12.5-.6,2.3,16.4-.9,23.1-13.5,32.3-6,5-14.2,5.7-19.8,9.5-.1,1-.6,1.6-1.4,1.9-7.7,2.5-9.8,12.1-13.6,17.4,3.8,8.9,6.7,4.1,9.5,7.9,0,.8,1.6-1.2,2.6-.1,.2,.1,.5,.1,.6-.2,.4-1,1.2-1.8,2.2-2.3,2.7,.3,3.4-1.5,5.7-2.4,5.4-1.1,12.2-4,16.4-8.9,.6-1.2,2.3-.3,2.6-1.4,.2-3.1,2.9-2.1,3.6-3.8-.2-3.6,2-5.5,4.3-7.6,1.3-2.3,3-7.3,6.3-6.2,1.3-.6,1.5-.4,.4,.4-.2,.1-.2,.3-.2,.5,1.8,3.4-1.7,9.4,.7,12,1-1.3,2.6-2.9,1.9-4.6-.3-.6-.1-1.2,.6-1.7,.2-3.8-.4-9.6,2.1-12.7,2,.8,3.7,1,5.7-.3,3.9-2.4,9.1-3.3,15.5-2.8,.5,.1,3.1-2.2,3.5-2.4,1.6-.1,3.1-.1,3.4-2.3-.5-3.8-.5-7.4-.5-11h0Z"
												style={{ fill: "#225d86" }}
											/>
											<path
												d="M833,136.9h.4c.6,7.6,1.5,15.2-2.3,22.1-.7-3.8-6.4-2.8-4.1-7.2,.7-1.3,1.3-3.4,2-6.2,.8-1.9,3.1-6.8,4-8.7h0Z"
												style={{ fill: "#6273a8" }}
											/>
											<path
												d="M830.5,142.6c-5.8,13.6-13.2,24.4-26.9,32.9-2.2,3.7-7.1,4-10,6.9-6.3,8.3-12,19.9-21,26.5-.9-.6-1.5-1.3-1.8-2.3,2.3-2.3,7.1-7.1,9.4-9.4,5.3-4,7.4-12.4,12.8-16.2,17.2-10.5,26.5-18.2,37.5-38.4h0Z"
												style={{ fill: "#c5c2ed" }}
											/>
											<path
												d="M105.2,154.9c-2.6,3.6-5.6,21-11.4,17.1-3.4-2.5-4.1-2.6-6.9-4.8-1.4-1.4-4.6-1.4-7.3-2.1-1.9-1.3-4.6-4.3-6.4-4.7-4.1-1.6-6.5,4.7-10.1,6.3-6.6,1.2-13.2-7.7-19.6-9.7-1-.1-1.4,1.5-2.4,1.8,.4-.7,6.7-12.5,7.2-12.4,6.9-1-2.5,15.3,11,10.4,14.2,4.9,8.4,4.8,20.2-9.3,1.3-1.8,2.8-2,4.6-1,.7,1.1-.2,2.8,1.9,3.3,3.3,.9,6.3,2.3,9.3,4,2.6,.4,5.3,.4,7.6,1.8,.8,.3,1.6,.1,2.3-.7h0Z"
												style={{ fill: "#225378" }}
											/>
											<path
												d="M829.2,145.6c-.4,4.7-5.3,8.5-.1,10.6,1,.3,1.8,1.3,2.2,2.8-9.2,10.2-18,14.8-29.5,18.7,.5-.4,1.8-2.5,2.4-2.6,5.9-2.6,12.6-11.2,15.5-13.6,4.7-4.4,6.1-10.7,9.5-15.9h0Z"
												style={{ fill: "#8c88c1" }}
											/>
											<path
												d="M46.8,147.1c.4-.1,.5,.1,.5,.5-7.8,16.3-10.7,16.2-26.6,20,16.4-7,15.9-4.2,26.1-20.5h0Z"
												style={{ fill: "#4379a4" }}
											/>
											<path
												d="M153,216.6c-1-.1-1.9,.6-2.8,2-11.4-19.4-14.4-30.5-23.3-55.4-1.5-5.5-3.9-10.4-3-14.4,3.4-1.8,4.8-2.3,6,2,2.3,12,4.5,22.3,6.6,30.9,3.8,12,11,23.6,16.5,34.9h0Z"
												style={{ fill: "#285173" }}
											/>
											<path
												d="M214,173.1c8.5,32,11.6,33.9,33.5,73.2,.7,3.1-1.3,3-3.8,3-5.6-.6-11.1-.6-16.7,0-2.4-4.7-25.7-43-24.6-47.8-1.4-3-.3-5.5,.4-8.2-1.4-8.1-4-16.6-4.2-24.8-.4-2,1-2.9,2-4.3,.5-1.3,1.6-1,2.7-1.3,1.7-1,3,5.9,3.7,6.6,3.1,1.2-1.7-11.1,.1-12.7,3.3-.2,4.4,20,6.9,16.3h0Z"
												style={{ fill: "#3e5e88" }}
											/>
											<path
												d="M2.6,176.8v4.9c.9-.7,1.8-1.3,2.6-1.9,0-.1,.1-.2,.4-.2-.7-.8-1.7-1.7-3-2.8h0Z"
												style={{ fill: "#185280" }}
											/>
											<path
												d="M196.5,202.6c9.8,9.6,7,11.5,7.3,24.5,.4,1.2,.4,3.6-1.3,4.3-9.9-19.6-27.8-45.9-22.6-68.3,3,13.9,4.4,29.6,16.6,39.5h0Z"
												style={{ fill: "#3e5e88" }}
											/>
											<path
												d="M3.3,264.9c.5-.4,1.6-2.9,1.9-3.5-.9-.2-1.7-.4-2.6-.7v5.6c.4,.4,1,.4,1.9,0-1.9,.1-2.3-.4-1.2-1.4Z"
												style={{ fill: "#0a1c38" }}
											/>
											<path
												d="M6,269.9c-1.2-.4-2.2-1.4-3.4-1.8v5c1.1-.5,7.1-2.2,3.4-3.2Z"
												style={{ fill: "#0a1c38" }}
											/>
											<path
												d="M17.9,247.8c.9-.5,2.2,.5,2.4-1.1-.6-.3-4.1-5.1-3.5-1.8,.2,1.8-.4,2.2-2,1.4-3.3,.1-6.8,1.5-10,1.1-.3,0-.5-.3-.4-.5,.2-2.8,4.8-3.6,5.9-4,2.5-2.3,.3-4.3-2.3-5-1.2-.7-1.9-.1-2.1,1.6,.7,1.1,3-1,4.1,.1,1.9,1.7-5.8,4.1-7.3,4.2v10c.3-.1,.6-.2,.9-.2-.7-.9-.8-5.5,1.1-4,.5,.2,3.9,1.3,5.5,.2,.5-.5,.8-1.4,1.2-1.9,.7-.5,.9-.3,.7,.7-.6,2.6,2.1,3,3.1,.9,.9-.6,2.1-.6,2.7-1.7h0Z"
												style={{ fill: "#0a1c38" }}
											/>
											<path
												d="M5.1,236.6l-2.5-.8v5.3c.4-1.9,2.3-3.2,2.5-4.5Z"
												style={{ fill: "#0a1c38" }}
											/>
											<path
												d="M73.9,341.7c-.7-.5-5.5,2.8-6.1,3-.5,.5-5.4,1.6-6.1,1.9-3.7,1.3,6.4,4.7,3.1,6.6-2.5,1.1-1.6-1-2.2-2.4l-3.6-2.8c-.7-.5-2.2-.4-2-1.8,0-.3,.3-.5,.6-.5,2.6,0,3.9-.5,6.5-1.4,2.2-1,3.4-4.7,6.1-4.7,4,.3-4.3-5.4-3-7.9,1.5-2.6,6.5-7.9,8.9-3.7,1.3,2.3,1.8,2.7,2.7,4.6,.1,.3,.4,.4,.7,.3,2-1.3,.7-3.3-.4-3.2,1.4-.5,2.2-1.1,2.5-2,.1-.3-.1-.6-.4-.7-3-1.4-4.9-4.2-7.7-5.3-1.9-1.7-5.6,2.3-6.3-.9,0-.7-1-1.2-.7-1.9l2.6-3.2c1-.7,2.2,1.1,1.2,1.8-4.4,5,3.1,1.5,5.2,1.2,.7-.1,.9-.9,.5-1.4-.8-.7-3-.3-1.7-2,1.4-1.2,1.5-5,3-5,2,2.1,3.8,1.5,5.7,1.5l1.4,1c1,.6,1.4-1.2,.8-1.8-.6-.8-.5-1.3,.1-1.9-2.3-1.9-2-3.4,1-4.5-.3-.3-3.6-1.4-3.5-2l-.3-5.7c-1.6-.8-.7-4.6-3.4-2.3-.5,.5-.9,.5-1.2,.2-2.1-.5-4.7,.6-6.8-1.2-2.6-2,2.5-.1,2.4-4.6,.7-2,3.4,.7,4.1-1.7,.3-1.7,1.9-2.3,2.6-3.5-.1-4.3-5.1-.6-6.5,1.1-4.1,2,4.3-8.5,6.3-6.9,.8,.6,.1,2.1,.8,2.7l3.9,2.4,2.3-2.5-1-1.7c-2.2-.1-1.2-5.3-3.9-2.9-.5,.8-2.4,.1-3.1,.2-1.6-.3-1-2.3,.6-2.1,1.7,.5,5.4-2.9,2.9-3.6-.3-.1-.5-.3-.4-.5,.2-1.5,1-1.5,2.4-.2,3.3-2.1-1.5-6.7-3.2-2.8-.2,.3-.4,.5-.6,.4-.3,0-.4-.4-.2-.7,.5-2.5,4.2-2.6,4.1-5-2-.8-2.3-1.9-1-3.6,.1-.8,0-1.5-.3-2.2-.5-.1-.7-.4-.8-1-3.2-1-2,3.4-2.2,5.2,.2,1.7-1.6,2.8-2.4,1.1l-4.2-12.5c-3.1-.2-6.6,2.9-9.7,4.1-1.5,.3-3.8,1.7-3.4,4.1l4.9,11.6c.4,.8-15.8-30.1-15.8-30.1-4-2.3-.2,4.7-.5,5.4,.5,7.2,1.8,15.6-.1,22.3-7.1,1.5-5.4-13.2-7-21.3-.7-3.6-1-7.4-.8-11.2,0-1-.4-1.9-1.2-2.4-4.5-3.3,.8-10.3-2.1-14.4-4.2,4-6.1,15.4-13,7.8-3.5,.2,8.1,8.4,2.5,8.6-.6,.1-2.9-.3-3.2,.4-1,2.3-2.6-1.8-3.7-.2-.3,.7-.6,1.1-.9,1.3s-.5,.1-.4-.4c.2-1.2-.6-3.8-1.9-2.4-.5,.4-1.9,4.3-2.8,3.9-.8-1,.8-3.2,.3-4.6-.3-1.8-2.8,2-3.3-1-.1-2.4-6.6-1.5-3.7-3.9,.8-.7,4.1-2.4,3.9-3.7,0-1.3,.2-2,.6-2.3,1.8-.5,3.4,2.9,1.3,4.1-.3,.2-.4,.5-.4,.8-.4,2,1.7,.7,1.8-.5,0-1.4,1.7-1.6,1.7-2.7-.3-2.1-1-3.9-3.5-3-2.1,.4-1.2-3.3-3.4-2.9-.9-.1-1.8-.7-2.3,.5,5.7,5.7-2.9,.2-5.1-.9v18.3c4.6-2.2,6.4,.3,9.9,2.8,.9,1.1,1.6,2.8,3.1,3,2.9,0,6.6-1.5,9.8-1.3l4.6-1.2c2.3-1,4.4-1.7,6.2,.1,4.9,7.2-8.9,1-7.1,3.7,4.3,6.1,5.7,5.8-1.9,3.7l2.4,3.2c2.4,.8,4.9,1.6,5.8,4.5,2.1,.9,2.2,4.4,1.3,6.5,.9,.7,1,2.2-.3,2.3-2-.2-.9,3.1-2.9,2.7-5.2-2.6,1.1,3.6-1.3,2.4-5.9-2.7-2.1,3.2-4.5,1.9-1.2-.9-5.2-2.4-5.5-1.3-.3,1,0,4.5,1.5,5.4,1.8,1.2,4.9,3.6,7.3,2.8,1.8-1.4-1.6-5.2,1.4-4.6,6.1,1.3,10.8,10.7,.9,4.8-1.1-.1-1.4,.3-.8,1.4,1.3,2.5,.2,5-2.8,2.8-.7-.4-1.9-.3-3.5,.3l1,1.7c.1-.8,.8-.7,1.3-.1,3,1.7,7.8,.4,10.5,3.3,1,.7,.8,1.2-.3,1.5-3.1,.8-5.8,.8-8.2-.2-.7-.3-1-.1-.8,.7,.9,3.9,.4,4.1-1.5,.6-.1-.2-.4-.4-.7-.2l-4,1.6c-4.5,1.7,4.9,9.6,3.5,12.8-.9,1.9-3.7-7-3.1,3,1.3,.3,2.2,.2,2.7-.3,2.7-2.3,6.6-4,10-2.6l8.3,5.6c1.8,1.7-.7,4-2.5,1.3,.5,1.7,0,2.9-1.5,3.8,6,2,10.2,9.3,10.8,14.2-1.3-3.7-4.9-1.6-7.7-1.9-1.9-.5-3.7,.6-5.5,.6-3.3-1.2-12.1-5.8-9.5-1.5,1.8,3.5,15.1,5.4,10.3,9.3-2.9,.1-7.9,2.5-8-2.5-1.1,.1-1.9,.1-2.3-.2-4.3-2.1,.8,7.8-7.8-1.1-2.4-2.4,4.3,8.6-2.7,.3-1.1-1.6-4-1.7-1.7,.5,3.6,3.2,3.6,6,7.5,8.6,.8,.5,.7,1.4-.3,2.4,9.3,.1,11.9,2.9,18.9,6.3,2.4,1.6,7.8,.4,9.3,2.6-6.7,10.9-3.8,.5-15.4-2.3,.5,1,7.9,6.5,2.5,5.8,.4,2.1,5.6,4.7,1.4,5.9,.8,1.3,17.4,4.5,12.5,7.4,1.6-.4,2.2,1.3,3.4,1.6,2.3-.3,3.6,1.3,5.2,2.5,3.2,1.2,18.3,6.1,17.5-.1-.6-2.5,1-10.2-2.7-10.9-2.9-.4-4.7-4.9-6.9-1.5-.9,.5-1.9-.5-2.7,0-3,1.8-2.2-2.6-.9-3.9,1.4-.7,3.7,.1,2.1-2.1-.8-1.4,.1-2.7,1.9-1.4,2.4,1.6,3.7,1.1,3.8-1.7,0-.3,.3-.5,.5-.4,1.1,.9,1.4,3.1,3.4,2.1,.8-4.7,8.7-1.7,8.3,2.4,2.2,2.7,.5-2.1,2.8-1.3-3.8-5.2-8.8-8.7-14.9-10.4h0Z"
												style={{ fill: "#0a1c38" }}
											/>
											<path
												d="M10,279.3c-.8-1-6.4,1.7-7.4,1.5v4.6c.8-.3,2.7-.2,3.2-1.1,.7-.7,1.4-.8,2.3-.2,2.3,.2,3.3-2.9,1.9-4.8Z"
												style={{ fill: "#0a1c38" }}
											/>
											<path
												d="M873.2,204.9c-5.1,.9-6.7,.3-10.8,1.5-.5,.5-1.4,1.9-2.3,1.8-1.6,0-2.1,3.2-3.9,1.5-.5-.5-2,.3-2.5,.4-1.1,2.4-3.4-1.4-4.8-1.8-.8,2.4,1.8,5.7,3.6,7.3,1.1,.8,1.7,2-.4,1.6-1.3-.1-2.9-4.3-4-2.5,.4,1.1,5,5.9,5.9,6.7,4.3,1.6,3.6,5.7,5.1,9.2,.8,.5,1.2,1.1,1.1,2,.7,1.3,1.8,2.2,3.4,2.5,.2,.1,.3,.3,.2,.5-2.8,2.5,6.9,3.3,8.6,3.7,.9,0,1-1.1,1.4-1.7-.2-10.8-.5-21.7-.6-32.7h0Z"
												style={{ fill: "#13517a" }}
											/>
											<path
												d="M839.7,185.9c-1.8,1.9,2.5,2.7,.8,4.5-1.4,1.1-5.9,9.7-2.5,6.5,.3-.5,1.3-2,1.9-.3,0,2.3-6.4,6.5-2.3,8.5-1,.2-1.3,1.5-2.4,1.8l-3.5,1.5c-1.2,1-.3,2.6,1.8,1.5,0,.4,.3,.8,.8,1.1-3.4,7.8-11.4,8.4-8,14.9-.8,3.7,3.7,0,4.7-1.2,2.2,1.3-1,5.3,4,5.3-.6,1.7-1.5,3.2-2.8,4.5-1.6,.5-2.2-1.7-3.8-.8-1,.6-1.2,1.2-.4,1.9-.5,1.7,2.1,.4,2.5,2.2-1.5,2.5-5,.7-6.2,3.4-.7,1-1.4,.9-1.8-.4-9.5-8.5-16.2-20.8-25.9-29.1-.8-.3-2.6,1.2-2.8,1.9l.7,10.5c-1.9-.2-1-2.5-.9-3.2,.1-2.2,0-11.8-1.6-4.2-2-.3,.1-4.9-1.9-3-1.8,1.6-.3-3.4-2.6-3-1,.2-1.9-1-2.3-1.5-1.3-.2-3.2,.2-3.2-1.7,0-.4-.3-.8-.7-.9-1.5-.2-3-1.2-2-2.3l5.9-6.2c3.8,8.9,6.7,4.1,9.5,7.9,0,.8,1.6-1.2,2.6-.1,.2,.1,.5,.1,.6-.2,.4-1,1.2-1.8,2.2-2.3,2.7,.3,3.4-1.5,5.7-2.4,5.4-1.1,12.2-4,16.4-8.9,.6-1.2,2.3-.3,2.6-1.4,.2-3.1,2.9-2.1,3.6-3.8-.2-3.6,2-5.5,4.3-7.6,1.3-2.3,3-7.3,6.3-6.2,1.3-.6,1.5-.4,.4,.4-.2,.1-.2,.3-.2,.5,1.7,3.4-1.7,9.9,.5,11.9h0Z"
												style={{ fill: "#1a5985" }}
											/>
											<path
												d="M738,178.8l-6.1,11.5-1.2,.2c.6-.2,6-15.3,7.3-11.7Z"
												style={{ fill: "#f0d7f0" }}
											/>
											<path
												d="M131.2,235.9h0c-.9-1-.1-2.7-1-3.5-2.5-.6-4.6,1.7-6.4-1.5-5.3-5.9-6.4-10.7-8.1-19.1-2.1-4.4-3.5-4.2-.6-8.7-.6-3.9-1.2-8.2-3.8-10.7-1.3-.2-2-1-2-2.1-.1-.9,1.3-2.3,.4-3.1-1.2-.9-1.1-2.9-2.6-3.5-1-.7-2.6-2-3.8-.7-1.2,1-2.8,.1-2.8-1.5-.1-3.8-5.2-.4-5-2.4,0-.4-.1-.4-.4-.1-6.3,6.8-7,17.3-14.7,22.7-9.7,.9-16.5-5.4-25.7-8.8-1.6,.6-1.5-.5-2.2-1.1-4-2-8.3-1.8-12.3-2.8-1.7-1.7-3.8-2.3-6.2-2-2.6-2.3-7.4-3-10-4.1-2.8-1.4-3.9,.5-5.6,2-2.8,.4-1.3-.4-1.1-1.6,0-2.1-1.7-1.1-2.9-1.1l-5.6-1.8c-1.2-.2-2.2,.3-3.4-.6-.8,.6-1.7,1.3-2.6,1.9v21.8c1.2-1.3,2.9-1,4.5-1.2l8.7-3.2c.9-.1,.6-3.5,.8-4,1.6-3.2,1.4,4.9,2.8,5.3,.5,.4,1.3,.2,1.7,.7,3.3,3.2-1.5-5.4-1.6-7.2-.5-1.7,.9-1,1.1-1.8,0-2.3,2.7,.9,3.8,.4,2.1-.5,3.1,1,4.8,1.7,6,1.6,7.6,7.3,13.3,6.6-29-16.8,44.6,15.7,36.8,23.5-2.4,5.3,27.2,15.1,32.2,19.3,1.7,2.6-5.4-1-6.5-.9-.4,6,.6,5.4,6.5,9.7,4.5,2.3,5.6,7,9.5,5.8,1.8-.7-1.2,4,1.8,.8,.5-1.8,6.1-2.7,5-5.2-2-2.6-.4-5,1.2-7.6,.7-2.1-.7-8.7,2.2-8.5l-.2-1.8h0Z"
												style={{ fill: "#1a4466" }}
											/>
											<path
												d="M800.2,178.6c.1,1.5-2.2,2.3-2.9,2.5-3.3,1.9-5.7,4.5-7.2,7.7-1.7,3.7-3.3,6.7-4.9,9.1-.2,.4-6.7,6.6-6.2,7,.2,.8,1,1.3,2.3,1.5,1.2,.4,.4,2.2,1.9,2.5,1,.2,2-.5,2.7,.9,1.4,1.2,3.4,.4,3.2,3.1-.1,2.9,2.7-2.2,1.9,1.8-.1,.8,.2,1.3,1,1.8,.8,4-3.1,7.9-1.2,12.5,.6,1.4,.2,2.9-1.2,4.5-.3,.3-.3,.6,0,1-.4,0-.6,.2-.8,.5-2.1,.3-.1,5.2,1.8,5.2l-.5,1.5c-1,.8-7.9,4.5-4.2,5,1.4,.5-.3,2.5,1.7,2.8l-1,.7c-1.5-1.1-3.1-1.2-4.8-.2,.9-1.5-2-.7-2,.5,.2,1.2-.2,1.4-1.2,.9-.2-.1-.4-.4-.3-.8,.6-4.2-2.6-2.2-4.9-1.9-1.9-.4-1.4-2.1-2.2-3.1-3.7-3.3-10-7.9-6.6,1.4,1.5,3.5-3.7,1.9-4.8,.1-22.9-13.1,2.5-26.1,12.7-37.7,6.8-5.8,12.3-12.6,16.6-20.3,3.3-5.7,5.6-8.6,11.1-10.5h0Z"
												style={{ fill: "#1a5176" }}
											/>
											<path
												d="M847.2,187.1c.4,1,.4,1.8-.1,2.4-3.4,4.4,2.3,4.5,3.6,7.1-.4,.7-2.5,.3-2.1,1.6,.2,2.4,5.4,6.8,0,6.4-.3-.3-.9-.5-1.6-.6,2.7-2.7-3.9-2.2-.8-4.4,.4-.3,.6-1.3,.8-1.8,2.5-2.1-1.1-2.9-2.2-4.3-3.1-2.2,0,4.3-1.2,5.1-1.1,.4-1.1-3.7-1.4-4.1-.1-1.2-1.8-2-2.1-.6-.4,1.4-1.1,2-2.4,1.1-.3-2.2,4.7-4.8,2.5-6.8-2.6-1.7,1.6-4,1.6-6.1-1.1-2.2,1.7-4.4,3.7-3.1,.2,.1,.3,.5,.1,.7-1.8,3-1.3,5.5,1.6,7.4h0Z"
												style={{ fill: "#061f39" }}
											/>
											<path
												d="M763.7,183.4c3,2.9,13,11.1,16.4,13.8l-4.9,4.9c-2-.1-2.6,1.5-4.1,2.6-.5,.3-5.3,3-5.6,3.3-1.2,0-1.2,1.6-2.1,1.5-1.4-1.4-3.6,.1-5.4-1.1-1.4-.2-2.6,1-4,.2-.4-.1-.7-.1-.9,0-1.3,1.3,.2,1.9-2.6,1.5-2.1,1.1-8.9,1.2-8.9,4.3,.4,1-6.7,.4-7,.6-.7-.1-1.8,1.1-2.4,1.4-1.6,.6-3.4,.2-5,.9-2.3,1-3.8-.4-5.9-.4-1.1,.6-2.3,.6-3.4,0-2.9-.3-5.7-.4-7.4-3.1-.1-.1-.3-.2-.5,0-1.6,.6,1.5-2.8,.7-4l3.5-7.2c3.2-1.9,5.7-4.4,7.6-7.4,1.4,.3,2.9-.3,4.4-1.8,1.3,.2,2.1-.2,2.5-1.4l1.3-.7c-2,5.1-2,6.2,0,3.5,1.2-1.6,1.8-3,1.9-4.3l6.1-11.5c7.1,2,22.1-.9,25.7,4.4h0Z"
												style={{ fill: "#2d5b82" }}
											/>
											<path
												d="M687,185.9c-.4,.1-8.5-3.8-8.5-2.6l-9.7,17.6c-1.8-.4-1.5-2.7-4.9-1.4-2.3-2.3,3.9-.2,4.9-2.1,2.2-3.1,3.7-6.4,4.5-9.6,.3-1.6,4.4-6.9,.8-7.5,.3-2,2.7,1.2,4,1,1.3,.1,10.9,4.4,8.9,4.6h0Z"
												style={{ fill: "#dcd3eb" }}
											/>
											<path
												d="M225.8,182.1c3.9,4.9-.7,3.6,3.9,8.1,7.6,14,22,27.4,32.6,42,.2,1.3-.6,2.3-.6,3.5,.5,1.4,.6,2.6,.3,3.5-1.5,4.7-7.1,12.6-12.6,10.1-19.2-35.1-26.1-40.7-32.4-66.9,2.6,.6,5.1,.4,7.6-.7,.5-.2,.9,.1,1.2,.4h0Z"
												style={{ fill: "#24567b" }}
											/>
											<path
												d="M225.8,182.1c20.2,12.5,40.6,26.1,61.7,37,5,2.4,14.3,12.4,16.4,13.9,5.5,4.4,16.8,10.7,22.6,12.9,9.6,2.6,8.9,16.1,17.8,19,2.4,.9,4.5,2.3,6.3,4.2-4.4,1.6-7.5-5.1-8.4-2.2-.1,2.6-2.1,3.2-3.3,4.8v1.8c-19.7-13-36.5-21.3-54.7-31.6-4.9-2.4-9.4-6.1-13.4-11-4.7-5.6-9.2-11.7-13.6-18.3-2.8-3.2-5.7,1.6-6.5,5-10.6-12.8-14.3-15.4-21.1-27.5-.3-.4-3.1-2.9-2.1-4.6,.3-.7-1.4-2.8-1.7-3.4h0Z"
												style={{ fill: "#275b80" }}
											/>
											<path
												d="M687,185.9c1.6,.7,7,2.6,8.7,3.2,2.1,1.5,4.8,1.7,8.1,.4,.8-.6,5.5,1.4,6.3,1.6-.5,2.3-3.7-.1-5.3-.1-2.1,.3-4.3,1.5-6.4,.8-3.8-1.3-13-4.7-17.6-6.8-.8-.4-1.8,0-2.3,.8-2.5,4.5-3.8,7.8-6.9,12.5-2.6,4.5-2.8,10.4-5.5,14.7-1.8,3.9-6.1,8.1-9,11.7-3.7,5.1-4.6,12-7.7,17.5,3.3-21.1,12.2-19.7,17.5-35.4,0-4.7,9.1-19.4,11.2-23.5,0-1.2,8.5,2.7,8.9,2.6h0Z"
												style={{ fill: "#14395b" }}
											/>
											<path
												d="M710.2,191.1c3.2,.9,8.6,2.5,11.6,4-9.4,11-26.2,21.7-35.2,27.9-2.4,1.5-4,3.1-4.7,4.8-8,14.2-16.7,27.2-25.3,41.1-4.9,5.6-13.3,6.9-19.2,11.5-.7-.1-1-.6-1-1.3,2.9-6.6,5.4-13.3,7.5-20.2,2.6-8.5,7.7-21.6,10.8-29.7,2.3-6,9-10.5,11.5-16.1,2.7-4.3,2.9-10.2,5.5-14.7,3.1-4.5,4.4-8.2,6.9-12.5,.6-3.1,17.7,6.1,19.9,6,2.1,.7,4.3-.5,6.4-.8,1.5,0,4.8,2.4,5.3,0h0Z"
												style={{ fill: "#1c4c6d" }}
											/>
											<path
												d="M7.7,216.6l-5.1-2.6v1.8c2.2,1.1,10.8,6.3,5.1,.8h0Z"
												style={{ fill: "#186491" }}
											/>
											<path
												d="M731.9,190.3c-.2,3.1-6,10.5-1.9,.8,.4-.4,1.3-.8,1.9-.8h0Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M128.9,258.3c-1.1,3.6-4-2.8-5.7,2.8,1.7,.5,5.2-1.3,3.5,1.2-.4,1.5-8.4,5.3-6.6,1.7,.9-1,2.6-3.3,2.9-4.6-2.2,2.3-.9,.5-1.3-.8-2,.8-3.6,0-5.2-2-.3-.8-9.7-7.3-9.7-7.2-1.6-1.6-2.1-3.7-1.6-6.3-69.7-25.1-14.7-18.1-62.5-41.9-2,.6-3.6,0-4.7-1.2-3.2-2.6-8.7-6.7-13.5-7.1-1.1,.3-3.8-2.8-3.7-.4,0,.2-.3,.4-.5,.4-2.9,.5,5.2,12.6,.9,8.6-4-.3-2.5-9.5-4.5-6-.2,.7,0,4.1-.8,4-.3,.1-8.7,3.2-8.8,3.2-1.6,.1-3.2-.2-4.4,1.2v10.4l5.1,2.6c.4-1.2,1.5-.6,2.3-.5,1.2-.1,1.8,.6,1.9,1.9,.9,2.5,4.5-1.1,4.8,3h.7c.6-1.1,1.7-1.4,3-1,2-1.7,3-.1,4.3,1.1,.8,.3,1.1-.8,1.9-.5,.3,.5,6.1,1.7,3.1,2.5-10.1-2.2-3.4,5.1,1.7,4,2.5-3,4-7.2,6.8-10.1-1.6-8.4,8.7,10.5,10.6,11.4,6.2,3.5,4.1,15.7,6.4,11.9,.5-1,2-1.5,2.2-.3,0,5.9,1,11.7,3,17.2-.4-2.4,1.8-3.8,3.4-4.1,3.1-1.1,6.8-4.3,9.7-4.1l4.2,12.5c.7,1.7,2.7,.6,2.4-1.1,.2-1.8-1-6.1,2.2-5.2-1-1.6,.6-1.9,.8-.7-.2,1.2,.5,2.7,.3,3.9,.9,.1,4.4,4.7,1,3.5,.2,.8-.1,1.4-.8,1.7,1.2,.3,3.2,2.6,1.7,3.5,.4,1.2,0,2.1-1,2.8,.2,7.3,16,.3,19.2,0,5,2.8,10.2,4.6,15.6,5.4,2.7,.4,1.5-1.1,1.5-2.5l.7-1.4c.4-2.9,14.8-14.4,7.5-13.4h0Z"
												style={{ fill: "#173f5f" }}
											/>
											<path
												d="M847,204.1c-2.2-1.1-2.6-4-5.5-3.8-.3,0-.6-.3-.6-.6l.2-3.1c.1-1-.8-.2-1.2,0-.6-1.7-1.6-.3-1.9,.3-1.7,1.6-1.8,1-.3-1.8,1.2,.9,1.9,.4,2.4-1.1,.3-1.3,2-.7,2.1,.6,.3,.4,.3,4.5,1.4,4.1,1.1-.8-1.9-7.5,1.2-5.1,.9,1.4,4.8,2.3,2.2,4.3-.2,.5-.4,1.4-.8,1.8-2.9,2.1,3.4,1.7,.8,4.4h0Z"
												style={{ fill: "#1a4466" }}
											/>
											<path
												d="M105.2,243.1c-69.7-25.1-14.7-18.1-62.5-41.9-1-1.2-10.6-5-5.4-5,14,7.2,29,13.1,41.1,23.5,1.5,1.3,1.8,3,1.1,5-1.7,4.8,14,9.3,17.9,12,4.4,2.1,24.5,11.7,7.8,6.4h0Z"
												style={{ fill: "#27486c" }}
											/>
											<path
												d="M847,204.1c1.6-.3,5.6,5.2,6.7,6-1,3.1-4.4-3.2-5.1-1.3-.2-.7-.5-.9-1.2-.6,1.6-1.8-2.4-2.8-2.9-4.6-1.3-2.9-6,11.5-9.2,12.5-1.7,1-4.5,0-1.3-1.3,1.3-1.1,2.1-2.9,3.7-3.8,2.2-2.1-2.6-.4-3.2-.2-.5-.3-.8-.6-.8-1.1,.8-.9,2.2-2,4.2-3.4,1.6-1.9-4.2-2.2-.4-5.9,1.4-1.5,2.2-2.9,2.5-4.1,.4-.2,1.3-1,1.2,0l-.2,3.1c0,.3,.2,.6,.6,.6,3.1-.4,3.2,3.3,5.4,4.1h0Z"
												style={{ fill: "#040e22" }}
											/>
											<path
												d="M199.8,198.1c7.7,21.3,30.9,55.5,41,75.8,3.9,1.9,9,1.4,13.4,1.6,1.9,.2,3.8-1.8,5.6-1.1,2.6,.8,2.8-4,1.3-5.5,6.9,3.6,18.7-2.1,27.8,.1,3.5-2,6.3,6,8.4,1.2,.6-1.5,1.7-2.1,3.2-1.8,.3,.1,.4,0,.3-.3-2.6-3.3,2.5-2.7,2.9-.1,.1,.3,.2,.5,.4,.6,.9,.4-.2-1.4,.1-1.9,3.9,3.2,12.7,17.7,17,16.7,7.2-1.9,12-8.7,18.2-3.3l11.9,15.7c-6.3,1.8,2.5,4.9,0,7.9-.9,1.4-.7,4.3-2.5,5.5-.2,.1-.1,.4,0,.6,1,.6,.6,1.7,.7,2.5,.2,1.5-.4,1.7-1.9,.7-3-2-4.1-.5-5.8,1.3-2.5-2.1-3.1-5.3-7.6-3.9-2.5,1-2.9-3.3-5.3-1.3-4.8-.1-8.4-5.6-13-6.6-4.3-4.5-10.8-5.2-16.7-3.7-4.1,1.6-3.2-4-6.3-3.1-2,.9-3.3,.5-3.9-1.4-.1-.7-1-.5-1.5-.5-1.3-.6-2.2-2.3-4-1.5-.3,.1-.6,0-.9-.2-1.5-1.3-3.3-1.6-5.2-.9-.3,.1-.5,0-.7-.3-.4-1.5-3.7-.8-4-1-2.6-.2-5.6-1.1-7.9-.1-2.2,1.5-5.6,.6-7.8,2.5-1,0-.5-1.8-2.3-.7-1.1,.2-2.2-1.6-2.2,.8,.8,2,2.4,2.5,3.1,5,1.8,4.6,9,7.8,7.4,13-4-5.8-7.9-11.7-11.8-17.7-1.6-3.6-6.9-2.3-8.1,.9-3.5,2.8-7.4,5.1-11.5,6.9-1.2-4.9-2.9-9.8-5.9-13.6-1.4-1.9-2.1,.4-1,1.4,1.5,1,1.7,2.2,.6,3.9-3.4-.5-2-1.9-1.6-3.7-.2-.9-.6-.8-1.2,.2-2.3,1.9-1-3.7-.6-4.8,1.1-.4,1.4-.9,.7-1.6,2.6-.7,.7-11.7-1.7-12.3-1.3-2.1,1.2-5.4-2-6.7,2.2-.5,3.5-.8,5.1-2.3,.4-.4,.8-.5,1.3-.4,.8,0,.2-1.6,0-2-9.5-18.6-14.3-40.1-28.5-56,1.9-.6,3-2.1,3-4.5h0Z"
												style={{ fill: "#1f638c" }}
											/>
											<path
												d="M667.9,200.6c-2.3,6-5.4,11.6-9.1,16.9-4.7,3.6-8.2,8.2-10.3,13.6,.2-.9,.2-1.7-.1-2.5,2.7-4.1-.3-4.1-3.3-5.7-1.3-.3-5.6,4.3-6.1,2,3-1.1,4.9-3.1,4.9-6.1,2.1-5,.6-12.2,5.6-14.6,4.8,0,16-8,18.4-3.6h0Z"
												style={{ fill: "#335b85" }}
											/>
											<path
												d="M667.9,200.6c.2,.3,.4,.4,.8,.2-1.4,6.8-3.6,13.2-8.4,18.2-1.6,.2-2-.4-1.4-1.7,3.7-5.1,6.7-10.7,9-16.7h0Z"
												style={{ fill: "#baa5dd" }}
											/>
											<path
												d="M15.4,201.2c.5,.1,.8,.5,.8,1,.6,7.4-5.1-1.7-.8-1h0Z"
												style={{ fill: "#0a1c38" }}
											/>
											<path
												d="M775.2,202.1c-2.6,3.1-17.1,15.4-20.5,18.3l-9.6,11.6c-12.8,5.6-11.2,18-15.8,.5-.1-.3-.5-.4-.8-.4-.2-.4-.4-.4-.7-.1-3.2,3.2-6.8,6.1-10.8,8.6-1.9,1.7-5,0-6.2,2.5l-.5,.3c-3.2,.3-3.9,5.5-6.1,7.5-1.2,.5-2-1.3-1.3-2.2,1-1.8,.7-2.5-.8-2.1-3.5,.4-6.9-.4-10.4,.2-1.6-.6-2.7-2.5-3,.6,0,.3-.1,.4-.4,.1-2-1.9-1.9,.3-3.2,1.2-.7,.1-1.4-.8-2.1-.2l-3.6,4.4c3.6-6.3,7.3-12.5,9.3-19.4,.7-.1,2.7-12.8,6.8-11.1,2.1,.4,4,3.3,5.7,3l9.8-15.6c.5,1.7-.9,2.7-1.2,4,.1,.4,.8-.3,1,0,1.5,2.2,3.7,3.2,6.5,2.9,1.5,.3,2.7,1.2,4.3,.2,.3-.1,.6-.2,.9,0,2.8,1.6,6-.3,9.1-.2,.6,.1,1.9-1.1,2.4-1.4,.3-.5,6.8-.3,7.4-.4,.3,0,.5-.2,.5-.5,.2-3.4,6.3-2.6,8-4.2,.7-.5,2.7,.7,2.9-.6,.3-2.3,3.3,.1,4.6-1.2,.3-.1,.6-.2,.9,0,1.9,1.2,3.9-.3,5.4,1.1,1.5-1.2,5.6-3.7,7.7-4.8,1.5-1,1.7-2.7,3.8-2.6h0Z"
												style={{ fill: "#24567b" }}
											/>
											<path
												d="M714.2,202.6c-1.8,4.9-10.4,18.2-13.3,22.8-2.3,.3-6.1-5.8-8.5-2.1-4.5-.6-7.7,1.2-9.5,5.4l-1-.8c8.4-9.5,20.1-13.7,32.3-25.3h0Z"
												style={{ fill: "#9f8fcf" }}
											/>
											<path
												d="M840.8,205.7c-1.6,2.7-1.7-3,.3-2.4,1.1,.1-.5,2.4-.3,2.4Z"
												style={{ fill: "#426998" }}
											/>
											<path
												d="M847.5,208.3c-5.3-.8-.3,4.7-4.9,5.4-.2,1.9-1.2,2.9-3.1,3.1l2.3-9c0-.4-.6,.2-.8,0,.7-.9,2.4-6.4,3.5-4.2,.6,1.9,4.6,2.8,3,4.7h0Z"
												style={{ fill: "#153b5f" }}
											/>
											<path
												d="M837.8,205.1c2,1.7-4,3.8-4,4.9-2.2,1-3-.5-1.8-1.5l3.5-1.5c1-.3,1.3-1.9,2.3-1.9h0Z"
												style={{ fill: "#4c84a8" }}
											/>
											<path
												d="M770.7,206.6c.3,1,.9,1.7,1.8,2.3-2.3,2.2-16.2,17.2-17.8,11.4l16-13.7h0Z"
												style={{ fill: "#9f8fcf" }}
											/>
											<path
												d="M839.5,216.9c-.4,.2-1.7,3.4-2.4,2.3-.7-.9-2.3-1-2.8,.2-.5,1.6-1.9,1.9-3.2,2.5l-4.5,3.8c-3.4-6.5,4.6-7,8-14.9,7.9-2.7,1,1.5-.5,4-2.1,1.1-2,1.7,.4,1.7,3.2-1.6,5.1-5.5,6.6-8.7,.3,.1,.8-.4,.8,0,0,0-2.4,9.1-2.4,9.1h0Z"
												style={{ fill: "#2e608a" }}
											/>
											<path
												d="M21.5,208.6c1.4,.5,6.9,7.8,3.8,6.4-1.5-.7-9.2-8.2-3.8-6.4Z"
												style={{ fill: "#041730" }}
											/>
											<path
												d="M847.5,208.3c1.5-1.3,1.7,5.7,5.9,8.2,.5,.8,.1,1-1.2,.8-1.3-.1-2.9-4.3-4-2.5-.2,.5,4.9,5.7,5.2,6.1,3.1,2,5.4,4,5,8.1-2,.7-2.6-2.7-4.4-3.1-2.5-1.8-3.9-2.1-6.1-3.6-.4-1.4-2-1.6-2.6-2.7-.4-3.2,1.5,.3,2.9,.3,3.2,.4-1.3-3.3-2.6-3.4-.6-.2-1-.7-1-1.4,0-1.1-.4-1.4-1.3-.9-.1-.3-.4-.5-.8-.6,4.4-.7-.2-6.2,5-5.3h0Z"
												style={{ fill: "#010408" }}
											/>
											<path
												d="M15.7,213.2c-.3,1.6-3.4,1-3.1-.7,.3-1.5,.5-4,2-3.9,1.8,.6,2.9,1.8,3.3,3.8-.4,.3,4.3,4.7,2.2,3.6-1-1.1-2.6-1.5-3.2-2.9-.2-.5-1.1-.7-1.2,.1h0Z"
												style={{ fill: "#041730" }}
											/>
											<path
												d="M284.2,241.8c-1.6,.5-2.4,1.6-2.3,3.3-.8,1.8-2.2,3-2,5.8-11.3-8.1-20.1-22.9-29.2-33.3,5.6-19.6,14.4,16.4,33.5,24.2h0Z"
												style={{ fill: "#3f618c" }}
											/>
											<path
												d="M824.5,241l6.3-1.9c.9-.3,1.4-1.8-.1-1.5-.2-1.7-3-.4-2.5-2.2,.9-.3,1.7-.8,2.2-1.6,.6,.4,1.2,.6,2,.5,0,2.4,4.2-3.4,3.7-4.7,2.5-1.5,1.3,5.3,3,6.7-3.3,3.6-5.2,10.5-11.4,11.5-1.5-.1-2.6,.5-3.3,1.9-1,1.2-2.8,1.7-3.7,3.2-.7,.9,2.4,.8,2.7,1,1.6-1.3,2.1-4.3,4.3-5.6,1.6,0,2.3,.9,2.3,2.5,2,2.6-2.4,1.7-3.3,3.7l-3.6,3c-1.3,1-3.2,1.6-4,3,.6,2.4,3.7,3.4,5.4,1.5,1.1-.2,.6,1.1,.8,1.6-2.5,4.1-7.6,6.9-9.7,10.3,2.4,1.3,2.7,2.5,.9,2-1-.8-6.1,.5-3.3,1.6,1.3,.6,.7,2.7-.5,2.8-3.8-1.3-8.2-3.1-9.9-7-.6-1-2.3-1.8-.5-2.7,1-1.4,1-3.3,3.2-3.7,2.1-.8,3.5-2.4-.1-1.3-1.9,.8-5.1,3.6-6,.9,.1-.8-2-2-2.4-2.5,1.6-1.3,6.7,.6,5.9-.3,.3-.5-3.9-1.5-2.3-2.4,2.3-1.4,8.9-6.8,2-5.4-3.1-2.9,3.2-3.9-.8-5-1.4-.3-3.5,.5-1.3,1.8,.8-.3,1.2,5.8-1,5.9-.6-.1-.4-1.5-1.3-1.3-1.6-.1-3.9-3.1-2.6-4.5,1.2-1.2,2.8-3,.1-3.3,1,.2,1.4-.3,.7-1-1.1-.9,.6-2.5-1-3.2,1.3-3.6-1.1-7.4-.5-11.2,2.5-2.9-4.2-5.1,0-7,.3-1.4,.1-2.4-.5-3l-.7-10.5c2.2-3.3,3.9-1.5,6,.8,4,3.5,22,29.6,24.8,26.6h0Z"
												style={{ fill: "#13517a" }}
											/>
											<path
												d="M204,212.6c8.5,14.7,13.6,30.8,21,46,0,.5,.8,1.9,0,2-.5-.1-.9,0-1.3,.4-1.6,1.5-2.9,1.8-5.1,2.3-5.8-10-10.7-21.5-16-31.9,1.9-.9,1.7-2.9,1.3-4.3-.9-6.2,.8-9.7,.1-14.5h0Z"
												style={{ fill: "#335b85" }}
											/>
											<path
												d="M794.7,223.8c.6,.6,.8,1.6,.5,3-5.2-3.4-2.3,3.8-1.7,6,.6,1.3-.7-2.1,1.5-2.5,1,1.1,1,2.3,.2,3.5-2.6-.7-2.3,1.1-2.9,2.8-.4,.9-.8,2.4-1.6,3.2-1.6-.5-2.5-1.6-2.5-3.4,0-.4-.5-2,.7-1.8,1.7,2.2,1.9,2,.8-.5-.3-.3-.3-.6,0-1,3.4-3.1-.5-5.9,.9-9.2,2.1-4.6,1.1-6.1,2-9.9,1.1-3.5,1.3,5.4,1.1,6.3-.2,.8-.8,3.3,1,3.5h0Z"
												style={{ fill: "#8b9dc3" }}
											/>
											<path
												d="M842.6,213.7c2.6,2.3-1,5.8-.2,8.3,.6,2.5,1.4,3.3,2.4,2.4,.7-.5,1.6,.6,2.3-.1,.2-.1,.6-.1,.7,.1,2.8,4.4,12.8,5.5,12.5,8.4-1.7-.7-9.1-2.9-8.5-.4,.9,1.3,.9,2.1,0,2.5-.3-1.3-1.5-2.1-3.3-2.3-.8-.4-3-9.1-4.5-5.9-.1,12,4.5,4.7,5.2,8.7-.8,.2-2.9,.5-2.4,1.7l2.7,4.8c-.4,0-.6,.1-.5,.5l-1.9-2.1c-.5-.5-.4-2.4-1.2-2.2-.9,0-1.6-.8-1.5-1.7,.8-4.2-1.1-5.2-3.6-6.7-1.4-2.3-2,2.8-2.7,2.9-.7-1,.4-4.3-1.8-3-.4-.1-.7,0-1,.3-6.7,.2-.8-9.2-1.2-3,0,3.3,4.8-1.9,5.7-3.1l.6,3.2c.4,1.4,2.2,.2,1.8-.9-.8-2.2-.3-10.9-3.4-6.4-1.4,.8-3.4,.5-4.4,2-1.4,1-8.4,9-7.8,4l4.5-3.8c1.2-.6,2.8-1,3.2-2.5,.5-1.2,2.1-1.1,2.8-.2,.7,1,2-2.1,2.4-2.3,1.9-.2,2.9-1.3,3.1-3.2h0Z"
												style={{ fill: "#010408" }}
											/>
											<path
												d="M858.4,229.1c.1,.6,.4,1.2,.8,1.7-4.4-1-8.2-3.1-11.4-6.4-.7-.5-1.4,.6-2.2-.1-.2-.1-.5-.1-.8,.1-1,.9-1.8,.2-2.4-2.4-.3-2.8,1.5-4.2,1-7.7,1.8-1.1,.8,2,2.3,2.3,3,.5,5.9,5.7,1,2.5-1.1-1.2-1.5-1-1.3,.6,.5,1,2.3,1.3,2.6,2.7,2.1,1.5,3.6,1.8,6.1,3.6,1.8,.4,2.4,3.8,4.3,3.1h0Z"
												style={{ fill: "#0c2242" }}
											/>
											<path
												d="M48.9,228.2c.2,1.9,4.3,15,6.4,11.9,.5-1,2-1.5,2.2-.3-.5,9.6,4,20.2,7.9,28.8-.8-1.5-17.3-33.3-18-34.4-.2-7.9-5.2-11.5-9.1-17.5-1.6-8.5,8.8,10.7,10.6,11.5h0Z"
												style={{ fill: "#30699a" }}
											/>
											<path
												d="M153,216.6c4.8,3,9.6,4.3,13.7,7.9-2.8-1.3-2.8,7.1-6.7,9-3.9-4.4-7.2-9.4-9.9-15,1-1.3,1.9-2,2.9-1.9h0Z"
												style={{ fill: "#35577e" }}
											/>
											<path
												d="M658.8,217.5c-.7,1.3-.2,1.9,1.4,1.7-7.5,9-5.1,5.7-9.5,18-1.8,.6-3.1,.2-4-1.2,2.3-7.2,5.9-14,12.1-18.5h0Z"
												style={{ fill: "#9f8fcf" }}
											/>
											<path
												d="M39,218.3c-.1,.9,1.7,1.8,1.8,2.1,3.9,3.9,6.1,8.5,6.5,13.9-1.7,3.6-1.6,7.7-2.6,11.4-4.6,1.6-2.9-9.1-3.3-12,0-1-.4-1.9-1.2-2.4-3.8-2.8-.5-8.9-1.2-13Z"
												style={{ fill: "#14395b" }}
											/>
											<path
												d="M841.2,221.6c-11.4,14.7-4.4-1.2-9.2,4.5,.2-.8-.1-1.3-.8-1.5,2.2-2.1,4.3-4.3,7.5-4.8,1.9-2.4,2.7-1.8,2.5,1.8h0Z"
												style={{ fill: "#204b76" }}
											/>
											<path
												d="M761.6,218.8c-8.2,7-12.6,17.1-20,25-5,2.7,2.4-10.4,3.4-11.8l9.6-11.6c1.3,4.2,4.9-1.2,7-1.6h0Z"
												style={{ fill: "#6273a8" }}
											/>
											<path
												d="M25.2,224.6c-3.5,.2,8.1,8.4,2.5,8.6-.6,.1-2.9-.3-3.2,.4-1,2.3-2.6-1.8-3.7-.2-.3,.7-.6,1.1-.9,1.3s-.5,.1-.4-.4c-.3-5.8-2.8-1.1-3.9,1.1-2.8,2.2,1.3-5.6-1.3-4.6-1.4,1-2.2,.8-2.5-.6-.3-1.3-1.7-1.7-2.8-1.9-5.2-1.2,3.4-3.5,3-5.7-.4-5.2,5.2-.3,1.9,1.8-.3,.2-.4,.5-.4,.8-.1,1.3,.4,1.4,1.4,.4,.6-.9,.6-2.4,1.9-2.9,.6-.4-.1-1.1,0-1.7h.7c1.4,5.5,5,3.4,3-1,2-1.7,3-.1,4.3,1.1,.8,.3,1.1-.8,1.9-.5,.3,.5,6.1,1.7,3.1,2.5-1.1,0-7.5-1.5-4.6,1.5h0Z"
												style={{ fill: "#113a5e" }}
											/>
											<path
												d="M20.5,219.9c2.1,4.4-1.8,6.5-3,1,.6-1.1,1.6-1.5,3-1h0Z"
												style={{ fill: "#041730" }}
											/>
											<path
												d="M850.4,221.2c.5-.8,4.1,2,3.5,2.7-.5,.8-4.1-2-3.5-2.7Z"
												style={{ fill: "#13304f" }}
											/>
											<path
												d="M841.2,221.6c.7,1.3,2,8.1-.8,5.4-.3-1.7-1.2-4.3,.8-5.4Z"
												style={{ fill: "#13304f" }}
											/>
											<path
												d="M648.4,228.6c-8,10.5-13.4,19.7-20.4,29.3-1.4,2.9-4.1,2.1-6.1,3.3-2.6,9.7-.5,20.8-9.9,27.2-2.3-4.6,7.8-9.3,6.9-16.9,1.1-5.7,1.2-16.6,5.7-20.8,2.6-3.8,5.9-9.4,6.3-13.7,2.3-6.3,1-10.3,8.2-12,.5,2.3,4.8-2.3,6.1-2,3,1.7,6.1,1.3,3.2,5.6h0Z"
												style={{ fill: "#486691" }}
											/>
											<path
												d="M692.5,223.2c-4.8,11.4-5.8,17.3-11.9,27-1.5-.8-3-1-4.7-.7-.3,.1-.5-.1-.6-.4l-.6-1.8,5.1-11.2c2.2-5.7,4.8-14.7,12.7-12.9h0Z"
												style={{ fill: "#9a87c8" }}
											/>
											<path
												d="M166.7,224.6c4.8,4.5,6.9,13.5,13.4,17.1,10.2,3.3,16.5,9.1,20.9,19,0,3-4.4,2.6-7,3.3-1.2,.2-2.1-.4-2.7-1.8l-5.9-10.8c-8.6-5.5-18.9-9-25.5-17.6,3.8-1.9,3.9-10.4,6.8-9.2h0Z"
												style={{ fill: "#3f618c" }}
											/>
											<path
												d="M795.2,226.8c-1.9,1-2,2.1-.2,3.5-2.3,.5-.8,3.7-1.5,2.5-.7-2.2-3.5-9.4,1.7-6h0Z"
												style={{ fill: "#486691" }}
											/>
											<path
												d="M851.7,234.8l-2.5,.5c.2-2.9-5.2,.7-4.9-4.7,.4-.1-1.2-4.8,.5-4.6,2.3,1.2,2.1,4.7,3.7,6.5,1.8,.3,2.9,1,3.2,2.3h0Z"
												style={{ fill: "#0d3557" }}
											/>
											<path
												d="M682,227.8l1,.8c-6,15.3-15.6,28.2-25.2,42.5-1.1,2.8-18.9,9.1-21.3,10.6,5.5-6.5,17.9-6.7,21.5-15,8.4-12.8,16.4-25.7,24-38.9h0Z"
												style={{ fill: "#a6a8ce" }}
											/>
											<path
												d="M48.9,228.2c3.7,3.1,5.3,7.2,5,12.1-2.5-3.6-4.1-7.7-5-12.1h0Z"
												style={{ fill: "#041730" }}
											/>
											<path
												d="M648.4,228.6c1.6,.4-21.1,62.9-11.9,50.5,0,.8,.3,1.2,1,1.3-.5,.2-.9,.6-1,1.2l-2,.8c-3.1-.4-7,11.8-9.2,13.4-3.5,4.5-8.4,7.5-12.3,11.6-.6-1-1.4-1.4-2.5-1-.9,.2-1.2-1.2-2.2-.7,1.7-5.6,2.6-11.5,3.7-17.2,9.5-6.5,7.2-17.5,9.9-27.2,2-1.1,4.6-.6,6.1-3.3,7.1-9.5,12.6-18.9,20.4-29.4h0Z"
												style={{ fill: "#1f4b6d" }}
											/>
											<path
												d="M848.9,242.3c3,1.1,.3,4.6-1.2,1.5-1.8-1.6-.4-5.4-3.9-4.7-.3,0-.5-.1-.6-.4-.5-2.4-2.3-3.5-1.3,.7,.3,1.2,.1,3.7-.9,3.9-.2-.7-4.3,.5-3.1-.9,1.4-1.1,4.2-8.4,1.5-8.3,0,.6,.3,1.5-.2,2-.7-1.2-1.1-2.5-1.2-3.7,.7-.1,1.4-5.3,2.7-2.9,2.5,1.5,4.5,2.5,3.6,6.7-.1,.9,.6,1.7,1.5,1.7,.8-.2,.6,1.7,1.2,2.2l1.9,2.2h0Z"
												style={{ fill: "#14395b" }}
											/>
											<path
												d="M134.3,246.9c0,1.5-.5,1.6-1.5,.5-4.2-3.6,1.4-6.1-1.3-9.2-.4-.9,.1-10.7,.5-7.9,0,7.2,2.8,7.5,.9,12.6-.5,1.4,.3,2.7,1.4,4h0Z"
												style={{ fill: "#8b9dc3" }}
											/>
											<path
												d="M836.2,229.6c.5,1.4-3.9,7.2-3.7,4.7,1.8-1.1,1.8-4.4,3.7-4.7h0Z"
												style={{ fill: "#040e22" }}
											/>
											<path
												d="M873.8,244.7c-1.8,3.5-6.2,.3-9,3.1-1.6,1.2-8.3,4.1-4.3,6.2,1.7,1.2,.9,4.7,3.7,2.1,3.2-1.9,6.3-3.8,9.5-5.7l.1-5.7h0Z"
												style={{ fill: "#186491" }}
											/>
											<path
												d="M873.8,238.9v-1.1c-.4,.5-.5,1.7-1.4,1.7-2.9-.6-7.4-.7-9.2-2.8,.1-.3,1-1.1,.4-1.4-1.5-.4-2.6-1.2-3.4-2.5-16.6-4.6-2.3,2.2-11,2.6-.8,.2-2.9,.5-2.4,1.7,1.4,3.8,5.9,7.4,6.3,11.4-.8,2.2-4.2-3.4-3.5,.6,.5,3.1,9.3,.8,11.4,1.1,3.2-1.8,6.3-4.6,10.3-3.8,3.8,.4,2.3-5.4,2.5-7.5h0Z"
												style={{ fill: "#154b74" }}
											/>
											<path
												d="M745.1,231.9c-10.7,19.2-2.6,12.5,5.4,.6-2.1,4.6,4.5,10.9,6.7,12.5,2.3,.1,3,3,5.2,3.2,7,2.7-4.8-12.2,5.9-5.7,.4,.1,2,2.2,2.9,2.5,.3,.1,.4,.4,.4,.6,0,1.2,.7,2.2,1.8,2.5,.5,.1,4.5-1.4,4.6-.4,.6,1,0,2.2,.6,3.1,1.8,1.1,.7-1,1.6-1.7,1.4-.8,2-.7,1.6,.3,.5,2.1,1.9,3.6,4.3,4.4-2,1.4-1.9,2.1,.1,2.4l-.5,1.5c-4.1,3,6.9,5.1-2.1,6.4-.7,1.2-1.7,1.5-3,.7-8.1-4.3,5.2,6.2,6.9,6.9,.1,1.5-4.8,4.3-5.7,5.1-1.3-3.8-4.5-4.7-7.5-6-1.7-2.8-4.2-6-7.6-6.6-3.3,.7-4.5-3.1-7.1-4.3-4-2.8-5.2-4.1-8.1-8-1-1.7-2.7-.8-4.4-.8-4-1.4-8.2-1.3-10.9,2.4-3,2.4-5.5-3.3-5-5.8-.9-2.8-2.2-5.5-1.8-8.7-.1-1.2-1.1-2.2-.6-3.6,.3-1.2-.2-1.9-1.5-2.1l1-1.3c.3,0,.6,.1,.8,.4,4.6,17.2,2.7,5.8,16-.5h0Z"
												style={{ fill: "#19476b" }}
											/>
											<path
												d="M728.5,232.1c-3.3,3.5-8.1,9-13.6,10.6-.6,.1-3.2-.8-3.6,.8,0-.4-.2-.6-.5-.5,1.2-2.6,4.3-.8,6.2-2.5,4-2.6,7.6-5.4,10.8-8.6,.2-.2,.5-.2,.7,.2h0Z"
												style={{ fill: "#8c88c1" }}
											/>
											<path
												d="M262.2,232.1c20.7,31.3,26,10.9,41.8,34.5-.1,.4,0,.8,.1,1.2,.6,1.3-.4,.8-.6,.1,0-1.6-3.5-3.2-3.7-1.4,2.3,3.6-1.5,0-2.7,3.6-2.1,4.9-4.8-3.3-8.4-1.2-31.1-1.9-21.7,11.3-39.4-19.8,5.5,2.7,11.1-5.4,12.6-10.1,.5-1.1-.6-3-.2-4.4,.4-.7,.6-1.6,.5-2.5h0Z"
												style={{ fill: "#225d86" }}
											/>
											<path
												d="M20.9,303.4c-.2-.2-.5-.2-.9-.1-.7,1-4.5-3.6-2.1-3.4,2.9,.9-1.8-5.7-2.6-4.8-1.1,1-3.2,5.2-5.2,4.7-6.5-.7,3.7,3.9-7.5,7.1v14.2c1.1-5.4,5.8-.8,7.1-3.7-2.1,2-2.2-1.6-2.8-2.8,.1-3.2,2.2-7.5,4.7-9.3,4.3-2.4,2.6,8.3,7.3,3.5,.5-.5,1.4-1,2.7-1.4,.9-.2,.8-1.2,.9-1.8-.4-1-.9-1.7-1.6-2.2h0Z"
												style={{ fill: "#041933" }}
											/>
											<path
												d="M36.2,237.5c-1.8-1.9-3.8-1.1-6.2-.1l-4.6,1.2c-3.1-.1-7,1.2-9.8,1.3-1.5-.3-2.2-1.9-3.1-3-3.3-2.4-5.5-5.1-9.9-2.8v1.8c6.1,1.4-.9,1.5,0,8,1.5,0,9.2-2.5,7.3-4.2-1.1-1.1-3.6,1-4.1-.1,.1-1.8,.8-2.3,2.1-1.6,2.5,.6,4.9,3,2.3,5-1.1,.4-5.7,1.2-5.9,4-.1,.2,.1,.5,.4,.5,3.3,.4,6.7-1,10-1.1,1.5,.9,2.2,.4,2-1.4-.4-3.2,2.9,1.5,3.6,1.7l.8-.5c0-.3-2-3-.6-2.5l4.9,1.3c.5-.4,1-.4,1.5,0h0c1.8-.4,4.3,2.3,5.5,1.1,.1-.8-5.4-5.3-3.1-5.6,2.6,0,7.2,2.5,7.6-1,.3-.7-.1-1.4-.7-2h0Z"
												style={{ fill: "#0f3354" }}
											/>
											<path
												d="M830.5,233.8c-.6,.8-1.3,1.3-2.2,1.6-1.6-1.2,1.4-3,2.2-1.6Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M727.5,233.4c2.7,.4,.7,3.3,1.9,4.8,.2,.3,.3,.6,.2,.9-.4,3.2,.9,5.8,1.8,8.7-.2,2.2,.5,4.1,2.1,5.7,2,2.3,4-1.2,5.4-2.3,2.8-1.8,6.3-.2,9.3,0,2.2-1.4,4.3,1.7,4.8,2.7,2.7,3.5,6.6,5.5,9.9,8.8,4,3.5,6.5-.3,11.6,8.2,3.1,1.3,6.2,2.2,7.5,6-2,2.1-4.9,4-6.5,6.5,.7,2.2,5-1.9,5.4-3.4,.6-.9,2.3-.8,2.6-1.7-.2,.8,0,1.4,.5,1.8-.3,1.4-.9,2.6-1.8,3.8l-.5-.1c1.6-2.6-2.9-1.2-.9,.3v1c-1,.2-1.5,2.3-1.6,2.7-.8,1.8,0,2.2,2.1,1.1,1.1,.7,2,1.8,2.7,3.2-7.2,2.3-15.5,.1-22.4,2.7-8.5,5.3-16.9,11.4-25.1,18.4-4.8,5.8-11.3,7.8-18.6,6.9l4.9-5.7c.1-.2,.2-.3,.2-.4-5,4-9.6,10.1-13.9,15.3-12.6-7.8-4.9-5.7-19.3,5.8-2.5,2-7.2,7-14,14.9-2.7,3.3-7.4,4-11,3.1-5-1.7-2-9.1-9.4-1.4,.2-.7,0-1.7,.8-2.2,.6-.5,.5-.9-.3-1.1-.5-.1-4.1,2.5-4.6,2.7-.6,.6,.6,1.6-1.2,1.4-4.3,.2-13.2-2.3-9.4-7.4,.8-.5,.7-1.9-.3-1.8,5.2-6.6,10.5-13.2,15.2-20.2-7.7,8.7-15.2,18.3-23.3,26.9-5.3,4.9-7.6,12.6-13.4,16.8-8.7,4-17.7,8.4-25.1,14.4h-1.8c7.7-3.8-19.5-.5-17.9-1.4-4.6,.3-20.6-2-21,1.5l-9.8-.2c10.4-3.4,26.5-28.1,26-39.6,0-.6-1-.3-1.4-.3-1.3,.6-1.4,2.7-3,3.5-.5,.4-1.1,.2-.9-.5,4.6-7.8,7.3-16.5,11.6-24.5,1.3-1.3,4.8,1.8,8.1-.1,7.4-4,22.5-4.7,24.1-14.1,.9-.5,1.4,.9,2.2,.7,1.1-.3,1.9,0,2.5,1-5.9,7.1-11.7,14.4-17.3,21.8-3.4,4.2-9.2,7.3-12,12.7-6.4,10.5-13,21.5-17.5,32.9,8.6-12.3,14.3-26.3,24.3-38.2,12.3-9.3,15.8-21.7,27-31.3-1.9,4.9-4.5,9.5-6.8,14.1,0,.4,.1,.5,.4,.1,4.2-5.2,7.9-10.8,11.6-16.4,2.8-2.1,3.2-1.6,1.3,1.7-1.3,2.2,.4,1.6,1.6,2.2,2,2.1,5.7,2.1,8.4,1.7,2.2-1.1,4-.1,5.9,.9,2.8,.3,2.4,.1,6,1.6,1.8,1,3.3-.3,5-.9,.7,0,6.5-.3,7-.1,3.4,1.8,2.9-4,4.9-1.7,1.1,1.4,2,1.6,2.7,.4,20.2-17.9,33.1-41.8,45.8-65.2,.4-.8,1-1.1,1.8-1,5.8,.7,11.5-6.5,14.9-9.1h0Z"
												style={{ fill: "#173f5f" }}
											/>
											<path
												d="M795.2,233.9v3.5c-1.5-.7-2.6-.4-3.2,1h-.2c-.1-1,.9-1.7,.9-2.6-.2-1.7,.7-2.3,2.5-1.9Z"
												style={{ fill: "#0e1f3c" }}
											/>
											<path
												d="M841,243.4c1.5,1.1-3.5,6.3-2.3,3.6,1.1-2.3,.9-3.1-.7-2.6-1.7,2.4-2.6,5.5-5.5,7.1,3.4-6.6,.7-5.1-2.5-.7,0-1.6-.7-2.5-2.3-2.5v-.5c6-1.5,9.8-8.4,11.6-12.9-.4-1.1,.9-.8,1,0,.7,8.3-6.8,8.1,.7,8.5h0Z"
												style={{ fill: "#010408" }}
											/>
											<path
												d="M47.4,234.2l2.3,4.2c-4-2.3-.2,4.7-.5,5.4,.9,7.2,1,14.4,.4,21.7-7.1,4.5-6.2-13.2-7.5-20.7,4,5.2,3.3-8.6,5.3-10.6h0Z"
												style={{ fill: "#0f2543" }}
											/>
											<path
												d="M789.7,234.3c1.2,2.5,.9,2.7-.8,.5,.2-.3,.5-.5,.8-.5Z"
												style={{ fill: "#7379af" }}
											/>
											<path
												d="M646.7,235.9c.9,1.5,2.2,1.9,4,1.2-.3,3.5-5.5,18.2-6.7,21.8-1.5,.2-2.8,0-4.2-.5,1.8-7.7,4.1-15.2,6.9-22.5h0Z"
												style={{ fill: "#6273a8" }}
											/>
											<path
												d="M679.9,236.2c-5.3,11.9-49.2,100.5-17,43.6l7.1-12c.4-.2,2.3-.7,1.9,.4-1.1,2.1,.5,3.5,2.4,2.8,4.6-2.9,9.9,1.6,14.1,2.3,1.7,2.8,7.8-6,7.6-8.1,3.9-4.1,5.4-9.8,9.7-13.8-7.4,13.1-20.2,36.7-29.8,45.7-5.1,5.2-8.6,9.1-10.6,11.8-.7,1.2-1.5,1-2.7-.4-.7-.9-1.3-.8-1.7,.3-.8,2.2-2.4,1.5-4.2,1.3l-6,.2c-4.2,2.9-7.2-1-11-.7-1.9-.9-3.7-2-5.9-.9-1.3,.7-2.6-.1-3.9-.1-1.8,.2-3.3-.3-4.5-1.6-1.2-.6-3,.2-1.6-2.2,1.9-3.3,1.5-3.9-1.3-1.7,6-6,9-14.9,12-20.6,.1,.1,19.6-8.5,20.4-8.9,10.7-10.6,17.5-25.6,25-37.4h0Z"
												style={{ fill: "#19476b" }}
											/>
											<path
												d="M873.8,284.6c-3.3-5.6-9.4-9-8.8-16.5,.6-3.8-4.9-5.5-4-8.6,1.7-1.6,.6-2.8-1.4-2.9-3.4,.2-6-7.2-.3-4.7l1.5-1.8c-2.1-.4-11,2.1-11.4-1.1-.3-1.6,.1-2,1.2-1,5.1,3.5,.3-5.1-1.3-6.2-.4,0-.6,.1-.5,.5,3,1.1,.3,4.6-1.2,1.5-1.8-1.6-.4-5.4-3.9-4.7-.3,0-.5-.1-.6-.4-.5-2.4-2.3-3.5-1.3,.7,.3,1.2,.1,3.7-.9,3.9,.2,.2,.3,.4,.3,.7l2.7-3c1-1.2,2.3-.1,1.4,1.1-1.1,1.4-1.4,3.1-.8,4.8,.3,1.1,.4,2.1,1-.4,.1-.3,.4-.4,.6-.3,3.6,.8,.6,6-1.7,4.7-1.4-.5-1.2-7.5-2.2-4.4,.1,2.6-3,16.1,1.4,8.3,.6-2.3,1.8,.2,1.1,1.2l-2.8,4.3c7-5.8,2.2,18.9-2.9,10.6l-1.7,4,.4,6.9c4.6-7.1,3.5-5.9,7.7,.4-.6,3.3-3.5,8.2,2,8.6,1.8-2.2-.5-6-.4-8.6,.4-1.9-.1-3.3-1.6-4.4-1.2-.8-1.9-2-.1-2.4,.9-.1,1.8-1.4,2.3-1.9,1.9,.9,.5,5.4,.9,7.5,1.8,6.6,20,11.5,11.7,14.3,11.1,2,8.1,9.3,13.6,5.3v-16h0Z"
												style={{ fill: "#041730" }}
											/>
											<path
												d="M795.2,237.3c-.1,.8,.1,1.5,.5,2.1-.2,1.2-2.6,3.6-2.7,2.5,1-1.6,.6-2.8-1-3.6,.6-1.4,1.6-1.7,3.2-1h0Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M824.5,241c1.3-2.9,4.7-.7,6.2-3.4,1.5-.3,.9,1.2,.1,1.5l-6.3,1.9h0Z"
												style={{ fill: "#010408" }}
											/>
											<path
												d="M873.8,311c-1,1-1.1,2.2-.1,3.9,0,.1,.1,.1,.1,.2v-4.1Z"
												style={{ fill: "#0e1f3c" }}
											/>
											<path
												d="M873.8,250.3c-2.1,.5-11.8,8.9-12,5.6,.2-1.5-3.7-3.4-2.3-4-5.7-2.4-3,4.9,.3,4.7,2.1,.1,3,1.2,1.4,2.9-1.1,2.9,4.7,3.8,4.3,11.7,.4,5.8,5.9,8.5,8.5,13.4v-34.3h-.2Z"
												style={{ fill: "#0e1f3c" }}
											/>
											<path
												d="M873.8,300.9c-.5,.1-2.8,2-3.3,1.2-1.3-3.5-13.3-9.5-15.5-6.3,.5,2.7,3.1,5.4,3.5,8.1,.3,1,.7,1.1,1.2,.1,2.6-4.8,5.4-4.9,8.4-.1l5.5,4.9,.2-7.9h0Z"
												style={{ fill: "#0e1f3c" }}
											/>
											<path
												d="M131.4,238.1c2.6,3.1-2.9,5.7,1.3,9.2,.5,1.2,.1,1.6-1.2,1.2-3.6,5,.9,4.4,3.8,7.1l1,2.7c-.8,.3-1.5,.8-2,1.5-3.3-2.3-3.6-6.4-6-.3-2.4-.2-3.5-2.4-5,1.6-.3,.3-.6,.4-1,.2,.4-3.9,7.2-4.6,5.8-7.1-2-2.6-.4-5,1.2-7.6,.7-2-.6-8.6,2.1-8.5h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M791.8,238.3c1.7,.5,2.2,2,1.2,3.6,.1,1.1,2.4-1.1,2.7-2.5,.7,1.9,.7,3.8,0,5.6-4.1-2.3-2.2,5.9-5.6-3.8,.2-1,1-2.2,1.7-2.9h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M830,241.3c3.8-3.4,2.6,.8,.6,2-2.6,1.7-1.6-1.2-.6-2h0Z"
												style={{ fill: "#010408" }}
											/>
											<path
												d="M163.2,273.1l3.8,5.7c.3,.4-.3,1.1,.2,1.3,6.9,5.2,12.8,12.2,20.9,15.5,5,1.5,9.8,3.1,14.6,4.6,.8,0,.9,.1,.3,.5-.2,.1-.2,.2,.1,.2,4.3-.3,8.6-1.1,12.8-2.6,1.9,6.1-3.2,4.3-6.3,8.1-3.2-3.7-13.7,5.1-25.1-1.9-13.1-7.9-25.1-12-37.8-21.5-.7-2.8-2.5-4.2-5.4-4.2-.1-1.1-.6-1.9-1.3-2.4,.4-2-.5-3.1-2.7-3.3l.5-3c8.8,3.5,2.9-2.1-1-4l.8-3.2c1.6,.5,2,.1,1.2-1-1.2-1.9-2-3-2.5-3.5l-1-2.7c.3-1.4,.2-3.9-1.5-4.3-.7,0-.9,1-1.5,.8-1.8-.8,2.3-1.6-.7-3.6,1.3,.4,1.7,0,1.2-1.2,1,1.1,1.5,.9,1.5-.5l.9-4.4c.4-.9,1.9-.8,2.5-1.7,2.2,5.5,1.5,15.7,6.4,20.1,1.4,2.7,.3,6.9,3.4,8.1,.7,.4,.9-.1,.5-1.7,.5-1.6,4.9,3.8,5.8,3.4,1.4-1.2,1.9,1.4,2.1,.6,.2-.9,.1-1.7-.3-2.5q-.1-.3,.1-.1c2.3,1.7,4.6,4,7.5,4.4h0Z"
												style={{ fill: "#15466e" }}
											/>
											<path
												d="M207,240.3c3.5,7.8,7.3,15.4,11.5,22.9,3.2,1.4,.7,4.5,2,6.7l-.1,1c-1.1,2-.9,5.5-2.9,8.9-.7,2.3,1.5,5.4-1.7,6.6-4.5,1.5-5.8,9-.3,4.5,.9-.9,1.3,.2,.5,.7l-3.1,2.8c-2.2,2.1-2.1-.3-3.9-1.3-10.5-5.5-16.8-15-24.1-23.6-.5-.3-19.8-8.5-19.6-8.8,0-.5,.2-.7,.7-.5,6.8,2,13.7,4.2,20.8,6.4,2,0,2.2-3.5,4.6-4.3,.6,2.4,3.3,1.8,4.5,1.5,1.8-.3,5.5-.7,5.2-3-2.3-4.3-4.9-8.3-7.8-12.2,2-3.7,3.4-.2,5.5-1.1,1.5-1.3,3-2,4.3-2.2,.9,.1,1.6-2.9,2-3.4,.5-.7,1.7-.2,1.9-1.6h0Z"
												style={{ fill: "#225d86" }}
											/>
											<path
												d="M841.2,256.9c-1,.7-1.9-.9-3-.8-2-.2-2.6,6.6-4.6,3.4,2.6-6.5-5.2,4.8-5.8,6.5-1.9,3.7-5.1,7.2-9.3,8-2.1-.1-1.9-.9,.5-2.3,3.1-1.8,5.2-4.5,6.3-7.9,1.5-2.3,3.7-4.1,5.5-6,.9-1.8,.7-2.1-.6-.7-1.7-2.5-.3-3.2,1.4-4.2l.8-1.1c2.9-1.5,3.8-4.7,5.5-7.1,1.6-.5,1.8,.3,.7,2.6-.8,2.5,2.4-1.7,2.6-2.9,.5-.4,2.8-3.5,3.5-3.5,2.6,.1-1.9,4.3-.2,6.4,.3,1.1,.4,2.1,1-.4,6.2-.6-2,10.7-2.5,.1-1.1-3.6-1.6,8.3-1.8,9.9h0Z"
												style={{ fill: "#153b5f" }}
											/>
											<path
												d="M790.2,241.3c.6,.6,1.5,6.8,3,4.2,.8-1.9,4-.4,3.3,1.3h-.7c-2.7-1.7,.3,2.8-4.8,3.3-.7-1.4-1.8-1.8-3.2-1-1.9-.1-.4-2.3-1.7-2.8-3.6-.5,3-4.1,4.1-5h0Z"
												style={{ fill: "#a6a8ce" }}
											/>
											<path
												d="M827.3,241.9c.3-.3,.5-.2,.6,.2,.7,5-4.4,3.4-.6-.2h0Z"
												style={{ fill: "#010408" }}
											/>
											<path
												d="M284.2,241.8c17,9.2,19.3,10.8,39.2,21.9,7.2,4.2,15.1,8.4,20.5,14.9-.6-.1-1.2-.5-1.6-1.3-2.1-3.9-7.7-.2-3.1,2.7-10.4-8.8-4.1-1.8-13.9,.4-2.2,0-1.9-3.4-3-4.8-2.9-5.3-5.4,2.8-11.9-1.8-12.5-13-11.1-19.4-30.7-22.9-.2-2.8,1.2-4,2-5.8,.1-1.7,.9-2.8,2.5-3.3h0Z"
												style={{ fill: "#486a9a" }}
											/>
											<path
												d="M170.4,242.8c14.1,8.9,13,2.5,21.1,19.2-2.5,.8-2.7,4.4-4.6,4.3-7.1-2.2-14-4.3-20.8-6.4-.5-.2-.8,0-.7,.5-1.2,1.6-3.9-3-.8-1.4,.4,.2,1.3-.2,1.7,.1,.7,.1,.4-1.2,1.2-1.4,1-.6,1.6-1.6,1.5-2.8,.9-2.1,1.9-4.1,.6-6.4-.4-.6,.8-5,.8-5.7h0Z"
												style={{ fill: "#1a5176" }}
											/>
											<path
												d="M710.7,243.1c-2.9,9.8-11.6,21.2-17,31-.3,.1-.6,0-.8-.3,3.3-5.8,14.3-25.1,17.3-30.5l.5-.2Z"
												style={{ fill: "#cfd7df" }}
											/>
											<path
												d="M25.5,244.9c4.3,5.1-2,2.2-4.3,1.2,.1-.3-2-3-.6-2.5l4.9,1.3h0Z"
												style={{ fill: "#04132b" }}
											/>
											<path
												d="M710.2,243.4l-4.5,8c-2.1,2.1-3.7,4.3-4.8,6.6-1.2,2.9-3.3,4.9-4.9,7.2,0,2.1-5.8,10.9-7.6,8.1-5.5-1.2-8.9-5.2-15-2.1-4.1-.2,.7-4.8-3.4-3.4,2.3-3.6,9.9-16.7,12.8-19.4,.7-.6,1.4,.4,2.1,.2,1.3-.8,1-3.1,3.2-1.2,1,.4-.1-3.7,2.6-1,3.5,.4,7.6,.2,11.2,.1,1.5-.4,1.8,.2,.8,2.1-.5,1-.3,1.7,.7,2.3,2.9-.9,3.2-7.5,6.8-7.5h0Z"
												style={{ fill: "#1a5176" }}
											/>
											<path
												d="M27,244.9l2.4,3.2c2.4,.8,4.9,1.6,5.8,4.5-1,.2-4.8-1-4.9,.8,0,4.6-2.3-1.9-3.8-1.2,.4,1.7,1.2,3.4,1,5.2-.5,1.3-2.6,.1-2.3-1.1,.4-4.3-3-4.5-4.8-2-.5,1.6,.2,2,2,2.9,1.7,.4,2.8,4.6,.1,3.3-2-1.3-3.4-4.6-4.9-6.3-1.2-1.1-2.4,2.1-3.7,.9-2.7-2.4-7-.5-10.3-1.6-.8-1-.3-2.1-.3-3.2-.2-2.5,3.2,.4,6.1-.2,1,.3,2.8-4.7,2.7-1.6-.6,1.6,1.1,3,2.3,1.9,.4-.4,.9-1.4,1.6-1.4,1.3,.1,1.7-1.4,2.7-1.4,.9,.3,1.5,0,1.7-.9l.8-.5c2.3,1,8.6,3.9,4.3-1.2,.5-.5,1-.5,1.5-.1h0Z"
												style={{ fill: "#13304f" }}
											/>
											<path
												d="M247.5,246.3c.7,.9,12.5,20.8,13.5,22.5,1.5,1.5,1.3,6.3-1.3,5.5-1.8-.6-3.7,1.2-5.6,1.1-4.4-.1-9.4,.3-13.4-1.6l-13.7-24.5c6.8-1.3,13.6,.7,20.2-.5,.7-.3,.3-2,.3-2.5h0Z"
												style={{ fill: "#2e608a" }}
											/>
											<path
												d="M795.7,246.9c-.3,.9-.3,1.8,.2,2.5,4.5,.8-2.4,3.6-.1,5.4,.7,1,1.1,2.2,2.6,2.4,.9,.1,.7,1.1,1.3,1.3,2.2-.1,1.8-6,1-5.9-1.3-.9-1.3-1.4,0-1.8,1.5-.4,4.1,.7,1.8,2-1,.8-.5,2.3,.3,3,6.9-1.5,.3,4.1-2,5.4-1.6,.8,2.5,1.9,2.3,2.4,.9,.9-4.4-1-5.9,.3-6.9-2.2,.6,4.4-3.5,3.7-.7-.2-.5-1.6-.7-2.1-.7-1.5-2.9-.5-2.5,1.5-.1,.2-.3,.3-.5,.3-1.5-1.6-3.5-2.6-6.1-2.9,9-1.3-2-3.5,2.1-6.4,.4,1.3,1.3,2.1,2.5,2.5,.9,1.4,1.9,.3,2.8,.9,1.5,1.9,2.2-1.5,1.2-2.4-1.8-2.6-3.1,.8-3.3-1l1.5-1.8c2.2,.7,2.6,3.4,4,4.5,5-2.1-2.2-7.1-3.9-9.4l.2-1c5.1-.5,2.1-5,4.7-3.4h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M795.7,246.9h.7c-.6,1,1.9,2.9-.4,2.5-.5-.7-.6-1.6-.3-2.5h0Z"
												style={{ fill: "#7379af" }}
											/>
											<path
												d="M832.5,251.6c-1.2,2.2-4.5,1.9-2.2,5.3l-5,5.4c0-.1-.2-.1-.7-.2,1.5-2.1-2.4-.8-2.3,1-1.6-.1-2.7-.9-3.2-2.5,1.9,.2,2.7-.4,2.5-2,1.6-1.3,3.8-1.4,5.5-2.8,.7-.6,1.2-1.7-.4-1.2,.7-1.8,5.3-1.3,3.3-3.7,3.2-4.4,5.9-5.8,2.5,.7h0Z"
												style={{ fill: "#204b76" }}
											/>
											<path
												d="M674.8,247.3l.6,1.8c1.4,.9,3.7-.2,5.3,1.1-4.5,8-13.2,21.6-17.7,29.6-9.9,4.3,11.3-29.1,11.8-32.5h0Z"
												style={{ fill: "#7379af" }}
											/>
											<path
												d="M827.8,247.9v.5c-2.2,1.3-2.6,4.2-4.3,5.6l-2.5-.4c-.7-1.7,2.7-2.5,3.5-3.8,.6-1.4,1.7-2,3.3-1.9h0Z"
												style={{ fill: "#010408" }}
											/>
											<path
												d="M131.5,248.5c3,2-1.1,2.8,.7,3.6,.5,.1,.9-.8,1.5-.8,1.6,.4,1.9,2.8,1.5,4.3-3.1-2.6-7.2-2.4-3.7-7.1h0Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M791,250.1c0,1.1-1.5,3-2.5,2.1l-1.7-2.3c1.4-1.2,3.3-1.8,4.2,.2Z"
												style={{ fill: "#010408" }}
											/>
											<path
												d="M786.8,249.9c1.2,1.6,2.2,3.9,4,1.2,.7,.4,1.2,1,1.5,1.8-1.1,.9-1.6,2-1.5,3.2l-1.5,1.8c-2.9,.2,.2,1.2-.7,2.4-1.2-.4-2.1-1.2-2.5-2.5l.5-1.5c4.7-3.3-4.2-1.6-4.4-6.8,1.5-.8,3.1-.7,4.6,.4h0Z"
												style={{ fill: "#8b9dc3" }}
											/>
											<path
												d="M848.1,251.5c5.6,4.4,.9,7.5-.9,4.1-.2-1.1-1.3-5.2,.9-4.1h0Z"
												style={{ fill: "#102b4a" }}
											/>
											<path
												d="M37,256.8c-.3-2.3,.1-3.3-1.8-4.3-1,.2-4.8-1-4.9,.8,0,3.9-1.8-.3-3-1-1.9-1.4,.9,4,.2,5-4,3-.4-7.3-6-4.2-2.1,1.2-1.5,3.1,.9,4,1.7,.4,2.8,4.6,.1,3.3-2-1.3-3.4-4.6-4.9-6.3-1.2-1.1-2.4,2.1-3.7,.9-2.9-2.2-7.7-1-11.2-1.4v7c4.1,1.2,9.4,1,13.2-.6,1-1,2-.8,3.2,.5,4.9,5.7,11.7-1.8,17.7-1.6,.1-.6,.3-1.3,.2-2.1h0Z"
												style={{ fill: "#04132b" }}
											/>
											<path
												d="M792.3,252.9c1.9,1.7,6.8,6.2,2.4,7.6-.3,.1-.5-.1-.6-.4-.5-1.8-1.7-3.1-3.4-4.1,0-1.2,.5-2.3,1.6-3.1h0Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M83.2,256.1c-.5-.1-.7-.4-.8-1-1-1.6,.6-1.9,.8-.7v1.7Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M786.4,254c2.1,.1,2.1,.9,.1,2.4-2.1-.3-2.1-1.1-.1-2.4Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M842,260.3c-2.5,4,3.4-1.1,2.5,2.3-.8,8.6-3.8,1.3-5.4,8.5l-1.7,4c-2.2-1.4-3.2-3.4-3-6.1,0-.5-.2-.9-.7-1.1-2.7-1-3-1.6-1.1-1.8,.6,.1,4.3-3.7,4.8-4,1.4-1.3,.7-3.3-1.6-3.1,2.1-5.5,2.9-1.7,5.4-2.3,.6,1.9,1.7-1.6,2.4-2.1,.6-2.3,1.8,.2,1.1,1.2,0,0-2.7,4.5-2.7,4.5h0Z"
												style={{ fill: "#041730" }}
											/>
											<path
												d="M823.2,257.6l3.6-3c3.5-.3-2.6,3.2-3.6,3h0Z"
												style={{ fill: "#010408" }}
											/>
											<path
												d="M825.5,263.6l-.1-1.4c9.1-10,7.1-6.3,.1,1.4Z"
												style={{ fill: "#010408" }}
											/>
											<path
												d="M134.2,259.9c.2,.8,.6,1.5,1.3,2-1.9,2.6-3.6,2.1-4.8-1.6,.9-1.5,.4-2.2-1.7-1.9,1-4.8,3.3,.3,5.2,1.5h0Z"
												style={{ fill: "#3f618c" }}
											/>
											<path
												d="M833.7,259.3c-.4,2.1-4.3,2.1-2,4.6,1.4,1.5-1.6,.7-1.5,2,0,.4-.2,.6-.4,.8-6.7,3.3,7.3-14.9,3.9-7.4h0Z"
												style={{ fill: "#010408" }}
											/>
											<path
												d="M788.5,260.3c.9-1.2-2.2-2.3,.7-2.4,.2,1.8,1.5-1.6,3.3,1,1.2,.8,.2,4.5-1.2,2.4-.9-.5-1.9,.3-2.8-1h0Z"
												style={{ fill: "#a6a8ce" }}
											/>
											<path
												d="M83.5,258.3c.9,.1,4.4,4.7,1,3.5-2-.7-2.3-1.8-1-3.5h0Z"
												style={{ fill: "#486a9a" }}
											/>
											<path
												d="M136.2,258.3c-.2-.1,5.4,6,1.3,4.5-1.2-.7-3.1-1.4-3.3-3.1,.5-.5,1.2-1.1,2-1.4h0Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M639.8,258.3c1.4,.6,2.8,.8,4.2,.5-8.3,27.6-14.1,29.6-4.2-.5h0Z"
												style={{ fill: "#486691" }}
											/>
											<path
												d="M821.7,258.6c.2,1.6-.6,2.2-2.5,2,.6-1,1.5-1.6,2.5-2Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M835.9,259c6,.4-1.5,6.2-3.2,7.1-2,.2-1.6,.8,1.1,1.8,.5,.2,.8,.6,.7,1.1-.2,2.7,.8,4.7,3,6.1l.4,6.9c-1.6,2.5-.1,5.8,1.8,7.9-1.1,2.1-2.9,3.4-5.2,3.8,.5-1.9,.2-3.7,.4-5.6,.5-1.1,.1-1.3-.9-.5-1.9,.9-3.9,1.4-6,2.8-5,12.7-5.1,15.4-3.9-.8,2-4.4,9.9,.5,8.2-8.8-.2-1.7,1.6-2.9,2.5-4.1,1.6-6.1-9,8.8-10.3,8.7-.7,.9-2.5,.4-3.2,1.2-.5,.5-.2,1.6-.8,1.9-.8,.2-.7-.7-.7-1.4,.5-1.3-1.3-2.4-1.7-1.2-.2,4.1-3.2,.8-3.5-1.4,1.9-2,1.4-2.8-1.4-2.2,.2-.6,.2-1.3,0-2,1.2-.2,1.8-2.2,.5-2.8-1.2-.4-1.2-.8,0-1.4,1.4-.8,2.9-.2,4.2-.1,.7-.3,.1-1-1.8-2.1-.3-.1-.3-.5,0-.7,3.6-2.7,6.8-5.9,9.7-9.6-1.1,3.5-3.2,6.1-6.3,7.9-6.4,4.6,6.1,2,8.8-5.7-.1,1.3,.5,1.6,1.9,.8,.6-.3,.2-1.6,1.2-1.6,1.1-.1,1.3-.5,.7-1.2-2.2-2.6,1.5-2.4,2-4.6,.3,1.5,1,1.4,1.8-.2h0Z"
												style={{ fill: "#0d2a49" }}
											/>
											<path
												d="M38.8,284.8c-3-3.1-8.2-1.3-11.3-3.8-.3,0-.5,.2-.5,.6,.3,.8-.7,1.5-3.1,1.9-5-.1-.8-5.4,2-3.5,1.6-.6,2.8-.7,3.5-.3,3.1,2.2,4.2-.4,2.8-2.8-1.2-1.8,1-1.7,2.1-.9,1.6,1.7,6.4,2.6,3.7-1.2-.6-1.7-7.9-6.7-7-2.8,.5,1,.5,3.5-1.1,3.6-3.3-1-7.7-2.3-8-6.1-1.1-4.6,2.9-2.4,5.5-1.1,2.5,1.2-1.4-4.5,4.5-1.9,2.4,1.2-3.9-4.8,1.3-2.4,2,.6,.9-2.9,2.9-2.7,1.3-.1,1.2-1.5,.3-2.3-6-.3-12.9,7.5-17.7,1.5-1.1-1.2-2.2-1.4-3.1-.3-3.1,1.4-7,1.1-10.6,1.2l-1.2,2.6c-.9,1.4-2.1,2.3,.7,2.3,3.7-2.7,6.5,5.5,12.2,.1,1.1-1,1.8-.7,2,.7,.1,1.3-7.4,8.4-2.5,6,3.3-3.6,10.3,1.7,6.5,4.1-6.7,.5-14.3-7.9-20.2-.9v4.3c.1,.1,6.3-1.7,6.6-1.8,2.3,.7,1.7,4.2-.3,5.1-1.1,.2-2.1-1.1-3.1,.2-.5,.8-2.4,.9-3.2,1.1v8.1c3.9,.8,3.7-7.2,6.8-4.9,4.7,3.9,4.5-2.4,8.7-3,3.4-1.1-2.5-4.2-4.2-5.1-2.1-2.7,3.3-1.7,3.8,.4,2.9,4.6,4.9,4.1,1.9,9.8-1.9,2.6-5.5-1-7.5,1.5-1.3,1.6-3.4,.3-4.4,2-1.5,3.1-2.9,1.1-5.2,1.1v3.8c.6-.2,.6,.4,0,1.9v6c11.1-3.2,1.2-7.6,7.5-7.1,2,.6,4.1-3.7,5.2-4.7,.8-.8,5.3,5.5,2.6,4.8-2.3,.2,1.4,4.3,2.1,3.4,1.3-.2,1.9,1.1,2.5,2.1,.3-.4,.7-.6,1.2-.8-.5-1.8-.1-7.4,2-3.3,3.7,2.5-2.3-8.4-3.4-9.7-2.1-2.8,3.5-3.5,5-4.4,.3-.1,.6,0,.7,.2,1.9,3.5,2.4,3.3,1.5-.6-.2-.8,.1-1,.8-.7,.9,.9,11,1.5,8.7-1.3h0Z"
												style={{ fill: "#0c2242" }}
											/>
											<path
												d="M839.1,271c.9-6,4.5-1.7,4.9-6.1,2.5-8.2-4.2,.3-2-4.7,7.1-5.8,2.1,19-2.9,10.8h0Z"
												style={{ fill: "#010408" }}
											/>
											<path
												d="M130.6,260.2c1.3,3.7,2.9,4.2,4.8,1.6l2,1.1c-.2,.8-.7,3.6-1.2,4.2-5.2-5.4-2.8-.7-6.3,1.8-3.8-1-5,4.2-8.6,2.7,2.6-4.3,5.7-8,9.3-11.4Z"
												style={{ fill: "#040e22" }}
											/>
											<path
												d="M122.2,261.3c.4,.1,.7,0,1-.2,1.7,.5,5.2-1.3,3.5,1.2-2.5,3.3-10.9,5.6-4.5-1h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M824.7,262.1c-.6,.6-1.4,1-2.2,1-.3-1.7,4-3.2,2.2-1h0Z"
												style={{ fill: "#010408" }}
											/>
											<path
												d="M506,307.3c-8.7,7.2-24.9,17.6-27.7,19.6-1.6,1.5,1.5,1.6,1.9,2.5,.1,.4,0,.5-.4,.3-12.2-3.1-22.4-11.7-34.6-14.3-8,1.1-14.6-9.5-19.8-11.9-4.6-2.6-10.6-.8-15.6-3.4-7-3-13.9-7-20.4-11.9-3.8-3.9-12.5-.3-14.9-5.6-3.3-4.8-6.6-12.2-10.9-15.1-.1,.1,.5,5.3-.7,2.9-4.5-13.7-1.7-5-12.4-1.4-3.4-3.7-7.5-3.9-11.2-7.5,12.8,2.2,6.7,9.2,19.9-.3,4.3,.2,11.7,13.5,14.8,17.2,2.3,4,9.6,4.9,14.1,6.9,6.3,2.9,12.7,8.4,17.9,10,5.5,3.5,16.2,1.2,22,6.3,4.9,4.3,8,9.6,14.1,11.4,12.1,.8,20.3,9.6,32,12.4,9.9-3.8,19.1-11,28.7-17.6,.7-.6,2.9-1.4,3.2-.5h0Z"
												style={{ fill: "#aea6dc" }}
											/>
											<path
												d="M166.7,261.4l18.1,8c7.4,8.6,13.6,18.1,24.1,23.6,1.7,1.1,1.9,3.3,3.9,1.3,.3,.9,.9,1,1.8,.4,.9,.5,3.1-1.1,2.6,.6-1.7,5.5-9.5,4.3-14.2,5.4-.7,0,1.2-.9-.4-.7-6.3-2.4-14.1-3.2-19.7-7.5-3.5-1.6-6.6-5.8-10.3-7.4-.1,0-.2-.3-.3-.7-1-2.1-5.2-3.1-5.3-5.4,.1-.1,0-.3-.1-.4l-3.8-5.7c-1.7-2.7-2.9-7.3-.6-9.3,2.1,.7,.7,2.1,1.3,3.3,1.2,.6,1.6,.4,1.4-.8-.3-1.8,.8-3.2,1.5-4.7h0Z"
												style={{ fill: "#1a5176" }}
											/>
											<path
												d="M23.7,275.3c-3.4-7.3-8.8,.5-9.1-2.1,.9-2.2,3.5-3.6,4.1-5.9-.5-4.1-5.3,4.8-10.8-.8-1.2-1-2.4-1.1-3.4,0-.9,.4-1.5,.4-1.9,0v1.8c5.5,2.7,6.5,2.8,0,5.1v3.3c5.8-8.5,21.3,6.6,21.1-1.4h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M374.5,282.6c-.2,1-.9,.9-1.7,.5-1.5-.7-2.2,1.1-3.9,.9-2.7,4.6-9.3,3-11.5,7.8-6.2-4.2-12.7-13-18.5-18.5,.1-.6-.4-2.3,.5-2.5,2.8-.6,2-4.7,3.8-4.9,6.8,7.1,11.3,.2,17.1-3.1l2.7,7.5c1,2.2,.7-2.5,.7-2.9,4.2,3,7.6,10.3,10.8,15.2h0Z"
												style={{ fill: "#27628b" }}
											/>
											<path
												d="M83.7,263.6c1.2,.3,3.2,2.6,1.7,3.5-2-2.9-3-1.1-4.8,.4-.9-1.3,1.8-3.2,3.1-3.9Z"
												style={{ fill: "#3f618c" }}
											/>
											<path
												d="M783.8,264.3c9.3,1,5.1,7,10,10.1-.2,.8-.8,1.2-1.7,1.2-.5-.3-.9-.2-1.1,.3-.3-.5-.7-.6-1.2-.5,2.2-2.1,0-3.7-2-3.4-1.7-.7-15.1-11.2-6.9-6.9,1.2,.6,2.2,.4,2.9-.8h0Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M797.2,263.9l2,1.7c.7,.9,.3,2,2,1.9-.8,1-1.8,1.6-3,2,.7-1.7,.3-3-1.2-3.7-.2-.1-.4,0-.3,.3l.3,3.7c-3.3,1.7-4.1,0-6.4-3-.3-2,1.6-3,2.5-1.5l.2,1.4c.3,1.1,2,1.2,1.8-.1-.7-2.1-2.3-4,2.1-2.7h0Z"
												style={{ fill: "#5979ad" }}
											/>
											<path
												d="M136.2,267.1c.1,1.3,.6,2.3,1.5,3l-.5,3c-.5-.1-.8,.1-.8,.5-.4-.2-.6-.5-.5-1,1.1-2.4-2-2.4-2.9-3.3-2-4.7-.5-6.5,3.2-2.2Z"
												style={{ fill: "#35577e" }}
											/>
											<path
												d="M835,265.6c2-2.6,2,.2,.8,1.7-1.6,1.2-1.4-.9-.8-1.7h0Z"
												style={{ fill: "#13304f" }}
											/>
											<path
												d="M813,280.4c2.2,10.7-17.8-11.2-14-2.4,1.6,3.9-4.1-2.2-2,3l-3.7,1.2c1.3-1.1,4.2-5.4,1.7-6.7-4.7-2.9-2.8-4.2-5.1-8.2,.2,0,.4-.1,.5-.3,2.3,3,3.1,4.7,6.4,3,1.6-.2,3.2-.9,4.2-2.2,1.2,0,3-1.3,4.4-2,2.8-.7,3.1-.4,.9,1-1.7,.5-3.3,1.3-3.5,3.3-.4,1.1-2.5,1.5-.6,2.7,2.1,4.1,6.5,6.3,10.8,7.6h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M817.6,267.2c-1.5-.7,1.8-1.8,2.8-1.9,3.2-.2-1,3-2.8,1.9Z"
												style={{ fill: "#010408" }}
											/>
											<path
												d="M784.9,266.5c.3,3.2-3.3-2.1-.5-.7,.2,.1,.4,.4,.5,.7h0Z"
												style={{ fill: "#c5c2ed" }}
											/>
											<path
												d="M798.2,269.6l-1.2,.2-.3-3.7c.9-1.1,2.5,2.2,1.5,3.5Z"
												style={{ fill: "#14395b" }}
											/>
											<path
												d="M136.7,266.1c1.5,.3,8,5.6,4.6,5.1-2.4-.5-6.5-1.8-4.6-5.1Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M131.9,266.3l1,3c-3.4,.8-5,6.7-.2,6.6,1.5,.3,.2,5.6,.4,6.5-1.6-.5-3.1-.5-4.7,0-1.1-1-1.3-2.3-.8-3.8,2-1.3,2-2.5,0-3.6-2.2-3.8,1.7-3.2,2.3-6.2,1-.6,1.7-1.4,2-2.5h0Z"
												style={{ fill: "#14395b" }}
											/>
											<path
												d="M788.3,268c1.9,.5-.4,2-1.5,1.5-1.2-.7-.3-3.6,.7-2,.2,.2,.4,.3,.8,.5Z"
												style={{ fill: "#c5c2ed" }}
											/>
											<path
												d="M84.5,269.9c.2,7.3,16,.3,19.2,0,2.3,1.4,18.3,8.6,17.2,3.8-.5-.8,.4-1.7,.6-2.3,3.6,1.4,4.7-3.7,8.6-2.7-.5,3-4.4,2.4-2.3,6.2-3.5,0-9.6,3.7-4.8,3.6,1.6-.1,3.2-.1,4.8,0-.6,1.5-.3,2.7,.8,3.8-1.9-.1-4.3,2.2-3,3.7,.2,.1,4.9-1.9,4-.7-1.4,3.6-8,6.3-7,11.4,1.8,.9,2.7-2.6,4.3-.9l-.1,.8c-.3-.7-.6-.8-1-.2-1,1.3-.2,2.5,.2,3.8,.1,1.6-.5,2.1-1.6,1.3-.2-.2-.3-.5-.3-.8,1.2-5.2-3.3,2.1-3.1-.8,.1-2-.3-2.6-1.3-1.8-3.2,2.8-6.2,4.7-9.4,7.4-2.1,1.7-1.9,2.4,.7,1.9,4.3-.9,8.4,.2,12.7-.5,1.4-.8,2.5-2.6,4.5-2.3l-.7,5.5c-.7,1.8-3.5,2.7-4.2,.8,.4-2.8,0-3-1.3-.5-1.7,4.5-5.7,1.4-7.7,4.2-.2,1.8-5.7,3.9-4.4,1.5,.7-1.7,5.1-2.6,4.4-4.5-1.9,.2-3.8,2.5-6,2.9-5.3,1.4-7.8,3.1-3.1,7.2-.8,.4-.8,1.1,0,2,1.1,2.5-4.8,1.5-2.9,4.3,2.6,5.4-2.8,1-2.7,4.2-1.5-3.3-4.2-5.3-7.9-6.1-.1-.6-.6-.8-1.3-.4,.2-.3-1.8-5.8-.2-4.1,1.3,1.2,2.5,1.2,3.6,0,.4-1.8-1.9-3.5-3.2-4.6,3.2-1.2,3.1-2.5-.1-4,.9-3.4-3.6-4.9-2.7-6.4,3.2,2.6,5.8,6.6,10.2,8,5.4,1.5-3.8-8-7.2-7.3,.4-2.1-1.1-3.3-1.5-5.1,0-.5-.2-.8-.8-.8-1.6-1.4-2.8-3-3.8-4.9,2.9-1.6,3.5,2.7,6.3,3,2.5,.7-1.2-1.7-1.5-2.1-.7-1.3-5.5-4-5.4-1.1-.7-.1-1.2,.2-1.5,.8-1.6-.8-.7-4.6-3.4-2.3-.5,.5-.9,.5-1.2,.2-2.1-.5-4.7,.6-6.8-1.2-2.6-2,2.5-.1,2.4-4.6,.7-2,3.4,.7,4.1-1.7,.3-2.2,4.3-3.4,1.8-5.4-2.1-.5-4.3,1.5-5.7,3-.4,.6-.8,.6-1,.3,.3-3.1,4.2-7.1,7.3-7.2,.8,.6,.1,2.1,.8,2.7l3.9,2.2c-.9,3.8,2.9,1.8,5,2,4.2,.2,.1-6.4-2.7-4.5l-1-1.7c2.3-.2,.3-3.3-1.5-2-.7-2.5-1.9-1-3.2-.5l-2.3-.2c-1.6-.3-1-2.3,.6-2.1,1.8,.2,4.5-1.8,3.4-3.5-2-.3-.6-3.1,1.4-.7h0Z"
												style={{ fill: "#0c2242" }}
											/>
											<path
												d="M86.8,288.9l-1.6,1.5"
												style={{
													fill: "none",
													stroke: "#223959",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M133,269.3c4.7,1.3,3.4,4.6-.3,6.6-4.9,.1-3.1-5.8,.3-6.6h0Z"
												style={{ fill: "#040e22" }}
											/>
											<path
												d="M220.5,269.9c2.3,.6,4.3,11.6,1.7,12.3-4.5-1.5,.5-3.5-1.7-6.1,.6-2.2,.1-4.1,0-6.2h0Z"
												style={{ fill: "#5979ad" }}
											/>
											<path
												d="M220.4,270.9c1.5,3.5-2.9,9.4,1.8,11.2,.7,.7,.5,1.2-.7,1.6-.9,.8-1.7,2.1-2.4,4-.9,2,.8,1.8,1.9,2.5,.9,2.4-6.7,4.4-6.2,4.6-.9,.6-1.5,.5-1.8-.4l3.1-2.8c.7-.5,.4-1.6-.5-.7-5.5,4.5-4.2-3,.3-4.5,3.1-1.2,1-4.2,1.7-6.6,1.9-3.5,2-6.7,2.8-8.9h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M787.8,271.9c.5-.1,1,0,1.5,.2-.3,.6-.7,1.1-1.2,1.5-.3-.3-.6-.4-1-.3,.3-.4,.5-.9,.7-1.4Z"
												style={{ fill: "#486691" }}
											/>
											<path
												d="M789.3,272.1c3.9,1-1.2,3.5-.5,5.7,0,2.5,1.7,3.5,3.7,4.3,.3,.6,.5,1.3,.5,2-.8,.1-1.1,.6-1,1.5-1,1.9-7.2,14.8-8.8,9.6,5.1-2.9-4.1-5.6-1.8-8.7,.5-.6,.5-1.5-.5-1.3v-1c.4,0,.7,0,1-.3l.5,.1c1.3,10.3,11.2-8.3,1.7-3.8-.5-.4-.7-1-.5-1.8,1.8-1.2,3.3-2.8,4.3-4.8,.7-.4,1.1-.9,1.4-1.5h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M135.9,272.6c-.1,.5,.1,.8,.5,1,.7,2.3,4.7,2.2,4.8,5.2-2.5-.2-5.1-.9-7.7-2-.1-.3-.4-.6-.8-.9,1.6-.7,2.6-1.8,3.2-3.3h0Z"
												style={{ fill: "#0e1f3c" }}
											/>
											<path
												d="M137.2,273.1c2.2,.2,3.1,1.3,2.7,3.3-1.4-.2-5-2.9-2.7-3.3h0Z"
												style={{ fill: "#486a9a" }}
											/>
											<path
												d="M787,273.3c.4-.1,.8,0,1,.3-1.1,1.9-2.5,3.5-4.3,4.8-.1,.9-2.1,.8-2.6,1.7-.5,1.6-4.6,5.6-5.4,3.4,2.6-3.8,7.7-7.3,11.3-10.2h0Z"
												style={{ fill: "#8b9dc3" }}
											/>
											<path
												d="M873.8,343.9c-1.5-2.1-4-.6-5-3.6-.2-.5-.5-.9-1-1.1-1.6-.9-4.4-2.5-4.1-4.6,.7-1.3,1.7-1.3,2.9-.1,.8,.5,.9-1.1,.2-1.4-1.1-1.9-1.1-4.2-3.3-5.5-.8-1.3-1.1-2.4-2.8-3.4-1.5-1.5-1.8-4.4-3.7-5.1-1.9-1.1-2.8-3-2.6-5.7,0-.4,.2-.5,.6-.3,2.2,1.5,4.4,2.5,6.7,3,2,.3,.1-.8-.4-2.2,1.3-3.6,10.3-2.8,6.5-7-.9-.8-.2-2,.4-2.9-6.1-9.5-8.1,3.2-9.6,0-.8-4.3-8.2-11.4,1.7-8.3,8.4-2.7-10.1-7.9-11.7-14.3-.1-2.4,.7-4.9-.4-7.4-.2-.9-1.6,1.3-1.9,1.4-.7,.5-2.6,.5-1.8,1.9,1.5,1.4,3.4,2.7,2.6,5.3,.2,2.7,1.4,5.3,.9,8.1,0,.3-.3,.5-.5,.5-4.5-.1-3.7-4.6-2-7.7,.7-.7-3-5.3-3.2-5.9-.3-.5-1.1-.4-1.5,.2-1.8,2.7-5.2,6.2-3,9.8,1.8-.5,.9-7.2,2.8-4.3,.8,1.3,2.4,2.9,2.3,4.3,0,.8-.9,2.5-2,1.9-1.5-.8-2.7,4.4-6.5,4.4-3.1,4.2-2.7-1-1-3,.1-3.2-5.3,10.5-5.2,5.7l-.2-6c-.3-.1-4.2,12.9-4.8,10.3,1.7-3.9-1.5-11.4,3.2-13.1-.9-2.5-3.3,1-4.2,1.9-2.4,3.4-12,6.9-10.2,11.4,1.6,.8,7.6-6.9,7.2-3.8-3.4,4.8-7.7,14.8-14.9,11.7-1.2-.5-2.1-.4-2.8,.4-.1,2.1,4.3,3.3,4.7,5.5-.1,3.8-5.5,1-7.2-.4-1.8,.2,.1,1.8-.3,2.8,.7,.4,1.4,3.3,.4,2.8-.5-.5-1.2-.9-1.9-1-1,.1-1.3-2.6-1.7-3.1-1.9-.2-11-6.1-10.6-1.2,1.7,.6,.3,4,2.3,3.2,.9-.9,1.8-.6,2.5,.7,.6,.1,1.1,.4,1.5,1,1.8,1.1,4,2,3.1-1.1-.1-.4,0-.5,.3-.3,1.6,.5,.4,2.2,.5,3.3,0,.7,1.2,1.2,1.2,.3-.2-1.3,.1-1.8,.9-1.5,2.3,1,.8,4.4,2.9,5.4,1,.3,2.5,1.8,1.4,2.1-4-.3-3.5-3.9-6.9-5-2.2-.7-2,3.4-3.4,4,1.8,2,3.7,3.3,6.6,2.1,2-.7,2.6,.1,1.8,2.5-1,1-3,.6-3.3,2.5-.9,3.2-1.7,4.6-2.8,7.4,.5-1.2,1.3-1.5,2.3-1,1.4-1.9,1.2-7.9,4.4-6.7,.4,1.2,1.3,1,2.6-.5,1.2-1.1,2,.4,2.8,1.2,1.3,1.1,3.2,1,2.1-1.4-.4-1.5-2.1-.8-2.9-1.6-1.2-3.5,6,1,6.6,1.6,.7,1,1.5,.8,2.3-.4,.7-2-4.4-2.2-3.6-5,.1-1,.4-1.1,1-.2,1.2,2.5,3.9,.8,4.8,3,.6,3.4,2.4,2.2,2.5,.1-.1-7.6-11-2.4-12.8-9.2-.1-.3,0-.6,.2-.8,3.7-3.7,4.8,4.3,8.2,2.4-1.9-3,4.5-5.1,.4-5.5-1.2,0-1.3-.3-.2-.9,2.6-.7,7.1-3.8,9.2-5.5,1.3-.3,3-.3,3.8-1.7,.7-1,.3-2.4-1.2-1.8-1.3,2.8-5,1.8-6.7,3.6-.4,.8-1,1.3-1.8,1.5-4.1-2.7-3.5-1.6-6.8,1.4-1,1.1-5-1.5-4.1-2.1,4.3,1.1,6-3.3,10.3-1.3,1.1,0,.8-1.4-.1-1.4-4.4,.7-1.9-2.1-.1-3.7,1.7-.4,3.7-.2,5.4-.4,4.1-3.2,10.2-4.3,13.3,.3,.9,.8,5.3,6.2,4.1,2-.7-1-1.1-2.8,.1-3.6,4.5-1.4,4.8-9,8.1-10.4,5.1,0,.5,8.1-1.6,9.9-2.4,2.1-2.4,3.2,2,0,2.5-.9,3.7,4.6,1.6,5.6-.6,0-1.1-.6-1.3-2,0-.3-.3-.4-.6-.3-3.9,1.3-4.2,2.3-.9,2.8,2.6,.7,1.5,3.8-.8,3.8-3.1,1-7.4-5.9-5,.7,.7,2.2-3,2.1-3.6,3.6-1.2,2.4-2.7-4.8-3.2-5.2-.2-1.4,.2-3.1-.9-4.1-.9-1-1.3,0-1.1,2.9,0,.4-.4,.8-.8,.6-3.7-1.6-4.8,1.5-6.3,4.2-.8,3,3.2-2.4,4.1-2.4,.2,2.5-5,5.6-7.2,7.1l-3.3,3.5c-.3,.3-.3,.8-.1,1.1,2.4,4,3.7,1.3,4.6-.2,2.7-1.2,9.4-14.4,10.7-7.9,.2,2.5,1.2,5.1-2.3,2.6-1.6-1.3-4.2,6.8-7.6,8.1-1.2,.9-.9,2.8,.7,3l5.6-4.7c.5-.5,.8-2.2,2-1.2,.6,.5,3.6-2.6,4.1-2.8,1-.9,1.6-.6,1.6,.9,.1,3.8,.5,7.6,1.1,11.4,1.8,7.2-1.5,15.1-1.7,23,.4,8.4,1.3,29.6-5.2,34.2-.8,.7-1.2-.5-1.8-.6-1.3-.4-1.7,1-2.7,1.2-2.7,.5-5.9,.9-6,4.4,9,1.6,17.8-5.7,26.8-7.1,.6-.4,4,1.6,4.6,1.8l4.3-.1c2.8-.3,0-4.5,2-2.4,3.6,3.4,5,3.1,4-.9-.1-.3,.1-.6,.3-.6,1.4,.1,1.8,2.7,3.3,2.9,3.1,1.1,3.7,2,5.9,3.7,0-.6,.1-1.1,.1-1.7-2.6-.9-3.8-2.4-.3-3.8-1.7,0-8-7.7-6.5-7.8l4,1.8c1.1,.5,2.2-.8,.7-1.5-6.8-4.7-14.8-7.8-14.7-17.3-.8-.6-1.4,3.8-3.4,.8-3.4-3.7-6.5-7-5.6-12.6-.5-2-2.8-6.6,.1-8.7,1.4-.2,2.1,.5,2.1,1.9-.2,3.7,2.2,4.3,4.9,5.5,10.5,11.5,5.7-4,.4-8.6-5,10-6,.1-1.4-4,1.7-1.8,.8-3-1-1.1-1.3,1.4-2.6,2.8-4,4-1.5,1.4-2.2,1.1-2-1,0-1.7,.7-12.2,2.3-5.4,2.2,1.4,6.7-4.2,7.6-6.2,.3-.7,1.3-.7,1.8-.1,.4,.8,4.4,4.1,3.8,5.1-1,4.9-6.8,3.5-6.3,7.6,1.5-2.5,4.5-.9,6.5-2.2,3-1.9,3.6,3.3,4.9,5,1.1,1.7-.5,2.7-1.6,1.7l-1.9-1.9c-4-1.5,2.2,6,4.7,5.9,1.6-.1,2.1-2.8,3.9-2.1,.5,0,.8,1.2,1.6,.8l.1-4.1h0Z"
												style={{ fill: "#040e22" }}
											/>
											<path
												d="M310.5,273.9c7.4,5.1,10-6.2,13.5,5.8,.2,.6,.8,.9,1.4,.8,7.4-.9,5.2-8.8,11.9-1.9-6.1-2.3-9.5,3.2-16.2,4.8-4.7,0-7.4-6.3-10.6-9.5h0Z"
												style={{ fill: "#396390" }}
											/>
											<path
												d="M692.9,273.9c.2,.2,.4,.4,.8,.3-7.2,13.3-17.6,24.2-28.3,34.7,8.3-9.8,19.4-20.2,27.5-35h0Z"
												style={{ fill: "#628cb4" }}
											/>
											<path
												d="M793.8,274.3c.5,.1,.9,.5,1.2,1-2.7,1.3-2.3,4-2.9,6.4-2-.5-3.1-1.8-3.2-4,2.3,.9,3.1,.3,2.2-2,.6-1.1,2.2,.7,2.7-1.4h0Z"
												style={{ fill: "#2d5b82" }}
											/>
											<path
												d="M127.7,275.1c2,1,2,2.2,0,3.6-1.6-.1-3.2-.1-4.8,0-4.8,.1,1.3-3.7,4.8-3.6h0Z"
												style={{ fill: "#010408" }}
											/>
											<path
												d="M389.9,334.3c-3.7-3.7-15.1-13.8-19.2-17.4-5.6-5.2-6.9-14.6-13.4-18.3-6.4-.5-14.5-14.4-18.1-18.5-4.7-2.8,1.2-6.6,3.1-2.7,.5,.8,1,1.2,1.6,1.3,6.5,8.7,16.7,13.6,21,23.3,4.1,14.1,17,21,25,32.3Z"
												style={{ fill: "#5979ad" }}
											/>
											<path
												d="M789.7,275.3c2.3,.1,2.3,4.3-1,2.5-.2-1,.1-1.9,1-2.5h0Z"
												style={{ fill: "#7ea0ce" }}
											/>
											<path
												d="M795,275.3c2.4,1.4-.5,5.7-1.7,6.7h-.7l-.5-.3c.6-2.4,.2-4.9,2.9-6.4h0Z"
												style={{ fill: "#6273a8" }}
											/>
											<path
												d="M826.2,287.6c-.9-2.5-3.3,1-4.2,1.9-3.5,3.5-7.8,5.6-10.7,9.6-1.5,0-.7-2.4-2.7-2.5-4.1-3.6-.2-3.9,1.6-5.8,1.8-2.7-.6-1.3-1.2-2.5-.2-2.3,2,0,3.2-.2,1.3,.2,3.1,2.3,1.5-.3-1.2-1-2-4.4,.6-3.2,.3,2.3,3.2,5.3,3.5,1.4,.5-1.3,2.4-.1,1.7,1.2-.2,.7,0,1.6,.7,1.4,.6-.3,.3-1.4,.8-1.9,5.8-1.2,8.2-7.1,12.6-11.2,3.4-.3-1.3,3.2-1.5,4.4,.5,4.8-.1,8.1-5.9,7.7h0Z"
												style={{ fill: "#204b76" }}
											/>
											<path
												d="M813,282.3c2.8-.5,3.3,.2,1.4,2.2-1.2-.5-1.8-.1-1.8,1.2-.5-.6-1.5-.5-2-1-.5-1.1-2-.5-2.7-1.3-.8-1.4-2.1-1.8-3.8-1.1-1,1.6,1.8,3.5,3.4,3.8,1.7,.3,.2,.7-.7,.6-3.2-.4-4.5-2.2-3.8-5.2-.5-1.6-2.5,.1-2.2,2.1,0,.8-.3,.9-.9,.4l-3.2-3.2c-2.2-5.2,3.7,.8,2-3-3.8-8.3,13.4,10,14.3,4.5h0Z"
												style={{ fill: "#173f5f" }}
											/>
											<path
												d="M220.4,276.1c1.6,1.6,0,2.7-.3,4.3-.2-1.5-.2-2.9,.3-4.3h0Z"
												style={{ fill: "#27486c" }}
											/>
											<path
												d="M86,278.9c-1.1-.2-1.6-.9-1.5-2,1.7-1.3,3.8,1.7,1.5,2Z"
												style={{ fill: "#173f5f" }}
											/>
											<path
												d="M133.6,276.8c4.4,2.8,11.5,.2,13.1,6.2-1.4-1.2-2.2-1-2.6,.4-3-3.2-4.8,2-6.9,0-.5-.7-1.6-.7-2.7-.4-.6,.2-1-.1-1.2-.7l.3-5.5h0Z"
												style={{ fill: "#396390" }}
											/>
											<path
												d="M659.9,278.1c0,2.2,1,2.8,3,1.8-.5,.1-11.4,20.5-12,19.5,2.8-7.2,5.8-14.4,9-21.3Z"
												style={{ fill: "#486691" }}
											/>
											<path
												d="M20.7,284.4c-2.1-.9-2.7-4.7-5.1-5.4-1.4-.5-2.1-.2-2.1,.8,1.3,1.7,4.2,2.3,5.3,4.1,2.1,2.4-3.7,1.4-3.7,3.6-1.2,2.7-3.1,3-5.6,1.1-3.1-2.4-2.9,5.7-6.8,4.9v1.9c2.2,0,3.8,1.9,5.2-1.1,.9-1.6,3.2-.6,4.4-2,1.9-2.5,5.8,1.1,7.5-1.5,.8-1.3,2.2-4.6,.9-6.4h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M26,279.9l1,1.7c.8,1-3.5,2.8-4.9,1.4-2.4-1.7,2.5-4.4,3.9-3.1h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M788.2,280.9c-1.7-1.2-2.3,.2-1.8,2.1,.3,1.2-1.1,1.3-1.6,2.1-.5,1-.7,1.2-.7,.4,.8-1.9,2-3.5,1.5-5.7,1.4-.8,2.2-.5,2.6,1.1h0Z"
												style={{ fill: "#27486c" }}
											/>
											<path
												d="M785.6,279.8c.3,1.8-.1,3.4-1.2,4.9-.5,.8-.4,2.1,.4,.4,.5-.8,1.9-.9,1.6-2.1-.4-1.9-.1-3.2,1.8-2.1,.7,3.5-5.2,10.1-5.7,3.1,.9-1.1,1.4-2.4,1.8-3.8l1.3-.4h0Z"
												style={{ fill: "#7379af" }}
											/>
											<path
												d="M871.8,288.1c.9,1.3-1.7,2.6-1.4,3.8-.2,1.6-.9,2-2.2,1-4.5-3.2-7.1-7.2-7.8-12.1-.2-1.2,.2-1.4,1.2-.7l10.2,8h0Z"
												style={{ fill: "#040e22" }}
											/>
											<path
												d="M84.7,283.1c4.6-7.3,9.5,2.5,5,2-2.1-.2-5.9,1.9-5-2h0Z"
												style={{ fill: "#35577e" }}
											/>
											<path
												d="M796.8,280.9c7.1,7.5,1.7,.9,5.9,.1,.3,0,.4,.3,.4,.6-1.8,6,7.3,5.6,4.5,4.6-1.6-.3-4.4-2.2-3.4-3.8,2.3-1,3,.5,4.5,1.5,.9,0,1.5,.2,2,.9,.5,.6,1.4,.2,2,1,.3,1,3.5,4.8,.6,2.6-.8-.5-2.2-.2-3-1-.8-.5-1.3,.1-1.1,.9,.7,1.2,3.2-.1,1.2,2.5-2,2-5.6,2.1-1.6,5.8-.7,1-2.1,1.5-3,.5-.7-1.2-2.3-.9-3.4-1.3-4-2.4-.3-6.5-2.1-6.9-3.8,2.8-7.1-3.5-7.8-6.7,.4,.2,3.8-1.2,4.3-1.3h0Z"
												style={{ fill: "#040e22" }}
											/>
											<path
												d="M133.2,282.3l.1,.2c-3.3,3.3-.3,8,2.2,10.8-.2,.7-.2,1.4,.2,2.2,1.5,5.1-6.5-.9-9,.2-1.7-1.7-2.4,1.9-4.3,.9-2-3.8,8.7-10.8,6.7-11.8-.3-.1-4.2,1.7-4.1,.8,.1-4.1,5.3-3.9,8.2-3.3Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M144,283.4c2.2,1.4,2.2,2-.2,1.8-.2,0-.4,.2-.4,.4,.3,1.6-.2,3-1.4,4.2l-2.1-.8c-.6-.4-2.3-2.7-3.2-2.4-1.6,.3-1.8-1.3-2.7-2.1-1-.6-1.4-.5-1.1,.4,.6,1.1,3.6,2.2,2.4,3.8-1.3,.4-1.9-1.5-3.3-1.4-.5-1.8,0-3.4,1.3-4.8,.3,.9,1.7,.3,2,.3,.9,0,1.5,.1,1.8,.6,2.2,1.8,4-3.1,6.9,0h0Z"
												style={{ fill: "#041730" }}
											/>
											<path
												d="M146.6,283c12.6,9.4,24.7,13.6,37.8,21.5,11.9,7,21.4-1.8,25.1,1.9-6.4,9.2-4.2,13,3,4.7,1.7-.9,1.5,.8,.8,1.8-1.7,2.3,1,2.2,1.7,.6-.2-1.1,1.3-1.2,1.4-2,.7-2.6,3.5-4.3,3.1-7.5,.4-.7,3.1-7.5,.6-6.4l-3.9,3.4-.4-2.6c.4-.2,2.7-4.2,.6-3.5-.6,.2-1.1,.3-1.8,.1,14.6-6.9-1.6-1.9,6.7-11.1-.4,1.1-1.7,6.7,.6,4.8,.6-1,1.1-1.1,1.2-.2-2.8,5.4,4.6,2,4.8,7,.4,3.7-5.1-3.9-4.8,2.9-2.5,.7-1.1,2-1.1,3.5-1.1,2,2.2,4.6-.2,5.8-4.6,2,4.7,3.5,2.7,8-2.4-1.4-3.9-1.4-6.7-1.9-3.3-.5-1.8,1.3-1.1,3.3-.1,2.2,1.6,.2,2.2,1.2,1.1,5.7,.4,3.6-3.4,6.5-1.8,2.8,2.5,.9,2.7,2.7,.2,.8-2.1,2.7-2.5,3.3-2.1,1.4-5.5,1.2-6.8,3.5-.4,2-1.5,3.5-3.4,4.5-2.3-6.9-9.1-13-12.3-20.1-.7-1.7-2.7-4.5-4.9-5-2.2,.4-14.8-9.7-11.9-5.4-2.7-.2-6.4-2.8-8.2,.3-.7-.5-1-.4-1,.5-3,.4,1.6,7.9-6.7,8-.2,0-.4,.2-.4,.5-.7,3.2-5.3-4.4-5.9-5-2.7-5.8-6.5-11.4-12.7-13.7-3.3,.9-1.6-3.2-7,.2l-1.2-.1c.3-.3,.5-.6,.5-1,3.3,.2,.6-2.8,1.3-4.4,2.1,.4,3.9,2.8,5.2,.1,1,.2,.8,2.2,2.4,2.2,.6,.1,2.6,1.6,3.2,1.9,.4,1,1.9,1.7,2.2,.5,.3-4.2-6.6-2.9-6.5-8.3,1.2-1.2,1.7-2.6,1.4-4.2-.1-.2,.1-.5,.4-.4,2.4,.2,2.4-.4,.2-1.8,.8-1.6,1.6-1.7,3-.6h0Z"
												style={{ fill: "#113a5e" }}
											/>
											<path
												d="M634.5,282.3c-3,6.7-7.7,16.2-13.6,23-1.3,.4-1.3-1-2.2-1-6.8,5.4-12.1,12.6-16.8,20-3.3,6.3-15.2,14-18,21.4-6.2,9.4-11.7,19.8-17.8,29,4.6-11.4,11.1-22.4,17.5-32.9,2.9-5.4,8.4-8.5,12-12.7,5.6-7.4,11.4-14.6,17.3-21.8,3.9-4.2,8.8-7.1,12.3-11.6,2.3-1.8,5.8-13.5,9.3-13.4h0Z"
												style={{ fill: "#7379af" }}
											/>
											<path
												d="M782,283.8c-.3,.2-.6,.3-1,.3-2.1-1.4,2.6-3,1-.3Z"
												style={{ fill: "#6273a8" }}
											/>
											<path
												d="M839.5,289.9l-1.8-2.5c1.8-.5,.9-7.2,2.8-4.3,.8,1.3,2.4,2.9,2.3,4.3,0,.8-.9,2.5-2,1.9-.5-.4-1-.2-1.3,.6h0Z"
												style={{ fill: "#0f2543" }}
											/>
											<path
												d="M456.1,326c-.3-.5-.4-1-.1-1.5-.3-2.1-2.1-4-2-6.4-2.8-1.5-5.7-2.4-8.8-2.8-8,1.1-14.6-9.5-19.8-11.9-4.6-2.6-10.6-.8-15.6-3.4-7-3-13.9-7-20.4-11.9-3.8-3.9-12.5-.3-14.9-5.6-.2,1-.9,.9-1.7,.5-1.5-.7-2.2,1.1-3.9,.9-2.7,4.6-9.3,3-11.5,7.8,3.3,2.7,5.8,6,7.5,10,3.6,9.4,9.3,17.2,17.3,23.2,5.1,4.5,7.3,10.5,12.9,14.4-.2-1.5-2.7-5.8-.3-6.6,.7,0,6.3-2.8,6.8-1.7,.3-.4,.7-.6,1.2-.8-.8-4,6.3,4.2,6.9,4.3l3.2-1.8c.9-2.4,6,8.7,7.3,9.9,7.6-3.7,13.4-2.5,21.1-3.3,2.5,1.3,4.4-.3,6.5-1.3,.5-.2,4.7,.4,4.9-.4,.6-1.1-2.4-3.6,.3-3,3.5-.4,1-5.3,2.9-7.8,.4-.2,.4-.5,.2-.8h0Zm-58-13.9c.1-.1,.3-.1,.5-.1-.3,0-.4,0-.5,.1Z"
												style={{ fill: "#1d6996" }}
											/>
											<path
												d="M121.1,284.8c3.9-3.8,3.3,.4,.5,2.4l-1.4,5.7c-.4,4.6-6.4,5.1-9.3,6.8-2.7-.1,4.1-5,5.9-6.5,1.5-2.8,2.3-5.9,4.3-8.4h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M116.9,284.2c1.4,.3,1.5,1,.4,1.9-.4,.1-7.4,6.6-7.6,5.8-1-2.8,4-9,7.2-7.7h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M792.9,284.1c1,2.4,2.7,4.3,5,5.5-3,6.7,3.6,8.4-3.3,7.7-1.3-1.2,1.1-10.1-1.3-6.5-1.2,2.1-2-1.5-1.2-2.3,.9-1.7,.8-2.6-.3-2.9,0-.9,.3-1.4,1.1-1.5h0Z"
												style={{ fill: "#335b85" }}
											/>
											<path
												d="M139.9,289.1c.9,1.7,.5,2.3-1.3,1.7-3.5-1.2-3.9-.6-1.2,1.6,1.2,1,2.2,1.6,2.8,1.7-2.6,2.6-8-3.7-8.2-6.7,1.1-.1,3.3,2.8,3.6,.7-.4-1.6-1.9-2-2.7-3.1-.2-.9,.1-1,1.1-.4,1.4,2.1,1.2,1.9,3.6,2.3,0,0,2.3,2.2,2.3,2.2h0Z"
												style={{ fill: "#335b85" }}
											/>
											<path
												d="M781,285.1c2.2,0-1.2,2.6,.6,3.8-2.2,1.1-2.8,.7-2.1-1.1,.2-.4,.4-2.5,1.5-2.7h0Z"
												style={{ fill: "#486691" }}
											/>
											<path
												d="M792,285.6c1.1,.2,1.2,1.2,.3,2.9-.9,1.8,.3,4.5,1.7,1.6,1.6-1.2-.6,5.9,.8,7.2-.5,.7-.9,.6-1.2-.1-1.2-2.6-2.1-2.6-2.8,.1-.8,1.8,.8,3.4-.3,4.5l-1.5-3c-.3-2.6-1-2.8-2.2-.3-3.1,2.6-7.7,7.5-11.3,7.7,1-1.9,3.8-2.8,4.7-5.1l.8-.2c4.1-4.6,8.6-9.7,11-15.3h0Z"
												style={{ fill: "#8c88c1" }}
											/>
											<path
												d="M231.3,300.4c-4.2,1.7-4.8-1.9-7.5-1.6l-.3-.5c-.3-6.8,5.1,.8,4.8-2.9-.3-1.9-1.4-3-3.2-3.3,1.1-1.6,.9-3-.6-3.9-1.1-.9-.4-3.3,1-1.4,3,3.9,4.6,8.8,5.8,13.6h0Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M86.8,288.9c-.8,1.5-5.4,3-6.9,3.6-5.3-1.8,9.8-10.4,6.9-3.6h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M608.8,287.9c2.8-.5,3-1.5,1.5,2-12.5,9.3-20-1.9-30.1-.3-11,7.8-18.5,17.5-31.7,20.7-14,6.3-30.1,8.1-41.5-2.7,16.7,10.9,33.5,4.2,50.7-3.5,7.9-4,12.5-11.3,20.1-15.7,9.9-5.6,18.7,8.5,31-.5h0Z"
												style={{ fill: "#baa5dd" }}
											/>
											<path
												d="M834.3,293.6c-3.1,4.2-2.7-1-1-3,.1-3.2-5.3,10.5-5.2,5.7l-.2-6c2.1-1.4,4.1-1.9,6-2.8,1.1-.8,1.4-.6,.9,.5-.2,1.8-.1,3.8-.5,5.6h0Z"
												style={{ fill: "#0d3557" }}
											/>
											<path
												d="M85.2,290.3c1.2-1.3,3.3-3.1,5-1.7,2,1.2,5.4,6.1,4,7.9-3.4-2-5.3-5.1-9-6.2h0Z"
												style={{ fill: "#3f618c" }}
											/>
											<path
												d="M851.3,290.7c-1.3-1.3,.6-2.4,1.9-1.9l4.3,2.4c2.3,1.8-5.9,.9-6.2-.5h0Z"
												style={{ fill: "#0b2645" }}
											/>
											<path
												d="M610.3,289.9c.5,0,1-.1,1.4-.2-1.4,6.6-1.9,14.7-5.4,20.4-8.6,2-17.3,7-26.7,7.3-.8,0-3.7-1-4.5,.5-1.5,2.8-3.8,8.1-5,11.5-.3-4.5,4.6-8.5,1.9-12.7-.2-1-5.3-.1-5.9-.3-2.9,.1-4.3-3.6-6.9-4.3l-4.5,.1c-1-.5,.3-2.2-1.7-1.4-.5,.2-.9-.6-1.4-.3-1.2,.6-2.2,.6-3.2,0,5.3-2.4,11.2-3.4,15.6-7.5,5.1-3.7,12.5-13.2,19.2-13.7,9.2,3.5,18.7,7.1,27.1,.6h0Z"
												style={{ fill: "#3b8db9" }}
											/>
											<path
												d="M808.8,296.6c1.9,.1,1.2,2.5,2.7,2.5-.2,.7,0,1.3,.5,1.8-1.8,2.5-4,4.6-6.5,6.2-2.7,1-6,.1-5,4.6,.2,1-.1,1.2-.9,.5-1.9-1.7-2.9,1.9-.7,2.1-1.8,.2,.1,1.8-.3,2.8-1.4-.2-1.9-1.6-2.7-2.4-.8-.3-1,0-.5,1.2l-7.5-2.9c1.5-.9,6-.3,5.5-2.6,.3-.3,.5-.6,.5-1,1.7-.7,3.7,2.8,4.7,1.1-1.6-3.8-7.6-3.1-7.7-9.5-1.2-1.8,.3-9.1,2.6-3.8,.3,.7,.7,.7,1.2,.1,6.9,.6,.2-1,3.3-7.7,1,.5,1.6-.6,2.3-.8,.6,0,.8,.3,.5,1-1,2.4-.2,5.6,2.5,6.1,2.2-.2,3.5,3.3,5.5,.7h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M139.9,289.1l2.1,.8c.4,2.9,2,4.7,4.8,5.4-.8,.5-1,1.3-.5,2.3l-2.3-1.5c-1.2-.6-2.5-.6-2.7-2.2-.3-.7-.9-.4-1.1,.2-.6-.1-1.5-.6-2.8-1.7-2.6-2.2-2.2-2.8,1.2-1.6,1.8,.6,2.2,.1,1.3-1.7h0Z"
												style={{ fill: "#5979ad" }}
											/>
											<path
												d="M338.7,311.1c-2.7,.7-1.6,4.7-4.2,5.2-2,.2-2.3,.9-.9,2,2,7.5,5.6,.4,3,8.2-.3,1.1-.8,1.2-1.4,.2-1.8-2.8-5.1,1.9-8-.4-.2-.1-.5,0-.6,.2-.7,1.7,1.6,3.5,1.4,5.5-.2,.8,2.2,5.8,2.4,4.7,.1-.1-.1-3.5,.4-2.5,4.2,4.4-.6,10.4-3.7,13.7-2.2-.4-7-4.4-7.4-.9l-9.5-4.1c-1.1-2-2.3-3.5-3.5-4.4-6.1-3.7-6.4-9.8-10.6-14.4-6.6,4.7-9.6,3.4-16.8,.3-4.1-1.5-9.1-7.8-11.2-6.2l-5.5-8c1.6-4.2-3.7-7.2-5.8-10.6-1.3-1-1.9-3.6-2.7-4.6-.6-1-1.8-1.6-2-2.8,0-1.3,.4-1.6,1.4-.9,.8,.5,2.4-.9,2.6,.6,1.9,.1,4.1-1.9,6.5-1.5,3-1.6,6.3-1.3,9.7-.7,.4,.1,3.6-.4,4,1,.2,.2,.5,.4,.7,.3,2.4-1.2,4.1,.5,6.1,1.1,1.4-.4,2.5,0,3.2,1,.5,.9,2,0,2.3,1,.9,4.2,4.9-.6,6.2,2.4,1.6,5.1,10.5-1.1,16.3,2.7,2.8,1.2,4.7,3.8,7.8,4.6,2.9,1.3,6.1,5.4,9.6,5.1,2.3-2,2.9,2.3,5.3,1.3,2.7-.5,4.3-.2,4.9,.9h0Z"
												style={{ fill: "#186491" }}
											/>
											<path
												d="M262.7,310.3c2.9,4.1,8.5,12.5,11.1,16.8-5.2-4.7-12.9-16.6-15.8-21.1-3.4-4.5-5.8-10.2-9.6-14.1-.6,0-4.7,2.1-5.4,2.3-.3-3.6,6.5-5.1,7.9-1.4,3.8,5.8,7.7,11.7,11.8,17.5h0Z"
												style={{ fill: "#5d9fcf" }}
											/>
											<path
												d="M815.3,291c1.3,.3,0,3.1-.6,1.5-.5-1-1.5-2.3,.6-1.5h0Z"
												style={{ fill: "#0b2645" }}
											/>
											<path
												d="M839.3,295.9c1.5-.5,2-1.7,1.7-3.5,0-5.2,6.9,7-1.6,9.1-2.9,0-4.3-5.1-1.9-6.7,1.1-.4,.9,1.2,1.8,1.1h0Z"
												style={{ fill: "#0c2242" }}
											/>
											<path
												d="M273.8,327.1c-1.2,5.6,5.4,10,2.4,16.3-.3,1.7,.3,2.5,.6,5.3,.2,2.3,1.5,1.1,2.8,1.2,1.2,.5,1,2.2-.3,2.4-1,0-1.3,.3-1,1,1.4,1,2.2,2.7,2.5,4.4,.8,1.2,2.9,3.2,1.9,4.7-1.6,1.5,2.8,2.4,.5,4.3-1.1-.6-7-8.5-5.8-5.6,11,16.7,19.6,13.9,36.2,20.3-18.1,.7-54.2,.4-72.1,2,26.5,2.1,66.3,.7,94.1,1.4,.4,1.2-.2,1.7-1.8,1.5,.9-.4-18.6-.2-25.2,.2,1.1-.1,3,1,1.8,1.8-1.4,.5-1.9,1.4-1.4,2.9,1.8,4.1,.1,7.6-.1,11.1,.6,.6,.3,1.2-.9,1.7-.9,.4-.8,.7,.1,.9,2.4,1.2,24.8,2.7,11,3.5-23.4-4.9-73.2-16.8-95.6-23.6,.3-.7,.8-1.1,1.4-1.2,1.1-1.5,.7-3.9,2.7-5.1,1.7-3.9,5.6-4.1,8.8-1.3,.6,.5,1,.5,1.1,0,0-.6-.5-1.6,.1-2.1,1.1,0,1.2-.5,.3-1.3-3.3-3.5,5.3,1,5.7,1.1,2.6,.1-7.3-8.4-9-8.8l-2.2-1.4c.3-.9,0-1.7-.9-2.2-2.5-1.1,3.8-1.8,4.1-4.1-.2-1.9-1.2-3.2-3.2-4,.5-.2,.7-.7,.5-1.3,3.5-.7-1.7-4.5-3.7-5-1-.4-1.7-1.3-2.1-2.9,1.9-1.9,7.4,7.2,7.1,3.2h.7c1.4,5.3,2.8-1.6,0-2-.6-.5-3.4-2.5-4-3.2,1.8-4,7.2-.6,5.2-6,7.8,4.7,4-1.8-.3-3.9,.4-.6,.4-1.2,0-1.7,.7-2.5-1.2-2.3-2.7-4.5,2.5,.2,1.6-1.2,1.3-2.8l-.5-6.5c2-2.7-.7-4.9-1.8-6.8,1.4-.5,3.1,2.3,4.5,3,2.7,1.9,.9-2-.4-2.5,.3-5.3-7-6.3-9.6-10.2-.7-.7-1.2-.5-1.4,.4-1.4-.4-1.9-1.4-1.4-3,.7-.2,1.3-.2,1.7,.3,5.5,4.7,12.5-2.6,17.3-5.6,3.1,21.3,7,16.3,4.6-1.4,2.7-1.2,8,11.5,10.5,13.8,2.9,4.8,10.8,16.6,15.9,21.3h0Z"
												style={{ fill: "#10365c" }}
											/>
											<path
												d="M784.2,292.1c1.7,1.4-1.4,4.3-3.2,3.8-.7-.2-1.8,.3-1.1,1.1,.8,1.1,.5,1.2-1.1,.6-4.9-1.9-10.1-2.4-15.1-2-9.4,4.6-17.3,12.6-26.8,17.6,10-7.2,18.6-17.3,30.2-19.6,5.7,.2,11.4-.3,17.1-1.5h0Z"
												style={{ fill: "#3f618c" }}
											/>
											<path
												d="M247.5,292.1c2.5,16.4-1.6,23.3-4.4,1.9l4.4-1.9h0Z"
												style={{ fill: "#204b76" }}
											/>
											<path
												d="M813.3,293.3c2.2,.5-1,1.6-1.5,2.1-2.4,1.2-.2-3.3,1.5-2.1Z"
												style={{ fill: "#0d3557" }}
											/>
											<path
												d="M822.4,320.7c-2.4,.8-.8-2.2,0-3,.6-1.8-1.6-3-2.7-.7-.5,.8-1.6,1.7-3.3,2.8-.8,1-.8,2.6-2.3,3-1.9-3,4.5-5.1,.4-5.5-1.2,0-1.3-.3-.2-.9,2.6-.7,7.1-3.8,9.2-5.5,1.3-.3,3-.3,3.8-1.7,.7-1,.3-2.4-1.2-1.8l-3.9-2.5c4.1-3.2,10.2-4.3,13.3,.3,.9,.8,5.3,6.2,4.1,2-2.8-4,4.9-5,6.4-12.6,1-2.4,5.3-1.6,3.9,1.4-.5,3-2.6,6.5-5,8.4-1,1.3,.2,.9,3.3-1.3,2.4-.6,3.2,3,2.3,5-.7,1.3-1.8,.4-2-1.4,0-.3-.3-.4-.6-.3-3.9,1.3-4.2,2.3-.9,2.8,5.3,3.4-3.9,5.5-5.8,1.6-.3-.3-.5-.3-.6,0-.2,.6,0,1.6,.6,2.9,.7,2.2-3,2.1-3.6,3.6-1.2,2.4-2.7-4.8-3.2-5.2-.2-1.4,.2-3.1-.9-4.1-.9-1-1.3,0-1.1,2.9,0,.4-.4,.8-.8,.6-3.7-1.6-4.8,1.5-6.3,4.2-.7,2.2,2.5-.7,3.3-2,.8-1,1.5,.1,.7,.7-1.8,2.8-4.2,4.8-6.9,6.3h0Z"
												style={{ fill: "#0c2242" }}
											/>
											<path
												d="M84.5,296.4l-.5-.1c.1-2.9,4.6-.2,5.4,1.1,.3,.3,3.9,2.8,1.5,2.1-2.7-.3-3.6-4.6-6.4-3.1h0Z"
												style={{ fill: "#27486c" }}
											/>
											<path
												d="M783.2,295.1c0,1.3,.6,1.7,1.8,1.2l-3.9,4.5c-.4-1.5-1.4-2.3-3-2.2-.8,.2-2.4-.9-3.5-1-1.6,.2-1.8,.9-.5,2.2,3,4.1-14.7,15.9-18.3,21.6-3.5,2.7-4.9,8-9.5,9.6-2.5,3-4.7,6.5-7.6,7.3-5.4,1.3-10.2,6.3-15.7,5.8-1.1-.4-2.1-.2-3.1,.5-2.9,2.4-6.3,2.3-9.8,2.9-1.3,1.2-2.7,.8-4.3,1.2l-4.3,1.2c-4.1,3.7-2.3-3.2-6.3,.4-.9,1.1-2.5,1.1-3.4,2.1-.6,1-1.5,1.3-2.8,1.1-4,0-2,3.4-6.7-.5-1.2-.9-1.1-1.3,.3-1.1,2.7-1.1-1.9-3.3-3-3,7.7-11.6,14-12.5,21.2-22.2,2.5-2,5.8,2.5,8.7,2.7,3.2-2.8,6.2-5.9,8.8-9.2,7.3,.9,13.9-1.1,18.6-6.9,8.3-5.1,16.3-10.6,24-16.5,5.4-2.7,12.2-.8,17.9,.9,2.6,1.1,.9-.3,1-1.4,1-.8,2.8,.2,3.4-1.2h0Z"
												style={{ fill: "#13304f" }}
											/>
											<path
												d="M21.9,298.7c-1.6-.2-2.3-4.6-.3-2.7,.8,.8,3,4,.3,2.7h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M146.7,295.3c1.5,.3,2.6,2.7,1.1,3.5-1.6,.1-2.5-2.8-1.1-3.5h0Z"
												style={{ fill: "#8b9dc3" }}
											/>
											<path
												d="M134.3,297.9c-.9,2.4-4.5,2-5,0-.4-.9-.6-.8-.7,.1,0,2.7-1.1,3.9-1.7,2,0-.6-.2-3.8,0-4.3,2.5,.2,5,.9,7.4,2.2Z"
												style={{ fill: "#14395b" }}
											/>
											<path
												d="M351.2,295.8c12.5,4.1,11.6,12.2,19.6,21.2-1.2,1.4-2.7,3-3.3,4.9,0,.5-.2,.7-.6,.6-.9-.4-1.8,1.2-1.6,2.1,1.1,4.9-4.7,5.9-6.2,9.4-.2,1.5-6.3,4.8-6.6,6.2-.2,2.3-2.5,3.5-2.4,5.6,.1,.9-2.1,3-2.5,3.7-2.2,3-2.2,8.3-6.9,5.7-4.7-2.3-9.3-4.6-13.7-6.9,3.2-3.3,7.9-9.3,3.7-13.7-.2-.3-.3-.2-.3,.1l-.1,2.4c0,.3-.1,.4-.3,.1-1.8-2.9-2.7-6.7-3.7-9.9,.5-1.5,3.8,1.3,6.3-.9,1.9-1.8,3.1,3.2,3.9,.5,2.6-7.8-1-.7-3-8.2-1.3-1.1-1-1.8,.9-2,2.6-.5,1.6-4.3,4.2-5.2,.2,0,3,3.5,3.2,3,2.3-5.7,7.7,2,7.4-2,0-.8,.3-2-.7-2.5-.2-.1-.2-.4,0-.6,1.7-1.2,1.7-4,2.5-5.5,2.4-3-6.1-6.5,.2-8.1h0Z"
												style={{ fill: "#1d6996" }}
											/>
											<path
												d="M126.7,296.6l.1,3.5c.5,1.9,1.9,.7,1.7-2,.3-2.6,1,3.6,5.2,.9l1.2,.1c-1.5,1.7-4.9,4.6-6.8,5.8-2.1-.2-3,1.4-4.5,2.3-4.2,.6-8.6-.3-12.7,.5-2.6,.4-2.8-.2-.7-1.9,3.2-2.7,6.2-4.7,9.4-7.4,1-.9,1.4-.3,1.3,1.8-.1,1,.3,1.1,.9,.4,3.7-3.3,1.6-.5,2.5,1.2,3.6,1.7-.3-3.8,1.4-5.1,.4-.8,.7-.8,1-.1h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M84,296.3l.5,.1c1,1.9,2.2,3.5,3.8,4.9,.6,0,.8,.3,.8,.8,.4,1.8,1.8,3,1.5,5.1l-4.4-2.4c-.3-.3-3.6-1.4-3.5-2,.3-1.1-1.5-7.2,1.3-6.5h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M804.2,308.8c1.9-3.1,5.8-4.7,7.7-7.9,1.6,.9,7.6-6.9,7.2-3.8-3.4,4.9-7.6,14.8-14.9,11.7h0Z"
												style={{ fill: "#335b85" }}
											/>
											<path
												d="M789,298.9c-.8,.2-1.5,.1-2.2-.3,1.1-2.5,1.9-2.4,2.2,.3Z"
												style={{ fill: "#486691" }}
											/>
											<path
												d="M142,298.6c-.3,1.1,.2,2,1.2,2.7-3,.2,3.2,4,2.4,6.9-.4-.2-6.5-9.1-7.2-8.4-1.2,2,.9,5,2.1,6.9-1.7-.4-3-1.3-4-2.7-1.8,.1-3.3-.6-4.5-2.1,1.7-1.6,5-5.7,7.6-3.9,.4,.8,1.2,1,2.4,.6h0Z"
												style={{ fill: "#204b76" }}
											/>
											<path
												d="M209.5,306.3c2.1-2.9,6.4-2.2,6.7-5.5l3.9-3.4c2.5-1.1-.2,5.8-.6,6.4,.4,3.2-2.4,4.9-3.1,7.5-.2,.9-1.5,.9-1.4,2-.7,1.6-3.3,1.7-1.7-.6,.7-1,.9-2.7-.8-1.8-7.1,8.1-9.4,4.9-3-4.6h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M781,300.9c-.3,.5-6.5-1-7-1-3.2-3.9,3.2-1.2,4-1.2,1.6-.1,2.6,.6,3,2.2h0Z"
												style={{ fill: "#a6a8ce" }}
											/>
											<path
												d="M809.4,298.1c.7,.7-.7,1.5-1.3,.9-.8-.8-.6-1.2,.4-1.2,.4,0,.7,.1,.9,.3h0Z"
												style={{ fill: "#335b85" }}
											/>
											<path
												d="M223.4,298.3l.3,.5c-.5,1.6,0,2.6,1.4,3,2.1,6.1,11.3,3.4,11,9.8-1.3-.4-3-1.1-4.2-.5-1-.2-7.3-4.1-4.4-.4,.6,.8,.7,1.4,.1,1.8-.2,.2-.5,0-.6-.2-.7-2.2-2.4-2.9-5-2.1-3.6-2.5,2.1-2.2,1-4.7-1.1-1.5-.5-3.1-.7-4.7-.9-1.1-.4-1.9,1.1-2.5h0Z"
												style={{ fill: "#0a1c38" }}
											/>
											<path
												d="M142,298.6c4.6,1.8,8.1,4.9,10.2,9.5-1.3-1.6-11.4-6.9-10.2-9.5h0Z"
												style={{ fill: "#8b9dc3" }}
											/>
											<path
												d="M786.8,298.6c.7,.4,1.4,.5,2.2,.3,.9,1.5,2.2,4,1.4,5.8-.4,.7-1.5-1.1-2.4-.5-.9-1.3-2.2-1.6-3.6-.7-.9,1.2-9.1,3.7-6.4,4.8,3.4,1.4,3-2.4,5.9-1.9-1.8,1.5-2.9,3.4-3.2,5.7-1,1.7-3.4,2.8-4.3,4.7-.7,1-.5,1.3,.7,.9,5-1.5,4.6-7.5,7.9-11,.3-4.8,7.2,2.4,8.7,2.7-.1,.4-.2,.7-.5,1-2.7-4.1-11.7-.2-7.2,2.2-1.1,.3-1.5,1-1.4,2.1-1.7,1.4-3.1,3-4.1,4.9-.2,.1-.4,.2-.5,.5-1.9-.4-4.4,5.8-5.3,3.2-2.6-1.9-9.3,1.8-11.8,3.6-3.1,.6-8.4,.8-9.6,3.6l12-.8c-.4,.8-4.5,3.5-2.6,4,3.5-1.4,4.4-4.8,7.1-2.8l-2.1,.4c-1.2,1,1.5,2.9,2.1,2.9-2.5,3-19,11.1-16,11.9,3.1-1.2,11.5-4.2,14.5-5.3-1.5,1.2-1.3,1.8,.5,1.8-6.5,3.8-5.9,6.4-11.2,13.6-1.8,3.3,7.4-2.2,8.2-1.7,2.2-.1,3,1.2,2.5,3.9-.4,.8,.3,3.1-.6,4.3-1,1.4-18.4,11-8.6,8.6,5.9,.3,9.6-3.6,12.5-8.3,.2-.2,.1-.5-.2-.6-2.1-1-.2-1.3,.9-2l4.4-3c.4-.3,.5-.2,.2,.2-.6,2.3-7.8,4.3-2.7,5.8-3,5.1-6.8,9.4-11.6,12.9-5-2.8-9.4-2.5-13.3,1-1.8-3-5.9-4.5-4.2-9.5-.9-4.1,.8-1.5,2.8-1.6,1-1,.9-1.7-.3-2.3,1.2-4.2-3-5.8-3.3-9.4,8.3-4,2.1-15.5,5.1-22.4,3.6-13.4,27.5-27,24.4-32.2l6.2,1.2c-11.7,11.7,3.1,1.2,6.8-2.5h0Z"
												style={{ fill: "#112340" }}
											/>
											<path
												d="M145.6,308.2c-3.5,4.1-10.4-9.6-6.4-8.2l6.4,8.2h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M787.1,300.8c-1-1.7,2.5,.8,1.7,1.5-.2,1.3-1.4-1.4-1.7-1.5h0Z"
												style={{ fill: "#7379af" }}
											/>
											<path
												d="M42.3,308.6c-1.7-1.5-3.7-1.7-5.8-.6-2.6,1.9-7.7,2-10.5,4.1-.4,.9-1.9-.1-2.2-.2-2.6-.2,.6,2.6-1.3,2.1-4-1.3-6,2.9-10.5,2.2-1,0-1.8,.4-2.2,1.2-2.1,2-2.2-1.6-2.8-2.8-.3-4.3,6.4-15.2,8.5-5.8,.6,1.7,1.7,1.7,3.5,0,.4-.8,2.7-1,3.4-2,0-.9,.4-1.8,1.4-2,1.3,.3,2.2,.2,2.7-.3,2.7-2.3,6.6-4,10-2.6l8.3,5.6c1.9,1.8-.9,3.7-2.5,1.1h0Z"
												style={{ fill: "#0b2645" }}
											/>
											<path
												d="M234.3,307.4c-4.1-.4-7.1-2.2-9.1-5.6,.6-2.6,7,5.3,9.1,5.6h0Z"
												style={{ fill: "#5979ad" }}
											/>
											<path
												d="M791,301.1c.2,6.4,6.1,5.7,7.7,9.5-1.2,1.6-2.8-1.8-4.7-1.1l-6.5-4.2c.3-.3,.5-.6,.5-1,2.5-.2,2.7,2.6,2.5-2.3,.3-.3,.5-.5,.5-.9h0Z"
												style={{ fill: "#3b5983" }}
											/>
											<path
												d="M143.2,301.3l9,6.8c1.6,1.2,1.9,3.3,3,5l3.6,4.5c.4,.8,1.9,.6,1.8-.3,0-.3,.2-.5,.4-.5,2,0,3.6-.8,5-2.2,.1,7,1.1,14.7-4.2,20.1-.7,.9-.6,1.1,.5,.8,6.9-2,3.1,9,.3,11.3-.6-.1-1.1-.2-1.4-.1-1.3-3.4-5.6-5-6.5-8.5,5,.5-11.8-10-10.8-1.6h-1c.6-1.9,0-3-2-3.4,1.6-.6,.3-1.5,.9-2.2,1.1-.3,2.7-2.6,3.4-3.4,.5-.4,2-.4,1.8-1.6,.1,0,3.8,.9,2.3,.1l-7.8-5.6c.2-.7,.1-1.2-.4-1.4-2.3-1.3,4.1-4.3,1.3-4.9,4.1-.5,4.2-1.4,.4-2.6-1-.2-1.6-1-2-1.4-1.7-1.1-3.7-1.2-5.6-1.7-.8-1.8-.4-3.2,1.2-4.4,1.5,2.4,4.4,2.2,5.9,4.5,.7,.8,1.7,.7,3.2-.2,.8-2.6-5.4-6.6-2.3-7.1h0Z"
												style={{ fill: "#0d2a49" }}
											/>
											<path
												d="M131.9,301.9c1.2,1.5,2.7,2.1,4.5,2.1-1.6,1.1-2.1,2.6-1.2,4.4-2.1,1.4-2.1,2.9,.2,4.2-2,0-.8,4.7-2.6,2.8-.6-.8,.3-3.2-1.3-1.7-1.1,1.3-1,3.2-2.3,4.4-.8,.8-.5,1.2,.7,1.3,.7,.1,1.3-1,1.8-.8-1.4,2-1,3.7,1.2,5.1l-4-.5c-2.4-.3-2.9,6.5-4.8,2.1-1.1-2.8-1.6-5.9-4.7-6.9,.3-1-.1-1.4-1.2-1.2,3.1-5.1,5.8,6,7.8,.2,.6-2.9,1.6-3.4,3.7-5.7,.9-.5,6.1-8.2,3.5-6.6l-5.7,5.1,.7-5.5,3.7-2.8h0Z"
												style={{ fill: "#102b4a" }}
											/>
											<path
												d="M788,304.1c-.1,.4-.2,.8-.5,1-1.3-.5-2.1,0-2.2,1.5-4.7-1.6-3,3.3-7.1,1.7-2.8-1.1,5.6-3.5,6.4-4.8,1.4-.8,2.5-.8,3.4,.6h0Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M80.8,305.9c-.6,1.1-1,1.2-1.2,.1-.2-1-1.1-1.2-1.2-.1,.3,1.6-2,2.8-2.8,3-5.4,4.4-2.2-6.3,.7-4.7,1.1,.6,2.2,.6,3.1-.2,1.2-.8,2.2,.9,1.4,1.9h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M620.9,305.3c-3,4.4-6.8,11.5-10.4,13.9,3-4.6,4.4-11.1,8.1-15,.9,0,1.1,1.7,2.3,1.1h0Z"
												style={{ fill: "#3f618c" }}
											/>
											<path
												d="M873.8,315.1c0-.1-.1-.1-.1-.2-1-1.6-.9-2.9,.1-3.9v-2.1l-5.5-4.9h0c-.6,.9-1.3,2.1-.4,2.9,3.7,4.3-5.3,3.5-6.5,7,.5,1.4,2.4,2.5,.4,2.2-1.8,.3-6.9-3.8-7.3-2.7-.8,5.4,4.2,5.1,5.4,9.6,1.2,1.7,3,2.8,3.7,4.6,2.1,1.3,2.2,3.7,3.3,5.5,.6,.4,.8,1.7-.2,1.4-1.2-1.2-2.2-1.1-2.9,.1-.3,3,3.8,3.7,5.1,5.7,1,3,3.4,1.5,5,3.6l-.1-28.8h0Z"
												style={{ fill: "#041730" }}
											/>
											<path
												d="M873.8,385.8c-.4-.6-.9-1.2-.1-1.7h.1v-36.1c-.7,.3-1.2-.6-1.6-.8-1.9-.7-2.4,2.2-3.9,2.1-2.2-.1-7.5-5.6-5.5-6.2,.7-.1,2.2,1.8,2.7,2.2,4.3,1.7,0-4.3-.5-5.9-.6-1.3-1.5-1.6-2.8-.8-2.4,1.2-6,0-7.4,3.3,5.2,4.8,10.1,20-.4,8.6-2.7-1.2-5.2-2-4.9-5.5,0-1.5-.7-2.1-2.1-1.9-2.8,2-.5,6.7-.1,8.7-.9,5.6,2.2,8.9,5.6,12.6,2,3,2.6-1.4,3.4-.8,.3,10.3,7.4,11.9,14.7,17.3,1.4,.8,.5,1.8-.7,1.5l-4-1.8c-1.5,.1,5.1,8.4,7,7.9-.1-.5,.4-2.2,.5-2.7h0Z"
												style={{ fill: "#041730" }}
											/>
											<path
												d="M86.2,304.8c4.2,2.8,10.9,3.4,12.8,8.4,.8,1.6,.4,2-1.2,1.3-3.9-1.7-7-4.3-9.4-7.7-.5-.7-1.4-.2-.9,.6,1.6,1.4,3.2,3.1,2.8,5.5-.9-.3-1.7-1-2.4-2-2.2-1.7-7.3-4-1.7-6.1h0Z"
												style={{ fill: "#426998" }}
											/>
											<path
												d="M118.3,317.1c-1,1.4-2.2,.3-3.3,.4-3.3,1.8-6.7,1.7-10,4.1-4.6-4.3-2.2-5.7,3.1-7.2,2.2-.3,4.1-2.7,6-2.9,.4,.5,.2,1.1-.6,1.5-.9,.6-5.7,3.5-3.4,4,3.3,.7,3.6-4.4,6.7-3.8,2.2,.4,3.8-.6,5-2.9,1.3-2.5,1.7-2.3,1.3,.5,.6,1.9,3.5,1,4.2-.8l5.7-5.1c3.5-1.7-5.9,9.5-6.4,10-.8,1-.8,5.4-3.3,3.6-1.4-.8-2.7-4.9-5-1.4h0Z"
												style={{ fill: "#040e22" }}
											/>
											<path
												d="M822.3,304.9l3.9,2.5c-1.3,2.8-5,1.8-6.7,3.6-.4,.8-1,1.3-1.8,1.5-1.3-.2-2.4-2.5-4-1.3-2.6,2.7-4,4.4-7.1,.9-.2-.3-.1-.4,.2-.3,1.7,.4,3.1,.3,4.1-.5,2.1-2.7,7.6,.5,6.8-1.8-1.8-1.1-4.8,.6-2.4-2.4,1.1-2.5,4.5-2,7-2.2h0Z"
												style={{ fill: "#204b76" }}
											/>
											<path
												d="M226.4,307.7c-1.8,1.1-2.9-3-.9-1.7,1.4,1.2,4.5,.5,.9,1.7h0Z"
												style={{ fill: "#486691" }}
											/>
											<path
												d="M784,306.4l1.2,.2c-3.3,3.4-3,9.6-7.9,11-1.2,.5-1.4,.2-.7-.9,1-1.9,3.1-2.9,4.3-4.7,.2-2.2,1.2-4.1,3.1-5.6h0Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M176.9,308.1c2.9,5.7,8.8,7.6,14.2,10.4,1.8,2.4,13.5,23.1,14.7,18.3,.4,.5,.5,1.1,.2,1.7-4,1.3-5.4,12.7,.8,5.6,.2,.5,.9,.2,2.3-.6,1.1-.1,.7,2.9,1.7,2.9-1.2,1.1-1.2,1.7,.1,1.7-3,3.2-8.2,4.8-8.2,9.8-3.8,.8-5.3,6.9-.2,1.6,.7-.7,2.3-1.8,2.6-.6,0,.3,.1,.5,.4,.6,1.5-.5,2.2-2.5,4.5-1.2-.2,.5-.3,1-.2,1.5-1.4,.7-1.6,2.9-3,3.5-1.2-1.1-9.1,3-4.6,3.2,9-3.2-.4,3.3,1.5,3.9,2.1-.4,2.8-2.9,4.2-4,2.4-.4-.8,2.6-1,3.2-4.7,10.7-17.7-2.5-22.5,10.3-3.1,1-8.6,2-11.1-1.4,2.7-.9,.8-3.5-.2-4.4-1.9-2.7-1.5-3.5,1.4-2.4,2.2-.6-5.9-3.6-5.2-9.1,1.3-1.4,2.8-.5,4.3,.4,.8,.2,.7-.9,.1-1.2-2.4-1.5-3-3.5-1.8-6.3,.3-3.9-6.1-5.2-4-9.6-.1-4.9,2.8,1.4,4.2,0-.6-3-3.4-5.8-3.8-8.8,.1-.8,1.2-.8,1.2-1.5-.9-4.6-1.5-9.2-1.6-14,.9,.4,2.1,.3,2.2-.8-.4-4.4,1.7-8.4-1.5-12.4,1.9-3,5.7-.5,8.3-.3h0Z"
												style={{ fill: "#0c2b4f" }}
											/>
											<path
												d="M205.8,336.9c-1.1,4.9-12.9-16-14.7-18.3-5.3-2.8-11.3-4.7-14.2-10.4-2.8-4.3,9.9,5.9,11.9,5.4,2.4,.5,4.1,3.2,4.9,5,3.7,6.2,7.7,12.3,12.1,18.3h0Z"
												style={{ fill: "#27628b" }}
											/>
											<path
												d="M805.5,307.1c-.6,.5-1,1-1.2,1.7-8.5-.8,4.7,4.7,1.4,7.5-2,1-7.7-1.4-8-3.5,.3-1.2,1-1.4,2-.6,2.4,1.7-1.4-5.2,3.9-4.4,.8,.1,1-.7,1.9-.7h0Z"
												style={{ fill: "#27486c" }}
											/>
											<path
												d="M42.3,308.6c-4.7-3.6-9.2,2.2-14.7,2.5-1.3,.1-1.4,1.3-2.3,1.4-1.2-.6-3.4-1.1-2.3,.9,1.1,1.4-3.8-.6-5.3,1.4-1.6,2-6.3,.3-7.9,2.6-1.2,2.9-6.1-1.5-7.1,3.8,6,4.4,4.5,8.3,12.6,3.4,3.1-.5,5.5,2,7.7,4.1,1.3,.6,.7-2.3-.5-2.3-1.5-.3-9.8-6.5-6.4-5.9,1.7,.6,3.4,.9,5.1,.8,1.3-.1-.4-2.2,.1-2.5,.4,0,1.1,.9,1.7,.6,2.6-1.5,5.3-3.6,7.8-4.3,3.1-1.6,7.5,.2,9.7,.7-1-1.4-4.2-5.2,.2-3.6,1.6-.7,2.1-1.9,1.6-3.6Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M573,319.3c-2.4,7.8-3.9,16.3-9.9,22.4,2-3,3.4-6.3,4.9-9.6,1.8-3,0-.6-1.5-.8-1.8-.8-1.7,3.8-3.4,2.5-7.1-1.1-16.2,3.1-21.8-2.4-8.1-1.7-15.5,1.7-23.7,1-4.6-.3-3.2,4.3-11.9,6-.7,.3-.9,.2-.7-.4,.5-1.6-4.8,1-6-.1-6.9,1.1-13,4.1-20.1,2-2.7-.2-5.4,1.5-8.3,.9-1-.4-1.8-.3-2.4,.1-2.4,.7-5.7,2.1-7.9,2.6-9.5,.6-19.3,1.5-29,0-3.8-.7-6.2,.7-7,4.2l-3.4-5.4c7.6-3.7,13.4-2.5,21.1-3.3,2.5,1.3,4.4-.3,6.5-1.3,.5-.2,4.7,.4,4.9-.4,.6-1.1-2.4-3.6,.3-3,3.4-.4,1-5.3,2.9-7.8,.3-.8-.8-1.5-.2-2.3-.3-2.1-2.1-4-2-6.4,8.1,4.2,17.8,9.8,26.2,11.2-.4-.9-3.5-1.1-1.9-2.5,2.8-2,19.2-12.3,27.7-19.6,12.3,10.3,27.7,10,42.5,3,1.2,1.1,2.6-.2,3.9,.1,.9,.6,2.4-.7,2,1.2,.3,1.1,5-.2,5.7,.5,4.7,4.9,5.7,4,11.7,4,.3,.1,1,1.9,1.2,2.2-.3,.8-.3,1.1-.4,1.4h0Z"
												style={{ fill: "#3691c1" }}
											/>
											<path
												d="M168.7,308.4c3.2,4,1.1,8,1.5,12.4,0,1.2-1.3,1.2-2.2,.8l-.3-12.8c0-.8,.3-1,1-.4h0Z"
												style={{ fill: "#1c4c6d" }}
											/>
											<path
												d="M135.2,308.3l.2,.1c.1,2.6,1.3,4.7,3.5,6.2-.3,.6-.2,1,.2,1.3-1.7-.5-3-1.6-3.7-3.3-2.2-1.4-2.3-2.9-.2-4.3h0Z"
												style={{ fill: "#335b85" }}
											/>
											<path
												d="M135.5,308.4l1,.2c-.3,2.9,4.3,3.3,2.5,5.9-2.2-1.4-3.4-3.5-3.5-6.1Z"
												style={{ fill: "#113a5e" }}
											/>
											<path
												d="M793.4,310.3c1,1.9-6,2.8-7.2,2.2-4.5-2.4,4.5-6.2,7.2-2.2Z"
												style={{ fill: "#7379af" }}
											/>
											<path
												d="M136.5,308.6c2.7,.1,4.2,1.5,6.4,2.8,3.8,1.2,3.6,2.1-.4,2.6l-3.3,1.8c-.4-.3-.5-.7-.2-1.3,1.9-2.8-2.8-2.8-2.5-5.9h0Z"
												style={{ fill: "#486a9a" }}
											/>
											<path
												d="M167.7,308.9c.3,8.1,0,18.9,1.9,26.8,.1,.7-1.2,.6-1.2,1.5,.4,3.1,3.1,5.9,3.8,8.8-1,1.5-3.9-3.9-4.1-1-2.3,5.4,3.6,6.2,3.9,10.6l-8.1-6.5c-8.4,1.6,3.5-3.7,2.3-10.9,.4-5.7-6.2-.7-4.3-3.4,6.5-6.7,3.4-16.6,4.8-25-.2-.7,.2-1,1-.9h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M85.2,309.3c2.6,.5,3,2.9,5.1,3.6,3.3,1.4,3.3,2.7,.1,4-1.5-.3-1.6-1.6-2-2.7-1.2-1.1,0,2.2,.2,2.8,.8,3.1-3.5-.6-4.5-.6-3.9,1-2.7,6.6,1.2,6.3,2.4-.4,3.1,6.4,4.9,3,1.2-2.2,9.6,13.6,9.7,8.5,1.2,1.1,1,2.4,1.3,3.7,.8,.9,.6,1.7-.4,2.4-1.6-.1-3-2-4.9-2-1.8-1-3.6-1.9-5.3,0,1.2-2.6-4.2-7.4-2.8-2.8-.9,0-1,1.2-1.8,1.3-1-.5-4,1.9-3.8,.5,.3-1.4,.9-2.4,2-3,1.5-1.8-2.8-2.6-3.8-2.1,.1-1.3-.3-1.9-1.4-1.8q-.3,0,0-.1c1.4-.5,2.2-1.1,2.5-2-.3-1.3-2.5-1.4-3.3-2.6-8.1-8.5-9.9,1.5-11.8-6.2l2.6-3.2c1-.7,2.2,1.1,1.2,1.8-4.4,5,3.1,1.5,5.2,1.2,1.2-.1,.8-1.8-.3-1.8-1.3-.1-1.6-.6-.9-1.6,1.4-1.2,1.5-5,3-5,2,2.1,3.8,1.6,5.7,1.5l1.4,1c1,.6,1.4-1.2,.8-1.8-.7-.8-.4-1.9,.1-2.3h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M231.9,311.1c1.1,1.8,3.7,4.2,1.8,6.8-2.3-1.3-5.9-7.4-7.5-2.4-.5,.2-.9,.2-1.3,0,.5-2.5-.4-4.3-2.9-5.3,2.6-.8,4.3-.1,5,2.1,.1,.3,.4,.4,.6,.2,.5-.4,.5-1-.1-1.8-3-3.6,3.4,.2,4.4,.4h0Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M63.9,312.5c-.7-.2-.7-.4-.1-.6l5.7-2.2c1.1-.2,2,1.2,1.2,2.2-1.6,1.8-4.5,1.2-6.8,.6h0Z"
												style={{ fill: "#040e22" }}
											/>
											<path
												d="M606.2,310c-5.5,5.3-15.1,6.3-22.1,9.7-2.5,.9-4.8,.8-6.9-.3-.4-.2-1,0-1.2,.4-4.1,10-10.4,19.7-13.1,30h-.3c-2.3-8,5.9-13.1,7.6-20.5,1-3.5,3.5-8.7,5-11.5,.7-1.5,3.7-.5,4.5-.5,9.3-.4,18-5.2,26.5-7.3h0Z"
												style={{ fill: "#8c88c1" }}
											/>
											<path
												d="M232.5,310.9c4.1-.9,7.6,5.2,4.1,3.2-1.4-1.1-2.8-2.2-4.1-3.2h0Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M851.2,311.3c.3-.4,.5-.4,.8,.1,2.7,7.2-9.5,8.4-.8-.1h0Z"
												style={{ fill: "#091b35" }}
											/>
											<path
												d="M9.3,335.6c-.5-1.5-3.3,1.6-4.4,.9l-2.3-.4v8.6c.1,0,.1,.1,.2,.1,1.3,.8,1.2,1.2-.2,1.5v3.3c.9,1.2,1.2-.6,1.4-1.7,2.4-4.7,7-5.3,5.3-12.3h0Z"
												style={{ fill: "#0c2242" }}
											/>
											<path
												d="M40.7,312.4c-1-.7-2.8-.5-2.2,.7,0,.3,3.3,4.1,1.5,2.9-9.5-5.1-13.8,4.6-18.7,3-.3,.6,1.2,2.7-.3,2.5-1.4,.8-7.7-2.6-5.1,.2,1.5,3.1,8.1,3.9,7.8,7.1-.1,.5-.5,.2-.7-.1-1.1-1.3-2.7-2.1-3.8-3.1-3.8-3.8-9.6,5.5-12.8-1.1-.9-1.6-2.1-2.1-3.5-3.1v5c1.7-.1,.7,1.6,0,2.3v2.8c3.6,2.8,5.2-3.3,10,.3,.7,.4,1,.2,.8-.6-.7-2.4,.6-2.5,1.3-1,2.3,4.2,5.3,7.9,9.1,11,1-1.1,1.1-1.9,.3-2.4-4-2.6-3.9-5.3-7.5-8.6-.8-.7-1.5-2.3,.3-1.5,2.1,1.1,5.6,6.6,4.6,3-.1-.6-.4-1.1-.8-1.5-1.6-3.2,3.5,2.7,5,3,1.9,.5,.2-4.6,3.1-2.7,2.3,.8,8.7-.5,3.1-2.6-2.1-1.3-6-2.6-6.4-5,2.3-2,5-3.2,7.9-1.7,2,1,.9-2.3,2.4-2.1,4.4,1.3,9-.3,13.2,1.7-1.7-4.1-4.5-6.9-8.6-8.4h0Z"
												style={{ fill: "#0c2242" }}
											/>
											<path
												d="M135.5,312.6c.7,1.7,2,2.8,3.7,3.3l3.3-1.8c2.9,.7-3.6,3.4-1.3,4.9,.5,.2,.6,.7,.4,1.4-6.6-3.1-2.2-.2-4.2,.8-.4-.9-1.1-1.3-1.9-1.3-1.4,.5-3.5-2-4.8-.7-.9,.8-2.7-.1-1.5-1,1.3-1.2,1.3-3.1,2.3-4.4,1.4-1.5,.9,.8,1.3,1.7,1.8,1.9,.7-3,2.7-2.9h0Z"
												style={{ fill: "#04132b" }}
											/>
											<path
												d="M224.9,315.6c1.5,.1,3.8,.1,2.5,2.3-2.1,2.5-1.7,.1-3-.7-1.6,.2,.8,3.3-.9,4.4,.3,2.6,1.6,6.6,4.7,6.8l7.5,3.3c.3,.5,.3,1.1,0,1.7l-3.4-.5c-.3-.3-.6-.4-1-.2-1.9-.8-3.2-.5-4.2,1-.2,.2-.3,.1-.5,0-.9-.8,.2-2.7-1.6-2.6-1.7,.2-3.1-2.9-4.1-2.9-1.6,0-.4,3.5,0,4.5-1.5,.2-2.4,1-2.6,2.3-1.2,.1-1.9,.6-2.1,1.6-.4,2.4-2.2,2.6-4,2.9-2,1.3-3.8,2.9-5.2,4.8-6.2,7-4.9-4.4-.8-5.6,5.9-4.6,.3-5,10.2-8,.8-.9,4.5-4.2,1.1-4.2-2.3,.3-2.1-1.6-.5-2.4l2.8-1.6c.2-.1,.4-.5,.3-.8-.3-.3-.1-4.4-1.1-3.8-1.1,.6-1.6,.3-1.6-.9-3.8-5.8,4.8-2.8,7.5-1.4h0Z"
												style={{ fill: "#040e22" }}
											/>
											<path
												d="M233.7,317.9l.5,6.5c.3,1.6,1.3,3-1.3,2.8l-.8-.6c-.2-.5-.3-.9-.3-1.5,.9-2.7-2.7-5.8-4.5-7.2,.6-1.4,.2-2.1-1.2-2.3,1.4-5,5.4,1.1,7.6,2.3h0Z"
												style={{ fill: "#091b35" }}
											/>
											<path
												d="M90.5,316.9c1.2,1.1,3.7,2.9,3.2,4.6-1.1,1.2-2.3,1.2-3.6,0-.5-.5-.7-.4-.6,.3,0,.8,1.9,5.6-.5,4.7-1.2-1.2-1.5-3.7-3.6-3.9-4,.3-5-5.3-1.2-6.3,.8-.1,5.4,3.7,4.5,.6-.2-.6-1.4-3.8-.2-2.8,.4,1.2,.4,2.5,2,2.8Z"
												style={{ fill: "#113a5e" }}
											/>
											<path
												d="M718.2,320.1c-2.7,3.4-5.6,6.4-8.8,9.2,4.3-5.3,8.9-11.3,13.9-15.3,0,.1-.1,.3-.2,.4l-4.9,5.7h0Z"
												style={{ fill: "#2673a1" }}
											/>
											<path
												d="M798.7,317.1c.7,.4,1.4,3.3,.4,2.8-.5-.5-1.2-.9-1.9-1-1,.2-1.3-2.6-1.7-3.1-.4-1.1-.3-1.5,.5-1.2,.9,.8,1.2,2.3,2.7,2.5Z"
												style={{ fill: "#27486c" }}
											/>
											<path
												d="M784.8,314.7c2.4,2.5-4.2,8.1-5.9,10.3-1.6,2.8-8,2.9-8.1,4.9,.4,2.3-2.2-.6-3.1,.5-.4,0-2.8,2.3-4.7,3.2-3.7-1.8,15.6-10.3,9.7-10.8,.7-.4,1.9-.5,2.2,.4,.9,2.6,3.4-3.6,5.3-3.2,.3,.5,.3,1,0,1.3-.2,.2-.4,.5-.3,.8,.4,1.5,1.8-2.2,.9-2.5,.9-1.9,2.3-3.5,4-4.9h0Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M825.2,330.9c-.1,.5-4.1,4-3.1,4.6,2.7,.7,3.3-3.4,6.4-4.7,2.6-1.1-1.4,3.8-1.7,4.6-1.3,2.1-4.3,3.1-6.3,4.5-1.6,1.1-1.5,1.7,.5,1.7,4.7-.3,8.3-6.8,9.7-11.4,.1-.7,.4-1,1-1,.7,2.2-1.7,4.2-2.3,7,.1,3.2-10,8.7-7.9,9.6,1.7,1,5.4-4.6,3.8-.3-.2,.6,0,.8,.6,.7,.9-.2,1.2,0,.9,.5-1.9,2.6-2.3,5.9-4.5,8.2-.4,.9,1.5,.9,1.5,1.8-.5,4.1,4.5-1.6,3.6-2.4-.8-.7-2.7,2-2.1,.2,3-2.4,8-4.7,8.8-8.8-1.1-1.5,.9-3.9-.9-5.2-.2-.2-.2-.5,0-.6,1.3-1.2,1.7-2.8,1.1-4.7,.7-1.2,1-2.5,1-4,.2,6.8,3.5,8.5,.7,13.8-1,12.5-.7,23.6-2.2,37.6-.2,2.4,.6,2.9,2.4,1.7,.3,3-2.5,9.6-5.6,7.1-1.3-.4-1.7,.9-2.7,1.2-2.7,.5-5.9,.9-6,4.4l-16.5-.2c-1.3-1.1,.3-3.6-2.8-2.3l-8.7,3.2c-1.1,.1-.8,4.2-1,4.8-.8-7.3-.8-14.6,0-21.9,.6-1.6-.5-2.2-1.5-3.3l-3.6-4c-1.1-.4-.4,2.5-.2,3.2-.2,.2-.4,.3-.7,.3-1-.6,0-1.4-.3-2.1-.2-.3-.6-1.3-1.1-1-4.2,.5-11.9,8.9-14.5,3.1,4-2.6,6.4-4.7,7.4-6.1,1.7-1.9-.3-7-2.3-3-.8,1.4-1.3,1.2-1.5-.4,4.2-7.4,1.4-3,5.9-2.9,.8,.1,.9,.4,.1,.8-1.8,.7,.3,3.1,.5,4.8,0,.5,.5,.5,1.4-.1,9.6-.6-1.4-11.4,14.4-2.2,.6,.4,1.4,.1,1-.7,.6-2.8-.8-5.6-1.3-8.3,1.7-5.3,5.7-1.1,1.1-7.1-.1-.2,0-.5,.2-.5,1.2-.7,3,3.7,3.8,1.5,.4-1,.2-1.8-.7-2.6-2-1.9-2-2-3.4-3.7-2.4-.4-3.5,3.2-2.2,5.3-.1,1.7-.7,3.4-.3,5.2-1.1,1.8-2.5-5.6-3.4-6.6-1-2.3-.5-4.1,.6-6,2.7-1,3.3-4.1,4-6.8,.1-1.4,1.7-4.5,3.2-3.3,.6,2.6,2.9-2.1,4.3-.5,3.5,4.9,5.4-1.1,1-1.4-.3,0-.6-.1-.7-.4-.8-3.5,4.9,.8,5.9,1,1.1,.9,1.8,2.1,3,.2,.7-2.1-4.4-2.2-3.6-5,.1-1,.4-1.1,1-.2,1.2,2.5,3.9,.8,4.8,3,.6,3.4,2.4,2.2,2.5,.1,.3-7.7-13-2.3-12.6-10,3.7-3.7,4.8,4.3,8.2,2.4,1.5-.6,1.5-2,2.3-3,1.6-1.1,2.7-2,3.3-2.8,1.1-1.7,2.1-1.8,2.8-.2,.2,1.1-1,1.9-1.3,2.9-.4,.9,.2,1.5,1.2,1-.3,.7-4.3,3.6-3.4,4.6,2.4,4,3.7,1.3,4.6-.2,3.4-2.8,5.8-7.5,9.1-9.9,1.8,.3,1.5,2.8,1.8,3.8,.5,2.1-.3,2.4-2.5,.8-.5-.4-1.2-.2-1.5,.4-1.2,3.7-4.2,5.9-6.7,8.5,.5,.6,.9,1.3,2.2,1.7h0Z"
												style={{ fill: "#04132b" }}
											/>
											<path
												d="M209.2,321.5c-3.9,.5-6.3,4.6-3.2-2,.1-.3,.4-.5,.7-.5l4-.4c1.2-.4,5.4-5.6,4.9-1.5-1.5,1.3-2.9,2.8-1.9,5.3,.2,4.6-4.6,7.6-8.5,5.8-.3-.1-.3-.4-.1-.6,2.2-.1,5.8-.6,6.1-3.2-.4-.4-1.2-3.2-2-2.9h0Z"
												style={{ fill: "#040e22" }}
											/>
											<path
												d="M785.8,315.9l.4,2c-1,1.6-2.3,3.8-1.7,5.7,.6,.9,1.3-.4,1-1.1-.4-1.5,1.9-2.6,1.2-4.2,.2-.1,.3-.2,.5-.2,.4,1,.3,1.9-.4,2.8-.5,.3-.6,2.7,.2,1.8l2.7-3.9c.6,.1,1.1,.4,1.5,1-1.5,.8-2.5,2.1-2.8,3.8-.2,.8-5.9,2.6-3.3,3.4,2.6-1.3,2.5,3.5,.7,4.1-2,1,.7-2-1.2-2.6-1.5-.6-1.9-1.6-1.2-3,1-2.3-1.6-.4-2.5,.7-.8,0-1.4-.3-2-.8,2.9-3,5.1-6.1,6.9-9.5h0Z"
												style={{ fill: "#182544" }}
											/>
											<path
												d="M227.5,317.9c1.7,1.6,5.3,4.4,4.5,7.2-.4-.1-3.5,1.9-3.4,.7-.4-1.5,1.3-1.7,1.6-2.7,.1-1.7-1.8-.6-3-.8-1.6-.2-4.3-4.7-2.6-5.3,1.4,.8,.6,3.5,2.9,.9h0Z"
												style={{ fill: "#486a9a" }}
											/>
											<path
												d="M370.8,316.9l13.2,11.7c-1.1,4.8-3.2,9.9-7.6,12.2-2.2-.1-3.8,.7-4.8,2.6-.1,.4-4.9,4.8-5.2,5.2-2.7,2.2-4.5,2.5-5.3,5.7-.6,.3-.1,1.7-.7,1.5-1.5-.7-2.6-.6-4.1-2.3-2.6-1.6-5.7,1.8-8.2,2.8-10.3,4.4-19.4-5.5-28.4-9.1,.2-4.8,17.7,6.9,21.1,7.8,4.7,2.6,4.8-2.8,6.9-5.7,.4-.7,2.6-2.8,2.5-3.7,.4-2.1,2-4,2.9-6.4l5.7-4.6c.6-.7,.4-2,1.4-2.4,2-1.2,1.8-1.5,3.2-2.8,2.3-1.3,2-3.7,2.1-6,.3-.4,.7-1.5,1.5-1.1,.4,.1,.6-.1,.6-.6,.5-1.9,1.9-3.3,3.2-4.8h0Z"
												style={{ fill: "#1e6f9e" }}
											/>
											<path
												d="M118.3,317.1c1.2-.2,1.6,.2,1.2,1.2-3.8,2.6-5.9,6.2-6.3,10.8-.4-.2-.8-.3-1.2-.3,1.7-3.5-3.9-2.2-4.4-.2-.4-.2-.8-.2-1.2,0-.2-1.9-2.5-.1-4.1-.8-1.9-2.8,4-1.8,2.9-4.3-2.6-3.6,8.3-4.4,10-6.1,1.1-.2,2.1,1.2,3.1-.3h0Z"
												style={{ fill: "#0a2e52" }}
											/>
											<path
												d="M789.8,318.6l-2.7,3.9c-.8,.8-.8-1.4-.2-1.8,.7-.9,.9-1.8,.4-2.8,.8-.9,1.7-.6,2.5,.7Z"
												style={{ fill: "#5979ad" }}
											/>
											<path
												d="M296.2,324.2c-.5,5.8,.2,11,5.3,14.4,0,11.8-3,22.4-7.5,33l-11.1-4.9c2.4-2-2.1-2.8-.5-4.3,1.1-2-1.9-3.7-2.2-5.6,.2-1.6-1.4-2.6-2.2-3.5-.4-.7,0-1,1-1,1.3-.1,1.6-1.9,.3-2.4-1.2-.1-2.6,1.1-2.8-1.2-.3-2.7-.8-3.5-.6-5.3,3.1-6.2-3.6-10.7-2.4-16.3l-5.6-8.8c2-1.7,7.2,4.7,11.2,6.2,7.6,3.3,10.1,4.1,17.1-.3h0Z"
												style={{ fill: "#123c61" }}
											/>
											<path
												d="M786.2,317.9c.1,.2,.3,.3,.5,.3,.7,1.6-1.6,2.7-1.2,4.2,.3,.8-.4,2.1-1,1.1-.7-1.8,.6-4,1.7-5.6h0Z"
												style={{ fill: "#486a9a" }}
											/>
											<path
												d="M791.2,326.6l-2.8-3.3c1.6-.7,2.8-1.8,3.5-3.2,2.1,1.2,2.9,.6,2.3-1.6-.1-.4,0-.5,.3-.3,1.6,.5,.4,2.2,.5,3.3,0,.7,1.2,1.2,1.2,.3-.3-3.8,3,.1,2.5,1.8-.2,2,2.8,2.3,3.1,3.8,.1,.2-.2,.5-.4,.4-4-.3-3.5-3.9-6.9-5-2.1-.7-1.9,3.1-3.3,3.8h0Z"
												style={{ fill: "#173f5f" }}
											/>
											<path
												d="M119.5,318.3c3.1,1,3.7,4.2,4.7,6.9,2,4.4,2.3-2.3,4.8-2.1l4,.5c1.8,4.3,12.8,7.5,6.8,.2-.1-1,.4-1,1.4,.1,.8,.9,2.8,1.4,6.1,1.7,0,1.3-1.2,1.1-1.8,1.6-.7,.8-2.3,3.2-3.4,3.4-.6,.7,.5,1.7-.9,2.2l-6.8-2.8c-2.4,.4-6.5,.3-7.6,2.4,.6,1.9,1.9,2.6,3.9,2.1,1.8,.6,5.3,2.8,6.2-.4,.3-1,1.5-1,.9,.5-.5,1.5-.3,2.5,1.2,2.4,1.2-.2,4.1-.5,5.3-.3,.2,0,.4,.3,.4,.6,.2,1.6,2.6,2.2,2.3,4.2,0,.5,.5,1,1.1,.9,1.8-.3,1.9,1.3,.7,1.8l-1.4,.4c-.8,.2-1.4,0-1.7-.8-.1-1.9-10.1-8.9-8.3-3.7,.3,1.4,1.7,2.5,4.1,3.2,2.8,2,5,5.1,8.2,5.7,1,.3,1.8-.8,.8-1.5-.3-.3-1.5-.1-1.6-.9,3.9-.3,4.5,2.9,10,5.8,.9,.8,1.2,1.8,.9,2.8-.2,1.5,3.7,1.5,.7,3.3-6.2,1.6-2.7-3.5-6.4-4.7-3.6-1.1-4.1-1-6.4,1.6-1.5,.8-6.6-2.8-6.2-.6,.2,.4,.6,7.4,1.4,7.2,1.3,.4,2.4-1.5,3.2,.2,1.4,3.9,.5,5.1-2.6,3.7-1.8-1.7-4.1-6.1-6-2.6-.9,1.9-2.7,5-3.3,3.8l1.4-6.5c-.5-6.6,6-.3,4.9-3.8-1.2-4.4-5-6.2-8.2-8.2,2.2-2.6,4.4-2.3,6.8,1.1,.8,1.3,4.8,2.5,5.1,.4-3-3.7-6.8-7.1-9.8-10.6-.2-.2-.5-.2-.8-.1-2.4,1.9-3.7-2.5-4.2-.8-1.3,3.4,4.9,2.9-.2,6.3-2.3,2.2-5,3.5-8.2,4.1-2,1-3.8,2.4-6.1,1.6-2.6,2.1-3.3,4.4-7.7,3.1,0-.5,.2-.8,.6-.9,3.2-1,5.3-3.2,6.3-6.5,.4-1.1,3.1-3.1,1.2-3.6-2.7,1-3.3-2.1-4.7-1.2-1.3,2-2.6,.1-3.8-.9-.5-1,1.8-4,2.8-3.3,.5,.9,1.6,1,2,1.9,.6,1.2,1.4,1.3,2.5,.3,1.8-1.9,3.1-1.4,5.3-4.5,1.2-.7,2.8,.8,4.3,.2,2.7,1.6-.8,4-1.9,5.2-1,.3-2.2,.1-2.9,1.1-.9,1.2-3.3,4.8,.8,4.1,6.9-8.2,10.4-2.4,4.9-10.9,.3-2.8-6-3.3-3.6-5.7,1-1.1,.9-2.2-.2-3.2-.2-.2-.5-.1-.6,.1-.2,.5-.6,1.2-1.1,1.5-3.9,1.8-6.7,4.6-8.5,8.6-.6,.1-1.1,0-1.6-.4-2.1-2-2.7,2.6-3.3,3.9-.1,.3-.4,.4-.7,.4-4.1-1.2-3.8,4.2-3.1,6.9,.3,2.1-3.2,.3-3.6,1.9-.7,1.9-3.4,2.1-4.2,3.4l.3,1.9-5.7-3c-3.8-5.2-8.7-8.6-14.8-10.3-1.4-.4-5.7,3.2-7,3.4l-5.2,1.5c-3.7,1.3,6.4,4.7,3.1,6.6-2.5,1.1-1.6-1-2.2-2.4-.6-.5-3.8-3.1-4.5-3.2-1,.1-1.7-1.8-.5-1.9,2.9-.3,6.1-.3,8.1-2.8,1.3-1.2,2.7-3.3,4.5-3.3,4,.2-4.3-5.4-3-7.9,10.1-14.5,10.2,6,13.3-.1,1.2-.6,5.4,.3,3.8,2.1-1.1,.6-1.7,1.6-2,3-.1,1.3,2.8-.9,3.8-.5,.8-.1,.9-1.3,1.8-1.3,.6,1.4,1.5,2.3,2.8,2.8,2.7-2.7,6.6,.6,9.4,1.9,1.4,.6,2.3-1.4,1.2-2.3-.5-1.2,.1-2.6-1.3-3.7l-.6-2c0-3.2,5.4,1,2.7-4.2,1.7,.7,3.8-1.1,4.1,.8-11.1,8,1,9.4,6.6,3.7,.9-4.8,.8-8.7,6.7-12.6h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M49,320.6c1.4,1.2,2.9,4.9,2.5,6-.6-1.3-2-2.7-3.5-2.4-2.9,1.2-6-.2-8.8,1.1-3.7-.6-7.5-3-9.5-3.2-2-.6-1.8,.7-.9,1.7,2.9,4.5,11.7,3.3,11.1,8.8-.3,.8-5.9,1-6.5,1.2-1.6,0-2.2-1.7-2.3-3.2,8.4-.9-4.3-4.4-5.6-7.1,.2-2.3,4.2-3.1,6.3-3,1.1,.2,3.2,1.9,3.2-1,0-.4,.4-.6,.8-.5,2.8,.7,5.6,.9,8.4,.4,.6-.1,4.2,1.1,4.8,1.2h0Z"
												style={{ fill: "#04132b" }}
											/>
											<path
												d="M131.8,318.7c2.1,1.7,4.3,.3,5.7,2.5-.8,3.5,2.9,4.1,3.4,7-3.8,.2-12.1-5.5-9.1-9.5h0Z"
												style={{ fill: "#396390" }}
											/>
											<path
												d="M141.7,320.3c0,.2,9.2,6.1,7.7,5.9-2.6-.5-7.5-1-8.3-2.1-1.5-1.8-1.9-.2-.9,.7,.7,.4,2.4,3.6,.5,3.5-.5-2.7-4.2-3.8-3.4-7,2-1.1-2.5-3.8,4.4-1h0Z"
												style={{ fill: "#6798c0" }}
											/>
											<path
												d="M224.3,319.3c1.3,5.4,5.7,1.3,5.7,3.9-.4,1-1.8,1.2-1.6,2.7,0,1.2,3-.8,3.4-.7-.1,.5,0,1,.3,1.5-.6-.1-1,0-1.2,.5-.6,2.6-2.8-1.5-2.9,1.3-.7,.1-1.2,0-1.7-.5,0-3.9,.3-3.8-2.9-6.3,.6-.8,.8-1.5,.9-2.4h0Z"
												style={{ fill: "#0f2543" }}
											/>
											<path
												d="M780.7,319.6c1,.3-.6,4-.9,2.5,0-.2,.1-.5,.3-.8,.4-.4,.4-.8,0-1.3,.2-.2,.4-.3,.6-.4Z"
												style={{ fill: "#35577e" }}
											/>
											<path
												d="M791.2,319.6c.4,0,.6,.2,.8,.5-.8,1.5-2,2.6-3.5,3.2,.3-1.6,1.2-2.9,2.7-3.7Z"
												style={{ fill: "#5979ad" }}
											/>
											<path
												d="M755.7,321.4c-7.9,9.1-6.9,17.9-7.1,29-2.1-.5-3.5,0-4.4,1.5-.2-1.8-.8-2-1.9-.5-16.7,10.2-32.1,17.9-49.2,28.5-2.8,1.8-3.3-5.6-5.6-1.8-1,1.6-2.9,2.8-5.5,3.6-18.1-2.1-35.9,.6-53.8,.6v-1c11.9-7.6,23.4-16.8,29.5-29.5,1.6-.9,2.3,.4,3.5,1.1,2.3,.8,3.1,2.4,2.4,4.9-.3,1.2-.2,1.7,.4,1.7,.7,.1,2.3-2.8,2.7-3.2,6.9-.2,8-.6,12.8-7.1,1.1-.1,5.7,1.8,3,3-1.4-.2-1.5,.2-.3,1.1,4.9,3.9,2.6,.5,6.7,.5,1.9,.5,2.4-.8,3.5-1.7,1.8,.1,4.5-4.3,5.7-1.9,1.2,2.2,1.8,.6,3.3,0l4.3-1.2c1.7-.3,3,0,4.3-1.2,3.4-.6,6.9-.5,9.8-2.9,1-.7,2-.8,3.1-.5,5.5,.5,10.4-4.5,15.7-5.8,3.6-.8,5.8-6.8,9.8-8.5,3.2-1.9,4.6-6.7,7.3-8.7h0Z"
												style={{ fill: "#102b4a" }}
											/>
											<path
												d="M223.5,321.6c3.2,2.5,2.9,2.4,2.9,6.3-1.7-1.8-2.6-3.8-2.9-6.3h0Z"
												style={{ fill: "#35577e" }}
											/>
											<path
												d="M836.4,383.9c-5.1,4.7-.3-17.9-1.2-18.9,.2-8.9,.6-12.7,1-20.4,1-2.3,1.9-4.4,.5-7-1-1.3-1.4-8.9-.9-11.8-2-.6-3.8,9.6-4.7,11.8-.9,1.5-2.2,2.8-2.3,4.7,0,1,.8,2,.1,2.9-1.4,3.5,4.3-1,2.9-2-2.6,0-.1-1.5,.3-2.4,.5-.8-.7-1.5-.4-2.3l3-3.9c.5,1.9,.2,3.5-1.1,4.7-.2,.2-.2,.5,0,.6,1.8,1.4-.2,3.7,.9,5.2-.8,4-5.7,6.4-8.8,8.8-.3,.8,0,.9,.7,.2,3.4-1.8,0,3-1.2,3.4-1.5,.7-.5-1.6-1.5-2.1-2.5-.6,.3-2.2,.6-3.2-.2-1.5,4.6-7.4,2-6.6-.6,.1-.8-.1-.6-.7,1.7-4.3-2,1.3-3.8,.3-2-.5,4-4.1,4.5-4.9,2.2-1.6,6.3-9.7,5.7-11.7-.6,0-1,.3-1,1-1.3,4.6-5,11-9.7,11.4-2,0-2.1-.6-.5-1.7,2-1.4,5-2.4,6.3-4.5,.5-.7,4.2-5.7,1.7-4.6-2.2,.9-6,7.5-6.5,4,1.6-2.5,6.4-6.8,8.8-8.6,.5-.5,.8-2.2,2-1.2,.6,.6,3.6-2.6,4.1-2.8,2.8-2.8,1.6,10.5,2.7,12.3,.9,5.7,.5,11.8-1.4,18.3-.4,11.1,.2,21.3-2.2,31.7h0Z"
												style={{ fill: "#0a2e52" }}
											/>
											<path
												d="M853.5,328.1c3.3,5.2-4.6,1.8-5.7-1.2-1.4-1.6-1-5,1-4.5l1.1,2.3c.2,.5,3.2,2.9,3.6,3.4h0Z"
												style={{ fill: "#051d36" }}
											/>
											<path
												d="M772.7,322.8c4.2,.5-5.9,6-7.1,6.8l-12,.8c1-2.2,5.8-3.4,8.7-3.3,3.3-1.7,6.5-4,10.4-4.3Z"
												style={{ fill: "#afb9d2" }}
											/>
											<path
												d="M777.9,324.7c-3.8,2.5,1.7-4.2,.6-.7-.1,.2-.4,.5-.6,.7h0Z"
												style={{ fill: "#27486c" }}
											/>
											<path
												d="M640.8,343.6c-6.8,7.1-12,13.9-15.7,20.3-1.9,3.3-2.9,4.7-6.6,6.1-5.2,0-18.6,14.5-20.7,9.2,7.4-6,17-8.5,24.3-14.1,9.6-15,22.9-27.8,34-41.5-4.8,6.8-10.2,13.4-15.3,20Z"
												style={{ fill: "#5979ad" }}
											/>
											<path
												d="M788.5,323.3c.7,.9,3.1,3.7,3.9,4.4,2.6,9.7-1.7,5.5-.2,12.9-.1,3.4,2.1-1.8,3.6-.3,.2,2.2-1.5,2.5-2.8,3.4-1.1,2-1.7,3.8-.6,6,2.5,5.2,3.1,12.1,3.7,1.4-1.3-2-.4-5.6,2.2-5.3,1,2,4.7,3.4,4.1,6.3-.3,.8-.8,.9-1.3,.2-3.6-3.7-3-.8-.8,1.5,.6,.8,.5,1.2-.3,1.2-5.3,1.9-.3,7.6-1.4,11.5-4.8-3.4-9.7-3.7-13.8-7-3.2-2.8-7.7,1-10,3.4-5.1-1.5,2.1-3.5,2.7-5.8,.2-.4,.2-.5-.2-.2-.6,.4-4.7,3.3-5.3,3.5-2.4,.9,.2,1,.2,2.1-2.7,4.4-8.1,6.1-12.5,8.3-10.3,2.4,9.1-7.5,9-9.4-.2-3.2,1.7-7.6-2.3-7.4-.9-.5-9.9,5-8.2,1.7,2.8-3.9,8.9-7.6,10.6-9,1.6-.7,.5-2.8,1.2-2.3l2.2,1.5c1-.2,.8-3.1,2.5-2.6,1.4,.5,3,.3,4.6-.5,1.8,0,10,6.6,9.7,4.4-1.5-5.1-4.2-6.6-8.7-9.7-1.6-1.2-2.8-.4-3.7,2.4-.7-.1-1.2-.1-1.7,.1-2.7-1.1-3.6,1.6-5.7,2-1.9,0-2-.6-.5-1.8,1.1-1,3.3-1.2,3.3-3,.4,0,.7-.2,.8-.5,1.6-1.1,2.6-3.4,4.7-4.2,2.2,1.3,3.6,.5,4.2-2.2,1.8-1.4,1.5-2.5-.8-3.3v-1.4c1-1.1,3.3-2.9,2.5-.7-.7,1.4-.3,2.4,1.2,3,1.8,.4-.7,3.7,1.2,2.6,1.8-.7,1.8-5.5-.7-4.1-1.1,.1-.6-1.4,.3-1.6,1.3-.1,2.3-.7,3.1-1.5h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M296.2,324.2c4.2,4.6,4.5,10.7,10.6,14.4,2.2,1.3,4.5,6.3,6,8.8-.2,.1-.4,.3-.5,.5-.9-.9-1.2-.5-.9,1-.3,3.5-3.3,1.3-3.4-1,.8-5.2-1.3-8.3-6.4-9.2-5-3.4-6-8.7-5.4-14.5h0Z"
												style={{ fill: "#4287ac" }}
											/>
											<path
												d="M706.6,328.1c-1.4-.4-4.6-3.3-5.9-1.5-3,4-6.5,7.4-10.3,10.2-3.6,1.6-12,14.2-16,17.7-1.8,1.7-5,.9-7.7,1.4l-1.9,2.7c-3.3,2.5,1.5-5.3-3.6-6.1-1.1-.7-1.9-2.1-3.5-1.1,.1-.6-.2-.9-.8-.8,6.4-7.8,2.9,6.5,15.4,2,7-4.3,15.3-16.8,17.8-17.6,6.4-3.4,10.3-16.3,16.5-6.9h0Z"
												style={{ fill: "#2673a1" }}
											/>
											<path
												d="M779,325.1c.6,.6,1.2,.8,2,.8v1.4c-2.3-.5-.6,3,.8,3.3-.6,2.8-2,3.5-4.2,2.2,.3-.4,1.1-1.7,1.2-2-1.1-4.1-4.6,2.9-6.9,3.2-.6-.6-1.1-.6-1.6,0-.6,0-3.3-2-2.1-2.9l2.1-.4c.7,.2,.9-.1,.7-.9-.1-1.9,6.4-1.8,8-4.7Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M835.5,330.9c.4,2.7-2.4,5.9-4,7.9-.4,.7,.9,1.5,.4,2.3-.3,.9-2.9,2.4-.3,2.4,.2,0,.4,.2,.3,.5-.5,.9-3,4.3-3.4,2.1,.7-1.1,.4-2.4,.1-3.5,.1-1.9,1.4-3.2,2.3-4.7,.9-3.6,5.5-19.7,4.6-7h0Z"
												style={{ fill: "#040e22" }}
											/>
											<path
												d="M91.5,326c5.9,0,11.4,11.3,7,8.6,0,0-6.9-8.6-7-8.6Z"
												style={{ fill: "#225378" }}
											/>
											<path
												d="M110.6,385.9c-8.6-7.3,1-4.5,5.7-8.4-2-.9-11.8,3.4-8.3-.7,1.6-1,2.1-2.2,1.5-3.7-1.5-5-5.1-9.9-4.1-15.3,0-.2-.1-.6-.3-.9-1.2-1.7-3.1-5.1-1.6-6.8,1.3,1.1,1.1,3.8,3.5,4.3,0-.5,.2-.8,.6-.9-2.4-2.1-2.5-5.3-3.7-8l-2.1-1.2c.5,7.4,.1,2.3-3.3,5.1-.7,1.9-3.4,2.1-4.2,3.4l.3,1.9,2.5,2.8c2.6,3.2-5.2,1.8-5.5,.2-1.4-1.8-2.1-1.8-2.3,0-1.1,2.7-5.4-.5-7.5-.1-2.5-.3-2.4-1.5-2.5-3.7-.1-.9-.4-1.8,.7-2.1-1.2,.4-2,0-2.3-1-2,1-2.3-1.2-3.4-2.1-.2-.1-.5,.1-.5,.4-.1,2.7-1.4,3.3-3.8,1.7-1.8-1.4-2.7,0-1.9,1.4,1.7,2.2-.7,1.4-2.1,2.1-1.4,1.3-2,5.7,.9,3.9,.8-.5,1.9,.5,2.7,0,.9-.6,1.4-2.3,2.8-.9,1.9,2.1,6.2,2,6.4,5.4l.4,7.9c1,6.3-14.3,1.3-17.5,.1-1.6-1.2-3-2.8-5.2-2.5-1.2-.4-1.8-1.9-3.4-1.6-1.6-1.5-2.5-1.6-2.7-.2-.5,3.1-2.3-3.7-4-1.1-.9,.9-6.9-5.8-5.5-1.8,.3,1,3.8,6.6,1.5,4.4-4.6-5.4-4.3-2.1-8.4-5.6-1.5-1.6-1.3,2.4-2.6,1.9-2.4-1.3-4.5-5-7.8-4.8-1.3,.5-2.5,.2-3.5-.8-1.4-1.4-.8-2.5,1.6-2.1,1.6-.3-.3-3.1-1.2-2-.7,.6-8.9,10.7-7.5,6.3,1.7-2,1.4-2.9-1-2.8-1.1-.2-7.2,6.5-5.2,1.8,1.1-4.9,.7-9.9,6.8-12.6,2-.6,2.7,1.6,3.7,2.8,2.3,1.6,3.4,1,3.3-2-.4-.3-.6-.6-.5-.9-4.7,0-2.2-2.7,.2-3.2,9.9-1.8,20.1,3.7,26.9,10.7,.5,.6,1.4,.5,1.7-.2,.3-1.1,1.5-1.3,2-2.1-.1-1,1.9-2.3,1.3-2.9-11.3-1-15.9-8.3-28.1-8.4h0c-3.8-3.1-6.8-6.8-9.1-11-.7-1.5-2-1.5-1.3,1,.2,.8-.1,1-.8,.6-4.7-3.5-6.4,2.5-10-.3v4.6c2.5,1,3.8,.5,6-.8,2.5,3.3-.1,8.6-3.6,10.8-.5,.4-.9,1-1,2-.1,1.3-.6,2.8-1.4,1.6v29.4c7.7-1.9,7.8,3.1,13.1,.9,11-5,26.7-1.6,37.9-2.7,8.2,.2,17.5-1.6,25.2-.5,.7,8.3-.1,15.9-2.4,23.5,2.7,.5,6.6,1.9,8.9,.5-1-.8-2.9-1-3.9-2.4l-.3-21.7c0-.3,.2-.5,.5-.5,3.7,.5,12.2-2.4,13.9,1.5,.6,.1,1.2-.3,2.1-1.1,5-4.9-1.4,5.4,3.1,3.5,3.2,1.3-.2,8.8,5.2,9.5,1.9,.5,7.3-1.3,4.4-3.5h0Z"
												style={{ fill: "#04132b" }}
											/>
											<path
												d="M112,328.8c0,1-8.1,4.9-6,2.6,2.1-1.4,1-4.2,3.7-4.5,1.6-.3,3.4-.7,2.3,1.9h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M124.7,335.8c-1.2,1-3.1,.7-4.4,.2-1.9,.4-3.5,3.7-4.8,3.4-2.4-1.1,5.7-6.6,3-6.5-2.1,1.6-3.7,6.5-7.8,4.1,1.8-4.5,5.5-6.8,9.2-9.3,.2-.3,.4-1.4,1-.9,1.2,1,1.2,2.1,.2,3.2-2.4,2.4,3.9,3,3.6,5.8Z"
												style={{ fill: "#0a2e52" }}
											/>
											<path
												d="M232.2,326.6l.8,.6c1.5,2.2,3.4,2,2.7,4.5l-7.5-3.3c.1-2.9,2,1.4,2.9-1.3,.1-.5,.5-.7,1.1-.5h0Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M781,327.3c2.3,.9,2.5,2,.8,3.3-1.3-.3-3.2-3.8-.8-3.3h0Z"
												style={{ fill: "#27486c" }}
											/>
											<path
												d="M793.5,341.3c-1.8,1.4-1.1-.5-1.4-1.7-1.3-2,1.2-5.1,1.3-6.6l-1-5.3c1.7,1.5,3.1,1.9,5.5,1,2-.7,2.6,.1,1.8,2.5-1,1-3,.6-3.3,2.5-.9,3.3-1.8,4.7-2.9,7.6h0Z"
												style={{ fill: "#041933" }}
											/>
											<path
												d="M856,340.8c-1.5,1.5-2.1,4-4.1,5.5-.5,.5-.9,.4-1-.3-.6-3.7,1.1-6.4,3.4-8.9,1.2-4.1-4.6,3.2-5.6,3.7-3.5,3.9-1.7-7.2-1.1-8.4,1.7-1.5,.6,2.9,2.2,2.4,3.1-1.5,5.4-3.7,6.8-6.6,.3-.7,1.3-.7,1.8-.1,.4,.8,4.4,4.1,3.8,5.1-1,5-6.9,3.4-6.2,7.6h0Z"
												style={{ fill: "#051d36" }}
											/>
											<path
												d="M231.3,332.6c0,.3-.1,.5-.3,.8-1.8,.1-2,.9-.5,2.5-2.2,.1,.4,2.1,1,2.6-.4,.6-.2,.9,.5,.8-4.1,1-3-3.6-4.9-3.5-.2,.1-.3,.4-.2,.7,1.5,2.6-2.4,5,1.3,6.6-.5,.6-.7,1.2-.5,1.9-.3,0-.5,.1-.8,.3-.6-3.7-3.9-1.7-2.9,1.1-2.1-2.5-7.5-1.1-7.6-5,1.5-2.5,4.7-5,2.8,.4-.1,.3,.1,.6,.5,.6,1.2-.1,1.9-1.1,2.2-3.2,.7-1.3,3.2,3.8,4.5-.5-1.4-2-4.5-3.3-5.5-6-.6-1.1-1.6-4.5,0-4.5,1,.1,2.4,3.1,4.1,2.9,1,0,1.4,.7,1.2,2,.8,2.3,1.5-2.4,5.1-.5h0Z"
												style={{ fill: "#204b76" }}
											/>
											<path
												d="M88.6,331.7c-7.1-7.3,5.8-1.8,5.1,2.1-.7,2.1-1.2,2.1-1.6,0-.5-1.7-2.1-.9-3.5-2.1h0Z"
												style={{ fill: "#123c61" }}
											/>
											<path
												d="M107.5,328.6c.1,1-.4,1.9-1.6,2.8-2.1,2.3,5.9-1.6,6-2.6,.4,0,.8,.1,1.2,.3,3.5,5.6-16.1,10.3-10.4,2.8,2.6-2.3,2.8-3.8,4.8-3.3h0Z"
												style={{ fill: "#0f3354" }}
											/>
											<path
												d="M420.7,346.1c-3-.1-5.4-1.3-7.3-3.5-1.6-1-3.2,.9-2.4,2.8,.3,1-.2,1.4-1.6,1-.8-.2-1.6,0-2.2,.5-3.5,2.5-8.1,.1-12.5,.9-2.5-.1-4.4,2-6,3.1-1.7,.9-3.8,1.3-5.1,2.5-5.6,4.8-10.5,3.6-14.8,8.8l-10-6.8c3.2,.9,1.2,1.1,2.9-1.7,0-2.6,3.1-2.9,4.9-4.9l4.6-4.5c1.8-3,3.2-3.1,6.3-3.6,3.6-3.1,5.8-7.1,6.7-11.9,3.6,2.9,7.3,8.1,11.2,10.8,1.7-3.7,4.3-7,7.8-9.2,2.7,2,3.9,5.8,6.2,7.7,1-.7,1.3-1.9,.7-3.4l3.2-1.8c2.1,4.5,4.6,8.9,7.4,13.2Z"
												style={{ fill: "#2177aa" }}
											/>
											<path
												d="M75.7,333.3c1.5,1.5,.4,5.4-2.2,5.5l-3-4c-.9-1.1,1.5-4,1.9-5.1,1.7-2.2,2,2.8,3.3,3.6h0Z"
												style={{ fill: "#091b35" }}
											/>
											<path
												d="M409.2,338c-2.2-1.8-3.5-5.8-6.2-7.7-.3-.6-.1-1,.4-1.1,.6-.5,6,5.2,6.5,5.4,.6,1.6,.3,2.7-.7,3.4h0Z"
												style={{ fill: "#8c88c1" }}
											/>
											<path
												d="M777.5,332.9c-1.5,.8-2.7,1.9-3.7,3.2-1.1-.6-1.8-1.3-2-2,2.2-.4,5.8-7.2,6.9-3.2,0,.4-1,1.6-1.2,2h0Z"
												style={{ fill: "#35577e" }}
											/>
											<path
												d="M134.2,330.4c.9,2-1.2,3.8-.1,5.9-1.6,.3-2.5-1.3-3.8-1.3-2,.5-3.2-.2-3.9-2.1,1.4-2.2,5.4-2.1,7.8-2.5h0Z"
												style={{ fill: "#13304f" }}
											/>
											<path
												d="M134.2,330.4l6.8,2.8c2,.4,2.6,1.5,2,3.4-.9,.7-4.2,1-5.2,.8-1.4-.3,.6-3.5-.6-3.5-1,.8-1,2.8-3,2.4-1.3-2.1,1.1-3.9,0-5.9h0Z"
												style={{ fill: "#276691" }}
											/>
											<path
												d="M563.1,341.8c-.8,2.8-1,5.5-.5,8.1-6.2,1.6-18.9-10.1-25.4-13.3,.1-1.5-.8-1.1-1.5-.3-3.1,4.9-9.5,8.1-10.8,13.8l-13.1-5.2c-.4-.2-1.1,.3-1.4,.5-3.9,2.1-6.6,7-9.6,10.2-4.1,3.1-11.3,4-11.7,10.1-2.3-2.4-5.2-4-8.5-4.5,.4-1.6,0-1.9-1.3-.8-.1-1.5-.6-1.9-1.6-1.3-.8,.3-1.3-.9-2.2-.7-1,0-1.5,.1-1.5,.1-10.6-1.4-21.2-2.2-31.9-2.6-2,.8-9.4-4.6-13.5-3.3-.9-.1-1.2-1.3-2.6-.8l-2.4-3.8c.9-3.5,3.2-4.9,7-4.2,9.7,1.4,19.5,.6,29,0,2.3-.5,5.4-1.9,7.9-2.6,.6-.4,1.4-.5,2.4-.1,2.9,.6,5.6-1.1,8.3-.9,6.8,1.8,12.7-.2,19.1-2,2.1,0,4.1,.6,6.4-.5,.6-.2,.8,0,.6,.6-.7,1.5,8-1.9,8.1-2.9,2.4-4.7,8.5-1.7,12.2-3.1,4.1-.3,11.4-2.1,15.9-.7,5.6,5.6,14.8,1.2,21.8,2.4,1.7,1.3,1.6-3.4,3.4-2.5,1.4,.2,3.4-2.2,1.5,.8-1,3.2-1.9,6.5-4.1,9.5h0Z"
												style={{ fill: "#3597c9" }}
											/>
											<path
												d="M401.8,331.1c-2.9,2.2-5.1,5-6.6,8.4-.2-1.5-2.7-5.8-.3-6.6,.8,0,6.3-2.8,6.9-1.8Z"
												style={{ fill: "#5979ad" }}
											/>
											<path
												d="M426.8,353.1c0,.3-.1,.5-.3,.5-1.1-.4-17.4-24.4-12.2-20.7,3.9,6.6,8.8,13.5,12.5,20.2h0Z"
												style={{ fill: "#d9c4eb" }}
											/>
											<path
												d="M220.8,332.6c1,2.7,4.2,4,5.5,6-.6,2.2-2,2.3-3.9,.3-1.1-.7-.6,3.7-2.8,3.4-1.6-.4,2.5-6.6-2.3-2.5-2.1-.9,1-4.3,.8-5,.3-1.2,1.2-2,2.7-2.2h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M231.3,332.6c.4-.1,.7,0,1,.2,1.3,1.6,4.9,4.8,4,7.2,0,.3-.3,.5-.6,.5-2.1,0-3.8,.9-4.9,2.6-.8-.6-1.6-.7-2.5-.2-3.7-1.6,.2-4-1.3-6.6-.1-.3-.1-.6,.2-.7,2,.2,.8,4.5,4.9,3.5,4-1.5,.1-3.8-1-5.8,0-.2,.1-.4,.2-.7h0Z"
												style={{ fill: "#04132b" }}
											/>
											<path
												d="M115.5,339.4c-1.9,1.9-2.9,2.9-4.5,.3-.9-.2-1.3-1.7-2.1-1.3-.9,.9-2.5,2-2.1,3.4,1.2,1,2.5,2.8,3.8,.9,1.3-1,2,2.2,4.7,1.2,1.9,.5-.9,2.4-1.2,3.6-1,3.3-3.1,5.5-6.3,6.5-2.4-2.1-2.5-5.3-3.7-8l-2.1-1.2c-.3-3,.9-4.2,3.4-3.7,.3,.1,.6-.1,.7-.4,.5-1.3,1.3-5.9,3.3-3.9,.4,.4,1,.5,1.6,.4,4.2,2.4,5.8-2.6,7.8-4.1,1.7,0-1.5,3-3.3,5.1-.8,.4-.7,.8,0,1.2h0Z"
												style={{ fill: "#0a213e" }}
											/>
											<path
												d="M232.3,332.9l3.4,.5c1.5,.9,6,3.9,4.4,5.7-.6,.2-3.5-1.6-4.1-1.8,0,0-3.7-4.4-3.7-4.4h0Z"
												style={{ fill: "#8b9dc3" }}
											/>
											<path
												d="M90.8,338.1c-1.8-.6-3.1-2.5-3.1-4.5,1.8-1,3.5,2.6,3.1,4.5h0Z"
												style={{ fill: "#0f2543" }}
											/>
											<path
												d="M154.8,338.1l-10.8-1.5c-1-8.4,15.7,2.1,10.8,1.5Z"
												style={{ fill: "#6798c0" }}
											/>
											<path
												d="M230.9,333.3c.2,.5,3.3,3.8,2.8,4.4-.2,.7-3.1,2.4-2.3,.6,1.5-1.8-4.7-4.5-.5-5h0Z"
												style={{ fill: "#6798c0" }}
											/>
											<path
												d="M771.8,334.1c.2,.7,.9,1.4,2,2-.1,.6-.4,.9-1,1-1.6-1.6-1.9-1.4-.8,.5,.2,1.2-1.5,2.7-2.6,1.7,2.3-5.4-.6-2.9-3-.5-5.7,1.8-.5,2.6-2.4,3.5l-9.8,3.6c-2.9-1,13.5-8.8,16-11.9,.5-.5,1-.5,1.6,.1Z"
												style={{ fill: "#a6a8ce" }}
											/>
											<path
												d="M218.2,334.9c.3,.7-2.8,4-.8,5-.2,.6-.6,1.1-1,1.5-1-1.5-3.2,4.7-5.7,5-1.1-.1-.6-3.1-1.7-2.9-1.3,.9-2.1,1.1-2.3,.6,1.5-1.9,3.2-3.5,5.2-4.8,1.8-.3,3.5-.5,4-2.9,.4-.9,1.1-1.4,2.3-1.5h0Z"
												style={{ fill: "#153b5f" }}
											/>
											<path
												d="M537.3,336.6c-3.1,5.5-7.1,10.2-11.8,14.2l-.5-.7c1.2-5.7,7.7-9,10.8-13.8,.6-.8,1.5-1.3,1.5,.3h0Z"
												style={{ fill: "#dcd3eb" }}
											/>
											<path
												d="M124.7,335.8c.1,.7,4.1,5,2.4,5.5-3.2,.7-5,3.5-7.3,5.4-2.4,.2-3.1-.5-1.9-2.4,1.2-2.4,1.9-2.4,4-2.8,1.1-1.2,4.6-3.6,1.9-5.2l.9-.5h0Z"
												style={{ fill: "#061f39" }}
											/>
											<path
												d="M230.5,335.8c1.1,.6,1.4,1.5,1,2.5-.5-.5-3.2-2.5-1-2.5Z"
												style={{ fill: "#173f5f" }}
											/>
											<path
												d="M769.4,339.3c-.4,1-1.9-.9-3-.5,2.3-2.3,5.3-5,3,.5h0Z"
												style={{ fill: "#173f5f" }}
											/>
											<path
												d="M772.8,337.1c-.1,.3-.4,.5-.8,.5-1.1-1.9-.8-2.1,.8-.5Z"
												style={{ fill: "#35577e" }}
											/>
											<path
												d="M143,336.6h1l10.8,1.5c.2,1.2,.8,2.2,1.7,3,.4,2.3,2.5,6,4.8,5.4,.3-.1,.8,0,1.4,.1-3.1,2.2-2.7,2.9,1.2,2.2-6.1,2.7-9.3-5.9-16.9-3.9,.5-.2,1.9-.3,2.1-1,.9-2.1-2.3-.3-2.5-2.1,.1-2.1-2.1-2.5-2.3-4.2,.1-1-1.7-.5-2.2-.7l.9-.3Z"
												style={{ fill: "#091b35" }}
											/>
											<path
												d="M537.3,336.6c6.3,3.1,19.5,15.1,25.4,13.3h.3c-1.6,6.5-1.7,14.3-7.2,18.7,1.4-2.3,1.1-5,1.7-7.4,.5-.5,.4-1-.2-1.5-.2-.2-.5-.2-.8,0-.9,.5-1.6-.5-2.1-.6l-10.5-2.1c-.6,0-1.2,1-2.1,.7-1.1-.3-1.7,.3-2.2,1.2-.3,.6-3.2-.4-3.7-.4-.5-.1-.9-.7-.6-1.1,1.4-2.7-3.5-4.6-5.8-4-.9,.4-2.5-1.1-3.7-1.3-1.1-.1-1.2-.4-.5-1,4.9-4.3,8.8-9,12-14.5h0Z"
												style={{ fill: "#2a7cab" }}
											/>
											<path
												d="M779.3,343.1c-.7-1.1-1.6-2.1-2.7-2.9,.9-2.8,2.1-3.5,3.7-2.4,4.5,3.2,7.2,4.4,8.7,9.7,.7,2.3-8.1-4.4-9.7-4.4Z"
												style={{ fill: "#041730" }}
											/>
											<path
												d="M301.5,338.6c5.1,.9,7.2,4,6.4,9.2-1.4-4.1-7.7,16.4-9.6,17.1-.2-7.9,3.6-17.6,3.2-26.3h0Z"
												style={{ fill: "#276691" }}
											/>
											<path
												d="M84.8,345.3c-1.4-1.4-2.8-2.5-4.2-3.5-2.2-2.5,3.3-3.5,4.6-2.2,1.8,1,2.7,1.5,2.8,1.6,1.4,.7,5.7-1.1,6.1-1.2,2.5-1.5,9.3,4.3,5.2,5.1-.4,0-.7,.1-.8,.4l-3.4,4.9c-3.1,2.8-7.4-3.3-10.3-5.1h0Z"
												style={{ fill: "#0c2242" }}
											/>
											<path
												d="M146.5,345.1c0,1.3,.6,2,2,2,.1,.9,1.3,.4,1.6,.9,1,.7,.2,1.9-.8,1.5-3.4-.5-5.4-3.7-8.2-5.7-2.4-.8-3.7-1.8-4.1-3.2-1-4.2,2.5-.7,4.2-.3,2,.8,3.3,2.1,4.1,4,.2,.6,.6,.9,1.2,.8h0Z"
												style={{ fill: "#396390" }}
											/>
											<path
												d="M766.4,338.9c1.2-.4,2.6,1.6,3,.5,.2,.2,.4,.4,.8,.3-.9,.9-5,2.3-6.2,2.7,1.9-.7-3.2-1.8,2.4-3.5h0Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M140.5,347.1c-1.1,.5-1.6,1.6-1.6,3.3-2.4-3.4-4.7-3.8-6.8-1.1-.1,.2-.1,.5,.2,.5,4,1.3,6.6,3.9,8,7.7,1,3.6-5.3-2.8-4.9,3.8,.2-.9-.2-1.2-1-1,.1-3.1-4.7-1.8-5.8-4.2,.4-3.3-5.4-5.6-5.8-1.9,.3,2.1,1.1,2.5,2.4,1.2,1.1-1.2,1.7-.1,1.2,.9-.4,1.9-4.5,3.8-4.7,.9,.8-2-4.4-4.7-5.9-2,.2,4-5.1,2.7-5.6,5.9,1.1,1.7,4.8,.9,6.7,.3,1-.1-.9,3.9-.4,5.1,1,6,6-3.2,7.6-5,5.2-5.3,2.7,12.6,2.7,14.7-6.4,.6-12.9-3.3-18.7,.6,5.2-3.2-5-13.4-2.6-19-.7-2.1-3.7-5.6-1.9-7.7,1.3,1.1,1.1,3.9,3.5,4.3,4.3,1.3,5.1-1,7.7-3.1,2.3,.7,4.1-.6,6.1-1.6,2.3-.1,12.1-4.7,9.7-7.5-.1-.1-.4-.3-.8-.5-1,.2-.9-4,.3-2.5,.9,1.4,2,1.7,3.4,.9,3.2,.7,4.1,5.1,7,7h0Z"
												style={{ fill: "#051d36" }}
											/>
											<path
												d="M776.6,340.2c1.2,.8,2.1,1.8,2.7,2.9-2.6,1.7-6.3-1.1-6.7,3,0,.2-.3,.3-.4,.1-.2,0-3-2.5-2.5-1.2-.6,3.5-5.5,4.5-10.1,9.1,5-7.9,3.4-7.5,9.8-11.7,.7,.1,1.2-.2,1.5-.8,2.2,.5,3.5-1.5,5.7-1.4h0Z"
												style={{ fill: "#758aab" }}
											/>
											<path
												d="M774.9,340.4c-1.3,.9-2.7,1.3-4.2,1.2,1.1-1.2,2.5-1.6,4.2-1.2Z"
												style={{ fill: "#173f5f" }}
											/>
											<path
												d="M216.4,341.3c.3,3.9,5.4,2.5,7.6,5,3.2,1.4,3.3,4.4,4.5,6.8,1.6,.3,2.7,1.4,3.4,3.1-2.3-.2-2.4-2.3-5-2-2.9-2.5-14.9-6.2-10.7,1.4,4.7,1.6,5.6,2.3,8.5,6,2.9-.2,4.4,5.3,1.5,3.5-1.5-1.4-2.8-1.7-3.8-1-.4,1.1-2.2,3.6-1.4,4.7l3,5.6c2.3,3.7,3.8-4.4,2.9-5.7,.4,.4,5.3,2.7,4.9,3.5-1,2.7-.3,2.5,2-.5,.2-.2,.6-.2,.8,0l2.9,3.4c-.6,.5,0,1.6-.1,2.1-1,1.2-6.5-5.5-9.3,.5-1.3,1.6-2.9,3.1-2.8,5.4-.3,.9-1.6,.5-1.9,1.7-2.3,.3-.1,6.5-.3,8.3-.2,3.9-.9,8.4,1.3,12.4-2.5-.6-5-.8-7.5-.7-.1-.2-.1-.5,0-.8,3.7-.2,3.6-13,1.9-14.6l-12.7,1.3-13.2-1.9-10.7-3.8c8.1-22.8,17.6-2.5,24.7-15.5,.2-.7,3.4-3.5,1-3.2-1.5,1.1-2.1,3.6-4.2,4-2-.5,7.5-7.1-1.5-3.9-4.5-.2,3.2-4.3,4.6-3.2,1.4-.5,1.6-2.8,3-3.5,2.5,1.8-3.3,3.3-1.7,5.5,1.4,1,2.8-4.2,4.8-4.6,2.6,2-4,7.3-3.9,9.2-.6,2.3-2.7,3.1-3.5,4.8,.2,1.5,.9,1.5,1.9,0,4.4-5.5,5.4-9.2,10.3-12.6,.4-.2,.4-.8,0-1l-4.3-2.6c-1.4-1-2.3-2.4-3.4-.1-2.2-1.2-3,.6-4.5,1.2-1.4-2.8-3.3,.7-5.8,2.2-1.5-.3,1.5-4.1,3-3.8,.3-.3,9.4-4,9-4.6l2.3-4.9c1.3-1.9-6.7,1.6-3.1-2,2.1-1.1,3.7-2.7,4.6-4.9,.1-.7,.5-.7,.9-.2h0Z"
												style={{ fill: "#040e22" }}
											/>
											<g>
												<path
													d="M219.8,384.6c-1.9-2.2-4.2-3.5-7.1-3.8"
													style={{
														fill: "none",
														stroke: "#667b91",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M211.5,380.3c0-.3-.1-.5-.3-.7"
													style={{
														fill: "none",
														stroke: "#4a7991",
														strokeWidth: "2px",
													}}
												/>
												<path
													d="M202.2,376.9c-.4,.5-.7,1-.8,1.7"
													style={{
														fill: "none",
														stroke: "#6fb1cf",
														strokeWidth: "2px",
													}}
												/>
											</g>
											<path
												d="M156.5,341.1c2,1.5,3.6,3.3,4.8,5.5-2.4,.6-4.5-3.2-4.8-5.5Z"
												style={{ fill: "#27628b" }}
											/>
											<path
												d="M559.8,365.3c-.2-.3-.4-.3-.6-.2,2.7-6.7,2.7-14.1,5.3-20.7,.5,2.6,3.1-2.8,3.9-3,6.2,.6-6.9,22.1-8.6,23.9h0Z"
												style={{ fill: "#486691" }}
											/>
											<path
												d="M420.7,346.1l5.8,7.5c-3.3-.4-3.8,4.1-7.3,3.7-9,.7-18.4-3.1-25.5,3.2-.4-.4-.9-.7-1.6-.9l-14.5,10.5-8.9-8.3c4.3-5.3,9.3-3.9,14.8-8.8,1.3-1.2,3.5-1.6,5.1-2.5,1.6-1.1,3.5-3.1,6-3.1,4.4-.8,9,1.7,12.5-.9,.6-.5,1.4-.7,2.2-.5,1.4,.4,2,.1,1.6-1-.8-1.8,.8-3.8,2.4-2.8,2,2.6,4.5,3.8,7.4,3.9h0Z"
												style={{ fill: "#217eb2" }}
											/>
											<path
												d="M230.7,343.1l3,2.5c-1.8,.9-.5,1.3,0,1.8,1.5,5.6-4-2.3-6.1-2.5-.6-1.9,1.9-3,3.1-1.8Z"
												style={{ fill: "#5979ad" }}
											/>
											<path
												d="M319.7,347.1c11.4,5.7,22.4,15.6,34.6,5.8,3.5,4.8,7.5,9.2,12,13.2l.3,4.6c-1.2,2.8-1.7,5.3-1.2,8.4-.6,1.4,1.2,.7,1.6,.8,12.2,1.1,23.5-2,36.5,1.3-6.8,.1-33.9,.4-40.1,.2-3.6-1.7-28.3-8.7-30.5-12-7.3-8-16.9-16.3-22.7-26.4l9.5,4.1h0Z"
												style={{ fill: "#185280" }}
											/>
											<path
												d="M227,345.1c.3,1.6,1,2.5,2.1,2.9,2.1,.5,7.1,4.3,3.7,5-1.5-3-5.1-5.1-2.2-.1,1,2.3,4.7,1.6,4.8,5.4l-2.2-.5c-.3-.7-.7-1.2-1.3-1.6-.7-1.8-1.8-2.8-3.4-3.1-1.2-2.4-1.4-5.4-4.5-6.8-.9-2.8,2.3-4.8,3-1.2h0Z"
												style={{ fill: "#3f618c" }}
											/>
											<path
												d="M36.7,347.8c.5,1,7.9,6.5,2.5,5.8-1-.6-3.6-1.8-3.9-.5,.5,1,.4,1.5-.3,1.6-.8,0-2.1-2.2-2.8-.9,.4,5.6-7.9-3.4-7.3-5.8-.8-1.9-3.5-1.9-5.1-.8-9.7-1.8,9.1-7.2,16.9,.6h0Z"
												style={{ fill: "#102b4a" }}
											/>
											<path
												d="M640.8,343.6c2.8,.9-3,3.1,.2,6,.4,1.9,10.7,4.7,10.5,2.4-.5-.7,3.8-2.6,4-3,.8-.6,2.3,0,1.1,.8-.3,.3-.5,.6-.6,.8-4.5,9.6-11.7,15.2-20.3,22.4-1.2,1.5-14.4,9.1-7.5,8.3v1c-11.3,.2-22.7,.1-34-.5,.8-1.3,2-2.1,3.5-2.5,1.7,5.5,15.8-9.2,20.7-9.2,3.7-1.2,4.6-3,6.6-6.1,3.8-6.5,9-13.3,15.8-20.4h0Z"
												style={{ fill: "#133354" }}
											/>
											<path
												d="M91.3,344.7c1.3,.7,6.2-1.3,5.5,.3-1.1,1.6-3.9,2-5.7,1.9-6-3-8-3.7,.2-2.2Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M524.9,350.1l.5,.7c-1.4,1.2,.7,.8,1.4,1.3,3,1.9,5.9,0,8.4,2.9,1.6,3.1-2.3,2.7,3.8,3.8,.9,.2,1.1-1.2,2-1.4,.6-.3,1.6,.4,2.2-.3,.2-.3,.6-.4,.8-.4l10.5,2.1c.4,.1,1.5,1.1,2.1,.6,1.9-.4,1,1.4,.7,2.3,.9,5.7-4.4,9.4-8,12.6,3.4-6.4-5.6-5.3-9.9-5.4-.3,0,0,.3,0,.4,.1,.2-.2,.4-.5,.4-7-.7-14.7-2.2-22.8-3-1.7-1.2-3.3-1-4.9,.4-1.7,1.7-5.5,2.1-6.5-.4-.6-1.5-6.5-3.8-7.5-1.2l-2.2-2c-1.3,.6-2.1,.3-2.5-.8,.8-1.9,2.1-3.1,4.1-3.7,6.3-2.4,11.2-8.2,14.3-14.1,.4-.2,1-.8,1.4-.5l12.6,5.7h0Z"
												style={{ fill: "#287fb2" }}
											/>
											<path
												d="M146.5,345.1c4.6-.8,8.8,.6,12,3.6-.7,1.3,1.8,4.4-.1,4.1-3.7-2.5-6.2-4.2-7.3-5.2-1.6-1.7-4.7,.7-4.6-2.5h0Z"
												style={{ fill: "#4c84a8" }}
											/>
											<path
												d="M510.5,345.4c-1.4,2.7-6.8,11.6-9.6,10.3,3.1-3.2,5.8-8.1,9.6-10.3Z"
												style={{ fill: "#c8e2ee" }}
											/>
											<path
												d="M233.8,345.6c.4,.1,.7,.4,1,.7-.3,.6-.3,1.3,0,2h-.7c.6-1.5-2.7-1.5-.3-2.7h0Z"
												style={{ fill: "#426998" }}
											/>
											<path
												d="M217.6,347c.7,.8-.8,2.7-1.6,1.6-.7-1.1,.7-2.6,1.6-1.6h0Z"
												style={{ fill: "#27486c" }}
											/>
											<path
												d="M234.7,346.3c2.8,.4,1.3,7.3,0,2-.3-.7-.2-1.3,0-2Z"
												style={{ fill: "#7ea0ce" }}
											/>
											<path
												d="M39.2,353.6c.5,2.1,5.6,4.7,1.4,5.9-7.1,1.3-12.6-.5-16.7-5.4-1.9-1.9,1-6.2-3.5-6-.4-.3-.6-.6-.5-.9,6-3.5,5.1,5.7,9.5,7.2,1.2,.8,3.2,2.7,2.9-.6,0-.3,.2-.5,.5-.4,1,0,1.4,1.3,2.3,1.3,1.9-.7-2.2-3.8,4.1-1.1h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M307.9,347.9c.5,1.1,2.6,20.8,4.1,14.3,1-1.9-2.2-17.1,.1-14.3,14,17.4,22.5,31.9,46.8,33.2-.3,.8-37.8,.6-39.6,.8-8.6-3-16.7-7.9-25.4-10.3,.2-3.3,2.2-5.2,3.4-7.7,0-1.5,.5-3,1.3-4.3-3.1,18.6,7.6-17,9.3-11.7h0Z"
												style={{ fill: "#15466e" }}
											/>
											<path
												d="M20.5,348.1c4.5-.5,1.6,4.2,3.5,6,4,5,9.6,6.8,16.7,5.4,.8,1.3,17.4,4.5,12.5,7.4-1.6-1.5-2.5-1.6-2.7-.2-.5,3.1-2.3-3.7-4-1.1-.9,.9-6.9-5.8-5.5-1.8,.3,1,3.8,6.6,1.5,4.4-4.6-5.4-4.3-2.1-8.4-5.6-1.5-1.6-1.3,2.4-2.6,1.9-2.4-1.3-4.5-5-7.8-4.8-1.3,.5-2.5,.2-3.5-.8-1.4-1.4-.8-2.5,1.6-2.1,1.6-.3-.3-3.1-1.2-2-.7,.6-8.9,10.7-7.5,6.3,1.7-2,1.4-2.9-1-2.8-1.2-.2-7.4,6-5.3,1.5,1.1-4.9,.7-9.9,6.8-12.6,2-.6,2.7,1.6,3.7,2.8,2.2,1.7,3.2,1.1,3.2-1.9h0Z"
												style={{ fill: "#0b2645" }}
											/>
											<path
												d="M140.5,347.1c5.7,3.8,3.2,6.9-1.7,3.3,.1-1.8,.6-2.8,1.7-3.3h0Z"
												style={{ fill: "#27486c" }}
											/>
											<path
												d="M312.7,347.3c21.1,24.8,20.3,24.1,50.7,34-27.9-.6-35.4-13.6-51.2-33.5,.1-.2,.3-.4,.5-.5Z"
												style={{ fill: "#6a9ece" }}
											/>
											<path
												d="M202.6,357.9c.1-4.9,5.2-6.7,8.2-9.8,1.3,.4,3.5-1.3,3,.3l-2.3,4.9c.4,.6-8.6,4.3-8.9,4.6h0Z"
												style={{ fill: "#10365c" }}
											/>
											<path
												d="M765.2,348c-1.5,1.4-1.8,1.4-.6-.1,.4-.4,1.4-.6,.6,.1Z"
												style={{ fill: "#486691" }}
											/>
											<path
												d="M86,353.4h-2.9c-1-.4-1.7-1.9-3.1-1.2-2.2,.8-2.9-1.6-1.5-2.8,2.8-1.6,7.3,.5,7.5,4h0Z"
												style={{ fill: "#010408" }}
											/>
											<path
												d="M152.8,351.8c-1.4-1.7-1.9-4.7,1-1,.9,.7-.7,3-1,1.5,.1-.2,0-.4,0-.5h0Z"
												style={{ fill: "#486691" }}
											/>
											<path
												d="M171.9,355.4c-3,4.8,4.2,6.7,1.7,7.5-1.5-.9-3-1.8-4.3-.4-.5-1.4,.1-6.8-1.6-7-.8,3.6-1.7,6.9-5,9.1-4.4,3.5-1.6,4.5-.1,8l-2.4,4.8-28.9-1.6c-1.7-5.8-.7-11,3-15.5,2.9-1.2-1.7,8.4,0,7.8,1.9-.2,2.6-6.9,5.6-5,1.2,.3,2,2.5,3.3,3.5,3.1,1.4,4,.2,2.6-3.7-.7-2.1-3.1,1.1-3.7-.8-.8-9.9-3.4-7.3,5.3-6,2.4-2.6,2.8-2.6,6.4-1.6,2,.4,1.7,2.7,2.5,4.3,1.5,1.7,7.5-.1,3.7-1.9-1.2-.9,.5-2.8-1.4-3.8,1.9,.3-.7-2.9,.1-4.1,1.5,1.1,3.3,1.2,5.4,.2l7.8,6.2h0Z"
												style={{ fill: "#0a213e" }}
											/>
											<path
												d="M311.3,348.9c2.8,17.6-1.2,20.2-2.7,.8,1.4,1.6,2.3,1.3,2.7-.8Z"
												style={{ fill: "#2e608a" }}
											/>
											<path
												d="M232.8,353.1c.5,1.9-2,1.5-2.1-.1,.1-1-1.8-2.3-1.1-3,1.5,0,2.4,1.8,3.2,3.1h0Z"
												style={{ fill: "#04132b" }}
											/>
											<path
												d="M748.6,350.3c-1.1,1.9-2.5,3.3-4.1,4-1.3-2.7,1.1-4.9,4.1-4h0Z"
												style={{ fill: "#486691" }}
											/>
											<path
												d="M744.2,351.9c0,1.7,.2,3.4,.9,4.9-1.4,5,5.1,7.2,3,9.3-.2,.2-.5,.2-.8,0-2.9-2-2.1,.3-2,2.5-2.1,4,3.3,6.2,4.2,8.6-.8,1.4-4.6,2.2-1.8,3.8,.6,1.3,.3,2.4-.8,3.4-.8,3.3-3.5,2.6-5.8,1.6-6.3,2.5-12.6,4.2-18.3,8-3.8,2.5-7.7,3.6-11.7,3-3.8-.5-7-.5-9.5,0-.5-.6-38.2-.3-38.8-.5,2.4-1.7,5.1-2.2,8-1.3,11.5,.3,23.1,.1,34.6-.5,10.2,1.4,16.1-1.8,26.4-7.8,3.9-2.4,10.7-6.6,8.1-11.9-.3-.7-.2-1.5,.4-2,2.7-3.3,1.8-5.9-2.4-2.7-1.8,1.3-1.6-.3-.8-1.2,1.4-2.5,6-3.1,5.7-6.4-.2-.6-.5-3.7-.9-4.2-1.7-2.2,.9-4.4,.2-7.1,1.3-1.5,1.9-1.3,2.1,.5h0Z"
												style={{ fill: "#040e22" }}
											/>
											<path
												d="M231.9,356.2c.6,.4,1,.9,1.3,1.6-11.5,1.7-3.8,4.7,1.2,8.3-5.5,.7,2.9,4,3.5,6.3-2.7,0,2.4,2.7-.4,2.7l-2.9-3.4c-.2-.2-.6-.2-.8,0-2.3,3-3,3.2-2,.5,.5-.7-4.6-3.1-4.9-3.5-1.2-1.9-4-2.2-4.6-4.8,1.6-1.9,5.4,3.7,5.3,.3,.3-2.1-2.2-2.2-3.7-3.3-1.4-3.4-4.6-4.2-7.8-5.5-4.3-7.6,7.9-3.9,10.7-1.4,3-.3,2.7,2.1,5.1,2.2h0Z"
												style={{ fill: "#35577e" }}
											/>
											<path
												d="M657,350.8c3-1.2-7.3,14.1-8.8,14.9-1.1,1.7-26.2,21.7-20.9,13.6,11.8-8.3,21.4-17.3,29.7-28.5Z"
												style={{ fill: "#4379a4" }}
											/>
											<path
												d="M13.7,352.3c1.8-.9,5.6,4.4,2,3.4-2.4-.4-9.6-5.6-2.9-3.3,.2-.1,.5-.1,.9-.1Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M742.3,351.4c1.3,11.3-43.5,22.6-48.4,32.6-1.9,3.3-3.2-3.1-4-4.1-.9-2.2-10.5,7.5-13.9,8.2-2-.7,2.3-5.5-5.5-3.8,.5-.5,.6-1,.5-1.7,17.7,2,16.2-10.5,19.6-3.5,.4,.9,1.5,1.2,2.3,.6,17-10.6,32.8-18.1,49.4-28.3Z"
												style={{ fill: "#396390" }}
											/>
											<path
												d="M86,353.4c2.2,2.7,.5-2.1,2.8-1.3l5.7,3c.7,1.1,5.6,4.8,1.5,4.7-3.6,1.1-6.4-5.6-6.8-1.7-1.1,2.7-5.4-.5-7.5-.1-2.8-.2-2.3-2.1-2.6-4.3-.5-1.8,2.3-2.1,3.1-.8,.2,.3,.5,.5,.8,.5h3Z"
												style={{ fill: "#0b2645" }}
											/>
											<path
												d="M426.2,351.9c.9-.3,1.5-.1,1.9,.5,1.4,.8,3.2-.7,4.9,.5,14.5,6.1,26.6,2.7,41.2,5.7,.1,0,.6,0,1.5-.1,.8-.2,1.4,1,2.2,.7,1-.7,1.5-.2,1.6,1.3-3.5-.2-8.4,17.1-2.5,11.8,1.8,12.2-7.7,5.1-11.2,9-.3,0-.5,.1-.5,.3l-2.2-.7c2.3-1.2-2.6-1.4-3.3-2.4,4-4.3,10.4-8.4,13.8-14.2,1.2-1.6,0-1.3-.8-.5-16.5,19.2-17.2,6.7-35.8,11.7,0-2.2,.7-3.1,2.2-2.8,.3,.1,.4,0,.1-.2-5.7-6-9.7-13.2-13.1-20.6Z"
												style={{ fill: "#369ed3" }}
											/>
											<path
												d="M134.3,360.3c-5.7,6.4-3.6,14.4-1.4,21.8,.1,.3-.1,.5-.3,.6l-6.1,1c0-4.9,.8-10.4,.7-15.7,.4-1.1,.4-11.1-3.1-6.6-1.8,1.8-4.5,8.2-7.1,6.7-1.7-1.5,1-6.9-.1-6.8-2.1,.7-4.2,.8-6.3,.3-1.2-1,.8-2.7,2-2.9,1.9-.4,3-1.6,3.2-3.6,1.4-2.7,6.7,0,5.9,2-.1,1,.8,1.7,1.7,1.5,2.2,.4,4.8-5.3,1.8-3.3-1.3,1.3-2.1,.9-2.4-1.2,.5-3.7,6.2-1.4,5.8,1.9,1.1,2.3,5.8,1.3,5.7,4.3h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M358.7,355.1l10,6.8,8.9,8.3-10.3-6.3c-.8-.5-.2,2.3-1,2.1-4.5-4-8.5-8.4-12-13.2,1.9-.4,3.3,2.1,4.4,2.3h0Z"
												style={{ fill: "#518dc3" }}
											/>
											<path
												d="M826.3,362.3c-2.5,1.7-4.7,8.4-7.3,6.3,2.4-5.4,8.5-8.6,11-15.2,1.3-1.4,2.3,.9,2.9,1.7,.8,.5,1.2,1.2,.9,2.2-.5,2.2-.6,3.4-1.7,5.2-.4,1-7.2,4.9-5.7,0,.2-.4,.1-.4-.1-.2h0Z"
												style={{ fill: "#0b2645" }}
											/>
											<path
												d="M426.8,353.1c.9,.7,1.4,1.6,1.4,2.8l-1.7-2.2c.2-.1,.3-.3,.3-.6h0Z"
												style={{ fill: "#54b0e2" }}
											/>
											<path
												d="M235,354.6c-.8-.2-.4-1.3,.3-1,2.5,.8,6.5,4.1,5.5,6.5-1.4-1.7-2.6-3.8-5-5.1-.1-.2-.4-.3-.8-.4h0Z"
												style={{ fill: "#8b9dc3" }}
											/>
											<path
												d="M426.5,353.6c4.3,6.2,7.5,13.1,12.8,18.5,.2,.2,.1,.3-.1,.2-1.5-.3-2.2,.6-2.2,2.8-1.1-.8-1.9-1-2.5-.6-.6-.2-2.2-2-2.8-1.1-2,2-3,5.7-4.4,8.2-6.2-.5-14.3-6.4-16.8-7.5-4.2-1.5-7.8-8.7-13-9.1l-3.8-4.3c7.1-6.3,16.6-2.5,25.5-3.2,3.3,.5,4.2-4.2,7.3-3.9h0Z"
												style={{ fill: "#2389c0" }}
											/>
											<path
												d="M169.3,362.4c-.8,5.4,7.5,8.7,5.2,9.1-2.9-1.1-3.4-.4-1.4,2.4,.9,.9,3,3.5,.2,4.4-4.5-4.3,.4,2.5,1.4,3.5-1.7,4.3-6.4,3.8-9.9,3.5-2.1,.4-6.9,2.6-4.1-1.6,1.6-2.5,5.8-8.1-1-3.2-3.9,2.2,4.5-8,2.8-8.7-6.7-5.8,6-8.7,5-15.4,1.3-3.6,1.7,5.2,1.8,6h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M169,379.8c-1.1,.7-.1,1.3,.2,1.7,.2,.6,.6,1.2,1.1,1.6"
												style={{
													fill: "none",
													stroke: "#2c5980",
													strokeWidth: "2px",
												}}
											/>
											<path
												d="M741.9,355.1c-1.1,1.8,0,2.7,.5,4.3,2.4,7.5-2.9,5.3-5.6,10.5-.4,2.3,3.1-1,4.4-1.2,1.8,.4,.1,3.7-.7,4.3-.6,.5-.8,1.3-.4,2,3.5,6.8-9.4,12.4-12.8,14.4-6.5,4.9-15.6,6.3-21.7,5.3-11.5,.6-23.1,.7-34.6,.5,3.2-1.3,5-3.6,5.2-7,11.8-5.2,12.5-13.7,15.7-4.2,.6,1.4,1.3,1.4,2.2,.1,2.1-3.8,6.9-6.6,10.2-7.7,12.2-6.4,26-11.8,37.6-21.3h0Z"
												style={{ fill: "#0c2242" }}
											/>
											<path
												d="M500.9,355.6c0,.4,.2,.6,.8,.5-6.8,5.4-7.3,1.6-12.1,11.1-.2,.3-.5,.4-.7,.2-.9-6.9,7.5-8.7,12-11.8h0Z"
												style={{ fill: "#baa5dd" }}
											/>
											<path
												d="M745.1,356.7c2.2,1.7,3.2,4,2.7,7-2.1-1.8-3-4.2-2.7-7Z"
												style={{ fill: "#173f5f" }}
											/>
											<path
												d="M209.7,359.8c0-2.9,1.7-3.4,3.6-1.4l4.3,2.6c.4,.2,.4,.8,0,1-4.9,3.4-5.9,7.1-10.3,12.6-1.3,2.3-2.6,.4-1.5-.8,3.6-2.7,3.5-6.5,7.2-10.4,1.8-5.1-2.3-1.7-3.4,.8-1.2,3-2.8-.2-1.2-1.2,2-1.1,2.4-2.2,1.3-3.2h0Z"
												style={{ fill: "#0f3354" }}
											/>
											<path
												d="M233.2,357.8l2.2,.5c-.4,2.4-6.6,3-4.1,4.1,.9,.5,1.2,1.3,.9,2.2-6-4-7.8-5.4,1-6.8Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M798.2,366.6c1,2.7-8-3.4-9.9-3.2-.3-.1-.6,.1-.6,.5,0,3.8-1.6,5.7-4.9,5.6,.8-3.1-.5-5.8-.8-8.7,.3-.9,0-1.6-.7-2.1,1.2-.4,2.2-.1,3.2,.9,4.1,3.3,8.9,3.7,13.7,7h0Z"
												style={{ fill: "#27486c" }}
											/>
											<path
												d="M16.8,361.3c.1-1.1,2.1-3.2,2.8-2l-1.3,5.1c-.7,2-1.9-3.1-1.5-3.1h0Z"
												style={{ fill: "#0b2645" }}
											/>
											<path
												d="M781.2,358.8c.7,.5,1,1.2,.7,2.1,.3,2.9,1.6,5.6,.8,8.7-.9,.6-1.4,.6-1.4,.1-.2-1.6-2.2-4.2-.5-4.8,.7-.4,.7-.6-.1-.8l-1.8-.2c-1-.4-1-2.3-2.2-.3-2.5,4.7-7.5,8.5-8.9,13.3l-5.1-.8c7.8-4.3,9.9-14.8,18.5-17.3Z"
												style={{ fill: "#6273a8" }}
											/>
											<path
												d="M480.8,361.1c.3,2.4-6.3,18.6-6.4,9.5,1.2-4.7,.8-8.1,5.1-10.3,1.2-1.1,1.7-.8,1.3,.8h0Z"
												style={{ fill: "#5d9fcf" }}
											/>
											<path
												d="M392.1,359.7c.2,5.1,0,10.5-.5,16.2,0,.6,.2,.8,.7,.5,3.9-1.8,.6-5.7,3.2-8.1,1.5-.7,3.1-1,2-3.3,5.4-.1,6.6,8.7,10.8,10.1,2.9,2,7.4,4,13.4,6.3l-18.2-.2c-3.5-1.2-7.1-1.7-10.8-1.5-12,.7-15.2,.2-25.7,.2-.4-.1-2.3,.6-1.6-.8-.2-2.6-.6-5.2,1-7.5,.4-.6-.1-4.8-.1-5.5,.8,.1,.2-2.6,1-2.1l10.3,6.3,14.5-10.6Z"
												style={{ fill: "#155c91" }}
											/>
											<path
												d="M392.1,359.7c1.6,.1,4.4,4.3,5.4,5.2,.7,1.6,.3,2.6-1.2,2.9-1.8,.7-2.2,2.9-1.9,4.7,.9,1-2.5,5.5-2.8,3.3,.5-5.6,.7-11,.5-16.1h0Z"
												style={{ fill: "#3381ad" }}
											/>
											<path
												d="M283,366.6c11,5.2,23.5,8.9,34.3,14.7-5.9,1-11.6-2.9-17.1-4.4-10-.5-17.6-7.6-23.1-15.8-1.3-3,4.9,5.1,5.9,5.5h0Z"
												style={{ fill: "#30699a" }}
											/>
											<path
												d="M480.8,361.1c3.3,.6,6.2,2.1,8.5,4.5-.6,1-.4,2.4,.5,1.5l2.5-4.1c.4,1.1,1.2,1.4,2.5,.8-.9,2.2,.5,2.8,.4,4.7,.1,3.1,.6,4.6,1.5,4.4,3.9,9.2-.2,7.6-5.9,7.5-3.2-.4-5.8-.1-7.8,.7h-17.3c3.7-3.8,12.9,3.1,11.2-9,1.8-3.5,3.1-7.1,3.9-11h0Z"
												style={{ fill: "#2a8fc5" }}
											/>
											<path
												d="M463,380.6c-1.6-.5-3.2-.6-4.7-.4-6.5-4.1-16.5-.1-23.8-5.7,.6-.4,1.4-.1,2.5,.6,18.7-5,19.2,7.5,35.8-11.7,.7-.7,2.1-1.1,.8,.5-3.3,5.8-9.7,9.8-13.8,14.2,.7,.9,5.4,1.2,3.2,2.5h0Z"
												style={{ fill: "#bcb7e2" }}
											/>
											<path
												d="M494.7,363.9c3.1,2.2,4.9,6,1.9,9.1-.9,.2-1.5-1.3-1.5-4.4,0-1.8-1.2-2.5-.4-4.7h0Z"
												style={{ fill: "#6a9ece" }}
											/>
											<path
												d="M222.4,364.1c.5,2.4,3.5,3,4.6,4.8,.9,1.3-.6,9.3-2.9,5.7-2.1-4.7-4.6-5.2-1.7-10.5h0Z"
												style={{ fill: "#133354" }}
											/>
											<path
												d="M549.2,374.6l-8.7,6.7h-57.5c5.7-3.4,19.9,5,13.7-8.2,2-2.3,2.1-4.6,.3-7.1,.7-1.9,3.5-1,4.2-.7,1.7,.2,2.8,.8,3.3,1.9,1,2.4,4.8,2.1,6.5,.4,1.9-2,3.7-1,5.7-.1,8.1,.1,15,2.3,21.9,2.7,.3,0,.5-.2,.5-.4-.1-.1-.2-.4,0-.4,4.2,.2,13.3-1.1,10.1,5.2h0Z"
												style={{ fill: "#2987bc" }}
											/>
											<path
												d="M559.1,365.1c.2-.1,.4,0,.6,.2-4.8,6.6-9.8,16.6-19.3,15.9,5.7-4.2,13.9-10.9,18.7-16.1h0Z"
												style={{ fill: "#baa5dd" }}
											/>
											<path
												d="M770.2,365.2c-2.5,3.9-6,5.9-10.8,5.9,3.8-1.6,7.4-3.5,10.8-5.9Z"
												style={{ fill: "#7379af" }}
											/>
											<path
												d="M771.3,376.3c.2-1.7,1.2-3.3,2.3-4.6,.3-2.1-3.9,1.9-4,2.7-1.1,4.9,2.7,1.5-4,6.4-.1-.2-.3-.4-.5-.5,4.7-3.5,4.6-9.7,10-13.3,.2,1.7,.7,1.8,1.5,.4,1.9-4,4,1.2,2.3,3-1.2,1.3-3.7,3.3-7.6,5.9h0Z"
												style={{ fill: "#3b5983" }}
											/>
											<path
												d="M234.5,366.1c1.6,.4,11.6,8.8,9,8.8l-5.6-2.5c-.6-2.2-9.2-5.7-3.4-6.3Z"
												style={{ fill: "#8b9dc3" }}
											/>
											<path
												d="M423.7,381.1c-9.2-.6-19.2-7.2-22.3-14.7,8,8.1,10.8,8.5,22.3,14.7Z"
												style={{ fill: "#c5c2ed" }}
											/>
											<path
												d="M873.8,388.6c-3.6,.4-3.4,3-.2,3.7,0-1.3,.1-2.5,.2-3.7Z"
												style={{ fill: "#13304f" }}
											/>
											<path
												d="M798.4,374.8c-2.5-2.2-5.8-4.8-5.2-7,3.5,.3,3.2,4.3,5.8,6,1.2,.8,.1,1.6-.6,1Z"
												style={{ fill: "#14395b" }}
											/>
											<path
												d="M505.6,371c-2.2-3.2,4.6-2.2,5.7-1.6,4,2.1-4.8,2.7-5.7,1.6h0Z"
												style={{ fill: "#5d9fcf" }}
											/>
											<path
												d="M219.8,384.6c-1.9-2.2-4.2-3.5-7.1-3.8-.3-.4-.7-.5-1.2-.5,0-.3-.1-.5-.3-.7,1.4-1.6-.1-2.8,.1-4.1,2.1-2.7,3.5-7.5,3.8-4.4-.3,2.4,2.2-.6,3,.8,1.7,2.1,1.2,5.3,2,8,.9,1.7,.8,3.3-.3,4.7h0Z"
												style={{ fill: "#0a213e" }}
											/>
											<path
												d="M6.2,378.6c-2,.4-2.6,.5-3.6,.4v2.8c2.4-.7,4.5-2.1,6.9-2.7-1.1-.6-2.2-.7-3.3-.5h0Z"
												style={{ fill: "#102b4a" }}
											/>
											<path
												d="M790.6,370.5c.8-.6,4.2,5.6,3.2,6-.8,.6-4.1-5.6-3.2-6Z"
												style={{ fill: "#13304f" }}
											/>
											<path
												d="M771.3,376.3c.4,3.5,5.9,1.6,8.2,0,2.7,.8,1,3.6-.3,5-2.8,.2-4.5,6.6-6.5,7.9-2.4,1,.9-2.4,1.4-3.1,.7-1.3,.7-3,1.7-4.3,.5-.6,.4-.8-.3-.4-1.8,1.5-3.6,3.3-5.5,4.7-1.4,1-2,.7-1.8-1,.1-1.8,1.7-3,3.2-4.3,2-3.8-4.4,3.9-5.8,2.4-2.6-1.7,2.9-4.4,3.9-5.4,.3-.2,.4-.6,.2-.9-2.3-2,4.4-7.8,3.9-5.3-1.2,1.4-2.1,3-2.3,4.7h0Z"
												style={{ fill: "#7379af" }}
											/>
											<path
												d="M763.7,373.3c-.3-.6,.3-1.4,1.4-1.6,3-1.2-.6,3.2-1.4,1.6Z"
												style={{ fill: "#3e5e88" }}
											/>
											<path
												d="M793.2,380.2c-2.8-.9-7.7-5.3-5.1-7.3l3.6,4c1,1,2.1,1.7,1.5,3.3h0Z"
												style={{ fill: "#173f5f" }}
											/>
											<path
												d="M434.5,374.6c7.5,5.6,17.2,1.7,23.8,5.7-8.8,1.4-17.6,.7-26.3,0-2.9,1.2-1-2.6-3-2.5,.8-1.6,1.5-4.3,3.4-4.6,0,0,2.1,1.4,2.1,1.4h0Z"
												style={{ fill: "#112340" }}
											/>
											<path
												d="M787.3,376.3c-.3,1.3,.5,5.1-1.1,5.2-1.3-2.6-.9-5.5-1.9,.4-1.6,3.6-.5-2.7-1-3.6,0-.9-.8-.7-.8,.1,.5,1.8-1.8,7.5-2.3,4.7,.4-1.3,.9-2.7,.4-4,.6-1.5,.2-2.5-1.2-3,1.7-.9,6.2-4.7,7.4-2.1,.4,.7-.5,1.8,.5,2.3h0Z"
												style={{ fill: "#27486c" }}
											/>
											<path
												d="M762.9,376.1l5.1,.8c-1.1,3.6-6,4-7.6,7.4-1.8,1.6,1.2-4.2,.7-3.7,4.4-2.8-5,.7-6.7,1.6-.3-2.4,1-3.9,3.9-4.4,1.5-.2,1.8-.8,.8-1.6-3.4-.2-5.6,4.1-7.6,6.4-.9-1.6-7.3-1.9-3.8-4.1,4.4-4.1,9.3-6,15.2-2.4h0Z"
												style={{ fill: "#a6a8ce" }}
											/>
											<path
												d="M124.5,376.1c1.6,2.1-13.3,.7-15.4,2.4-2.1,.6-2.4,0-1-1.7,5.2-3.6,10.6-.6,16.4-.7h0Z"
												style={{ fill: "#225d86" }}
											/>
											<path
												d="M106.2,389.1c-7.5-1.6-1.6,7.9-10.1-1,3.6-.9,4.9-3.2,3.8-6.7,0-1.1-.8-1.4-2.5-.6-2,.9-3.6-.5-5.5,1.5-3.9,2.2,3-4.6,3.7-5.1,1.8,.2,5.5-5.4,3.7,.1-1,3.5,.6,2,2.2,2.5,1.7,2.5-.2,8.5,4.7,9.3Z"
												style={{ fill: "#0d2a49" }}
											/>
											<path
												d="M105.9,376c.5,.3,.6,.9,.2,1.3-2.8,3.9-4.5-4.4-.2-1.3Z"
												style={{ fill: "#13304f" }}
											/>
											<path
												d="M202.2,376.9c-.4,.5-.7,1-.8,1.7-12.2,3-18.2-7.6,.8-1.7h0Z"
												style={{ fill: "#5391ba" }}
											/>
											<path
												d="M95.7,377.3c-.7,.5-7.6,7.4-3.7,5.1,1.9-1.9,3.4-.7,5.5-1.5,1.7-.7,2.5-.5,2.5,.6-2.7,.9-7.8,5.5-3.8,6.7,.3,.2,1.3,1.1,2.8,2.7,2.3,2.6,2.5,.5,3.5-1.2,2.2-1.7,5.6,.5,8-1.3,3.1-1.8-2.8-3.8-3.3-6.4-.9-2,7.2-2,9.2-4.3,1.3-.7,9.9,.5,8.1-1.4h2.2c.3,2.1,.1,4.5-.7,7.1-.1,.3,.2,.6,.4,.5l6.1-1c.9-.1-.6-3.7-.5-4.1l28.5,5.2c-2.7,4.3,2.1,1.9,4.1,1.6,3.5,.3,8.2,1,9.9-3.5,2.8,4.2-2.1,5.6-6.2,6.7-6.4,3.7-12.8,5.3-19.1,4.8-16-1.6-27.1,2.8-41.9,3.6-1.9,.6-2.8-1.2-4.3-1.6-2.4,.2-4-2.4-6.5-2.6-3.7-.4-9.2,2.4-12.4,2.5-1.5,.2-2.3,1.2-2.3,2.8l-.3-21.7c0-.3,.2-.5,.5-.5,3.4,.4,12.2-2.2,13.7,1.2h0Z"
												style={{ fill: "#103f66" }}
											/>
											<path
												d="M160.2,377.5c-.7,1.2-2.3,2.4-1.4,3.3,1.3-.2,2.4-2.2,3.9-2.1,.7-.1,.9,.2,.5,.8l-2.6,4.2-28.5-5.2c-.5-.9-.7-1.8-.8-2.8l28.9,1.8h0Z"
												style={{ fill: "#186491" }}
											/>
											<path
												d="M754.3,382.2c-.4,.3-.9-.1-1.3-1.4,1.3-2,3.6-4.9,6.1-4.6,2.6,2.4-6.1,1-4.8,6h0Z"
												style={{ fill: "#7379af" }}
											/>
											<path
												d="M78.3,392c-.3-.1-29.8,5.8-29,4.3-17.7-13.4-24-6.8-38.5-16.2-.7-.5-3-.3-3.8-.4l2.5-.8c3.7,3.3,7.5-.3,11.3-1.1,9.9-1.5,23.4-.2,32.8-.8,8.2-.3,16.5-.6,24.7-1,1.6,4.8,.3,11.3,0,16Z"
												style={{ fill: "#113a5e" }}
											/>
											<path
												d="M788,376.1c1.2,1.8,2.9,3.2,5.3,4.1-.8,7.3-.8,14.6,0,21.9-1,1.5-3.5,1.6-4-.1l-.5-3.2c-1.1-1.7-2.3,2.9-3.4,2.4-.9,0,2.8-10.4,2.7-10.8,.7-4-5.4-2.8-7.9-1.4-1.3,.9-1.3-.5-2-1-.9-.4-1.1-1.7-.7-2.5,1.3-1,1.9-2.4,1.8-4l1.5-2c.8,1-1.7,6.7,.8,4,.8,0,1.1-7.5,1.9-4.8,.3,1.4,.3,2.7,0,4-.1,1.3,1,.3,1-.4,.5-4.2,1-4.6,1.4-1.2,0,.9,1.2,1.3,1.3,.1,.5-1.6-.3-4,.8-5.1h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M173.2,378.4c2.7,3.4,7.8,2.5,11.1,1.4-.2,2-.9,3.7-2.2,5.2,0,1,.4,1.7,1.2,2.2-4,4.2,.9,6.5,5.1,11.2,1.4,.5,3.3-.2,4.2,1.3,1.8,1.1,4,1.1,5.7,2.6-7.4,.2-17.1-.1-22.1-.4-2.7-1-11-4.6-10.5-8.5l5.1-1.7c1.6-.8-.6-2.7-1.6-2.1-1,.3-1.2-.1-1.1-1.1,4.1-1,8.9-2.5,6.2-6.7-1.2-1.1-5.8-7.7-1.1-3.4h0Z"
												style={{ fill: "#1d7aae" }}
											/>
											<path
												d="M202.2,376.9c1.6-.2,2.8-.1,3.4,.3,1.7,1.5,4.8,1.5,5.9,3.2-3.7,1.6-7.1,1-10-1.8,.1-.7,.3-1.2,.7-1.7h0Z"
												style={{ fill: "#8ad1e4" }}
											/>
											<path
												d="M429,377.9c1.9-.2,.2,3.5,3,2.5,8.8,.6,17.6,1.4,26.3,0,2.2-.4,4.8,.3,6.9,1.1-.1,1.1-.8,1.6-2,1.6-11.9-.7-24.3,.6-36-1.3l1.8-3.9h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M761,380.6c-.1-.2-.3-.4-.5-.5,2.1-1.1,2.3-.9,.5,.5Z"
												style={{ fill: "#486691" }}
											/>
											<path
												d="M592.5,381.6c-.9-.2-36.7,0-39,0,.5-3.5,16.3-1.2,21-1.5-1.2,1,25.5-2.5,18,1.5h0Z"
												style={{ fill: "#112340" }}
											/>
											<path
												d="M140.2,407.1c-18.7-.2-19.3-4,2.3-2.5-4.2-.8-9-.6-12.6-3.9-.8-.8-.8-2.4-2-3-.6-.4-.5-1.5-1.6-1.4s-1.2-1.2-.3-1.6c-5.6,.3-17.9,4.2-22.2,1-3.9-.5-6.6-4.4-11.1-2.5-4.1,2.2-10.2,.2-10.9,4.9,1,1.5,2.8,1.6,3.9,2.4-2.2,1.4-6.3,0-8.9-.5-.1-.5,.3-1.8-.6-1.7-6.9,1-14.2,3.2-21,2.2-1-.2-1-.4,0-.6,6.9-1.9,13.7-3.5,20.3-4.9,1.9-.4,2.9-1,2.8-3-.3-.1-29.8,5.8-29,4.3-17.7-13.4-24-6.8-38.5-16.2-.7-.5-3-.3-3.8-.4-1.3,.7-2.8,1.4-4.4,1.9v5c2.7,0,4.6-5.1,6.7-3.8,6.6,3.3,13.3,6.6,21.3,6.6,7,4.3,23.6,10.9,25,16.6,3.9,9.4,16.2,8,23.8,10.3,5.9,.8,15.4,9.9,19,8.1-.6-1.7-7.9-4.2-5.9-5.5,8.3-6,6.7-1.7,14.6-2.8,2.7-1,30.2-5.5,25,.3,3.2,0,1.3,.3,2-1.7-14.2-7.7,7-1.7,12.9-5.6,.6-1.4,1.8-1.8,3.8-1.4-2.7-.6-6.2-.8-10.6-.6h0Z"
												style={{ fill: "#135781" }}
											/>
											<path
												d="M106.8,387c-1.5-.6-4.4-8.9-1-6.7,.9,2,1.1,4.3,2.6,6.1,.5,1-.8,1.7-1.6,.6h0Z"
												style={{ fill: "#13304f" }}
											/>
											<path
												d="M169,379.8c-1.1,.7-.1,1.3,.2,1.7,.2,.6,.6,1.2,1.1,1.6-2.9-.3-3.3-1.4-1.3-3.3h0Z"
												style={{ fill: "#14395b" }}
											/>
											<path
												d="M777,382.9c2.1,.2-1.8,2.2,.4,2.5-.2,.3-.2,.6-.2,1-1.2,.3-3,5.5-1.9,4.6l2-4.1c0,.9,1.2,.9,1.3,1.6,.2,1.5,2.2,0,2.7-.2,11.6-3.6,4.6,6.7,3.8,12,.2,3.4,2.7-3.7,3.6-1.6l.5,3.2c.5,1.7,3,1.5,4,.1,1.3,1.9-2.6,1-3.1,1.8-18.7-2.4-36.5,4.8-54,9.7-16,4.7-33.3,6.8-50,5.6h-6.4c-2.6,.2,2.6-3.5,2.7-4,2.6,2,26.5,4.1,17.9-.3-1.3-1.1-2.5-2.3-4.2-2.5-1.2-.1-1.3-.7-.4-1.6,8-1.3-2.2-10.6,6.9-10.6,1.2,.9,.4,4.4,1.6,4.7l13.2-3.8c7.9,3.7,13.3-5.3,18.7-7.5,2.1,.2,0,4.3,3.2,2.2,.8-.4,2.3-2.6,1.2-3.4l-2.6-.6,3.2-5.9,3,1c-.4,.5-.3,.9,.2,1.2,.8,1.1-.9,7,.3,5.7,1.5-.4,2.5-6.7,3.6-4.3-.2,1.6,4.3,2.1,2.9,.6-.6-.4-1.4-4.2-1.7-4.8,1.9-.9,1.8-3.4,3.5-4.5,.5,1.3,.9,1.7,1.3,1.4,2.2-1.2,4.3-1.9,6.2-2.1,.2,.1,.4,.3,.5,.5-.2,.7-.6,1.9-1.3,3.5-.2,.4-.1,.5,.1,.5,1.7-1.4,2.9-3.5,5.1-4.3,.2,.1,.4,.3,.5,.5-1.2,1.1-.6,2.9,.9,2.6,1.2,.2,6.9-6,4.9-2.5-1.5,1.2-3.1,2.5-3.2,4.3-.9,5.8,8.6-6.2,7.6-3.3-1.4,2.1-1.3,4.7-3.4,6.4-.9,1.1-.8,1.5,.3,1,.5-.1,4.2-5.8,4.6-6.3h0Z"
												style={{ fill: "#04132b" }}
											/>
											<path
												d="M169,379.8c1.5,1,4.3,3.1,1.1,3.3-1-.7-.7-1.5-1.7-2.3,0-.2,.1-.6,.6-1h0Z"
												style={{ fill: "#4379a4" }}
											/>
											<path
												d="M219.8,384.6c.7,2.8-.1,4.1-2.1,1.3-1.7-1.7-3.9-2.6-5-5,2.9,.2,5.2,1.5,7.1,3.7h0Z"
												style={{ fill: "#c2d5e3" }}
											/>
											<path
												d="M682,381.5c-3,2.5-7.2,.4-10.8,1.1-10.7,0-21.6,.4-32.4-.9,14.4-1.3,28.8-1.3,43.2-.2Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M747.7,380.9c1.4,.2,2.7,.8,3.8,1.8-.2,1.2-.9,2.1-2,2.7-.6-1-1.4-1.4-2.5-1,1.1-1.1,1.3-2.2,.7-3.5h0Z"
												style={{ fill: "#173f5f" }}
											/>
											<path
												d="M423.7,381.1c12.9,2.5,26.4,1.1,39.5,1.8,1.7,.3,1.5-1.4,2.5-1.9,35,.3,88.5,.3,123.3,.3,1,1.3,7.1-.7,6.3,2.1,.2,.9-4.7,1-5,1.2-64.3,.5-137.3,0-201.6,.1-1.1-.4-19.2,1-19.1-1.4,.6-1.3,2.3,.3,2.8-2.1,12.6-.2,38.9-.3,51.3-.1h0Z"
												style={{ fill: "#ecfafc" }}
											/>
											<path
												d="M317.2,381.3l2.2,.5c-2.5,2.9,2.7,2.8,4.5,3-.3-.9-54.4,2.1-46.7-2.6,1.7-.2,40-.5,40-.9h0Z"
												style={{ fill: "#6a9ece" }}
											/>
											<path
												d="M355,381.4c-2.6-.6-3.8,1.4-2.2,2.5l3.2,.9-20.8,.1c-1.8-.6-19.8,1.7-15.7-3.1l35.5-.4Z"
												style={{ fill: "#afdbf3" }}
											/>
											<path
												d="M355,381.4c1.3,.1,2.6,0,4.1-.4,2.8,.9,10.3,.1,13.4,.4-.3,2.3-2.1,.8-2.8,2.1-.4,1,2.5,1,2.9,1.3-4.1,.1-12.5,.1-16.6,0l-3.2-.9c-1.7-1.3-.5-3.1,2.2-2.5h0Z"
												style={{ fill: "#d0f3f8" }}
											/>
											<path
												d="M779.2,381.3c.1,1.6-.5,3-1.8,4-2.3-.2,1.8-2.3-.4-2.5,.5-.8,1.2-1.3,2.2-1.5Z"
												style={{ fill: "#27486c" }}
											/>
											<path
												d="M100,381.5c1.1,3.5-.2,5.7-3.8,6.7-4-1.2,1.1-5.8,3.8-6.7Z"
												style={{ fill: "#04132b" }}
											/>
											<path
												d="M589,381.5c24.9,.8,49.8,.8,74.6,1.2,2.3,.4,2.4,.9,.2,1.7l-69.2,.6-4.2-.1c.6-.3,4.9-.2,5-1.2,.8-2.8-5.5-1-6.4-2.2h0Z"
												style={{ fill: "#d8e3eb" }}
											/>
											<path
												d="M277.2,382.1c-3.1,1.2,1.4,2.5,2.7,2.4-12.6-.8-27.4,.7-38.9-1.1,.2-.2,.5-.4,.9-.4l35.3-.9h0Z"
												style={{ fill: "#4c84a8" }}
											/>
											<path
												d="M34.8,403.3c-7-8.8-26.6-7.8-25.6-20.4h0c-1.9-1.4-3.9,3.8-6.7,3.8v36.9c2.3-6.4,11.7-4.9,16.9-8,3.2-1.5,5.8,.6,8.6,1.8,5.5-2.1,10.7-6.3,16.7-8-4.1-2-7.4-4-9.9-6.1Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M663.5,382.6h7.8c.1,.6,0,1.2-.5,1.7h-7c2.1-.7,2-1.3-.3-1.7Z"
												style={{ fill: "#8b9dc3" }}
											/>
											<path
												d="M9.2,382.9c6.6,3.3,13.3,6.6,21.3,6.6,.3,5.2-4.6,5.9-3.4,8.4-6.5-3.5-19.5-5.3-17.9-15Z"
												style={{ fill: "#10365c" }}
											/>
											<path
												d="M749.5,385.3c.3,.7,1.1,4.4,1.7,4.8,1.5,1.6-3.1,1-2.9-.6-.2-.8-.5-.8-1.1-.2-.5-.5-4.3-1.1-2.9-2.4,1.5-.2,2.4-1,2.8-2.6,1-.3,1.8,0,2.4,1h0Z"
												style={{ fill: "#486a9a" }}
											/>
											<path
												d="M663.7,384.3h7c3.5-.8,5.2,0,5.1,2.3-40.2-1-52.7,.9-81.1-.2-.8,0-.9-1-.3-1.5l69.3-.6Z"
												style={{ fill: "#091b35" }}
											/>
											<path
												d="M223.5,384.8c8.4,.4,12.2,8.4,19.7,10.9,17.7,7.7,33.3,9.1,56.9,21.1-2.2,8.1-2.6,6.4-10.2,6.3-2.8-.9,2.1-1,2.6-1.3,1.3,0,5.3,.1,4.9-3-12.3-6.7-28-9.5-40.4-14.7-7-2.2-24.9-7.2-30.7-14.4-.5-.9-2.7-.1-3.5-.3,.3-1.4-1.4-4.3,.7-4.6h0Z"
												style={{ fill: "#8feaf7" }}
											/>
											<path
												d="M335.2,384.9c6.1,0,23.8-.2,29.6,0,1.9,1.2,21.2,.9,11.3,2.4-4.9,.9-29.7-2.6-30.1,1.1,.1,4,1.9,9.1,0,13.3-.1,.4-1.8,2.5-1.2,3.5,.1,.3-.1,.6-.4,.6-.6,.1-.5-.9-1-.9-6.3,1.9,17.6,5.7,19.1,7.3-5.8-.6-11.5-1.9-17.1-3.9-8.9,.5-17.7,.5-26.5,.2,13.9-.8-8.6-2.4-11-3.5-.9-.2-.9-.5-.1-.9,1.2-.5,1.5-1.1,.9-1.7,.2-3.5,1.9-7,.1-11.1-.9-2.2,1-2.2,1.8-3.5-.3-.8-1.1-1.2-2.2-1.2s-1.2,0-.3,0c14-.5,22.5-.6,25.5-.2,1.4,.2,2-.3,1.6-1.5h0Z"
												style={{ fill: "#104470" }}
											/>
											<path
												d="M364.7,384.9c7.3-.1,20.9-.2,28.2,.3,2.4-.1,2.7-.1,1-.1-2.8,.1-7.7,.3-9.2,1.9,1.5,.4,1.1,.7-1.5,1-5.1,4.7-1.9,13.7-5.5,19.2-.7,2-2.5,4.1-2.4,6l1.5,1.6c1.2,.5,2.8-.2,2.8,1.8-12.7-2.4-24.9-7.1-37.3-10.2-1.2-1,.8-2.2,1.3-1,.1,.3,.2,.4,.5,.4,.2,0,.4-.3,.4-.6-.4-1.2,.9-3,1.2-3.5,1.9-4.2,.1-9.3,0-13.3,1-3.8,25-.2,30.1-1.1,10.2-1.5-9.1-1.2-11.1-2.4h0Z"
												style={{ fill: "#115385" }}
											/>
											<path
												d="M388.7,384.9h25.8c-2.6,1.2-6.5-.6-8.3,1.6-1.3,.7-10.9,1.1-10.8,3.3l-1.2,10.5c-1.2,2.4-2.6,4.6-2.1,7.5,.3,4-6.5,4-1.9,8-.6,1.1-.7,2.2-.3,3.5l-10.3-2.7c0-2.2-1.6-1.3-2.8-1.8l-1.5-1.6c1-4.9,5.3-9.4,4.4-15.1,1-2.7,.2-8,3.5-10.1,2.5-.2,3-.6,1.5-1,1.5-1.6,6.4-1.8,9.2-1.9,3.5,0-4.4,.2-5.2-.2h0Z"
												style={{ fill: "#155c91" }}
											/>
											<path
												d="M414.5,384.9h21.8l-4,1.8c-1.2,0-2.3,.6-3.2,1.8-5.5,7.1-10.1,14.1-13.8,20.9-1.7,4.5-4.8,7.1-7.6,1.6-2.2-1.6-4.4,.2-3.7,3.2-1.3,3.7-11-2.1-13.7,1.7-4.6-4.4,2.5-4,1.9-8-.4-2.9,.8-5.1,2.1-7.5l1.2-10.5c-.1-2.2,9.6-2.6,10.8-3.3,.3,0,.5-.9,1-1,2.3-.2,4.8,0,7.2-.7h0Z"
												style={{ fill: "#15629a" }}
											/>
											<path
												d="M436.2,384.9h43.5c-6.8,2,8.9,2.9,11.1,2.4,3.2,.6,7.5,5.4,9.1,8.8-5.3,.2-10.7,.4-16,.7,6.1,.9,17,.3,24.8,1-1.7,.7-.4,1,.2,1.7l.7,1.2c5.4-1,11-1.8,16.9-1.3,3.2,3.5,3.7,9.6,8.5,12.1,.5,.3,1.5,1.8,2.1,.5,3.7,.8,6.1,3,10.7,3.5-28.5,.1-58,.2-86-.6,3.1,.7,8,1.6,10.8,2,4,1.7,26-2.6,21.2,4.8-6.8,4.2-16.3,17.6-24.1,16.4-3.8-3.8-10.3-3.3-14.1-7.3-4-.7-8.6,1.1-12.2-.1-.2-1.3-.7-2.5-1.4-3.7,2.6-2.1-3.5-2.8-1.8-1-14.9,4.4-9.4-4.4-19.2-1.9-.1-.5-.4-.7-.8-.6,.1-2.3-7.7-.8-9.7-1.5-4.6-3.2,2.3-7.5,3-9.7,.6-1.5,2.3-4.3,3.3-5.5,6-5.1,11.7-15.3,15.1-20.2l4.3-1.7h0Z"
												style={{ fill: "#2898d0" }}
											/>
											<path
												d="M479.7,384.9l58.8,.2c-10,.2,13.1,4.6,11.3,11-16.6,.4-33.2,.4-49.8,0-1.3-3.1-6.2-8.4-9.1-8.8-2.2,.5-17.9-.4-11.2-2.4h0Z"
												style={{ fill: "#176ea2" }}
											/>
											<path
												d="M567.7,384.9c-3.1,.5-6.4,.3-9.4,1.2-1.4,.7-1.1,1.1,.9,1.1,2.2,.7,9.9-1.8,9.7,1.6,1,9.4-11.1,1.7-14.2,7.3h-5c-.6-5.8-8.7-7.9-13.4-9.7-3.5-2.9,30.8-.8,31.4-1.5h0Z"
												style={{ fill: "#123c61" }}
											/>
											<path
												d="M567.7,384.9c3,0,24.3-.2,26.7,0-.7,.4-.6,1.5,.3,1.5,28.3,1.1,41.1-.7,81.1,.2-.5,.9-.4,1.4,.4,1.5-.2,3.3-2,5.6-5.2,7-3-.9-5.7-.5-8,1.3-17.5-.1-75.1-.1-90.8-.8-1.2-1.4-1.6-1.3-3.2-.1-4.5,2.2-7.3-.1-14.2,.6,2.9-4.7,9.3-.3,13.7-3.4,.7-1.1-.2-2.7,.5-3.9,.4-3.4-7.6-.9-9.7-1.6-6.4-.8,7.1-2.3,8.4-2.3h0Z"
												style={{ fill: "#0f3354" }}
											/>
											<path
												d="M182.3,385.1l10.7,3.8c-1.1,2.8-11-.9-10.7-3.8h0Z"
												style={{ fill: "#165e8a" }}
											/>
											<path
												d="M741.2,385.9c-.9,1.6-3.4,6.7-5,7.7-2.5,1.1-9.8-.8-11.7,1.6-5.4,8.8-16.3,1.6-24.6,5.3-.2-.4-.4-.5-.8-.6,1.1-.9,1.9-1.9,2.5-3.2,2.5-.5,5.7-.5,9.5,0,10.5,.7,19.5-9,30.1-10.8h0Z"
												style={{ fill: "#c2d5e3" }}
											/>
											<path
												d="M777.2,386.3l.1,.5-2,4.1c-1.1,.9,.7-4.1,1.9-4.6h0Z"
												style={{ fill: "#35577e" }}
											/>
											<path
												d="M432.2,386.6c-3.7,6.3-11,16.2-16.9,22.7,4.4-6.4,9.2-18.5,16.9-22.7h0Z"
												style={{ fill: "#2086bf" }}
											/>
											<path
												d="M231.4,387.5l20.3,5.2c-2.3,2,12.3,4.1,13.9,4.9,2.7,2.5,7.5,2.9,9.8,4.1,2.4,1.7,5.1,3,7.9,3.8,7.2,1.5,12.7,6.6,19,9.5-.8,.5-2,1-2.3,2-19.9-10.2-33.2-12.2-46.5-17.2-11.3-4.1-14.7-5.1-22.1-12.3h0Z"
												style={{ fill: "#acf5fb" }}
											/>
											<path
												d="M873.2,399.1c.1-1.7,.2-3.4,.3-5.1-2.2-1.6-2.8-2.6-5.9-3.7-1.4-.3-1.9-2.8-3.3-2.9-.3,0-.4,.3-.3,.6,1,4-.3,4.3-4,.9-2-2,.8,2.1-2,2.4l-4.3,.1c-3.2,1.7-25.3,8.8-27.1,12,10.6,1.5,22.7-2,30.8-8.2,4.1,.3,7.5,5.8,10,8.4,2.1-1.2,4-2.7,5.8-4.5h0Z"
												style={{ fill: "#061f39" }}
											/>
											<path
												d="M183.5,387.3c2.6,1.1,7.4,4.3,9.4,1.6l13.2,1.9c-8.6,.4-13.5,.1-4.3,5.3,2.3,1.3,6.5,1.7,8.2,4.5,1.6,1.1,1.4,3.9,3.5,4-1.9,.4-24.5,2.8-21,.2,.7-2.2,4.8-1.2,7.6-1.6,3.2-1.2-.9-.9-1.8-1-1.7-1.4-4-1.5-5.7-2.6-1-1.4-2.7-.9-4.2-1.3-4.1-4.6-9-6.8-4.9-11h0Z"
												style={{ fill: "#2a8fc5" }}
											/>
											<path
												d="M744.5,388.1l2.7,1.2c.1,1-3,6.3-3,4.2,.5-1.7,.6-3.5,.3-5.4h0Z"
												style={{ fill: "#27486c" }}
											/>
											<path
												d="M168.3,388.6c-.1,1,.1,1.4,1.1,1.1,1-.7,3.1,1.4,1.6,2.1l-5.1,1.7c-1.1,2.4,5.4,6.1,7,7,7.4,3.5,8.2,.6,18.4,2.1-1.4,1.8-.9,2.6,1.5,2.4-1.3,.9-.9,1.2,1.2,1-4.9,.7-9.8,1.1-14.8,1.3-.9,0-1,.1-.2,.3,3.5,.6,7,.8,10.5,.4-6.3,2.4,22.7,11.4,25.5,15.7-.6,0-3.7-.3-4.2,0-.9,3,18.5,1,22.1,2.3-13.6,1.6-26.9,2.2-39.6-1.3-6.9-1.1-13.4,.8-20.8-1.1-1.2-.2-2.2,.1-3.2,.9-2.7-.8-5.3-2-7.8-3.5,10.4-3.2,15.6-.4,26.8-.1-3.9-1.8-9-1.9-14.2-4-3.4-5.5-5.4-1.1-9.4-1.9-6-2.6-13.9,0-18.1-5.8,1-2.6,5.2-1.2,7.6-1.2,7.3-.3-13.7-3.9-15.1-3.9-3.2,.1-7.9-1.1-10.1-4-.1-1.4-1.4-1.9-2-3,0-1-1.6-.4-1.9-1.1-.2-.5,0-.9,.5-1.2,12.6-3.9,29.9,2.4,42.7-6.2h0Z"
												style={{ fill: "#126492" }}
											/>
											<path
												d="M216.9,404.1c-8.4,2.1-1.4-4.1-14.9-8-9.2-5.1-4.3-5,4.3-5.3l12.7-1.3c1.7,2.5,2,13.7-2.1,14.6Z"
												style={{ fill: "#32acd3" }}
											/>
											<path
												d="M289.2,422.7c-7.7-8.1-19.4-9.1-29.4-13.3-9.1-2.6-28.7-10-36.6-16.2l-.4-3.5c.8,.2,2.9-.5,3.5,.3,4.7,5.7,16.5,9.9,23.1,12,17.7,5.7,29.3,10,47.2,15.9,.5,.2,.9,.7,.8,1.2-.3,4.6-5.4,2.2-8.2,3.6h0Z"
												style={{ fill: "#6cdbf6" }}
											/>
											<path
												d="M853.6,391.3l-23.1,9.1c-1.6-.4-2.5-1.6-2.7-3.6,7-2.8,14-5.2,21.2-7.3,.6-.4,4,1.6,4.6,1.8Z"
												style={{ fill: "#19476b" }}
											/>
											<path
												d="M30.5,389.5c7,4.3,23.7,10.9,25,16.6-.6,0-1,.2-1,.8l-9,4.3c-.7-.3-1-.9-.8-1.8-7.1-2.9-12-8.5-17.5-11.6-1.3-2.5,3.6-3,3.3-8.3h0Z"
												style={{ fill: "#154b74" }}
											/>
											<path
												d="M738,391.8l2.6,.6c1.1,.8-.4,2.9-1.2,3.4-3.2,2.1-1.1-2.1-3.2-2.2l1.8-1.8Z"
												style={{ fill: "#396390" }}
											/>
											<path
												d="M251.7,392.6l60.5,14.8c-1.8,1.2,1.7,4.4-1.8,3.8-1.7,0-2.1,1.8,.5,1.7l-8.5,2c-6.3-2.9-11.9-7.9-19-9.5-5.2-1.3-7.1-4.5-12.9-5.3-5.1-2.8-11.3-4.4-17.1-5.9-.8-.2-3-.2-1.7-1.6h0Z"
												style={{ fill: "#c3f5fc" }}
											/>
											<path
												d="M813.5,434.4h-3.5c1.2,.1,2.4,.1,3.5,0Z"
												style={{ fill: "#154b74" }}
											/>
											<path
												d="M872.9,413.2v-4.4c-4.8,1.6-9.4,1.8-14.3,3.3-.8-.1-3.5,.5-4.5,1.4-17,3.2-29.5,5-45.7,1.4,1,5.5-8.4,6.6-2.9,17.7,.5,.2,11.6-.1,11.5,.7-.2,1.1-2.4,.9-3.5,1.2,18.8,.4,26.3-.5,33.8,.6,5.1-2.3,10.6-3.4,16.4-4.1,1.1-2.2,3.4-.6,4.8-.1,.7,0,1.1-.4,1.1-1.1,.4-1.3,2.4-1.2,3.5-1.9-.1-5.1-.2-9.9-.2-14.7h0Z"
												style={{ fill: "#154b74" }}
											/>
											<path
												d="M223.2,393.1c7.9,6.2,27.5,13.7,36.6,16.2,10,4.2,21.7,5.2,29.4,13.3-.4,0-.1,.3,.8,.6-23.5,.1-12.5-1.3-31-7.4-5.7-1.4-10.8-3.6-16.4-5.3-5.2-1.4-12-6-18.1-4.9-2.3-4-1.5-8.7-1.3-12.5h0Z"
												style={{ fill: "#53cbea" }}
											/>
											<path
												d="M805.7,396.3c-5.7,1.9-5.7,8-15.6,7.6,.5-.9,4.4,.1,3.1-1.8,.3-.6-.1-4.7,1-4.8l8.7-3.2c3-1.2,1.6,1,2.8,2.2h0Z"
												style={{ fill: "#0c2242" }}
											/>
											<path
												d="M77.9,393.9l-1.2,6.2c.6-3-3.3-1.1-4.9-.9-2,.7-19.1,2.8-16.7,.8,7.6-2.6,16-3,22.8-6.1h0Z"
												style={{ fill: "#0d3a5f" }}
											/>
											<path
												d="M735,393.9c-4.2,3.3-10.5,10.5-17.5,7.2,10.7-7,3.9-7.2,17.5-7.2h0Z"
												style={{ fill: "#13304f" }}
											/>
											<path
												d="M662.9,396.3l38.3,.3c-.1,.8-.4,1.3-.9,1.3-9.8,.3-53.6,.2-75.8,.2-44.9,.5-95.1,.5-140.2-.8-.3,.1-1.3-.3-.4-.3,5.3-.3,10.7-.5,16-.7,22.3,0,47.5,1.2,69-.6,1.5-1.1,2.1-1.4,3.2,.1,15.5,.8,73.6,.4,90.8,.5h0Z"
												style={{ fill: "#cfd7df" }}
											/>
											<path
												d="M867.2,403.6c-16.8-1.7-27.8,7.8-42.1,2.5,0-1.6,.4-2.5,1.3-2.8,7.3,1.8,16.5-1.4,22.8-3.5,11.8-5.2,6.9-8.3,18,3.8h0Z"
												style={{ fill: "#040e22" }}
											/>
											<path
												d="M873.2,427.6c-1.1,.8-3,.6-3.5,1.9-.5,3.2-4.3-2-5.9,1.2,3.1,.1,5.6,1.4,7.5,3.8l2.3,.1c-.2-2.3-.3-4.6-.4-7h0Z"
												style={{ fill: "#10547f" }}
											/>
											<path
												d="M873.2,399.1c-5.3,7.3-19,3.7-24.1,6-17.2,4.5-16.2,2.4-31.5,0l-9.1,9.8c17.2,3.8,32.7,1.7,50.2-2.8,5-1.5,9.4-1.7,14.3-3.3-.1-3.3,0-6.5,.2-9.7h0Z"
												style={{ fill: "#173f5f" }}
											/>
											<path
												d="M805.7,396.3l16.5,.2c2,.7,3.8,.8,5.6,.2,.2,2,1.1,3.2,2.7,3.6-1.4,.6-2.8,1.6-4,2.9-.9,.2-1.3,1.1-1.3,2.8-4.8-.6-18-2.4-22.9-3.1-1.4-.2-2.6,.1-3.8,.8-7.9,5.2-17.1,7.3-27.5,6.4-1.8-.1-2-.8-.6-1.9,.5-.7,6.2-3.8,2.5-4,18.8-3.5,16.2,5,32.8-7.9h0Z"
												style={{ fill: "#133354" }}
											/>
											<path
												d="M701.2,396.6c.2,0,.3,.1,.5,.2-3,4.3-5.8,9.3-11.3,10.7-10.3,2.2-20.6,4.3-30.9,6.3-24.9,8.6-28.6,6.7-63.6,13.7-3.5,0-4.2-.5-1.9-1.3,15.1-3.5,30.4-6.2,45.8-8,16.2-5.1,29.1-8.7,44.8-10.7,3.8-1.5,12-1.4,5.3-7.3-16-1.7-33,.7-49.3-.3-1.4,0-.9-1.6,.3-1.5,24.6-.5,50.2,0,59.1-.4,.9-.1,1.2-.5,1.2-1.4Z"
												style={{ fill: "#091b35" }}
											/>
											<path
												d="M508.7,397.8l47.8,.3c-.3,1.5,0,2.9,.8,4.2-8,.5-21.1-2.4-18.7,10-4.7-2.7-8.6-7.7-11.1-12.6-3-1.3-7.1-.1-10.3-.5-2.6-.6-6.8,3.4-8,.1-.4-.8-2.3-.7-.5-1.5h0Z"
												style={{ fill: "#176ea2" }}
											/>
											<path
												d="M556.5,398.1l7.2,.2c-2.5,3.6,5.4,1.2,7.2,2.5-1,.2-1.2,.8-.7,1.8,3.2,4.7,12.7,25.3,18,24.8-.1,.9,.3,1.2,1.3,1-4.3,.7-16.3,2.7-20.5,2.4-1-4.2-7-8.3-6.1-13.5,.2-.5,.1-.9-.3-1.3-.3-6.7-5.9-11.5-6.1-17.9h0Z"
												style={{ fill: "#153b5f" }}
											/>
											<path
												d="M624.5,398.1c-7.3-1.7,14.5,23.6,15,19.3,.2,.1,.4,.4,.5,.8-2.2,0-59,8.5-43.9,9.3l-6.5,.8c-1,.3-1.4,0-1.3-1l-17.2-26.6c-1.8-1.3-9.7,1.1-7.2-2.5,20,.5,40.3-.7,60.6-.1h0Z"
												style={{ fill: "#0f3354" }}
											/>
											<path
												d="M624.5,398.1h21.2c-.8,.4-6.1-.6-5.6,1.3,15.1,1.4,31,.1,46.3,0,3.5-1,8.9,4.4,4.8,6.2-17.9,4.1-32.8,6.1-51.1,12.5-5.3-5.8-10.8-11.1-13.6-16-.8-1.3-1.8-1.9-3-1.8-1.4-1.4-1-2.2,1-2.2h0Z"
												style={{ fill: "#102b4a" }}
											/>
											<path
												d="M718.4,400.1c.2,1.2-13.5,4.4-14.2,4.8-1.2-.2-.4-3.9-1.6-4.7,5.1-1.8,11.1,.1,15.8-.1h0Z"
												style={{ fill: "#335b85" }}
											/>
											<path
												d="M623.4,400.3c1.2,0,2.2,.6,3,1.8,2.9,4.6,7.3,9.7,13.1,15.2-2,3.1-14.8-14-16.1-17Z"
												style={{ fill: "#1f4b6d" }}
											/>
											<path
												d="M699.2,400.1c.3,0,.6,.2,.8,.6-4.1,3.3,3.1,8.7-4.1,10.1l-4.9-1.4-.5-1.8c3.9-1.3,6.9-3.8,8.7-7.5h0Z"
												style={{ fill: "#afdbf3" }}
											/>
											<path
												d="M570.9,400.9l17.2,26.6c-5.4,.3-14.5-19.8-18-24.8-.4-1.1-.2-1.6,.8-1.8h0Z"
												style={{ fill: "#225378" }}
											/>
											<path
												d="M198.5,402.3c1,.2,5-.4,1.8,1-2.9,.4-6.9-.6-7.6,1.6-2.3,.2-2.8-.6-1.5-2.4l7.3-.2Z"
												style={{ fill: "#06375b" }}
											/>
											<path
												d="M557.2,402.3c2.7,4.2,4.5,8.8,5.4,13.8-8.4-.3-16.5-.5-24.1-3.8-2.4-12.5,10.7-9.4,18.7-10Z"
												style={{ fill: "#2086bf" }}
											/>
											<path
												d="M817.5,405.1l-9.1,9.8c-5.4-3.1-17.3-1.5-23.2-1.3-15.4,.8-32.7,1.7-48,0,3.4-.8,39.2-13.1,36.4-7.6-1.3,1.2-6.4,4-2.5,4.4,10.4,.9,19.6-1.3,27.5-6.4,1.1-.7,2.4-1,3.8-.8l15.1,1.9h0Z"
												style={{ fill: "#1a5176" }}
											/>
											<path
												d="M529.1,403.1c2.5,3.2,5.2,6.2,8.2,8.8-2,1.9-8.1-6.5-8.2-8.8h0Z"
												style={{ fill: "#63b2de" }}
											/>
											<path
												d="M216.9,404.1c-.1,.3-.1,.5,0,.8-.1,.2-.3,.3-.5,.2-5.9,.7-21.3,2.4-27,2.8-1.4,.5-12.5-.1-10.3-.7,12.5-1.2,25.3-.9,37.8-3.1h0Z"
												style={{ fill: "#075079" }}
											/>
											<path
												d="M142.5,404.6c4-.1,22.3,4.2,8.3,3.1-7.3-1.5-15.8,.9-24.8-2.2,1.3-2.2,11.1-.8,16.5-.9Z"
												style={{ fill: "#0f3354" }}
											/>
											<path
												d="M217,404.9c10.6-.7,21,3.8,30.6,7.3,8.5,3.3,18,4.5,25.6,10.2,3.2,.8,17.5,.6,20.6,.9l-40.7,.1c-8.7-4.2-17.5-8-26.5-11.5-4.7-2.4-12.5-3.4-10-6.9,.1,.2,.3,.1,.4-.1h0Z"
												style={{ fill: "#3da8d2" }}
											/>
											<path
												d="M216.5,405.1c-2.5,3.4,5.4,4.5,10,6.9,9,3.4,17.8,7.3,26.5,11.5h-29.8c-4.6-6-11.7-7.8-17.9-10.9-1.9-.2-7.3-1.8-6.9-5.5l18.1-2Z"
												style={{ fill: "#217eb2" }}
											/>
											<path
												d="M55.5,406.1c3.9,9.4,16.2,8,23.8,10.3,5.9,.8,15.4,9.9,19,8.1,2.6,1.5,.2,1.8-1.1,2.4-2.7,1.5-5.2,1.5-7.7,0-8.9-6-14.5-6.4-23.3-10.3-3.3-1.8-6.1,1.3-9.3,.9-.9,0-1.7-.8-1.8-1.8,.4-.7-2.1-10.5,.4-9.6h0Z"
												style={{ fill: "#10365c" }}
											/>
											<path
												d="M23.7,442.6c3.6-.5,8.8-1.4,10.8,2.9h4.5c-.1-1-.4-3,1.2-2.9,1.1,.4,22.2,1.5,22.2,2.9,5.5,0,18.7,.7,23.2-2.5,15.4-.3,30.9-.6,46.3-.8,1.1,0,1.9-1.1,.5-1.6-9.2,.3-18.3-.7-27.5,0-4.4-1-9-1-13.7,.1-6.1,2.1-11-2.5-14-7.5-7.2,2.3-15.2,7.5-20.8-.1-5.5-1.5,21.1-4.4,23.3-3.8,7.4,8.9,11.8,4.6,20.5,7,6,3.2,7.8,3.6,16.3,2.6,4-.4,10.7-.1,20,.8,3,.5,8-1.1,10.2,.7h1.2c-.2-.3-.2-.6,0-.8-1.1-4,5.7,1.2,0,1.1-3.8,1.9,4,3.7,5.1-4.7-22,2.4-18-6.7,.4-3.1,3,.5,4.9,3.1,7.7,4,12.3-.3,24.6-.6,36.8-1.1,5.9-.2,12.5,.1,18.6,.2,3.4-2,14.9-4.2,18.5-4.2-4.8-.9-9.5-.9-14.2-2.7-9.1,2-19,4.4-27.3-1.2-3.6-2.2-4.1-1.8-1.6,1.1,.3,1.6-2.7,2.2-4.1,2.6-5.6,3.5-10.5,.8-16-.4-2.4,.4-19.8-8.7-14.9-9.9,7-.2,14.1-2.7,20.8-1.4,1.4,.2,4.8,.7,10.2,1.5,.9-.1,.2-.9-.5-1-4-.7-8.4-1.8-13.3-3.4-15.6-4.7-18.1,11.7-23.1-4.1-1.6-.9-3.1-2.1-4.3-3.6-4.5,1.6-10,2.1-16.5,1.3-1.4-.2-1.7,.3-.7,1.4,1.8,2.3,9.7,5,12.6,6.2,1.3,.5,1.2,.8-.1,1-5,.4-8.5,6.6-12.4,8.5-2.3,1.3-4.4-2.9-6.5-1.3-.8,.8-1.8,1-2.8,.4-7.4-4.4-15.3-7.7-23.5-10.3-.5,.7-7,3-4.3,4.1,2,1.5,10.5,5.5,4.6,6.5-6.1,4-13.7-4.9-18.1-5.5-5.3-1-12.3-6.3-17.4-4.9-9,4.1-6.3-4.3-7.4-9.6-5.6,2.6-14.8,5.9-14.1,13.6,.2,1.2-8.1,3.2-8.7,3.7-1.5,.6-4.4-.6-6-.9-2.2,4.5,3.2,7.7,6,11.4,6.5,1.4,13.4,3.6,20,2.7-6.6,6.9-18.8,2.4-29.2,3.8-.8,1-.4,1.5,1.5,1.2h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M198.3,407.1c-.5,3.8,5,5.2,6.9,5.5,3.5,1.4,6.9,3,10.1,5,1.5,.5,6.9,3.5,7.8,5.9h-8.2c-6.3-4.9-13.9-7.8-21.3-10.9-2.2-1.2-5.3-2.2-5.1-4.2,0-.9,9.2-1.2,9.8-1.3h0Z"
												style={{ fill: "#176e9e" }}
											/>
											<path
												d="M312.2,407.4c10.7,2.3,22.1,1.3,33,1,1.3,2.3,4,1.1,4.6,3.2,.4,.7,2.6,.2,1.5,1.5-.4,.5-1.6,.3-1.8,1.2-2.8,1.5-3.9,4.4-6.9,6.1-7.6-4.8-17.7-12.5-24.5-3.1-1.4,2-3.3,3.6-5.5,3.6-.2-1.7,1.7-2.4,1.9-3.7-.4-4.6-7-3.9-4.8-5.7,.2-.2,.5-.3,.9-.2,3.6,.6-.1-2.8,1.6-3.9h0Z"
												style={{ fill: "#d0f3f8" }}
											/>
											<path
												d="M690.5,407.6l.5,1.8c-4.8,1.4-8.1,5.7-11.6,9.1-2.2,1.7,6.5,.6,6.8,.9-.3,1.6,0,3,.8,4.2,.4,1.4,0,2.9,1.8,3.7,1.5,.7,1.7,2.2,2.5,3.3,.7,.6,.6,1-.3,1.4-.3,.1-.2,.2,0,.2,2.2,0,2.8,.1,1.9,.2-39.3,.8-78.5-1.1-117.7-1.9,14.6-1.8,52.3-8.9,56.9-9.4,10.5-.9,18.6-4.9,27.5-7.3,10.3-1.9,20.6-4,30.9-6.2h0Z"
												style={{ fill: "#c3f5fc" }}
											/>
											<path
												d="M345.2,408.3c14.6,4.4,30,6.8,44.8,11,9.8,2.2,20,2.8,30.1,3.3,.5,0,.6,.4,.4,1-10.9-1-22.4-.1-33-1.1-1-1.2-3.3-3.2-4.8-2.1-.5,.7-1.3,1-2.5,1,1.4-2,.9-2.8-1.5-2.5-3.2-1.1-6.9,0-9.8-2.2-3.7-2.5-7.4-2-11.5-.8-2.6-1-5.1-1.3-7.7-1.6,.2-.9,1.4-.7,1.8-1.2,1.1-1.3-1.1-.8-1.5-1.5-.2-.4-.4-1.2-.9-1.2-1.5-.1-2.7-.8-3.9-2.1Z"
												style={{ fill: "#c8e2ee" }}
											/>
											<path
												d="M44.7,409.3c-.2,.9,.1,1.5,.8,1.8-3.3,2.2-5,5.3-5.1,9.2,0,.4-.3,.8-.7,.9l-7.9,2.8c-1.4,.7-4.5-.5-6.1-.9-4.6-.7-9.9,1.1-13.7,2.8-2.6,.8-3.1-2.3-1.3-4.3l15-5.4c.7,.2,2.5,1.4,3.2,1,4.9-3.2,10.2-5.8,15.8-7.9h0Z"
												style={{ fill: "#13304f" }}
											/>
											<path
												d="M691,409.3l4.9,1.4c-.9,1-.8,1.5,.4,1.6,1.8,.3,2.9,1.3,4.2,2.5,8.8,4.5-15.4,2.2-17.9,.3,2.1-2.6,5-4.6,8.4-5.8h0Z"
												style={{ fill: "#112340" }}
											/>
											<path
												d="M413.7,412.3c-.7,2.1-7.5,6.5-3,9.7-7-.4-13.9-1.3-20.8-2.8-2.2-9.8,12.9-.9,14-5.2-.5-2.7,.5-4,2.9-3.7,2.4,1.9,3.7,6.3,6.9,2h0Z"
												style={{ fill: "#197fb6" }}
											/>
											<path
												d="M151.2,412.6c6-.7,12.3,3.8,17.8,1.5,2-.8,3.5,0,5.4,2.6-15.7-4.7-18.1,11.7-23.2-4.1h0Z"
												style={{ fill: "#0d3a5f" }}
											/>
											<path
												d="M311,412.9c1.8,1,4,3.1,3.1,5-.9,.7-1.4,1.7-1.6,2.9-1.9-3.5-8.3-4.8-11.5-5,.7-1,8.8-2.5,10-2.9h0Z"
												style={{ fill: "#2177aa" }}
											/>
											<path
												d="M342.6,420.3c-.4,1.4-3.6,.5-4.6,.5-.9-2.8-5.5-2.2-6.8-4.7-2-2.4-4.4-2.9-7.3-1.5l-.9-1.2c7.4-2.8,13.1,3.5,19.6,6.9h0Z"
												style={{ fill: "#1e6f9e" }}
											/>
											<path
												d="M799.7,412.9c1.5,3.9-5,2.9-6.2,5.4-1.2,.8-2.6,1.2-3,2.8,0,.4-1.1,1.2-.4,1.8,.2,.2,.3,.5,.1,.7-1.1,1.7-1.1,3.4-.1,5.2,.6,1.2,.3,3.4,2,3.7,5.9,.1,18.1,.3,24,.5,4.7,2.8-22.5,1-23.7,1.4,5.2-1.3-6.7-1.8-6.9-2.1-5.1-.9-5.8-8.9-3.8-11.7,.9-.8,4.5-4.3,3.4-6.8l14.6-.9h0Z"
												style={{ fill: "#1e6f9e" }}
											/>
											<path
												d="M799.7,412.9c3,.1,6,.8,8.8,2,1,5.5-8.4,6.6-2.9,17.7-.3-.2-14.5,.2-14.1-.6-1-2.6-3-5.8-1.1-8.5,.1-.2,.1-.5-.1-.7-.7-.4,.3-1.5,.4-1.8,1.5-2.6,4.5-4.3,7.7-5.2,1.4-.3,1.9-1.3,1.3-2.9Z"
												style={{ fill: "#186491" }}
											/>
											<path
												d="M132,416.3c-12,3.8-8.9,4.3-19.3,3.6-1.2-1.7-3.1-3-5.6-3.9,8.1-.9,18.6-5.3,25.8-1,.8,.6-.3,1.3-.9,1.3h0Z"
												style={{ fill: "#13608d" }}
											/>
											<path
												d="M322.9,413.3c1,1.7,3.1,2.9,4.8,2.7,2.8,3.6,3.1,4.8,8,5-7.4,1.8-15,2.1-22.2-.3,4-1,5.2-6.1,9.4-7.4Z"
												style={{ fill: "#041730" }}
											/>
											<path
												d="M737.2,413.6c17.4,.1,3.4,6.8,17.9,17.1l-5-.9c-1.9-1.5-4-2.1-6.2-1.9-4.3-1.9-5.9-9.1-7.7-12.4-.1-.3,0-.5,.3-.6,1.5-.6,1.3-.9-.5-.9,.5-.4,.8-.5,1.2-.4h0Z"
												style={{ fill: "#35a2cc" }}
											/>
											<path
												d="M785.3,413.6c1,2.3-2.5,6.1-3.4,6.8-2.1,2.8-1.3,10.8,3.8,11.7l7.9,1.1c2.8,2.1-23.8,.6-23.9,1,2.8-.9,6.4,1.6,5-2.7-5-1-8.3-4-8.4-9.7,.8-2.1,1.2-5,3-6.5,.5-.4-.6-.5-.7-1l16.7-.7h0Z"
												style={{ fill: "#2177aa" }}
											/>
											<path
												d="M331.1,416.1c-2.5,0-5.2,.4-7.3-1.5,2.9-1.4,5.4-.9,7.3,1.5h0Z"
												style={{ fill: "#6cdbf6" }}
											/>
											<path
												d="M736.2,413.8c1.9,0,2,.3,.5,.9-.3,.1-.4,.4-.3,.6,1.7,3.3,3.3,10.4,7.7,12.4,2.2-.2,4.3,.4,6.2,1.9l-13.3-.1c1.1-.2,1.5-.7,1.1-1.4-.7-1.8-3.6-.6-4.7-1.4-1.8-1.9-6.4-6.4-4.9-9.7,.8-.7,.9-1.2,.4-1.4l7.3-1.8h0Z"
												style={{ fill: "#4bafd9" }}
											/>
											<path
												d="M744.5,414.1c8,.5,16,.6,24,.2,.1,.5,1.4,.7,.7,1-5.5,5.8-2.6,15.2,5.4,16.2l-.1,.1v.3c1.2,1.8,.5,2.5-2.1,2.1-1.9,.1-10,.3-12.1,.2-19.3-12.5-9-16-15.8-20.1h0Z"
												style={{ fill: "#2d8bbe" }}
											/>
											<path
												d="M349.5,414.3c1.1,.1,1.9,.9,2,2.1l-3.4,4.5-7.2,.3c.9,0,1.4-.3,1.6-.8,3-1.7,4.2-4.7,7-6.1h0Z"
												style={{ fill: "#0d2a49" }}
											/>
											<path
												d="M350,414.4c2.5,.1,4.9,.6,7.2,1.5-1.8,1.4-3.7,1.6-5.7,.5-.1-1.1-.6-1.7-1.5-2Z"
												style={{ fill: "#2b74a3" }}
											/>
											<path
												d="M134,414.6c0,.4,12.6,4,8.2,4.3-6.6,0-10.4,12.7-16.8,7.1-.6-.5-1.5-.5-2.1,.1-3.3,2.2-7.1-3-10.5-3.7v-2.4c10.1,1.4,9.3-1.6,21.2-3.6,.1,0,.2-.1,.1-.2-.4-.7-.4-1.2-.1-1.6h0Z"
												style={{ fill: "#103f66" }}
											/>
											<path
												d="M368.7,416.6c-.3,2.2-4.3,.6-3.3,3.9l-17.3,.2,3.4-4.5c2,1.1,3.9,1,5.7-.5,4.4-1.3,7.6-1.5,11.5,.9h0Z"
												style={{ fill: "#12426a" }}
											/>
											<path
												d="M548,415.3l14.6,.8c.4,.3,.5,.8,.3,1.3-22.4-1-79.9,2.5-101-2.6,28,.7,57.5,.7,86.1,.5h0Z"
												style={{ fill: "#ecfafc" }}
											/>
											<path
												d="M25.2,436.3l-7.8-2.8c-1.1-2.3,12.5,1,14.3,.9-2.8-3.6-8.2-6.8-6-11.4-4.6-.7-9.9,1.1-13.7,2.8-2.6,.8-3.1-2.3-1.3-4.3l15-5.4c-5.5-3.5-12,2.3-17.8,2.7-2.6,.6-4.7,1.9-5.4,4.5v3.7c11.6,2.2,8.9,8.7,12.8,9.4-.5,1.5-.1,2,1.1,1.6,3.2-1.3,6.2-1.1,9-1.5v-.2c0,.2-.1,.1-.2,0Z"
												style={{ fill: "#0c2242" }}
											/>
											<path
												d="M107.1,416c2.5,.8,4.4,2.1,5.6,3.9v2.4c-5.1-2.4-10.4-4.5-15.8-6.2,3-1.9,6.8,1.3,10.2-.1h0Z"
												style={{ fill: "#062443" }}
											/>
											<path
												d="M728.7,415.6c.5,.2,.4,.7-.4,1.4-1.4,3.2,3.1,7.9,4.9,9.7,1.1,1,3.9-.5,4.7,1.4,.8,1.4-1.5,1.2-2.3,1.7-6-1.4-9.4,8.5-15.6,5.2,7.6-.7,6.6-8.3-.5-3.9-2-1.3-6.8-1.2-8.2-2.1-2.6-1.7-5.8-4.6-5.8-8.3,.2-.4,.6-1.5-.7-1.2,8.2-.3,16.2-1.7,23.9-3.9h0Z"
												style={{ fill: "#71d0ed" }}
											/>
											<path
												d="M301,415.8c3.3,.2,9.5,1.5,11.5,5,.3,.1,.7,.1,1-.1,9,3.7,18.3,0,27.4,.4,4.7-.3,19.5-.4,24.5-.5,2.1,1,4.3,1.1,6.5,.2,3.9,1.2,8.3,1.4,11.2-.9,2.2,.1,3.2,2,4.9,2.9,10.8,.3,22.9-.9,33,1.3-21.6,1-47.3,.7-68.3,1.1-.2,0-.4,.2-.4,.5,.2,2.1-.4,2.4-1.6,.9-2.7-3.4-8.5-1.1-12.4-1.2-9.7-.7-17-2.1-25.6,1.7-4.1,1-10.9,4.9-14.1-.1-20.8-4.2-44.3-.6-65.9-1.2-3.7-1.3-23.1,.8-22.1-2.3,.3-.2,3.7,0,4.2,0,21,0,57.5,0,78.7-.1,7.1,.9,4-4.5,7.5-7.6h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M327.7,416.1h3.4c1.4,2.5,5.8,1.9,6.8,4.7-1.4,.6-4.4-.2-5.9-.3-1.3-.1-3.4-3.6-4.3-4.4Z"
												style={{ fill: "#06375b" }}
											/>
											<path
												d="M368.7,416.6c2.9,2.2,6.6,1.1,9.8,2.2-1.3,.7-3,.4-4.4,.8-2.5,1.8-5.8,2.4-8.6,1-1-3.2,2.9-1.7,3.2-4h0Z"
												style={{ fill: "#2673a1" }}
											/>
											<path
												d="M522.5,445.6c1.6-3.4,6.9-4.3,7.8-8.3-.7-2.9,1.4-2.7,3.1-3.9,.3-1.6,1.5-2.3,3.6-1.9-3.1-.4-2.8-.5,.8-.3l31.5-.4c-1-4.2-7-8.3-6.1-13.5h-70c1.9,1,2.2,2.4,1,4.2,.2-.1,.4,0,.5,.1,2.1-1.7,2.5,1,1.2,2.7-1.4,1.3-1.2,3.1-1.4,4.7-1.5,3.3-1.1,3.9,1.3,1.6,0,2-3.4,5.7-5.6,7.4-1.4,.6-3.1,.3-4.3,1.4-.8,2-.6,4.4-2.6,5.9l39.2,.3Z"
												style={{ fill: "#33a0d7" }}
											/>
											<path
												d="M2.6,441.2v4.5H34.6c-2.9-6.9-14.8-.1-12.1-4.4,0-.2-19.9-.1-19.9-.1Z"
												style={{ fill: "#031932" }}
											/>
											<path
												d="M94.3,443.7c5.7-.3,13.2,1.3,2.5,2h79.8c.1-2.1,3.5-4.8,2.8-6.2-5.6-2.6-12.2-.4-18.2-1.8-.7-.1-1.3-.9,0-.8-1.2-1-6.7-.7-8.1-.7-1,8.3-9,6.6-5.1,4.7l-.1-.2c-3.9,.5-7.6,1.5-11.4,0l-4,.2c1.5,.5,.5,1.6-.5,1.6-15.4,.2-30.8,.5-46.3,.8,3.2,.3,6.1,.5,8.6,.4h0Z"
												style={{ fill: "#031932" }}
											/>
											<path
												d="M90.8,445.6h5.2c-1.7-.1-3.6-.2-5.2,0Z"
												style={{ fill: "#031932" }}
											/>
											<path
												d="M378.5,418.8c2.4-.3,2.9,.5,1.5,2.5-2.5,.6-5.2,.4-8-.5l2.1-1.2c1.5-.4,2.9,0,4.4-.8Z"
												style={{ fill: "#0b2645" }}
											/>
											<path
												d="M686.2,419.4l11.8,.3c1.9,15.4,23.4,12.4-18.6,13.1,4.5-.3,9-.4,13.5-.3,.9-.1,.3-.2-1.9-.2-.3,0-.3-.1,0-.2,.9-.4,1-.9,.3-1.4-.8-1.1-1-2.7-2.5-3.3-1.2-.7-1.7-1.6-1.6-2.8-.4-1.7-1.6-3.2-1-5.2h0Z"
												style={{ fill: "#acf5fb" }}
											/>
											<path
												d="M698,419.7c.6,.3,8.2-.9,7.8,.3-1.1,2.2,1.5,5.2,2.4,6.2,2.2,4,7.3,3.1,11.4,4.9l-1.2,2.2-27-.3c24.9-1.2,8.6,1,6.6-13.3h0Z"
												style={{ fill: "#8feaf7" }}
											/>
											<path
												d="M161.7,420.9c7.3,3.7,15,7.7,23.3,8.6,.5,.1,2.5,1.5,3,1.8-9.8,4.6-24.1-2.2-31.5-8.9-2.5-2.4,4.4-1.1,5.2-1.5h0Z"
												style={{ fill: "#062443" }}
											/>
											<path
												d="M483.1,445.6h0c2-1.5,1.6-3.9,2.5-5.8,1.2-1.2,3-.8,4.3-1.4,2.2-1.6,5.6-5.4,5.6-7.4-3.5,3-1.8,.3-1.2-2.5-.3-1.9,.9-3.2,1.8-4.6,.6-2.4,.1-3-1.7-1.9-5,5.6-10.4,10.6-16.3,15.1-.5,.3-.9,2-1.2,2.5,1.3,.5,7.4-.9,7,.4-1.2,.4-2.7,.2-3.9,.7,.1,1.4-3.9,3.3-3,1-16.2-.9-33.5,.2-50.5-.5-.5,0-.6-.4-.5-1.2-5-1-10-1.2-15-.7-.3,.4-2.2,1.3-2,2l.7,4.8h73.4v-.5h0Z"
												style={{ fill: "#2898d0" }}
											/>
											<path
												d="M494,421.6c.2-.1,.4,0,.5,.1-5,5.6-10.4,10.6-16.3,15.1-.5,.3-.9,2-1.2,2.5-11.9,.5-5.1-.8-12-3.3,.2-.2,.2-.5,0-.7,4.6,1,5.9,5.7,11.2,1.3,5.9-5,11.9-10,17.8-15h0Z"
												style={{ fill: "#5cb0dd" }}
											/>
											<path
												d="M201.1,423.8c-3.4-1.3,6.6-1.9,6.7-.3-.3,1.8-5.5,.6-6.7,.3h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M233,425.8c21-.6,41.9-.7,63-.2,3.4,.3,5,5.1,8.8,4-3.6,.2-2.9,1.9-2.6,4.4-.1,.1,0,.3,.6,.5,14-.6,29.4,1.5,43.2,2.4-31.3,.4-80.4-.9-114-.7,3.3-2.8,9.8,.1,11-4.3-1.5-1.8-5.6-.7-7.8-.3-4.9-.9-9.5-.9-14.2-2.7-9.1,2-19,4.4-27.3-1.2-3.6-2.2-4.1-1.8-1.6,1.1,.3,1.6-2.7,2.2-4.1,2.6-.5-.3-2.6-1.8-3-1.8-5.5-.7-10.7-2.4-15.5-5.1,.9-.8,2-1.1,3.2-.9,5.6,1,10.9,1.2,16,.7,14.6,2.3,28.9,4.5,44.3,1.5h0Z"
												style={{ fill: "#0d3a5f" }}
											/>
											<path
												d="M440.4,426.1c.5,.7,1.1,1,1.8,.9,.8,1.2,1.2,2.4,1.4,3.7h-11.6c-1.1-.2-2.5-1.1-2.5,.8-1.1,1.4-1.7,3.1-1.8,5l-14.5,.2c-1.7-1-3.4-1.3-5.1-1-1.1,.4-2.9-.5-1.9-1.3,3.2-1.2,3.4-2.7,.5-4.6-.8-.7,.4-2.4-.9-3-3.5-2.4-10.3,.8-11-2l26.5-.7c9.7-2.6,4.7,6.4,19.1,2h0Z"
												style={{ fill: "#2090cc" }}
											/>
											<path
												d="M338.5,425.4l-1.1,.6c-2,5.4-10.8,2.7-13.3,4.9-.2,.6-.5,2-1.4,1.5-3.4-2.3-4.5-6.9-9.3-5.5,8.9-3.2,15.2-2.3,25.1-1.5Z"
												style={{ fill: "#052847" }}
											/>
											<path
												d="M388.7,425.1c2.2,7.9-12.4,3.3-14.3,8.2-.9,1.2-.6,1.7,.9,1.6,6-.6,11.8,0,17.5,1.6-21,.6-57.8,.5-78.3-1.9,13.8-.8,16.6,2,24-6.2,1-1.1,.6-2.6-1.1-2.5,3.7-1,10.7-2.5,13.5,.6,1.3,1.5,1.8,1.3,1.6-.9,11.7-2.1,23.2,.1,36.2-.5h0Z"
												style={{ fill: "#0c5688" }}
											/>
											<path
												d="M394.7,424.9c.7,2.8,7.7-.4,11,2,1.3,.5,.1,2.2,.9,3,6.7,3.9-5.7,5.2,1.4,5.9,1.6-.3,3.3,0,5.1,1l-20.5-.3c-5.6-1.7-11.4-2.2-17.5-1.6-1.5,.1-1.8-.4-.9-1.6,1.9-4.8,17-.5,14.3-8.2l6.2-.2h0Z"
												style={{ fill: "#2086bf" }}
											/>
											<path
												d="M442.2,427.1c-.7,.1-1.3-.2-1.8-.9-1.5-1.8,4.3-1.1,1.8,.9Z"
												style={{ fill: "#c2d5e3" }}
											/>
											<path
												d="M337.4,426c1.7,0,2,1.3,1.1,2.5-6.8,9-18.5,5.6-31.2,5.9,.5-1.7,1.9-2.5,4.4-2.4,.3,0,.6-.2,.6-.5l-.1-3.3c0-.6,.4-.8,.8-1,4.5-2.3,6.3,3,9.6,5.2,.8,.4,1.3-.8,1.4-1.5,2.7-2.2,11.2,.4,13.4-4.9h0Z"
												style={{ fill: "#0f74a4" }}
											/>
											<path
												d="M312.9,427.1c-.4,.2-.8,.4-.8,1l.1,3.3c0,.3-.2,.5-.6,.5-2.5-.1-4,.7-4.4,2.4-2.6,.3-4.6,1-5.1-.2-.3-2.5-1-4.1,2.6-4.4,0,0,8.2-2.6,8.2-2.6h0Z"
												style={{ fill: "#0c5688" }}
											/>
											<path
												d="M13.1,434.9c-1.2-3.7-5-6-8.7-7l-1.9,.9v7.7c1.4,.4,2.7,1.1,3.9,2.2,3.1,.3,6.1-.4,8.8-1.9-1.4-.2-2.1-.8-2.1-1.9Z"
												style={{ fill: "#13517a" }}
											/>
											<path
												d="M79.7,429.5c-2.3,.3-3.2,1.6-2.5,3.8-7.2,2.3-15.2,7.5-20.8-.1-5.6-1.4,21.2-4.2,23.3-3.7Z"
												style={{ fill: "#103f66" }}
											/>
											<path
												d="M51.7,437.2c-11,.9-21.6-3.7-32.6-4.5-.4-.2-2.6,.3-1.7,.9,.2,.3,8.6,2.6,8,3.3-2.8,.4-5.8,.3-9,1.5-1.2,.4-1.6-.1-1.1-1.6-4,2.4-8.4,1.6-12.7,2.7v1.8c10.4,.2,28.6-.4,38.1,0,3.1,.2,10.8-1.3,11-4.1h0Z"
												style={{ fill: "#15466e" }}
											/>
											<path
												d="M737,429.6c3.6,0,15-.2,18.3,1l5.2,3.8-21.2-.5c-2.5,0-3.7-1.4-3.5-3.9,.3-.4,.7-.5,1.2-.4Z"
												style={{ fill: "#13517a" }}
											/>
											<path
												d="M79.7,429.5c9.4,10.8,15.4,2.5,27.3,10.1,.2,.3,.3,.6,.2,.9-3.8,1-6.9-3.2-10.6-3.1-6-1.1-13.3,2.4-18.1-2.3-2-2-2.3-5.2,1.2-5.6h0Z"
												style={{ fill: "#1a5985" }}
											/>
											<path
												d="M720.1,435.1l-1.6-1.8c3.9-8.1,12.8-.3,1.6,1.8h0Z"
												style={{ fill: "#486a9a" }}
											/>
											<path
												d="M735.7,429.9c-.2,2.6,1,3.9,3.5,3.9l-7.7,1c-2.2,.4-2.6-2.1-4.9-.8,2.8-1.8,5.4-5.1,9.1-4.1h0Z"
												style={{ fill: "#041730" }}
											/>
											<path
												d="M443.6,430.8c19.8,.4,4.1-2,21.4,4.6,.2,.2,.2,.5,0,.7-7.6,.3-10.1-3.2-18.4,1-3.9-4-10.2,.3-14.1-4.3-.7-.6-1.7-1-3.1-1.2-.1-2,1.5-1,2.5-.7,0,0,11.7-.1,11.7-.1Z"
												style={{ fill: "#7ea0ce" }}
											/>
											<path
												d="M873.5,434.6c-2.7-1-18.7,2.5-14.1-3.2-5.3-.2-9.5,4.2-14.4,3.1-12.4-.1-56.7-.3-75.3-.3-6.1,.1-24.1-.3-30.5-.5l-7.7,1c-2.2,.4-2.6-2.1-4.9-.8-2.6,2.4-6.4,2.1-8.2-.8-49.6,0-99.9-1.9-149.4-2.4l-31.5,.4c66.4,3.5,135.7,7,202.5,6.8,8.8-.7,23.1,.1,32-.3,14.5,0,34.1-2.8,48.6,.4,7.1,1.7,13.4-3.8,20.1,.7,5.1,.9,8.8-.2,14.8-.5,9-.4,12.3,.4,18.1,.2,0-1.2,0-2.5-.1-3.8h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M863.7,430.8c3.1,.1,5.6,1.4,7.5,3.8-2.7-.6-15.8,2.5-11.8-3.1,1.4,0,2.8-.2,4.3-.7Z"
												style={{ fill: "#104470" }}
											/>
											<path
												d="M232,436.3l-15.3-.2v-.2c2-1.6,32.3-8.9,24.9-1.7-3.2,.4-6.5,.3-9.6,2.1h0Z"
												style={{ fill: "#0b2645" }}
											/>
											<path
												d="M573.5,445.6c-1.9-4.1-3.2-8.6-4.3-13l-31.8-1.4c-3.7-.2-3.9-.1-.8,.3-2.1-.4-3.2,.2-3.6,1.9-1.5,1.3-3.7,.7-3.1,3.9-.9,3.9-6.2,4.9-7.8,8.3h51.4Z"
												style={{ fill: "#3ba2d9" }}
											/>
											<path
												d="M429.5,431.6c1.4,.2,2.4,.6,3.1,1.2,3.9,4.4,10.3,.4,14.1,4.3,1.6,.8,22.1,3,18.1,.3-.7-.3-.9-.7-.5-1.2,2.9-.9,3.8,3,6.4,3.2,.4,0,7.1-.1,7.2,.1,0,.2,.1,.5,.2,.7l-1,1.3c-16.2-.9-33.5,.2-50.5-.5-.5,0-.6-.4-.5-1.2,3.2,.4,3.8-.6,1.7-3-.1-2.1,.5-3.8,1.7-5.2h0Z"
												style={{ fill: "#051126" }}
											/>
											<path
												d="M159.4,436.1c-5.1-.4-12,.6-16.8,.5-15.5-5,14.5-6.3,16.8-.5h0Z"
												style={{ fill: "#115385" }}
											/>
											<path
												d="M573.5,445.6h26.1c-2.9-4.4-5.9-8.3-10-12.2-10,0-13.7-1-20.4-.9,1.2,4.5,2.5,9,4.3,13.1Z"
												style={{ fill: "#113a5e" }}
											/>
											<path
												d="M599.6,445.6h85.9c-4-9.5-16.2-3.1-22.5-8.5-24.3-2.2-49-.5-73.3-3.7h0c4,3.9,7,7.8,9.9,12.2h0Z"
												style={{ fill: "#0f3354" }}
											/>
											<path
												d="M464.2,436.1c-.4,.5-.2,.9,.5,1.2,4.3,2.7-16.4,.5-18.1-.3,8-4,10.5-1,17.6-.9h0Z"
												style={{ fill: "#27486c" }}
											/>
											<path
												d="M870.5,438.6l3.2-.1c-1.1-.1-2.1,0-3.2,.1Z"
												style={{ fill: "#041831" }}
											/>
											<path
												d="M741.8,442.1c-.2,1.7,0,2.3-.3,3.5h44c-9-.4-18-.9-27-1.2-.7,.4-2.7-2.1-4.2-1.9-7.4,4.1-14.2-4.1-.1-4.4-4.8-.4-9.5-.4-14.2,.1,1.4,.9,2,2.2,1.8,3.9h0Z"
												style={{ fill: "#041831" }}
											/>
											<path
												d="M873.8,440.6c-3.5,0-6.4,.1-8.6,.2-1.9,.6-2,4.6-5.1,1.7-.8-1.4-2.4-1.4-3.8-1.5-2.2-1-4.4-1-6.6,0-.7,.8-1.5,.9-2.3,.4-15.2-7.8-13.6-2.5-26.9-3.4-9.4-2.3-14-1.1-22.6-1.4,.2,3.2,3.6,8.1-2.5,7.6-4.3,.7-7.6,1.1-10,1.1h88.4v-4.7h0Z"
												style={{ fill: "#041831" }}
											/>
											<path
												d="M78.5,435.1c7.4,5.9,17.7-1.3,26.4,5.6-8.8-2.9-20.8,5.2-26.4-5.6h0Z"
												style={{ fill: "#0a2e52" }}
											/>
											<path
												d="M216.7,435.9v.2c-1.9-.5-7.9,1.3-2.5,2.1-74.4,.9-66.1-2.4,2.5-2.3h0Z"
												style={{ fill: "#1d6996" }}
											/>
											<path
												d="M2.6,436.4v3c1.3-.2,2.6-.4,3.9-.8-1.2-1.1-2.5-1.8-3.9-2.2h0Z"
												style={{ fill: "#050d1d" }}
											/>
											<path
												d="M216.7,436.1c3.5,.1,16.8,.1,20,.5-1.8,.6-2.1,1.2-1,2l-21.5-.4c-5.4-.9,.7-2.6,2.5-2.1h0Z"
												style={{ fill: "#3381ad" }}
											/>
											<path
												d="M292.5,436.3c4.3,2.1,8.8,2.6,13.5,1.3-1.3,2.3,2.4,1.4,3.5,2.2l-71.8-1.2c-1.7,.2-4.5-.9-1-2.1,0,0,55.8-.2,55.8-.2h0Z"
												style={{ fill: "#6bc0ed" }}
											/>
											<path
												d="M307.5,437.1c-.5,.6-1,.9-1.5,.6-4.7,1.3-9.2,.8-13.5-1.3,5-.3,10-.1,15,.7Z"
												style={{ fill: "#2987bc" }}
											/>
											<path
												d="M392.7,436.5c8.5,.2,26.6,.4,35,.1,2.1,2.5,1.5,3.5-1.7,3-5-1-10-1.2-15-.7-11.3,.3-25.5,.1-36.6,.1-18.1,0-25.3-.2-47.6,.8-5.1,.4-22.9,1.3-20.8-2.2,.6,.3,1.1,.1,1.5-.6,23.3,.9,61.5-.6,85.2-.5h0Z"
												style={{ fill: "#e2f1f8" }}
											/>
											<path
												d="M798,436.9c.2,3.2,3.6,8.1-2.5,7.6,.3-2.2-2.9-1.8-3.6-1.8-3.1-1.2-14.9-.6-19.8-4.9l25.9-.9Z"
												style={{ fill: "#08294a" }}
											/>
											<path
												d="M672,439.7c4.6-.9,11.5,1.4,13.4,6h24.5c-8.9-2.5-25.7-1.6-29-8.2l-18-.1c2.6,1.9,5.7,2.7,9.1,2.3h0Z"
												style={{ fill: "#0d2a49" }}
											/>
											<path
												d="M685,441.1c13.3,4.1,40.2,5.2,55.1,4.5-10.3-2.6-20.9-4.5-31.6-5.4-2.3-.1,.6-1.9-.8-2.6l-26.8-.2c1.1,2.1,2.4,3.4,4.1,3.7h0Z"
												style={{ fill: "#269cc7" }}
											/>
											<path
												d="M707.7,437.6c4.6,.5,12.3-1.7,15.2,2.6,.5,.8,1.9,1.3,1.8,2.3-5.3-1.2-10.7-1.9-16.2-2.3-2.4-.1,.8-1.9-.8-2.6h0Z"
												style={{ fill: "#176e9e" }}
											/>
											<path
												d="M179.6,440.2c-1.3,1.6-2.3,3.4-3,5.4h56.9c3-2.5,8.8-7.1,2.2-7.1l-21.5-.4h-39.8c1.4,.3,5.2,.3,5.2,2.1h0Z"
												style={{ fill: "#051d36" }}
											/>
											<path
												d="M722.9,440.2c.5,.8,1.9,1.3,1.8,2.3,5.7,.4,11.2,2.5,16.8,3.1,.3-2.3,1-6-1.6-7.5h-19.2c.9,.2,1.6,.9,2.2,2.1h0Z"
												style={{ fill: "#104470" }}
											/>
											<path
												d="M772,437.9c3.7,4.9,24.3,3.1,23.4,6.7-13.8,2.3-23.7-.3-37-.2-.7,0-1.8-.7-3.4-1.9-1.6,0-3.3,1.9-5.1,1.1-9.5-2.3-.4-5.7,4.2-5.5l17.9-.2h0Z"
												style={{ fill: "#105d8d" }}
											/>
											<path
												d="M873.8,440.6c0-.7-.1-1.5-.1-2.2-5.9,.3-19-1.2-26.4,.8,1.4-.1,2.2,.5,2.5,1.8,2.2-1,4.4-1,6.6,0,1.4,.2,3.1-.1,3.8,1.5,1.2-.6,2.5-.7,3.8-.2,1.2-3.1,5.9-1.1,9.8-1.7h0Z"
												style={{ fill: "#0b2645" }}
											/>
											<path
												d="M149.5,438.6c-.7,.1-1.2,.5-1.5,1.2-.5-1.4-.1-1.8,1.5-1.2Z"
												style={{ fill: "#486691" }}
											/>
											<path
												d="M149.5,438.6c1.5,1.4,1,2.2-1.5,2.3-.7-1,.5-2.2,1.5-2.3h0Z"
												style={{ fill: "#a6a8ce" }}
											/>
											<path
												d="M285,445.6c3.5-1.1,5.5-4.6,9.3-4.5,6.9,.4,13.9,.2,20.8-.5,.3-1.6-75.3-1.6-77.4-2,3.1,2.4-1.9,4.5-4.2,7h51.5Z"
												style={{ fill: "#10365c" }}
											/>
											<path
												d="M840.7,438.8c2,.6,8.7-.7,9,2.3-1.7,1.9-6.4-2-9-2.3h0Z"
												style={{ fill: "#35577e" }}
											/>
											<path
												d="M346.7,443.1c1.5,.3,.1,1.6-.1,2.5h25.4c1.2-2.2,3-4.1,2.3-6.6h-24.1c-.2,.7-4,1.2-1.8,1.4,3,.2-2.7,1.9-1.7,2.7h0Z"
												style={{ fill: "#10547f" }}
											/>
											<path
												d="M372,445.6h3.7c2.6-3,3.2-5.5,7.5-6.7l-8.9,.1c.8,2.2-1.1,4.5-2.3,6.6h0Z"
												style={{ fill: "#15629a" }}
											/>
											<path
												d="M393,445.6c.7-3,0-4.3,3.9-5.3,2.6-2.4-11.9-.2-13.6-1.3-4.4,1.2-4.7,3.7-7.5,6.7l17.2-.1h0Z"
												style={{ fill: "#197fb6" }}
											/>
											<path
												d="M409.6,445.6l-.7-4.8c-.1-.7,1.6-1.6,2-2l-14.2,.3c1.2,.1,.2,1.6-.7,1.6-2.6-.2-2.7,3.8-3,4.9h16.6Z"
												style={{ fill: "#1e8bc4" }}
											/>
											<path
												d="M136.5,439.9v.7c-9.8,.6-19.4-.2-29.2,0,.1-.3,0-.6-.2-.9,8.9-.2,15.9-1.5,29.4,.2h0Z"
												style={{ fill: "#102b4a" }}
											/>
											<path
												d="M346.6,445.6c2.6-4.2-3.1-1,2.3-4.5,.8-.5,.6-.7-.4-.8-2.2-.2,1.5-.7,1.8-1.4-1,0-29,.7-35.2,1.6-6.9,.7-13.8,.9-20.8,.5-3.7-.1-5.9,3.4-9.3,4.5h61.6v.1Z"
												style={{ fill: "#0b4d77" }}
											/>
											<path
												d="M479.9,440.3l-2-.3c-.2-.2-.3-.4-.2-.7,1.1,.1,6.7-.8,6.2,.3-1.3,.4-2.7,.4-4,.7h0Z"
												style={{ fill: "#1a5985" }}
											/>
											<path
												d="M136.5,439.9c3,.5,8-1.1,10.2,.7-3.4,1.1-6.8,1.1-10.2,0v-.7h0Z"
												style={{ fill: "#afb9d2" }}
											/>
											<path
												d="M478,440.1l2,.3c-.6,2.7-5.2,2.9-2-.3Z"
												style={{ fill: "#d8e3eb" }}
											/>
											<path
												d="M852,442.5c.2-1,3.8-.3,3.5,.7-.1,1.1-3.7,.3-3.5-.7Z"
												style={{ fill: "#c2d5e3" }}
											/>
											<path
												d="M863.9,442.3c-1.1,1.5-2.4,1.6-3.8,.2,1.3-.5,2.5-.6,3.8-.2Z"
												style={{ fill: "#d8e3eb" }}
											/>
											<path
												d="M2.6,445.6H24.1c-3-5.7-16.2-1.9-21.6-2.5l.1,2.5h0Z"
												style={{ fill: "#061f39" }}
											/>
											<path
												d="M62.5,445.6c.1-1.4-21.2-2.6-22.2-2.9-1.6-.2-1.3,1.9-1.2,2.9h23.4Z"
												style={{ fill: "#0a213e" }}
											/>
											<path
												d="M90.8,445.6c3.9-.4,7.9,.6,11.8-.9-4-2.3-11.1-.2-16.8-1.6-2.1,1-4.8,1.8-8.2,2.5h13.2Z"
												style={{ fill: "#123c61" }}
											/>
										</g>
										<g id="monster">
											<g style={{ clipPath: "url(#clippath)" }}>
												<g
													id="monsterbody"
													style={{ animation: "monsterAnimation 24s linear" }}
												>
													<path
														d="M458.7,356.4c1.3,1,2.8,2.4,1.4,4-1,.6-1.7,.9-2,.9-1.9,.1-3.9,0-5.8-.2-.1,0-.2,.1-.2,.1-2.4,6.3-2.9,12.5-2.9,19.2,0,3.9,.5,8.9,2.1,12.2,.4,.9,.6,1.5,.7,1.8h-.2c-.2,0-.3,.1-.3,.1l-7.7-.1v-1.2l1-12.9,.7-5.9c.6-4.8,1.4-9.4,2.6-13.7,.4-1.4,1-2.8,1.9-4.2,2.2-2.5,6-1.9,8.7-.1Zm-4.6,2.7c.8-.2,.9-.5,.1-1-.8-.3-1.2,0-1.2,.9,0,.1,.1,.2,.1,.3,.3,.2,.7,.1,1-.2Z"
														style={{ fill: "#689367" }}
													/>
													<path
														d="M454.2,358.2c-.2,.3-.3,.6-.1,1-.3,.3-.6,.4-.9,.2-.1-.1-.1-.2-.1-.3-.2-.9,.2-1.2,1.1-.9Z"
														style={{ fill: "#507650" }}
													/>
													<path d="M454.2,358.2c.8,.4,.8,.8-.1,1-.2-.4-.2-.7,.1-1Z" />
													<path
														d="M460.1,360.3c-1.3,1.9-5.3,1.3-7.3,1.1-.1,0-.2,0-.2,.1-1.3,3.7-2,7.4-2.1,11.4-.3,3.6-.3,7.2,.1,10.8,.3,3.6,1,7.1,2,10.5,.1,.3-.1,.4-.4,.3-.1-.1-.2-.1-.3-.1,0-.3-.3-.9-.7-1.8-1.6-3.4-2.1-8.4-2.1-12.2,0-6.7,.5-12.9,2.9-19.2,0-.1,.1-.2,.2-.1,1.9,.2,3.9,.2,5.8,.2,.4,0,1.1-.4,2.1-1Z"
														style={{ fill: "#4c754d" }}
													/>
													<path
														d="M380.6,390.6c1.3,1.2,2.5,2.6,3.6,4h-3.2c-3.8-3.4-6.2-5.5-7-6.2-2.6-2-5.5-3.1-8.8-3.4-.2,0-.7,.1-.3,.4-5.1-.1-10.1,1.5-14.9,3.2-.1,0-.6,0-.1-.2,4.3-1.8,8.8-3.2,13.4-4.2,7.1-1.4,12.4,1.8,17.3,6.4Z"
														style={{ fill: "#689367" }}
													/>
													<path
														d="M432,387c-.2,.2-.2,.3,0,.5,1.3,.8,2.3,2,3,3.4,.3,.6,.1,1.1-.5,1.5-.5,.3-1,.5-1.6,.6-7,1.3-14.3,1.1-21,1.2-.3,0-3.9-.4-3.1,.4l-4.2,.1-2.5-.1c-.1,0-.1-.1-.1-.2l1.3-1.6c3.4-3.7,7.3-6.9,12.2-8.2,.1,0,.2,0,.3,.1,.5,.5,.5,.8,.7-.2,0-.2,.2-.3,.4-.4,5.4-.6,10.5-.1,15.1,2.9Z"
														style={{ fill: "#689367" }}
													/>
													<path
														d="M381,394.6l-3.1-.2c-2.8-4.6-7.3-8.7-13-8.9-.4-.3,.1-.4,.3-.4,3.3,.2,6.2,1.4,8.8,3.4,.8,.6,3.2,2.6,7,6.1Z"
														style={{ fill: "#4c754d" }}
													/>
													<path
														d="M432,387c2.7,1.8,4.7,4.2,5.8,7.2l.1,.2h-29c-.8-.8,2.9-.4,3.1-.4,6.7-.1,14,.1,21-1.2,.6-.1,1.1-.3,1.6-.6,.6-.4,.8-.9,.5-1.5-.7-1.4-1.7-2.5-3-3.4-.3,.1-.3-.1-.1-.3Z"
														style={{ fill: "#507650" }}
													/>
													<g id="shadow">
														<path
															d="M458.2,415.2c6-3.9-19-.3-6.8-20.5-.5,.4-8.9-1-8.2,.6,1.2,8.5,2.3,25,15,19.9Zm-4.6-1.5c2,.3-1.5,1.1-1.1,0,.2-.3,.8-.2,1.1,0Z"
															style={{ fill: "#10365c" }}
														/>
														<path
															d="M453.7,414.2c-.3-.5-.3-.9-1-.6-.5,.4,.1,.8,1,.6Z"
															style={{ fill: "#10365c" }}
														/>
														<path
															d="M453.7,414.2c.8-.2,.8-.4-.1-.5-.2,.2-.1,.3,.1,.5Z"
															style={{ fill: "#10365c" }}
														/>
														<path
															d="M459.6,413.1c-11.9,1-10.6-10.7-7.9-18.5-6.3,7.2-3.3,20.4,7.9,18.5Z"
															style={{ fill: "#10365c" }}
														/>
														<path
															d="M380.2,396.7c9.1-5.3-21.5,7.3-30.7,1.1,8,2.5,22.8,4.2,30.7-1.1Z"
															style={{ fill: "#10365c" }}
														/>
														<path
															d="M431.6,398.7c7.4-6.9-23.7-2.6-29.9-4,7.3,5.9,20.6,7.2,29.9,4Z"
															style={{ fill: "#10365c" }}
														/>
														<path
															d="M380.5,394.6c-5.6,0-8.5,5.4-16.1,4.9,6.5,.5,8.7-1.5,16.1-4.9Z"
															style={{ fill: "#10365c" }}
														/>
														<path
															d="M431.6,398.7c20.4-7.7-22.2-2.6-23.2-4,4.1,1.4,32-2.5,23.2,4Z"
															style={{ fill: "#10365c" }}
														/>
													</g>
												</g>
											</g>
										</g>
										<g
											id="biplane"
											style={{ animation: "biplaneAnimation 12s linear" }}
										>
											<path
												d="M863.78,145c-.12-.01-.23-.02-.35-.02-2.8-.21-5.76-.2-8.84-.06-1.3,.05-2.63,.13-3.97,.24-6.65,.5-13.66,1.44-20.42,2.05-2.45,.23-4.86,.41-7.22,.5-.27,.02-.55,.03-.82,.04-2.53,.09-4.98,.09-7.32-.07-.88-.05-1.75-.12-2.59-.22h0c.6-.19,1.21-.33,1.83-.42h.01c3.04-.46,6.35,.04,9.4-.23,.98,.09,1.96,.13,2.94,.14,7.08,.12,14.22-1.43,21.35-2.26,5.35-.64,10.7-.87,16,.31Z"
												style={{ fill: "#fefdf7" }}
											/>
											<path
												d="M822.95,147.92c-3.99-.08-7.07,.15-10.62-.13,.82,.03,1.65-.03,2.51-.11,2.17-.18,4.52-.48,7.32,.07,.26,.05,.52,.1,.79,.17Z"
												style={{ fill: "#eb8807" }}
											/>
											<path
												d="M811.52,158.03h-.07s.08,.06,.18,.09c-.05-.03-.09-.06-.11-.09Zm3.31,.77c1.56,.26,3.25,.48,4.16,.49-.93-.13-2.61-.29-4.16-.49Zm.52-3.3s-.07-.03-.09-.05c-.04,.95,.04,1.52,.12,1.59-.04-.36-.05-.89-.03-1.54Zm.02-.62c.03-.64,.09-1.35,.16-2.09-.13,.75-.21,1.47-.16,2.09Zm.01,2.2s-.03,.01-.05,.01c.03,.43,.11,.51,.21,.44-.07,0-.12-.16-.16-.45Zm.44-4.41c.22-.48,.3-1.15,.35-1.85-.1,.45-.23,1.12-.35,1.85Zm.05,4.1c-.06,.2-.1,.35-.14,.47,.09-.16,.17-.35,.23-.45-.04,0-.07-.01-.09-.02Zm.13-.61c.39-.79,.56-2.71,.67-4.41-.26,2.06-.48,3.49-.67,4.41Zm.58-7.74s.09-.01,.12,.01c-.04-.06-.08-.06-.12-.01Zm.64,.28c.01,.06,.02,.11,.04,.17,0-.02,.02-.04,.04-.05-.03-.04-.06-.08-.08-.12Zm1.07-.55c.32,0,.73,.01,1.22,.02,.25,0,.5,0,.75-.01-.66-.01-1.38-.02-1.97-.01Zm1.27,22.41c.08,.04,.17,.08,.26,.11,.35,.05,.7,.05,1.04,0h.01c.19-.07,.37-.17,.56-.32-.56,.32-1.23,.42-1.87,.21Zm1.66-2.12c-.06,.04-.12,.06-.18,.07,.07,0,.16-.01,.25-.03-.02-.01-.05-.02-.07-.04Zm-.05,.31c.16,.02,.34-.09,.53-.26-.18,.14-.38,.25-.53,.26Zm.58-3.16s.07,.03,.11,.05c.21-.22,1.17-1.8,1.98-2.98-.65,.81-1.45,1.9-2.09,2.93Zm.31-14.14c-.02,.13-.03,.26-.04,.39,.03-.09,.05-.19,.07-.28-.01-.03-.02-.07-.03-.11Zm-.03,9.54s.08,.02,.12,.03v-.11s-.08,.05-.12,.08Zm.16-9.23s.03,.08,.06,.11v-.04s-.05-.04-.06-.07Zm-.35,.4c.09,.1,.24,.12,.48,.02-.21-.06-.39-.07-.48-.02Zm-.99-3.97c1.46,.05,2.17,.14-.63,.09,.61,.17,2.04-.03,2.13,0,.18-.16-.76-.12-1.5-.09Zm1.71,.38c-.05,.21-.1,.42-.14,.63,.03-.08,.07-.15,.1-.21,0,0,0,0,0-.01,.01-.03,.03-.05,.05-.08,.02-.05,.06-.1,.08-.14-.02-.07-.05-.14-.1-.19Zm.26,19.07c.02,.07,.01,.17-.01,.31,.03-.13,.04-.24,.01-.31Zm-.05-19.03s0,.03,0,.05c.03-.03,.07-.04,.1-.04-.03-.01-.07-.01-.11-.01Zm.06,3.1s.03,0,.05-.02c-.01-.02-.01-.05,0-.1-.02,.04-.03,.08-.05,.12Zm.22-3.01c.07,.08,.14,.23,.19,.45-.02-.21-.08-.37-.19-.45Zm.01,1.95c.11-.49,.22-1.05,.18-1.46-.09,.54-.12,1.03-.18,1.46Zm-.09-2.42c.13-.02,.38-.04,.7-.06-.68-.01-.84,.02-.7,.06Zm.6,11.76c.28-.28,.41-.49,.5-.64-.17,.21-.33,.43-.5,.64Zm.54,5.88c.43-.42,.84-.84,1.1-1.27-.36,.4-.73,.84-1.1,1.27Zm-.27-6.72h0c.38-.46,.56-1.01,.67-1.58-.17,.57-.39,1.1-.68,1.58Zm-.35-12.34c-3.05,.27-6.36-.23-9.4,.23,4.12,.34,8.23,.23,12.34-.09-.98-.01-1.96-.05-2.94-.14Zm.84,12.21c-.05,.05-.09,.11-.14,.17,.06-.07,.14-.11,.27-.13-.06,0-.11-.02-.13-.04Zm.25-.74c-.12,.1-.19,.27-.19,.51,.11,0,.26,.02,.44,.04-.23-.1-.28-.25-.25-.55Zm-1.61,2.58c.37,.1,1.07,.18,1.77,.15-.56,0-1.16-.09-1.77-.15Zm1.74-4.14c-.02,.17-.01,.33,0,.46,.03-.31,.07-.68,.08-1.13-.03,.23-.06,.45-.09,.67Zm.33,4.71h0s.1,.01,.1,.01c-.03,0-.07-.01-.1-.01Zm.4-9.36c1.03,.38,1.74,1.2,2.11,2.24-.33-1.52-1.08-2.07-2.11-2.24Zm.17,7.07c.35,.05,.79,.1,1.36,.17-.31-.12-.85-.15-1.36-.17Zm.52,1.64c.19-.08,.35-.18,.44-.31-.14,.13-.29,.23-.44,.31Zm.09,.81c.43,.12,.8,.3,.94,.56-.06-.25-.36-.43-.94-.56Zm.11-.64c.13-.1,.24-.21,.33-.31-.19,.13-.38,.29-.33,.31Zm0,0s.05,.02,.12,0h-.12Zm.33,2.19c-.34,.27-.71,.64-1.11,1.08v.02c.5-.45,.93-.84,1.21-1.18-.03,.03-.06,.05-.1,.08Zm-3.33-14.84c.79,.1,2.53,.22,3.55,.13-1.05,.04-2.76-.11-3.55-.13Zm3.83,11.14c-.06,.19-.12,.35-.2,.49,.26-.22,.3-.38,.2-.49Zm.1,1.97c.09,.86,.46,2.44,.8,3.47-.28-1.08-.61-2.67-.8-3.47Zm.04-2.5c-.03,.09-.08,.18-.12,.27,.12-.01,.21-.08,.21-.26-.03-.01-.06-.01-.09-.01Zm2.34,1.84c-.45-.15-1.09-.13-2.03,.08-.05,.02-.11,.03-.17,.05h-.01c-.06,0-.11,.03-.17,.05-.05,0-.09,.02-.14,.03,0,0,.01,.01,.01,.02,.04,.01,.08,.01,.12,.01,.07,0,.14,.01,.21,.01h.04c.87,.04,1.77,.07,2.67,.09-.14-.15-.31-.27-.53-.34Zm-2.17-7.35c.05,.47,.18,.82,.39,1.09-.09-.38-.21-.74-.39-1.09Zm-.81-1.32s.02,.04,.03,.05c.4-.04,.76-.06,1.09-.06-.35-.06-.73-.05-1.12,0Zm.53,7.86c.18-.22,.36-.4,.66-.49-.33,.03-.44,.12-.66,.49Zm.44-11.83l-1.13,.02c.53,0,.96,0,1.14,.03,0-.02,0-.04-.01-.05Zm.22,8.63c-.05,.57-.17,1.15-.36,1.71-.05,.13-.1,.26-.15,.39,.11-.08,.18-.21,.19-.39,.29-.72,.39-1.28,.32-1.71Zm.2-1.07s-.04,.07,.01,.11c0-.04,0-.08-.01-.11Zm0-7.57c-.01,.08-.02,.16-.03,.24,.02-.04,.03-.08,.05-.11h.01c.06-.09,.16-.15,.29-.15-.08-.02-.19-.02-.32,.02Zm.02,7.97c0,.34-.01,.76-.04,1.17,.05-.39,.06-.78,.04-1.17Zm.03,3.28s.05,.03,.08,.04c.05,0,.1,0,.15,0-.09-.02-.16-.02-.23-.03Zm.62-7.54c-.02-.12-.07-.28-.13-.46,.05,.19,.11,.38,.15,.57-.01-.04-.01-.08-.02-.11Zm0-3.07c0,.56,.35,1.39,.5,2.06-.09-.68-.37-1.53-.5-2.06Zm-.14,17.13c.36-.07,.62-.19,.8-.36-.3,.07-.58,.18-.8,.36Zm.17-13.95c.14,.01,.25-.03,.33-.1-.08,.05-.19,.09-.33,.1Zm.45-3.54c.63,.1,1.59-.01,2.45-.12-.82,.07-1.63,.11-2.45,.12Zm1.18,12.72c-.07-.01-.13-.01-.2-.01,.1,.11,.18,.24,.24,.39-.03-.15-.04-.28-.04-.38Zm-.19,4.27s.1,.05,.15,.07c.01,0,.03,0,.04,.01,.05-.01,.09,0,.14,0,.11,0,.18-.05,.24-.14-.18,.02-.37,.04-.57,.06Zm.59-16.56c.08,.19,.31,.52,.56,.87-.21-.34-.42-.68-.56-.87Zm-.07,14.25c.05,.56,.07,1.21,.16,1.9,.07-.46-.03-1.19-.16-1.9Zm-2.22-15.26c2.46,.04,4.65,.08,6.91-.66-2.3,.25-4.6,.49-6.91,.66Zm3.35,4.79c-.28,.11-.65,.14-1.14,.08,.52,.26,.74,.42,1.09,0,.04-.03,.06-.06,.09-.1,.09-.11,.18-.25,.29-.43-.12,.15-.24,.29-.33,.45Zm.08-3.13c.24,.41,.46,.86,.69,1.1-.27-.47-.5-.83-.69-1.1Zm-.03,2.96c.13-.13,.25-.26,.35-.4,.36-.58,.85-1.48,1.61-2.86-.71,1.02-1.18,2.29-1.96,3.26Zm.31-1.54c.05,.08,.08,.14,.09,.17,.04-.01,.06-.03,.06-.06-.05-.02-.09-.06-.15-.11Zm.41-.32c0,.29-.06,.42-.15,.44l.03,.03c.2-.13,.24-.29,.12-.47Zm.45,2.76s-.09,0-.12,.02c.04-.01,.08-.01,.13-.01,0,0-.01,0-.01,0Zm.56-1.09c.2-.2,.48-.43,.61-.57-.2,.12-.41,.31-.61,.57Zm-.34-4.28c.24,.08,.49,.12,.75,.14-.25-.04-.5-.08-.75-.14Zm1.32,.34c-.19,.17-.37,.36-.53,.57,.09-.07,.18-.13,.25-.17,0,0,0-.01,.01-.01,1.29-.85,.26,.97-.82,2.65,1.04-1.41,2.08-2.92,1.09-3.04Zm1.12,.01c.08,.02,.15,.05,.23,.08,.01-.02,.01-.04,.01-.06-.08,0-.16-.01-.24-.02Zm.72,5.55l-1.75-.12c.64,.05,1.26,.1,1.71,.13,.12,.01,.23,.02,.32,.02-.08-.04-.17-.05-.28-.03Zm.66-.25s-.02,.02-.02,.03c.03-.02,.1-.02,.2-.02-.11,0-.17,0-.18-.01Zm.3-.55c.19-.26,.33-.47,.46-.63-.28,.28-.42,.49-.46,.63Zm.12-.58s-.03,.04-.04,.05c-.22,.31-.42,.59-.57,.84l.64-.85c.05-.1,.1-.2,.17-.31-.07,.09-.14,.18-.2,.27Zm.66-.41c.13-.09,.22-.08,.33,.01-.13-.21-.24-.13-.33-.01Zm-1.53-3.7c1.17,.16,2.59,.04,3.96-.11-1.33,.11-2.65,.17-3.96,.11Zm2.05,3.35c-.12-.04-.18-.06-.06,.09l.03,.03c-.03-.07-.03-.11,.03-.12Zm-.39,1.62c.11,0,.24,0,.37-.02-.03-.02-.18-.01-.37,.02Zm.37-3.29c.05-.08,.1-.17,.13-.24-.07,.12-.12,.2-.13,.24Zm.19-.08c.12-.09,.24-.27,.36-.46-.11,.14-.23,.3-.36,.46Zm-.55,3.95c.5-.01,1.01,0,1.31,.07-.11-.13-.71-.1-1.31-.07Zm1.59-.23s-.02,.03-.07,.05c.07-.01,.1-.02,.09-.04,0-.01-.01-.01-.02-.01Zm-.2-1.75c.43,.1,.99,.22,1.7,.3-.33-.1-1.12-.21-1.7-.3Zm.32,1.63c.06,.04,.1,.03,.12-.04-.04,.02-.08,.03-.12,.04Zm-.35-4.01c.29-.4,.47-.74,.44-.95-.03,.24-.2,.57-.44,.95Zm.52,4.33l.76-.64c-.36,.24-.61,.44-.76,.64Zm-4.67-6.76c-.21,.22-.47,.33-.79,.36,3.45-.53,7.2-.46,10.5-1.47-3.21,.35-6.46,.76-9.71,1.11Zm5.43,6.11h.01c.2-.26,.41-.45,.61-.58-.25,.11-.47,.3-.62,.58Zm.56-.95c-.03,.08-.22,.3-.45,.53,.14-.13,.3-.29,.49-.47,.02-.02,.01-.04-.04-.06Zm1.37-4.26h.06s.04,0,.05-.02c-.04,.01-.07,.02-.11,.02Zm.29,4.55c.46,.16,.88,.38,1.2,.32-.33-.11-.75-.24-1.2-.32Zm1.09-4.71c.38,.01,.76,0,1.01-.12-.34,.04-.67,.08-1.01,.12Zm.51,4.74c.16-.26,.27-.74,.33-1.54-.12,.51-.23,1.02-.33,1.54Zm.67-4.88s0,.03-.01,.04c.03-.01,.06-.03,.09-.05-.03,0-.05,.01-.08,.01Zm.85-1.33l-2.47,.32s-.01,0-.02,.01c.83-.11,1.66-.22,2.48-.32h.01c.48-.07,.96-.13,1.43-.19l-1.43,.18Zm-.86-.4c-.11,.08-.2,.18-.36,.23,2.89-.32,5.21-.62,6.89-.87-2.16,.17-4.34,.39-6.53,.64Zm10.36-.88c-.92,.07-1.82,.17-2.58,.33,1.6-.2,3.21-.35,4.82-.41-.74,.01-1.49,.03-2.24,.08Zm-10.35,2.61s0,.03-.01,.04c.03-.01,.06-.03,.09-.05-.03,0-.05,.01-.08,.01Zm.85-1.33h0c.48-.06,.96-.12,1.43-.18l-1.43,.18Zm-.86-.4c-.11,.08-.2,.18-.36,.23,2.89-.32,5.21-.62,6.89-.87-2.16,.17-4.34,.39-6.53,.64Zm10.36-.88c-.92,.07-1.82,.17-2.58,.33,1.6-.2,3.21-.35,4.82-.41-.74,.01-1.49,.03-2.24,.08Zm-18.53,16.05s-.09,.01-.13,.01c-1.53,.01-3.04,0-4.52-.03-.17,0-.34,0-.5,0-.45-.01-.9-.01-1.35-.02,.34,.39,2.55,.44,2.98,.2,1.13,.11,2.36,.1,3.62,.02,.7-.04,1.41-.11,2.12-.18-.74,.01-1.48,.02-2.22,.01Zm8.18-13.44s0,.03-.01,.04c.03-.01,.06-.03,.09-.05-.03,0-.05,.01-.08,.01Zm2-.02c.5-.02,1.19-.14,1.77-.24-.6,.06-1.32,.13-1.77,.24Zm-1.15-1.31h0c.48-.06,.96-.12,1.43-.18l-1.43,.18Zm-.86-.4c-.11,.08-.2,.18-.36,.23,2.89-.32,5.21-.62,6.89-.87-2.16,.17-4.34,.39-6.53,.64Zm3.75,11.98s-.1,.01-.14,.01c.48,.12,1.05,.1,1.59-.04-.57,.09-1.13,.11-1.45,.03Zm1.76-10.75c.61,0,1.44-.06,2.13-.16-.68,.06-1.5,.09-2.13,.16Zm.39,10.59h-.01s-.07,.05-.1,.08c.83-.16,.9-.1,1.16-.48-.25,.16-.63,.29-1.05,.4Zm.57-1.39s.05,.02,.07,.03c.07,0,.14,0,.22-.01-.14,0-.24,0-.29-.02Zm.45,1.42c0,.07,.04,.11,.16,.1-.08-.02-.15-.05-.16-.1Zm.06-.16s.03-.04,.05-.06c.09-.15,.17-.27,.23-.36-.12,.13-.23,.29-.28,.42Zm-.3-1.17c.35,.14,.53,.29,.57,.44,.11-.38-.18-.42-.57-.44Zm.47,1.44c.2,.05,.33,.04,.42-.02-.12,.03-.29,.04-.42,.02Zm.42-.99s.01,0,.02,.01t0-.02s-.01,0-.02,0Zm.14,.28c.01,.11,.03,.25,.04,.41,.02-.13,0-.27-.04-.41Zm-.24-11.57c.4,.06,.85,.04,1.32-.02-.48-.02-1.02-.04-1.32,.02Zm1.12,12.28c.08-.14,.15-.36,.2-.62-.15,.36-.3,.53-.2,.62Zm.08-1.32s0,.02-.02,.03h0s.01,.02,0,.03c0,.03-.01,.06-.02,.09-.24,.81-.47,1.15-.63,.64h-.01c-.02-.08-.04-.16-.06-.26,.02,.17,.04,.33,.05,.41,.04,1.16,.66-.29,.7-.71-.01-.08-.01-.15-.01-.23Zm-.65-10.7c.38-.01,.81-.01,1.06,.06-.24-.09-.67-.08-1.06-.06Zm1.43,10.09s-.02,.01-.03,.03c.03-.02,.07-.03,.11-.03h-.08Zm0-1.24c.01,.07,.08,.15,.22,.29-.09-.11-.17-.21-.22-.29Zm.04,.3c.17,.18,.37,.38,.48,.55-.2-.34-.36-.51-.48-.55Zm.38-6.03s-.01,.01,0,.02c-.01,.05-.01,.1-.02,.15,.02-.09,.03-.18,.05-.26-.01,.03-.02,.06-.03,.09Zm.04,6.92c.1-.01,.18-.04,.21-.09-.05-.09-.1-.18-.15-.25,.09,.16,.1,.27-.06,.34Zm-.18-10.27c.4,.08,1.18,.12,2.09,.12-.74-.04-1.47-.09-2.09-.12Zm.46,.49c-.05,.1-.04,.25,.05,.46,.05-.06,.1-.1,.16-.15-.11-.06-.18-.16-.21-.31Zm-.32,14.72c.23,.04,.5,.08,.78,.11-.27-.04-.54-.08-.78-.11Zm.2-2.78c.31,.19,.54,.04,.61-.22-.1,.12-.32,.2-.61,.22Zm.3-12.1c.32,.01,.69,.02,1.08,.02-.4-.06-.83-.12-1.08-.02Zm.64,8.33c-.09,.04-.09,.08-.02,.13-.03-.04-.02-.08,.02-.13Zm-.65-9.25c-.92,.07-1.82,.17-2.58,.33,1.6-.2,3.21-.35,4.82-.41-.74,.01-1.49,.03-2.24,.08Zm.41,10.78c.22,0,.5,0,.82,0-.31-.01-.59-.02-.82,0Zm.95,4.68c.38,.03,.71,.12,.93,.32-.16-.25-.52-.32-.93-.32Zm.2-5.91c.74,.1,1.72,.17,2.3,.22-.63-.09-1.66-.16-2.3-.22Zm.61-8.26c.47-.05,.93-.13,1.27-.22-.35,.02-.8,.12-1.27,.22Zm.17,7.3c.5-.5,1.21-1.15,1.62-1.49-.5,.28-1.16,.96-1.62,1.49Zm-.05,2.81c.08,.05,.17,.06,.27,.02-.09-.01-.18-.01-.27-.02Zm.24,4.73s.01,.02,.01,.03h.06s-.04-.03-.07-.03Zm.01-.47c.1,.19,.3,.48,.5,.76-.13-.24-.29-.5-.5-.76Zm.61,1.94c-.11,.23-.1,.4-.03,.52-.05-.12-.05-.29,.03-.52Zm-3.76-6.53s.06,.02,.1,.02c0,0,.01,0,.02,0,1.64-.11,3.34-.2,5.05-.21-2.17-.09-4.16-.07-5.17,.19Zm.78,.99c-.1-.16-.27-.31-.5-.42,.23,.19,.4,.35,.51,.5,.05,.05,.09,.11,.11,.16-.02-.08-.06-.16-.12-.24Zm3.22-6.23s.05-.01,.09-.01c-.05-.01-.09-.01-.09,.01Zm-.14,9.53c.17,0,.3,.02,.37,.04-.07-.08-.18-.06-.37-.04Zm.23,1.84s0,.06,0,.08c.02-.02,.03-.04,.03-.06-.01,0-.02,0-.04-.02Zm-.4-16.19c.16,0,.31,.02,.45,.03h.01s.08-.02,.12-.03h-.58Zm.58,14.48c0,.21,0,.4-.01,.57,.01-.01,.03-.01,.04-.02,0-.28,0-.45-.03-.55Zm-.18-9.5s-.04-.02-.05-.04c.09,.1,.28,.24,.47,.35-.11-.09-.24-.21-.42-.31Zm.3,12.25h-.01c-.14,.09-.3,.11-.42,.08,.2,.1,.45,.06,.45-.04h0c.05,0,.1-.09,.14-.19-.05,.06-.11,.11-.17,.15Zm-.52-4.4c.11,.04,.2,.06,.28,.11,.02,0,.03,.01,.04,.01h.02s.01,0,.02,.02c.07,0,.13-.01,.19-.01l-.55-.13Zm.6,3.54s.03,.09,.03,.13c.01-.05,.01-.1,.01-.14-.01,0-.03,0-.04,.01Zm.06-.02c.05,.07,.09,.13,.11,.2,0-.12-.04-.21-.11-.2Zm-.36-7.88c.38,.06,.61,.1,.76,.03-.16,0-.44-.01-.76-.03Zm.63,2.94s-.14-.03-.33-.05c.17,.06,.29,.15,.35,.29,0-.07-.01-.15-.02-.24Zm-.14,2.18s-.01,.01-.01,.01c.07-.01,.15-.02,.22-.03-.07,.01-.14,.01-.21,.02Zm-2.03-9.74s.09,.1,.14,.14c.98,.95,1.87,.86,2.38,.53-.49,.2-1.31,.08-2.52-.67Zm2.23,1.62s.07,.02,.08,0t.01-.02s-.06,.02-.09,.02Zm.12,3.66c-.03,.21-.17,.36-.39,.46,.27-.1,.42-.24,.4-.46h-.01Zm.06-.23s-.03-.03-.08-.05c.02,.07,.03,.14,.03,.2,.07-.03,.09-.08,.05-.15Zm.05-.64c.06-.18,.08-.47,.1-.92-.03,.32-.09,.64-.1,.92Zm-.12-2.31c.19,.21,.26,.46,.26,.74,.08-.54-.04-.74-.26-.74Zm.26-.49s.06,.03,.08,.07c0-.06-.02-.1-.08-.07Zm.02,.54s.08,0,.07-.08c-.02,.04-.04,.07-.07,.08Zm.03-3.52c.13,.02,.26,.06,.38,.11-.84-.86-1.75-.66-2.59,.06,.94-.75,1.71-.62,2.18-.18h.01s0,.01-.01,.01c.14,.12,.25,.27,.33,.44-.04-.21-.15-.35-.3-.44Zm.11,5.8c0,.17,.01,.28,.05,.28,.01,.01,.05,.01,.11,.02-.1-.05-.15-.14-.16-.3Zm-.86-8.49c.35,.1,1.21,.05,2.06-.06-.67,.05-1.36,.06-2.06,.06Zm1.2,4.77c.05-.32,.06-.65,.05-.96-.1,.68-.19,1-.05,.96Zm-.37,4.43c-.18,.1-.2,.3,.04,.66,.1,0,.24,.01,.4,.01-.38-.1-.58-.3-.44-.67Zm.41-4.44c.11-.07,.3-.27,.62-.59-.27,.24-.52,.45-.62,.59Zm.13-2.27c.05-.08,.11-.13,.2-.15-.17-.03-.26,.01-.2,.15Zm-.31,2.98c-.04,.14-.06,.26-.06,.37,.03-.16,.09-.28,.19-.37,.12-.13,.27-.2,.49-.23-.38,0-.63,.05-.62,.23Zm.27,3.64c.44,.06,1.09,.17,1.62,.21-.49-.08-1.14-.21-1.62-.21Zm.43-4.55c-.29,.28-.46,.52-.25,.5,.09,.01,.19,.02,.28,.02-.21-.08-.25-.23-.03-.52Zm.09,2.63s.01,.06-.03,.09c.15,.04,.13,0,.03-.09Zm-2.28,3.47c1.12,.09,2.25,.09,3.39,.08-1.15-.02-2.27-.04-3.39-.08Zm3.35-7.66s-.03,.12-.07,.19c.14-.03,.15-.1,.07-.19Zm.02,.39c.06-.06,.12-.1,.19-.17-.08,0-.16,.05-.19,.17Zm-.56,10.48c.64-.15,1.25-.39,1.71-.77-.52,.34-1.1,.59-1.71,.77Zm1.23-4.53c.15-.01,.23-.05,.19-.13-.07,.05-.13,.09-.19,.13Zm-1.06-4.18c.53,.05,1,.09,1.32,.06-.49-.05-.95-.05-1.32-.06Zm-14.48-6.38c3.82-.3,7.62-.41,11.43-.14,.26,.01,.52,.03,.78,.05s.51,.04,.77,.06c.03,0,.06,0,.09,.01h.01s.05,0,.08,.01c.08,0,.19,.01,.3,.02,.12,.02,.23,.03,.34,.05h.02c.61,.06,1.22,.14,1.83,.23,.12,0,.23,.01,.35,.02-5.3-1.18-10.65-.95-16-.31Zm15.99,.25s.04,.07,.08,.1h.01c.12,.02,.25,.04,.37,.06,.03,.01,.05,.01,.07,.01l-.53-.17Zm.56,6.09c.02,.13-.02,.2-.16,.16,.22,.17,.25,.07,.16-.16Zm.15,.42c-.2,.04-.62-.01-1.12-.08,.44,.09,.85,.16,1.16,.15-.01-.03-.03-.05-.04-.07Zm.2,4.36h-.01c-.39-.05-.92-.03-1.48,0,.4,.05,1.15-.05,1.48,.04h.01c.14,.05,.26,.06,.35,.04-.1-.04-.21-.07-.35-.08Zm-.16,2.65c.15-.11,.29-.23,.31-.32-.1,.11-.2,.2-.31,.32Zm-.05-.44h-.17s.11,.01,.16,.03c.14,.01,.27,.03,.38,.05-.01-.07-.11-.1-.37-.08Zm.16-6.28c.16,.54,.3,1.02,.41,1.48-.03-.47-.19-1.04-.41-1.48Zm.61,2.96c.01,.34-.01,.7-.07,1.1,.17-.19,.13-.65,.07-1.1Zm3.54,2.08c.13,.02,.25,.05,.38,.08-.05-.02-.18-.05-.38-.08Zm1.16,.59s.04,0,.05,.01t.02-.01h-.07Zm-14.15-12.26c-.92,.07-1.82,.17-2.58,.33,1.6-.2,3.21-.35,4.82-.41-.74,.01-1.49,.03-2.24,.08Zm-10.36,.88c-.11,.08-.2,.18-.36,.23,2.89-.32,5.21-.62,6.89-.87-2.16,.17-4.34,.39-6.53,.64Zm.86,.4h0c.48-.06,.96-.12,1.43-.18l-1.43,.18Zm-.85,1.33s0,.03-.01,.04c.03-.01,.06-.03,.09-.05-.03,0-.05,.01-.08,.01Zm10.35-2.61c-.92,.07-1.82,.17-2.58,.33,1.6-.2,3.21-.35,4.82-.41-.74,.01-1.49,.03-2.24,.08Zm-10.36,.88c-.11,.08-.2,.18-.36,.23,2.89-.32,5.21-.62,6.89-.87-2.16,.17-4.34,.39-6.53,.64Zm.86,.4h0c.48-.06,.96-.12,1.43-.18l-1.43,.18Zm-.85,1.33s0,.03-.01,.04c.03-.01,.06-.03,.09-.05-.03,0-.05,.01-.08,.01Zm-27.15,.43c.32,0,.73,.01,1.22,.02,.25,0,.5,0,.75-.01-.66-.01-1.38-.02-1.97-.01Zm11.12-1.46c3.85-.15,7.76-.74,11.66-1.35-3.89,.45-7.77,.97-11.66,1.35Zm-11.12,1.46c.32,0,.73,.01,1.22,.02,.25,0,.5,0,.75-.01-.66-.01-1.38-.02-1.97-.01Zm11.35,12.6c-.45-.15-1.09-.13-2.03,.08-.05,.02-.11,.03-.17,.05h-.01c-.06,0-.11,.03-.17,.05-.05,0-.09,.02-.14,.03,0,0,.01,.01,.01,.02,.04,.01,.08,.01,.12,.01,.07,0,.14,.01,.21,.01h.04c.87,.04,1.77,.07,2.67,.09-.14-.15-.31-.27-.53-.34Zm0,0c-.45-.15-1.09-.13-2.03,.08-.05,.02-.11,.03-.17,.05h-.01c-.06,0-.11,.03-.17,.05-.05,0-.09,.02-.14,.03,0,0,.01,.01,.01,.02,.04,.01,.08,.01,.12,.01,.07,0,.14,.01,.21,.01h.04c.87,.04,1.77,.07,2.67,.09-.14-.15-.31-.27-.53-.34Zm2.97,.39c-.17,0-.34,0-.5,0l.83,.07c-.11-.01-.22-.03-.33-.06Z"
												style={{ fill: "#010102" }}
											/>
											<path
												d="M870.67,157.05c-1.62-.68-3.63-.63-5.16-1.16,.26-9.35-8.28-11.22-10.62-1.61,.55-8.08,.35-7.5,8.42-8.38,.15-.02,1.88-.22,1.48-.74-7.6-2.37-15.66-1.06-23.72,.18,2.23-.25,4.47-.48,6.71-.65,5.35-.64,10.7-.87,16,.31-.12-.01-.23-.02-.35-.02,.14,.02,.28,.04,.42,.06-.04-.03-.07-.06-.08-.1l.53,.17c-1.45-.09-2.92-.12-4.41-.12,1.51,.01,3,.12,4.46,.35-.19,.07-.38,.13-.58,.17-.39,.11-1.19,.25-2,.34-.85,.11-1.71,.16-2.06,.06h-.02c-.76-.01-1.52-.05-2.25-.09h-.19c-.91,0-1.69-.04-2.09-.12h-.07c-.1,0-.46-.02-.87-.05-.47,.06-.92,.08-1.32,.02-.2,.04-.29,.11-.2,.23,.04,.02,.11,.03,.19,.03,.15,.01,.35,0,.56,0,.39-.02,.82-.03,1.06,.06,.06,.01,.11,.04,.14,.07,.02,.01,.04,.03,.05,.05,.02,.04,.03,.09,.01,.15-.01,.07-.05,.15-.14,.24-.03,.03-.06,.06-.09,.09-.01,.01-.02,.02-.03,.03-.04,.05-.09,.09-.15,.14-.03,.02-.07,.04-.12,.07-.17,.09-.46,.15-.8,.19-.1,.01-.2,.03-.31,.04-.69,.1-1.52,.16-2.13,.16h-.03c-.24,.03-.46,.06-.63,.1-.03,.04-.48,.08-1.05,.14h-.02c-.58,.1-1.27,.22-1.77,.24-.02,0-.04,0-.05,0-.28,.07-.44,.16-.37,.27,2.32,.09,5.39-1.06,7.35-.63,.05,.04,.09,.05,.12,.05,.02-.01,.03-.02,.05-.02,.22-.19,.07-1.36,.63-1.36,.03,0,.05,0,.08,.01,.19,.3,.17,1.5,.05,3.02,.01-.03,.02-.06,.03-.09-.02,.08-.03,.17-.05,.26,0,.01,0,.02,0,.04h0c-.13,1.46-.35,3.18-.61,4.68v.03c-.02,.09-.03,.17-.05,.25-.16,.93-.35,1.76-.52,2.37,0,.02,0,.03,0,.04,0,.08,0,.15,.01,.23-.04,.42-.66,1.87-.7,.71,0-.08-.03-.24-.05-.41-.01-.06-.01-.12-.02-.18-.02-.11-.04-.24-.05-.38-.02-.02-.03-.05-.06-.07-.04-.03-.1-.04-.17-.06-.02-.01-.05-.01-.07-.01-.23-.03-.55-.02-.79-.02h-.01c-.08,.01-.15,.01-.22,.01,.05,0,.09,.03,.13,.05h.01c.39,.03,.68,.07,.57,.45h0c.05,.17-.08,.32-.3,.46-.26,.38-.33,.32-1.16,.48,.03-.03,.07-.05,.1-.08-.22,.05-.44,.1-.67,.13,0,.01-.01,.01-.02,0-.54,.14-1.11,.16-1.59,.04h-.01c-.76,.08-.18,.11,1.03,.16,.1,0,.2,.01,.3,.01,.47,.01,.93,.03,1.4,.05,.32,.02,.64,.03,.97,.05,2.21,.1,4.77,.28,6.15,.66l.17,.04,.55,.13c-.06,0-.12,.01-.19,.01,.39,.17,.57,.36,.43,.61h0c.07,0,.14,0,.21-.01-.07,.01-.15,.02-.22,.03-.07,.13-.24,.27-.5,.42-2.41,.24-5,.43-7.69,.59-1.19,.11-2.41,.21-3.65,.29,3.72-.2,7.35-.12,10.68,.86-1.61,.72-.6,2.93,.96,2.29,1.49-1.07-.58-2.44,.28-3.75,2.02-.09,3.99-.81,5.35-2.3,.79-.2,6.41-.11,5.41-1.07Zm-15.07-11.02h.2c.25-.1,.68-.04,1.08,.02h.01c.59,.01,1.2,.02,1.73,.07h.83s-.07,.02-.12,.03c.02,.01,.04,.01,.06,.01-.04,0-.07,.01-.11,.01,0,0-.02,.01-.04,.01h-.01c-.34,.09-.8,.17-1.27,.22-.04,.02-.08,.02-.12,.02-.8,.18-1.62,.33-2.01,.08-.06,.05-.11,.09-.16,.15-.09-.21-.1-.36-.05-.46h0c-.02-.05-.02-.1-.02-.16Zm-2.59,11.9h-.01c-.09,.06-.22,.07-.42,.02-.02,0-.04,0-.07-.01-.12,.01-.16-.03-.16-.1-.02-.03,0-.06,.02-.1,.01-.02,.02-.04,.04-.06,.05-.13,.16-.29,.28-.42,.02-.02,.04-.04,.06-.07,.03-.03,.05-.05,.07-.08,.07-.1,.13-.15,.18-.15,.01,0,.02,0,.02,0t0,.02h0s.01,.01,.01,.01c.04,.03,.07,.11,.09,.22,0,0,0,.03,.01,.04,.04,.14,.06,.28,.04,.41h0c.01,.07,.01,.13,.02,.2-.02,.03-.08,.06-.19,.08Zm5.35,3.4c-.23-.04-.49-.08-.78-.12-.04,0-.08,0-.13-.02-.08-.01-.17-.02-.26-.03-.35-.04-.74-.09-1.11-.14-.28-.03-.55-.07-.78-.11-.29-.04-.53-.08-.68-.12-.14-.02-.26-.05-.34-.07,.06,.01,.13,.02,.2,.01,0-.04,.28-.06,1-.04h.08c.48-.06,.96-.12,1.4-.12h.19c.41,0,.77,.07,.93,.32,.01,.01,.01,.02,.02,.03,.09,.07,.17,.18,.22,.31h0s.05,.03,.07,.04h-.06s.02,.04,.03,.06Zm-.03-.56s-.03-.04-.04-.06c-.03-.03-.05-.07-.08-.1-.02-.03,0-.05,.04-.06,.01-.03,.04-.04,.09-.03h.02c.17-.04,.43-.06,.66-.05,0,.01,.02,0,.02,0,.19-.02,.3-.04,.37,.04,.02,0,.04,.02,.04,.03v.06c.03,.1,.03,.27,.03,.55-.01,.01-.03,.01-.04,.02v.3c.09,.12,.1,.3-.03,.63-.02,.19-.05,.26-.1,.23,0,.02-.01,.04-.03,.06,0-.02,0-.05,0-.08,0-.01-.01-.02-.01-.03-.09-.09-.19-.33-.35-.62-.02-.05-.05-.09-.08-.13-.2-.28-.4-.57-.5-.76Zm1.38,1.7c.07-.01,.11,.08,.11,.2,.01,.02,.01,.03,.01,.05,.06,.19,.01,.36-.09,.48-.04,.1-.09,.18-.14,.2h0c0,.09-.25,.13-.45,.03-.03-.02-.06-.03-.09-.05-.06-.02-.11-.08-.14-.15-.07-.12-.08-.29,.03-.52,.05-.06,.09-.09,.11-.09,.04-.02,.06,.01,.06,.09v.03s.01,.05,.01,.07c.02,.13,.05,.29,.14,.36,.11,.07,.23-.06,.31-.23,0,0,.01,0,.01-.01,.04-.09,.08-.2,.1-.29v-.02s-.01-.09-.03-.13c0-.01,.03-.01,.04-.01v-.04s.01,.02,.02,.03Zm4.81-10.95h.05c.02,.07,.04,.14,.06,.21h0c.22,.45,.38,1.02,.41,1.49,0,.03,0,.05,.01,.06,.04,.19,.08,.38,.1,.56,.05,.27,.08,.55,.09,.83v.03c.06,.45,.1,.91-.07,1.1-.01,.04-.01,.08-.02,.13-.03-.02-.07-.03-.11-.04h-.01c-.09,.02-.21,.01-.35-.04h-.01c-.33-.09-1.08,.01-1.48-.04-.01,.01-.02,.01-.03,0-.81,.05-1.66,.1-2.17-.03h-.01c-.16,0-.3-.01-.4-.01-.24-.36-.22-.56-.04-.66,.01-.04,.03-.08,.05-.12,.02-.02,.19,0,.44,.03h.01c.48,0,1.13,.13,1.62,.21h.03c.26,.03,.48,.04,.63,.02,.06-.04,.12-.08,.19-.13-.25-.06-.48-.12-.69-.16-.15-.03-.31-.05-.48-.07-.34-.04-.7-.08-1.01-.11-.28-.01-.46-.02-.58-.07-.01,0-.02,0-.02,0-.06-.01-.1-.01-.11-.02-.04,0-.05-.11-.05-.28-.02-.13-.01-.31,.02-.56,0-.14,.02-.29,.03-.43,.02-.13,.03-.25,.03-.36,0-.04,0-.09,0-.12,0-.08,0-.17,.01-.25,.01-.02,.01-.04,.03-.06,.13-.14,.65,.59,.83,.57,.04-.03,.04-.06,.03-.09-.01-.02-.03-.04-.06-.05-.02-.02-.04-.04-.07-.06-.02-.01-.05-.03-.08-.06-.04-.02-.09-.05-.13-.09-.06-.04-.11-.09-.17-.14-.18-.14-.32-.27-.32-.35-.04-.19-.05-.35-.03-.49,0-.04,0-.07,.01-.11,0-.11,.02-.23,.06-.37-.01-.18,.24-.23,.62-.23h.03c.51-.07,1.22,.08,1.88,.21,.02,0,.04,.01,.06,.01,.5,.07,.92,.12,1.12,.08,.01,.02,.03,.04,.04,.07Zm-4.35,.02s-.03,.02-.04,.03t-.01,.02s-.04,.02-.08,0h-.01c-.11,.01-.2-.06-.31-.16,0,0-.02-.01-.03-.02-.19-.11-.38-.25-.47-.35,0-.01-.02-.02-.03-.03-.06-.04-.06-.07-.03-.07,0,0,.01,0,.02-.02,0-.02,.04-.02,.09-.01,.02,0,.05,.01,.07,.01,.16,0,.38,.04,.59,.08l.55,.08c.32,.03-.16,.32-.31,.44Zm.33,.49h0c.01,.09-.02,.11-.07,.09h-.01c-.06,0-.13-.07-.21-.28-.02-.03-.02-.08,0-.11,.03-.04,.05-.07,.08-.08,.02-.03,.04-.05,.06-.05,.02-.01,.04-.02,.05-.02,.06-.03,.08,.01,.08,.07h.01c.04,.11,.04,.28,0,.38Zm-.44-.06s.07,.07,.09,.1c.22,0,.34,.2,.26,.74v.03c.02,.19,0,.38-.03,.58,0,.02-.01,.03-.01,.04-.02,.45-.04,.74-.1,.92v.02c-.01,.06,0,.12,0,.17,0,.02-.06,.04-.15,.04-.01,0-.01,.01-.01,.01-.15,.07-.38,.03-.76-.03-.04-.01-.08-.01-.13-.02-.42-.03-.89-.08-1.21-.12-.04-.01-.09-.01-.13-.01-.04-.01-.08-.01-.12-.01-.05-.01-.11-.01-.16-.01-.11-.02,.1-.28,.44-.62,.03-.03,.06-.06,.09-.1,.46-.53,1.12-1.21,1.62-1.49,.02-.02,.04-.03,.05-.04,.14-.12,.24-.19,.26-.2Zm2.78-2.84h0l.02-.02s.04,.02,.07,.04c.05,.02,.1,.05,.16,.09,.05,.04,.11,.09,.17,.15,.07,.07,.15,.15,.22,.24,.05,.06,.1,.13,.15,.19,.1,.13,.19,.26,.28,.39,.08,.12,.16,.24,.21,.35,0,.01,.01,.01,.01,.01,.07,.11,.12,.22,.14,.31,.02,.05,.04,.1,.05,.14t0,.01c.09,.23,.06,.33-.16,.16-.2-.03-.39-.05-.58-.06h-.01c-.32,.03-.79-.01-1.32-.06-.02,0-.04-.01-.06,0-.26-.01-.48-.03-.63-.07-.02,0-.04,0-.07-.01-.09,0-.19-.01-.28-.02-.21,.02-.04-.22,.25-.5,0,0,0-.01,.01-.02,.17-.25,.55-.62,1.16-1.15h.01c.03-.12,.11-.17,.19-.17Zm-1.76-.73c-.06-.14,.03-.18,.2-.15h.02c.2-.04,.51,.07,1.02,.4,.07,.05,.13,.09,.18,.13,.03,.01,.06,.03,.09,.05,.02,.02,.03,.04,.04,.07h0c.08,.1,.07,.17-.07,.2-.17,.26-.58,.62-.96,.95,0,.01-.02,.02-.03,.03-.32,.32-.51,.52-.62,.59-.01,.02-.03,.04-.04,.06v-.05c-.14,.04-.05-.28,.05-.96,0-.57-.03-1.07,.12-1.32Zm-3.89,1.53s.05-.07,.07-.1c.11-.14,.21-.27,.32-.4,.09-.09,.17-.18,.25-.27,.07-.08,.14-.15,.21-.21,.07-.07,.14-.13,.21-.18,.84-.72,1.75-.92,2.59-.06-.12-.05-.25-.09-.38-.11,.15,.09,.26,.23,.3,.44,0,.01,0,.03,.01,.04,.25,.56,.17,1.22-.33,1.49-.04,.02-.07,.05-.11,.07-.51,.33-1.4,.42-2.38-.53,.97,1.02,.01,.29-.84,.58,.2,.12,2.49,.19,1.74,.45,.43,.19,1.42,.49,.69,1.01-.97,.73-1.79,2.41-3.1,2.21-.04,.05-.05,.09-.02,.13h.01c.1,.05,.36,.1,.69,.15,.07,.01,.15,.01,.23,.02,.64,.06,1.67,.13,2.3,.22,.05,0,.09,0,.12,0,.22,.02,.36,.04,.37,.05,0,.01,.01,.02,0,.03,.05,.02,.08,.03,.08,.05,.04,.07,.02,.12-.05,.15,0,.03,0,.06-.01,.08h.01c.02,.22-.13,.36-.4,.46-.12,.05-.27,.08-.43,.11-.53,.12-1.24,.1-1.9,.07-.15,0-.29,0-.42,0-.32,0-.6,0-.82,0-.15,.01-.26,.03-.35,.05-.03-.03-.05-.06-.07-.08-.05-.04-.08-.08-.1-.12-.02-.03-.04-.05-.05-.07-.14-.16-.31-.35-.46-.53-.03-.03-.05-.05-.07-.07-.14-.14-.21-.22-.22-.29h-.01s-.03-.05-.04-.07h-.01c.82-2.25,1.62-3.78,2.37-4.78Zm7.65,8.2h-.01c-.02,.1-.16,.22-.31,.33-.04,.03-.07,.05-.1,.07-.19,.18-.39,.34-.61,.47h-.01c-.46,.39-1.07,.63-1.71,.78-.05,.01-.09,.02-.13,.03-.07,.02-.15,.04-.22,.05-.52,.14-1.07,.2-1.6,.22-.17,0-.09-.06,.01-.17,.02-.33,.03-.62,.04-.87v-.03c-.06-.3,.06-1.13,.14-1.34,.04,0,.08,0,.13,.01h0c.2-.16,.54-.07,1.2,.06h.05c.85,.08,1.8,.18,2.52,.27h.01s.01,0,.02,0c0,0,.02,0,.03,0h.17c.26-.02,.36,.01,.37,.08h.02s-.01,.01-.02,.03Zm5.15-.75c-.96,.29-2.09,.37-3.28,.36h-.03c-1.42,.17-3.94,.03-4.55-.33-.1-.01-.19-.02-.28-.03h-.03c-.38,.06-1.27-.02-1.8-.12-.02,0-.04-.01-.06-.01-.59-.02-1.13-.01-1.58,.05t.02,.01c.5,.06,.93,.07,1.22,.16,0,0,.02,0,.03,.01,.19,.02,.33,.03,.33,.05,.01,.09,.02,.17,.02,.24t0,.02s.01,.02,.01,.03c.08,.22,.01,.54-.21,1.03-.17-.04-.32-.09-.48-.13-.94,.2-2.57-.48-3.15-1.11,.03,.11,.01,.2-.05,.27h-.01v.02s.01,0,0,.01c-.07,.26-.3,.41-.61,.22-.4,.05-.94,0-1.5-.13,.01-.01,.02-.03,.02-.05-.1-.09,.05-.26,.2-.62,.11-.55,.2-1.27,.33-1.77,.03-.15,.07-.28,.12-.37,.04-.11,.09-.18,.15-.22,.03,.03,.06,.06,.09,.1h.01c.12,.05,.28,.22,.48,.56,.05,.07,.1,.16,.15,.25-.03,.05-.11,.08-.21,.09,0,0-.01,.01-.02,.01-.07,.03-.17,.04-.32,.04-.02,0-.03,0-.04,0-.04,0-.08,.01-.11,.03-.07,.05-.11,.12-.11,.18s.03,.13,.1,.23c.04,.04,.09,.07,.15,.1l.3,.06c.06,.05,.12,.09,.17,.13,.23,.11,.4,.26,.5,.42,.03-.44,.98-.7,3.7-.32h.03c3.44-.07,8.53,.25,10.23,.51h.02s.07,.01,.07,.01t-.02,.01Zm-7.05-.73h-.27c-1.14,.01-2.27,.01-3.39-.08-.03-.01-.07-.01-.11-.01-.28-.01-.55-.02-.82-.03-.1,.04-.19,.03-.27-.02h-.01c-.22-.01-.43-.02-.65-.04-.04-.01-.07-.01-.11-.01-.34,0-.67-.04-.99-.08-.04,0-.07,0-.11-.01-.39-.05-.78-.09-1.16-.15,.07-.01,.15-.01,.23-.02-.04,0-.07-.01-.1-.02,1.01-.26,3-.28,5.17-.19h.06s.01,.01,.02,0h.01c2.79-.01,5.61,.18,8.29,.78,.02,0,.03,0,.05,.01,.2,.03,.33,.06,.38,.08,.01,0,.02,.01,.02,.01,.34,.08,.68,.17,1.02,.27-2.26-.38-4.76-.45-7.26-.49Z"
												style={{ fill: "#01142a" }}
											/>
											<path
												d="M820.03,148.19c-.08,0-.1,.03-.09,.08-.69,.01-1.25,.01-1.66,0-.28,0-.5,0-.66-.02-.02,0-.04-.01-.05-.01-.08,0-.14-.01-.18-.02-.04,0-.06-.01-.06-.02s.08-.02,.24-.03c.07-.01,.16-.01,.26-.01,.11-.01,.23-.01,.37-.01h.09c.32,0,.73,.01,1.22,.02,.16,.01,.34,.01,.52,.02Z"
												style={{ fill: "#0f3554" }}
											/>
											<path
												d="M816.83,148.78s-.02,.32-.05,.68c-.04,.41-.09,.93-.16,1.34,0,.02,0,.04-.01,.06-.01,.1-.02,.19-.04,.27-.01,.04-.01,.08-.03,.12-.02,.06-.04,.12-.05,.15,0,0,0,.01-.01,.01-.04,.06-.07,.05-.11-.08,.04-.14,.27-1.44-.12-1.27,0-.09,.01-.17,.02-.26,.02-.15,.04-.35,.07-.54,0-.05,.02-.1,.02-.14,.01-.05,.02-.1,.03-.15,.03-.14,.06-.27,.09-.37,.02-.06,.05-.12,.07-.16,.01-.01,.02-.03,.03-.02,.04-.05,.08-.05,.12,.01,.04,.05,.08,.16,.13,.35Z"
												style={{ fill: "#af4909" }}
											/>
											<path
												d="M835.57,147.08c-.06,.02-.12,.04-.18,.06-2.26,.74-4.45,.7-6.91,.66-1.68-.04-3.49-.07-5.53,.13h0s.03-.22,.03-.22l.03-.22c2.37-.14,4.79-.22,7.19-.28,1.8-.05,3.6-.09,5.37-.13Z"
												style={{ fill: "#f9a311" }}
											/>
											<path
												d="M815.76,152.79l-.09,.89c-.03,.25-.06,.49-.08,.73l-.05,.42c-.02,.15-.03,.29-.04,.42l-.03,.26c-.05-.2-.08-.41-.1-.63-.05-.62,.03-1.34,.16-2.09,0-.01,0-.02,0-.04,.2-1.26,.53-2.6,.6-3.72,.23,.48-.35,2.69-.37,3.76Z"
												style={{ fill: "#eee6c0" }}
											/>
											<path
												d="M816.89,149.24c0,.07-.02,.11-.07,.07v-.53s.02,.08,.04,.13c0,.06,.02,.13,.02,.19,.01,.05,.01,.1,.01,.14Z"
												style={{ fill: "#c28833" }}
											/>
											<path
												d="M821.13,155.42s.01,.02,.02,.02h0s-.01-.02-.02-.02Zm.67,1.92c-.07,.04-.15,.06-.24,.07,.01,0,.02,0,.03,.01,.02,0,.03,.01,.04,.01,.07,0,.13-.03,.19-.08-.01-.01-.02-.01-.02-.01Zm-.67-1.92s.01,.02,.02,.02h0s-.01-.02-.02-.02Zm.67,1.92c-.07,.04-.15,.06-.24,.07,.01,0,.02,0,.03,.01,.02,0,.03,.01,.04,.01,.07,0,.13-.03,.19-.08-.01-.01-.02-.01-.02-.01Zm-.67-1.92s.01,.02,.02,.02h0s-.01-.02-.02-.02Zm.67,1.92c-.07,.04-.15,.06-.24,.07,.01,0,.02,0,.03,.01,.02,0,.03,.01,.04,.01,.07,0,.13-.03,.19-.08-.01-.01-.02-.01-.02-.01Zm-.67-1.92s.01,.02,.02,.02h0s-.01-.02-.02-.02Zm.67,1.92c-.07,.04-.15,.06-.24,.07,.01,0,.02,0,.03,.01,.02,0,.03,.01,.04,.01,.07,0,.13-.03,.19-.08-.01-.01-.02-.01-.02-.01Zm1.91,.89c-.11-.07-.23-.11-.31-.23-.01-.01-.02-.01-.02-.02,0,.02,.01,.04,.01,.06,0,.09-.03,.18-.1,.27-.03,.05-.06,.1-.1,.15-.06,.06-.12,.12-.19,.17-.24,.21-.57,.4-.85,.51,0,.01-.01,.01-.02,.01-.04,.02-.09,.04-.13,.05-.03,0-.05,.02-.07,.02-.03,.01-.06,.02-.09,.03-.1,.02-.18,.03-.24,.01-.02,0-.04-.01-.05-.02,.1-.04,.19-.08,.28-.14h.01s.04-.03,.07-.04c0,0,.01,0,.01-.01,.02-.01,.04-.02,.06-.03,.14-.09,.29-.21,.44-.33,.02-.01,.04-.03,.05-.04,.34-.29,.62-.62,.59-.87h0c-.01-.11-.06-.18-.19-.24,.05,.36-.13,.33-.32,.21-.02-.01-.05-.02-.07-.04-.08-.06-.16-.12-.21-.16-.02-.02-.04-.04-.05-.05,.03-.11,.08-.21,.15-.31,.01-.01,.01-.02,.02-.03,.09-.15,.22-.29,.36-.39h.01c.16-.11,.34-.16,.53-.14,.04-.22,.07-.4,.07-.56,.02-.38-.07-.58-.2-.68-.09-.09-.21-.12-.32-.13-.12-.02-.24-.02-.33-.03-.1-.03-.17-.07-.2-.14-.02-.06-.02-.14,.01-.25-.15-.03-.26-.06-.34-.07-.03,0-.06,0-.08-.02h-.02c-.08-.01-.11-.03-.12-.05-.01-.02-.01-.04-.01-.06,.02-.08,.08-.25,.08-.63h0c0-.08-.01-.16-.01-.24,.02-.03,.04-.04,.05-.04,.01-.01,.02-.01,.02-.01,.01,0,.02,0,.02,.01,.02,0,.03,.02,.03,.05,.04,.1,.02,.3,0,.5s-.04,.38-.04,.45c.02-.03,.04-.05,.05-.07,.02-.02,.03-.05,.04-.08,0,0,.01,0,.01,0,.14-.25,.27-.51,.28-.71,0-.01,.01-.02,.01-.03,.02-.12,0-.22-.06-.3l-.05-.05c-.08-.09-.22-.15-.42-.17-.07,0-.15-.01-.23-.01-.04,0-.08,.01-.12,.01v-.12c-.02-.24-.04-.44-.07-.58-.01-.03-.02-.04-.03-.05s-.01-.03-.01-.06c-.02-.09-.05-.16-.09-.2-.13-.18-.31-.09-.49,.14-.1,.13-.2,.3-.29,.5,0,.01-.01,.02-.01,.03t0,.02s-.01,.01,0,.02c-.05,.09-.09,.16-.12,.26-.05,.12-.09,.25-.12,.38-.03-.16-.06-.32-.08-.45-.7-1.23-2-3.12-2.8-4.38-.03-.04-.06-.08-.08-.12,.01,.06,.02,.11,.04,.17,.44,2.04,3.38,3.92,2.35,6.42-.11,.06-.21,.12-.29,.18-.17,.11-.32,.23-.43,.36-.15,.15-.2,.29-.17,.43,0,.03,0,.07,.02,.1,.05,.16,.18,.31,.3,.46,.12,.16,.23,.33,.24,.53-.06,.24-2.81-.28-3.17,.05-.01,.04-.02,.09-.03,.13,.02,0,.04,.01,.07,.01,.18,.02,.67,.02,1.21,.03h.07c.45,.02,.93,.03,1.29,.05h.01c.35,.03,.59,.06,.59,.11-.01,.07,0,.17,.03,.29,.05,.23,.16,.53,.22,.8h0c.02,.1,.04,.18,.05,.26,0,.04,.01,.08,.01,.11,0,.08,0,.15-.02,.21-.03,.15-.13,.25-.34,.26,.69,.02,1.03,.49,1.44,.87,.08,.07,.17,.14,.26,.2h0s0,.01,.01,.01c.13,.1,.27,.17,.43,.21h0s.03,.02,.05,.02h0c.13,.03,.28,.05,.45,.03,.03,0,.07-.01,.11-.01,.04-.04,.08-.07,.12-.1,.39-.36,.78-.65,1.09-.96,.1-.11,.2-.21,.28-.33,.11-.16,.2-.33,.26-.52h0c.07-.22,.1-.45,.09-.72-.04-.06-.1-.1-.16-.13Zm-1.24-.23h.01s.07-.04,.11-.01c.11,.07,.02,.21-.09,.13-.04-.03-.05-.06-.04-.08,0-.01,0-.03,0-.04Zm.32-1.48c-.09-.02-.14-.06-.15-.1-.01-.01-.01-.02-.01-.03,.01-.03,.02-.04,.04-.05,.03-.02,.08-.03,.16-.01,.05,.01,.1,.04,.13,.07,.06,.07-.01,.15-.17,.12Zm.21-.38c-.06,.03-.14,.03-.2,0-.06-.03-.1-.06-.12-.08-.02-.03-.03-.06-.01-.08,.01-.02,.03-.03,.05-.03,.02-.01,.06-.02,.1-.02,.03,0,.06,.01,.1,.01h.01s.07,.03,.1,.05c.04,.03,.05,.08,.03,.12-.02,.02-.04,.04-.06,.04Zm-.04-.68s.09,.02,.1,.06c.18,.44-1.1-.11-.1-.06Zm-1.37-.45c.33-.01,.56,.13,.7,.34,.02,.02,.04,.04,.05,.06,.15,.25,.2,.58,.15,.9-.06,.42-.28,.82-.64,1,0,.02-.03,.03-.05,.03-.07,.04-.15,.06-.24,.07h-.02s-.08,.02-.13,.02c-.04,0-.06-.02-.07-.05,0-.03,0-.06,.03-.1,0-.03,.02-.06,.04-.09,0,0,.01,0,0-.01,.01-.02,.02-.04,.04-.06,.08-.16,.2-.37,.28-.6,.02-.03,.03-.07,.03-.11,.09-.35,.05-.75-.34-1.13-.08-.04-.15-.07-.19-.09-.06-.06-.09-.09-.06-.11,.01,0,.02,0,.03,0h.01s0-.02,0-.02c.01-.01,.03-.01,.06-.01h.01s.06-.01,.1-.01c.07-.01,.13-.02,.19-.02h.01Zm-1.38,2.02h-.01s-.02,.01-.03,0c-.08-.01-.15-.02-.2-.04,0,0-.03-.01-.04-.01-.02-.01-.03-.01-.04-.03-.01-.01-.01-.02-.01-.04-.01-.01,0-.02,.01-.03,0,0,.01-.01,.02-.02h0s.01-.02,.01-.02c.02-.01,.03-.01,.04-.02,.02-.01,.04-.03,.06-.04,.03,0,.05-.02,.07-.04,.03-.02,.05-.04,.07-.06,.01,0,.03-.01,.04-.02,.06-.04,.11-.1,.14-.17,0,0,0-.01,0-.02,.01-.02,.02-.04,.03-.06,.04-.11,.04-.22,.02-.34v-.02s-.01-.04-.01-.06c.01-.01,0-.02-.01-.03,.01,0,0-.02-.01-.03,0,0,0-.01-.01-.02v-.04s-.01-.05-.03-.08c-.01-.03-.03-.05-.07-.08-.02-.02-.04-.04-.06-.06-.02-.02-.04-.04-.06-.06h-.01s-.05-.06-.06-.08c-.02-.03-.03-.05-.03-.06,0-.02,0-.03,.02-.04,.01-.01,.04-.02,.07-.03,.01,0,.03-.01,.05-.02s.03-.01,.05-.01h.02s.01-.01,.01-.01c.07-.04,.15-.06,.25-.06h.06s.06-.01,.09,.01h.08s.02,.01,.02,.01c.01-.01,.03,0,.04,0,.02,0,.04,0,.06,.01h.01s.02,.01,.02,.01h.01s0,0,0,0c.01,0,.02,0,.03,.01,.02,0,.04,.01,.06,.02,.02,0,.05,.01,.07,.03h.01s.04,.01,.05,.03c.01,.01,.01,.02,.02,.02,.05,.03,.1,.07,.14,.11,.06,.06,.11,.13,.14,.2,.02,.03,.04,.06,.05,.1h0s.03,.07,.03,.1c.04,.1,.05,.21,.03,.32h0c0,.1-.03,.18-.07,.27,0,.04-.03,.09-.07,.13-.02,.04-.04,.07-.07,.11h-.01c-.07,.08-.14,.14-.23,.2-.05,.02-.15,.04-.27,.05-.14,.01-.27,.02-.39,.02-.04,0-.08,0-.12-.01-.03,0-.07-.01-.1-.01Zm1.24-3.28c.02-.06,.04-.07,.05-.04,0,.01,.01,.02,.02,.04,.02,.03,.04,.1,.04,.2,.01,.02,.01,.03,0,.05,0,0,.01,0,0,.01t0,.02s.01,0,0,.01c.01,.06,.01,.12,.01,.2v.03c-.01,.36-.07,.54-.12,.54h0s-.02,0-.03-.02c-.02-.04-.03-.09-.03-.16v-.02s-.01-.07-.01-.1c-.01-.07-.01-.15-.01-.25,0-.07,.01-.13,.02-.18,.01-.06,.01-.11,.02-.15,.01-.08,.02-.14,.04-.18Zm-2.28,2.18s.01-.02,.03-.03c.03-.06,.06-.09,.11-.13,.01,0,.02-.02,.03-.02,.04-.04,.08-.07,.13-.08,.02-.01,.04-.02,.07-.03,.11-.04,.23-.03,.33,.01,.05,.01,.09,.04,.14,.08,.01,.01,.02,.02,.03,.03,.03,.03,.06,.07,.07,.11,.03,.05,.04,.12,.04,.19s-.01,.15-.04,.23c0,.06-.02,.12-.05,.17-.03,.05-.07,.1-.12,.14s-.1,.07-.16,.09c-.03,.01-.05,.01-.08,.02h-.02s0,.01-.01,.01-.03,.01-.04,0c-.07,0-.14,0-.2-.02-.06-.02-.12-.05-.18-.1-.01,0-.02-.01-.02-.02-.01-.02-.03-.04-.05-.06-.01-.03-.03-.06-.05-.1-.03-.07-.05-.15-.06-.25,.02-.09,.06-.17,.1-.24Zm2.38,2.01v-.02s.02-.08,.04-.12h0s0-.02,0-.02h0s.06-.08,.08-.11c.01-.01,.03-.02,.05-.03,.02,0,.04-.02,.06-.03,.01,0,.03,0,.05-.01,.04-.02,.09-.01,.14,.01,.01,0,.02,.01,.03,.01,.04,.02,.08,.05,.12,.08,.01,0,.01,.02,.02,.03,.11,.1,.18,.24,.2,.38,0,.02,.01,.05,.01,.07,0,.09-.03,.18-.11,.23-.01,.01-.04,.02-.06,.03s-.03,.02-.05,.02c-.01,.01-.01,.02-.02,.03-.03,.05-.07,.09-.1,.12h-.01s-.05,.05-.08,.07c-.02,0-.04,.01-.06,.01-.03,0-.05,0-.08-.01,0,0,0-.01-.01-.01-.09-.04-.17-.17-.21-.32-.01-.02-.01-.05-.01-.07-.03-.1-.04-.22-.01-.34Zm.25-.6c-.07,.04-.15,.06-.24,.07,.01,0,.02,0,.03,.01,.02,0,.03,.01,.04,.01,.07,0,.13-.03,.19-.08-.01-.01-.02-.01-.02-.01Zm-.67-1.92s.01,.02,.02,.02h0s-.01-.02-.02-.02Zm.67,1.92c-.07,.04-.15,.06-.24,.07,.01,0,.02,0,.03,.01,.02,0,.03,.01,.04,.01,.07,0,.13-.03,.19-.08-.01-.01-.02-.01-.02-.01Zm-.67-1.92s.01,.02,.02,.02h0s-.01-.02-.02-.02Zm.67,1.92c-.07,.04-.15,.06-.24,.07,.01,0,.02,0,.03,.01,.02,0,.03,.01,.04,.01,.07,0,.13-.03,.19-.08-.01-.01-.02-.01-.02-.01Zm-.67-1.92s.01,.02,.02,.02h0s-.01-.02-.02-.02Zm0,0s.01,.02,.02,.02h0s-.01-.02-.02-.02Zm.67,1.92c-.07,.04-.15,.06-.24,.07,.01,0,.02,0,.03,.01,.02,0,.03,.01,.04,.01,.07,0,.13-.03,.19-.08-.01-.01-.02-.01-.02-.01Z"
												style={{ fill: "#06182f" }}
											/>
											<path
												d="M822.84,153.31c-.57-.52-1.49-.7-1.14-1.3-.62-.05-.83,1-.33,1.19,.26-.13,1.51,.38,1.47,.11Z"
												style={{ fill: "#06182f" }}
											/>
											<path
												d="M822.35,148.28c-.09-.03-1.52,.17-2.13,0,0-.01-.02-.01-.03-.01-.07-.03-.12-.05-.16-.08,.1,.02,.43,.01,.82,0,.74-.03,1.68-.07,1.5,.09Z"
												style={{ fill: "#879b9e" }}
											/>
											<path
												d="M827.64,148.16c.03,.14-.25,.23-.7,.27-.02,.01-.04,.01-.06,0-1.02,.09-2.76-.03-3.55-.13-.17-.02-.3-.04-.36-.07-.14-.04,.02-.07,.7-.06h.07c.12,0,.26,0,.41,.01l2.35-.05,1.13-.02s.01,.03,.01,.05Z"
												style={{ fill: "#ebd493" }}
											/>
											<path
												d="M816.82,149.31c-.04,.58-.08,1.45-.14,2.39-.01,.02-.01,.03-.01,.05-.11,1.7-.28,3.62-.67,4.41,0,0,0,.01-.01,.02-.08,.16-.17,.27-.27,.31-.04,.04-.09,.04-.15,.04-.01,0-.02,0-.04-.01,0-.02-.02-.06-.03-.09v-.02c-.03-.16-.04-.41-.02-.72v-.06c0-.12,.01-.24,.02-.38,.01-.13,.02-.27,.04-.42l.05-.42c.02-.24,.05-.48,.08-.73,.05-.34,.1-.68,.15-1.01,.12-.73,.25-1.4,.35-1.85,.19-.79,.31-.91,.2,.51,.04,.1,.08,.12,.11,.08,.01,0,.01-.01,.01-.01,.02-.03,.04-.08,.05-.15,.02-.04,.02-.08,.03-.12,.02-.08,.03-.17,.04-.27,.01-.02,.01-.04,.01-.06,.06-.46,.1-1.06,.16-1.34,.01-.07,.02-.12,.04-.15Z"
												style={{ fill: "#ce6104" }}
											/>
											<path
												d="M822.56,148.57c-.01,.14-.02,.27-.03,.41,0,.01,0,.01,0,.01-.01,.31-.05,.61-.1,.91-.06,.5-.16,1-.29,1.49v.02s-.02,.1-.04,.15c-.02,.09-.04,.19-.07,.28,0-.13,.02-.26,.04-.39,.08-.76,.2-1.51,.36-2.25,.04-.21,.09-.42,.14-.63Z"
												style={{ fill: "#eee6c0" }}
											/>
											<path
												d="M822.72,149.2c-.02,.6-.35,1.41-.44,2.1-.04,.19-.05,.37-.03,.53v.04s-.05-.07-.06-.11t-.01-.02c-.04-.09-.05-.2-.05-.33v-.02c0-.41,.16-.95,.29-1.49,.08-.35,.15-.7,.16-1,0-.12,0-.23-.02-.33,.05,.05,.08,.12,.1,.19,.05,.12,.07,.27,.06,.44Z"
												style={{ fill: "#76330e" }}
											/>
											<path
												d="M823.24,149.15s.01,.02,0,.04c.04,.41-.07,.97-.18,1.46v.02c-.09,.4-.18,.75-.18,.92-.01,.05-.01,.08,0,.1-.02,.01-.04,.02-.05,.02-.45,.23-.58,.01-.55-.41,.02-.56,.31-1.46,.44-2.1,.04-.22,.06-.41,.06-.54,0-.02,0-.04,0-.05,.04,0,.08,0,.11,.01h.04s.06,.03,.09,.04c.02,.01,.03,.02,.04,.04,.11,.08,.17,.24,.19,.45Z"
												style={{ fill: "#c85b05" }}
											/>
											<path
												d="M828.74,151.92c-.04-.19-.1-.38-.15-.57-.1-.34-.21-.69-.31-1.05-.03-.09-.06-.19-.08-.29-.02-.08-.04-.16-.06-.24-.1-.47-.17-.93-.13-1.39,0-.01,0-.03,.01-.04,0-.08,.02-.16,.03-.24,.01,.04,.02,.08,.03,.13v.03c.07,.32,.16,.74,.25,1.2,.03,.13,.05,.25,.08,.36,.07,.43,.15,.87,.22,1.26,.01,.07,.02,.15,.03,.24,.01,.08,.02,.15,.03,.23,.02,.14,.04,.27,.05,.37Z"
												style={{ fill: "#dccaa0" }}
											/>
											<path
												d="M828.36,148.62c.07,.45,.13,.8,.15,1.05,0,.02,0,.04,.01,.06,.07,.47,.07,.61,.03,.54h-.01c-.03-.07-.08-.23-.13-.45-.03-.11-.05-.23-.08-.36-.09-.37-.18-.82-.25-1.2v-.03h-.01s-.01-.09-.02-.13c.13-.04,.24-.04,.32-.02h.01c.14,.05,.21,.17,.24,.32,.05,.23,.01,.55,.01,.79-.04,0-.07-.1-.1-.22-.05-.19-.09-.43-.17-.35Z"
												style={{ fill: "#511a0a" }}
											/>
											<path
												d="M833.21,148.09c-.31,0-.78,.06-1.32,.14-.08,.01-.16,.02-.24,.03h-.01c-.86,.11-1.82,.22-2.45,.12h-.02c-.29-.04-.5-.13-.61-.28,1.55-.09,3.11-.09,4.65-.01Z"
												style={{ fill: "#ebdfb0" }}
											/>
											<path
												d="M829.08,151.81s0,.01-.01,.01c-.08,.07-.19,.11-.33,.1-.01-.04-.01-.08-.02-.11,0-.09-.02-.17-.03-.26-.01-.08-.02-.15-.03-.23,0-.09-.02-.17-.03-.24-.04-.3-.06-.57-.08-.81h-.01c-.01-.2-.02-.38-.02-.54-.01-.02-.01-.04-.01-.06-.01-.27,0-.5,.02-.7,.02-.22,.05-.41,.09-.57,0-.02,.01-.04,.02-.06,0,.09,.03,.22,.07,.39h0c.13,.54,.41,1.39,.5,2.07,0,.03,0,.05,0,.07,.05,.42,.03,.77-.14,.94Z"
												style={{ fill: "#af4909" }}
											/>
											<path
												d="M845.79,145.83c-.11,.01-.2,.04-.27,.09-.09,.03-.19,.06-.29,.09-3.3,1.01-7.05,.94-10.5,1.47,.32-.03,.58-.14,.79-.36,.02-.01,.03-.02,.05-.04,3.4-.51,6.81-.9,10.22-1.25Z"
												style={{ fill: "#ee911b" }}
											/>
											<path
												d="M835.95,148.32s0,.04-.01,.06c-.08-.03-.15-.06-.23-.08-.54-.18-1.13-.16-1.69-.21-.26-.02-.51-.06-.75-.14l1.79-.16c.33,0,.23,.1,.23,.15-.01,.02-.01,.03,.02,.04,.18,.14,.64,.09,.64,.34Z"
												style={{ fill: "#e39834" }}
											/>
											<path
												d="M832.34,150.99s-.02,.05-.06,.06c0-.03-.04-.09-.09-.17-.15-.22-.44-.61-.72-1-.05-.07-.1-.14-.14-.2-.25-.35-.48-.68-.56-.87-.04-.07-.06-.12-.05-.15,.02-.01,.04-.02,.05-.03,.02,0,.05,0,.09,.03,.06,.23,.3,.58,.58,.94,.35,.46,.76,.96,.87,1.23,.04,.07,.05,.12,.03,.16Z"
												style={{ fill: "#d4be94" }}
											/>
											<path
												d="M843.8,146.72c-.29,.16-.57,.28-.84,.36-.49,.14-.97,.19-1.49,.28,0,0-.02,0-.04,.01-.39,.05-.8,.14-1.26,.31-.26,.05-1.74-.17-2.28-.05-.06,0-.11,.03-.14,.06-.06,.04-.07,.1-.01,.19-.5-.11-.96,0-1.4,.09-.02,.01-.04,.01-.06,.01-.35,.07-.68,.1-.99-.04-.08-.03-.16-.08-.23-.14h0c.1-.02,.2-.03,.3-.05,.35-.04,.69-.08,1.02-.11,1.02-.12,2.01-.24,2.99-.35,.4-.05,.79-.1,1.18-.15,.72-.08,1.44-.18,2.17-.28,.35-.04,.7-.09,1.05-.14h.03Z"
												style={{ fill: "#cc6b07" }}
											/>
											<path
												d="M854.59,144.92c-.53,.11-1.42,.26-2.63,.43-1.68,.25-4,.55-6.89,.87,.16-.05,.25-.15,.36-.23,.03-.03,.06-.05,.09-.07,.09-.03,.18-.06,.27-.09,1.91-.28,3.52-.5,4.83-.67,4.29-.55,5.45-.54,3.97-.24Z"
												style={{ fill: "#ce6b0e" }}
											/>
											<path
												d="M832.48,151.03l-.03-.03c-.05-.06-.1-.12-.14-.17-.41-.47-.69-.89-.87-1.23-.48-.87-.28-1.18,.46-.15,0,0,0,0,0,0,.19,.27,.42,.63,.69,1.1,.12,.18,.08,.34-.12,.47Z"
												style={{ fill: "#511a0a" }}
											/>
											<path
												d="M837.74,147.88c.85-.04,1.7,0,2.55,.08-1.73,.64-6.82,.05-2.55-.08Z"
												style={{ fill: "#f8a107" }}
											/>
											<path
												d="M842.99,148s-.03,.01-.05,.02h-.06s-.02,0-.03,0c-.43,0-.91,0-1.41-.03-.67-.03-1.37-.07-2.05-.1-.59-.02-1.16-.03-1.65,0-.06-.09-.05-.15,.01-.19,.03-.02,.08-.04,.14-.06,.54-.12,2.02,.1,2.28,.05,0,.01,.05,.02,.13,.02h.05c.33,.02,1.07,.03,1.7,.05t.02,0s.01,.01,.02,0t.02,0h.02s.06,.01,.1,0c.74,.03,1.28,.1,.76,.25Z"
												style={{ fill: "#110a08" }}
											/>
											<path
												d="M834.59,148.29c-.1,.13-.19,.26-.27,.39-.01,0-.01,.01-.01,.01-.15,.22-.28,.43-.4,.64-.17,.28-.31,.54-.44,.79-.02,.04-.03,.07-.05,.1-.14,.25-.28,.49-.43,.73l-.31,.48c-.02,.06-.11,.13-.13,.19,0,.01-.01,.02-.03,.04-.08,.12-.17,.24-.29,.36-.1,.14-.22,.27-.35,.4,.78-.97,1.25-2.24,1.96-3.26,.07-.1,.14-.21,.22-.3,.16-.21,.34-.4,.53-.57Z"
												style={{ fill: "#dccaa0" }}
											/>
											<path
												d="M837.73,155.66c-.04-.06-.09-.15-.12-.24,0,0-.01-.01-.01-.02-.04-.1-.08-.21-.11-.32-.05-.17-.1-.34-.15-.5t-.01,0c-.06-.21-.13-.39-.24-.5-.05-.07-.11-.11-.19-.13l.1,.23c.07,.11,.11,.24,.16,.35,.22,.44-1.3-.48-.77-.66,.01,0,.02-.01,.04-.01l-1.75-.12-.64-.05-.96-.07-.24-.02-.42-.03h-.15s-.19-.02-.19-.02c.12-.45,.77-1.31,1.42-2.21,1.04-1.41,2.08-2.92,1.09-3.04-.1,.13-.19,.26-.27,.39-.01,0-.01,.01-.01,.01-.15,.22-.28,.43-.4,.64-.17,.28-.31,.54-.44,.79-.02,.04-.03,.07-.05,.1-.1,.19-.18,.38-.26,.55-.11,.23-.21,.44-.3,.62-.21,.44-.41,.77-.68,.99-.01,0-.01,0-.01,0-.09,.08-.19,.14-.3,.18-.01,0-.02,0-.04,.02-.28,.11-.65,.14-1.14,.08-.01-.01-.02-.01-.03-.01-.51-.07-1.17-.24-2.02-.51,.44,.19,.75,.51,.99,.87,.35,.5,.58,1.08,.9,1.52,.2,.29,.44,.51,.78,.61,.22,.08,.49,.09,.81,.04,1.65,.12,1.12,.12,.25,.1h-.02c-.32,0-.69-.01-1.02-.02-.03,0-.07,.01-.1,0h-.45s0,.01,.01,.01c0,.01,.01,.02,.02,.03,.09,.11,.24,.2,.42,.27,.29,.11,.69,.17,1.12,.19-.18,.02-.34,.06-.48,.1-.56,.14-.87,.39-1.04,.67-.18,.27-.23,.58-.28,.88h0c-.01,.14-.03,.27-.04,.39,0,.01,0,.02-.01,.03-.07,.36-.2,.65-.65,.76-.04,.01-.09,.02-.15,.02h-.01c-.22,.04-.51,.03-.89-.03-.01-.01-.02-.01-.04-.01-.26-.04-.56-.1-.9-.19-.15,.51-.04,.81,.24,.96,.02,.01,.05,.03,.08,.04,.02,.01,.05,.02,.08,.03,.39,.13,.99,.07,1.64-.06,.65-.12,1.35-.32,1.96-.49,.01-.01,.02-.01,.03-.01,.6-.16,1.11-.3,1.41-.31,.59-.03,1.11-.21,1.59-.49,.07-.04,.14-.09,.21-.13,.95-.62,1.74-1.58,2.65-2.24-.01-.01-.01-.02-.02-.03Zm-3.02,.13c.38,.01,.73,.04,.98,.12-.35-.05-.68-.09-.98-.12Z"
												style={{ fill: "#af4909" }}
											/>
											<path
												d="M846.29,146.39h0s-.01,.01-.01,.01c-.02,.02-.05,.05-.08,.07h-.01c-.06,.05-.14,.09-.23,.13h-.01c-.21,.1-.47,.19-.75,.26h-.02c-.53,.14-1.15,.24-1.59,.27h-.05c-.35,.03-.58,.02-.58-.05s.23-.18,.81-.36h.03s.01-.01,.02-.01l2.47-.32Z"
												style={{ fill: "#a44412" }}
											/>
											<path
												d="M842.85,148.02c-.09,.01-.18,.02-.27,.03h-.02c-.57,.05-1.17,.12-1.79,.19-.05,0-.11,.01-.17,.01-1.37,.15-2.79,.27-3.96,.11-.24-.03-.47-.07-.69-.13,.46,.03,.94,.03,1.42,.01h.15c.77-.04,1.56-.11,2.35-.16h.03c.52-.05,1.03-.08,1.54-.09,.48-.02,.95-.01,1.41,.03Z"
												style={{ fill: "#ebd493" }}
											/>
											<path
												d="M849.27,146.22s-.03,.09,0,.15h0s.05,.07,.08,.1c-.18-.01-.37,.01-.56,.05-.04,.01-.09,.02-.12,.02-.07,.02-.13,.03-.16,.04-.27,.05-.57,.13-.82,.18t-.02,0s-.01,0-.02,0t-.02,0s-.01,0-.02,0c-.22,.05-.42,.08-.61,.07,0,0-.01-.01-.01,0-.18-.01-.32-.04-.45-.13h0c-.08-.05-.14-.12-.19-.21h0s-.03-.06-.05-.1h0s1.43-.19,1.43-.19l2.24-.28c-.07,.02-.13,.04-.19,.06-.17,.04-.38,.1-.47,.2-.01,.01-.02,.02-.03,.03Z"
												style={{ fill: "#bb590b" }}
											/>
											<path
												d="M856.7,144.52c1.41-.03,2.81,.02,4.22,.15-.06-.05-4.65,.32-4.22-.15h0Z"
												style={{ fill: "#97491e" }}
											/>
											<path
												d="M842.88,147.14c.85,.21,3.29-.97,2.64,.4-1.3,.15-3.97,.31-5.35,.13,.83-.41,1.74-.25,2.71-.54Z"
												style={{ fill: "#fb9802" }}
											/>
											<path
												d="M830.14,159.6c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Zm0,0c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Zm0,0c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Zm0,0c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Zm0,0c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Zm0,0c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Zm0,0c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Zm0,0c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Zm29.19-.54c-.12-.02-.22-.03-.34-.03h-.01c-2.42-.2-4.96-.17-7.53-.05-.12,0-.24,.01-.37,.02-6.15,.31-12.51,1.13-18.13,.85-.04,0-.08-.01-.13-.01-.78-.04-1.54-.1-2.28-.2-.03,.29,.64,.5,1.75,.65,.97,.14,2.28,.23,3.75,.29,.22,.01,.44,.02,.66,.02h.45c.67,.03,1.37,.04,2.07,.05,.77,.01,1.55,.01,2.32,.01,1.16,0,2.31-.02,3.36-.04,.48-.01,.95-.02,1.39-.03h.23c1.43-.04,2.57-.09,3.18-.12-.41-.03-.83-.05-1.27-.06h-.09c-1.03-.05-2.15-.08-3.3-.1t-.02,0s-.01,.01-.02,0c-.01,.01-.02,.01-.04,0-3.17-.04-6.59-.01-9.29-.02,.19-.01,.39-.03,.59-.04h.35s.01-.02,.03-.03c.03,0,.06,0,.08-.01,2.72-.19,5.68-.35,8.68-.5,.16,0,.32-.02,.48-.03,3.2-.22,6.39-.42,9.58-.44,.25-.01,.51-.01,.76-.01,1.09-.05,2.16-.1,3.19-.14,.07,0,.13-.01,.19-.01-.09,0-.18-.02-.27-.02Zm-29.19,.54c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Zm0,0c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Zm0,0c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Zm0,0c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Zm0,0c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Zm0,0c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Zm0,0c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Zm0,0c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Zm17.48-1.49s-.04-.05-.07-.07h-.01s-.09-.05-.15-.06c-.22-.06-.56-.04-.92-.02h-.14c-.35,.03-.74,.07-1.02,.04-.01,.01-.02,.01-.04,0-.01,.01-.01,0-.01,0t-.02,0c-.11,0-.2-.02-.28-.04-.01,0-.01,0-.01,0-.04-.01-.08-.03-.11-.05,.17-.35,.43-1.23,.7-2.35,.02-.06,.03-.12,.04-.18l.02-.08,.19-1.14s.05,.01,.07,.01c.02-.08,.03-.17,.05-.25,.05-.23,.1-.47,.14-.71h0c.02-.05,.02-.1,.03-.15,.51-2.64,.87-5.5,.46-6.34h0c-.05-.11-.11-.18-.19-.21h0s-.09-.03-.14-.03h-.01s-.01,.01-.02,.01c-.07,0-.14,.04-.21,.12h-.01c-.11,.14-.22,.35-.33,.62,0,.01-.01,.01-.01,.02-.03,.09-.07,.19-.11,.3v.02h-.01c-.01,.06-.03,.11-.05,.16,0,.01,0,.03-.01,.04-.15,.5-.29,1.08-.37,1.61,.02,.04,.01,.09-.02,.16-.11,.76-.12,1.38,.06,1.47,.14-.48,.1-1.26,.41-1.68,0-.01,.01-.01,.01-.02,.05-.09,.14-.16,.24-.21,.22-.31,.37-.36,.45-.2h0c.13,.26,.1,1,0,1.94,0,.01-.01,.03-.01,.05-.18,1.39-.54,3.22-.91,4.69,0,.04-.01,.06-.01,.09-.02,.06-.04,.1-.06,.18,0,.04-.02,.08-.03,.12-.24,.9-.47,1.62-.65,1.95-.01,.03-.03,.06-.05,.09-.06,.01-.11-.01-.14-.07-.03-.02-.04-.05-.06-.09-.01-.02-.02-.04-.02-.07-.01-.03-.01-.07-.02-.12-.01-.04-.01-.09-.01-.14-.06-.62,.06-1.7,.2-2.67,0-.02,0-.04,.01-.06,.11-.83,.25-1.56,.29-1.83-.02,.06-.04,.11-.06,.17-.14,.38-.25,.73-.34,1.06-.08,.3-.14,.58-.18,.83-.04,.2-.06,.4-.09,.58,.01,.02,.02,.04,0,.06-.03,.33-.04,.62-.05,.87h0s0,.01,0,.02c-.03,.95-.02,1.36-.97,1.5h-.07c-.53,.09-1.33,.09-2.59,.07h-.03c-.47-.01-1-.02-1.6-.04-.12,.02-.22,.04-.3,.05-.11,.01-.19,.02-.26,.02-.35,0-.29-.2-.27-.49h0c0-.15-.01-.32-.08-.5-.1,.02-.08,.33-.09,.6,0,.19-.02,.35-.12,.37,0-.01-.09-.01-.24,0h-.01c-.22,.01-.55,.04-.9,.06-.03,.01-.06,0-.09,0-.38,.03-.76,.05-.97,.03t-.02,0c-.06,0-.1,0-.13-.03-.04-.02-.04-.04,.01-.08,.02-.02,.05-.04,.07-.06,0,0,.01,0,.01-.01,.59-.48,1.11-.91,1.56-1.3,.06-.05,.1-.07,.11-.09,.4-.34,.75-.64,1.04-.91h.01c.13-.11,.25-.23,.35-.32h.01c1.1-1.02,.98-1.09-.15-.2,0,.01-.01,.01-.01,.01-.11,.08-.23,.18-.36,.29h-.01c-.06,.05-.12,.1-.19,.15-.66,.55-1.55,1.3-2.63,2.27-.04,.03-.09,.07-.13,.11-.03,.01-.06,.01-.08,.02-1.32,.3-2.31,.56-3,.8-.01,0-.02,0-.03,.01-.61,.21-1,.39-1.18,.56,.19-.06,.39-.11,.59-.16,0,0,0,0,.02,0,.88-.23,1.76-.41,2.65-.55,.04,0,.06,0,.1-.02h.01c.1-.01,.21-.03,.31-.04,.02-.01,.03-.01,.05-.01,2.23-.31,4.49-.37,6.73-.38,.03,0,.07,0,.1,0,2.16-.01,4.3,.03,6.42-.06,0-.04,0-.07-.04-.09Zm-2-9.39h-.01s-.09,.06-.11,.03c-.01,.01-.01-.01,0-.05v-.02s.01-.06,.02-.09l.22-.84c.11-.41,.23-.8,.23-.86h0c.06-.07,.12-.11,.17-.11,.02-.01,.04-.02,.06-.02,.01,0,.02,0,.03,0h.02c.09,.03,.15,.13,.2,.27,.01,.01,.01,.02,.01,.03,.06,.16,.09,.36,.09,.54h0c0,.14-.01,.26-.04,.33-.03,.01-.06,.02-.1,.05,0,0,0,0,0,.01-.1,.07-.25,.21-.39,.34-.15,.15-.29,.3-.39,.38Zm-15.48,10.88c.13,.02,.26,.03,.4,.04,.01-.06,.05-.13,.13-.2-.18,.05-.35,.1-.53,.16Z"
												style={{ fill: "#110a08" }}
											/>
											<path
												d="M859.84,159.7c-.75-.16-1.5-.22-2.26-.23,.73-.06,1.38-.11,1.91-.17-1.09-.05-2.18-.07-3.27-.07-.25,0-.51,0-.76,.01-3.19,.02-6.38,.22-9.58,.44-.16,.01-.32,.02-.48,.03-2.9,.2-5.79,.41-8.68,.5-.02,.01-.05,.01-.08,.01-.02,.01-.02,.02-.03,.03,2.11-.01,4.62-.06,7.22-.14-.4,.05-.79,.11-1.16,.18,.76-.03,1.53-.01,2.29,.02h.06s.02,0,.02,0c1.15,.02,2.27,.05,3.3,.1h.09c.44,.01,.86,.03,1.27,.06-.61,.03-1.75,.08-3.18,.12h-.23c-.44,.01-.91,.02-1.39,.03-1.05,.02-2.2,.04-3.36,.04-.77,0-1.55,0-2.32-.01-.7-.01-1.4-.02-2.07-.04h-.45s-.53-.01-.53-.01c-.04-.01-.08-.01-.13-.02-1.47-.06-2.78-.15-3.75-.29-1.76-.11-3.13-.29-2.28-.89-.04-.02-.07-.03-.11-.04-.65,.13-1.25,.19-1.64,.06-.17,.01-.3,.01-.41,.03-.3,.09-.48,.27-.66,.49-.01,.01-.01,.02-.02,.03-.07,.13-.16,.29-.28,.49,.05,0,.09,0,.12,0,.34,0-.21,.24-.32,.43-.1,.04-.18,.06-.24,.07,.22,.02,.45,.03,.68,.03,0-.01-.01-.02-.01-.02,.05,0,.09-.03,.14-.03,.02-.14,.07-.17,.17-.09,.06,0,.12,0,.18-.01,.94-.21,1.58-.23,2.03-.08,.26,.01,.52,.04,.75,.11-.03,.04-.03,.12-.02,.24,.13,0,.26,0,.39,.01-.03-.03-.04-.06-.05-.09l1.4,.11c.16,0,.33,0,.5,0,1.48,.03,2.99,.04,4.52,.03,.04,0,.09,0,.13-.01,1.18-.04,2.36-.09,3.53-.15-.44,.05-.88,.1-1.31,.14-.71,.07-1.42,.14-2.12,.18,3.16,.03,6.3-.06,9.35-.23,.43-.03,.86-.05,1.28-.08,1.24-.08,2.46-.18,3.65-.29,2.88-.26,5.63-.6,8.19-1.01,0,0,.01,0,.01-.01-.04,0-.08,0-.11,.01,.04-.01,.08-.02,.11-.02Zm-2.18,.21c.13-.01,.26-.03,.38-.04s.24-.02,.36-.03c-.23,.03-.48,.05-.74,.07Z"
												style={{ fill: "#ac4a01" }}
											/>
											<path
												d="M849.96,145.93l2.57-.33c.67,.93-1.95,.17-1.45,.93-.36-.02-3.19,.05-1.12-.6h0Z"
												style={{ fill: "#db7203" }}
											/>
											<path
												d="M846.23,146.75c-.08,.54,.01,1.42-.46,1.72,.31-.47-.08-1.61,.46-1.72Z"
												style={{ fill: "#511a0a" }}
											/>
											<path
												d="M858.98,145.32h-.06c-.5,0-1.08,0-1.76,0-.49,0-1,.05-1.52,.12-.01-.01-.01,0-.02,0-.47,.07-.95,.15-1.4,.2-.47,.06-.92,.08-1.32,.02-.12-.01-.24-.04-.36-.07,.2-.06,.42-.11,.64-.15,.01-.01,.02-.01,.03-.01,.76-.16,1.66-.26,2.58-.33,.84-.06,1.69-.09,2.47-.09,.14,0,.29,0,.43,0h.15c2.68,0,4.12,.27,.14,.31Z"
												style={{ fill: "#b3580a" }}
											/>
											<path
												d="M846.23,146.75c.54,.49,.36,1.33-.29,1.62,.18-.52,.28-1.06,.29-1.62Z"
												style={{ fill: "#a44412" }}
											/>
											<path
												d="M845.77,148.47c-.71,1.3,.22-1.5,.2-1.59,.01,.54-.05,1.07-.2,1.59Z"
												style={{ fill: "#e39834" }}
											/>
											<path
												d="M854.48,146.59s-.02,.02-.03,.03c-.11,.06-.41,.11-.82,.14-.06,0-.12,0-.18,0-.27,.02-.58,.03-.92,.04t0,0c-.14,0-.28,.01-.42,.01h-.02c-1,0-2.09-.02-2.82-.07h-.21c-.46-.05-.72-.1-.54-.17,.03,0,.09-.02,.16-.04,.03,0,.08-.01,.12-.02,.14,0,.33-.03,.56-.05,.14,.01,.3,.01,.49,.02h.05c.3,.01,.65,.02,1.03,.03h.16l3.4,.07Z"
												style={{ fill: "#2d0e06" }}
											/>
											<path
												d="M848.32,146.74l3.93,.03c-1.06,.39-4.17,.54-5.46,.77-.44-1,.87-.74,1.53-.81h0Z"
												style={{ fill: "#fb9802" }}
											/>
											<path
												d="M854.71,146.26c-.02,.07-.07,.15-.14,.24-.03,.03-.06,.06-.09,.09l-3.4-.07s-.02-.05-.04-.08h0c-.01-.07-.01-.11,.01-.15,.01-.02,.03-.04,.05-.05,.02-.02,.04-.03,.07-.04,.06-.02,.14-.03,.23-.04,.06-.02,.14-.02,.21-.02h.07c.11,0,.21,0,.31,0,.06-.01,.12-.01,.18-.02,.05-.01,.09-.02,.13-.02,.09-.02,.17-.04,.24-.07,.01,0,.03,0,.04-.02,.05-.03,.09-.06,.12-.1,.04,.02,.11,.03,.19,.03,.15,.01,.35,0,.56,0,.39-.02,.82-.03,1.06,.06,.06,.01,.11,.04,.14,.07,.02,.01,.04,.03,.05,.05,.02,.04,.03,.09,.01,.15Z"
												style={{ fill: "#f88f04" }}
											/>
											<path
												d="M862.68,145.48s-.04,0-.06,.01c-.43,.08-1.19,.16-2.07,.22-.98,.06-2.12,.1-3.11,.11h-.19c-.91,0-1.69-.04-2.09-.12h-.02s-.04-.01-.05-.01c.16-.1,.33-.18,.53-.24,.01,0,.01-.01,.02,0,.86-.27,2.07-.2,3.28-.13h.06c1.25,.07,2.5,.14,3.38-.17,.81,.11,.8,.22,.32,.33Z"
												style={{ fill: "#f8a107" }}
											/>
											<path
												d="M845.5,147.56s-.01,.01-.01,.01c-.05,.08-.12,.13-.22,.17-.25,.12-.63,.13-1.01,.12-.37-.01-.74-.04-1.01-.01-.08-.06-.05-.1,.05-.13h.04s0,0,.02-.01c.3-.09,1.04-.1,1.57-.11h.05c.25-.01,.45-.02,.51-.04h.01Z"
												style={{ fill: "#ebdfb0" }}
											/>
											<path
												d="M860.82,144.7c.03-.06,.76,.04,.82,.04-.28,.06-.55,.05-.82-.04Z"
												style={{ fill: "#875832" }}
											/>
											<path
												d="M839.03,149.44s-.05,.09-.08,.13c-.03,.04-.06,.09-.09,.14-.01,.03-.03,.06-.06,.09-.03,.07-.08,.16-.13,.24-.23,.4-.46,.79-.71,1.17-.02,.03-.04,.06-.06,.09-.36,.55-.75,1.09-1.17,1.61-.05,.07-.1,.14-.16,.21,.1-.17,.5-.82,.97-1.57,.02-.03,.04-.06,.06-.09,.5-.78,1.05-1.64,1.4-2.17,.02-.01,.02-.03,.03-.04,.38-.58,.51-.73,0,.19Z"
												style={{ fill: "#d4be94" }}
											/>
											<path
												d="M833.57,153.38c.53,.08,1.27,.08,1.88,.08-.64-.04-1.39-.05-1.88-.08Zm1.38-1.71c.16,.05,.31,.14,.44,.25-.13-.12-.28-.21-.44-.25Zm2.65-.21c.54-.79,1.13-1.63,1.4-2.17-.35,.53-.9,1.39-1.4,2.17Z"
												style={{ fill: "#09172d" }}
											/>
											<path
												d="M840.11,148.6c.03,.21-.15,.55-.44,.95-.06,.1-.13,.2-.2,.3-.56,.74-1.32,1.62-1.73,2.31-.02,.01-.03,.03-.03,.04-.07,.11-.12,.21-.17,.31-.01-.01-.02-.02-.03-.04-.08-.1,0-.36,.16-.69t.01-.02c.12-.23,.27-.49,.45-.77,.01-.01,.03-.03,.03-.05,.07-.1,.14-.2,.21-.3,.07-.09,.12-.18,.17-.26,.08-.11,.16-.21,.24-.31,.02-.03,.04-.06,.06-.09,0-.01,.02-.02,.02-.02,.13-.16,.25-.32,.36-.46,.02-.02,.03-.03,.03-.04,.37-.43,.69-.76,.86-.86Z"
												style={{ fill: "#a44412" }}
											/>
											<path
												d="M850.28,147.32c-.06-.03-.5,.05-1.05,.14h-.02c-.58,.1-1.27,.22-1.77,.24-.02,0-.04,0-.05,0-.41,.03-.67,0-.61-.16,.02,.04,.67-.07,1.41-.18,.01-.01,.03-.01,.04-.01h.02c.68-.1,1.42-.21,1.81-.2h.03c.21,.01,.3,.05,.19,.16Z"
												style={{ fill: "#ebdfb0" }}
											/>
											<path
												d="M855.25,146.03c-.41,.91-.57,1.92-.67,2.94-.14,1.34-.19,2.71-.57,3.91-.02,.07-.04,.13-.06,.19,.07-.26,.15-1.05,.25-2.02v-.05c.11-1.05,.23-2.3,.39-3.28,.06-.29,.12-.58,.17-.86,.01-.03,.02-.06,.02-.08v-.02s.01-.02,.01-.03c.12-.42,.23-.68,.38-.71,.03,0,.05,0,.08,.01Z"
												style={{ fill: "#582d10" }}
											/>
											<path
												d="M855.23,149.27c-.19,1.42-.57,2.85-.83,4.25,0,.01,0,.02-.01,.03-.2,1.04-.34,2.06-.29,3.04,0,.02,0,.03,0,.04,0,.08,0,.15,.01,.23-.02-.02-.04-.05-.05-.08-.06-.12-.05-.32-.06-.48,.01-.19-.01-.33-.16-.31,0,.03,0,.06-.02,.09-.02,.11-.1,.25-.18,.31-.08,.05-.16,.04-.21-.11,.25-1.1,.42-2.24,.58-3.4,.18-1.3,.34-2.62,.57-3.91,.17-1.01,.38-2,.67-2.94,.19,1.06,.14,2.14-.02,3.24Z"
												style={{ fill: "#c85b05" }}
											/>
											<path
												d="M857.7,146.11c-.49,.21-.87,.21-1.2,.23h-.02c-.25,.02-.46,.04-.65,.16-.06,.05-.11,.09-.16,.15-.09-.21-.1-.36-.05-.46h0c.03-.08,.1-.13,.18-.16,.25-.1,.68-.04,1.08,.02h.01c.31,.04,.61,.08,.81,.06Z"
												style={{ fill: "#f9b62a" }}
											/>
											<path
												d="M824.81,155.12h0v-.08c-.01-.09-.03-.18-.05-.26v-.03c-.11-.48-.31-.89-.57-1.23-.02-.04-.05-.07-.07-.1-.54-.68-1.28-1.09-1.79-1.24h-.01c-.21-.06-.39-.07-.48-.02-.19,.07-.13,.29,.34,.69,0,.01,.01,.01,.02,.02,.01,0,.02,.01,.03,.02h.01c.16,.13,.36,.27,.6,.43,0,0,0,0,0,0,.02,.09-.15,.08-.37,.04-.12-.03-.25-.06-.38-.09-.11-.02-.22-.05-.32-.07-.09-.02-.17-.03-.24-.03h-.04c-.06,.01-.09,.03-.09,.07v.06s.08-.01,.12-.01c.08,0,.16,.01,.23,.01,.18,.03,.32,.09,.42,.17l.05,.05c.08,.07,.13,.17,.15,.28,.01,.09,.01,.2-.01,.32-.02,.06-.04,.13-.07,.2,0,.01-.01,.02-.01,.03-.05,.09-.12,.19-.17,.27-.02,.04-.06,.08-.09,.12,.3,.12,.54-.08,.68-.16,.09-.03,.14-.03,.16,.09,.01,.03,.01,.05,.01,.08v.21s.04,.04,.04,.06c.02,.03,.04,.05,.05,.07,.09,.09,.15,.19,.19,.29,.12,.21,.18,.44,.2,.68,.03,.19,.04,.38,.02,.57,0,.1-.01,.19-.03,.29h0c0,.08-.02,.15-.04,.22h0c-.06,.34-.17,.65-.29,.94,0,.01-.01,.02-.01,.03-.11,.24-.23,.46-.37,.66,.14-.03,.26-.07,.36-.15,.07-.05,.13-.11,.19-.17,.04-.05,.07-.1,.1-.15,.04-.08,.08-.17,.1-.27,.01-.01,.01-.03,.01-.04t0-.02c.11-.44,.08-.99,.12-1.48v-.05c.02-.32,.07-.61,.2-.83,.13-.01,.13,.28,.08,.67-.03,.33-.11,.79-.26,1.38-.02,.08-.03,.14-.05,.2-.01,.03-.02,.07-.03,.11,.11,.1,.19,.18,.25,.25,.38,.45-.21,.42,.07,.84h0s.04,.05,.06,.08h0c.38-.46,.56-1.01,.67-1.58,0-.02,0-.04,0-.06,.11-.59,.15-1.21,.29-1.79,.01-.06,.01-.12,.01-.18h0c0-.16,0-.29-.02-.42Zm-2.16-.79c-.03,.06-.08,.12-.13,.17-.05,.06-.11,.11-.14,.12-.04,.03-.08,.05-.1,.05-.05,.02-.04-.03,.01-.1,.03-.05,.07-.12,.12-.18,.02-.02,.02-.03,.03-.04,.03-.05,.07-.1,.11-.14,0,0,0,0,.01-.02s.02-.03,.02-.03h.02s.02-.02,.03-.01c.02,0,.03,0,.04,.01,.03,.02,.03,.06,.01,.1-.01,.02-.02,.04-.03,.07Z"
												style={{ fill: "#06223f" }}
											/>
											<path
												d="M827.64,154.78c-.11,.02-.2,.01-.27-.02-.33-.18-.25-.91-.63-1.47h0s-.18-.19-.18-.19c-.36-.37-1.02-.6-2.25-.45-.09,.01-.18,.02-.27,.03-.05,.07-.01,.18,.08,.34,.02,.04,.04,.08,.06,.11,.06,.09,.13,.19,.2,.31,.17,.26,.36,.51,.41,.72,.09,.25,.09,.38,.05,.47-.01,.05-.04,.1-.08,.15-.01,.01-.02,.03-.04,.04,0,0-.03,.02-.04,.03-.1-.5-.27-.95-.49-1.33-.02-.04-.05-.07-.07-.1-.38-.59-.91-1.03-1.6-1.32,1.1-.05,2.1-.16,2.92-.03,1.03,.17,1.78,.72,2.11,2.24,.01,.02,.01,.03,.01,.05,.03,.13,.06,.27,.08,.42Z"
												style={{ fill: "#fefdfb" }}
											/>
											<path
												d="M854.3,146.76s-.07,.04-.12,.07c-.17,.06-.46,.13-.8,.19-.1,.01-.2,.03-.31,.04-.69,.1-1.52,.16-2.13,.16h-.03c-.32,0-.59-.02-.73-.07,.6-.12,1.13-.2,1.67-.27h.03c.22-.02,.43-.05,.64-.07t0,0c.31-.02,.61-.04,.92-.04,.06,0,.12,0,.18,0,.22-.01,.44-.01,.67,0Z"
												style={{ fill: "#f0cf71" }}
											/>
											<path
												d="M854.81,146.58c-.28,2.11-1.03,7.67-1.38,9.69-.05-2.88,.82-6.63,1.38-9.69Z"
												style={{ fill: "#ebdfb0" }}
											/>
											<path
												d="M864.3,145.11s-.04,0-.07-.01c-.11,0-.27-.01-.37-.06h-.01s-.07-.06-.08-.1l.53,.17Z"
												style={{ fill: "#2f4e66" }}
											/>
											<path
												d="M859.45,146.12s-.07,.02-.12,.03h-.01s-.02,.01-.04,.02c0,0-.02,.01-.04,.01h-.01c-.34,.09-.8,.17-1.27,.22-.04,.02-.08,.02-.12,.02-1.33,.17-2.65,.2-1.36-.08h.02c.28-.06,.67-.14,1.2-.23h.92s.83,.01,.83,.01Z"
												style={{ fill: "#ebd493" }}
											/>
											<path
												d="M863.77,145.51c-.39,.11-1.19,.25-2,.34-.85,.11-1.71,.16-2.06,.06,.27-.09,.55-.15,.84-.2,.66-.11,1.37-.14,2.07-.22,.02-.01,.04-.01,.06-.01,.31-.04,.62-.09,.92-.16,.52,0,.49,.09,.17,.19Z"
												style={{ fill: "#f1db87" }}
											/>
											<path
												d="M833.17,150.68c-.01,.23-.26,.88-.49,.76l.49-.76Z"
												style={{ fill: "#76330e" }}
											/>
											<path
												d="M845.28,155.87c-1.25-.45,.34-5.13,.49-6.78,1.65-1.53-.55,5.21-.49,6.78Z"
												style={{ fill: "#ce6104" }}
											/>
											<path
												d="M854.54,147.38s-.03,0-.05,.02c-.48,.42-1.03,7.1-1.32,7.1-2.05,.58-5.25-5.12-6.36-6.21-.58,.19,4.27,5.59,4.06,5.73-.14,.07-4.15-1.16-4.79-.97-.08,.02-.11,.06-.08,.13t.02,.01s.02,.01,.03,.01c.02,0,.05,0,.08,.02,.11,.03,.25,.06,.39,.09,.14,.03,.3,.06,.47,.1,.7,.14,1.65,.34,2.49,.53,.07,.02,.13,.04,.2,.05,.98,.22,1.74,.43,1.67,.53,.07,.1,.14,.19,.2,.28,0,0,.01,0,.01,.01,.61,.81,.89,1.01,.65,1.03-.13,.02-.42-.01-.9-.01h-.66c-.02,.13,.1,.16,.3,.17,.19,0,.47-.03,.77-.03,.14,0,.28,.01,.42,.02,.13,.01,.26,.04,.37,.07,.07,.02,.13,.04,.18,.07,.21,.08,.4,.21,.54,.4,.03,.02,.04,.05,.06,.07,0-.03,0-.05,.01-.08,0-.08,0-.15,.01-.23,.05-.74,.13-1.48,.23-2.21h0v-.03s.01-.04,.01-.06c.22-1.7,.54-3.39,.81-5.09l.03-.18c.07-.44,.14-.87,.2-1.31-.02-.02-.03-.03-.05-.03Zm-1.53,8.7c-.1-.1-.2-.2-.3-.3-.29-.31-.57-.58-.74-.79-.03-.04-.06-.07-.08-.11-.02-.01-.02-.02-.02-.03-.04-.05-.06-.1-.06-.13-.02-.05-.01-.08,0-.1,.01-.02,.02-.03,.04-.04,.13-.07,.51,0,1.27,.21,.13-.06,0,1.41-.11,1.29Z"
												style={{ fill: "#141e25" }}
											/>
											<path
												d="M830.67,155.07c-.33-.58-.65-.98-.96-1.26-.04-.04-.07-.08-.11-.1-.69-.58-1.34-.63-1.88-.77-.27-.07-.52-.17-.72-.36-.07-.06-.13-.14-.19-.23-.05-.07-.09-.14-.12-.22-.01-.01-.02-.03-.03-.05,.39-.06,.77-.07,1.12,0,.72,.1,1.36,.44,1.85,.95,.4,.4,.71,.92,.9,1.52,.06,.17,.1,.35,.14,.53Z"
												style={{ fill: "#fefdf7" }}
											/>
											<path
												d="M827.71,155.18c-.12,.01-2.87-.19-2.99-.13-.13-.39,.3-.23,.07-.89-.1-.43-.8-1.06-.76-1.48,3.73-.41,2.72,1.86,3.68,2.5h0Z"
												style={{ fill: "#fdda88" }}
											/>
											<path
												d="M838.78,150.07c.1,.19-.65,1.04-1.1,1.69t-.01,.02c-.29,.41-.45,.73-.2,.74,.02,0,.04,0,.07,0l-.64,.85c-.26-.03-.28-.2-.17-.45,.17-.4,.7-1.02,1.17-1.61,.02-.03,.04-.06,.06-.09,.06-.07,.12-.14,.17-.22,.01-.01,.03-.03,.03-.05,.08-.1,.16-.2,.21-.3,.07-.09,.12-.18,.17-.26,.06-.13,.11-.24,.13-.34h.03s.07,.01,.08,.03Z"
												style={{ fill: "#76330e" }}
											/>
											<path
												d="M832.68,151.43c.1,.09-.01,.19-.07,.28-.16-.06,.04-.2,.07-.28Z"
												style={{ fill: "#76330e" }}
											/>
											<path
												d="M845.77,149.09l-.83,4.36c.29-1.33,.06-3.37,.83-4.36Z"
												style={{ fill: "#582d10" }}
											/>
											<path
												d="M845.51,149.32c-.02,.11-.04,.22-.05,.33v.02c-.13,.73-.24,1.46-.34,2.2h0v.04s-.01,.04-.01,.06c-.14,.9-.26,1.81-.42,2.71-.06,.42-.13,.83-.21,1.24-.01,.02-.01,.03-.01,.03-.02,.14-.05,.28-.08,.42-.02-.48,0-.99,.05-1.53,0-.02,0-.04,.01-.06,.04-.54,.12-1.1,.23-1.66,.02-.17,.05-.34,.08-.51h.01c.1-.53,.21-1.04,.33-1.55,.13-.6,.27-1.19,.41-1.74Z"
												style={{ fill: "#ebdfb0" }}
											/>
											<path
												d="M845.54,149.17s-.02,.09-.02,.13c0,.01-.01,.01-.01,.02,.01-.05,.02-.1,.03-.15Z"
												style={{ fill: "#ebdfb0" }}
											/>
											<path
												d="M832.52,151.66c.05,.2-.13,.46-.34,.72-.01,0-.01,0-.01,0-.19,.22-.4,.44-.51,.62,.02-.12,.06-.23,.12-.34,.01-.03,.03-.05,.05-.08,.09-.16,.21-.3,.33-.45,0,0,.01,0,.01,0,.13-.15,.25-.3,.35-.47Z"
												style={{ fill: "#482919" }}
											/>
											<path
												d="M821.57,154.27c-.02,.72-.23,.71-.2,0,.02-.72,.23-.71,.2,0Z"
												style={{ fill: "#d2d2cf" }}
											/>
											<path
												d="M821.9,154.74c-.3,.3-.04-.76-.03-1.03,.2,0,.01,.86,.03,1.03Z"
												style={{ fill: "#adb29f" }}
											/>
											<path
												d="M822.32,153.75c.3,.15-.29,1.17-.48,1.07,.15-.12,.39-.81,.48-1.07Z"
												style={{ fill: "#acb6be" }}
											/>
											<path
												d="M836.14,153c-.16-.36-.42-.81-.75-1.08-.13-.11-.28-.2-.44-.25-.26-.07-.55-.03-.87,.17-.11,.08-.23,.17-.34,.29-.12,.11-.24,.25-.37,.42,.06-.09,.13-.18,.19-.26,.02-.02,.03-.04,.05-.06,.2-.26,.41-.45,.61-.57,.21-.14,.42-.21,.61-.21,.06,0,.12,0,.18,.03,.01-.01,.02-.01,.03,0,.13,.03,.26,.1,.38,.21,.08,.06,.16,.14,.22,.24,.05,.07,.1,.14,.14,.22,.07,.12,.14,.25,.2,.39s.11,.3,.16,.46Z"
												style={{ fill: "#c7c4b5" }}
											/>
											<path
												d="M830.5,155.07h-.04c-.69,.1-1.26,.1-1.74-.03-.35-.1-.64-.28-.86-.55-.21-.27-.34-.62-.39-1.09-.02-.14-.03-.31-.03-.48,.09,0,.19,0,.28,.02,.75,.03,1.38,.29,1.88,.77,.04,.02,.07,.06,.11,.1,.33,.33,.59,.75,.79,1.26Z"
												style={{ fill: "#fdda88" }}
											/>
											<path
												d="M831.5,152.63c-.14,.14-1.06-.39-.64-.27,.08,.03,.81,.12,.64,.27Z"
												style={{ fill: "#adb29f" }}
											/>
											<path
												d="M815.5,156.41v.02c-.01,.47-.06,.66-.12,.61-.08-.07-.16-.64-.12-1.59,.02,.02,.06,.05,.09,.05,.04,.02,.08,.02,.12,.01,0,.04,0,.08,.01,.12v.06c.02,.29,.02,.53,.02,.72Z"
												style={{ fill: "#f9b62a" }}
											/>
											<path
												d="M822.67,154.16c.16,.16-.57,.75-.38,.41,.05-.02,.3-.54,.38-.41Z"
												style={{ fill: "#acb6be" }}
											/>
											<path
												d="M835.78,152.94c-.37,.04-.94-1.28-.5-.93,.1,.3,.53,.74,.5,.93Z"
												style={{ fill: "#6ab1d2" }}
											/>
											<path
												d="M822.88,154.97c-.31,.05-.02-.17-.26-.28,.36-.41,.22,.17,.26,.28Z"
												style={{ fill: "#879b9e" }}
											/>
											<path
												d="M840.15,153.42s0,.08-.01,.1c-.02,.07-.06,.08-.12,.04-.06-.03-.14-.11-.23-.21,0-.01-.01-.01-.01-.01-.11-.15-.21-.29-.31-.41-.04-.06-.09-.12-.14-.19-.27-.38-.53-.77-.67-.91l-.03-.03c-.12-.15-.06-.13,.06-.09,.1,.05,.25,.11,.31,.09,0,.06,.01,.12,.03,.18h0s.02,.07,.03,.1c.01,.01,.02,.02,.02,.04,.1,.25,.28,.53,.49,.78,.01,.01,.02,.03,.04,.04,.03,.04,.07,.08,.1,.11,.02,.04,.06,.08,.1,.1,.07,.07,.14,.13,.21,.18,.04,.04,.08,.07,.13,.09Z"
												style={{ fill: "#d2d2cf" }}
											/>
											<path
												d="M822.62,154.68c.24,.11-.05,.33,.26,.28-.05,.5-.85-.04-.26-.28Z"
												style={{ fill: "#2f4e66" }}
											/>
											<path
												d="M822.1,157.11c-.11-.76,.29-1.58-.68-1.83-1.13-.54,2.34-.48,.68,1.83Z"
												style={{ fill: "#f0f8fa" }}
											/>
											<path
												d="M822.33,154.84c.21,.12,.13,.57,.6,.2,.37,.38-.94,.29-.6-.2Z"
												style={{ fill: "#879b9e" }}
											/>
											<path
												d="M837.85,152.42c-.13,.16-.27,.37-.46,.63,.04-.14,.18-.35,.46-.63Z"
												style={{ fill: "#06182f" }}
											/>
											<path
												d="M838.5,152.07c-.11-.09-.2-.1-.33-.01,.09-.12,.2-.2,.33,.01Z"
												style={{ fill: "#06182f" }}
											/>
											<path
												d="M838.67,153.31c-.13,.01-.26,.02-.37,.02,.19-.03,.34-.04,.37-.02Z"
												style={{ fill: "#06182f" }}
											/>
											<path
												d="M839.29,153.12c-.2-.06-.35-.3-.48-.54,.16,.2,.36,.39,.48,.54Z"
												style={{ fill: "#06182f" }}
											/>
											<path
												d="M841.55,152.34c-.19,.18-.35,.34-.49,.47-.08,.07-.14,.13-.2,.18-.39,.34-.6,.44-.75,.36h-.01c-.16-.28-.34-.55-.55-.8h0c-.14-.23-.31-.48-.55-.75,.01,.02,.31,.07,.7,.13,.58,.09,1.37,.2,1.7,.3,.05,.02,.08,.03,.11,.05,.05,.02,.06,.04,.04,.06Z"
												style={{ fill: "#fefdfb" }}
											/>
											<path
												d="M839.03,151.99s.02,.06,.03,.09c-.04-.07-.09-.14-.14-.21,.04,.04,.08,.07,.11,.11h0Z"
												style={{ fill: "#141e25" }}
											/>
											<path
												d="M840.02,153.33c-.16-.1-.3-.24-.41-.39,.13,.15,.27,.28,.41,.39Z"
												style={{ fill: "#141e25" }}
											/>
											<path
												d="M821.49,155.86c-.91,.2-.53-.32-1.14,.05-.83-.82,.93-.87,1.14-.05Z"
												style={{ fill: "#fefdfb" }}
											/>
											<path
												d="M855.33,148.96c-.02,.08-.03,.17-.05,.26,0,.01,0,.02,0,.04h0c-.26,1.36-.35,3.23-.61,4.68v.03c-.02,.09-.03,.17-.05,.25-.12,.59-.28,1.09-.5,1.42,.1-.68,.19-1.39,.27-2.09,.01-.01,.01-.02,.01-.03,.18-1.46,.39-2.93,.83-4.25,.02-.07,.04-.14,.07-.2-.01-.01,0-.01,0-.02,.01-.03,.02-.06,.03-.09Z"
												style={{ fill: "#e27b10" }}
											/>
											<path
												d="M839.41,153.15s-.08-.01-.12-.03c-.2-.06-.35-.3-.48-.54-.11-.19-.2-.37-.3-.5l.5,.59,.06,.07c.09,.12,.2,.26,.34,.41Z"
												style={{ fill: "#2f4e66" }}
											/>
											<path
												d="M860.84,148.71c-.12-.05-.25-.09-.38-.11h-.03c-.43-.08-.89-.02-1.32,.14-.03,.01-.06,.02-.09,.04-.46,.17-.9,.46-1.24,.82-.03,.03-.06,.06-.09,.09-.27,.3-.48,.64-.58,1,.2,.12,2.49,.19,1.74,.45h0c-.55-.19-.98-.22-1.32-.12h-.02c-.38,.09-.66,.34-.86,.67-.3,.45-.48,1.06-.65,1.7-.13,.45-.26,.92-.42,1.35-.02,.04-.03,.08-.05,.12-.04,.05,.11,.1,.34,.15,.19,.06,.47,.1,.86,.14,.2,.03,.4,.05,.58,.07,.13,.02,.27,.04,.42,.06l.21,.03s.02,.01,.03,.01h0c-.02,.1-.08,.17-.16,.21-.03,.01-.07,.02-.11,.03-.15,.02-.36,0-.58-.02-.11-.01-.23-.03-.34-.05-.23-.05-.46-.09-.66-.1-.13,0-.25-.02-.34,0-.05,0-.09,0-.12,.02-.05,.01-.1,.03-.13,.06-.14-.14-.26-.24-.35-.32-.03-.03-.05-.05-.07-.07-.14-.14-.21-.22-.22-.29h-.01c-.02-.16,.22-.28,.5-.91,.26-1.09,.95-2.7,1.82-3.94,.03-.03,.05-.07,.07-.1,.11-.14,.21-.27,.32-.4,.09-.09,.17-.18,.25-.27,.07-.08,.14-.15,.21-.21,.07-.07,.14-.13,.21-.18,.84-.72,1.75-.92,2.59-.06Z"
												style={{ fill: "#f9f8ee" }}
											/>
											<path
												d="M821.42,155.28c1.22,.09,.64,2.85-.07,1.98,.48-.5,.64-1.43,.07-1.98Z"
												style={{ fill: "#51b5df" }}
											/>
											<path
												d="M820.11,156.29c-.32,.02-.72,.03-1.04-.12,.18-.81,1.28-.7,1.04,.12Z"
												style={{ fill: "#f0f8fa" }}
											/>
											<path
												d="M836.61,153.66s-.07-.01-.11-.01c-.03,0-.06-.01-.09-.01-.09,0-.21,0-.33-.02-.11-.01-.23-.02-.36-.02h-.08c-.11-.01-.22-.02-.33-.02-.29-.02-.6-.03-.9-.05-.2-.01-.4-.02-.59-.03h-.05c-.1-.01-.2-.02-.29-.02-.25-.02-.45-.04-.59-.05-.03-.01-.05-.01-.07-.01-.13-.03-.15-.06,0-.07,.02-.01,.05-.01,.08-.01,0-.01,.02-.01,.03,0,.03-.01,.07-.02,.12-.02,.07,.02,.24,.04,.47,.06h.05c.49,.03,1.24,.04,1.88,.08,.09,0,.17,0,.26,.01,.66,.03,1.12,.08,.9,.19Z"
												style={{ fill: "#adb29f" }}
											/>
											<path
												d="M815.96,156.79c-.06,.1-.14,.29-.23,.45-.02,.05-.04,.09-.06,.12-.05,.07-.09,.13-.13,.17-.1,.07-.18-.01-.21-.44,.02,0,.04,0,.05-.01,.19-.04,.11-.4,.19-.55,.01-.06,.06-.08,.15-.04,.01,0,.02,0,.03,.01,.06,.1-.03,.22,.12,.27,.02,.01,.05,.02,.09,.02Z"
												style={{ fill: "#76330e" }}
											/>
											<path
												d="M862.56,149.1s-.01,.01-.02,.01c-.45-.27-.93-.49-1.44-.66,0-.02-.02-.03-.02-.05-.06-.14,.03-.18,.2-.15h.02c.27,.04,.71,.22,1.02,.4,.07,.05,.13,.09,.18,.13,.06,.04,.1,.08,.13,.12h0c.08,.1,.07,.17-.07,.2Z"
												style={{ fill: "#f9f8ee" }}
											/>
											<path
												d="M821.49,155.86c.14,.55-.33,.09-.59,.34-.14,.17-.44,0-.37,.2-.2,.68,.25,.25,.55,.58-.24,.08-1.44,.14-1.17-.14,.44-.19,.58-.51,.43-.94,.6-.37,.22,.16,1.14-.05h0Z"
												style={{ fill: "#b5e0f0" }}
											/>
											<path
												d="M827.81,155.78c-.83-.33-3.56,.52-2.96-.75-.04,.47,3.11-.24,2.96,.75Z"
												style={{ fill: "#f9edac" }}
											/>
											<path
												d="M827.74,155.31c-.66-.03-2.9-.05-2.88-.28,.05,.06,3.06,.02,2.88,.28Z"
												style={{ fill: "#2d0e06" }}
											/>
											<path
												d="M862.54,149.11c-.39,.38-.7,.7-.94,.94,0,.01-.02,.02-.03,.03-.32,.32-.51,.52-.62,.59-.01,.01-.03,.01-.04,.01-.14,.04-.05-.28,.05-.96,.05-.34,.1-.76,.14-1.27,.51,.17,.99,.39,1.44,.66Z"
												style={{ fill: "#ff9500" }}
											/>
											<path
												d="M823.06,155.52c.18,.44-1.1-.11-.1-.06,.04,0,.08,.03,.1,.06Z"
												style={{ fill: "#acb6be" }}
											/>
											<path
												d="M819.08,156.17c.32,.15,.71,.13,1.04,.12,0,.48-.98,.72-1.04-.12Z"
												style={{ fill: "#95bfca" }}
											/>
											<path
												d="M819.57,158.82h0c0,.07,0,.13-.01,.2-1.21-.25-2.34-.39-3.38-.49-.05-.01-.09-.01-.14-.02-1.32-.14-2.49-.22-3.49-.44h-.04c-.36-.08-.7-.17-1.01-.28,1.26-.89,3.37,.05,4.58-.26,.02,0,.04,.01,.07,.01,.35,.07,.77,.05,1.21,.03h.07c.45-.02,.91-.04,1.29,.05h.01c.26,.07,.48,.19,.62,.4,.14,.19,.22,.44,.22,.8Z"
												style={{ fill: "#fefdfb" }}
											/>
											<path
												d="M823.46,157.98h-.07c.14-3.15,.86-2.89,.07,0Z"
												style={{ fill: "#2f4e66" }}
											/>
											<path
												d="M821.51,156.17c.29,.8-1.13,.98-.98,.4-.07-.38,.61-.5,.98-.4Z"
												style={{ fill: "#80cae7" }}
											/>
											<path
												d="M844.52,152.93l-.2,1.05-3.36-.75h-.01c.15-.28,.37-.47,.62-.58,.01,0,.02-.01,.03-.01,.45-.19,1.02-.17,1.56-.07h.01c.45,.08,.87,.21,1.2,.32,.05,.01,.1,.03,.15,.04Z"
												style={{ fill: "#fefdfb" }}
											/>
											<path
												d="M822.8,156.13c-.36-.18,.04-.28,.24-.15,.14,.13-.12,.23-.24,.15Z"
												style={{ fill: "#adb29f" }}
											/>
											<path
												d="M819.63,159.19c-.06,.07-.27,.1-.6,.1h-.04c-.91-.01-2.6-.23-4.16-.49h-.01c-1.4-.24-2.69-.51-3.17-.67t-.02-.01c-.1-.03-.16-.07-.18-.09h.07c.35,.01,.67,.02,.99,.04h.04c1.26,.08,2.29,.24,3.49,.44,.05,0,.09,0,.14,.02,.95,.15,2.02,.33,3.38,.49,.03,.02,.05,.04,.06,.06,.04,.05,.04,.08,.01,.11Z"
												style={{ fill: "#f8a107" }}
											/>
											<path
												d="M832.12,155.19c-.75,.18-3.19,.05-4.03,.11,.48-.62,2.97-.08,4.03-.11h0Z"
												style={{ fill: "#511a0a" }}
											/>
											<path
												d="M827.53,158.45h-.04c-.2-.02-.38-.03-.55-.05-.01-.01-.02,0-.02,0-.7-.06-1.22-.12-1.58-.29-.36-.16-.57-.44-.62-.93-.02-.13-.03-.29,0-.46,0-.28,.04-.61,.11-1,.09-.01,.18-.03,.27-.03h.02c.67-.1,1.24-.1,1.69,.02h.05c.57,.14,.93,.47,1,1.03,.07,.43-.03,.99-.32,1.71Z"
												style={{ fill: "#ff9500" }}
											/>
											<path
												d="M839.92,153.69s-.02,.03-.09,.04h-.01s-.12,.02-.2,.03c-.36,.02-.98,.03-1.52,0-.1,0-.2-.01-.3-.01-.37-.02-.66-.05-.72-.1t-.01-.02s.01-.02,.02-.03c0,.01,.07,.01,.18,.01,.25,.01,.71,.01,1.18,.01h.08c.13,0,.26,0,.38,.01,.09,0,.18,0,.26,0,.12,0,.24,0,.34,.01,.1,0,.19,.01,.25,.01h.04s.07,.01,.09,.01c0,0,.01,0,.01,.01,0,0,.02,0,.02,.01Z"
												style={{ fill: "#c7c4b5" }}
											/>
											<path
												d="M860.78,149.33c.19,.59-1.45,.33-1.88,.99-.54-.25,1.54-.99,1.88-.99Z"
												style={{ fill: "#f7efd3" }}
											/>
											<path
												d="M828.08,155.31l2.7-.04c.43,.46-3.18,.45-2.7,.04Z"
												style={{ fill: "#f9b62a" }}
											/>
											<path
												d="M822.83,156.33c.23,.05,.19,.24-.04,.19-.23-.05-.19-.24,.04-.19Z"
												style={{ fill: "#d2d2cf" }}
											/>
											<path
												d="M836.39,153.86s.02-.01,.04-.01c.11-.02,.2-.01,.28,.03,.13,.05,.22,.16,.29,.29,.07,.11,.11,.24,.16,.35,.22,.44-1.3-.48-.77-.66Z"
												style={{ fill: "#fb9802" }}
											/>
											<path
												d="M864.17,151.19c-.06-.13-.12-.25-.2-.37-.11-.24-.27-.46-.43-.66-.01-.02-.03-.04-.06-.06-.05-.06-.11-.11-.17-.17-.19-.22-.42-.42-.68-.6,0,0,.01-.02,.01-.03h.01c.03-.12,.11-.17,.19-.17h0s.06,0,.09,.02c.05,.02,.1,.05,.16,.09,.05,.04,.11,.09,.17,.15,.07,.07,.15,.15,.22,.24,.05,.06,.1,.13,.15,.19,.1,.13,.19,.26,.28,.39,.08,.12,.14,.24,.21,.35,0,.01,.01,.01,.01,.01,.05,.11,.1,.22,.14,.31,.02,.05,.04,.1,.05,.14t0,.01c.09,.23,.06,.33-.16,.16Z"
												style={{ fill: "#faf6df" }}
											/>
											<path
												d="M839.64,154.01c-.43,.56-1.05,.97-1.59,.95h-.01c-.19,0-.37-.07-.53-.21h-.02c-.06-.06-.09-.1-.15-.17t-.01,0c-.09-.13-.17-.3-.24-.5-.02-.05-.03-.12-.05-.18h.01c.21,.07,.69,.05,1.18,.02h.08c.6-.03,1.2-.06,1.31,.07h.01s.01,.02,.01,.03Z"
												style={{ fill: "#fb9802" }}
											/>
											<path
												d="M833.32,155.88c-.39,0-.9,0-1.45-.01-.62-.01-1.3-.02-1.94-.04-.4,0-.78,0-1.12-.02-.27,0-.53,0-.74-.02h-.01s-.05-.09-.01-.12c.06-.05,.2-.08,.4-.11h.03c.45-.04,1.17-.04,1.92-.02h0c.28,.01,.55,.02,.82,.04,.61,.04,1.18,.09,1.57,.15,.14,.02,.26,.04,.35,.06,.14,.03,.2,.06,.17,.09Z"
												style={{ fill: "#f9efb8" }}
											/>
											<path
												d="M860.44,150.57s-.07,.05-.11,.07c-.51,.33-1.4,.42-2.38-.53,.97,1.02,.01,.29-.84,.58,.02-.31,.24-.67,.58-1,.03-.03,.06-.06,.09-.09,.35-.33,.8-.62,1.24-.82,.03-.02,.06-.03,.09-.04,.51-.22,1-.3,1.32-.15h.02s.01,.01,.01,.01c.15,.09,.26,.23,.3,.44,0,.01,0,.03,.01,.04,0,.08,0,.16,0,.25-.33,0-2.42,.74-1.88,.99,.36-.22,.66-.37,.91-.46,.01,0,.02-.01,.03-.01,.21-.08,.38-.11,.52-.12h.02c.56-.02,.5,.49,.06,.84Z"
												style={{ fill: "#ff9500" }}
											/>
											<path
												d="M844.34,154.18c-.08,.3-.14,.58-.18,.83-.04,.2-.06,.4-.09,.58-.01-.01-.01-.03-.03-.04-.11-.09-.27-.15-.47-.18h-.01c-.43-.09-1.02-.06-1.59-.03,0-.01-.03-.01-.04,0-.5,.01-.96,.03-1.27-.01,0,.01,.01,.02,.03,.03-.14-.03-.22-.06-.24-.1-.01,.02-.01,.03-.01,.04-.19-.37-.41-.75-.61-1.14l-1.04,.96c-.09,.07-.05,.13,.06,.17-.16,.01-.29,.05-.4,.11,1.1-1.01,.98-1.08-.15-.19,.03-.03,.07-.07,.1-.11l-.35-.14c.54,.02,1.16-.39,1.59-.95,0-.01,0-.02-.01-.03,.13,.04,.22,.09,.23,.17l.33-.27,.76-.64,3.37,.74h.01c.01,.07,.02,.14,.01,.2Z"
												style={{ fill: "#ffd454" }}
											/>
											<path
												d="M840.95,153.24l-.76,.64c.15-.2,.4-.4,.76-.64Z"
												style={{ fill: "#ffd454" }}
											/>
											<path
												d="M843.56,155.37c-.44,.09-1.02,.02-1.59-.03,.57-.03,1.16-.06,1.59,.03Z"
												style={{ fill: "#ffd454" }}
											/>
											<path
												d="M844.34,154.18c.03,.38-.03,.64-.18,.83,.04-.25,.1-.53,.18-.83Z"
												style={{ fill: "#ffd454" }}
											/>
											<path
												d="M863.97,150.82c.03,.18-.12,.27-.38,.31h-.01c-.32,.03-.79-.01-1.32-.06-.02,0-.04-.01-.06,0-.2-.03-.42-.05-.63-.07-.02,0-.04,0-.07-.01-.09,0-.19-.01-.28-.02-.21,.02-.04-.22,.25-.5,0,0,0-.01,.01-.02,.44-.46,1.15-1.07,1.15-1.12,.27,.23,.49,.42,.68,.6,.06,.06,.12,.11,.17,.17,.03,.02,.05,.04,.06,.06,.29,.3,.42,.51,.43,.66Z"
												style={{ fill: "#ff9500" }}
											/>
											<path
												d="M823.29,156.63c.39,1.18-1.43,1.03-.53,.64,.32,.02-.62-.45,.53-.64Z"
												style={{ fill: "#051528" }}
											/>
											<path
												d="M823.31,156.55c.58,.47-1.03,3.2-1.76,2.69,1.12-.43,1.76-1.49,1.76-2.69h0Z"
												style={{ fill: "#2f4e66" }}
											/>
											<path
												d="M822.85,156.8c-.5,.19,.23,.43-.09,.46-.56,0-.2,.44,.11,.28,.08,.58-.48,.13-.65-.05,.13-.19,.3-.86,.63-.69h0Z"
												style={{ fill: "#acb6be" }}
											/>
											<path
												d="M830.83,156.54c0,.2-.06,.47-.23,.8l-.05,.08h0c-.24,.48-.42,.79-.58,.98-.09,.1-.18,.17-.27,.22h-.01c-.22,.1-.47,.06-.89-.03-.01-.01-.02-.01-.04-.01-.24-.06-.53-.12-.9-.19,.08-.25,.13-.62,.16-1.01,0-.05,0-.1,0-.14,.03-.41,.04-.83,.04-1.17v-.28c.21,.02,.47,.02,.74,.02,.37-.01,.77-.02,1.12,.02,.5,.07,.89,.24,.9,.71Z"
												style={{ fill: "#ff9500" }}
											/>
											<path
												d="M832.12,155.19c1.77,0,1.57,.34-.02,.06l.02-.06Z"
												style={{ fill: "#511a0a" }}
											/>
											<path
												d="M841.2,157.5c-.06,.31-.3,.52-.81,.61h-.03c-.37,.07-.9,.06-1.6-.04-.11-.12-.2-.24-.29-.37,0,0,.01,0,0-.01-.27-.38-.44-.8-.5-1.17v-.02c-.04-.29,0-.56,.11-.77h.01c.07-.14,.19-.25,.35-.32h.01c.11-.07,.24-.11,.4-.12h.01c.2-.03,.43-.02,.71,.03,.07-.03,.02-.05-.07-.07-.11-.02-.26-.03-.4-.05-.14-.01-.27-.04-.31-.08l1.04-.96c.2,.39,.42,.77,.61,1.14,.05,.08,.09,.17,.13,.25,.08,.14,.15,.27,.21,.4,.31,.61,.51,1.15,.42,1.55Z"
												style={{ fill: "#cf6900" }}
											/>
											<path
												d="M838.4,155.1s-.07,.08-.1,.11c0,.01-.01,.01-.01,.01-.14,.16-.26,.25-.36,.29h-.01c-.13,.06-.24,.02-.31-.09,0,0-.01-.01-.01-.02-.04-.1-.08-.21-.11-.32-.03-.11-.04-.22-.05-.36l.05,.02h.02s.53,.22,.53,.22h.01l.35,.14Z"
												style={{ fill: "#cc6b07" }}
											/>
											<path
												d="M852.21,155.84c-.08-.03-.18-.08-.3-.15,0,0,0-.01-.02-.01-.23-.12-.52-.28-.78-.34-.07-.02-.13-.03-.19-.03-.07-.02-.14-.02-.2,.01-.04,0-.08,0-.11,.04-.05,.02-.09,.05-.12,.1h-.01c-.09-.15-.17-.28-.25-.39-.18-.29-.4-.63-.45-.54l-.07,.11-.19,.28s-.01,.02-.01,.03c-.01,0-.02,.03-.03,.05l-.1,.14h-.01c-.31-.25-.81-.37-1.35-.46-.67-.13-1.39-.21-1.8-.45-.15-.08-.26-.19-.31-.32-.09-.18-.07-.42,.09-.73t.02,.01h.03s.05,.02,.08,.03c.11,.03,.25,.06,.39,.09,.14,.03,.3,.07,.47,.1,.73,.13,1.63,.3,2.49,.53,.07,.02,.13,.04,.2,.05,.71,.21,1.38,.47,1.87,.81,0,0,.01,0,.01,.01,.37,.26,.64,.56,.75,.93,.08,.16,.03,.17-.1,.1Z"
												style={{ fill: "#fefdfb" }}
											/>
											<path
												d="M822.26,158.43c-.12-.12-.44-1.27-.11-.7,.1,.18,.37,.55,.11,.7Z"
												style={{ fill: "#acb6be" }}
											/>
											<path
												d="M821.98,157.61c-.21,.46,.42,.94-.02,1.02-.06-.27-.7-1.09,.02-1.02Z"
												style={{ fill: "#acb6be" }}
											/>
											<path
												d="M821.6,157.77c-.04,.08,.6,1,.2,.88,.05-.33-.4-.6-.2-.88Z"
												style={{ fill: "#2f4e66" }}
											/>
											<path
												d="M860.17,151.54s-.03,.02-.04,.03t-.01,.02s-.04,.02-.08,0h-.01c-.07-.02-.19-.08-.31-.16,0,0-.02-.01-.03-.02-.19-.11-.38-.25-.47-.35,0-.01-.02-.02-.03-.03-.02-.03-.03-.05-.03-.07,0,0,.01,0,.02-.02,0-.02,.04-.02,.09-.01,.02,0,.05,.01,.07,.01l.59,.08,.55,.08c.32,.03-.16,.32-.31,.44Z"
												style={{ fill: "#ff9500" }}
											/>
											<path
												d="M822.01,157.8l.25,.62c-.17,.15-.52-.67-.25-.62Z"
												style={{ fill: "#2f4e66" }}
											/>
											<path
												d="M833.34,155.78c.79,0,1.57,.04,2.35,.13-.7-.02-1.89,.22-2.35-.13Z"
												style={{ fill: "#dcaa51" }}
											/>
											<path
												d="M821.57,158.04c.11,.17,.32,.52,.18,.69-.2-.13-.21-.45-.18-.69Z"
												style={{ fill: "#adb29f" }}
											/>
											<path
												d="M822.6,157.99c.11,.07,.01,.21-.09,.13-.11-.07-.01-.21,.09-.13Z"
												style={{ fill: "#acb6be" }}
											/>
											<path
												d="M838.86,155.29h-.01c-.11-.04-.15-.1-.06-.17,.1,.04,.2,.07,.31,.08,.13,.04,.26,.05,.4,.05,.03,.01,.07,.01,.1,.01,.18,.11-.46,.12-.74,.03Z"
												style={{ fill: "#76330e" }}
											/>
											<path
												d="M865.17,155.8s-.08,.07-.13,.09h-.01c-.09,.02-.21,.01-.35-.04h-.01v-.04c.07-1.01,.11-1.8,.06-2.4-.03-.26-.07-.49-.13-.69,0-.01,0-.02,0-.02-.11-.36-.3-.63-.6-.82-.07-.06-.15-.1-.23-.13-.16-.08-.35-.15-.56-.19-.18-.04-.37-.08-.57-.09-.09-.02-.18-.03-.27-.03-.42-.04-.9-.06-1.46-.06h-.13c-.01-.18,.24-.23,.62-.23h.03c.51,.01,1.25,.12,1.88,.21,.02,0,.04,.01,.06,.01,.5,.07,.92,.12,1.12,.08,.01,.02,.03,.04,.04,.07,.04,.06,.08,.13,.11,.21h0c.22,.45,.38,1.02,.41,1.49,0,.03,0,.05,.01,.06,0,.1,0,.19-.01,.28-.44,.13-.01,.11,.11,.28-.02,.19,.04,.5,.09,.83v.03c.06,.45,.1,.91-.07,1.1Z"
												style={{ fill: "#f9f8ee" }}
											/>
											<path
												d="M864.68,155.81v.04h-.01c-.33-.09-1.08,.01-1.48-.04-.01,.01-.02,.01-.03,0-.18-.02-.28-.08-.21-.2,.04-.08,.13-.18,.3-.31,.02-.01,.05-.03,.07-.05,.06-.04,.12-.08,.19-.13-.03-.05-.31-.11-.69-.16-.15-.03-.31-.05-.48-.07-.34-.04-.7-.08-1.01-.11-.25-.03-.46-.06-.58-.07-.01,0-.02,0-.02,0-.06-.01-.1-.01-.11-.02-.04,0-.05-.11-.05-.28,0-.15,.01-.35,.02-.56,0-.14,.02-.29,.03-.43,.02-.13,.03-.25,.03-.36,0-.04,0-.09,0-.12,.02-.15,.02-.24,.02-.25,0-.02,.01-.04,.02-.06,.13-.14,.65,.59,.83,.57,.04-.03,.04-.06,.03-.09-.01-.02-.03-.04-.06-.05-.02-.02-.04-.04-.07-.06-.02-.01-.05-.03-.08-.06-.04-.02-.09-.05-.13-.09-.06-.04-.11-.09-.17-.14-.18-.18-.35-.44-.35-.84,0-.04,0-.07,.01-.11,0-.11,.02-.23,.06-.37h.13c.56,0,1.04,.02,1.46,.06,.09,0,.18,.01,.27,.03,.2,.01,.39,.05,.57,.09,.21,.04,.4,.11,.56,.19,.08,.03,.16,.07,.23,.13,.3,.19,.49,.46,.6,.82,0,0,0,0,0,.02,.06,.2,.1,.43,.13,.69,.06,.61,.02,1.39-.05,2.4Z"
												style={{ fill: "#ff9500" }}
											/>
											<path
												d="M848.02,154.68c-.67-.13-1.39-.21-1.8-.45,.61,.11,1.21,.26,1.8,.45Z"
												style={{ fill: "#ffd85f" }}
											/>
											<path
												d="M860.49,151.98s.01,.04,.01,.05h0c.01,.09-.02,.11-.07,.09h-.01c-.09-.05-.23-.24-.2-.39,.03-.03,.05-.05,.08-.08,.02-.02,.04-.03,.06-.05,.02-.01,.04-.02,.05-.02,.06-.03,.08,.01,.08,.07h.01c.01,.11-.01,.26-.01,.33Z"
												style={{ fill: "#ff9500" }}
											/>
											<path
												d="M827.53,158.45c0,.18-.08,.31-.19,.39h0s-.06,.05-.1,.07c-.14,.08-.33,.11-.54,.12-.57,.04-1.31-.11-1.84-.19-.01,0-.02-.01-.03-.01-.18-.02-.33-.04-.44-.04,0-.24,.07-.41,.19-.51,.17-.16,.44-.19,.76-.17,.49,.03,1.08,.19,1.58,.29,0,0,.01-.01,.02,0,.2,.04,.39,.06,.55,.05h.04Z"
												style={{ fill: "#b45100" }}
											/>
											<path
												d="M844.07,155.59s.02,.04,0,.06c-.03,.33-.04,.62-.05,.87,0-.12,0-.24-.01-.38-.26-.07-.63-.08-1.03-.07-.64-.01-1.27,0-1.91-.07t-.02-.01c-.09-.01-.18-.02-.27-.04-.06-.13-.13-.26-.21-.4-.04-.08-.08-.17-.13-.25,0-.01,0-.02,.01-.04,.02,.04,.1,.07,.24,.1,.15,.08,.8,.13,1.49,.15,.1,0,.2,0,.3,0,.72,.03,1.4,.03,1.56,.03,.02,.01,.02,.03,.03,.04Z"
												style={{ fill: "#ffd454" }}
											/>
											<path
												d="M840.44,155.3c.05,.08,.09,.17,.13,.25-.1-.08-.15-.16-.13-.25Z"
												style={{ fill: "#ffd04f" }}
											/>
											<path
												d="M842.48,155.52c-.79-.02-1.62-.07-1.79-.16,.37,.08,1.09,.13,1.79,.16Z"
												style={{ fill: "#ffd04f" }}
											/>
											<path
												d="M844.04,155.55c-.16,0-.84,0-1.56-.03-.1,0-.2,0-.3,0-.69-.02-1.34-.07-1.49-.15-.02-.01-.03-.02-.03-.03,.31,.04,.77,.02,1.27,.01,.01-.01,.03-.01,.04,0,.57-.03,1.16-.06,1.59,.03h.01c.2,.03,.36,.09,.47,.18Z"
												style={{ fill: "#bb590b" }}
											/>
											<path
												d="M844.7,154.68c.36-.05,.14,.64,.17,.89-.6,2.17-.4-.24-.17-.89Z"
												style={{ fill: "#e57e02" }}
											/>
											<path
												d="M860.41,152.81v.03c0,.22-.02,.41-.03,.58,0,.02-.01,.03-.01,.04-.02,.45-.04,.74-.1,.92v.02c-.04,.1-.09,.17-.15,.21-.01,0-.01,.01-.01,.01-.15,.07-.38,.03-.76-.03-.04-.01-.08-.01-.13-.02-.3-.06-.7-.11-1.21-.12-.04-.01-.09-.01-.13-.01-.04-.01-.08-.01-.12-.01-.05-.01-.11-.01-.16-.01,0-.05,.17-.3,.44-.62,.03-.03,.06-.06,.09-.1,.46-.53,1.12-1.21,1.62-1.49,.02-.02,.04-.03,.05-.04,.13-.06,.25-.1,.35-.1,.22,0,.34,.2,.26,.74Z"
												style={{ fill: "#ff9500" }}
											/>
											<path
												d="M830.6,157.34c-.07,.37-.27,1.88-.79,1.33l.79-1.33Z"
												style={{ fill: "#ce6104" }}
											/>
											<path
												d="M837.7,156.09c1.63,2.4,.28,2.76,.15,1.06,.02,1.64-1.4,.8-2.52,1.06-.49,.04,2.42-2.06,2.37-2.12Z"
												style={{ fill: "#b14d02" }}
											/>
											<path
												d="M842.98,156.07c-.68,.02-1.44,.08-1.91-.07,.64,.08,1.27,.06,1.91,.07Z"
												style={{ fill: "#f9edac" }}
											/>
											<path
												d="M843.05,158.04h-.07c-.4-.03-.95-.05-1.7,0-.02-.18-.05-.36-.08-.54-.1-.53-.24-1.05-.44-1.55h.02c.09,.02,.18,.03,.27,.04t.02,.01c.64,.08,1.27,.06,1.91,.07,.34,0,.68,.03,1.03,.07,.01,.14,.01,.26,.01,.38,0,0,0,.01,0,.02,.07,1.62,.09,1.58-.97,1.5Z"
												style={{ fill: "#ff9500" }}
											/>
											<path
												d="M823.46,160.55s.13-.06,.29-.08c-.09,.03-.18,.06-.29,.08Z"
												style={{ fill: "#b14d02" }}
											/>
											<path
												d="M823.57,159.99c.17-.21,.33-.43,.5-.64-.09,.15-.22,.36-.5,.64Z"
												style={{ fill: "#b14d02" }}
											/>
											<path
												d="M824.33,159.02s.07,.04,.13,.04c-.13,.02-.21,.06-.27,.13,.05-.06,.09-.12,.14-.17Z"
												style={{ fill: "#b14d02" }}
											/>
											<path
												d="M826.97,159.31c-.57-.07-1.01-.12-1.36-.17,.51,.02,1.05,.05,1.36,.17Z"
												style={{ fill: "#b14d02" }}
											/>
											<path
												d="M826.96,159.93c.08-.14,.14-.3,.2-.49,.1,.11,.06,.27-.2,.49Z"
												style={{ fill: "#b14d02" }}
											/>
											<path
												d="M848.99,155.66s-.01,.03-.06,.04c-.03-.03-.08-.06-.16-.08,.08,.01,.15,.02,.22,.04Z"
												style={{ fill: "#f9edac" }}
											/>
											<path
												d="M852.68,156.95h0c-.14,.21-.23,.35-.3,.46-.26,.38-.33,.32-1.16,.48,.03-.03,.07-.05,.1-.08h.01c.14-.11,.26-.21,.36-.29,.01,0,.02,0,.03,0,.84-.68,.26-.31-.46-.47-.24-.06-.49-.18-.7-.41,0,0-.01,0-.01-.01-.21-.23-.39-.57-.5-1.07-.08,.06-.14,.14-.19,.21-.18,.3-.2,.58-.26,.8,0,.03-.02,.06-.03,.09-.06,.13-.15,.24-.35,.29-.02,.01-.05,.01-.08,.01-.23,.04-.59,.02-1.15-.08,0,.09,.02,.18,.04,.26,0,0,0,0,.01,.02,.01,.03,.02,.06,.03,.09,0,.02,.01,.03,.02,.05,.13,.32,.31,.66,.15,.83-.07,.09-.25,.12-.58,.08-.02-.02-.04-.05-.07-.09-.01-.02-.03-.04-.04-.07h-.01c-.06-.12-.13-.28-.21-.46-.02-.05-.04-.11-.06-.16-.07-.2-.16-.4-.21-.59-.07-.18-.14-.35-.18-.47-.01-.05-.02-.09-.03-.12,0-.02-.02-.03,0-.04-.01-.02-.01-.04-.01-.04,.1,.02,.19,.04,.27,.05,.02,.01,.03,.01,.03,.01,.56,.08,.97,.03,1.29-.09,.02,0,.04-.01,.06-.02,.19-.08,.35-.19,.47-.31h.02s.09-.05,.14-.17h.01c.16-.22,.27-.44,.36-.63,.01-.02,.02-.04,.03-.05,0-.01,.01-.02,.01-.03,.07-.14,.12-.24,.19-.28,.11-.06,.26,.04,.52,.43,.08,.11,.16,.24,.25,.39,.04,.33,.16,.55,.32,.69h.01c.13,.14,.29,.21,.46,.26,.05,.02,.11,.03,.17,.03,.01,.01,.02,.01,.03,.01,.22,.04,.44,.05,.63,.05h.01c.39,.03,.68,.07,.57,.45Z"
												style={{ fill: "#06182f" }}
											/>
											<path
												d="M845.28,155.87c-.68,3.56-1.71,1.98-.41-.3,.44-.26,.02,.76,.41,.3Z"
												style={{ fill: "#a74902" }}
											/>
											<path
												d="M848.99,155.66s-.01,.03-.06,.04c-.08,.02-.19,.04-.35,.05h-.05c-.63,.04-1.77,.02-2.43-.06,0,.01-.02,.01-.04,0,0,0-.01,.01-.02,0-.01,.01-.02,.01-.04,0,0,0-.01,.01-.02,0,0,0,0,.01-.01,0-.26-.04-.43-.08-.43-.14,0-.02,.01-.03,.02-.04,.66-.01,2.36-.03,3.21,.11,.08,.01,.15,.02,.22,.04Z"
												style={{ fill: "#db7203" }}
											/>
											<path
												d="M827.39,158.92c0,.18-.09,.25-.21,.26-.05,.01-.12,0-.18-.01-.15-.03-.3-.08-.4-.09,.03-.02,.07-.04,.1-.05,.17-.08,.35-.12,.54-.12h.06s.06,0,.09,.01Z"
												style={{ fill: "#e39834" }}
											/>
											<path
												d="M853.12,154.79c.14-.06,0,1.41-.11,1.29-.97-1.05-2.22-1.98,.11-1.29Z"
												style={{ fill: "#fefdf7" }}
											/>
											<path
												d="M849.38,155.14h-.01c-.31-.25-.81-.37-1.35-.46-.67-.13-1.39-.21-1.8-.45-.12-.03-.24-.05-.36-.07-.02,0-.05-.01-.07-.01l-.19,1.14-.02,.08-.02,.14,1.07-.02s-.04-.03-.06-.03c.66,.02,1.77,.02,2.2,.16,.08,.01,.15,.02,.22,.04,.02,.02-.01,.03-.06,.04-.08,.02-.19,.04-.35,.05,.18,.01,.31,.03,.37,.05h.02s.09-.05,.14-.17h.01c.16-.22,.27-.44,.36-.63l-.1,.14Zm-3.34,.28v-.03s.02,.01,.03,.03h-.03Z"
												style={{ fill: "#ffd454" }}
											/>
											<path
												d="M849,155.83c-.01,.13-.21,.22-.52,.28-.02,.01-.04,.02-.06,.02-.35,.07-.83,.1-1.29,.09,0,0-.01,0-.03-.01-.08,.01-.17,0-.26,0-.27-.01-.54-.04-.76-.09h-.02c-.38-.09-.61-.23-.5-.43,.01,.01,.17,.02,.41,.01,.01,.01,.01,0,.01,0,.01,.01,.02,0,.02,0,.02,.01,.03,.01,.04,0,.01,.01,.02,0,.02,0,.02,.01,.03,.01,.04,0,.67,.02,1.8,.02,2.43,.06h.05c.18,.01,.31,.03,.37,.05h.02s.03,.02,.03,.03Z"
												style={{ fill: "#f9efb8" }}
											/>
											<path
												d="M845.5,155.96c.39,.22,.85,.13,1.33,.2-.05,.07,.84,1.99,.5,1.84-3.18-.26-2.47,.89-1.83-2.04Z"
												style={{ fill: "#ff9500" }}
											/>
											<path
												d="M825.08,160.5c.26,.01,.52-.01,.75,.05-.24,.02-.5-.01-.75-.05Z"
												style={{ fill: "#f28102" }}
											/>
											<path
												d="M826.58,160.3c-.17,.14-.38,.21-.61,.24,.21-.05,.41-.13,.61-.24Z"
												style={{ fill: "#f28102" }}
											/>
											<path
												d="M827.85,159.45c-.3,.09-.48,.27-.66,.49,.22-.37,.33-.46,.66-.49Z"
												style={{ fill: "#ac4a01" }}
											/>
											<path
												d="M829.9,159.36c-.65,.13-1.25,.19-1.64,.06,.12,0,.25-.01,.4-.02,.42,.11,.84-.14,1.24-.04Z"
												style={{ fill: "#ac4a01" }}
											/>
											<path
												d="M836.04,160.58c-1.47-.06-2.78-.15-3.75-.29,1.27,.09,2.75,.14,3.75,.29Z"
												style={{ fill: "#ac4a01" }}
											/>
											<path
												d="M852,155.82h-1.34c-.64-.87,1.15-.47,1.34,0Z"
												style={{ fill: "#ffda69" }}
											/>
											<path
												d="M852.17,157.13c-.11,.14-.27,.26-.45,.38,0,0-.02,0-.03,0-.29,.19-.65,.33-1.04,.42,0,0-.01,.01-.02,0-.54,.14-1.11,.16-1.59,.04h-.01c-.43-.1-.78-.32-.94-.69-.01-.02-.02-.03-.02-.05-.01-.03-.02-.06-.03-.09-.01-.01-.01-.02-.01-.02-.02-.08-.04-.17-.04-.26,.58,.03,.93,.08,1.15,.08,.03,0,.06,0,.08-.01,.19-.01,.28-.08,.35-.29,.01-.03,.02-.06,.03-.09,.07-.18,.14-.43,.26-.8,.02-.07,.04-.14,.07-.21,.02-.1,.06-.08,.12-.01h0c.14,.2,.35,.73,.5,1.08,0,.01,.01,.01,.01,.01,.07,.2,.13,.34,.15,.34,0,.07,.25,.07,.55,.07,.46,0,1.03-.03,.91,.09Z"
												style={{ fill: "#fefdfb" }}
											/>
											<path
												d="M823.46,160.55s.13-.06,.29-.08c-.09,.03-.18,.06-.29,.08Z"
												style={{ fill: "#fcac0b" }}
											/>
											<path
												d="M825.83,160.55c-.24,.02-.5-.01-.75-.05,.26,.01,.52-.01,.75,.05Z"
												style={{ fill: "#fcac0b" }}
											/>
											<path
												d="M825.97,160.59c-.22,.07-.52,.1-.83,.11,.25-.03,.5-.06,.74-.13h.02s.05,0,.07,.02Z"
												style={{ fill: "#fcac0b" }}
											/>
											<path
												d="M826.65,160.27c-.01,.07-.04,.14-.08,.2-.09,.13-.25,.23-.44,.31-.02,.01-.05,.02-.08,.03-.35,.13-.83,.19-1.31,.2-.7,.03-1.4-.05-1.77-.15-.29-.07-.38-.16-.14-.23,.44,.03,.92,.08,1.39,.08,.15,.01,.31,.01,.46,.01,.14,0,.27,0,.41-.01,.02,0,.03,0,.05,0,.25-.03,.5-.06,.74-.13h.02s.04-.01,.06-.03h0c.21-.05,.41-.13,.61-.24t.02-.01s.03-.01,.05-.02Z"
												style={{ fill: "#f7efd3" }}
											/>
											<path
												d="M833.97,158.67c-.11,.61-1.61,.2-1.9,.77-2.47,0,1-.6,1.9-.77Z"
												style={{ fill: "#eee6c0" }}
											/>
											<path
												d="M858.88,158.91c-2.67-.32-5.6-.24-8.58-.07-.06,0-.12,0-.18,.01-3.91,.23-7.87,.61-11.34,.49-.03,.01-.05,.01-.07,0-.01,.01-.02,.01-.03,0-.01,.01-.01,0-.01,0-1.12-.05-2.17-.14-3.16-.32-.31-.05-.62-.12-.91-.18t-.02,0s-.01-.01-.02,0c-.19-.05-.33-.1-.51-.15h-.01s-.05-.01-.08-.02c.13-.01,.27-.02,.4-.02,.02-.01,.03-.01,.05-.01,2.25-.14,4.49-.27,6.73-.38,.03,0,.07,0,.1,0,2.12-.09,4.24-.16,6.35-.15h.03c.21,0,.41,0,.62,.01,.61,0,1.21,.01,1.82,.02,.1,0,.2,.01,.3,.01,.47,.01,.93,.03,1.4,.05,.32,.02,.64,.03,.97,.05,2.05,.13,4.1,.33,6.15,.66Z"
												style={{ fill: "#fefdfb" }}
											/>
											<path
												d="M855.55,155.88s-.11,.08-.21,.09c0,0-.01,.01-.02,.01-.1,.01-.22,.01-.32,.04-.02,0-.03,0-.04,0-.04,0-.08,.01-.11,.03-.08,.03-.13,.08-.11,.18,0,.06,.03,.13,.1,.23,.02,.02,.04,.05,.06,.08-.02,.02-.07,.05-.14,.08h-.02c-.06,.03-.12,.05-.17,.06-.02,.01-.04,.01-.05,.01h-.01c-.06,0-.1-.02-.11-.08,.05-.37,.09-.75,.15-1.05,.03-.15,.07-.28,.12-.37,.06-.1,.14-.15,.24-.12h.01c.12,.05,.28,.22,.48,.56,.05,.07,.1,.16,.15,.25Z"
												style={{ fill: "#f7efd3" }}
											/>
											<path
												d="M860.17,155.17c-.06,.03-.17,.05-.3,.05h-.04c-.86,0-2.79-.44-2.84-.35-.11-.02-.11-.08-.1-.13s.02-.1-.05-.13c.06,.01,.16,.02,.28,.03,.07,.01,.15,.01,.23,.02,.64,.06,1.67,.13,2.3,.22,.05,0,.09,0,.12,0,.16,.03,.29,.05,.37,.08,.05,.02,.08,.03,.08,.05,.04,.07,.02,.12-.05,.15Z"
												style={{ fill: "#b3580a" }}
											/>
											<path
												d="M830.95,159.38c8.59,.3,17.23-.78,25.81-.61-7.33-.06-22.52,2.25-25.81,.61Z"
												style={{ fill: "#b3580a" }}
											/>
											<path
												d="M834.01,158.89c.45-.02,1.43-.25,1.55,.22,.18,.58-3.31,.23-3.49,.34,.37-.47,1.12-.31,1.94-.56h0Z"
												style={{ fill: "#fedc46" }}
											/>
											<path
												d="M853.06,156.47s-.05-.01-.07-.01c-.21-.05-.49-.03-.79-.02h-.01c-.08,.01-.15,.01-.22,.01-.17,0-.34,0-.5,0,0,0-.02,0-.03-.01-.06,0-.12-.01-.17-.03-.21-.03-.37-.1-.46-.25h-.01s-.04-.09-.05-.14c.05,0,.12-.02,.2-.02,.2-.03,.48-.05,.77-.03,.14,0,.28,.01,.42,.02,.13,.01,.26,.04,.37,.07,.07,.02,.13,.04,.18,.07,.18,.08,.31,.19,.37,.34Z"
												style={{ fill: "#f9e98f" }}
											/>
											<path
												d="M826.69,160.88c-.1,.04-.18,.06-.24,.07-.07,.02-.1,.02-.12,0-.05-.02,.14-.18,.33-.31,0,0,0,0,.01,0,.09-.07,.18-.14,.22-.17,.05,0,.09,0,.12,0,.34,0-.21,.24-.32,.43Z"
												style={{ fill: "#f0cf71" }}
											/>
											<path
												d="M828.55,165.87c-.08,.1-.24-.25-.44-.81-.01-.06-.03-.12-.05-.18-.34-1.03-.71-2.61-.8-3.47t-.01-.02c-.01-.16-.01-.3,0-.4,0-.02,0-.04,.01-.06,.02-.14,.07-.17,.17-.09v.04s.02,.07,.03,.12c.04,.18,.11,.5,.19,.89,.15,.66,.35,1.53,.52,2.28,0,.03,.01,.06,.02,.08,.18,.82,.33,1.49,.36,1.62Z"
												style={{ fill: "#faf6df" }}
											/>
											<path
												d="M854.11,156.86c-.04,.42-.66,1.87-.7,.71,0-.03,.01-.07,.01-.11v-.05s0-.01,.01-.02c.01-.16,.04-.34,.07-.51,.01-.02,.01-.03,.01-.04,.04-.16,.08-.32,.13-.45,.06-.16,.12-.27,.18-.31,.07-.04,.13,.02,.18,.22,.03,.09,.06,.21,.08,.36h0s.01,.02,0,.03c.01,.05,.02,.11,.03,.17Z"
												style={{ fill: "#a84301" }}
											/>
											<path
												d="M825.04,161.43h0c-.09,.23-.27,.52-.51,.85,0,.02-.02,.04-.03,.06-.34,.48-.8,1.05-1.26,1.65-.02,.02-.03,.04-.04,.05-1.11,1.4-2.29,2.93-2.33,3.8-.01,.22,.06,.4,.21,.52,.04,.04,.09,.07,.14,.08,.02,.02,.05,.03,.07,.04-.09,.02-.18,.03-.25,.03-.61,0-.48-.72,0-1.69,.01-.01,.02-.03,.03-.05,.18-.35,.4-.73,.64-1.12,0-.02,.02-.04,.04-.06,.64-1.03,1.44-2.12,2.09-2.93,0-.02,.03-.03,.03-.04,.61-.75,1.08-1.25,1.16-1.19h.01Z"
												style={{ fill: "#ececdc" }}
											/>
											<path
												d="M830.7,163.06v-.02c-.11-.58-.23-1.15-.29-1.56-.06-.15-.14-.28-.24-.39-.9-.02-1.8-.05-2.67-.09,.09,.17,.21,.3,.36,.4,.2-.08,.56,.08,1.16,.57,.15,.06,.29,.19,.43,.36-.13-.12-.27-.22-.41-.3,.13,.31,.23,.63,.32,.96-.11-.34-.24-.66-.32-.96-.41-.24-.85-.37-1.18-.63-.15,.05-.21,.22-.21,.49,.15,.66,.35,1.53,.52,2.28,0,.03,.01,.06,.02,.08,.22,.74,.42,1.4,.36,1.62h.02c.22-.18,.5-.29,.8-.36h.01c.22-.2,.31-.47,.33-.77,.04,.21,.06,.43,.07,.64,.19-.05,.32-.17,.4-.36-.01,.11-.02,.22-.03,.34,0,.01,.02,.01,.03,.01,.2-.02,.39-.04,.57-.06,.05-.09,.09-.2,.11-.35-.09-.69-.11-1.34-.16-1.9Zm-.52,1.95c.03-.49,.02-.9-.03-1.24,.12,.48,.15,.93,.03,1.24Z"
												style={{ fill: "#ac4a01" }}
											/>
											<path
												d="M829.45,162.33c-.13-.12-.27-.22-.41-.3-.41-.24-.85-.37-1.18-.63,.2-.08,.56,.08,1.16,.57,.15,.06,.29,.19,.43,.36Z"
												style={{ fill: "#9c4001" }}
											/>
											<path
												d="M830.15,163.77c.12,.48,.15,.93,.03,1.24,.03-.49,.02-.9-.03-1.24Z"
												style={{ fill: "#9c4001" }}
											/>
											<path
												d="M830.41,161.48c-.06-.15-.14-.28-.24-.39-.9-.02-1.8-.05-2.67-.09-.02-.04-.04-.08-.06-.12,0-.01,0-.03-.01-.04,.06,0,.12,0,.18-.01,.63,0,1.36-.12,2.03-.08,.26,.01,.52,.04,.75,.11-.03,.04-.03,.12-.02,.24,0,.1,.01,.23,.04,.38Z"
												style={{ fill: "#9c4001" }}
											/>
											<path
												d="M830.18,165.37c.2-.02,.39-.04,.57-.06-.06,.09-.13,.14-.24,.14-.04,0-.09,0-.14,0-.01-.01-.03-.01-.04-.01-.05-.02-.1-.04-.15-.07Z"
												style={{ fill: "#9c4001" }}
											/>
											<path
												d="M830.86,164.96c-.09-.69-.11-1.34-.16-1.9,.13,.71,.23,1.44,.16,1.9Z"
												style={{ fill: "#9c4001" }}
											/>
											<path
												d="M860.17,155.25c.02,.22-.13,.36-.4,.46-.12,.05-.27,.08-.43,.11-.54,.08-1.25,.08-1.9,.07-.15,0-.29,0-.42,0-.32,0-.6,0-.82,0-.15,.01-.26,.03-.35,.05-.03-.03-.05-.06-.07-.08-.03-.04-.06-.08-.1-.12-.02-.03-.04-.05-.05-.07-.09-.15-.07-.23,.02-.27,.03-.01,.07-.02,.12-.02,.09-.01,.21,0,.34,0,.2,.02,.43,.06,.66,.1,.11,.02,.23,.04,.34,.05,.22,.02,.43,.04,.58,.02,.04-.01,.08-.02,.11-.03,.1-.04,.16-.1,.16-.2h0s-.02,0-.03-.02l-.21-.03c-.15-.02-.29-.04-.42-.06-.21-.03-.41-.05-.58-.07-.39-.04-.67-.08-.86-.14-.18-.05-.28-.13-.29-.27-.04-.23,.13-.62,.42-1.35,.18-.43,.4-.99,.65-1.7,.07-.2,.14-.42,.22-.65-.02-.05,.27-.04,.64-.02h.02c.53,.04,1.22,.12,1.32,.12h0c.43,.19,1.42,.49,.69,1.01-.97,.73-1.79,2.41-3.1,2.21-.04,.05-.05,.09-.02,.13h.01c.03,.09,.21,.18,.46,.25,.77,.24,2.24,.4,2.94,.48h.04c.13,.01,.23,.02,.29,.03h.01Z"
												style={{ fill: "#ff9500" }}
											/>
											<path
												d="M853.51,156.84s0,.02-.01,.04c-.01,.17-.04,.36-.07,.51v.03s0,.03-.01,.04c0,.04-.01,.08-.01,.11,0-.08-.03-.24-.05-.41-.01-.06-.01-.12-.02-.18-.02-.16-.03-.32-.04-.46-.01-.11-.01-.2-.01-.25,.01,0,.02,.02,.02,.02,.17,.06,.21,.29,.2,.55Z"
												style={{ fill: "#e27b10" }}
											/>
											<path
												d="M826.76,163.06c-.28,.34-.71,.73-1.21,1.18v-.02c.03-.26,.01-.49-.05-.7,0-.03-.01-.06-.02-.09-.08-.25-.2-.47-.36-.66-.06-.07-.12-.13-.19-.19-.07-.07-.16-.13-.25-.2-.05-.04-.1-.07-.15-.1-.02-.01-.03-.02-.05-.03l.56-.81h0s.07,0,.1,0c.06,0,.12,.01,.18,.01,.26,.03,.49,.06,.69,.1,.07,.01,.14,.03,.2,.04h0c.58,.13,.88,.31,.94,.56,.07,.24-.08,.55-.4,.91Z"
												style={{ fill: "#482919" }}
											/>
											<path
												d="M863.36,155.29c-.07,.14-.22,.25-.41,.32-.52,.2-1.38,.19-1.96,.17h-.01c-.16,0-.3-.01-.4-.01-.24-.36-.22-.56-.04-.66,.11-.06,.29-.09,.49-.09h.01c.48,0,1.13,.13,1.62,.21h.03c.24,.04,.43,.07,.56,.07,.05,0,.08,0,.11-.01Z"
												style={{ fill: "#cc6b07" }}
											/>
											<path
												d="M840.79,161.01c-.44,.05-.88,.1-1.31,.14-.71,.07-1.42,.14-2.12,.18-1.26,.08-2.49,.09-3.62-.02-.27-.03-.54-.06-.79-.11h-.01c-.11-.01-.22-.03-.33-.06,1.48,.03,2.99,.04,4.52,.03,.04,0,.09,0,.13-.01,1.18-.04,2.36-.09,3.53-.15Z"
												style={{ fill: "#f88f04" }}
											/>
											<path
												d="M846.31,160.58c-.45,0-.93,.02-1.41,.04-1.05,.02-2.2,.04-3.36,.04,1.66-.07,3.27-.11,4.77-.08Z"
												style={{ fill: "#f88f04" }}
											/>
											<path
												d="M869.18,156.87s-1,0-3.55-.24c-1.12-.21-2.37-.25-3.64-.24-1.18,.02-2.38,.08-3.5,.09h-.47c-.2,0-.41-.01-.6-.01-.04-.01-.07-.01-.11-.01-.33-.02-.67-.05-.99-.08-.04,0-.07,0-.11-.01-.32-.04-.62-.09-.91-.17-.01,0-.02,0-.02,0-.04,0-.07-.01-.1-.02,1.01-.26,3-.28,5.17-.19,.02,.01,.03,.01,.05,0h0s.01,.01,.02,0h.01c3.31,.16,7.02,.57,8.29,.78,.02,0,.03,0,.05,.01,.2,.03,.33,.06,.38,.08,.01,0,.02,.01,.02,.01Z"
												style={{ fill: "#fefdfb" }}
											/>
											<path
												d="M827.65,161.89c.15,.66,.35,1.53,.52,2.28-.25-.82-.52-1.73-.52-2.28Z"
												style={{ fill: "#ff9500" }}
											/>
											<path
												d="M828.57,165.87c.22-.18,.5-.29,.8-.36-.18,.17-.44,.29-.8,.36Z"
												style={{ fill: "#ff9500" }}
											/>
											<path
												d="M829.04,162.03c-.41-.24-.85-.37-1.18-.63,.2-.08,.56,.08,1.16,.57,0,.02,.02,.04,.02,.06Z"
												style={{ fill: "#ff9500" }}
											/>
											<path
												d="M855.15,158.07c-.73-.02-1.03-.03-1.13-.12-.1-.09,.05-.26,.2-.62,.07-.18,.15-.42,.18-.72,.04,.02,.08,.04,.11,.08h.01s.06,.04,.09,.08c.25,.22,.42,.58,.49,.95,.03,.12,.04,.24,.05,.35Z"
												style={{ fill: "#fb9802" }}
											/>
											<path
												d="M855.29,156.62s-.06,.03-.1,.03c-.11,.02-.25,.01-.29-.05-.01-.01-.01-.03,0-.06l.09,.02,.3,.06Z"
												style={{ fill: "#e39834" }}
											/>
											<path
												d="M833.8,161.27s-.03,.03-.06,.04c-.43,.24-2.64,.19-2.98-.2-.03-.03-.04-.06-.05-.09l1.4,.11,.83,.07h.01l.85,.07Z"
												style={{ fill: "#f9e98f" }}
											/>
											<path
												d="M853.18,157.65h0c-.01,.13-.07,.23-.17,.28h-.01c-.09,.06-.22,.07-.42,.02-.02,0-.04,0-.07-.01-.12,.01-.16-.03-.16-.1,0-.03,.01-.07,.02-.1,.01-.02,.02-.04,.04-.06,.05-.13,.16-.29,.28-.42,.02-.02,.04-.04,.06-.07,.03-.03,.05-.05,.07-.08,.08-.07,.14-.13,.18-.15,.01,0,.02,0,.02,0t0,.02h0s.01,.01,.01,.01c.03,.06,.06,.14,.09,.22,0,0,0,.03,.01,.04,.04,.14,.06,.28,.04,.41Z"
												style={{ fill: "#f6be18" }}
											/>
											<path
												d="M856.12,157.56c.03,.11,.03,.22,0,.32h-.01v.02h0c-.07,.27-.3,.42-.61,.23-.12-.07-.26-.21-.4-.41-.16-.22-.33-.53-.49-.95-.01-.03-.02-.06-.04-.09h0s.17-.05,.17-.05h.02s.11-.04,.11-.04c.01,0,.02,0,.03,.01,.11,.01,.2,.03,.29,.05,.1,.03,.19,.06,.27,.1,.23,.11,.4,.26,.5,.42,.06,.08,.1,.16,.12,.24h.01c.02,.06,.03,.11,.03,.15Z"
												style={{ fill: "#b14d02" }}
											/>
											<path
												d="M824.48,162.25c.25,.81-1.38,2.01-1.92,2.82,.58-.98,1.22-1.92,1.92-2.82Z"
												style={{ fill: "#ee911b" }}
											/>
											<path
												d="M836.64,160.22s-.02,.02-.03,.03h-1.03c.35-.01,.71-.02,1.06-.03Z"
												style={{ fill: "#bb590b" }}
											/>
											<path
												d="M825.5,163.52s-.01-.06-.02-.09c-.05-.22-.16-.44-.36-.66-.06-.07-.12-.13-.19-.19-.07-.07-.16-.13-.25-.2-.06,.07-.13,.16-.21,.26-.35,.43-.91,1.14-1.5,1.92,0,.02-.02,.03-.04,.05-.88,1.18-1.79,2.51-2.06,3.23-.15,.39-.11,.61,.21,.52,.07-.01,.15-.04,.26-.1-.06,0-.11-.02-.14-.07-.01-.01-.01-.02-.01-.03,.01-.01,0-.01,0-.01-.02-.03-.02-.05-.01-.07,0-.03,0-.05,.02-.07,.01-.03,.03-.06,.06-.08,.05-.04,.11-.07,.16-.08h.02c.06,0,.11,.02,.14,.07,.01,.01,.01,.02,.01,.03-.01,0,0,0,0,0,.02,.03,.02,.05,0,.07,0,.03,0,.05-.02,.07-.01,.03-.02,.04-.04,.06h.01c.22-.12,.49-.29,.84-.54,.37-.54,1.08-1.13,1.72-1.75,.43-.42,.84-.84,1.1-1.27,.22-.36,.34-.72,.29-1.08Z"
												style={{ fill: "#ac4a01" }}
											/>
											<path
												d="M856.17,157.61s-.03-.04-.05-.05c-.08-.11-.14-.21-.15-.31,0-.03,0-.06,0-.08,.06,.08,.1,.16,.12,.24h.01c.04,.08,.07,.14,.08,.2Z"
												style={{ fill: "#a74902" }}
											/>
											<path
												d="M860,157.77c-.06-.14-.18-.23-.35-.29,.19,.02,.33,.03,.33,.05,.01,.09,.02,.17,.02,.24Z"
												style={{ fill: "#a74902" }}
											/>
											<path
												d="M858.43,156.48s-.06,.04-.08,.05c-.1,.04-.19,.03-.27-.02h-.01s-.04-.02-.05-.03l-.02-.02c.15-.04,.28-.04,.43,.02Z"
												style={{ fill: "#482919" }}
											/>
											<path
												d="M865.63,156.63c-.9-.01-1.8,0-2.69,.02h-.27c-1.14,.01-2.27,.01-3.39-.08-.03-.01-.07-.01-.11-.01-.23-.02-.45-.05-.68-.08,1.17-.07,2.33-.1,3.5-.09,1.21,.02,2.42,.08,3.64,.24Z"
												style={{ fill: "#875832" }}
											/>
											<path
												d="M839.32,160.62s-.06,.02-.1,.03c-.7-.01-1.4-.02-2.07-.04h2.17Z"
												style={{ fill: "#ce6b0e" }}
											/>
											<path
												d="M829.45,162.33c-.13-.12-.27-.22-.41-.3,0-.02-.01-.04-.02-.06,.15,.06,.29,.19,.43,.36Z"
												style={{ fill: "#ba5801" }}
											/>
											<path
												d="M830.18,165.01c.03-.49,.02-.9-.03-1.24,.12,.48,.15,.93,.03,1.24Z"
												style={{ fill: "#ba5801" }}
											/>
											<path
												d="M840.79,161.01c-.44,.05-.88,.1-1.31,.14-.71,.07-1.42,.14-2.12,.18-1.18,0-2.37-.02-3.56-.06,1.12-.03,2.23-.06,3.33-.1,.04,0,.09,0,.13-.01,1.18-.04,2.36-.09,3.53-.15Z"
												style={{ fill: "#faf6df" }}
											/>
											<path
												d="M860.05,159.69c-.07,.01-.15,.02-.22,.03,0,0,.01,0,.01-.01,.07,0,.14,0,.21-.02Z"
												style={{ fill: "#faf6df" }}
											/>
											<path
												d="M848.34,160.41c-1.09,.03-2.19-.04-3.3-.1,1.15,.02,2.27,.05,3.3,.1Z"
												style={{ fill: "#f88f04" }}
											/>
											<path
												d="M862.42,157.32c-.14,0-.27,0-.4-.01l-.02-.02h0c.14,0,.28,.02,.42,.03Z"
												style={{ fill: "#c14b06" }}
											/>
											<path
												d="M862.42,157.32c-.14,0-.27,0-.4-.01l-.02-.02h0c.14,0,.28,.02,.42,.03Z"
												style={{ fill: "#f1db87" }}
											/>
											<path
												d="M869.94,157.37h-.02c-1.7-.27-6.79-.59-10.23-.52h-.03c-2.72-.38-3.67-.12-3.7,.32,.06,.08,.1,.16,.12,.24h.01c.04,.08,.07,.14,.08,.2,.58,.63,2.21,1.31,3.15,1.11,.16,.04,.31,.09,.48,.13,.22-.49,.29-.81,.21-1.03,0-.01,0-.02-.01-.03t0-.02c-.06-.14-.18-.23-.35-.29-.01-.01-.03-.01-.03-.01-.37-.04-.94-.09-1.22-.16t-.02-.01c.45-.06,.99-.07,1.58-.05,.02,0,.04,.01,.06,.01,.53,.1,1.42,.18,1.8,.12h.03c.09,0,.18,.02,.28,.03,.61,.36,3.13,.5,4.55,.33h.03c1.19,.01,2.32-.07,3.28-.36-.01-.01-.03-.01-.05-.01Zm-7.92-.06l-.02-.02h0c.14,0,.28,.02,.42,.03-.14,0-.27,0-.4-.01Z"
												style={{ fill: "#ac4a01" }}
											/>
											<path
												d="M818.03,166.89c-.06,.15-.1,.32-.11,.49-.06,.13-.11,.26-.16,.41,.04-.31,.13-.62,.27-.9Z"
												style={{ fill: "#5e99bc" }}
											/>
											<path
												d="M821.57,165.69c-.73-.23-1.42-.23-2.02,0-.44,.09-.79,.26-1.04,.49,.43-.48,1.03-.82,1.71-.89h.01c.43,0,.89,.12,1.34,.4Z"
												style={{ fill: "#5e99bc" }}
											/>
											<path
												d="M846.52,160.59h-.23s.01-.01,.02-.01h.21Z"
												style={{ fill: "#f1db87" }}
											/>
											<path
												d="M819.91,170.19c-1.09-.25-1.61-1.44-1.4-2.52-.09,1.01,.53,2.14,1.4,2.52Z"
												style={{ fill: "#0f3554" }}
											/>
											<path
												d="M821.43,170.35c-.19,.15-.37,.25-.56,.32h-.01c-.36,.13-.71,.11-1.04,0-.09-.03-.18-.07-.26-.11,.64,.21,1.31,.11,1.87-.21Z"
												style={{ fill: "#0f3554" }}
											/>
											<path
												d="M821.24,165.75c-.38,0-.71,.04-1,.1,.29-.08,.62-.12,1-.1Z"
												style={{ fill: "#0f3554" }}
											/>
											<path
												d="M822.53,168.77c-.25,.55-.62,1.09-.96,1.16,.33-.25,.65-.62,.96-1.16Z"
												style={{ fill: "#0f3554" }}
											/>
											<path
												d="M819.91,170.19c-1.09-.25-1.61-1.44-1.4-2.52-.09,1.01,.53,2.14,1.4,2.52Z"
												style={{ fill: "#01142a" }}
											/>
											<path
												d="M821.24,165.75c-.38,0-.71,.04-1,.1,.29-.08,.62-.12,1-.1Z"
												style={{ fill: "#01142a" }}
											/>
											<path
												d="M821.7,168.49c-.19,.17-.37,.28-.53,.26,.15-.01,.35-.12,.53-.26Z"
												style={{ fill: "#01142a" }}
											/>
											<path
												d="M822.53,168.77c-.25,.55-.62,1.09-.96,1.16,.33-.25,.65-.62,.96-1.16Z"
												style={{ fill: "#01142a" }}
											/>
											<path
												d="M821.07,166.77c.18-.35,.4-.73,.64-1.12,.31-.13-.19,.45-.64,1.12Z"
												style={{ fill: "#01142a" }}
											/>
											<path
												d="M822.81,167.95c.02-.14,.03-.24,.01-.31,.03,.07,.02,.18-.01,.31Z"
												style={{ fill: "#01142a" }}
											/>
											<path
												d="M864.84,158.1v.03h-.01c-.1,.12-.2,.21-.31,.33-.04,.03-.07,.05-.1,.07-.19,.18-.39,.34-.61,.47h-.01c-.52,.35-1.1,.6-1.71,.78-.05,.01-.09,.02-.13,.03-.07,.02-.15,.04-.22,.05-.56,.11-1.12,.18-1.6,.22,0-.06,.01-.12,.01-.17,.02-.33,.03-.62,.04-.87v-.03c-.06-.3,.06-1.13,.14-1.34,.04,0,.08,0,.13,.01h0c.2-.16,.54-.07,1.2,.06h.05c.85,.08,1.8,.18,2.52,.27h.01s.01,0,.02,0c0,0,.02,0,.03,0,.05,0,.11,.01,.16,.03,.14,.01,.27,.03,.38,.05Z"
												style={{ fill: "#ac4a01" }}
											/>
											<path
												d="M862.09,159.78c.61-.18,1.19-.43,1.71-.77-.46,.38-1.07,.62-1.71,.77Z"
												style={{ fill: "#a84301" }}
											/>
											<path
												d="M864.47,158.02v.03c-.06-.02-.12-.03-.17-.03h.17Z"
												style={{ fill: "#a84301" }}
											/>
											<path
												d="M859.6,159.08s-.13,0-.21,0h-.02c-.13,0-.28-.01-.38-.04h-.01c-.12-.03-.17-.07-.1-.12l.17,.04,.55,.13Z"
												style={{ fill: "#2f4e66" }}
											/>
											<path
												d="M864.52,158.46c.11-.12,.21-.21,.31-.32-.02,.09-.16,.21-.31,.32Z"
												style={{ fill: "#faf6df" }}
											/>
											<path
												d="M864.84,158.1c-.11-.02-.24-.04-.38-.05v-.03c.27-.02,.37,.01,.38,.08Z"
												style={{ fill: "#faf6df" }}
											/>
											<path
												d="M870.01,157.37s-.01,.01-.02,.01c-.01-.01-.03-.01-.05-.01h.07Z"
												style={{ fill: "#dcaa51" }}
											/>
											<path
												d="M856.08,161.02c-.28-.03-.55-.07-.78-.11,.24,.03,.51,.07,.78,.11Z"
												style={{ fill: "#ebdfb0" }}
											/>
											<path
												d="M858.39,161.27h-.06s0-.02-.01-.03c.03,0,.05,.02,.07,.03Z"
												style={{ fill: "#ebdfb0" }}
											/>
											<path
												d="M858.33,161.27c-.16,0-.42-.03-.75-.06-.04,0-.08,0-.13-.02-.08-.01-.17-.02-.26-.03-.35-.04-.74-.09-1.11-.14-.27-.04-.54-.08-.78-.11-.29-.04-.53-.08-.68-.12-.06-.02-.11-.03-.13-.05-.01,0-.01-.01-.01-.01,0-.04,.28-.06,1-.04h.08c.36,0,.9-.1,1.4-.12h.19c.38,.03,.71,.12,.93,.32,.01,.01,.01,.02,.02,.03,.09,.07,.17,.18,.22,.31h0s.01,.03,.01,.04Z"
												style={{ fill: "#ac4a01" }}
											/>
											<path
												d="M858.08,160.89c-.22-.2-.55-.29-.93-.32,.41,0,.77,.07,.93,.32Z"
												style={{ fill: "#cf721e" }}
											/>
											<path
												d="M858.83,161.53c-.2-.28-.4-.57-.5-.76,.21,.26,.37,.52,.5,.76Z"
												style={{ fill: "#c7c4b5" }}
											/>
											<path
												d="M859.31,162.33s-.01,.04-.03,.06c0-.02,0-.05,0-.08,.02,.01,.03,.02,.04,.02Z"
												style={{ fill: "#c7c4b5" }}
											/>
											<path
												d="M859.41,162.1c-.02,.07-.06,.14-.1,.23-.01,0-.02,0-.04-.02,0-.01-.01-.02-.01-.03-.05-.16-.19-.38-.35-.62-.02-.05-.05-.09-.08-.13-.13-.24-.29-.5-.5-.76-.02-.02-.03-.04-.04-.06-.03-.07-.04-.13-.04-.16,.01-.03,.04-.04,.09-.03h.02c.29,.01,.5-.02,.66-.05,0,.01,.02,0,.02,0,.17,0,.3,.02,.37,.04,.01,.02,.03,.05,.04,.09,0,.21,0,.4-.01,.57v.3c.09,.12,.1,.3-.03,.63Z"
												style={{ fill: "#ac4a01" }}
											/>
											<path
												d="M859.41,160.51c-.07-.02-.2-.04-.37-.04,.19-.02,.3-.04,.37,.04Z"
												style={{ fill: "#ac4a01" }}
											/>
											<path
												d="M859.48,161.15s-.03,.01-.04,.02c.01-.17,.01-.36,.01-.57,.03,.1,.03,.27,.03,.55Z"
												style={{ fill: "#ac4a01" }}
											/>
											<path
												d="M821.28,167.9c.24-.17,.46,.14,.21,.3-.24,.17-.46-.14-.21-.3Z"
												style={{ fill: "#511a0a" }}
											/>
											<path
												d="M830.25,169.7c.25,.1,.49,.11,.66-.02-.24,.06-.46,.06-.66,.02Zm-.44-2.66c-.64,.39-.77,.93-.63,1.43-.07-.51,.12-1.07,.63-1.43Z"
												style={{ fill: "#051528" }}
											/>
											<path
												d="M851.96,145.35c-1.68,.25-4,.55-6.89,.87,.16-.05,.25-.15,.36-.23-.06,0-.13,.01-.2,.02-3.3,1.01-7.05,.94-10.5,1.47,.32-.03,.58-.14,.79-.36-.04,.01-.08,.02-.13,.02-2.26,.74-4.45,.7-6.91,.66-2.75,.22-5.49,.36-8.22,.36,.21,.01,.4,.02,.59,.03,.74-.03,1.68-.07,1.5,.09-.09-.03-1.52,.17-2.13,0,0-.01-.02-.01-.03-.01h-.25c-.69,.01-1.25,.01-1.66,0-.28,0-.5,0-.66-.02-.02,0-.04-.01-.05-.01-.08,0-.14-.01-.18-.02-.13,0-.17-.01-.06-.02,0-.01,.08-.02,.24-.03,.07-.01,.16-.01,.26-.01,.04-.01,.1-.01,.15-.01-1.89-.05-3.78-.16-5.65-.36h-.03c-.1-.13-.11-.24-.05-.33h0c.21-.32,1.12-.42,1.41-.45,.14,0,.28,.02,.42,.03h.01c3.04-.46,6.35,.04,9.4-.23,.98,.09,1.96,.13,2.94,.14,.97-.07,1.94-.16,2.91-.26-1.84,.07-3.68,.03-5.49-.15-3.87,.4-8.13-.63-11.77,.74-1.25,1.28,3.41,.9,4.05,1,.01,.5-.66,2.14-.55,2.99-.26,1.85-.71,4.01-.45,5.87,.03,.21-1.01-.02-1.1,.02-8.26,.33,3.79,3.13,5.58,2.24-.11-.03-.31-.07-.58-.11h-.04c-.91-.01-2.6-.23-4.16-.49h-.01c-1.41-.18-2.69-.4-3.17-.67t-.02-.01c-.1-.03-.16-.07-.18-.09h.07c-.08-.08-.09-.16-.02-.24,1.26-.89,3.37,.05,4.58-.26-.02-.05-.01-.1,.03-.13,1.14-5.38,.48-7.67,1.15-8.53-.02-.06-.03-.11-.04-.17,.02,.04,.05,.08,.08,.12,.52-.59,1.78-.43,4.98-.17,.15,.46-.92,3.01-.44,3.51,.09-.05,.27-.04,.48,.02h.01c.06-.02,.12-.04,.19-.08,1.16-.34,2.13-.32,2.92-.03,1.03,.17,1.78,.72,2.11,2.24,.01,.02,.01,.03,.01,.05,.27,.72,.36,1.54,.29,2.38,.07,.43-.03,.99-.32,1.71,0,.18-.08,.31-.19,.39h0s-.03,.05-.04,.07c.03,0,.06,0,.09,.01,0,.18-.09,.25-.21,.26,0,.01-.01,.01-.01,.02-.06-.01-.11-.02-.17-.03-1.19-.17-1.83-.21-2.14-.33-.01,0-.02-.01-.03-.01-.18-.02-.33-.04-.44-.04,0-.24,.07-.41,.19-.51,.01-.24,.08-.59,.14-1.1-.02-.13-.03-.29,0-.46-.05,.27-.11,.54-.18,.79,0,.02,0,.04,0,.06-.11,.57-.29,1.12-.67,1.59h0c-.1,.15-.2,.3-.32,.44-.08,.12-.18,.22-.28,.33-.3,.35-.66,.67-1.09,.98v.11c.73,.19,1.78,.06,2.33,.29l-2.76,4.12c-1.47-.78-3.26-.31-4,1.33-.87,2.25,.53,3.65,2.1,3.91-.09-.03-.18-.07-.26-.11-.27-.08-.53-.22-.78-.42-.82-.69-1.1-1.55-1.02-2.35,.04-.31,.13-.62,.27-.9-.06,.15-.1,.32-.11,.49-.13,1.2,.62,2.65,1.64,3.18,.64,.21,1.31,.11,1.87-.21-.19,.15-.37,.25-.56,.32,1.29-.22,2.38-1.24,2.11-3.24-.05-.32,4.09-4.28,4.27-4.62,.15-.1,.8,3.28,.87,3.34-.48,1.14-1.07,2.23-.38,3.61,2.02,3.36,6.74,.36,4.96-2.99-1.87-1.47-1.77-2.9-1.95-5.14,5.02,.63,10.56-.17,15.96-.53-3.05,.17-6.19,.26-9.35,.23-1.26,.08-2.49,.09-3.62-.02-.43,.24-2.64,.19-2.98-.2-.13-.01-.26-.01-.39-.01,0,.1,.01,.23,.04,.38,.18,.4,.25,.93,.29,1.56v.02c.13,.71,.23,1.44,.16,1.9,.01,.11,.02,.22,.04,.33-.05,.01-.1,.01-.15,.02-.06,.09-.13,.14-.24,.14-.04,0-.09,0-.14,0-.01-.01-.03-.01-.04-.01-.05-.02-.1-.04-.15-.07-.27,.03-.54,.07-.8,.14h-.01c-.18,.17-.44,.29-.8,.36h-.01c-.09,.28-.26-.13-.45-.81-.01-.06-.03-.12-.05-.18-.34-1.03-.71-2.61-.8-3.47t-.01-.02c-.05-.2-.09-.35-.12-.41-.23,0-.46-.01-.68-.03-.07,.02-.1,.02-.12,0-.05-.02,.14-.18,.33-.31,0,0,0,0,.01,0,.21-.23,.35-.46,.5-.66,.01-.01,.01-.02,.02-.03,.22-.37,.33-.46,.66-.49,.09-.03,.2-.05,.33-.06-.03,0-.06-.03-.08-.04-.45-.04-.61-.14-.24-.96,.07-.33,.12-.67,.16-1.01,0-.05,0-.1,0-.14,.03-.41,.04-.83,.04-1.17v-.02c0-.09,0-.18-.01-.27-.05-.04-.05-.08-.01-.11-.03-.4-.09-.8-.19-1.18-.21-.27-.34-.62-.39-1.09-.12-.29-.29-.56-.47-.82-.07-.06-.13-.14-.19-.23-.05-.07-.11-.15-.18-.22h.06s-.02-.03-.03-.05c.39-.06,.77-.07,1.12,0,1.54-.01,2.36,.33,2.88,.59,.01,0,.02,0,.03,.01,.49,.06,.86,.03,1.14-.08,.09-.16,.21-.3,.33-.45,0,0,.01,0,.01,0,.02-.04,.04-.07,.06-.11-.1,.14-.22,.27-.35,.4,.78-.97,1.25-2.24,1.96-3.26,.04-.08,.09-.15,.13-.23,.03-.02,.06-.05,.09-.07,.16-.21,.34-.4,.53-.57,.99,.12-.05,1.63-1.09,3.04-.59,.95-1.2,1.85-1.42,2.21h.19s.15,.02,.15,.02l.42,.03,.24,.02,.96,.07,.64,.05,1.75,.12c.11-.02,.2-.01,.28,.03,.18,0,.29,.02,.32,0h.02c.27,.04,.72,.03,1.18,.02h.08c.6-.03,1.2-.06,1.31,.07h.01c.13,.04,.22,.09,.23,.17l.33-.27c.15-.2,.4-.4,.76-.64h0c.15-.29,.37-.48,.62-.59,.01,0,.02-.01,.03-.01,.54-.33,1.08-.23,1.56-.07h.01c.45,.08,.87,.21,1.2,.32,.15-.02,.28-.11,.39-.28h.01c.1-.53,.21-1.04,.33-1.55v-.06c-.09,0-.17-.02-.24-.06-.2,2.37-.69,1.6-2.64,1.15,.05-.14,2.51-1.94,2.82-2.56,0-.05,.01-.1,.02-.16,0-.01-.02-.02-.03-.03-2.28,1.99-3.24,3.59-6.37,1.94,2.41-4.85,4-1.83,6.77-3.52,.01-.01,.01-.03,.01-.04-.06,.01-.11,.01-.17,.02-.25,.12-.63,.13-1.01,.12-.42,.05-.84,.1-1.27,.14-.01,.01-.03,.01-.05,.02h-.09c-.09,.01-.18,.02-.27,.03h-.02c-.57,.05-1.17,.12-1.79,.19-.05,0-.11,.01-.17,.01-1.37,.15-2.79,.27-3.96,.11-.23-.01-.46-.02-.69-.04,0,.02,0,.04-.01,.06-.08-.03-.15-.06-.23-.08-.57-.04-1.13-.1-1.69-.21-.26-.02-.51-.06-.75-.14,.7-.06,1.39-.13,2.09-.2,.35-.04,.69-.08,1.02-.11,1.02-.12,2.01-.24,2.99-.35,.4-.05,.79-.1,1.18-.15,.72-.08,1.44-.18,2.17-.28,.35-.04,.7-.09,1.05-.14h.03s.01-.01,.02-.01l2.47-.32,1.43-.18,2.24-.28c1.06-.18,2.14-.34,3.22-.48,.01-.01,.02-.01,.03-.01,.76-.16,1.66-.26,2.58-.33-1.27,.05-2.54,.14-3.83,.24Zm-35.17,5.46c-.04,.31-.07,.61-.11,.89-.01,.02-.01,.03-.01,.05-.11,1.7-.28,3.62-.67,4.41,0,0,0,.01-.01,.02-.04,.23-.09,.42-.12,.59,.02,.01,.05,.02,.09,.02-.06,.1-.14,.29-.23,.45-.02,.05-.04,.09-.06,.12-.04,.12-.09,.17-.13,.17-.1,.07-.18-.01-.21-.44,.02,0,.04,0,.05-.01v-.04c-.08-.07-.16-.64-.12-1.59,.02,.02,.06,.05,.09,.05,0-.2,.01-.4,.02-.62-.05-.62,.03-1.34,.16-2.09,0-.01,0-.02,0-.04,.14-1.24,.33-2.55,.6-3.72,.23,.48-.35,2.69-.37,3.76,.02-.04,.04-.08,.06-.12,.12-.73,.25-1.4,.35-1.85,.02-.25,.04-.51,.08-.76,0-.09,.01-.17,.02-.26,0-.19,.03-.37,.07-.54,0-.05,.02-.1,.02-.14,.01-.05,.02-.1,.03-.15,.03-.14,.06-.27,.09-.37,0-.05,.02-.09,.03-.13,.01-.01,.03-.02,.04-.03s.02-.03,.03-.02c.04-.05,.08-.05,.12,.01,.1,.05,.15,.23,.16,.48,0,.06,.02,.13,.02,.19,.01,.05,.01,.1,.01,.14,.01,.57-.07,1.28-.1,1.57Zm13.02,16.23s.02-.01,.03-.01c.03-.02,.06-.04,.1-.06,.03-.02,.06-.04,.1-.06,1.6-.74,2.64,1.49,1.4,2.58-.19,.1-.37,.16-.53,.19-.17,.13-.41,.12-.66,.02h-.01c-.6-.14-.99-.66-1.06-1.23-.14-.5-.01-1.04,.63-1.43Zm-11.3,.63c-.09,1.01,.53,2.14,1.4,2.52-1.09-.25-1.61-1.44-1.4-2.52Zm4.23,.72h0c-.12,.86-.63,1.56-1.29,1.94,.45-.36,.89-.98,1.29-1.93-.07,.13-.14,.25-.21,.37-.25,.55-.62,1.09-.96,1.16-.57,.42-1.13,.46-1.63,.27,.44,.09,.98,.03,1.59-.26,.01,0,.03,0,.04-.01,.33-.25,.65-.62,.96-1.16,.13-.28,.23-.57,.28-.79-.01,.11-.04,.25-.07,.41Zm-2.5-2.54c.29-.08,.62-.12,1-.1-.38,0-.71,.04-1,.1Zm1.51,2.61c.23-.21,.45-.47,.63-.65-.06,.07-.12,.14-.19,.23-.05,.08-.23,.26-.44,.42Zm.78-.8c.12-.12,.22-.17,.26-.1-.05-.03-.14,0-.26,.1Zm.28,.29c.02-.14,.03-.24,.01-.31,.03,.07,.02,.18-.01,.31Zm4.35-5.8c.13,.25,.05,.55-.4,.91-.28,.34-.71,.73-1.21,1.18v-.02c-.11,.12-.22,.25-.34,.38-.26,.43-.67,.85-1.1,1.27-1,1.12-2.01,2.21-2.89,2.57,.02,.02,.05,.03,.07,.04-.09,.02-.18,.03-.25,.03-.04,.02-.07,.03-.11,.04,.07,.12,.15,.18,.24,.2,.15-.01,.35-.12,.53-.26-.19,.17-.37,.28-.53,.26-.13,.01-.22-.05-.24-.2-.73-.19-.35-1.01,.11-1.73,.01-.01,.02-.03,.03-.05,.18-.35,.4-.73,.64-1.12-.05,.02-.12,.05-.21,.11-.79-.16-1.44-.17-1.95-.07-.44,.09-.79,.26-1.04,.49,.43-.48,1.03-.82,1.71-.89h.01c.48-.05,1,.03,1.52,.3,.64-1.03,1.44-2.12,2.09-2.93,0-.02,.03-.03,.03-.04,.59-.87,1.1-1.5,1.16-1.19h.01s.07,.01,.1,.01c.06,0,.12,.01,.18,.01,.22,0,.45,.04,.69,.1,.07,.01,.14,.03,.2,.04h0c.58,.13,.88,.31,.94,.56Zm-.2-2.22c-.11,.22-.24,.4-.39,.54-.09,.13-.25,.23-.44,.31-.02,.01-.05,.02-.08,.03-.38,.17-.83,.22-1.31,.2-.7,.03-1.4-.05-1.77-.15-.17-.02-.35-.03-.52-.04,.51-.32,.86-.59,1.1-.82,.01,0,.02-.01,.02-.01,.17-.21,.33-.43,.5-.64,.04-.06,.08-.11,.12-.16,.05-.06,.09-.12,.14-.17,.02,.02,.07,.04,.13,.04,.18-.03,.48,0,1.02,.07,.04,0,.08,0,.13,0,.51,.02,1.05,.05,1.36,.17,0,0,0,.01,.01,.01,.07,0,.14,0,.21,.02-.01,.04-.02,.07-.03,.1,.1,.11,.06,.27-.2,.49Zm9.65-6.27s-.07-.01-.11-.01c-.03,0-.06-.01-.09-.01-.09,0-.21,0-.33-.02-.11-.01-.23-.02-.36-.02h-.08c-.11-.01-.22-.02-.33-.02-.29-.02-.6-.03-.9-.05-.21-.01-.41-.02-.59-.03h-.05c-.1-.01-.2-.02-.29-.02-.25-.02-.45-.04-.59-.05-.03-.01-.05-.01-.07-.01-.33-.02-.4-.06,0-.07,.02-.01,.05-.01,.08-.01,0-.01,.02-.01,.03,0,.03-.01,.07-.02,.12-.02-.56-.34-.28-.41,.06-.59-.48,.37-.18,.55,.41,.65h.05c.49,.03,1.24,.04,1.88,.08,.09,0,.17,0,.26,.01,.31,0,.56,0,.72,.02-.01-.01-.01-.02-.01-.03,.11,.12,.54,.12,.19,.2Zm-2.35-2.16c.21-.06,.4-.08,.57-.05,.06-.01,.12,0,.18,.03,.01-.01,.02-.01,.03,0,.13,.03,.26,.1,.38,.21,.08,.06,.16,.14,.22,.24,.05,.07,.1,.14,.14,.22,.08,.11,.14,.25,.2,.39s.11,.3,.16,.46c-.16-.36-.42-.81-.75-1.08-.13-.11-.28-.2-.44-.25-.26-.07-.55-.03-.87,.17-.11,.08-.23,.17-.34,.29-.12,.11-.24,.25-.37,.42,.01-.07,.08-.17,.19-.26,.02-.02,.03-.04,.05-.06,.2-.26,.41-.45,.61-.57,.09-.1,.12-.16,.04-.16Zm1.52,1.44c-.37,.04-.94-1.28-.5-.93,.1,.3,.53,.74,.5,.93Zm4.05,.79h-.01s-.12,.02-.2,.03c-.36,.02-.98,.03-1.52,0-.1,0-.2-.01-.3-.01-.37-.02-.66-.05-.72-.1-.02,0-.03-.01-.02-.02h.01s.01-.02,.02-.03c0,.01,.07,.01,.18,.01,.25,.01,.71,.01,1.18,.01h.08c.13,0,.26,0,.38,.01,.09,0,.18,0,.26,0,.12,0,.24,0,.34,.01,.1,0,.19,.01,.25,.01h.04s.08-.01,.08-.01t.01,.02s.01,0,.01,.01c0,0,.02,0,.02,.01,.01,.02-.02,.03-.09,.04Zm-1.79-.38c-.45,.03-.94,.05-.7-.23,.02-.02,.03-.05,.05-.07,.04-.14,.18-.35,.46-.63-.13,.16-.27,.37-.46,.63-.06,.25,.19,.32,.65,.3Zm-.16-.97c.08-.11,.15-.19,.21-.23-.02,.03-.04,.06-.06,.08-.05,.05-.1,.1-.15,.15Zm1.41,.74c-.2-.06-.35-.3-.48-.54-.14-.16-.26-.33-.3-.5,.13,.1,.27,.31,.5,.59l.06,.07c.09,.12,.2,.26,.34,.41,.13,.15,.1,.22,0,.24,.06-.05,0-.14-.11-.27Zm-.62,.19c-.13,.01-.26,.02-.37,.02,.19-.03,.34-.04,.37-.02Zm-.5-1.25c.09-.12,.2-.2,.33,.01-.11-.09-.2-.1-.33-.01Zm.52-.35c.11-.02,.44,.09,1.01,.22,.58,.09,1.37,.2,1.7,.3,.04,.01,.08,.02,.12,.02,0,0,0,.01-.01,.03,.05,.02,.06,.04,.04,.06-.19,.18-.35,.34-.49,.47-.08,.07-.14,.13-.2,.18-.25,.23-.52,.45-.72,.53-.02,.07-.06,.08-.12,.04-.08,.01-.13-.02-.15-.1-.03-.04-.05-.07-.08-.11,0-.01-.01-.01-.01-.01-.09-.12-.2-.26-.31-.41-.04-.06-.09-.12-.14-.19-.38-.49-.6-.77-.67-.91l-.03-.03c-.12-.15-.06-.13,.06-.09Zm.58-2.89c.36-.31,.06,.17-.24,.62-.02,.04-.05,.09-.08,.13-.03,.04-.06,.09-.09,.14-.01,.03-.03,.06-.06,.09-.03,.07-.08,.16-.13,.24h.03s.09-.03,.14-.06c0-.01,.02-.02,.02-.02,.13-.16,.25-.32,.36-.46,.02-.02,.03-.03,.03-.04,.26-.4,.55-.85,.86-.86,.03,.21-.15,.55-.44,.95-.06,.1-.13,.2-.2,.3-.48,.7-1.16,1.54-1.73,2.31-.02,.01-.03,.03-.03,.04-.07,.11-.12,.21-.17,.31l-.64,.85c-.06,.11-.38-.05-.46-.05,.12-.33,.59-1.02,1.1-1.76,.02-.03,.04-.06,.06-.09,.5-.78,1.05-1.64,1.4-2.17,.02-.01,.02-.03,.03-.04,.1-.2,.16-.35,.15-.44,.03,0,.06,.01,.09,.01Zm-.23-.02c-.77,1.55-1.72,2.44-3.08,3.25-.37-.89-1-1.07-1.87-.51-.28,.03-1.05,1.32-1.02,.91,2.71-4.14,1.53-4.17,5.97-3.65Zm-11.26,.73c-2.63,2.14-2.41,1.33-4.23-.93,.36,.23,5.21-.58,4.23,.93Zm-4.11-1.36h.07c.77-.03,1.9-.05,2.76-.04l1.13-.02s.01,.03,.01,.05c.05,0,.09,0,.09,.01,.12,.18-.23,.25-.79,.26-.02,.01-.04,.01-.06,0-1.02,.09-2.76-.03-3.55-.13-.17,0-.3,0-.37,.01-.14-.03-.12-.06,0-.08-.14-.04,.02-.07,.7-.06Zm-.61,2.5c-.04,.35-.09,.65-.18,.92-.01,.05-.01,.08,0,.1-.02,.01-.04,.02-.05,.02-.01,.03-.02,.05-.03,.07-.25,.15-.43,.15-.55,.05v.04s-.05-.07-.06-.11t-.01-.02s-.07-.11-.09-.18c-.02,.09-.04,.19-.07,.28,0-.13,.02-.26,.04-.39-.11-.58,.09-1.61,.36-2.25,.04-.21,.09-.42,.14-.63,.05,.05,.08,.12,.1,.19,.04-.04,.08-.08,.12-.1,0-.02,0-.04,0-.05,.04,0,.08,0,.11,.01,.02-.01,.03-.02,.04,0,.03-.01,.06,.01,.09,.04,.02,.01,.03,.02,.04,.04,.11,.08,.17,.24,.19,.45,0,.01,.01,.02,0,.04,.04,.41-.07,.97-.18,1.46v.02Zm.38-1.51c.06-.35,1.8,1.92,1.9,1.9,.16,.2-.55,.64-.7,.67-2.43,.19-1.23,.17-1.2-2.57Zm2.51,2.66c-.36-.13-1.34,.15-.43-.41,.03-.12,.59,.45,.43,.41Zm-.09-.55c0-.16,1.97-1.61,2.05-1.53,.01,.02,.51,2.05,.51,2.1-.78-.02-2.06,.25-2.56-.57Zm3.22,.54s0,.01-.01,.01c-.08,.07-.19,.11-.33,.1-.04-.19-.1-.38-.15-.57-.1-.34-.21-.69-.31-1.05-.03-.09-.06-.19-.08-.29-.02-.08-.04-.16-.06-.24-.14-.55-.23-1.08-.13-1.39,0-.01,0-.03,.01-.04,0-.08,.02-.16,.03-.24,.13-.04,.24-.04,.32-.02h.01s.11,0,.18,.02c1.55-.09,3.11-.09,4.65-.01-.44,.06-.88,.1-1.32,.14-.08,.01-.16,.02-.24,.03h-.01c-.86,.11-1.82,.22-2.45,.12h-.02c-.13,0-.26,0-.39,0-.05,.1-.07,.21-.07,.34h0c.13,.54,.41,1.39,.5,2.07,0,.03,0,.05,0,.07,.09,.43,.09,.77-.14,.94Zm2.42,.82c-.14,.14-1.06-.39-.64-.27,.08,.03,.81,.12,.64,.27Zm-.01-.57c-2.56,.32-2.24-1.57-2.54-3.35,.06,.01,1.37-.18,1.36-.05,.17,.56,3.09,3.28,1.18,3.4Zm.99-1.03l-.03-.03s-.07,.01-.11-.01c0,.03-.02,.05-.06,.06,0-.03-.04-.09-.09-.17-.2-.2-.47-.59-.72-1-.05-.07-.1-.14-.14-.2-.25-.35-.48-.68-.56-.87-.04-.05-.08-.09-.11-.12,.02-.01,.04-.02,.06-.03,0-.02,.02-.03,.05-.03,.46-.19,.81,.28,1.13,.82,0,0,0,0,0,0,.19,.27,.42,.63,.69,1.1,.12,.18,.08,.34-.12,.47Zm.39-.63c-.12,.22-1.24-1.78-1.31-1.78,3.42-.43,2.44-.43,1.31,1.78Z"
												style={{ fill: "#01142a" }}
											/>
											<path
												d="M826.98,159.32s-.01-.01-.01-.01c-.57-.07-1.01-.12-1.36-.17-.05,0-.09,0-.13,0-.43-.01-.82-.02-1.02-.07-.13,.02-.21,.06-.27,.13-.04,.05-.08,.1-.12,.16-.09,.15-.22,.36-.5,.64,0,0-.01,.01-.02,.01-.21,.24-.44,.46-.72,.63,.24-.01,.45-.04,.63-.08,.04-.03,.13-.06,.29-.08-.09,.03-.18,.06-.29,.08-.08,.07,.27,.14,.76,.16,.15,.01,.31,.01,.46,.01,.14,0,.27,0,.41-.01,.02,0,.03,0,.05,0,.25-.03,.5-.06,.74-.13-.01-.01-.02-.02-.04-.02,.04,0,.08,0,.12-.01h0c.21-.05,.41-.13,.61-.24t.02-.01c.08-.06,.15-.14,.21-.24-.44,0-.92-.12-1.33-.18,.34-.03,.76,.02,1.33,.18,.06-.04,.11-.08,.15-.12,.08-.14,.14-.3,.2-.49-.04-.05-.1-.09-.18-.12Zm-3.15,1.13c.25-.1,.46-.21,.67-.31-.02,.07-.03,.15-.02,.25-.28,.02-.49,.04-.65,.06Zm2,.1c-.24,.02-.5-.01-.75-.05,.26,.01,.52-.01,.75,.05Z"
												style={{ fill: "#ac4a01" }}
											/>
											<path
												d="M840.15,153.42c-.05-.02-.09-.05-.13-.09-.14-.11-.28-.24-.41-.39-.02-.01-.03-.03-.04-.04-.18-.24-.32-.52-.49-.78,0-.02-.01-.03-.02-.04-.01-.03-.02-.06-.03-.09,.19,.16,.36,.35,.52,.55h0c.21,.26,.39,.53,.55,.81h.01s.03,.05,.04,.07Z"
												style={{ fill: "#01142a" }}
											/>
											<path
												d="M831.44,169.49c-.18-.02-.26-.08-.3-.16h0c-.02-.1,0-.22,.04-.36,.01-.06,.03-.13,.05-.2h0c.02-.08,.03-.15,.04-.23,0-.02,0-.04,0-.06,.01-.03,.01-.05,.01-.07,.02-.14,.01-.3-.04-.46,0-.03-.01-.06-.04-.09,0-.01,0-.03-.01-.04-.16-.31-.49-.62-1.16-.91,1.6-.74,2.64,1.49,1.4,2.58Z"
												style={{ fill: "#e9f3f7" }}
											/>
											<path
												d="M831.18,168.84v.13c0,.14-.02,.25-.04,.35h0c-.05,.18-.13,.29-.23,.36-.17,.13-.41,.12-.66,.02h-.01c-.44-.2-.91-.69-1.06-1.23-.14-.5-.01-1.04,.63-1.43,.01,0,.02-.01,.03-.01,.03-.02,.06-.04,.1-.06,.03-.02,.06-.03,.1-.05,.39,.23,1.2,.58,1.08,1.05-.11-.1-.23-.16-.33-.19-.16-.05-.3-.02-.41,.06-.2,.13-.3,.41-.22,.64,0,.01,.01,.03,.01,.05,.04,.09,.11,.18,.22,.25,.04,.02,.09,.04,.15,.06,.16,.04,.36,.05,.64,0Z"
												style={{ fill: "#83d4f1" }}
											/>
											<path
												d="M830.83,167.83c-1.68,.09,.88,2.27,.37,0,.21,.35,.21,.69-.01,1.02-1.85,.31-.76-1.63-.35-1.02h0Z"
												style={{ fill: "#2f4e66" }}
											/>
											<path
												d="M859.83,162.72c0,.15-.04,.34-.09,.48-.04,.1-.09,.18-.14,.2h0v-.02s-.03-.02-.03-.03c-.02-.02-.04-.04-.04-.05h0c-.07-.13-.01-.24,.05-.36,0,0,.01,0,.01-.01,.05-.09,.1-.18,.1-.29v-.02s-.01-.09-.03-.13c0-.01,.03-.01,.04-.01t.02-.01c.07-.01,.11,.08,.11,.2,.01,.02,.01,.03,.01,.05Z"
												style={{ fill: "#879b9e" }}
											/>
											<path
												d="M830.83,167.83c.41,.16,.67,.68,.22,.98-.98,.26-.97-1.28-.22-.98Zm.03,.74c.13-.04,.2-.19,.15-.34-.32-.67-.79,.41-.15,.34Z"
												style={{ fill: "#daeaf2" }}
											/>
											<path
												d="M859.59,163.38h0c0,.11-.25,.15-.45,.05-.03-.02-.06-.03-.09-.05-.05-.04-.1-.09-.14-.15-.07-.12-.08-.29,.03-.52,.05-.06,.09-.09,.11-.09,.03,0,.04,.04,.06,.09v.03s.01,.05,.01,.07c.02,.13,.05,.29,.14,.36,.04,.05,.1,.07,.17,.06,.04,.02,.07,.05,.09,.06h0s.04,.04,.05,.06c.01,.01,.02,.02,.02,.03Z"
												style={{ fill: "#95bfca" }}
											/>
											<path
												d="M830.86,168.57c-.3,.1-.47-.46-.16-.54,.3-.1,.47,.46,.16,.54Zm0-.3c.03-.07-.03-.14-.1-.14-.25,.01,0,.43,.1,.14Z"
												style={{ fill: "#101116" }}
											/>
											<path
												d="M830.87,168.27c-.11,.3-.35-.12-.1-.14,.07,0,.13,.07,.1,.14Z"
												style={{ fill: "#d2d2cf" }}
											/>
											<g id="eQacwfWID1M236_tr" data-name="eQacwfWID1M236 tr">
												<g>
													<path
														d="M820.32,153.59c1.17,5.84,1.91-4.18,.31-4.98-.74,1.33-.39,3.52-.31,4.98Zm.32-4.38c.45-1.22,.9,5.45,.65,5.85-1.3,.44-.85-5.05-.65-5.85Z"
														style={{ fill: "#06182f" }}
													/>
													<path
														d="M822.15,161.02v-.13c0-.18-.01-.36-.02-.56-.03-.36-.08-.73-.12-1.1-.01-.01-.01-.02-.01-.03-.01-.06-.01-.11-.02-.17h0c-.02-.12-.03-.24-.05-.35,0-.02,0-.05-.01-.07,0-.04-.01-.06-.01-.1h0s0-.04,0-.05v-.02c-.03-.28-.05-.57-.06-.84v-.24s-.01-.01-.02-.01c-.01-.01-.02-.01-.02-.01-.13-.1-.24-.17-.34-.22h-.01c-.06-.02-.11-.04-.15-.05h-.01c-.21-.05-.35,0-.43,.15-.32,.53,.04,2.14-.17,2.96,.01,.12,.01,.24,.02,.35,.33,4.6,1.55,5.26,1.44,.49Zm-.24,.2c0,.17-.02,.34-.03,.5,0,.04-.01,.08-.01,.11-.04,.53-.07,1.01-.07,1.4-.02,.41-.05,.63-.09,.72-.12,.22-.3-.4-.48-1.33t0-.02c-.02-.12-.04-.25-.07-.38-.06-.43-.12-.91-.18-1.4,0-.03,0-.05-.01-.08h0c0-.25-.04-.5-.06-.75-.02-.13-.03-.26-.03-.39t0-.02h0s.01-.04,0-.06c-.02-.52-.03-1-.02-1.38,.01-.13,.02-.24,.03-.34,.05-.31,.14-.48,.29-.44,.17,.09,.31,.24,.41,.43h0s.02,.03,.02,.04h0s.03,.05,.04,.07v.02h0s.03,.08,.04,.11c.01,.01,.01,.02,.02,.03v.02s.01,.03,.01,.04c.01,0,.01,.01,.01,.02h0s.01,.01,.01,.02,0,.01,.01,.02c0,.01,.01,.02,.01,.03s0,.02,0,.03c.02,.12,.05,.27,.08,.42,0,.01,.01,.02,.01,.03,.02,.11,.03,.24,.05,.36,0,.01-.01,.01-.01,.01,0,.01,.01,.01,.01,.01,0,.05,0,.1,.01,.15v.04c.03,.52,.02,1.1-.01,1.66v.08c0,.08,0,.15-.01,.22Z"
														style={{ fill: "#06182f" }}
													/>
													<path
														d="M821.17,151.08c-1.08-.49,.01,2.4-.58,3.08-.46-1.6,0-8.37,.58-3.08Z"
														style={{ fill: "#f0f8fa" }}
													/>
													<path
														d="M821.17,151.08c.29,.99,.31,5.87-.58,3.08,.59-.67-.5-3.57,.58-3.08Z"
														style={{ fill: "#91dbef" }}
													/>
													<path
														d="M821.18,157.36c-.11,2.31,.6,4.41,.53,6.64-.46,.61-1.33-7.34-.53-6.64h0Z"
														style={{ fill: "#f0f8fa" }}
													/>
													<path
														d="M821.18,157.36c.06,.03,.48,0,.48,.12,.75,6.04-.36,6.42-.48-.12Z"
														style={{ fill: "#a6ddee" }}
													/>
												</g>
											</g>
											<g>
												<path
													d="M821.09,156.98c-.24,.08-1.44,.14-1.17-.14,.44-.19,.58-.51,.43-.94-.75-.74,.53-.76,.93-.38-.46-1-3.5,.18-2.28,1.28,1.15,.95,2.99,.13,2.08,.18Zm-2.01-.81c.18-.81,1.28-.7,1.04,.12,0,.48-.98,.72-1.04-.12Z"
													style={{ fill: "#06182f" }}
												/>
												<path
													d="M820.13,155.37c-.32,.09,.28,.34,.23,.53,.6-.37,.22,.14,1.1-.04-.13-.61-.76-.65-1.33-.49Z"
													style={{ fill: "#fefdfb" }}
												/>
												<path
													d="M820.11,156.29c-.32,.02-.72,.03-1.04-.12,.18-.81,1.28-.7,1.04,.12Z"
													style={{ fill: "#f0f8fa" }}
												/>
												<path
													d="M820.91,156.2c1.4-.15-.15-.56-.55-.29,.38,.74-.76,.95-.42,1.07,.36,.09,.75,.09,1.15,0-.13-.33-.8,.1-.55-.41,0-.47,.02-.14,.37-.37h0Z"
													style={{ fill: "#b5e0f0" }}
												/>
												<path
													d="M819.08,156.17c.32,.15,.71,.13,1.04,.12,0,.48-.98,.72-1.04-.12Z"
													style={{ fill: "#95bfca" }}
												/>
												<path
													d="M821.09,156.98c1.11-.84-.41-1.22-.56-.41-.24,.51,.43,.08,.56,.41Z"
													style={{ fill: "#80cae7" }}
												/>
											</g>
										</g>
										<g id="snow-2">
											<path
												d="M844.8,25.3c2.6,0,2.6,4.1,0,4.1-2.7,0-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M830.6,55.9c2.6,0,2.6,4.1,0,4.1-2.6,0-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M785.9,35.5c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M755.2,101.4c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M773.3,166.6c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M808.6,216.1c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M829.1,317.4c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M705.8,343.3c2.6,0,2.6,4.1,0,4.1-2.7,0-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M663.4,325.2c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M497.7,252.2c2.6,0,2.6,4.1,0,4.1-2.7,0-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M474.9,189.4c2.6,0,2.6,4.1,0,4.1-2.7,0-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M541.6,170.5c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M581.7,212.2c2.6,0,2.6,4.1,0,4.1-2.7,0-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M606.8,230.2c2.6,0,2.6,4.1,0,4.1-2.6,0-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M642.9,201.2c2.6,0,2.6,4.1,0,4.1-2.6,0-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M701.1,198.8c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M719.9,233.4c2.6,0,2.6,4.1,0,4.1-2.6,0-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M752.1,181.5c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M814.1,165c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M830.6,113.2c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M776.4,54.3c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M728.5,69.2c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M727,98.3c2.6,0,2.6,4.1,0,4.1-2.7,0-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M801.6,83.4c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M784.3,130.5c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M645.3,107.7c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M657.1,51.2c2.6,0,2.6,4.1,0,4.1-2.7,0-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M705,30.7c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M595.8,81c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M522.8,69.2c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M412.8,152.5c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M357.9,233.4c2.6,0,2.6,4.1,0,4.1-2.7,0-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M329.6,277.3c2.6,0,2.6,4.1,0,4.1-2.6,0-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M313.1,330.7c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M112.8,330.7c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M57.1,361.4c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M130.1,397.5c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M190.6,388.9c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M221.2,335.5c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M218.9,275c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M174.9,215.3c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M150.5,193.3c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M35.9,153.3c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M79.9,202c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M110.5,230.2c2.6,0,2.6,4.1,0,4.1-2.7,0-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M143.5,267.1c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M177.2,322.9c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M306.4,388c.1-.3,.3-.6,.5-.9,.1-.1,.3-.2,.4-.3,.3-.2,.7-.3,1-.3h1.6c.3,0,.5,0,.8,.2,.3,.1,.5,.2,.7,.4,.2,.2,.3,.4,.4,.7,.1,.2,.2,.5,.2,.8,0,.2,0,.4-.1,.5-.1,.3-.3,.6-.5,.9-.1,.1-.3,.2-.4,.3-.3,.2-.7,.3-1,.3h-1.6c-.3,0-.5,0-.8-.2-.3-.1-.5-.2-.7-.4-.2-.2-.3-.4-.4-.7-.1-.2-.2-.5-.2-.8,.1-.1,.1-.3,.1-.5Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M390.1,359.8c2.6,0,2.6,4.1,0,4.1-2.7,0-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M443.5,370.8c2.6,0,2.6,4.1,0,4.1-2.7,0-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M490.6,408.5c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M628,386.5c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M730.9,392c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M813.4,405.3c2.6,0,2.6,4.1,0,4.1-2.7,.1-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M779.6,338.6c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M767,306.4c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M778,263.2c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M776.4,222.4c2.6,0,2.6,4.1,0,4.1-2.6,0-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M837.7,256.9c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M841.6,186.2c2.6,0,2.6,4.1,0,4.1-2.6,0-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M591.9,155.6c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M580.9,232.6c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M575.4,284.4c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M608.4,331.5c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M588.7,402.2c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M547.1,379.4c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M559.7,417.1c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M616.2,429.7c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M686.9,418.7c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M740.3,425.8c2.6,0,2.6,4.1,0,4.1-2.6,0-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M760.7,436c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M856.5,359c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M866,279.7c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M477.2,110.1c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M449.7,170.5c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M410.5,252.2c2.6,0,2.6,4.1,0,4.1-2.7,0-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M443.5,300.9c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M487.4,321.3c2.6,0,2.6,4.1,0,4.1-2.6,0-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M522.8,316.6c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M291.9,96.7c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M299,212.9c2.6,0,2.6,4.1,0,4.1-2.7,0-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M269.1,285.2c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M258.1,348.8c2.6,0,2.6,4.1,0,4.1-2.6,0-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M253.4,391.2c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M171,418.7c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M77.5,404.6c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M3.7,319c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M42.9,256.1c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M94,273.4c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M38.2,301.7c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M49.2,118.7c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M89.3,88.9c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M126.2,27.6c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M248.7,27.6c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M323.3,59c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M405,32.3c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M456.8,26c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M583.3,11.1c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M565.2,51.2c2.6,0,2.6,4.1,0,4.1-2.6,0-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M513.4,27.6c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M448.2,80.2c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M407.3,94.4c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M334.3,128.9c2.6,0,2.6,4.1,0,4.1-2.6,0-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M219.6,143.8c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M214.1,195.7c2.6,0,2.6,4.1,0,4.1-2.6,0-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M231.4,226.3c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M208.9,88.3c2.6,0,2.6,4.1,0,4.1-2.6,0-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M248.2,111.9c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M266.5,64.8c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M182.2,68.4c2.6,0,2.6,4.1,0,4.1s-2.6-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M135.1,64.3c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M179.1,48.5c2.6,0,2.6,4.1,0,4.1-2.7,.1-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M48.2,71.1c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M27.8,15c2.6,0,2.6,4.1,0,4.1s-2.7-4.1,0-4.1Z"
												style={{ fill: "#fff" }}
											/>
										</g>
										<g id="snow-1">
											<path
												d="M35.7,34.6c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M49.5,64.5c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M93.2,44.5c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M123,108.9c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M105.4,172.5c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M71,220.7c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M51,319.5c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M171.3,344.8c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M212.7,327.2c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M374.3,256c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M396.5,194.7c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M331.4,176.3c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M292.3,216.9c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M267.8,234.5c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M232.6,206.2c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M175.9,203.9c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M157.5,237.6c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M126.1,187c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M65.6,170.9c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M49.5,120.4c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M102.4,62.9c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M149.1,77.5c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M150.6,105.8c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M77.8,91.3c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M94.7,137.2c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M230.3,115c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M218.8,59.9c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M172.1,40c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M278.5,89c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M349.8,77.5c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M457,158.7c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M510.6,237.6c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M538.2,280.5c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M554.3,332.5c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M749.6,332.5c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M804,362.4c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M732.7,397.7c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M673.8,389.2c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M643.9,337.1c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M646.2,278.2c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M689.1,220c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M712.8,198.5c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M824.7,159.4c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M781.8,206.9c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M751.9,234.5c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M719.7,270.5c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M686.8,324.9c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M560.8,388.4c-.1-.3-.3-.6-.5-.9-.1-.1-.3-.2-.4-.3-.3-.2-.6-.3-1-.3h-1.5c-.3,0-.5,0-.8,.2-.2,.1-.5,.2-.6,.4-.2,.2-.3,.4-.4,.6-.1,.2-.2,.5-.2,.8,0,.2,0,.4,.1,.5,.1,.3,.3,.6,.5,.9,.1,.1,.3,.2,.4,.3,.3,.2,.6,.3,1,.3h1.5c.3,0,.5,0,.8-.2,.2-.1,.5-.2,.6-.4,.2-.2,.3-.4,.4-.6,.1-.2,.2-.5,.2-.8-.1-.1-.1-.3-.1-.5Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M479.2,360.9c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M427.1,371.6c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M381.2,408.4c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M247.1,386.9c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M146.8,392.3c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M66.4,405.3c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M99.3,340.2c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M111.6,308.8c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M100.8,266.7c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M102.4,226.8c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M42.6,260.5c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M38.8,191.6c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M282.4,161.7c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M293.1,236.8c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M298.4,287.4c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M266.3,333.3c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M285.4,402.2c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M326,380c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M313.8,416.8c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M258.6,429.1c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M189.7,418.3c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M137.6,425.2c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M117.7,435.2c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M24.2,360.1c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M15,282.8c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M394.2,117.3c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M421,176.3c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M459.3,256c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M427.1,303.4c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M384.2,323.4c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M349.8,318.8c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M575,104.3c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M568.1,217.7c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M597.2,288.1c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M607.9,350.2c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M612.5,391.5c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M692.9,418.3c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M784.1,404.5c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M856.1,321.1c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M817.8,259.8c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M768,276.6c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M822.4,304.2c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M811.6,125.7c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M772.6,96.6c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M736.6,36.9c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M617.1,36.9c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M544.3,67.5c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M464.7,41.5c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M414.1,35.4c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M290.8,20.8c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M308.4,59.9c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M359,36.9c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M422.5,88.2c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M462.4,102c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M533.6,135.7c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M645.4,150.2c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M650.8,200.8c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M633.9,230.7c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M655.9,96.1c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M617.6,119.1c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M599.7,73.1c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M681.9,76.7c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M727.9,72.6c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M685,57.3c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M812.7,79.3c-2.6,0-2.6,4,0,4s2.5-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
											<path
												d="M832.6,24.6c-2.6,0-2.6,4,0,4s2.6-4,0-4Z"
												style={{ fill: "#fff" }}
											/>
										</g>
										<path
											id="strike-2"
											d="M575.6,204.6c38.9,9.4,5.3,49.5,8.1,72.9-9.5-39.6,32.9-52.1-17.1-73,14.5-15,27.9-34.5,17.8-55.8,.3-2.6-19.8,2.3-20.7,1.8,1,21-10.9,35.6-18.2,54.7,12.6,18.1-.8,33,4.7,52.4-5.8,19.3-.6,24.2,8.3,41.1,1,1.8-6.7,9-7.2,10.5-3.1,2.7,9.8,31.4,10.1,34.7,.1,4.4-16.7,22.2-15.8,26.9-.7,15.2,6.1,25.6,0,40.1,.3-4.7,1.9-12.7,.7-14.9-7.3-19.7-1.7-35,10.6-50.8,1.7-.6-10.8-27.5-10.7-28.6-4.5-1.8-10.8,1.8-15.8,2.5-31.1,11.8-9.2,21-8.1,42.8-.2,28.3-25.3,50.3-19.1,80.5-11.5-32.3,34.2-74.3,3.7-107.9,5.4-22.1,39.6-15.7,46.1-35.4,1.1-.9-11.2-21.7-11.4-22.8-2.2-7.4,7.9-18.2,.9-22.9-6.2,8.9-14.4,14.8-25.5,16.7-13.5,22-12.3,51.4-38.7,65.7,20.2-16.5,24.3-45.8,33.8-69.2,14.6-3.7,26.9-15.1,31-29.3,4.6-10.2,.3-22.7-4.8-31.8-1.9-10.8,30-43.9,10.7-42.7-29.7,1.7-14.7,14.9-17.5,30.2,1,31.5-19.8,21.7-39.7,21.4,1.6,30.6-14,25.8-21.1,54.2,.9-25.9,20.5-26.4,17.4-57.4,23.6-6.4,41.2,15.9,36.6-27.9-8.4-32.1,3.5-20,27.9-29.8,2.3-.5,.2-6.7,.4-8.2-1.1-2.4,26.9-4.9,27.6-5.8,3.1-.5-1.2-16.7-.7-18.4-.5-2.1,12.5-11,13.5-12.5,3.3-11.3-3.5-24.9,11.4-17-.6,18,1.8,20.8-13.6,31.4,.4,34,13.3,53.2-15.6,81.6Z"
											style={{ fill: "#ffffb5" }}
										/>
										<path
											id="strike-1"
											d="M200.9,324.1c1.9,5.7,8.1,15,7.7,23.5-.7,.8-6.5,5.4-5.1,6.8,17.7,14.3,10.3,28.5,18.2,46,12.4,10.3,8.8,9-1.6-.1-6.9-15.4-2.6-33.1-18.6-43.6-1.5-1.4-2.5-1.1-3,.9-.8,9.5-9.5,14.4-13.3,21.1,7.4,8.6,4.1,22.4,10.4,28.9-11.1-11.8-1.1-15.6-12-28.4-1.6-4.4,5.3-6.8,7.3-10.2,4.4-7.1,6.3-16.6,14.4-21.5,1.1-9.7-7.6-19.5-9.9-28l15.3-12.2c1.5-.6-2.9-7.7-2.9-8.6-.4-2.1-18.9-5-18.9-7.3l5.5-20.5c-.6-4.2-8.2-3.9-10.7-7.2-28.4-27,5.5-13.2-6.4-41.8,24-26.3,18.7-21.9-4.8-41.5,.4-6,8.2-15-1.9-17.2-4.5,4.2-6.8,12.3-10.8,17.6-22.5,30,13.4,46.3-13.6,56.6-1,.6-1.2,2-.3,2.8,11.3,8.8,14,24,26.5,30.5,3.6,1.3-6.2,19-6.2,21,3.3,5.4,10.1,9.8,13.1,16.2-3.2-3.3-9.5-10.4-14.5-14.3-.5-6.7,7.6-14.5,6.2-21.4-12.8-6.2-16-23.2-27.8-29.3-10,18-23.8,28.3-20.5,49.4-3.6-11.4,0-27,9.6-36.8,7.7-10.2,11.1-20.6,21.9-27.1-13.6-25.4-.5-46.5,10.3-69.5-.2-.3-7.2-10.4-6.4-10.9,1.6-3.9-.7-21.1,8.7-14.4-1.6,14.5-2.6,20.3,13.2,26.9,7.7,2.2,0,5.9,3.1,9.8,26.6,1.3,43.2-3.9,30.3,29.3,3.6,14.2,20.4,21,31.3,29.6-1.4,2.8-23.3-14.6-30.5-19.1-11.6-32,21.5-36.1-32.8-33.6-3.8,6.6,16.1,12.2,19.5,19.4-14.2,38.4-33.7,21.7,13.6,46.2,3.6,22,4.2,28.3,24.2,37.7-3.9,4.6-3.7,23.8-4.3,22.9-5.2-20.5,11.8-19.7-12-29.5-11.9-9.5-4.9-33.4-24.1-34.6-8.2-.4-13.2-10.6-12.9,.1-18.2,14.9,3.3,21.1,13.8,29.9,.2,.9-7.6,21.8-5,21.6,.6,.3,16.5,5.1,16.1,6,3.3,9.5,8.3,11.4-2.9,17.8,7.2,7.3,24.5,15.5,33.3,24.4-.6,12.1-6.1,16.5-2.7,26.1,10.8,5.1,13.1,7.5,13.2,20.5,.3,10.5,4.3,22.8,5,34.1,.7,3.3,.5,2.7-.5-1.5-1.9-7-1.8-13.7-4.8-20.6-4.3-9.2,1-18.2-5.2-26.3-11.4-1.2-12.6-12.5-10.1-21.3,13-10.6-44.5-43.2-34.7-25.3Z"
											style={{ fill: "#ffffb5" }}
										/>
										<g id="back-clouds-1">
											<g id="mid-clouds-2-4" data-name="mid-clouds-2">
												<path
													d="M203.2,160.7c4.4,1,8,0,10.7-2.8-.6,1.6-.6,2.9,.1,3.8,.5,.8,1.6,1.2,3,1.4,18.1,1.8,35.9,1.4,53.6-1.5,11.2-1.8,21-6.6,29.7-14.4,12-10.9,23-22.8,33-35.6,10.8-13.8,21.8-13.8,32.9,.1,11,13.6,24.9,17.4,42.2,11.3,8.4-2.9,16.9-5.9,25.3-8.7,10.8-3.6,11.6-2.1,2.4,4.5-14.5,10.4-30.8,14.8-48.8,13.6-1.7-.1-3.1,.3-3.9,1.1-.8,.9-1,1.7-.3,2.5,.5,.7,1.5,1,2.9,1,24.7,.3,48.5-7,71.5-22,11.3-7.4,17.4-16.7,18.2-27.9,2.3,2,3.9,4.5,4.8,7.2-15.5,28.2-39.6,44.9-72.2,50.1-24.9,4-42.9-4.7-54.1-25.8-4.2-8-8.7-8.1-13.5-.5-25,39-61,56.8-107.8,53.4-12.3-1.2-22.2-4.7-29.7-10.8h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M864.5,.7c-3.5,.4-6.8,.4-10,0h-41.1c-2.1,0-4.2-.2-6.3-.7h-67.2c-1.7,2.6-3.3,5.2-5,8.1-24.5,2.8-48.6,3.6-72.4,2.3-8.9-.5-20.7,.1-35.6,1.9-8,1-16.1,1.1-24.3,.7-8.3-.5-16.1,.2-23.6,1.9-17.4,4-35,5.5-52.8,4.5-11.9-.7-22.6,.2-32.3,2.8-10.7,2.7-21.4,5.2-32.2,7.1-20.4,13.2-42.8,15.6-67.4,7.4-44.3,6.3-92.1,6.9-143.1,1.7-32.9-3.3-68.2-3.1-106,.7-9.5,1-22.2,.7-38.2-.9-23.3-2.2-45.5,1.4-67,10.7-9.9,.1-19-.1-27.4-.6C7.1,48,2.9,50.2,0,55.1v7.6c4.3,2.1,8.8,3.7,13.5,4.5,7.3,1.3,12.6,3.1,15.7,5.2,13.1,8.8,22.1,20.8,27.1,35.9l51.7-5.1c2.4-.2,4.6,.6,6.1,2.3,5.5,6.1,8.3,15.1,8.4,26.8,0,3.1,2.8,5.4,5.8,5.1,12.4-1.4,23.9-3.8,34.4-7.2,17.3-5.6,30-1.1,38,13.3,1.1,2,3,3.3,5,3.3,12.9,.2,25.5-2,37.6-6.6,1.6-.6,3-.8,4.3-.8,5.9,0,5.9,2.1,.1,6.3-3.8,2.8-15.1,6.9-33.8,12.5v-.1c-.6,1.6-.6,2.9,.1,3.8,.5,.8,1.5,1.2,3,1.4,18,1.8,35.9,1.4,53.6-1.5,11.2-1.8,21.1-6.6,29.7-14.4,12-10.9,23-22.8,33-35.6,10.8-13.8,21.8-13.8,32.9,.1,11,13.6,24.9,17.4,42.2,11.3,8.4-2.9,16.9-5.9,25.3-8.7,10.8-3.6,11.6-2.1,2.4,4.5-14.5,10.4-30.8,14.8-48.8,13.6-1.7-.1-3.1,.3-3.9,1.1s-.9,1.7-.3,2.5c.5,.7,1.5,1,2.9,1,24.7,.3,48.6-7,71.5-22,11.3-7.5,17.4-16.7,18.2-27.9-7.4-9.5-6.9-12.3,1.6-8.4,1.4,.7,2.9,1.7,4.6,3.1,8.9,7.4,18.6,11.4,29.1,12,8.1,.5,15.8-2.4,23.2-8.6,6.5-5.5,12.5-11.6,18-18.4,1.1-1.5,3.3-1.8,5-.8,8.7,5.2,18.2,6.4,28.5,3.7,1.3-5,4.4-9,9.5-12,10.6-3,21.5-4.1,32.8-3.2,13.7,1,24.5,1.3,32.4,.9,13.5-.8,27.1-.3,40.6,1.7,2.3,.3,4.6,.1,6.8-.8,13.1-4.9,29.8-6,50-3.3,2.4,.3,4.8,.4,7.2,.2,31.6-1.7,62-2.7,91.2-3.1,6-.1,12.5-1.3,19.4-3.6V.7h-11.1Z"
													style={{ fill: "#c7dcdf" }}
												/>
												<path
													d="M203.2,160.7c-8.1-4.4-14.2-10.7-18.3-18.8-4.4-8.6-10.2-9.8-17.6-3.4-13.6,11.9-30,14.3-49.1,7.1-6.6-2.5-10.7-9.1-10-16.1,2.2-18.5-2.4-23.3-13.8-14.3-11.8,9.3-24.5,6.9-38.2-7.1l51.7-5.1c2.4-.2,4.6,.6,6.1,2.3,5.5,6.1,8.3,15.1,8.4,26.8,0,3.1,2.8,5.4,5.8,5.1,12.4-1.4,23.9-3.8,34.4-7.2,17.3-5.5,30-1.1,38,13.3,1.1,2,3,3.3,5,3.3,12.9,.2,25.5-2,37.6-6.6,1.6-.6,3-.8,4.3-.8,5.9,0,5.8,2.1,.1,6.3-3.8,2.8-15.1,6.9-33.8,12.5-2.7,2.7-6.2,3.7-10.6,2.7h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M875.6,121.6c-6,9.9-15.3,16.2-28,19-8.9,1.9-19.3,3.2-31.3,3.7-12.2,.6-21.8-.9-28.7-4.7-9.3-5.1-15.8-13-19.7-23.7-.9-2.5-2.1-4.3-3.4-5.4-3.9-3.2-6.3-1.5-7.1,5.3h0c24.8,43.4,60.2,53.4,106.2,29.9,4.6-2.4,8.6-5.2,11.9-8.6l.1-15.5h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M875.6,87.4c-10.8-1.8-21.6-2.2-32.5-1.2-17.5,1.7-29,2.5-34.6,2.3-13.2-.3-26.3-.5-39.5-.5-7.5,0-17.4,1.7-29.5,5.1-6.5,1.9-13.2,3.2-20.1,3.8-2.9,.3-9.5,1.3-19.9,3.2-13.3,2.4-26.5-.4-39.3-8.4,16.4,17,34.5,28.3,54.4,33.8,15.7,4.3,30.1,1.1,42.9-9.8h0c.8-6.8,3.1-8.5,7.1-5.3,1.3,1.1,2.5,2.9,3.4,5.4,3.9,10.7,10.4,18.6,19.7,23.7,6.9,3.8,16.5,5.4,28.7,4.7,12-.6,22.3-1.8,31.3-3.7,12.7-2.8,22-9.1,28-19v-34.1h-.1Z"
													style={{ fill: "#c7dcdf" }}
												/>
												<path
													d="M480.6,94.1c-1-2.8-2.6-5.2-4.8-7.2-7.4-9.5-6.9-12.3,1.6-8.4,1.4,.6,2.9,1.6,4.6,3.1,8.8,7.4,18.6,11.4,29.1,12,8.1,.5,15.8-2.4,23.2-8.6,6.5-5.5,12.5-11.7,18-18.4,1.1-1.5,3.3-1.8,5-.8,8.7,5.2,18.2,6.4,28.5,3.7-2.8,9.6-11.2,13.5-25,11.7-2.2-.3-4.4,.6-5.8,2.4-20,25.5-43.3,28.7-69.7,9.4-1.3-.8-2.9-.5-4.7,1.1h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M875.6,46.3c-6.9,2.3-13.4,3.5-19.4,3.6-29.1,.4-59.6,1.4-91.2,3.1-2.4,.1-4.8,.1-7.2-.2-20.2-2.7-36.9-1.6-50,3.3-2.2,.8-4.5,1.1-6.8,.8-13.5-2-27-2.5-40.6-1.7-7.9,.4-18.7,.2-32.4-.9-11.3-.9-22.2,.2-32.8,3.2,7.9,12.7,18,19.7,30.5,21.1,1.9,.2,4.2-.5,6.5-1.8,7.7-4.6,13.6-2.9,17.9,5,2.6,4.6,5.9,8,10.1,9.9v.1c12.8,7.9,26,10.7,39.3,8.4,10.4-1.8,17-2.9,19.9-3.2,6.9-.6,13.6-1.9,20.1-3.8,12.2-3.4,22-5.1,29.5-5.1,13.2,0,26.3,.1,39.5,.5,5.6,.1,17.1-.7,34.6-2.3,10.8-1,21.7-.6,32.5,1.2V46.3h0Z"
													style={{ fill: "#c7dcdf" }}
												/>
												<path
													d="M336.1,0h-40.2c-4.2,2.2-8.3,5-12.3,8.6-1.4,1.2-3.5,1-4.5-.5-2-3-4.1-5.7-6.3-8h-58.6c-7.2,5-12.9,10-17,15.1-8.1,10-17.5,11.1-27.8,3.3-18.1-13.5-30.1-13.2-35.9,1.1-.7,1.8-2.7,2.7-4.6,2.2-27.8-8.8-54.2-9.4-79.2-2.4-13.1,3.7-16.3,13.5-9.6,29.5,21.4-9.3,43.6-12.8,66.8-10.6,16,1.6,28.7,1.9,38.2,.9,37.8-3.8,73.1-3.9,106-.7,51,5.2,98.8,4.6,143.1-1.7-8.8-4.6-25.4-15.3-49.8-32.1-2.8-1.8-5.5-3.4-8.3-4.7Z"
													style={{ fill: "#c7dcdf" }}
												/>
												<path
													d="M597.9,0c-3.1,2.3-6.2,4.9-9.1,7.7-2.5,2.4-6.6,1.9-8.4-1-1.5-2.4-3-4.6-4.5-6.7h-96.2c-6.6,7.7-12.6,17.6-18,29.5h.1c10.8-2,21.5-4.4,32.2-7.1,9.6-2.5,20.4-3.5,32.3-2.8,17.9,1,35.5-.5,52.8-4.5,7.5-1.8,15.4-2.4,23.6-1.9,8.1,.5,16.3,.2,24.3-.7,14.8-1.8,26.6-2.4,35.6-1.9,23.8,1.2,47.9,.4,72.4-2.3-4.2-3-8.5-5.7-12.7-8.2h-124.4v-.1Z"
													style={{ fill: "#c7dcdf" }}
												/>
											</g>
											<g id="mid-clouds-1-4" data-name="mid-clouds-1">
												<path
													d="M664.3,101.8c-46.5,7.3-83.5-7.4-110.9-44.2-5.3-7.1-9.8-6.6-13.4,1.7-9.8,22-27.3,32.2-52.3,30.3-33-2.5-58-17.1-75.3-44,.8-2.8,2.2-5.4,4.4-7.6,1.6,11.1,8.2,19.9,19.9,26.3,23.8,13,48.1,18.3,72.7,15.9,1.4-.2,2.3-.6,2.8-1.2,.5-.8,.4-1.7-.5-2.4-.8-.7-2.2-1-3.9-.7-17.9,2.8-34.4-.3-49.5-9.4-9.6-5.8-8.9-7.3,2.1-4.7,8.6,2.2,17.1,4.3,25.8,6.6,17.6,4.6,31.3-.3,41.3-14.8,10.2-14.8,21.1-15.7,32.8-2.8,10.8,12,22.5,22.9,35.2,32.8,9.1,7,19.3,11,30.5,11.9,17.9,1.4,35.7,.3,53.6-3.1,1.5-.3,2.5-.8,2.9-1.6,.6-1,.6-2.3-.1-3.8,3,2.7,6.6,3.3,10.9,1.9-7.1,6.6-16.7,10.9-29,12.9h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M.1,0V26.9c2.7,.7,5.4,1.4,8,2.3,9.9,3.2,18.8,4.6,26.8,4.1,29.1-2.1,59.5-3.5,91.1-4.5,2.4,0,4.8-.3,7.2-.8,20-4.4,36.7-4.7,50.1-.9,2.3,.7,4.6,.7,6.9,.2,13.3-3.1,26.8-4.8,40.4-5.1,7.9-.2,18.6-1.4,32.2-3.6,11.2-1.8,22.2-1.7,33,.4,5.2,2.6,8.6,6.3,10.2,11.2,10.4,1.8,19.8-.2,28.2-6.1,1.6-1.1,3.8-1,5.1,.4,5.9,6.3,12.3,11.9,19.1,16.8,7.7,5.6,15.6,7.8,23.6,6.6,10.4-1.5,19.9-6.3,28.2-14.4,1.6-1.6,3.1-2.7,4.4-3.4,8.2-4.7,8.9-1.9,2.2,8.2,1.6,11.1,8.2,19.9,19.9,26.3,23.8,13.1,48.1,18.3,72.7,15.9,1.4-.1,2.4-.6,2.8-1.2,.5-.8,.4-1.7-.5-2.4-.8-.7-2.2-1-3.9-.7-17.9,2.8-34.4-.3-49.5-9.4-9.6-5.8-8.9-7.4,2.1-4.7,8.6,2.1,17.1,4.3,25.8,6.6,17.5,4.6,31.3-.3,41.3-14.8,10.2-14.7,21.1-15.7,32.8-2.8,10.8,12,22.5,22.9,35.2,32.8,9.1,7,19.3,11,30.5,11.9,17.9,1.4,35.7,.3,53.6-3.1,1.4-.3,2.4-.8,2.9-1.6h0c.6-1,.6-2.3-.1-3.8-19-4-30.5-7.2-34.5-9.6-6-3.7-6.1-5.7-.3-6.2,1.3-.1,2.7,0,4.3,.5,12.4,3.7,25,4.8,37.9,3.5,2-.2,3.8-1.6,4.8-3.7,7.2-15.1,19.5-20.6,37.1-16.5,10.6,2.5,22.2,3.9,34.7,4.3,3,.1,5.7-2.5,5.5-5.5-.6-11.7,1.7-20.9,6.7-27.5,1.4-1.7,3.6-2.8,5.9-2.7l51.9,.7c2.3-9,6.1-17,11.2-24H.1V0Z"
													style={{ fill: "#89a6bd" }}
												/>
												<path
													d="M682.4,86.8c-19-4-30.5-7.2-34.5-9.6-6-3.7-6.1-5.7-.3-6.2,1.3-.1,2.7,0,4.3,.5,12.4,3.6,25,4.8,37.9,3.5,2-.2,3.8-1.6,4.8-3.7,7.2-15.1,19.5-20.6,37.1-16.5,10.6,2.5,22.2,3.9,34.7,4.3,3,0,5.7-2.5,5.5-5.5-.6-11.7,1.7-20.9,6.7-27.5,1.4-1.7,3.6-2.7,5.9-2.7l51.9,.7c-12.7,15-25.3,18.4-37.6,10.2-11.9-8-16.2-2.9-12.9,15.4,1.2,6.9-2.5,13.8-8.9,16.8-18.6,8.8-35,7.7-49.4-3-7.8-5.8-13.5-4.1-17.3,4.9-3.6,8.4-9.3,15.2-17.1,20.3-4.3,1.4-7.9,.7-10.8-1.9h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M130.3,85.8c-1.3,1.2-2.3,3.1-3.1,5.7-3.2,11-9.2,19.5-18.2,25.3-6.6,4.4-16.1,6.7-28.3,7.1-12,.4-22.4,.1-31.4-1.1-17.9-2.3-29.7-12.1-35.5-29.3-.7-2.1-2-3.9-3.8-5.4-8.8-7-10.7-15.9-5.4-26.8-1.9-1.9-3.4-2.5-4.6-1.7v30.5c.3,.1,.5,.2,.8,.3,2.4,.9,4.3,2.3,5.3,4,2.1,3.5,3.3,7.3,3.6,11.5,4.7,10.9,12.6,18.7,23.9,23.4h0c47.4,19.5,82.1,6.6,104.1-38.8-1.2-6.7-3.6-8.2-7.4-4.7Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M130.3,85.9c-1.3,1.2-2.3,3.1-3.1,5.7-3.2,11-9.2,19.5-18.2,25.3-6.6,4.4-16.1,6.7-28.3,7.1-12,.4-22.4,.1-31.4-1.1-17.9-2.3-29.7-12.1-35.5-29.3-.7-2-2-3.9-3.8-5.4-8.8-7-10.7-15.9-5.4-26.8l5.2,9.5c1,1.7,3.2,2.6,5.3,1.9,11.6-3.1,23.3-4.7,35.1-4.6,17.6,.2,29.1,0,34.7-.6,13.1-1.4,26.2-2.7,39.4-3.8,7.5-.6,17.4,.2,29.8,2.6,6.6,1.3,13.4,2,20.3,2.1,2.9,.1,9.6,.6,20.1,1.5,13.4,1.2,26.4-2.6,38.7-11.6-15.3,18.3-32.6,31.1-52.2,38.3-15.4,5.7-29.9,3.7-43.4-6.2-1.2-6.7-3.6-8.2-7.3-4.6h0Z"
													style={{ fill: "#bed1d7" }}
												/>
												<path
													d="M407.7,45c-25.2,21.5-48.6,20.2-70.1-3.5-1.5-1.6-3.7-2.3-5.9-1.9-13.7,2.9-22.3-.2-25.7-9.6,10.4,1.8,19.8-.2,28.2-6.1,1.6-1.2,3.8-1,5.1,.4,5.9,6.3,12.3,11.9,19.1,16.8,7.7,5.6,15.6,7.8,23.6,6.6,10.5-1.5,19.9-6.3,28.2-14.4,1.6-1.6,3.1-2.7,4.4-3.4,8.2-4.7,8.9-1.9,2.2,8.2-2.1,2.2-3.6,4.8-4.4,7.6-1.9-1.5-3.5-1.7-4.7-.7h0Z"
													style={{ fill: "#f8fcfd" }}
												/>
												<path
													d="M262.8,18.5c-13.6,2.2-24.4,3.4-32.2,3.6-13.5,.3-27,2-40.4,5.1-2.3,.6-4.6,.5-6.9-.2-13.4-3.8-30.2-3.5-50.1,.9-2.4,.5-4.7,.7-7.2,.8-31.6,1-62,2.5-91.1,4.5-8,.5-17-.8-26.8-4.1-2.7-.9-5.3-1.6-8-2.3V59.6c1.2-.8,2.7-.2,4.6,1.7l5.2,9.5c1,1.8,3.2,2.6,5.3,1.9,11.6-3.2,23.3-4.7,35.1-4.6,17.6,.2,29.1,0,34.7-.6,13.1-1.4,26.2-2.7,39.4-3.8,7.5-.6,17.4,.2,29.8,2.6,6.6,1.3,13.4,2,20.3,2.1,2.9,.1,9.6,.5,20.1,1.5v.2c13.4,1.2,26.4-2.7,38.7-11.6,4-2.3,7.1-5.9,9.4-10.7,3.7-8.3,9.6-10.5,17.5-6.5,2.3,1.1,4.7,1.5,6.6,1.2,12.3-2.4,21.9-10.3,29-23.6-10.9-2.1-21.8-2.2-33-.4Z"
													style={{ fill: "#9fb7c4" }}
												/>
											</g>
										</g>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
