import {z} from 'zod';
import { inngest } from '@/inngest/client';
import { 
  createTRPCRouter ,protectedProcedure} from '../init'; 
  import {prisma} from '@/lib/db'

import { log } from 'node:console';
export const appRouter=createTRPCRouter({

  getWorkflows:protectedProcedure.query(({ctx})=>{
 
    
    return prisma.workflow.findMany();}),
    createWorkflow:protectedProcedure.mutation(async()=>{
      await inngest.send({
        name:"test/hello.world",
        data:{
          email:"adityachats6768@gmail.com"
        }
      })
      return {success:true,message:"Job queued"}
    })
});
export type AppRouter=typeof appRouter;