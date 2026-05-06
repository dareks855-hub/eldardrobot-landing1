'use client'

import { useRef } from 'react'
import { HeroSection } from '@/components/sections/HeroSection'
import { PrinciplesSection } from '@/components/sections/PrinciplesSection'
import { QuizSection } from '@/components/sections/QuizSection'

export default function Home() {
  const quizRef = useRef<HTMLDivElement>(null)

  const scrollToQuiz = () => {
    const quizSection = document.getElementById('quiz')
    quizSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection onCtaClick={scrollToQuiz} />
      <PrinciplesSection />
      <div ref={quizRef}>
        <QuizSection />
      </div>
    </main>
  )
}
