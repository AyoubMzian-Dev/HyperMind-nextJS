export interface Lesson {
  lessonId: object;               // Unique identifier for the lesson
  lessonTitle: string;            // Title of the lesson
  lessonDescription: string;      // Short description of the lesson content
  lessonLongTime: string;         // Duration of the lesson (e.g., "45 minutes")
  lessonType: boolean;            // Added lessonType property
  lessonSections: {
    title: string;
    id: string;
    exercise?: {
      title: string;                // Title of the exercise
      description: string;          // Description of the exercise
      questions: {
        id: string;                 // Unique identifier for the question
        question: string;           // The question text
        answer: string;             // The answer to the question
        explanation: string;        // Explanation for the answer
        status: boolean;            // Status of the question
      };
    } | string;                     // Allow exercise to be a string or an object
    status: boolean;
    content: string 
    example?: string[];
    equation?: string

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



