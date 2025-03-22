import LessonsCard from "@/components/lessonsCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import LessonOvervew from "@/components/lessonOvervew"
import React from 'react'
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


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

// const imgURL = "ww2.kqed.org/app/uploads/sites/23/2018/03/iStock-471301626-1180x1180.jpg"
const defaultTabValue:string = "Mathematics"


export default async function page() {

const subjects:[SubjectSchema]  = await getSubjects()
const lessons:[Lesson] = await getLessons()
console.log(defaultTabValue)

  return (
    <main className={"h-[calc(100%-4rem)] w-full mt-20"}>
      {/* the lessons list based on the subject  */}
      <Tabs defaultValue={defaultTabValue} className="w-full justify-center items-center  flex flex-col" >
        {/* the header section for all the subjects */}
        <TabsList className="bprder-solid border-[1px] w-[90%]  border-gray-900 py-6 ">
          {subjects.map((subject, index) => (
            <TabsTrigger  key={index} value={subject.title} className={ " py-2 data-[state=active]:bg-gray-800 hover:border-green-800 border-gray-800"} >{subject.title}</TabsTrigger>
          ))}
        </TabsList>
        {/* the content section for all the subjects  */}
        {subjects.map((subject, index) => (
          <TabsContent key={index} value={subject.title} className={"w-full mt-8 px-4"}>

            {lessons.filter(lesson => lesson.subject === subject.title).map((lesson, index) => (
              <AlertDialog key={index}>
                <AlertDialogTrigger className="lg:w-3/4 ">
                  <LessonsCard
                    className={"bg-gray-900"}
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
                <LessonOvervew {...lesson} />
              </AlertDialog>
            ))}

          </TabsContent>
        ))}

      </Tabs>

      {/* the right side bar */}

    </main>
  )
}
