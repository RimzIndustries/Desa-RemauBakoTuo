'use server';
/**
 * @fileOverview User management flows.
 *
 * - findUserByEmail - A function to find a user by their email address.
 */
import { ai } from '@/ai/genkit';
import { prisma } from '@/lib/prisma';
import { z } from 'genkit';

const UserEmailSchema = z.string().email();

const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  nama: z.string().optional().nullable(),
  password: z.string(),
  role: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export async function findUserByEmail(email: string): Promise<z.infer<typeof UserSchema> | null> {
  return findUserByEmailFlow(email);
}

const findUserByEmailFlow = ai.defineFlow(
  {
    name: 'findUserByEmailFlow',
    inputSchema: UserEmailSchema,
    outputSchema: UserSchema.nullable(),
  },
  async (email) => {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
        return {
            ...user,
            createdAt: user.createdAt.toISOString(),
            updatedAt: user.updatedAt.toISOString(),
        }
    }

    return null;
  }
);
