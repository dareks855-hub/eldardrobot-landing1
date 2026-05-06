export interface QuizQuestion {
  id: number
  question: string
  options: string[]
}

export interface QuizAnswer {
  questionId: number
  selectedOption: string
}

export interface Principle {
  icon: string
  title: string
  description: string
}
