import TaskColumns from "@/components/task-coumns";
// import { useParams } from "react-router-dom"


// we will get all the boards here
// then pass them down as props

const boards = [
  {
    name: "To Do",
    tasksLength: 3,
    tasks: [
      { id: 1, name: "Buy Groceries" },
      { id: 2, name: "Clean the House" },
      { id: 3, name: "Prepare Dinner" },
    ],
  },
  {
    name: "In Progress",
    tasksLength: 3,
    tasks: [
      { id: 4, name: "Work on Project" },
      { id: 5, name: "Attend Meeting" },
      { id: 6, name: "Fix Bugs" },
    ],
  },
  {
    name: "Done",
    tasksLength: 3,
    tasks: [
      { id: 7, name: "Complete Homework" },
      { id: 8, name: "Read a Book" },
      { id: 9, name: "Exercise" },
    ],
  },
];

export default function BoardPage() {
    // const { name } = useParams();
    // to do fetch the boards using the name in the url
  return (
   <TaskColumns boards={boards} />
  )
}
