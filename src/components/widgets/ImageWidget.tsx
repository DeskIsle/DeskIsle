import React from "react";

export interface ImageWidgetProps {
  img: string
  alt: string
}

export default function ImageWidget({img, alt}: ImageWidgetProps) {
  return (
    <img 
      className="object-cover"
      draggable={false}
      src={img} 
      alt={alt} 
    />
  )
}