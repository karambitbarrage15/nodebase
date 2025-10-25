import {inngest} from "./client";
import {prisma} from "@/lib/db"
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import {createOpenAI} from "@ai-sdk/openai";
import {createAnthropic} from "@ai-sdk/anthropic";
const google=createGoogleGenerativeAI();
const openai=createOpenAI();
const anthropic=createAnthropic();
export const execute=inngest.createFunction(
  {
    id:"execute-ai", 
  },{event:"execute/ai"},
  async ({ event, step }) => {
    await step.sleep("prentend","5s");
    const { steps:geminiSteps }=await step.ai.wrap("gemini-generate-text",generateText,{
      model:google("gemini-2.5-flash"),
      system:"You are a helpful assistant",
      prompt:"What is 2+2",
    });const { steps:openaiSteps }=await step.ai.wrap("openai-generate-text",generateText,{
      model:openai("gpt-4"),
      system:"You are a helpful assistant",
      prompt:"What is 2+2",
    });const { steps:anthropicSteps }=await step.ai.wrap("anthropoic-generate-text",generateText,{
      model:anthropic("claude-haiku-4-5"),
      system:"You are a helpful assistant",
      prompt:"What is 2+2",
    });
    return {
      geminiSteps,openaiSteps,anthropicSteps,
    }
  },
) 