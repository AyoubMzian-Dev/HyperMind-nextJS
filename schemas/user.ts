import { z } from 'zod';
import { ObjectId } from 'mongodb';

const UserSchema = z.object({
    id: z.instanceof(ObjectId), // Primary Key
    name: z.string(),
    email: z.string().email().refine((val) => val.length > 0, {
        message: "Email cannot be empty",
    }), // Unique email handled at the database level
    num: z.string(),
    passwordHash: z.string(),
    role: z.enum(['student', 'admin']),
    level: z.string().optional().refine((val) => val === undefined || val.length > 0, {
        message: "Level is only for students",
    }),
    profilePicture: z.string().url(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

// Export the schema
export type User = z.infer<typeof UserSchema>;
export default UserSchema;
