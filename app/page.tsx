'use client'

import { useRouter } from 'next/navigation'
import { diagnoses } from '@/lib/diagnoses'
import DiagnosisCard from '@/components/DiagnosisCard'

export default function Home() {
  const router = useRouter()

  const handleSelectDiagnosis = (id: string) => {
    router.push(`/diagnosis/${id}`)
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-lg mx-auto py-8">
        <div className="text-center mb-10">
          <div className="mb-6">
            <span className="text-6xl kawaii-emoji">💖</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            勉強スタイル診断
          </h1>
          <p className="text-white/90 text-lg font-medium drop-shadow-md">
            心理テストであなたにぴったりの勉強法を見つけよう！
            <span className="kawaii-emoji ml-2">✨</span>
          </p>
        </div>
        
        <div className="space-y-4">
          {diagnoses.map((diagnosis, index) => (
            <DiagnosisCard
              key={diagnosis.id}
              diagnosis={diagnosis}
              index={index}
              onSelect={handleSelectDiagnosis}
            />
          ))}
        </div>
      </div>
    </div>
  )
}