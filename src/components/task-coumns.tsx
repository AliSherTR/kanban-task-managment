import React, { useState } from "react";
import { Board } from "@/types";
import BoardColumn from "./board-column";

export default function TaskColumns({ boards: initialBoards }: { boards: Board[] }) {
    const [boards, setBoards] = useState<Board[]>(initialBoards);

    const handleTaskDrop = (
        sourceBoardIndex: number,
        targetBoardIndex: number,
        taskId: number
    ) => {
        const sourceBoard = boards[sourceBoardIndex];
        const targetBoard = boards[targetBoardIndex];
        const task = sourceBoard.tasks.find((t) => t.id === taskId);

        if (!task) return;

        setBoards((prevBoards) => {
            const updatedBoards = [...prevBoards];
            updatedBoards[sourceBoardIndex].tasks = sourceBoard.tasks.filter(
                (t) => t.id !== taskId
            );
            updatedBoards[targetBoardIndex].tasks = [...targetBoard.tasks, task];
            return updatedBoards;
        });
    };

    return (
        <div className="flex gap-4 p-4">
            {boards.map((board, index) => (
                <div
                    key={index}
                    className="w-80 p-4 min-h-screen"
                    onDragOver={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
                    onDrop={(e: React.DragEvent<HTMLDivElement>) => {
                        const taskId = Number(e.dataTransfer.getData("taskId"));
                        const sourceBoardIndex = Number(e.dataTransfer.getData("sourceBoard"));
                        handleTaskDrop(sourceBoardIndex, index, taskId);
                    }}
                >
                    <h3 className="font-bold mb-4 text-gray-600 dark:text-gray-200">
                        {board.name}
                    </h3>
                    <BoardColumn
                        tasks={board.tasks}
                        onDragStart={(taskId: number) => (e: React.DragEvent<HTMLDivElement>) => {
                            e.dataTransfer.setData("taskId", taskId.toString());
                            e.dataTransfer.setData("sourceBoard", index.toString());
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
