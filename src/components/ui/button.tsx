import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'default' | 'sm' | 'lg'
}

export function Button({ className, size = 'default', ...props }: ButtonProps) {
  const sizeClasses = {
    default: 'px-4 py-2',
    sm: 'px-3 py-1',
    lg: 'px-6 py-3'
  }

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${sizeClasses[size]} ${className}`}
      {...props}
    />
  )
} 