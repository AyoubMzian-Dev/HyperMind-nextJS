import LessonsCard from "@/components/lessonsCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { defaultTabValue } from "@/lib/fakeData"

import React from 'react'
import {
  AlertDialog,

  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from "next/image"
import StartButton from "@/components/startButton"
import { SubjectSchema } from "@/schemas/subject"
import { Lesson } from "@/schemas/lessons"


// GET Lessons
async function getLessons() {
  const res = await fetch("http://localhost:3000/api/lessons", {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch subjects");
  }

  return res.json();
}


// GET Subjects 
async function getSubjects() {
  const res = await fetch("http://localhost:3000/api/subjects", {
    cache: "no-store", // Ensure fresh data on every request
  });

  if (!res.ok) {
    throw new Error("Failed to fetch subjects");
  }

  return res.json();
}

const imgURL = "ww2.kqed.org/app/uploads/sites/23/2018/03/iStock-471301626-1180x1180.jpg"



export default async function page() {

const subjects:[SubjectSchema]  = await getSubjects()
const lessons:[Lesson] = await getLessons()
console.log(lessons, subjects)

  return (
    <main className={"lg:g-[calc(100%-4rem)] mt-20"}>
      {/* the lessons list based on the subject  */}
      <Tabs defaultValue={defaultTabValue} className="w-full mt-2 flex flex-col" >
        {/* the header section for all the subjects */}
        <TabsList className="bg-black  ">
          {subjects.map((subject, index) => (
            <TabsTrigger key={index} value={subject.title} className="px-6 py-2.5" >{subject.title}</TabsTrigger>
          ))}
        </TabsList>
        {/* the content section for all the subjects  */}
        {subjects.map((subject, index) => (
          <TabsContent key={index} value={subject.title}>

            {lessons.filter(lesson => lesson.subject === subject.title).map((lesson, index) => (
              <AlertDialog key={index}>
                <AlertDialogTrigger className="h-36 w-2/3 my-6 mx-3">
                  <LessonsCard
                    lessonType={lesson.type}
                    lessonId={lesson.id}
                    lessonTitle={lesson.title}
                    lessonDescription={lesson.description}
                    lessonLongTime={lesson.longTime.toString()}
                    lessonSections={[]}
                    lessonTags={lesson.tags}
                    lessonsImgURL={lesson.imgURL || "/"}
                    lessonSubject={lesson.subject}
                    lessonQwastions={lesson.questions}
                  />
                </AlertDialogTrigger>

                <AlertDialogContent >
                  <div className="h-full w-full flex">
                  {/* left side */}
                  <AlertDialogHeader className="felx border-r-2 pr-6 h-[100%] flex-col max-w-[50%]">
                    <AlertDialogTitle className="text-xl">{lesson.title}</AlertDialogTitle>
                    <Image 
                      src={lesson.imgURL || ""}
                      alt={`${lesson.title} thumbnail`}
                      className='bg-componentBg rounded-lg'
                      height={300}
                      width={500}
                      priority
                    />
                    <AlertDialogDescription>{lesson.description}</AlertDialogDescription>
                  </AlertDialogHeader>

                  {/* right side */}
                  <div className="py-2 px-8">
                    <h1 className="text-xl font-bold mb-4">Some questions will be answered</h1>
                    <ul className="flex flex-col ">
                      {
                        lesson.questions.map((Qwastion, index) => (
                          <li className="text-base font-bold my-2" key={index}>{++index}- {Qwastion}</li>
                        ))}
                    </ul>
                    

                  </div>
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="border-specialColor hover:bg-darkSpecialColor hover:text-white">Cancel</AlertDialogCancel>
                    <StartButton>{lesson.id}</StartButton>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ))}

            {/*
             right side bar with chart that shows the progress in user scoor on each lesson
            */}
          </TabsContent>
        ))}

      </Tabs>

      {/* the right side bar */}

    </main>
  )
}
