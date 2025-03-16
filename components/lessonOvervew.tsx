import { Lesson } from "@/schemas/lessons"
import {
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import Image from "next/image";
import StartButton from "@/components/startButton";
import React from "react";

export default function LessonOvervew(lesson: Lesson) {
    return (
        <AlertDialogContent className="border border-gray-800 bg-gray-950 max-w-4xl p-6">
            <AlertDialogHeader className="mb-6 flex justify-center items-center">
                <AlertDialogTitle className="text-2xl font-bold text-white text-center">{lesson.title}</AlertDialogTitle>
            </AlertDialogHeader>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side - Image and Description */}
                <div className="space-y-4">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-800">
                        <Image
                            src={lesson.imgURL || "/placeholder-lesson.jpg"}
                            alt={`${lesson.title} thumbnail`}
                            className="object-cover"
                            fill
                            priority
                        />
                    </div>
                    <AlertDialogDescription className="text-gray-400 text-base leading-relaxed">
                        {lesson.description}
                    </AlertDialogDescription>
                </div>

                {/* Right side - Questions */}
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Key Questions
                    </h2>
                    <ul className="space-y-3">
                        {lesson.questions.map((question, index) => (
                            <li 
                                key={index}
                                className="flex gap-3 text-gray-300 items-start"
                            >
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center text-sm font-medium">
                                    {index + 1}
                                </span>
                                <span className="text-base">{question}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <AlertDialogFooter className="mt-8 gap-3">
                <AlertDialogCancel className="border-gray-800 hover:bg-gray-800 transition-colors">
                    Cancel
                </AlertDialogCancel>
                <StartButton className="bg-green-600 hover:bg-green-700 transition-colors px-8">
                    {lesson.id}
                </StartButton>
            </AlertDialogFooter>
        </AlertDialogContent>
    );
}