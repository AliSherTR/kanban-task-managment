import { Board } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function BoardColumn({ tasks }: Board) {
  console.log(tasks)
  return (

    <div className="min-h-screen bg-transparent">
      {
        tasks.map((task) => {
          return (
            <div key={task.id} className=" w-full">
              <Dialog key={task.id}  >
                <DialogTrigger className=" w-full text-start">
                  <div className=" px-3 py-4 mb-4 dark:bg-[#2b2c37] dark:text-white cursor-pointer shadow-lg bg-white rounded-lg text-sm">
                    <p className=" font-semibold mb-2">{task.name}</p>
                    <p>1 of 2 subtasks</p>
                  </div>
                </DialogTrigger>
                <DialogContent>
                </DialogContent>
              </Dialog>
            </div>
          );
        })
      }
    </div>
  )
}
