import {inngest} from "./client";
import {prisma} from "@/lib/db"
export const helloWorld=inngest.createFunction(
  {
    id:"hello-world", 
  },{event:"test/hello.world"},
  async ({ event, step }) => {
    //fetching the video
    await step.sleep("fetching", "5s");  
    //Transcribing the video
    await step.sleep("sending-to-ai", "5s");  
    //sending transcribtion to ai

    await step.sleep("wait-a-moment", "5s");
   await step.run("create-workflow",()=>{ return prisma.workflow.create({
    data:{
      name:"workflow-from-inngest",
    }
   })})
  },
) 