import React from 'react'
import { TaskCard } from '@/components/taskCard'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



const tasksData = [
  {
    taskTitle: "Complete Science Project",
    taskDescription: "Conduct research and complete the science project on the assigned topic.",
    taskDueDate: "12-28",
    taskStatus: true,
    taskDueTime: "3 hours",
    taskTags: ["science", "project"],
    taskType: "project",
    taskId: 123,
    taskSubject: "Science",
    taskSteps: [
      {
        stepId: 1,
        stepTitle: "Step 1",
        stepState: false
      },
      {
        stepId: 2,
        stepTitle: "Step 2",
        stepState: true
      },
      {
        stepId: 3,
        stepTitle: "Step 3",
        stepState: true
      }
    ],
    taskCreatedDate: "12-01",
    taskStepsCompelted: 2,
    taskAttachments: [
      {
        id: 1,
        name: "file1.pdf",
        description: "this is a test file",
        url: 'linkTest.com'
      },
      {
        id: 2,
        name: "file2.pdf",
        description: "another test file",
        url: 'linkTest2.com'
      }
    ],
    taskLinks: [
      {
        id: 1,
        title: "link1",
        url: 'linkTest.com'
      },
      {
        id: 2,
        title: "link2",
        url: 'linkTest2.com'
      }
    ],
  },
  {
    taskTitle: "Math Homework",
    taskDescription: "Complete the math homework exercises from chapter 5.",
    taskDueDate: "12-30",
    taskStatus: false,
    taskDueTime: "1 hour",
    taskTags: ["math", "homework"],
    taskType: "homework",
    taskId: 124,
    taskSubject: "Math",
    taskSteps: [
      {
        stepId: 1,
        stepTitle: "Solve Equations",
        stepState: false
      },
      {
        stepId: 2,
        stepTitle: "Graph Functions",
        stepState: false
      }
    ],
    taskCreatedDate: "12-02",
    taskStepsCompelted: 1,
    taskAttachments: [
      {
        id: 1,
        name: "math_notes.pdf",
        description: "notes for math homework",
        url: 'math_notes.com'
      }
    ],
    taskLinks: [
      {
        id: 1,
        title: "math_help",
        url: 'math_help.com'
      }
    ],
  },
  {
    taskTitle: "Finish English Essay",
    taskDescription: "Write a well-structured essay on the assigned topic in English class.",
    taskDueDate: "12-25",
    taskStatus: false,
    taskDueTime: "2 hours",
    taskTags: ["english", "essay"],
    taskType: "essay",
    taskId: 125,
    taskSubject: "English",
    taskSteps: [
      {
        stepId: 1,
        stepTitle: "Outline",
        stepState: false
      },
      {
        stepId: 2,
        stepTitle: "Write",
        stepState: false
      },
      {
        stepId: 3,
        stepTitle: "Edit",
        stepState: false
      }
    ],
    taskCreatedDate: "12-02",
    taskStepsCompelted: 1,
    taskAttachments: [
      {
        id: 1,
        name: "english_attachment.pdf",
        description: "additional materials for essay",
        url: 'english_attachment.com'
      }
    ],
    taskLinks: [
      {
        id: 1,
        title: "english_resources",
        url: 'english_resources.com'
      }
    ],
  },
  {
    taskTitle: "Practice Piano for 30 minutes",
    taskDescription: "Practice playing the piano for 30 minutes to improve skills.",
    taskDueDate: "12-24",
    taskStatus: true,
    taskDueTime: "30 minutes",
    taskTags: ["music", "practice"],
    taskType: "practice",
    taskId: 126,
    taskSubject: "Music",
    taskSteps: [
      {
        stepId: 1,
        stepTitle: "Warm-up",
        stepState: false
      },
      {
        stepId: 2,
        stepTitle: "Practice scales",
        stepState: false
      },
      {
        stepId: 3,
        stepTitle: "Play a song",
        stepState: false
      }
    ],
    taskCreatedDate: "12-03",
    taskStepsCompelted: 0,
    taskAttachments: [
      {
        id: 1,
        name: "piano_sheet.pdf",
        description: "sheet music for practice",
        url: 'piano_sheet.com'
      }
    ],
    taskLinks: [
      {
        id: 1,
        title: "music_tips",
        url: 'music_tips.com'
      }
    ],
  },
  {
    taskTitle: "Complete History Homework",
    taskDescription: "Complete the assigned homework in History class.",
    taskDueDate: "12-23",
    taskStatus: false,
    taskDueTime: "1 hour",
    taskTags: ["history", "homework"],
    taskType: "homework",
    taskId: 127,
    taskSubject: "History",
    taskSteps: [
      {
        stepId: 1,
        stepTitle: "Read chapter",
        stepState: false
      },
      {
        stepId: 2,
        stepTitle: "Answer questions",
        stepState: false
      }
    ],
    taskCreatedDate: "12-04",
    taskStepsCompelted: 0,
    taskAttachments: [
      {
        id: 1,
        name: "history_notes.pdf",
        description: "notes for history homework",
        url: 'history_notes.com'
      }
    ],
    taskLinks: [
      {
        id: 1,
        title: "history_help",
        url: 'history_help.com'
      }
    ],
  },
  {
    taskTitle: "Read Chapter 5 in Biology",
    taskDescription: "Read and take notes on Chapter 5 in Biology class.",
    taskDueDate: "12-22",
    taskStatus: true,
    taskDueTime: "1 hour",
    taskTags: ["biology", "reading"],
    taskType: "reading",
    taskId: 128,
    taskSubject: "Biology",
    taskSteps: [
      {
        stepId: 1,
        stepTitle: "Read text",
        stepState: false
      },
      {
        stepId: 2,
        stepTitle: "Take notes",
        stepState: false
      }
    ],
    taskCreatedDate: "12-05",
    taskStepsCompelted: 1,
    taskAttachments: [
      {
        id: 1,
        name: "biology_notes.pdf",
        description: "notes for biology reading",
        url: 'biology_notes.com'
      }
    ],
    taskLinks: [
      {
        id: 1,
        title: "biology_resources",
        url: 'biology_resources.com'
      }
    ],
  },
  {
    taskTitle: "Work on Group Project",
    taskDescription: "Collaborate with group members to work on the assigned project.",
    taskDueDate: "12-21",
    taskStatus: false,
    taskDueTime: "2 hours",
    taskTags: ["group", "project"],
    taskType: "project",
    taskId: 129,
    taskSubject: "Project",
    taskSteps: [
      {
        stepId: 1,
        stepTitle: "Discuss ideas",
        stepState: false
      },
      {
        stepId: 2,
        stepTitle: "Assign roles",
        stepState: false
      },
      {
        stepId: 3,
        stepTitle: "Create presentation",
        stepState: false
      }
    ],
    taskCreatedDate: "12-06",
    taskStepsCompelted: 0,
    taskAttachments: [
      {
        id: 1,
        name: "group_project.pdf",
        description: "materials for group project",
        url: 'group_project.com'
      }
    ],
    taskLinks: [
      {
        id: 1,
        title: "group_project_resources",
        url: 'group_project_resources.com'
      }
    ],
  },]





export default function page() {
  return (
    <div>
        <Tabs defaultValue="cardsView" className="w-full mt-28 flex flex-col">
            <TabsList className='max-w-44 self-end mx-8'>
                <TabsTrigger value="cardsView">cards</TabsTrigger>
                <TabsTrigger value="listView">list</TabsTrigger>
            </TabsList>
            <TabsContent value="cardsView">
                    <section className="flex flex-wrap justify-center">
                        {tasksData.map((task) => (
                            <TaskCard 
                                key={task.taskId}
                                taskTitle={task.taskTitle}
                                taskDescription={task.taskDescription}
                                taskDueDate={task.taskDueDate}
                                taskStatus={task.taskStatus}
                                taskDueTime={task.taskDueTime}
                                taskTags={task.taskTags}
                                taskType={task.taskType}
                                taskId={task.taskId}
                                taskSubject={task.taskSubject}
                                taskSteps={task.taskSteps}
                                taskCreatedDate={task.taskCreatedDate}
                                taskStepsCompelted={task.taskStepsCompelted}
                                taskAttachments={task.taskAttachments}
                                taskLinks={task.taskLinks}
                            />
                        ))}
                    </section>

            </TabsContent>
            <TabsContent value="listView">
                <h1>san of bitch</h1>

                <section>

                </section>
            </TabsContent>
         </Tabs>

        
        
    </div>
  )
}
