import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-bold rounded-lg transition-all duration-300 cursor-pointer focus:outline-none'

  const variants = {
    primary: 'bg-gradient-accent text-white hover:shadow-lg hover:shadow-accent-red/50 active:scale-95',
    secondary: 'bg-dark-card text-accent-lime border border-accent-lime hover:bg-accent-lime hover:text-dark-card',
    outline: 'border-2 border-accent-red text-accent-red hover:bg-accent-red hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
