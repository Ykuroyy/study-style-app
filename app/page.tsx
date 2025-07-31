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
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            勉強スタイル診断
          </h1>
          <p className="text-gray-600">
            心理テストであなたにぴったりの勉強法を見つけよう！
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-6 max-w-md mx-auto">
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