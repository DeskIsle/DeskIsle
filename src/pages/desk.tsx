import AppLayout, { Comp } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GearIcon, HomeIcon } from "@radix-ui/react-icons";
import { atom, useAtom } from "jotai";
import React, { useState } from "react";

const comps = atom([
  {
    row: 0,
    col: 0,
    width: 1,
    height: 1,
    tag: '',
    title: '',
    type: "LinkWidget",
    target: {
      link: "https://baidu.com",
      icon: ""
    }
  },{
    row: 0,
    col: 1,
    width: 1,
    height: 1,
    tag: '',
    title: '',
    type: "LinkWidget",
    target: {
      link: "https://google.com",
      icon: ""
    }
  },{
    row: 1,
    col: 0,
    width: 4,
    height: 4,
    tag: '',
    title: '',
    type: "ImageWidget",
    target: {
      img: "https://component-1256901694.cos.ap-shanghai.myqcloud.com/images/img1.jpg",
      alt: "Girl under the tree."
    }
  },{
    row: 0,
    col: 4,
    width: 6,
    height: 6,
    tag: '',
    title: 'Clima',
    type: "IFrameWidget",
    target: {
      src: 'https://component-1256901694.cos.ap-shanghai.myqcloud.com/component/clima/index.html',
      scale: 1.1
    }
  }
])

export function Desk() {
  const [tabs, setTabs] = useState([
    {
      name: "首页",
      icon: <HomeIcon/>,
    },
    {
      name: "设置",
      icon: <GearIcon/>,
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
              <ContentPage page={item.name}/>
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}

interface ContentPageProps {
  page: string
}

function ContentPage({ page }: ContentPageProps) {
  const [compsValue, setCompsValue] = useAtom(comps)
  if (page !== '设置') {
    return (
      <AppLayout comps={compsValue} gap={20} unit={50} />
    )
  }
  return (
    <div className="text-white text-3xl w-full h-full flex justify-center items-center">Setting</div>
  )
}