'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { diagnoses } from '@/lib/diagnoses'
import QuestionCard from '@/components/QuestionCard'
import ResultCard from '@/components/ResultCard'
import { DiagnosisResult } from '@/lib/types'

export default function DiagnosisPage() {
  const params = useParams()
  const router = useRouter()
  const diagnosis = diagnoses.find(d => d.id === params.id)
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [result, setResult] = useState<DiagnosisResult | null>(null)

  if (!diagnosis) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="cute-card rounded-2xl shadow-cute p-8 text-center">
          <div className="text-4xl mb-4">😅</div>
          <p className="text-gray-700 font-medium">診断が見つかりません</p>
          <button 
            onClick={() => router.push('/')}
            className="mt-4 px-6 py-2 cute-button text-white rounded-full text-sm font-medium"
          >
            ホームに戻る
          </button>
        </div>
      </div>
    )
  }

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentQuestionIndex < diagnosis.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      calculateResult(newAnswers)
    }
  }

  const calculateResult = (allAnswers: string[]) => {
    const answerCounts: Record<string, number> = {}
    
    allAnswers.forEach(answer => {
      answerCounts[answer] = (answerCounts[answer] || 0) + 1
    })

    let resultIndex = 0
    if (diagnosis.id === 'study-method') {
      if (answerCounts['collaborative'] >= 2 || answerCounts['extrovert'] >= 2) {
        resultIndex = 2
      } else if (answerCounts['multitask'] >= 2 || answerCounts['night'] >= 2) {
        resultIndex = 1
      } else {
        resultIndex = 0
      }
    } else if (diagnosis.id === 'environment') {
      if (answerCounts['reward'] >= 2 || answerCounts['flexible'] >= 2) {
        resultIndex = 2
      } else if (answerCounts['ambient'] >= 2) {
        resultIndex = 0
      } else {
        resultIndex = 1
      }
    } else if (diagnosis.id === 'learning-type') {
      if (answerCounts['research'] >= 2 || answerCounts['deep'] >= 2) {
        resultIndex = 2
      } else if (answerCounts['teaching'] >= 2 || answerCounts['practical'] >= 2) {
        resultIndex = 3
      } else if (answerCounts['cramming'] >= 1) {
        resultIndex = 1
      } else {
        resultIndex = 0
      }
    }

    setResult(diagnosis.results[resultIndex])
  }

  const handleRestart = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {result ? (
        <ResultCard result={result} onRestart={handleRestart} />
      ) : (
        <QuestionCard
          question={diagnosis.questions[currentQuestionIndex]}
          currentIndex={currentQuestionIndex}
          totalQuestions={diagnosis.questions.length}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  )
}