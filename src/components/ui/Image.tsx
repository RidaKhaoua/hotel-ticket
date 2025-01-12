import clsx from 'clsx'
import  { HTMLAttributes } from 'react'

interface IMage extends HTMLAttributes<HTMLImageElement> {
    className?: string,
    src: string,
    alt: string,
}

function Image({className, src, alt}: IMage) {
  return (
    <img className={clsx("w-full mb-4",className)} src={src} alt={alt}/>
  )
}

export default Image