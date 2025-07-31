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
      className="cute-card rounded-2xl shadow-cute p-6 sm:p-8 max-w-lg w-full mx-auto"
    >
      <div className={`${result.color} rounded-2xl p-6 mb-6 text-center`}>
        <div className="text-4xl mb-3">🎉</div>
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          あなたのタイプは...
        </h2>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          {result.title}
        </h1>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{result.description}</p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">
          💡 アドバイス
        </h3>
        <ul className="space-y-2">
          {result.advice.map((advice, index) => (
            <li key={index} className="flex items-start">
              <span className="text-cute-primary mr-2">•</span>
              <span className="text-gray-700 text-sm sm:text-base">{advice}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <button
        onClick={onRestart}
        className="w-full py-3 sm:py-4 rounded-2xl cute-button
                 text-white font-bold text-sm sm:text-base
                 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
      >
        もう一度診断する
      </button>
    </motion.div>
  )
}