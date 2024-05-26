import AppLayout from "@/pages/applayout";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

export function Desk() {
  return (
    <div className="w-screen h-screen rounded-sm flex flex-col overflow-hidden">
      <AppLayout /> 
      <Toaster />
    </div>
  )
}
