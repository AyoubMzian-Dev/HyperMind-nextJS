'use client'
import React from 'react'
import { Sidebar, SidebarProvider, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenuItem, } from './ui/sidebar'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'
import { schoolSubjects } from '@/lib/fakeData'
import { useParams } from 'next/navigation'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"





export const LessonSidebar = () => {

    const params = useParams();
    const lessonId = params.lessons as string;



    const findLessonById = () => {
        for (const subject of schoolSubjects) {
            const lesson = subject.lessons.find(lesson => lesson.lessonId === lessonId)
            if (lesson) {
                return lesson
            }
        }
        return null
    }

    const lesson = findLessonById();
    return (
        <div className='max-h-[80%]'>
            <SidebarProvider className='h-80 !important'>
                <Sidebar className='h-[calc(100%-4rem)] w-72 self-end'>
                    <SidebarHeader className='px-4 '>
                        <div className='flex flex-col '>
                            <Badge
                                className='text-[8px] mx-0 w-20 self-end text-center h-6 px-4 bg-none border-specialColor text-specialColor '>
                                {lesson?.lessonSubject}
                            </Badge>
                            <h2 className='text-xl font-bold '>{lesson?.lessonTitle}</h2>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup className='flex flex-col mt-6 px-4'>
                            <h3 className=' text-sm text-easyText font-bold '>COMPELTED {"75"}%</h3>
                            <Progress value={75} className='w-full h-3 bg-darkSpecialColor rounded-full' />
                        </SidebarGroup>
                        <SidebarGroup className='flex flex-col mt-4 px-4'>
                            {
                                lesson ? lesson.lessonSections.map((section, index) => (
                                    // your mapping logic here
                                    <Accordion key={index} type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>
                                                <SidebarMenuItem className='flex list-none m-2 mx-4' >
                                                    <Badge>{++index}</Badge>
                                                    <h2 className='text-base font-bold'>{section.title}</h2>
                                                </SidebarMenuItem>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <SidebarMenuItem className='list-item  m-2  ml-12' >
                                                    <h2 className='text-sm'>{section.exercise}</h2>
                                                </SidebarMenuItem>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                )) : (
                                    <div>No lesson found</div>
                                )
                            }

                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
            </SidebarProvider>
        </div>
    )
}
