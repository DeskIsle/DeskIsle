import type React from "react";
import { useEffect, useState } from "react";

import "./index.css";
import { type City, CityList } from "@/atoms/city";
import type { BaseComponentMeta } from "@/atoms/components";
import { BaseContextMenu } from "@/components/common/context-menu";
import { SelectWithInput } from "@/components/common/selector";
import { ContextMenu } from "@/components/ui/context-menu";
import { ContextMenuTrigger } from "@radix-ui/react-context-menu";
import { type PrimitiveAtom, atom, useAtom } from "jotai";
import { ClimaSvg } from "./clima-svg";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
async function getClimaData(locationID: string | undefined): Promise<any> {
	const res = await fetch(
		`https://devapi.qweather.com/v7/weather/now?location=${locationID}&key=4a8cda440c914fe4820b02ddfefbd336`,
	);
	return res.json();
}

type Weather = {
	text: string;
	temp: number;
	icon: number;
	lastUpdateTime: string;
	cssClass?: string[];
};

const selectedCityAtom = atom<City | null>(null);

export interface ClimaWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
	componentAtom: PrimitiveAtom<BaseComponentMeta<"ClimaWidget">>;
}

export function ClimaWidget({ componentAtom }: ClimaWidgetProps) {
	const [selectedCity] = useAtom(selectedCityAtom);
	const [weather, setWeather] = useState<Weather | null>(null);
	const [message, setMessage] = useState<string | null>(null);
	useEffect(() => {
		const intervel = setInterval(
			() => {
				handleRequest();
				console.log("refresh climaWidget data");
			},
			30 * 60 * 1000,
		);
		return () => clearInterval(intervel);
	}, []);

	async function handleRequest() {
		const data = await getClimaData(selectedCity?.Location_ID);
		// if (!data || data.code === "402" || data.code === "400") return;
		if (!data) {
			setMessage("获取天气数据失败");
			return;
		}
		if (data.code === "402") {
			setMessage("请求超过次数限制");
			return;
		}
		if (data.code === "400") {
			setMessage("请求错误");
			return;
		}
		const tempValue = data.now.temp;
		const icon = Number.parseInt(data.now.icon);
		const curTime = new Date(Date.parse(data.updateTime));

		const newWeatherClass: string[] = [];

		if (icon >= 101 && icon <= 104) {
			newWeatherClass.push("clouds");
		} else if (icon >= 300 && icon <= 399) {
			newWeatherClass.push("blackclouds");
			newWeatherClass.push("rain");
			if (icon >= 302 && icon <= 304) {
				newWeatherClass.push("storm");
				newWeatherClass.push("lighting");
			} else if (icon === 306 || (icon >= 313 && icon <= 315) || icon === 350) {
				newWeatherClass.push("medium-rain");
			} else if (
				(icon >= 307 && icon <= 308) ||
				(icon >= 310 && icon <= 312) ||
				(icon >= 316 && icon <= 318) ||
				icon === 351
			) {
				newWeatherClass.push("medium-rain");
				newWeatherClass.push("heavy-rain");
			}
		} else if (icon >= 400 && icon <= 499) {
			newWeatherClass.push("snow");
		}
		// update by time
		if (curTime.getHours() >= 18 && curTime.getHours() <= 20) {
			newWeatherClass.push("sunset");
		} else if (curTime.getHours() >= 21 || curTime.getHours() <= 5) {
			newWeatherClass.push("moon");
		}

		setWeather({
			text: data.now.text,
			temp: tempValue,
			icon: icon,
			lastUpdateTime: curTime.toLocaleTimeString(),
			cssClass: newWeatherClass,
		});
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (selectedCity?.Location_ID) {
			handleRequest();
		}
	}, [selectedCity]);

	return (
		<ContextMenu modal={false}>
			<ContextMenuTrigger className="w-full h-full">
				<div className="w-full h-full relative">
					<ClimaSvg weatherClass={weather?.cssClass ?? []} />
					<div className="bottom-panel px-8 pt-4 pb-4 text-white">
						<div className="h-full flex flex-col justify-between items-center">
							<div className="text-sm flex flex-col justify-center items-center gap-2">
								<ClimaWidgetEditor />
								{weather && (
									<div className="flex flex-row gap-4">
										<div>温度: {weather.temp}°C</div>
										<div>天气: {weather.text}</div>
									</div>
								)}
								{message && <span className="text-gray-500 text-[0.7rem] align-middle">{message}</span>}
							</div>
							{weather && (
								<div className="flex flex-row gap-1 justify-center items-center w-full mb-2">
									<span className="text-gray-500 text-[0.7rem] align-middle">
										最后更新时间: {weather.lastUpdateTime}
									</span>
								</div>
							)}
						</div>
					</div>
				</div>
			</ContextMenuTrigger>
			<BaseContextMenu componentAtom={componentAtom} />
		</ContextMenu>
	);
}

const ClimaWidgetEditor = () => {
	const [selectedCity, setSelectedCity] = useAtom(selectedCityAtom);
	return (
		<div className="text-black h-6 w-[10rem]">
			<SelectWithInput
				selected={selectedCity}
				setSelected={setSelectedCity}
				inputKey="CityZH"
				options={CityList}
				placeholder="输入城市"
				filter={(option, value) =>
					option ? option.CityZH.includes(value) || option.CityEN.toLowerCase().includes(value) : false
				}
			/>
		</div>
	);
};
