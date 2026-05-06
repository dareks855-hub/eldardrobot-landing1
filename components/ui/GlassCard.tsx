import React from 'react'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function GlassCard({ children, className = '', ...props }: GlassCardProps) {
  return (
    <div
      className={`
        backdrop-blur-md bg-white/5 border border-white/10
        rounded-xl p-6 shadow-lg hover:shadow-xl
        transition-all duration-300 hover:border-white/20
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
