import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { useEffect, useState } from "react";

export const TimeWidget = () => {
	const [refresh, setRefresh] = useState<number>(0);
	const [timer, setTimer] = useState<string>("");
	const [date, setDate] = useState<string>("");
	const [week, setWeek] = useState<string>("");

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setRefresh((r) => r + 1);
			const now = new Date();
			setTimer(format(now, "HH:mm"));
			setDate(format(now, "MM月dd日", { locale: zhCN }));
			setWeek(format(now, "EEEE", { locale: zhCN }));
		}, 1000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [refresh]);
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<div className="text-5xl font-bold font-mono">{timer}</div>
			<div className="flex flex-row gap-2">
				<div className="text-sm text-gray-500">{date}</div>
				<div className="text-sm text-gray-500">{week}</div>
			</div>
		</div>
	);
};
