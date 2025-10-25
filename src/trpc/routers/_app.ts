import {z} from 'zod';
import {google} from "@ai-sdk/google";
import {generateText} from "ai";
import { inngest } from '@/inngest/client';
import { 
  baseProcedure,
  createTRPCRouter ,protectedProcedure} from '../init'; 
  import {prisma} from '@/lib/db'

import { log } from 'node:console';
export const appRouter=createTRPCRouter({
  testAi:baseProcedure.mutation(async ()=>{
    await inngest.send({
      name:"execute/ai",


    })
    return {success:true,message:"Job queued"}



  }),

  getWorkflows:baseProcedure.query(({ctx})=>{
 
    
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