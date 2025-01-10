import clsx from "clsx"
import { HTMLAttributes } from "react"

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
}

function Button({className, children}:IButton) {
  return (
    <button className={clsx(className)}> {children}</button>
  )
}

export default Button