import { z } from 'zod';
import { ObjectId } from 'mongodb';

const LessonSchema = z.object({
    id: z.instanceof(ObjectId), // Primary Key
    title: z.string().min(1), // Required string
    description: z.string().min(1), // Required string
    type: z.boolean(), // Practical or Non-Practical
    status: z.boolean(), // Required boolean
    subject: z.enum([
        "Physics", "Chemistry", "English", "Arabic", 
        "Mathematics", "Biology", "History", 
        "Geography", "Philosophy"
    ]), // Enum for subject names
    questions: z.array(z.string()).default([]), // Array of questions
    imgURL: z.string().url().optional(), // Image URL (optional)
    tags: z.array(z.string()).default([]), // Tags array
    longTime: z.number().int().nonnegative().default(0), // Time in minutes
});

// Export the schema
export type Lesson = z.infer<typeof LessonSchema>;
export default LessonSchema;
