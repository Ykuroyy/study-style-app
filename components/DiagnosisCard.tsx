'use client'

import { Diagnosis } from '@/lib/types'
import { motion } from 'framer-motion'

interface DiagnosisCardProps {
  diagnosis: Diagnosis
  index: number
  onSelect: (id: string) => void
}

const cardColors = ['bg-pastel-pink', 'bg-pastel-blue', 'bg-pastel-green']

export default function DiagnosisCard({ diagnosis, index, onSelect }: DiagnosisCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="cursor-pointer"
      onClick={() => onSelect(diagnosis.id)}
    >
      <div className={`${cardColors[index % cardColors.length]} rounded-3xl p-6 shadow-lg
                      hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {diagnosis.title}
        </h3>
        <p className="text-gray-600 text-sm">
          {diagnosis.description}
        </p>
      </div>
    </motion.div>
  )
}