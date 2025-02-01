import { z } from 'zod';
import { ObjectId } from 'mongodb';

const CourseSchema = z.object({
    id: z.instanceof(ObjectId), // Primary Key
    title: z.string(),
    teacherId: z.instanceof(ObjectId), // Foreign Key referencing Users
    level: z.array(z.string()), // Can be an array of levels
});

// Export the schema
export type Course = z.infer<typeof CourseSchema>;
export default CourseSchema;
