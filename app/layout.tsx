import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Будь Сильным | Тест здоровья от Эльдара Дробота',
  description: 'Пройди тест на здоровье и дисциплину. Будь сильным как Эльдар Дробот!',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} bg-dark-bg text-white antialiased`}>
        <div className="relative min-h-screen">{children}</div>
      </body>
    </html>
  )
}
