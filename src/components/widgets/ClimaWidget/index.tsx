import React, { useState, useEffect } from "react";

import './index.css'
import { Button } from "@/components/ui/button";
import ClimaSvg from "./ClimaSvg";
import Modal from "@/components/common/Modal";
import { atom, useAtom } from "jotai";
import { City, CityList } from "@/atoms/city";
import SelectWithInput from "@/components/common/SelectWithInput";

async function getClimaData(locationID: string | undefined): Promise<any> {
  const res = await fetch(`https://devapi.qweather.com/v7/weather/now?location=${locationID}&key=4a8cda440c914fe4820b02ddfefbd336`)
  return res.json()
}

type Weather = {
  text: string
  temp: number
  icon: number
  lastUpdateTime: string
  cssClass?: string[]
}

const selectedCityAtom = atom<City | null>(null)

export default function ClimaWidget() {
  const [selectedCity, setSelectedCity] = useAtom(selectedCityAtom)
  const [modalVisible, setModalVisible] = useState(false)
  const [weather, setWeather] = useState<Weather>({
    text: '',
    temp: 0,
    icon: 0,
    lastUpdateTime: '',
  })
  setInterval(() => {
    handleRequest()
    console.log('refresh climaWidget data')
  }, 10 * 60 * 1000)
  async function handleRequest() {
    const data = await getClimaData(selectedCity?.Location_ID)
    if (!data || data.code === '402' || data.code === '400') return
    const tempValue = data.now.temp;
    const icon = parseInt(data.now.icon);
    const curTime = new Date(Date.parse(data.updateTime));

    const newWeatherClass = []

    if (icon >= 101 && icon <= 104) {
      newWeatherClass.push('clouds')
    } else if (icon >= 300 && icon <= 399) {
      newWeatherClass.push('blackclouds')
      newWeatherClass.push('rain')
      if (icon >= 302 && icon <= 304) {
        newWeatherClass.push('storm')
        newWeatherClass.push('lighting')
      } else if (icon === 306 || (icon >= 313 && icon <= 315) || icon === 350) {
        newWeatherClass.push('medium-rain')
      } else if ((icon >= 307 && icon <= 308) || (icon >= 310 && icon <= 312) || (icon >= 316 && icon <= 318) || icon === 351) {
        newWeatherClass.push('medium-rain')
        newWeatherClass.push('heavy-rain')
      }
    } else if (icon >= 400 && icon <= 499) {
      newWeatherClass.push('snow')
    }
    // update by time
    if (curTime.getHours() >= 18 && curTime.getHours() <= 20) {
      newWeatherClass.push('sunset')
    } else if (curTime.getHours() >= 21 || curTime.getHours() <= 5) {
      newWeatherClass.push('moon')
    }

    setWeather({
      text: data.now.text,
      temp: tempValue,
      icon: icon,
      lastUpdateTime: curTime.toLocaleTimeString(),
      cssClass: newWeatherClass
    })
  }

  useEffect(() => {
    handleRequest()
  }, [selectedCity])

  function openClimaModal() {
    setModalVisible(true)
  }

  return (
    <div className="w-full h-full relative">
      <ClimaSvg weatherClass={weather?.cssClass ?? []} />
      <div
        className="bottom-panel px-8 py-2 text-white"
      >
        {weather ?
          <div className='h-full flex flex-col justify-between items-center'>
            <div className='text-sm'>
              <div>城市: {selectedCity?.CityZH}</div>
              <div>温度: {weather.temp}°C</div>
              <div>天气: {weather.text}</div>
            </div>
            <div className="flex flex-row gap-1 justify-start items-center w-full mb-2">
              <Button className="bg-transparent hover:bg-transparent hover:bg-[#2a2d34] px-2 py-1" onClick={openClimaModal}>⚙</Button>
              <span className="text-gray-300 text-[0.7rem] align-middle">最后更新时间: {weather.lastUpdateTime}</span>
            </div>
          </div>
          :
          <div>Loading...</div>
        }
      </div>
      <Modal header="天气组件" visible={modalVisible} closeModal={() => setModalVisible(false)}>
        <ClimaWidgetEditor />
      </Modal>
    </div>
  )
}


const ClimaWidgetEditor = () => {
  const [selectedCity, setSelectedCity] = useAtom(selectedCityAtom)
  return (
    <div className="flex flex-col gap-4 p-4">
      <SelectWithInput
        selected={selectedCity}
        setSelected={setSelectedCity}
        inputKey="CityZH"
        options={CityList}
        filter={(option, value) => option ? (option.CityZH.includes(value) || option.CityEN.toLowerCase().includes(value)) : false}
      />
    </div>
  )
}
