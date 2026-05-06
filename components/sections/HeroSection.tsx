'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

interface HeroSectionProps {
  onCtaClick: () => void
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-red-950/20 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-red/10 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-7xl md:text-8xl font-bold mb-6 text-white leading-tight"
        >
          БУДЬ<br />
          <span className="bg-gradient-accent bg-clip-text text-transparent">СИЛЬНЫМ</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-dark-muted mb-12 italic"
        >
          Как Эльдар Дробот. Дисциплина, тренировки, правильное питание и сон — вот формула успеха.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button size="lg" onClick={onCtaClick} className="font-bold text-lg">
            Проверь себя 💪
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-sm text-dark-muted mt-8"
        >
          Пройди 5 вопросов и узнай, на каком уровне ты находишься
        </motion.p>
      </motion.div>
    </section>
  )
}
