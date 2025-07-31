'use client'

import { DiagnosisResult } from '@/lib/types'
import { motion } from 'framer-motion'

interface ResultCardProps {
  result: DiagnosisResult
  onRestart: () => void
}

export default function ResultCard({ result, onRestart }: ResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="cute-card rounded-xl sm:rounded-2xl shadow-cute p-4 sm:p-6 lg:p-8 max-w-sm sm:max-w-lg w-full mx-auto"
    >
      <div className={`${result.color} rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 text-center`}>
        <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🎉</div>
        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2">
          あなたのタイプは...
        </h2>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900">
          {result.title}
        </h1>
      </div>
      
      <div className="mb-4 sm:mb-6">
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{result.description}</p>
      </div>
      
      <div className="mb-6 sm:mb-8">
        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-2 sm:mb-3">
          💡 アドバイス
        </h3>
        <ul className="space-y-1.5 sm:space-y-2">
          {result.advice.map((advice, index) => (
            <li key={index} className="flex items-start">
              <span className="text-cute-primary mr-2 text-sm sm:text-base">•</span>
              <span className="text-gray-700 text-sm sm:text-base">{advice}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <button
        onClick={onRestart}
        className="w-full py-4 sm:py-5 rounded-2xl sm:rounded-3xl cute-button
                 text-white font-bold text-base sm:text-lg
                 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                 shadow-lg hover:shadow-xl min-h-[56px] sm:min-h-[60px]
                 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500"
      >
        もういっかい診断したい！🎀
      </button>
    </motion.div>
  )
}