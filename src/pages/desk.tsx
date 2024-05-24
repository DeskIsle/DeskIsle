import AppLayout from "@/pages/applayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "@/components/ui/toaster";
import { GearIcon,  HomeIcon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import React, { useState } from "react";
import SettingPage from "./setting";
import { ModalStackContainer } from "rc-modal-sheet";
import { motion } from "framer-motion";
import { compsAtom } from "@/atoms/comps";

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
      <ModalStackContainer m={motion}>
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
      </ModalStackContainer>
      <Toaster />
    </div>
  )
}

interface ContentPageProps {
  page: string
}

function ContentPage({ page }: ContentPageProps) {
  const [compsValue, setCompsValue] = useAtom(compsAtom)
  if (page !== '设置') {
    return (
      <AppLayout comps={compsValue} />
    )
  }
  return (
    <SettingPage />
  )
}