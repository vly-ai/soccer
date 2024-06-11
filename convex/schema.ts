```typescript
/**
 * Convex Database Schema
 * 
 * This file defines the schema for the Convex database tables.
 * 
 * Table: tasks
 * - Fields:
 *   - text: string - The text description of the task.
 *   - isCompleted: boolean - Whether the task is completed or not.
 * 
 * Purpose: To define the structure of the tasks table used in the 
 * task management application.
 *
 * This schema is used by Convex to generate the necessary 
 * backend infrastructure.
 */

import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
  tasks: defineTable({
    text: s.string(),
    isCompleted: s.boolean(),
  })
});
```

This schema defines a `tasks` table with two fields:
- `text` of type `string`.
- `isCompleted` of type `boolean`.

This will be stored in the `convex/schema.ts` file. All other parts of the project will be automatically updated to use this schema.