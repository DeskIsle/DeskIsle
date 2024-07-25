import { CaretSortIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import Card from "./Card";

interface SelectWithInputProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  selected: T
  setSelected: (value: T) => void
  options: T[]
  inputKey: string
  maxShowCount?: number
  filter: (option: T, value: string) => boolean
}

export default function SelectWithInput<T>(props: SelectWithInputProps<T>) {
  const { placeholder, ...others } = props
  const [value, setValue] = useState('')
  const [showSearchList, setShowSearchList] = useState(false)
  return (
    <div className="flex flex-col gap-1 w-90">
      <Input value={value} setValue={setValue} placeholder={placeholder} setShowSearchList={setShowSearchList} />
      {showSearchList && <SearchResultList inputValue={value} setInputValue={setValue} setShowSearchList={setShowSearchList} {...others} />}
    </div>
  )
}

interface InputProps {
  value: string
  setValue: (value: string) => void
  setShowSearchList: (value: boolean) => void
  placeholder?: string
}

function Input(props: InputProps) {
  const { value, setValue, setShowSearchList, placeholder } = props
  return (
    <div className="flex items-center w-full gap-2 py-2">
      <input
        className="ring-1 ring-gray-300 focus:ring-1 focus:ring-primary outline-none rounded-md p-2 pr-8"
        title="city"
        type="text"
        value={value}
        onFocus={() => setShowSearchList(true)}
        onBlur={() => setTimeout(() => setShowSearchList(false), 200)}
        onChange={(e) => {
          setValue(e.target.value)
          setShowSearchList(true)
        }}
        placeholder={placeholder}
      />
      <CaretSortIcon className="w-4 h-4 -ml-8" />
    </div>
  )
}

interface SearchResultListProps<T> extends Omit<SelectWithInputProps<T>, 'placeholder'> {
  inputValue: string
  setInputValue: (value: string) => void
  setShowSearchList: (value: boolean) => void
}

function SearchResultList<T>(props: SearchResultListProps<T>) {
  const { setSelected, setInputValue, setShowSearchList, options, filter, inputKey, inputValue, maxShowCount = 5 } = props
  let filterCount = 0
  const filterOptions = options.filter((city) => {
    if (filterCount > maxShowCount) return false
    const res = filter(city, inputValue)
    if (res) filterCount++
    return res
  })
  if (filterOptions.length === 0) {
    return (
      <Card className="flex flex-col w-full h-auto p-1">
        <div className="w-full p-2">No Result</div>
      </Card>
    )
  }
  return (
    <Card className="flex flex-col w-full h-auto p-1">
      {filterOptions.map((item, index) => (
        <SearchResultItem
          key={index}
          item={item}
          setSelected={setSelected}
          setInputValue={setInputValue}
          setShowSearchList={setShowSearchList}
          inputKey={inputKey} />
      ))}
    </Card>
  )
}

interface SearchResultItemProps {
  item: any
  setSelected: (value: any) => void
  inputKey: string
  setInputValue: (value: string) => void
  setShowSearchList: (value: boolean) => void
}

function SearchResultItem(props: SearchResultItemProps) {
  const { item, setSelected, inputKey, setInputValue, setShowSearchList } = props
  return (
    <div
      onClick={() => {
        setInputValue(item[inputKey])
        setSelected(item)
        setShowSearchList(false)
      }}
      className="hover:bg-[#F4F4F5] rounded-lg w-full px-2 py-1"
    >
      {item[inputKey]}
    </div>
  )
}