
  export interface Lesson {
    lessonId: string;               // Unique identifier for the lesson
    lessonTitle: string;            // Title of the lesson
    lessonDescription: string;      // Short description of the lesson content
    lessonLongTime: string;         // Duration of the lesson (e.g., "45 minutes")
    lessonSections: string[];       // Array of sections or subtopics covered in the lesson
    lessonTags: string[];           // Tags associated with the lesson (e.g., ["algebra", "equations"])
    lessonsImgURL: string;          // URL to the image associated with the lesson
    lessonSubject: string;          // New property to specify the subject of the lesson (e.g., "Math", "History")
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
  






