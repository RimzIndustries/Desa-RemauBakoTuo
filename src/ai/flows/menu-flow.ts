'use server';
/**
 * @fileOverview Menu management flows.
 *
 * - getMenuItems - A function to retrieve menu items by menu name.
 */
import { ai } from '@/ai/genkit';
import { prisma } from '@/lib/prisma';
import { z } from 'genkit';

const MenuNameSchema = z.string();

const MenuItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  path: z.string(),
  icon: z.string().optional().nullable(),
  children: z.array(z.lazy(() => MenuItemSchema)).optional(),
});

export type MenuItem = z.infer<typeof MenuItemSchema>;

export async function getMenuItems(menuName: string): Promise<MenuItem[]> {
  return getMenuItemsFlow(menuName);
}

const getMenuItemsFlow = ai.defineFlow(
  {
    name: 'getMenuItemsFlow',
    inputSchema: MenuNameSchema,
    outputSchema: z.array(MenuItemSchema),
  },
  async (menuName) => {
    const menuWithItems = await prisma.menu.findUnique({
      where: { name: menuName },
      include: {
        menuItems: {
          where: { parentId: null }, // Fetch only top-level items
          include: {
            children: { // Fetch second-level items
              include: {
                children: true // Fetch third-level items
              }
            }
          },
          orderBy: {
            // You might want to add an 'order' field to your model to sort them
            createdAt: 'asc' 
          }
        },
      },
    });

    if (!menuWithItems) {
      return [];
    }

    // Helper function to convert Prisma types to Zod schema types
    const formatMenuItems = (items: any[]): MenuItem[] => {
      return items.map(item => ({
        ...item,
        icon: item.icon || undefined,
        children: item.children ? formatMenuItems(item.children) : [],
      }));
    };

    return formatMenuItems(menuWithItems.menuItems);
  }
);
