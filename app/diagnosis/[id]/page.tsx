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
      <div className="min-h-screen flex items-center justify-center px-4 py-6 sm:p-4">
        <div className="cute-card rounded-xl sm:rounded-2xl shadow-cute p-6 sm:p-8 text-center max-w-sm mx-auto">
          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">😅</div>
          <p className="text-gray-700 font-medium text-sm sm:text-base">診断が見つかりません</p>
          <button 
            onClick={() => router.push('/')}
            className="mt-3 sm:mt-4 px-4 sm:px-6 py-2 cute-button text-white rounded-full text-sm font-medium"
          >
            ホームに戻る
          </button>
        </div>
      </div>
    )
  }

  const handleAnswer = (value: string) => {
    console.log('選択された回答:', value)
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)
    console.log('現在の全回答:', newAnswers)

    if (currentQuestionIndex < diagnosis.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      calculateResult(newAnswers)
    }
  }

  const calculateResult = (allAnswers: string[]) => {
    console.log('診断ID:', diagnosis.id)
    console.log('回答:', allAnswers)
    
    let resultIndex = 0
    
    if (diagnosis.id === 'study-method') {
      // 各質問に基づいたスコアリング
      let planningScore = 0
      let intuitiveScore = 0
      let communicationScore = 0
      
      allAnswers.forEach((answer, index) => {
        console.log(`質問${index + 1}の回答:`, answer)
        if (index === 0) { // Q1: 一人で黙々
          if (answer === 'introvert') {
            planningScore += 4
          } else if (answer === 'extrovert') {
            communicationScore += 4
          }
        } else if (index === 1) { // Q2: 音楽聞きながら
          if (answer === 'multitask') {
            intuitiveScore += 4
          } else if (answer === 'focused') {
            planningScore += 3
          }
        } else if (index === 2) { // Q3: すぐ人に聞く
          if (answer === 'collaborative') {
            communicationScore += 5
          } else if (answer === 'independent') {
            planningScore += 3
            intuitiveScore += 1
          }
        } else if (index === 3) { // Q4: 朝型夜型
          if (answer === 'morning') {
            planningScore += 3
          } else if (answer === 'night') {
            intuitiveScore += 3
          }
        }
      })
      
      console.log('スコア - 計画:', planningScore, '直感:', intuitiveScore, 'コミュ:', communicationScore)
      
      // 最も高いスコアの結果を選択
      if (communicationScore > planningScore && communicationScore > intuitiveScore) {
        resultIndex = 2 // コミュニケーション型
      } else if (intuitiveScore > planningScore) {
        resultIndex = 1 // 直感ひらめき型
      } else {
        resultIndex = 0 // コツコツ計画型
      }
    } else if (diagnosis.id === 'environment') {
      let cafeScore = 0
      let focusedScore = 0
      let rewardScore = 0
      
      allAnswers.forEach((answer, index) => {
        console.log(`質問${index + 1}の回答:`, answer)
        if (index === 0) { // Q1: 静かすぎると集中できない
          if (answer === 'ambient') {
            cafeScore += 5
          } else if (answer === 'silent') {
            focusedScore += 4
          }
        } else if (index === 1) { // Q2: 朝夜
          if (answer === 'morning') {
            focusedScore += 3
          } else if (answer === 'night') {
            cafeScore += 2
            rewardScore += 1
          }
        } else if (index === 2) { // Q3: おやつ必要
          if (answer === 'reward') {
            rewardScore += 5
          } else if (answer === 'focus') {
            focusedScore += 3
          }
        } else if (index === 3) { // Q4: 整理整頓
          if (answer === 'organized') {
            focusedScore += 3
          } else if (answer === 'flexible') {
            rewardScore += 3
            cafeScore += 1
          }
        }
      })
      
      console.log('スコア - カフェ:', cafeScore, '集中:', focusedScore, 'ご褒美:', rewardScore)
      
      if (cafeScore > focusedScore && cafeScore > rewardScore) {
        resultIndex = 0 // カフェ気分タイプ
      } else if (rewardScore > focusedScore) {
        resultIndex = 2 // ごほうび大事タイプ
      } else {
        resultIndex = 1 // 集中モードONタイプ
      }
    } else if (diagnosis.id === 'learning-type') {
      let steadyScore = 0
      let flashScore = 0
      let analyticalScore = 0
      let sensoryScore = 0
      
      allAnswers.forEach((answer, index) => {
        console.log(`質問${index + 1}の回答:`, answer)
        if (index === 0) { // Q1: とことん調べる
          if (answer === 'research') {
            analyticalScore += 5
          } else if (answer === 'practical') {
            sensoryScore += 3
            flashScore += 1
          }
        } else if (index === 1) { // Q2: 一夜漬け
          if (answer === 'cramming') {
            flashScore += 5
          } else if (answer === 'steady') {
            steadyScore += 4
            analyticalScore += 1
          }
        } else if (index === 2) { // Q3: 好きな教科追求
          if (answer === 'deep') {
            analyticalScore += 3
            steadyScore += 1
          } else if (answer === 'balanced') {
            steadyScore += 3
            sensoryScore += 1
          }
        } else if (index === 3) { // Q4: 人に教える
          if (answer === 'teaching') {
            sensoryScore += 5
          } else if (answer === 'absorbing') {
            flashScore += 2
            analyticalScore += 1
          }
        }
      })
      
      console.log('スコア - 継続:', steadyScore, 'ひらめき:', flashScore, '分析:', analyticalScore, '感覚:', sensoryScore)
      
      if (sensoryScore > steadyScore && sensoryScore > flashScore && sensoryScore > analyticalScore) {
        resultIndex = 3 // 感覚派直感型
      } else if (analyticalScore > steadyScore && analyticalScore > flashScore) {
        resultIndex = 2 // 分析研究型
      } else if (flashScore > steadyScore) {
        resultIndex = 1 // ひらめき重視型
      } else {
        resultIndex = 0 // コツコツ継続型
      }
    }

    console.log('選択された結果インデックス:', resultIndex)
    console.log('結果:', diagnosis.results[resultIndex])
    
    setResult(diagnosis.results[resultIndex])
  }

  const handleRestart = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6 sm:p-4">
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