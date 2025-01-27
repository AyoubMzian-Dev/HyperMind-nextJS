import LessonsCard from "@/components/lessonsCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { schoolSubjects, defaultTabValue } from "@/lib/fakeData"
import Link from "next/link"

import React, { Fragment } from 'react'

export default function page() {
  return (
    <>
      {/* the lessons list based on the subject  */}
      <Tabs defaultValue={defaultTabValue} className="w-full mt-20 " >
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
              <Link href={`/lessons/${lesson.lessonId}`} key={index}>
                <LessonsCard
                  lessonId={lesson.lessonId}
                  lessonTitle={lesson.lessonTitle}
                  lessonDescription={lesson.lessonDescription}
                  lessonLongTime={lesson.lessonLongTime}
                  lessonSections={lesson.lessonSections}
                  lessonTags={lesson.lessonTags}
                  lessonsImgURL={lesson.lessonsImgURL}
                  lessonSubject={lesson.lessonSubject}
                />
              </Link>
            ))}

            {/*
             right side bar with chart that shows the progress in user scoor on each lesson
            */}
          </TabsContent>
        ))}

      </Tabs>
      
      {/* the right side bar */}

    </>
  )
}
