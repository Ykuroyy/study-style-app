'use client'

import { Question } from '@/lib/types'
import { motion } from 'framer-motion'

interface QuestionCardProps {
  question: Question
  currentIndex: number
  totalQuestions: number
  onAnswer: (value: string) => void
}

export default function QuestionCard({
  question,
  currentIndex,
  totalQuestions,
  onAnswer
}: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full mx-auto"
    >
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            質問 {currentIndex + 1} / {totalQuestions}
          </span>
          <div className="flex space-x-1">
            {Array.from({ length: totalQuestions }).map((_, i) => (
              <div
                key={i}
                className={`h-2 w-8 rounded-full transition-colors ${
                  i < currentIndex
                    ? 'bg-purple-400'
                    : i === currentIndex
                    ? 'bg-purple-600'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-800">{question.text}</h2>
      </div>
      
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswer(option.value)}
            className="w-full text-left p-4 rounded-2xl bg-gradient-to-r from-pastel-pink to-pastel-purple
                     hover:from-purple-200 hover:to-pink-200 transition-all duration-300
                     border-2 border-transparent hover:border-purple-300 transform hover:scale-105"
          >
            <span className="text-gray-700 font-medium">{option.text}</span>
          </button>
        ))}
      </div>
    </motion.div>
  )
}