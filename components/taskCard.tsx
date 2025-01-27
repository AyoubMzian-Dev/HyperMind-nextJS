


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"

import { Badge } from "@/components/ui/badge"
import { Progress } from "./ui/progress"
import { ListCheck, Clock4, FileIcon, LinkIcon, CalendarArrowUp } from 'lucide-react';

import Link from "next/link"
import TaskCardAlert from "./taskCardAlert"
// import React, { useState } from 'react';







interface tasksProps {
    taskTitle: string
    taskDescription: string
    taskDueDate: string
    taskStatus: boolean 
    taskType: string
    taskId: number
    taskTags: string[]
    taskDueTime: string
    taskSubject: string
    taskSteps: Steps[]
    taskCreatedDate: string
    taskStepsCompelted: number
    taskAttachments: Attachment[]
    taskLinks: TaskLinks[]
}

interface Steps {
  stepId: number
  stepTitle: string
  stepState: boolean
}

interface Attachment {
  id: number;
  name: string;
  description: string;
  url: string;
}


interface TaskLinks {
    id: number;
    title: string;
    url: string;
}



export function TaskCard({
    taskTitle,
    taskDescription,
    taskDueDate,
    taskStatus,
    taskCreatedDate,
    taskId,
    taskTags,
    taskDueTime,
    taskSubject,
    taskSteps,
    taskStepsCompelted,
    taskAttachments,
    taskLinks,
}: tasksProps
) {
    const taskID = taskId
    const taskStatusColor = taskStatus;
    const taskProgress = taskSteps ? (taskStepsCompelted * 100) / taskSteps.length : 0; 
    const roundedProgress = Math.round(taskProgress);
    // console.log(taskID, taskStatusColor )
    // const [isChecked, setIsChecked] = useState(false)
    console.log(taskStatusColor, taskID)
    // const handleCheckboxChange = ({isItChecked}:{isItChecked: boolean}) => {
    //   setIsChecked( !isChecked)
    // }

  // const CheckboxExample = () => {
  //   const [isChecked, setIsChecked] = useState(false);
  // };

    
  return (<>
    <AlertDialog >
      <AlertDialogTrigger asChild>
        <Card className="w-[350px] transition-colors duration-300 ease-in-out transform hover:cursor-pointer hover:bg-sectionsBackgroundHover bg-sectionsBackground text-normalText border-none flex flex-col justify-between min-h-[250px] m-5">
          <CardHeader className="p-3">
            <div className="flex justify-between items-center">
                <div className="flex items-center ">
                  <h4 className="text-[10px] mr-3 font-normal flex items-center text-specialColor"><ListCheck className="w-4 mr-1.5 "/>Steps: {taskSteps.length || 'task steps'}</h4>
                  <h4 className="text-[10px] mr-3 font-normal flex items-center text-specialColor "><Clock4 className="w-4 mr-1.5"/>{taskDueTime || 'time long task'}</h4>

                </div>
                <div className="flex flex-col">
                  <Badge  className="max-w-16 max-h-5 text-[10px] text-normalText bg-tagsBg">{taskSubject || 'Subject'}</Badge>
                  <h3 className="text-[10px] mt-1 self-end mx-2 text-specialColor flex items-center"><CalendarArrowUp className="mr-1 w-3"/> {taskDueDate || "task "}</h3>
                </div>
            </div>
            <CardTitle className="flex justify-between text-normalText items-start">{taskTitle || 'task title'} </CardTitle>
            <CardDescription className="text-easyText">{taskDescription || "Task description explaining the task or the home work"}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col">
            <h2 className="self-end text-easyText">{roundedProgress}%</h2>
            <Progress value={roundedProgress} className="" />
              
          </CardContent>
          <CardFooter className="flex justify-between">
            <Badge variant="destructive" className="text-normalText bg-tagsBg hover:bg-tagsBgHover font-bold ">tag</Badge>
          </CardFooter>
        </Card>

      </AlertDialogTrigger>
      <AlertDialogContent className="bg-black flex flex-col justify-between border-spacing-px border-gray-500 h-full min-w-2/3  text-normalText">
      <div>
        <AlertDialogHeader className="flex justify-between w-full">
          <div>
            <h3 className="flex items-center"><CalendarArrowUp className="w-4 mr-1.5"/>{taskCreatedDate || "Time created"}</h3>
            <span>
              <AlertDialogTitle className="flex ">{taskTitle || "task Title"}<span className="text-[10px] mx-3 flex items-center font-normal"><Clock4 className="w-4 mr-2" />{taskDueTime || 'time long task'}</span></AlertDialogTitle>
              
              <Badge variant="destructive" className=" max-h-5 text-[10px] text-black text-normalText bg-tagsBg hover:bg-tagsBgHover font-bold">{!taskStatus ? "task done" : "task not completed"} </Badge>
            </span>

          </div>
          <div className="flex ">
            <h2 className="mr-2">Tags: </h2>
            <ul>
              {taskTags.map((tag, index) => (
                <Badge variant="destructive" key={index} className="max-w-16 max-h-5 mx-1 text-[10px] text-black text-normalText bg-tagsBg hover:bg-tagsBgHover font-bold">{tag || 'Done task'}</Badge>
              ))}
            </ul>
          </div>
          <Badge variant="destructive" className="max-w-16 max-h-5 text-[10px] text-normalText bg-tagsBg hover:bg-tagsBgHover font-bold ">{taskSubject || 'Subject'}</Badge>
        </AlertDialogHeader>
        <div className="mt-3 w-full flex ">
          {/* right section */}
          <div className="h-full lg:w-3/5 border-r-[1px] border-gray-500  flex flex-col">
            <AlertDialogDescription className="self-start text-easyText mb-5 lg:max-w-[50%]">
                {taskDescription || "task description"}
                
            </AlertDialogDescription>
            <div>
              <h2>Steps:</h2>
              <ul>
                {taskSteps.map((Step, index)=> (
                    <div key={index} className="flex my-4 items-center space-x-2">
                      <TaskCardAlert stepId={Step.stepId} stepState={Step.stepState} stepTitle={Step.stepTitle} />

                    </div>
                ))}
              </ul>
            </div>
            <div className="flex flex-col  mt-5 max-w-96">
              <h2 className="self-end">{roundedProgress}%</h2>
              <Progress value={roundedProgress} className="" />
            </div>
            <div>
              {}
            </div>
          </div>
          {/* left section */}

          <div className="h-full max-w-full px-4  flex flex-col">
            <h2>Attachment:</h2> 
              <ul className="flex">
                {(taskAttachments || []).map((attachment , index) => (
                  
                    <Button variant="outline" key={index} className="flex my-4 ml-1 transition-colors duration-300 ease-in-out bg-darkSpecialColor border-none hover:bg-specialColor hover:text-normalText items-center space-x-2">
                      <FileIcon className="w-6 h-6" />
                      <h1>{attachment.description || "file name"}</h1>
                    </Button>
                ))}
              </ul>
            <h2>Links:</h2> 
            <ul className="flex">
              {(taskLinks || []).map((link, index) => (
                  <Link href={link.url} key={index} className="flex justify-between transition-colors duration-300 ease-in-out items-center my-4 mr-1 py-2 px-7 rounded-sm bg-darkSpecialColor border-none hover:bg-specialColor hover:text-normalText ml-1 bg-gray">
                    <LinkIcon className="w-4 mr-1" />
                    <h1>{link.title || "link name"}</h1>
                  </Link>
              ))}
            </ul>
          </div>
        </div>
      
      </div>
        <AlertDialogFooter className="">
          <AlertDialogCancel className="hover:bg-specialColorHover border-[2px]  hover:border-[2px] hover:border-solid border-green-500 hover:text-normalText  ">Back</AlertDialogCancel>
          <AlertDialogAction className="bg-specialColor hover:bg-green-700"><Link href={'/startTask'}>Start now</Link></AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    
  </>
  )
}
