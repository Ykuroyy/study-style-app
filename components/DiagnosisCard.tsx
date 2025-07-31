'use client'

import { Diagnosis } from '@/lib/types'
import { motion } from 'framer-motion'

interface DiagnosisCardProps {
  diagnosis: Diagnosis
  index: number
  onSelect: (id: string) => void
}

const cardGradients = [
  'bg-gradient-to-br from-pink-300 via-pink-200 to-pink-100',
  'bg-gradient-to-br from-purple-300 via-purple-200 to-purple-100',
  'bg-gradient-to-br from-blue-300 via-blue-200 to-blue-100',
]

const cardEmojis = ['🌸', '💜', '🌟']

export default function DiagnosisCard({ diagnosis, index, onSelect }: DiagnosisCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="cursor-pointer"
      onClick={() => onSelect(diagnosis.id)}
    >
      <div className={`${cardGradients[index % cardGradients.length]} 
                      cute-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft
                      hover:shadow-cute transition-all duration-300 
                      transform hover:scale-[1.02] hover:-translate-y-1
                      border-2 border-white/50`}>
        <div className="flex items-center mb-2 sm:mb-3">
          <span className="text-xl sm:text-2xl mr-2 sm:mr-3">{cardEmojis[index % cardEmojis.length]}</span>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">
            {diagnosis.title}
          </h3>
        </div>
        <p className="text-gray-700 text-sm sm:text-sm leading-relaxed">
          {diagnosis.description}
        </p>
      </div>
    </motion.div>
  )
}