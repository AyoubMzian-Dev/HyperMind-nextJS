'use client'
// import React, { useState } from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    // SheetHeader,
    // SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
// import { schoolSubjects } from "@/lib/fakeData";
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

// import {FormData} from '@/lib/interface'





// Define the props interface
interface SideBarFormProps {
    children: React.ReactNode; // The type for children props
}

const taskSchema = z.object({
    taskTitle: z.string().min(1, "Title is required"),
    taskDescription: z.string(),
    taskDueDate: z.string(),
    taskDueTime: z.string(),
    taskType: z.string(),
    taskSubject: z.string(),
    taskStatus: z.boolean(),
    taskSteps: z.array(z.object({
        stepId: z.number(),
        stepTitle: z.string(),
        stepState: z.boolean()
    })),
    taskTags: z.string(),
    taskAttachments: z.array(z.object({
        id: z.number(),
        name: z.string(),
        description: z.string(),
        url: z.string()
    })),
    taskLinks: z.array(z.object({
        id: z.number(),
        title: z.string(),
        url: z.string()
    }))
});

// type TaskFormData = z.infer<typeof taskSchema>;

const TaskForm: React.FC<SideBarFormProps> = ({ children }) => {

    const form = useForm<z.infer<typeof taskSchema>>({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            taskTitle: "",
            taskDescription: "",
            taskDueDate: "",
            taskDueTime: "",
            taskType: "",
            taskSubject: "",
            taskStatus: false,
            taskSteps: [
                { stepId: 1, stepTitle: "", stepState: false },

            ],
            taskTags: "",
            taskAttachments: [{ id: 1, name: "", description: "", url: "" }],
            taskLinks: [{ id: 1, title: "", url: "" }],
        },
    })
    // const [taskData, setTaskData] = useState<FormData>({
    //     taskTitle: "",
    //     taskDescription: "",
    //     taskDueDate: "",
    //     taskDueTime: "",
    //     taskType: "",
    //     taskSubject: "",
    //     taskStatus: false,
    //     taskSteps: [
    //         { stepId: 1, stepTitle: "Discuss ideas", stepState: false },
    //         { stepId: 2, stepTitle: "Assign roles", stepState: false },
    //         { stepId: 3, stepTitle: "Create presentation", stepState: false },
    //     ],
    //     taskTags: "",
    //     taskAttachments: [{ id: 1, name: "", description: "", url: "" }],
    //     taskLinks: [{ id: 1, title: "", url: "" }],
    // });

    // const handleInputChange = (field: string, value: any) => {
    //     setTaskData((prev) => ({ ...prev, [field]: value }));
    // };

    // const handleStepChange = (stepId: number, checked: boolean) => {
    //     setTaskData((prev) => ({
    //         ...prev,
    //         taskSteps: prev.taskSteps.map((step) =>
    //             step.stepId === stepId ? { ...step, stepState: checked } : step
    //         ),
    //     }));
    // };

    const handleSubmit = (values: z.infer<typeof taskSchema>) => {
        // e.preventDefault();
        console.log("Task Data Submitted: ", values);
    };

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const isAtTop = target.scrollTop === 0;
        const isAtBottom =
            Math.abs(target.scrollHeight - target.scrollTop - target.clientHeight) < 1;

        // You can add custom logic here based on scroll position
        // For example, adding shadow when not at top
        const content = target.querySelector('[data-radix-scroll-content]');
        if (content) {
            if (isAtTop) {
                content.classList.remove('shadow-top');
            } else {
                content.classList.add('shadow-top');
            }

            if (isAtBottom) {
                content.classList.remove('shadow-bottom');
            } else {
                content.classList.add('shadow-bottom');
            }
        }
    };

    return (
        <Sheet  >
            <SheetTrigger className="bg-green-600 flex rounded-lg py-2 px-1.5 text-gray-200 hover:bg-green-700">
                {children}
            </SheetTrigger>
            <SheetContent
                onScrollCapture={handleScroll}
                className="text-white w-1/2 pt-6 bg-sidebar border-none overflow-y-auto"
            >
                <Form {...form}>
                    <form   onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col ">
                        <SheetClose>
                            <Button type="submit" className="self-end">Save Task</Button>
                        </SheetClose>
                        <FormField
                            control={form.control}
                            name="taskTitle"
                            render={({ field }) => (
                                <FormItem className="flex justify-between items-center mt-16 mx-6 mr-10 ">
                                    <FormLabel className="text-lg self-center ">Task Title :</FormLabel>
                                    <FormControl  className="max-w-[60%]">
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>



                {/* <form onSubmit={handleSubmit} className="space-y-6 p-4">
                    <SheetHeader className="flex flex-row justify-between p-4">
                        <SheetTitle>Create New Task</SheetTitle>
                        <SheetClose type="submit" className="text-normalText bg-specialColor hover:bg-specialColorHover px-6 py-2 rounded-md">

                                Save
                            
                        </SheetClose>
                    </SheetHeader>


                    <div>
                        <label className="block text-sm font-medium mb-1">Task Title</label>
                        <Input
                            value={taskData.taskTitle}
                            onChange={(e) => handleInputChange("taskTitle", e.target.value)}
                            placeholder="Enter task title"
                            className="block w-full p-2 pl-10 text-sm text-normalText bg-specialColorHover border-specialColor border-[2px]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Task Description</label>
                        <Textarea
                            value={taskData.taskDescription}
                            onChange={(e) => handleInputChange("taskDescription", e.target.value)}
                            placeholder="Describe the task"
                            className="block w-full p-2 pl-10 text-sm text-normalText bg-specialColorHover border-specialColor border-[2px]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Due Date</label>
                        <Input
                            type="date"
                            value={taskData.taskDueDate}
                            onChange={(e) => handleInputChange("taskDueDate", e.target.value)}
                            className="block w-full p-2 pl-10 text-sm text-normalText bg-specialColorHover border-specialColor border-[2px]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Due Time</label>
                        <Input
                            value={taskData.taskDueTime}
                            onChange={(e) => handleInputChange("taskDueTime", e.target.value)}
                            placeholder="e.g., 2 hours"
                            className="block w-full p-2 pl-10 text-sm text-normalText bg-specialColorHover border-specialColor border-[2px]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Task Type</label>
                        <Input
                            value={taskData.taskType}
                            onChange={(e) => handleInputChange("taskType", e.target.value)}
                            placeholder="e.g., project"
                            className="block w-full p-2 pl-10 text-sm text-normalText bg-specialColorHover border-specialColor border-[2px]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Task Subject</label>
                        <Select onValueChange={(value) => handleInputChange("taskSubject", value)}>
                            <SelectTrigger className="mt-2 border-specialColor bg-specialColorHover border-[2px]">
                                <SelectValue placeholder="Subject" />
                            </SelectTrigger>
                            <SelectContent>
                                {schoolSubjects.map((subject: { name: string }) => (
                                    <SelectItem key={subject.name} value={subject.name}>
                                        {subject.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Task Tags</label>
                        <Input
                            value={taskData.taskTags}
                            onChange={(e) => handleInputChange("taskTags", e.target.value)}
                            placeholder="Enter tags separated by commas"
                            className="block w-full p-2 pl-10 text-sm text-normalText bg-specialColorHover border-specialColor border-[2px]"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm font-medium mb-2">Task Steps</h3>
                        {taskData.taskSteps.map((step) => (
                            <div key={step.stepId} className="flex items-center gap-2">
                                <Checkbox
                                    checked={step.stepState}
                                    onCheckedChange={(checked) => handleStepChange(step.stepId, !!checked)}
                                />
                                <span>{step.stepTitle}</span>
                            </div>
                        ))}
                    </div>


                </form> */}
            </SheetContent>
        </Sheet>
    );
};

export default TaskForm;
