import { Button } from "@/components/ui/button";
import { useModal } from "@/components/ui/use-modal";
import { useRef } from "react";

import { SettingWidget } from "@/components/widgets/setting";
import { StoreWidget } from "@/components/widgets/store";
import { isElectron } from "@/lib/env";
import { AppLayout } from "@/pages/app-layout";

export function Desk() {
	const ref = useRef(null);

	const { confirm } = useModal();

	const showStore = () => {
		confirm({
			title: "组件商店",
			body: <StoreWidget />,
		});
	};

	const showSettings = () => {
		confirm({
			title: "设置",
			body: <SettingWidget />,
		});
	};

	window.api?.onOpenWidgetStore(() => {
		showStore();
	});
	window.api?.onOpenSettings(() => {
		showSettings();
	});
	return (
		<div ref={ref} className="w-screen p-4 overflow-hidden bg-white">
			<AppLayout parentRef={ref} />

			{!isElectron() && (
				<>
					<Button variant="outline" className="mt-2 mr-2" onClick={showStore}>
						组件商店
					</Button>
					<Button variant="outline" className="mt-2 mr-2" onClick={showSettings}>
						设置
					</Button>
				</>
			)}
		</div>
	);
}
