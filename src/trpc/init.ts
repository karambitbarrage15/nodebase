import { initTRPC } from '@trpc/server';
import { headers } from 'next/headers';
import { TRPCError } from '@trpc/server';
import { auth } from '@/lib/auth';
export const createTRPCContext = async () => {
  return { userId: 'user123' };
};

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const protectedProcedure=baseProcedure.use(async({ctx,next})=>{
  const session=await auth.api.getSession({
    headers:await headers(),
  });
  if(!session) {
    throw new TRPCError({
      code:"UNAUTHORIZED",
      message:"Unauthorized"
    })
  } 
  return next({
    ctx:{...ctx,auth:session}
  });
})
