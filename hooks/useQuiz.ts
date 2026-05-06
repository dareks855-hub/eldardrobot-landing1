'use client'

import { useState } from 'react'
import type { QuizAnswer } from '@/types'

export function useQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [isFinished, setIsFinished] = useState(false)

  const addAnswer = (questionId: number, selectedOption: string) => {
    setAnswers((prev) => {
      const filtered = prev.filter((a) => a.questionId !== questionId)
      return [...filtered, { questionId, selectedOption }]
    })
  }

  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1)
  }

  const prevQuestion = () => {
    setCurrentQuestion((prev) => Math.max(0, prev - 1))
  }

  const finish = () => {
    setIsFinished(true)
  }

  const reset = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setIsFinished(false)
  }

  return {
    currentQuestion,
    answers,
    isFinished,
    addAnswer,
    nextQuestion,
    prevQuestion,
    finish,
    reset,
  }
}
