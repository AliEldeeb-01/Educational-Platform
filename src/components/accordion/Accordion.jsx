"use client"
import { LuPlus } from "react-icons/lu";
import { FaMinus } from "react-icons/fa6";
import * as React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import * as AccordionPrimitive from "@radix-ui/react-accordion" 

import { cn } from "../../lib/utils"

// 1. الأب الرئيسي للاكورديون
function Accordion({ className, ...props }) {
  return (
    <AccordionPrimitive.Root
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  )
}

// 2. العناصر الداخلية (العلب)
function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b border-gray-250", className)}
      {...props}
    />
  )
}

// 3. الزرار اللي بندوس عليه (مع السهم اللي بيقلب لوحده)
function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline outline-none text-left cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
        {/* السهم اللي نازل لتحت: بيختفي لما المنيو تفتح بفضل كلاس group-data-[state=open] */}
        <LuPlus
          className="size-4 shrink-0 text-gray-500 transition-transform duration-200 group-data-[state=open]:hidden cursor-pointer" 
        />
        {/* السهم اللي طالع لفوق: بيظهر بس لما المنيو تفتح */}
        <FaMinus 
          className="size-4 shrink-0 text-gray-500 transition-transform duration-200 hidden group-data-[state=open]:block  cursor-pointer" 
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

// 4. المحتوى اللي بيفتح ويقفل (جواه أنيميشن ناعم)
function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden text-sm transition-all [!animation-duration:700ms] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down "
      {...props}
    >
      <div className={cn("pt-0 pb-4 text-gray-500", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }