import type { BaseComponentMeta } from "@/atoms/components";
import { iconsAtom } from "@/atoms/icons";

import { IconShop } from "@/components/common/icon-shop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DataUrlIcon } from "@/icons/data-url";

import { DotsHorizontalIcon, ExternalLinkIcon, StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import type { MouseEventHandler } from "react";
import { HexAlphaColorPicker } from "react-colorful";

export interface LinkWidgetProps {
	link: string;
	icon: string;
	bgColor: string;
}

export function LinkWidget({ link, icon, bgColor }: LinkWidgetProps) {
	const openBrowser: MouseEventHandler<HTMLDivElement> = () => {
		window.open(link);
	};
	return (
		<>
			<div
				onClick={openBrowser}
				style={{
					backgroundColor: bgColor,
				}}
				className={
					"w-full h-full rounded-lg text-5xl select-none flex justify-center items-center hover:cursor-pointer"
				}
			>
				<DataUrlIcon className="w-3/4 h-3/4" src={icon} />
			</div>
		</>
	);
}

interface LinkWidgetEditorProps {
	component: BaseComponentMeta<"LinkWidget">;
	setComponent: (component: BaseComponentMeta<"LinkWidget">) => void;
}

export const LinkWidgetEditor = ({ component, setComponent }: LinkWidgetEditorProps) => {
	const [icons, setIcons] = useAtom(iconsAtom);
	const isElectron = window.api !== undefined;
	function updateIcon(icon: string) {
		setComponent({ ...component, elementProps: { ...component.elementProps, icon } });
	}
	async function openFileDialog() {
		const path = await window.api?.openFile();
		if (path) {
			setComponent({ ...component, elementProps: { ...component.elementProps, link: path } });
		}
	}
	async function openIconDialog() {
		const path = await window.api?.openFile();
		if (path) {
			updateIcon(path);
		}
	}
	function collectToIconStore() {
		if (icons.includes(component.elementProps.icon)) {
			setIcons(icons.filter((i) => i !== component.elementProps.icon));
		} else {
			setIcons([...icons, component.elementProps.icon]);
		}
	}

	return (
		<div className="grid grid-cols-5 items-center gap-2">
			<Label className="col-span-1" htmlFor="link">
				路径
			</Label>
			<div className="col-span-4 grid grid-cols-4 gap-2">
				<Input
					className="col-span-3"
					id="link"
					value={component.elementProps.link}
					onChange={(v) =>
						setComponent({
							...component,
							elementProps: { ...component.elementProps, link: v.target.value },
						})
					}
				/>
				{isElectron && (
					<Button onClick={openFileDialog} variant="outline" size="icon">
						<DotsHorizontalIcon />
					</Button>
				)}
			</div>
			<Label className="col-span-1" htmlFor="icon">
				图标
			</Label>
			<Tabs className="col-span-4" defaultValue="icon-shop">
				<TabsList>
					<TabsTrigger value="icon-shop">图标商店</TabsTrigger>
					<TabsTrigger className="flex gap-1" value="icon-url">
						<span>图标URL</span>
						<ExternalLinkIcon onClick={() => window.open("https://icones.js.org/")} />
					</TabsTrigger>
				</TabsList>
				<TabsContent value="icon-shop">
					<IconShop onSelect={(icon: string) => updateIcon(icon)} />
				</TabsContent>
				<TabsContent value="icon-url">
					<div className="grid grid-cols-4 gap-2">
						<Input
							className="col-span-3"
							id="icon"
							value={component.elementProps.icon}
							onChange={(v) => updateIcon(v.target.value)}
						/>
						<div className="flex flex-row gap-1">
							{isElectron && (
								<Button onClick={openIconDialog} variant="outline" size="icon">
									<DotsHorizontalIcon />
								</Button>
							)}
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										<Button onClick={collectToIconStore} variant="outline" size="icon">
											{icons.includes(component.elementProps.icon) ? <StarFilledIcon /> : <StarIcon />}
										</Button>
									</TooltipTrigger>
									<TooltipContent>
										{icons.includes(component.elementProps.icon) ? <p>取消收藏</p> : <p>收藏到图标商店</p>}
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</div>
					</div>
				</TabsContent>
			</Tabs>

			<Label className="row-span-2" htmlFor="bgColor">
				背景色
			</Label>
			<HexAlphaColorPicker
				className="col-span-4 mt-4"
				id="bgColor"
				color={component.elementProps.bgColor}
				onChange={(c) =>
					setComponent({
						...component,
						elementProps: { ...component.elementProps, bgColor: c },
					})
				}
			/>
			<Input
				className="col-span-2"
				value={component.elementProps.bgColor}
				onChange={(c) =>
					setComponent({
						...component,
						elementProps: { ...component.elementProps, bgColor: c.target.value },
					})
				}
			/>
		</div>
	);
};
