import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import MotionNumber from "motion-number";
import { useEffect, useState } from "react";

const TimeNumber = ({ value }: { value: string }) => {
	return (
		<MotionNumber
			value={value}
			format={{ minimumIntegerDigits: 2 }}
			transition={{
				layout: {
					duration: 0,
				},
			}}
		/>
	);
};

export const TimeWidget = () => {
	const [refresh, setRefresh] = useState<number>(0);
	const [datetime, setDatetime] = useState({
		hour: "",
		minute: "",
		second: "",
		month: "",
		day: "",
		week: "",
	});
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setRefresh(refresh + 1);
			const now = new Date();
			setDatetime({
				hour: now.getHours().toString().padStart(2, "0"),
				minute: now.getMinutes().toString().padStart(2, "0"),
				second: now.getSeconds().toString().padStart(2, "0"),
				month: format(now, "MM", { locale: zhCN }),
				day: format(now, "dd", { locale: zhCN }),
				week: format(now, "EEEE", { locale: zhCN }),
			});
		}, 1000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [refresh]);
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<div className="tabular-nums	text-5xl flex">
				<TimeNumber value={datetime.hour} />
				<div>:</div>
				<TimeNumber value={datetime.minute} />
				<div>:</div>
				<TimeNumber value={datetime.second} />
			</div>
			<div className="flex flex-row gap-2">
				<div className="text-sm text-gray-500">
					{datetime.month}月{datetime.day}日
				</div>
				<div className="text-sm text-gray-500">{datetime.week}</div>
			</div>
		</div>
	);
};
