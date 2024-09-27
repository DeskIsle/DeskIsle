import { CaretSortIcon } from "@radix-ui/react-icons";
import type React from "react";
import { useState } from "react";
import { DraggableCard } from "./card";

interface SelectWithInputProps<T> extends React.HTMLAttributes<HTMLDivElement> {
	placeholder?: string;
	selected: T;
	setSelected: (value: T) => void;
	options: T[];
	inputKey: string;
	maxShowCount?: number;
	filter: (option: T, value: string) => boolean;
}

export function SelectWithInput<T>(props: SelectWithInputProps<T>) {
	const { placeholder, ...others } = props;
	const [value, setValue] = useState("");
	const [showSearchList, setShowSearchList] = useState(false);
	return (
		<div className="relative w-full h-full">
			<Input value={value} setValue={setValue} placeholder={placeholder} setShowSearchList={setShowSearchList} />
			{showSearchList && (
				<SearchResultList
					inputValue={value}
					setInputValue={setValue}
					setShowSearchList={setShowSearchList}
					{...others}
				/>
			)}
		</div>
	);
}

interface InputProps {
	value: string;
	setValue: (value: string) => void;
	setShowSearchList: (value: boolean) => void;
	placeholder?: string;
}

function Input(props: InputProps) {
	const { value, setValue, setShowSearchList, placeholder } = props;
	return (
		<div className="flex items-center w-full h-full gap-2">
			<input
				className="ring-1 h-full w-full placeholder-slate-400 text-white ring-slate-700 bg-[#383d48] focus:ring-1 focus:ring-primary outline-none rounded-md p-2 pr-6"
				type="text"
				value={value}
				onFocus={() => setShowSearchList(true)}
				onBlur={() => setTimeout(() => setShowSearchList(false), 100)}
				onChange={(e) => {
					setValue(e.target.value);
					setShowSearchList(true);
				}}
				placeholder={placeholder}
			/>
			<CaretSortIcon className="w-4 h-4 -ml-8" />
		</div>
	);
}

interface SearchResultListProps<T> extends Omit<SelectWithInputProps<T>, "placeholder"> {
	inputValue: string;
	setInputValue: (value: string) => void;
	setShowSearchList: (value: boolean) => void;
}

function SearchResultList<T>(props: SearchResultListProps<T>) {
	const {
		setSelected,
		setInputValue,
		setShowSearchList,
		options,
		filter,
		inputKey,
		inputValue,
		maxShowCount = 5,
	} = props;
	let filterCount = 0;
	const filterOptions = options.filter((city) => {
		if (filterCount > maxShowCount) {
			return false;
		}
		const res = filter(city, inputValue);
		if (res) {
			filterCount++;
		}
		return res;
	});
	if (filterOptions.length === 0) {
		return (
			<DraggableCard className="absolute top-1.2 flex flex-col w-full h-auto p-1">
				<div className="w-full p-2">No Result</div>
			</DraggableCard>
		);
	}
	return (
		<DraggableCard className="absolute top-1.2 flex flex-col w-full h-auto p-1">
			{filterOptions.map((item, index) => (
				<SearchResultItem
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					item={item}
					setSelected={setSelected}
					setInputValue={setInputValue}
					setShowSearchList={setShowSearchList}
					inputKey={inputKey}
				/>
			))}
		</DraggableCard>
	);
}

interface SearchResultItemProps<T> {
	item: T;
	setSelected: (value: T) => void;
	inputKey: string;
	setInputValue: (value: string) => void;
	setShowSearchList: (value: boolean) => void;
}

function SearchResultItem<T>(props: SearchResultItemProps<T>) {
	const { item, setSelected, inputKey, setInputValue, setShowSearchList } = props;
	return (
		<div
			onMouseDown={() => {
				setInputValue(item[inputKey]);
				setSelected(item);
				setShowSearchList(false);
			}}
			className="hover:bg-[#F4F4F5] rounded-lg w-full px-2 py-1"
		>
			{item[inputKey]}
		</div>
	);
}
