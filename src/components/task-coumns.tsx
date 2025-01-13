import { Boards } from "@/types";
import BoardColumn from "./board-column";

export default function TaskColumns({ boards }: Boards) {
    return (
        <div className="flex gap-4 p-4">
            {boards.map((board, index) => (
                <div
                    key={index}
                    className="w-80 p-4 min-h-screen]"
                >
                    <h3 className="font-bold mb-4 text-gray-600 dark:text-gray-200">{board.name}</h3>
                    <div>
                        <BoardColumn tasks={board.tasks} name={""} tasksLength={board.tasks.length} />
                    </div>
                </div>
            ))}
        </div>
    );
}