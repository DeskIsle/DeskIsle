import React from "react";

export interface MemoWidgetProps {

}

export default function MemoWidget({...props}: MemoWidgetProps) {
  return (
    <div className="bg-white w-full h-full">MemoWidget</div>
  )
}