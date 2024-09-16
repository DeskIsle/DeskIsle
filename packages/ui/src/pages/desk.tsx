import Modal from "@/components/common/Modal";
import { Toaster } from "@/components/ui/toaster";
import SettingWidget from "@/components/widgets/SettingWidget";
import StoreWidget from "@/components/widgets/StoreWidget";
import { AppLayout } from "@/pages/applayout";
import { useRef, useState } from "react";
import { ModalProvider } from "react-modal-hook";

export function Desk() {
	const [storeWidgetVisible, setStoreWidgetVisible] = useState(false);
	const [settingsVisible, setSettingsVisible] = useState(false);
	const ref = useRef(null)
	window.api?.onOpenWidgetStore((value: boolean) => {
		setStoreWidgetVisible(value);
	});
	window.api?.onOpenSettings((value: boolean) => {
		setSettingsVisible(value);
	});
	return (
		<div ref={ref} className="w-screen h-screen p-4 overflow-hidden bg-white">
			<ModalProvider>
				<AppLayout parentRef={ref} />
			</ModalProvider>
			<Toaster />
			<Modal
				header="组件商店"
				showModal={storeWidgetVisible}
				hideModal={() => setStoreWidgetVisible(false)}
			>
				<StoreWidget />
			</Modal>
			<Modal
				header="设置"
				showModal={settingsVisible}
				hideModal={() => setSettingsVisible(false)}
			>
				<SettingWidget />
			</Modal>
		</div>
	);
}
