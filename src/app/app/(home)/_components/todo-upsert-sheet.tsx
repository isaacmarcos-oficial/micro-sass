"use client"

import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useRef } from "react"
import { useForm } from 'react-hook-form';
import { Todo } from '../types';
import { upsertTodo } from '../actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { upsertTodoSchema } from '../schema';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { title } from 'process';


type TodoUpsertSheetProps = {
  children?: React.ReactNode
  defaultValue?: Todo
}

export function TodoUpsertSheet({ children, defaultValue }: TodoUpsertSheetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(upsertTodoSchema)
  })

  const onSubmit = form.handleSubmit(async (data) => {
    await upsertTodo(data)
    router.refresh()

    ref.current?.click()

    toast({
      title: "Success",
      description: "Your todo has been saved."
    })
  })

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div ref={ref}>{children}</div>
      </SheetTrigger>
      <Form {...form}>
        <SheetContent>
          <form onSubmit={onSubmit} className="space-y-8 h-screen">
            <SheetHeader>
              <SheetTitle>Todo Upsert Form</SheetTitle>
              <SheetDescription>
                Use this form to create or update your todo items. Click save when you're done.
              </SheetDescription>
            </SheetHeader>

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the title of your task" {...field} />
                  </FormControl>
                  <FormDescription>
                    This will be the publicly displayed name for the task.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SheetFooter className='mt-auto'>
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Form>
    </Sheet>
  )
}
