export interface Question {
  id: string
  text: string
  options: Option[]
}

export interface Option {
  id: string
  text: string
  value: string
}

export interface DiagnosisResult {
  type: string
  title: string
  description: string
  advice: string[]
  color: string
}

export interface Diagnosis {
  id: string
  title: string
  description: string
  questions: Question[]
  results: DiagnosisResult[]
}