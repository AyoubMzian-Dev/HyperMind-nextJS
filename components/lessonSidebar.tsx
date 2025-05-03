'use client'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'
import { useParams } from 'next/navigation'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useState } from 'react'
import { ConceptType } from '@/schemas/concepts'
import { Skeleton } from "@/components/ui/skeleton"

export const LessonSidebar = () => {
    const [concepts, setConcepts] = useState<ConceptType[]>([])  
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    
    const params = useParams();
    const lessonId = params.lessonId as string;
    
    useEffect(() => {
        const fetchConcepts = async () => {
            setLoading(true)
            try {
                const res = await fetch(`/api/concepts?lessonId=${lessonId}`, { cache: 'no-store' });
                if (!res.ok) throw new Error(`Failed to fetch concepts: ${res.status}`)
                const data = await res.json();
                setConcepts(Array.isArray(data) ? data : []);
            } catch (error) {
                setError(error instanceof Error ? error.message : "Unknown error");
            } finally {
                setLoading(false)
            }
        };
        
        fetchConcepts();
    }, [lessonId]);
    
    // Calculate completion percentage (placeholder logic)
    const completionPercentage = 0;
    
    if (loading) {
        return (
            <div className="p-6 space-y-6">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-32 w-full" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 text-red-400">
                Error: {error}
            </div>
        );
    }

    return (
        <div className="h-[calc(100vh-5rem)] w-80 fixed overflow-y-auto">
            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="space-y-4">
                    <Badge className="bg-green-600/10 text-green-400 hover:bg-green-600/20 transition-colors">
                        Current Lesson
                    </Badge>
                    <h2 className="text-xl font-semibold text-white">Lesson Overview</h2>
                </div>

                {/* Progress Section */}
                <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-green-400 font-medium">{completionPercentage}%</span>
                    </div>
                    <Progress value={completionPercentage} className="h-2 bg-gray-800" />
                </div>

                {/* Concepts List */}
                <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                        Lesson Contents
                    </h3>
                    <Accordion type="single" collapsible className="space-y-2">
                        {concepts.map((concept, index) => (
                            <AccordionItem 
                                key={concept.lessonId || index} 
                                value={`concept-${index}`}
                                className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/50"
                            >
                                <AccordionTrigger className="px-4 py-3 hover:bg-gray-800/50 transition-colors">
                                    <div className="flex items-center gap-3 text-left">
                                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center text-sm font-medium">
                                            {index + 1}
                                        </span>
                                        <span className="text-sm font-medium text-gray-200">
                                            {concept.title}
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-4 py-3 text-sm text-gray-400 bg-gray-900/30">
                                    {concept.description}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
