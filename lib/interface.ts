export interface Lesson {
  lessonId: string;               // Unique identifier for the lesson
  lessonTitle: string;            // Title of the lesson
  lessonDescription: string;      // Short description of the lesson content
  lessonLongTime: string;         // Duration of the lesson (e.g., "45 minutes")
  lessonSections: {
    title: string;
    id: string;
    exercise: string;
    status: boolean;
  }[];
  lessonTags: string[];           // Tags associated with the lesson (e.g., ["algebra", "equations"])
  lessonsImgURL: string;          // URL to the image associated with the lesson
  lessonSubject: string;          // New property to specify the subject of the lesson (e.g., "Math", "History")
  lessonQwastions: string[];      // List of questions covered in the lesson
}

export interface SchoolSubject {
  id: number;
  name: string;
  teacher: string;
  lessonsCount: number;
  averageExamScore: number;
  completedLessons: number;
  lessons: Lesson[];
}

export interface FormData {
  taskTitle: string;
  taskDescription: string;
  taskDueDate: string;
  taskDueTime: string;
  taskType: string;
  taskSubject: string;
  taskStatus: boolean;
  taskSteps: {
    stepId: number;
    stepTitle: string;
    stepState: boolean;
  }[];
  taskTags: string;
  taskAttachments: {
    id: number;
    name: string;
    description: string;
    url: string;
  }[];
  taskLinks: {
    id: number;
    title: string;
    url: string;
  }[];
}



