import React, { HTMLAttributes } from 'react';

interface DataUrlIconProps extends HTMLAttributes<HTMLDivElement>{
  src: string
  className?: string,
}

export default function DataUrlIcon({src, className, ...props}: DataUrlIconProps) {
	return (
    <img className={className} {...props} alt='' src={src} />
  )
}