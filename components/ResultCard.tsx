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
      className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full mx-auto"
    >
      <div className={`${result.color} rounded-2xl p-6 mb-6`}>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          あなたのタイプは...
        </h2>
        <h1 className="text-3xl font-extrabold text-gray-900">
          {result.title}
        </h1>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed">{result.description}</p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">
          💡 アドバイス
        </h3>
        <ul className="space-y-2">
          {result.advice.map((advice, index) => (
            <li key={index} className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span className="text-gray-700">{advice}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <button
        onClick={onRestart}
        className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500
                 text-white font-bold hover:from-purple-600 hover:to-pink-600
                 transition-all duration-300 transform hover:scale-105"
      >
        もう一度診断する
      </button>
    </motion.div>
  )
}