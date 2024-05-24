import React from "react";

export interface LinkWidgetProps {
  link: string,
  icon: string,
}

export default function LinkWidget({link, icon}: LinkWidgetProps) {
  return (
    <a href={link} target="_blank" className="w-full h-full h-14 bg-gradient-to-r from-purple-500 to-pink-500">
      {/* <img
        // src={`https://www.favicon.vip/get.php?url=${link}`}
        // https://api.iowen.cn/favicon/www.iowen.cn.png
        alt={link}
        className="w-full h-full" /> */}
    </a>
  )
}