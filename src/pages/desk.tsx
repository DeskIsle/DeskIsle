import Card from "@/components/common/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WeatherWidget from "@/components/widgets/WeatherWidget";
import GearIcon from "@/icons/GearIcon";
import HomeIcon from "@/icons/HomeIcon";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

interface Comp {
  row: number,
  col: number,
  rowSpan: number,
  colSpan: number,
  widget?: React.ReactNode
}

interface TabData {
  name: string,
  icon: React.ReactNode,
  comps: Comp[] // TODO
}

export function Desk() {
  const [tabs, setTabs] = useState<TabData[]>([
    {
      name: "首页",
      icon: <HomeIcon/>,
      comps: [
        {
          row: 1,
          col: 1,
          rowSpan: 1,
          colSpan: 1,
          widget: <WeatherWidget />
        }
      ]
    },
    {
      name: "设置",
      icon: <GearIcon/>,
      comps: []
    },
  ])
  return (
    <div className="w-screen h-screen rounded-sm flex flex-col">
      <Tabs defaultValue={tabs[0].name} className="w-full h-full flex flex-row items-center py-1 gap-2">
        <TabsList>
          { tabs.map((item, index) => {
            return (
              <TabsTrigger value={item.name} key={index}>
                {item.icon}
                <div>{item.name}</div>
              </TabsTrigger>
            )
          })}
        </TabsList>
        { tabs.map((item, index) => {
          return (
            <TabsContent className="w-[90vw] h-[90vh] mx-4" value={item.name} key={index}>
              <ContentPage tabData={item}/>
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}

interface ContentPageProps {
  tabData: TabData
}

function ContentPage({ tabData }: ContentPageProps) {
  const [rows, setRows] = useState(10)
  const [cols, setCols] = useState(5)
  const contentRef = useRef<HTMLDivElement>(null)
  const [cells, setCells] = useState<number[]>([])
  useEffect(() => {
    if (contentRef.current) {
      const width = contentRef.current.offsetWidth
      const height = contentRef.current.offsetHeight
      const newCols = Math.floor(width / 64)
      const newRows = Math.floor(height / 64)
      setCols(newCols < 1 ? 1 : newCols)
      setRows(newRows < 1 ? 1 : newRows)
      setCells([...new Array(newCols*newRows).keys()])
    }
  }, [])
  
  return (
    <div 
      ref={contentRef} 
      style={{
        gridTemplateColumns: `repeat(${cols},1fr)`,
        gridTemplateRows: `repeat(${rows},1fr)`
      }} 
      className={`w-full h-full grid`}>
      {
        cells.map((item, index) => {
          return (
            <Card key={index} className="flex justify-center items-center bg-white">
              
            </Card>
          )
        })
      }
    </div>
  )
}