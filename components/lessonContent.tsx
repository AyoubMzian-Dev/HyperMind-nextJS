"use client"
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from './ui/button';
import { ConceptType } from '@/schemas/concepts';
import { Skeleton } from './ui/skeleton';
import { Badge } from './ui/badge';
import { Exercise } from './Exercise'
import { BlockMath, InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css'

// Example exercise data
const exampleExercise = {
  description: "Solve the following quadratic equation:",
  difficulty: "medium" as const,
  solution: {
    id: "1",
    steps: [
      {
        id: "1",
        explanation: "First, we identify this is a quadratic equation in standard form",
        stepEquation: "x^2 + 5x + 6 = 0"
      },
      {
        id: "2",
        explanation: "We can solve this by factoring",
        stepEquation: "(x + 2)(x + 3) = 0"
      },
      {
        id: "3",
        explanation: "Using the zero product property, either factor can be zero",
        stepEquation: "x + 2 = 0 \\text{ or } x + 3 = 0"
      },
      {
        id: "4",
        explanation: "Solving each equation",
        stepEquation: "x = -2 \\text{ or } x = -3"
      }
    ]
  }
}

// Helper function to safely render LaTeX
const renderLatex = (text: string, inline = false) => {
  try {
    // Check if the text contains LaTeX delimiters
    const hasLatex = text.includes('$') || text.includes('\\(') || text.includes('\\[')
    
    if (!hasLatex) return text

    // Split text by LaTeX delimiters and render each part
    return text.split(/(\$[^$]+\$|\\\([^)]+\\\)|\\\[[^]]+\\\])/).map((part, index) => {
      if (part.startsWith('$') && part.endsWith('$')) {
        const math = part.slice(1, -1)
        return inline ? <InlineMath key={index} math={math} /> : <BlockMath key={index} math={math} />
      }
      if (part.startsWith('\\(') && part.endsWith('\\)')) {
        const math = part.slice(2, -2)
        return <InlineMath key={index} math={math} />
      }
      if (part.startsWith('\\[') && part.endsWith('\\]')) {
        const math = part.slice(2, -2)
        return <BlockMath key={index} math={math} />
      }
      return part
    })
  } catch (error) {
    console.error('Error rendering LaTeX:', error)
    return text
  }
}

export const LessonContent = () => {
    const [concepts, setConcepts] = useState<ConceptType[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const params = useParams();
    const lessonId = params.lessonId as string;

    useEffect(() => {
        async function fetchConcepts() {
            setLoading(true)
            try {
                const res = await fetch(`/api/concepts${lessonId ? `?lessonId=${lessonId}` : ''}`)
                if (!res.ok) {
                    throw new Error(`Failed to fetch concepts: ${res.status}`)
                }
                const data = await res.json()
                if (Array.isArray(data)) {
                    setConcepts(data)
                } else {
                    console.error("Expected array of concepts but got:", data)
                    setConcepts([])
                }
            } catch (error) {
                console.error("Error fetching concepts:", error)
                setError(error instanceof Error ? error.message : "Unknown error")
                setConcepts([])
            } finally {
                setLoading(false)
            }
        }
        fetchConcepts()
    }, [lessonId])

    const nextSection = () => {
        if (currentSectionIndex < concepts.length - 1) {
            setCurrentSectionIndex(currentSectionIndex + 1);
        }
    }

    const currentConcept = concepts[currentSectionIndex];

    if (loading) return (
        <div className="space-y-8 animate-pulse">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-32 w-full" />
        </div>
    )

    if (error) return (
        <div className="p-8 text-center">
            <div className="text-red-500 text-lg font-medium mb-4">Error loading lesson content</div>
            <div className="text-gray-400">{error}</div>
        </div>
    )

    if (concepts.length === 0) return (
        <div className="p-8 text-center">
            <div className="text-gray-400 text-lg">No concepts found for this lesson</div>
        </div>
    )

    return (
        <div className="space-y-8">
            {/* Progress indicator */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <Badge variant="outline" className="px-3 py-1">
                        Section {currentSectionIndex + 1} of {concepts.length}
                    </Badge>
                    <div className="h-2 w-48 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-green-600 transition-all duration-300"
                            style={{ width: `${((currentSectionIndex + 1) / concepts.length) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-2">

                <h1 className="text-2xl font-bold text-white mb-6">{currentConcept?.title}</h1>
                <div className="text-gray-300 leading-relaxed mb-8">
                    {renderLatex(currentConcept?.description || '', true)}
                </div>
                
                {currentConcept?.keyEquation && (
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 my-8">
                        <BlockMath math={currentConcept.keyEquation} />
                    </div>
                )}

                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-white mb-4">Detailed Explanation</h2>
                    <div className="text-gray-300 leading-relaxed">
                        {renderLatex(currentConcept?.explanation || '', true)}
                    </div>
                </div>

                <div className="mt-12">
                    <Accordion type="single" collapsible className="border-gray-800">
                        <AccordionItem value="practice" className="border-gray-800">
                            <AccordionTrigger className="text-white hover:text-green-400">
                                Practice Questions
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300">
                                No practice questions available for this concept.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

            {/* Exercise Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">Practice Exercises</h2>
                <div className="space-y-6">
                    <Exercise {...exampleExercise} />
                    
                    <Exercise 
                        description="Find the derivative of the following function:"
                        difficulty="easy"
                        solution={{
                            id: "2",
                            steps: [
                                {
                                    id: "1",
                                    explanation: "We'll use the power rule for this polynomial",
                                    stepEquation: "f(x) = x^3 + 2x^2 - 4x + 1"
                                },
                                {
                                    id: "2",
                                    explanation: "Apply the power rule to each term",
                                    stepEquation: "f'(x) = 3x^2 + 4x - 4"
                                }
                            ]
                        }}
                    />
                </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6">
                <Button 
                    variant="outline" 
                    disabled={currentSectionIndex === 0}
                    onClick={() => setCurrentSectionIndex(prev => prev - 1)}
                    className="border-gray-800 hover:bg-gray-800"
                >
                    Previous Section
                </Button>
                <Button 
                    className="bg-green-600 hover:bg-green-700 transition-colors" 
                    onClick={nextSection}
                    disabled={currentSectionIndex >= concepts.length - 1}
                >
                    Next Section
                </Button>
            </div>
        </div>
    )
}
