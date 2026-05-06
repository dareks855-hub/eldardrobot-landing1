'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-3">
        <span className="text-accent-lime font-bold text-sm">
          Вопрос {current + 1} из {total}
        </span>
        <span className="text-dark-muted text-sm">{Math.round(progress)}%</span>
      </div>
      <div className="w-full h-2 bg-dark-card rounded-full overflow-hidden border border-white/10">
        <motion.div
          className="h-full bg-gradient-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
