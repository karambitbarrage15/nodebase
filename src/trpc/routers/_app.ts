import {z} from 'zod';
import { baseProcedure,
  createTRPCRouter } from '../init'; 
  import {prisma} from '@/lib/db'
import { HelpCircle } from 'lucide-react';
export const appRouter=createTRPCRouter({

  getUsers:baseProcedure.query(()=>{return prisma.user.findMany();}),
});
export type AppRouter=typeof appRouter;