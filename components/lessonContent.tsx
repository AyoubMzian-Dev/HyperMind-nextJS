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

    if (loading) return <div className="p-4">Loading concepts...</div>
    if (error) return <div className="p-4 text-red-500">Error: {error}</div>
    if (concepts.length === 0) return <div className="p-4">No concepts found for this lesson</div>

    return (
        <div className='bg-sidebar h-full m-2 p-6 px-8 lg:w-1/2'>
            <div className='h-full flex items-end flex-col justify-between'>
                <div className='w-full'>
                    <div>
                        <h1 className='text-xl text-normalText mb-4'>{currentConcept?.title}</h1>
                        <p className='text-easyText'>{currentConcept?.description}</p>
                        <h3 className='text-red-500 text-center mt-8'>{currentConcept?.keyEquation}</h3>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-xl text-normalText mb-6'>Explanation:</h1>
                        <p className='text-easyText'>{currentConcept?.explanation}</p>
                    </div>
                    <div className='h-1/3 w-full mt-8'>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Practice Questions</AccordionTrigger>
                                <AccordionContent>
                                    No practice questions available for this concept.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <Button 
                    className='self-end w-fit bg-specialColor hover:bg-specialColorHover' 
                    onClick={nextSection}
                    disabled={currentSectionIndex >= concepts.length - 1}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}
