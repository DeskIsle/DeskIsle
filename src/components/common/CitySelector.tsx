import { CaretSortIcon } from "@radix-ui/react-icons";
import React from "react";
import Card from "./Card";
import { atom, useAtom } from "jotai";
import { CityList, City } from '@/atoms/city'

export const selectedCityAtom = atom<City | null>(null)
const inputValueAtom = atom('')
const showSearchListAtom = atom(false)

export default function CitySelector() {
  const [showSearchList] = useAtom(showSearchListAtom)
  return (
    <div className="flex flex-col gap-1 w-90">
      <Input />
      {showSearchList && <SearchResultList />}
    </div>
  )
}


function Input() {
  const [value, setValue] = useAtom(inputValueAtom)
  const [, setShowSearchList] = useAtom(showSearchListAtom)
  return (
    <div className="flex items-center w-full">
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
        placeholder="Select City"
      />
      <CaretSortIcon className="w-4 h-4 -ml-6" />
    </div>
  )
}

function SearchResultList() {
  const [value] = useAtom(inputValueAtom)
  const [selectedCity] = useAtom(selectedCityAtom)
  let filterCitysCount = 0
  const filterCitys = CityList.filter((city) => {
    if (filterCitysCount > 5) return false
    if (city.CityEN.toLowerCase().includes(value)) {
      filterCitysCount++
      return true
    }
    if (city.CityZH.includes(value)) {
      filterCitysCount++
      return true
    }
    return false
  })
  if (filterCitys.length === 0) {
    return (
      <Card className="flex flex-col w-full h-auto p-1">
        <div className="w-full p-2">No Result</div>
      </Card>
    )
  }
  return (
    <Card className="flex flex-col w-full h-auto p-1">
      {filterCitys.map((item) => (
        <SearchResultItem key={item.Location_ID} item={item} />
      ))}
    </Card>
  )
}

function SearchResultItem({ item }: { item: City }) {
  const [, setInputValue] = useAtom(inputValueAtom)
  const [, setSelectedCity] = useAtom(selectedCityAtom)
  const [, setShowSearchList] = useAtom(showSearchListAtom)
  return (
    <div
      onClick={() => {
        setInputValue(item.CityZH)
        setSelectedCity(item)
        setShowSearchList(false)
      }}
      className="hover:bg-[#F4F4F5] rounded-lg w-full px-2 py-1"
    >
      {item.CityZH}
    </div>
  )
}