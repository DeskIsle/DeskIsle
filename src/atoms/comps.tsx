import { IFrameWidgetProps } from "@/components/widgets/IFrameWidget";
import { ImageWidgetProps } from "@/components/widgets/ImageWidget";
import { LinkWidgetProps } from "@/components/widgets/LinkWidget";
import { MemoWidgetProps } from "@/components/widgets/MemoWidget";
import YoutubeIcon from "@/icons/YoutubeIcon";
import { BoxIcon, GitHubLogoIcon, NotionLogoIcon } from "@radix-ui/react-icons";
import { atom } from "jotai";
import { atomWithReset } from "jotai/utils"
import React from "react";

export interface Comp {
  id: number,
  row: number,
  col: number,
  width: number,
  height: number,
  tag: string,
  title: string,
  type: string,
  target: WidgetProps
}

export type WidgetProps = LinkWidgetProps | ImageWidgetProps | IFrameWidgetProps | MemoWidgetProps

export const compsAtom = atom<Comp[]>([
  {
    id: 0,
    row: 0,
    col: 0,
    width: 1,
    height: 1,
    tag: '',
    title: 'Youtube',
    type: "LinkWidget",
    target: {
      link: "https://youtube.com",
      icon: <YoutubeIcon />,
      bgColor: "#FFFFFF",
      iconColor: "#FF0000",
    }
  },{
    id: 1,
    row: 0,
    col: 1,
    width: 1,
    height: 1,
    tag: '',
    title: 'Github',
    type: "LinkWidget",
    target: {
      link: "https://github.com",
      icon: <GitHubLogoIcon className="w-3/4 h-3/4"/>,
      bgColor: '#000000',
      iconColor: '#FFFFFF'
    }
  },{
    id: 2,
    row: 0,
    col: 2,
    width: 1,
    height: 1,
    tag: '',
    title: 'Notion',
    type: "LinkWidget",
    target: {
      link: "https://notion.so",
      icon: <NotionLogoIcon className="w-3/4 h-3/4"/>,
      bgColor: '#FFFFFF',
      iconColor: '#000000'
    }
  }, {
    id: 5,
    row: 1,
    col: 0,
    width: 5,
    height: 5,
    tag: '',
    title: '备忘录',
    type: "MemoWidget",
    target: {
      
    }
  }
  // ,{
  //   id: 3,
  //   row: 1,
  //   col: 0,
  //   width: 4,
  //   height: 4,
  //   tag: '',
  //   title: '',
  //   type: "ImageWidget",
  //   target: {
  //     img: "https://component-1256901694.cos.ap-shanghai.myqcloud.com/images/img1.jpg",
  //     alt: "Girl under the tree."
  //   }
  // },
  // {
  //   row: 4,
  //   col: 4,
  //   width: 6,
  //   height: 6,
  //   tag: '',
  //   title: 'Clima',
  //   type: "IFrameWidget",
  //   target: {
  //     src: 'https://component-1256901694.cos.ap-shanghai.myqcloud.com/component/clima/index.html',
  //     scale: 1.1
  //   }
  // }
])

export const linkWidgetAtom = atomWithReset({
  id: 0,
  row: 0,
  col: 0,
  width: 1,
  height: 1,
  tag: '',
  title: '',
  type: "LinkWidget",
  target: {
    link: "",
    icon: <BoxIcon />,
    bgColor: "",
    iconColor: "",
  } as LinkWidgetProps
})