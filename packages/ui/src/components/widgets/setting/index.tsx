import { useLayoutConfig } from "@/atoms/layout";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";

export function SettingWidget() {
	const { layoutConfig, setLayoutConfig } = useLayoutConfig();
	function handleWheel(event: React.WheelEvent<HTMLInputElement>) {
		event.preventDefault();
		const input = event.target as HTMLInputElement;
		const delta = event.deltaY || event.detail;
		if (delta > 0) {
			input.stepDown();
		} else {
			input.stepUp();
		}

		setLayoutConfig((config) => ({
			...config,
			[input.id]: Number(input.value),
		}));
	}
	return (
		<div className="p-4 flex flex-col items-start gap-1.5">
			<Label htmlFor="unit">单位长度</Label>
			<Input
				id="unit"
				type="number"
				placeholder="unit"
				min={0}
				value={layoutConfig.unit}
				onWheel={handleWheel}
				onChange={(v) => setLayoutConfig({ ...layoutConfig, unit: Number(v.target.value) })}
			/>
			<Label htmlFor="gap">间隔</Label>
			<Input
				id="gap"
				type="number"
				placeholder="gap"
				min={0}
				value={layoutConfig.gap}
				onWheel={handleWheel}
				onChange={(v) => setLayoutConfig({ ...layoutConfig, gap: Number(v.target.value) })}
			/>
			<Label htmlFor="compactType">紧凑类型</Label>
			<Select
				defaultValue={layoutConfig.compactType}
				onValueChange={(value) => setLayoutConfig({ ...layoutConfig, compactType: value })}
			>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="vertical">垂直</SelectItem>
						<SelectItem value="horizontal">水平</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			<Label htmlFor="preventCollision">禁止重叠交换</Label>
			<Switch
				checked={layoutConfig.preventCollision}
				onCheckedChange={(checked) => setLayoutConfig({ ...layoutConfig, preventCollision: checked })}
			/>
		</div>
	);
}
