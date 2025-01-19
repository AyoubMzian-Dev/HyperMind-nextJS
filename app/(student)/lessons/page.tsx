import LessonsCard from "@/components/lessonsCard"
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { schoolSubjects, defaultTabValue } from "@/lib/fakeData"

import React, { Fragment } from 'react'

export default function page() {
  return (
    <>
      {/* the lessons list based on the subject  */}
      <Tabs defaultValue={defaultTabValue} className="w-full  " >
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
              <Fragment key={index}>
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
              </Fragment>
            ))}

            {/*
             right side bar with chart that shows the progress in user scoor on each lesson
            */}
            <SidebarProvider >
              <Sidebar side="right" className="lg:mt-1 border-none absolute " >

              </Sidebar>
            </SidebarProvider>
          </TabsContent>
        ))}

      </Tabs>
      
      {/* the right side bar */}

    </>
  )
}
