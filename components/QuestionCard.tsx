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
      className="cute-card rounded-xl sm:rounded-2xl shadow-cute p-4 sm:p-6 lg:p-8 max-w-sm sm:max-w-lg w-full mx-auto"
    >
      <div className="mb-4 sm:mb-6">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <span className="text-xs sm:text-sm text-cute-primary font-medium">
            質問 {currentIndex + 1} / {totalQuestions} 💕
          </span>
          <div className="flex space-x-1">
            {Array.from({ length: totalQuestions }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 sm:h-2 w-4 sm:w-6 lg:w-8 rounded-full transition-colors ${
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
        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 leading-tight">{question.text}</h2>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {question.options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => onAnswer(option.value)}
            className={`w-full text-center py-10 sm:py-8 px-10 sm:px-8 rounded-3xl sm:rounded-2xl
                     ${index === 0 
                       ? 'bg-gradient-to-r from-pink-100 to-rose-100 hover:from-pink-200 hover:to-rose-200' 
                       : 'bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200'}
                     transition-all duration-300
                     border-4 border-transparent hover:border-cute-primary transform hover:scale-[1.02] active:scale-[0.98]
                     shadow-lg hover:shadow-2xl min-h-[120px] sm:min-h-[100px]`}
          >
            <span 
              className="text-gray-700 font-black flex items-center justify-center gap-2 tracking-wider"
              style={{ fontSize: '2.5rem' }}
            >
              {option.text}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  )
}