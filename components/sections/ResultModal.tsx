'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'

interface ResultModalProps {
  isOpen: boolean
  onClose: () => void
  answers: Record<number, string>
}

export function ResultModal({ isOpen, onClose, answers }: ResultModalProps) {
  const calculateHealth = () => {
    const answersArray = Object.values(answers)
    const goodAnswersCount = answersArray.filter((ans) => {
      const goodAnswers = [
        'Регулярно (3-4)',
        'Каждый день',
        '7-8 часов',
        'Сбалансированно',
        'Только грудка и гречка',
        'Активный образ жизни',
        'Я просто Железный человек',
        'Отлично',
        'Готов к соревнованиям',
      ]
      return goodAnswers.includes(ans)
    }).length

    return true
  }

  const hasGreatHealth = calculateHealth()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-dark-card border border-white/20 rounded-2xl p-8 md:p-12 max-w-2xl w-full backdrop-blur-xl shadow-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-6xl text-center mb-6"
              >
                💉
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold text-center text-accent-lime mb-8"
              >
                Результаты готовы!
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 rounded-xl p-6 mb-8 border border-accent-lime/30"
              >
                {hasGreatHealth ? (
                  <p className="text-white text-lg leading-relaxed">
                    <span className="text-accent-lime font-bold">У вас прекрасное здоровье!</span>
                    {' '}Поэтому для его поддержания нужно начать колоть тестостерон в небольших
                    количествах, крайне редко.
                    <br />
                    <br />
                    <span className="font-bold text-accent-orange">1 раз в неделю до конца жизни 1 шприц</span>
                  </p>
                ) : (
                  <p className="text-white text-lg leading-relaxed">
                    <span className="text-accent-orange font-bold">Есть над чем работать!</span>
                    {' '}Начните с основ: регулярные тренировки, 7-8 часов сна и сбалансированное
                    питание. Результаты придут быстрее, чем вы думаете.
                  </p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-4"
              >
                <Button
                  onClick={onClose}
                  size="lg"
                  className="w-full"
                >
                  Пройти заново
                </Button>
                <button
                  onClick={() => {
                    const text = hasGreatHealth
                      ? 'Я прошёл тест здоровья от Эльдара Дробота и получил прекрасные результаты! 💪💉'
                      : 'Я прошёл тест здоровья от Эльдара Дробота! Нужно работать над собой! 💪'
                    navigator.clipboard.writeText(text)
                    alert('Скопировано в буфер обмена!')
                  }}
                  className="text-dark-muted hover:text-accent-lime transition-colors font-semibold"
                >
                  Поделиться результатом
                </button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
