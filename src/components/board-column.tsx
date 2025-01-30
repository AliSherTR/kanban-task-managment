import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Task } from "@/types";

interface BoardColumnProps {
  tasks: Task[];
  onDragStart: (taskId: number) => (event: React.DragEvent<HTMLDivElement>) => void;
}

export default function BoardColumn({ tasks, onDragStart }: BoardColumnProps) {
  return (
    <div className="min-h-screen bg-transparent">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="w-full"
          draggable
          onDragStart={onDragStart(task.id)}
        >
          <Dialog key={task.id}>
            <DialogTrigger className="w-full text-start">
              <div className="px-3 py-4 mb-4 dark:bg-[#2b2c37] dark:text-white cursor-pointer shadow-lg bg-white rounded-lg text-sm">
                <p className="font-semibold mb-2">{task.name}</p>
                <p>1 of 2 subtasks</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>{task.name}</DialogTitle>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
}
