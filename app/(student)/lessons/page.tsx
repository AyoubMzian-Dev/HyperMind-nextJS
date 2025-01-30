import LessonsCard from "@/components/lessonsCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { schoolSubjects, defaultTabValue } from "@/lib/fakeData"
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








export default function page() {
  return (
    <main>
      {/* the lessons list based on the subject  */}
      <Tabs defaultValue={defaultTabValue} className="w-full mt-20 flex flex-col" >
        {/* the header section for all the subjects */}
        <TabsList className="bg-black  ">
          {schoolSubjects.map((subject, index) => (
            <TabsTrigger key={index} value={subject.name} className="px-6 py-2.5" >{subject.name}</TabsTrigger>
          ))}
        </TabsList>
        {/* the content section for all the subjects  */}
        {schoolSubjects.map((subject, index) => (
          <TabsContent key={index} value={subject.name}>

            {subject.lessons.map((lesson, index) => (
              <AlertDialog key={index}>
                < AlertDialogTrigger className=" h-36 w-2/3 my-6 mx-3" >
                  <LessonsCard
                    lessonId={lesson.lessonId}
                    lessonTitle={lesson.lessonTitle}
                    lessonDescription={lesson.lessonDescription}
                    lessonLongTime={lesson.lessonLongTime}
                    lessonSections={lesson.lessonSections}
                    lessonTags={lesson.lessonTags}
                    lessonsImgURL={lesson.lessonsImgURL}
                    lessonSubject={lesson.lessonSubject}
                    lessonQwastions={lesson.lessonQwastions}
                  />
                </AlertDialogTrigger>

                <AlertDialogContent >
                  <div className="h-full w-full flex">
                  {/* left side */}
                  <AlertDialogHeader className="felx border-r-2 pr-6 h-[100%] flex-col max-w-[50%]">
                    <AlertDialogTitle className="text-xl">{lesson.lessonTitle}</AlertDialogTitle>
                    <Image src={"/notfound.com" || lesson.lessonsImgURL } alt=' ' className='bg-componentBg rounded-lg' height={300} width={500} />
                    <AlertDialogDescription>{lesson.lessonDescription}</AlertDialogDescription>
                  </AlertDialogHeader>

                  {/* right side */}
                  <div className="py-2 px-8">
                    <h1 className="text-xl font-bold mb-4">Some questions will be answered</h1>
                    <ul className="flex flex-col ">
                      {
                        lesson.lessonQwastions.map((Qwastion, index) => (
                          <li className="text-base font-bold my-4" key={index}>{++index}- {Qwastion}</li>
                        ))}
                    </ul>
                    <h1 className="text-xl font-bold mb-6 mt-10">Concepts concluded</h1>
                    <ul >
                      {
                        lesson.lessonSections.map((section, index) => (
                          <li className="text-base font-bold my-4" key={index}>{++index}- {section}?</li>
                        ))
                      }
                    </ul>

                  </div>
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="border-specialColor hover:bg-darkSpecialColor hover:text-white">Cancel</AlertDialogCancel>
                    <StartButton>{lesson.lessonId}</StartButton>
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
