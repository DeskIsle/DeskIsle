import YoutubeIcon from "@/icons/YoutubeIcon";
import { GitHubLogoIcon, NotionLogoIcon } from "@radix-ui/react-icons";
import { atom } from "jotai";
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
    title: 'Google',
    type: "LinkWidget",
    target: {
      link: "https://google.com",
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
  // },{
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