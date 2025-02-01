'use client'
import { Sidebar, SidebarProvider, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenuItem } from './ui/sidebar'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'
// import { schoolSubjects } from '@/lib/fakeData'
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
            try {
                const res = await fetch(`/api/concepts?lessonId=${lessonId}`, { cache: 'no-store' });
                
                if (!res.ok) throw new Error(`Failed to fetch concepts: ${res.status}`);
                
                const data = await res.json();
                setConcepts(Array.isArray(data) ? data : []);
            } catch (error) {
                setError(error instanceof Error ? error.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        };
        
        fetchConcepts();
    }, [lessonId]);
    
    // Calculate completion percentage (placeholder logic)
    const completionPercentage = 75;
    
    if (loading) {
        return (
            <div className="p-4 space-y-4">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
            </div>
        );
    }

    
    return (
        <div>
            <SidebarProvider className='h-80 !important'>
                <Sidebar className='h-[calc(100%-4rem)] w-72 self-end'>
                    <SidebarHeader className='px-4'>
                        <div className='flex flex-col'>
                            <Badge className='text-[8px] mx-0 w-20 self-end text-center h-6 px-4 bg-none border-specialColor text-specialColor'>
                                subject
                            </Badge>
                            <h2 className='text-xl font-bold'>lesson title</h2>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup className='flex flex-col mt-6 px-4'>
                            <h3 className='text-sm text-easyText font-bold'>COMPLETED {completionPercentage}%</h3>
                            <Progress value={completionPercentage} className='w-full h-3 bg-darkSpecialColor rounded-full' />
                        </SidebarGroup>
                        <SidebarGroup className='flex flex-col mt-4 px-4'>
                            {concepts.length > 0 ? (
                                concepts.map((concept, index) => (
                                    <Accordion key={concept.lessonId || index} type="single" collapsible>
                                        <AccordionItem value={`item-${index}`}>
                                            <AccordionTrigger>
                                                <SidebarMenuItem className='flex list-none m-2 mx-4'>
                                                    <Badge>{index + 1}</Badge>
                                                    <h2 className='text-base font-bold'>{concept.title}</h2>
                                                </SidebarMenuItem>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <SidebarMenuItem className='list-item m-2 ml-12'>
                                                    <h2 className='text-sm'>{concept.description}</h2>
                                                </SidebarMenuItem>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                ))
                            ) : (
                                <div className="p-4 text-gray-500">No concepts found for this lesson</div>
                            )}
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
            </SidebarProvider>
        </div>
    )
}
