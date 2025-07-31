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
      className="cute-card rounded-2xl shadow-cute p-6 sm:p-8 max-w-lg w-full mx-auto"
    >
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-cute-primary font-medium">
            質問 {currentIndex + 1} / {totalQuestions} 💕
          </span>
          <div className="flex space-x-1">
            {Array.from({ length: totalQuestions }).map((_, i) => (
              <div
                key={i}
                className={`h-2 w-6 sm:w-8 rounded-full transition-colors ${
                  i < currentIndex
                    ? 'bg-cute-primary'
                    : i === currentIndex
                    ? 'bg-cute-secondary'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">{question.text}</h2>
      </div>
      
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswer(option.value)}
            className="w-full text-left p-4 rounded-xl bg-gradient-to-r from-pink-100 to-purple-100
                     hover:from-pink-200 hover:to-purple-200 transition-all duration-300
                     border-2 border-transparent hover:border-cute-primary transform hover:scale-[1.02]
                     shadow-sm hover:shadow-md"
          >
            <span className="text-gray-700 font-medium text-sm sm:text-base">{option.text}</span>
          </button>
        ))}
      </div>
    </motion.div>
  )
}