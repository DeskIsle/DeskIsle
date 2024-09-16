import Modal from "@/components/common/Modal";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import SettingWidget from "@/components/widgets/SettingWidget";
import StoreWidget from "@/components/widgets/StoreWidget";
import { isElectron } from "@/lib/utils";
import { AppLayout } from "@/pages/applayout";
import { useRef, useState } from "react";
import { ModalProvider, useModal } from "react-modal-hook";

export function Desk() {
	const ref = useRef(null)
	const [showStoreWidget, hideStoreWidget] = useModal(() => (
		<Modal header='组件商店' showModal={true} hideModal={hideStoreWidget}>
			<StoreWidget />
		</Modal>
	))
	const [showSettingsWidget, hideSettingsWidget] = useModal(() => (
		<Modal header='设置' showModal={true} hideModal={hideSettingsWidget}>
			<SettingWidget />
		</Modal>
	))
	window.api?.onOpenWidgetStore((value: boolean) => {
		if (value) {
			showStoreWidget();
		} else {
			hideStoreWidget();
		}
	});
	window.api?.onOpenSettings((value: boolean) => {
		if (value) {
			showSettingsWidget();
		} else {
			hideSettingsWidget();
		}
	});
	return (
		<div ref={ref} className="w-screen h-screen p-4 overflow-hidden bg-white">
			<AppLayout parentRef={ref} />
			<Toaster />
			{!isElectron &&
				<>
					<Button variant='outline' className="mt-2 mr-2" onClick={showStoreWidget}>组件商店</Button>
					<Button variant='outline' className="mt-2 mr-2" onClick={showSettingsWidget}>设置</Button>
				</>
			}
		</div>
	);
}
