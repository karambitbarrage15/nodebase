"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { authClient } from "@/lib/auth-client";
export const LogoutButton=()=>{
  const router=useRouter();
  return (
    <Button onClick={()=>{
      authClient.signOut({
        fetchOptions:{
          onSuccess:()=>{
            router.push("/login")
          }
        }
      })
    }}>
      Logout
    </Button>
  )
}