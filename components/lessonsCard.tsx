import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import React from 'react'
import { Lesson } from '@/lib/interface'


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'






const LessonsCard: React.FC<Lesson> = ({
  lessonId,
  lessonTitle,
  lessonDescription,
  lessonSections,
  lessonTags,
  lessonsImgURL,
  lessonSubject,
}) => {

  //the bisic url will be like: /subjects/math/lessonId


  return (
    <Card id={lessonId} className='flex bg-sectionsBackground border-none text-normalText h-36  '>
      <Image src={"/notfound.com" || lessonsImgURL } alt=' ' className='bg-componentBg rounded-lg' height={50} width={200} />
      <div className='flex flex-col w-full pt-3'>

        <CardHeader className='pt-0 flex justify-between w-full  h-1/3 items-center '>


          <div className='flex items-start'>
            <CardTitle >{lessonTitle || "lesson title"}</CardTitle>
            <Badge variant="outline" className='mx-4 outline-none border-[2px] border-specialColorHover text-specialColor '>{lessonSubject.split(" ").slice(0, 1).join(" ")}</Badge>

          </div>
          <span  className=' underline-offset-4 hover:underline text-specialColor'>Have a look</span>

        </CardHeader>
        <CardContent className='flex flex-col justify-between pb-0 h-full'>
          <CardDescription className='max-w-96  text-easyText'>{lessonDescription}</CardDescription>
        </CardContent>
        <CardFooter className='flex justify-between w-full h-1/3 items-center'>
            <div>
              {lessonTags.map((tag, index) => (
                <Badge key={index} variant="secondary" className='m-2 mt-5 text-normalText hover:bg-specialColor  bg-specialColor max-w-24'>{tag}</Badge>

              ))}

            </div>
            <Badge className='m-2 mt-5 text-normalText hover:bg-specialColor  bg-specialColor max-w-24'>Sections: {lessonSections.length}</Badge>
        </CardFooter>
      </div>
    </Card>

  )
}


export default LessonsCard;