export interface Task {
  id: number;
  name: string;
}

export interface Board {
  name: string;
  tasksLength: number;
  tasks: Task[];
}

export type Boards = {
  boards: Board[];
} 