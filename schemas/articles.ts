import { z } from 'zod';
import { ObjectId } from 'mongodb';

const SectionSchema = z.object({
    id: z.instanceof(ObjectId),
    title: z.string(),
    body: z.string(),
});

const ModuleSchema = z.object({
    id: z.instanceof(ObjectId),
    lessonId: z.instanceof(ObjectId), // Reference to Lessons
    title: z.string(),
    description: z.string(),
    outro: z.string(),
    sections: z.array(SectionSchema), // Array of Section objects
});

// Export the schema
export type Module = z.infer<typeof ModuleSchema>;
export default ModuleSchema;
