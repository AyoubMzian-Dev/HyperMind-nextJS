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







const LessonsCard: React.FC<Lesson> = ({
  lessonId,
  lessonTitle,
  lessonDescription,
  lessonSections,
  lessonTags,
  lessonsImgURL,
  className,
    
}: Lesson ) => {

  //the bisic url will be like: /subjects/math/lessonId


  return (
    <Card id={lessonId.toString()} className={ `${className} flex border-[1.5px]  border-gray-800 text-white h-36`}>
      <Image src={ lessonsImgURL } alt=' ' className='bg-gray-950 m-1 rounded-lg' height={50} width={200} />
      <div className='flex flex-col w-full '>

        <CardHeader className='pt-7 flex justify-between w-full  h-1/3 items-center '>


          <div className='  flex items-start'>
            <CardTitle className='text-xl' >{lessonTitle || "lesson title"}</CardTitle>


          </div>
          <span  className=' underline-offset-4 hover:text-green-400 transition delay-100 text-gray-400'>Have a look </span>

        </CardHeader>
        <CardContent className='flex flex-col justify-between pb-0 h-full'>
          <CardDescription className='lg:max-w-[60%] text-start text-md  text-gray-300'> {lessonDescription}</CardDescription>
        </CardContent>
        <CardFooter className='flex justify-between w-full h-1/3 items-center'>
            <div>
              {lessonTags.map((tag, index) => (
                <Badge key={index} variant="secondary" className='m-2 mt-5 font-body   bg-gray-600 max-w-fit'>{tag}</Badge>

              ))}

            </div>
            <Badge className='m-2 mt-5 text-normalText hover:bg-specialColor  bg-specialColor max-w-fit'>Sections: {lessonSections.length}</Badge>
        </CardFooter>
      </div>
    </Card>

  )
}


export default LessonsCard;