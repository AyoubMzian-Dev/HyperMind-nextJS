"use client"
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from './ui/button';




export const LessonArtical = () => {



    const params = useParams();
    const lessonId = params.lessonId as string;



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
    const isPractical = lesson?.lessonType
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);



    const nextSection =() =>{
        const lessonSections = lesson?.lessonSections || [];
        if (currentSectionIndex < lessonSections.length - 1) {
            lessonSections[currentSectionIndex].status = true;
            setCurrentSectionIndex(currentSectionIndex + 1);
        }
    }

    const concept = lesson?.lessonSections[currentSectionIndex];



    return (
        <div className='bg-background h-full m-2 p-6 px-8 lg:w-1/2 '>
            {isPractical ? (
                <div className='h-full flex items-end flex-col justify-between'>
                    <div className='w-full'>

                    <div className=' '>
                        <h1 className='text-xl text-normalText mb-4'>{concept?.title}</h1>
                        <p className='text-easyText'>{concept?.content}</p>
                        <h3 className='text-red-500 text-center mt-8'>{concept?.equation}</h3>
                    </div>
                    <div className='mt-4'>

                        <h1 className='text-xl text-normalText mb-6'>Example:</h1>
                        <div>
                            {concept?.example?.map((step, index) => (
                                <h3 className='flex justify-between my-8  ' key={index}>
                                    <span className='font-bold text-'>Step {++index}</span>
                                    <span className='text-center w-4/5 mr-8 '>{step}</span>
                                </h3>
                            ))}
                        </div>
                    </div>
                    <div className='h1/3 w-full '>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>{typeof concept?.exercise === 'object' ? concept?.exercise.questions.question : ''}</AccordionTrigger>
                                <AccordionContent>
                                {typeof concept?.exercise === 'object' ? concept?.exercise.questions.answer : ''}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                            </div>
                    <Button className='slef-end w-fit ' onClick={() => nextSection()}>Next</Button>
                </div>
            ) : (
                <div className='h-full'>
                   <h1 className='text-lg text-normalText'>{lesson?.lessonTitle}</h1>
                   <p className='text-easyText text-sm '>{lesson?.lessonDescription}</p>

                   <div className='mt-16'>
                    {lesson?.lessonSections.map((section, index) => (
                        <div key={index}>
                            <h1 className='text-base text-normalText mt-4'>{section.title}</h1>
                            <p className='text-easyText text-sm'>{section.content}</p>
                            </div>
                            ))}
                   </div>

                </div>
            )}
        </div>
    )
}
