import { Button } from "@/components/ui/button";
import { useModal } from "@/components/ui/use-modal";
import { useRef } from "react";

import { componentsAtoms } from "@/atoms/components";
import { layoutConfigAtom } from "@/atoms/layout";
import { AppLayout } from "@/components/common/app-layout";
import { SettingWidget } from "@/components/widgets/setting";
import { StoreWidget } from "@/components/widgets/store";
import { isElectron } from "@/lib/env";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";

export function Desk() {
	const ref = useRef(null);
	const [, setComponents] = useAtom(componentsAtoms);
	const [, setLayoutConfig] = useAtom(layoutConfigAtom);

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
			type: "drawer",
			body: <SettingWidget />,
		});
	};

	window.api?.onOpenWidgetStore(() => {
		showStore();
	});
	window.api?.onOpenSettings(() => {
		showSettings();
	});

	const clearStorage = () => {
		setComponents(RESET);
		setLayoutConfig(RESET);
	};

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
					<Button variant="outline" className="mt-2 mr-2" onClick={clearStorage}>
						重置状态管理
					</Button>
				</>
			)}
		</div>
	);
}
