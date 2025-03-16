'use client'

import React, { useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import 'katex/dist/katex.min.css'
import { BlockMath } from 'react-katex'

interface Step {
  id: string
  explanation: string
  stepEquation: string
}

interface Solution {
  id: string
  steps: Step[]
}

interface ExerciseProps {
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  solution: Solution
  className?: string
}

export function Exercise({ description, difficulty, solution, className }: ExerciseProps) {
  const [showSolution, setShowSolution] = useState(false)
  const [latexError, setLatexError] = useState<string | null>(null)

  const difficultyColors = {
    easy: 'text-green-500',
    medium: 'text-yellow-500',
    hard: 'text-red-500'
  }

  const renderLatex = (equation: string) => {
    return (
      <BlockMath 
        math={equation}
        errorColor="#ef4444"
        renderError={(error: Error) => {
          setLatexError(error.message)
          return <div className="text-red-500">Error rendering equation</div>
        }}
      />
    )
  }

  return (
    <Card className={cn("p-6 bg-gray-900/50 border-gray-800", className)}>
      <div className="space-y-4">
        {/* Exercise Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Exercise</h3>
          <span className={cn("text-sm font-medium capitalize", difficultyColors[difficulty])}>
            {difficulty}
          </span>
        </div>

        {/* Description and Equation */}
        <div className="space-y-4">
          <p className="text-gray-400">{description}</p>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-800">
            <div className="text-center">
              {renderLatex(solution.steps[0].stepEquation)}
            </div>
          </div>
          {latexError && (
            <p className="text-sm text-red-500">{latexError}</p>
          )}
        </div>

        {/* Solution Section */}
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-between"
            onClick={() => setShowSolution(!showSolution)}
          >
            <span>{showSolution ? 'Hide Solution' : 'Show Solution'}</span>
            {showSolution ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>

          {showSolution && (
            <div className="space-y-4 pt-4">
              {solution.steps.map((step, index) => (
                <div key={step.id} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                      <span className="text-sm text-gray-400">{index + 1}</span>
                    </div>
                    <p className="text-sm text-gray-300">{step.explanation}</p>
                  </div>
                  <div className="ml-8 p-3 bg-gray-800/50 rounded-lg border border-gray-800">
                    <div className="text-center">
                      {renderLatex(step.stepEquation)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  )
} 