'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { principles } from '@/data/principles'

export function PrinciplesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-24 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Пять Столпов Силы</h2>
          <p className="text-dark-muted text-lg">Это основа, на которой строится сильное тело и дух</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {principles.map((principle) => (
            <motion.div key={principle.title} variants={itemVariants}>
              <GlassCard className="h-full hover:border-accent-lime/50 transition-colors">
                <div className="text-5xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold text-accent-lime mb-3">{principle.title}</h3>
                <p className="text-dark-muted text-sm leading-relaxed">{principle.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
