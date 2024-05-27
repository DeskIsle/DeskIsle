import { LinkWidgetProps } from "@/components/widgets/LinkWidget";
import YoutubeIcon from "@/icons/YoutubeIcon";
import { Comp } from "@/pages/applayout";
import { BoxIcon, GitHubLogoIcon, NotionLogoIcon } from "@radix-ui/react-icons";
import { atom } from "jotai";
import { atomWithReset } from "jotai/utils"
import React from "react";

export const compsAtom = atom([
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
      bgColor: "bg-white",
      iconColor: "text-[#FF0000]",
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
      bgColor: 'bg-black',
      iconColor: 'text-white'
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
      bgColor: 'bg-white',
      iconColor: 'text-black'
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
  //   row: 0,
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
    bgColor: "bg-white",
    iconColor: "text-black",
  } as LinkWidgetProps
})