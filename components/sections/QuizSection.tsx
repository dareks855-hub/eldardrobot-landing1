'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { GlassCard } from '@/components/ui/GlassCard'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { quizQuestions } from '@/data/quiz'
import { ResultModal } from './ResultModal'

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [isFinished, setIsFinished] = useState(false)

  const handleSelectAnswer = (option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [quizQuestions[currentQuestion].id]: option,
    }))
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setIsFinished(true)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setIsFinished(false)
  }

  const question = quizQuestions[currentQuestion]
  const isAnswered = question.id in selectedAnswers
  const selectedAnswer = selectedAnswers[question.id]

  return (
    <>
      <section id="quiz" className="py-24 px-4 bg-dark-card/50 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          >
            Тест здоровья
          </motion.h2>

          <ProgressBar current={currentQuestion} total={quizQuestions.length} />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-8">{question.question}</h3>

                <div className="space-y-3 mb-8">
                  {question.options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleSelectAnswer(option)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                        w-full p-4 rounded-lg border-2 transition-all text-left font-semibold
                        ${
                          selectedAnswer === option
                            ? 'border-accent-lime bg-accent-lime/10 text-accent-lime'
                            : 'border-white/20 text-white hover:border-accent-orange'
                        }
                      `}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>

                <div className="flex gap-4 justify-between">
                  <Button
                    variant="outline"
                    onClick={handlePrev}
                    disabled={currentQuestion === 0}
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← Назад
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!isAnswered}
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentQuestion === quizQuestions.length - 1 ? 'Закончить' : 'Далее'} →
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <ResultModal isOpen={isFinished} onClose={handleReset} answers={selectedAnswers} />
    </>
  )
}
