import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { TaskDto } from './task.dto';

@Injectable()
export class TasksService {
  // Starter tasks
  private readonly tasks: Task[] = [
    {
      id: 1,
      title: 'Setup project repository',
      description:
        'Initialize a new Git repository and push the starter NestJS project.',
      status: TaskStatus.OPEN,
    },
    {
      id: 2,
      title: 'Implement authentication',
      description: 'Create user sign-up and login functionality with JWT.',
      status: TaskStatus.IN_PROGRESS,
    },
    {
      id: 3,
      title: 'Write unit tests',
      description: 'Add tests for service and controller layers.',
      status: TaskStatus.DONE,
    },
  ];
  findAll(): Task[] {
    return this.tasks;
  }
  findOne(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }
  createTask(taskDto: TaskDto): Task {
    const task = { ...taskDto } as Task;
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
    return task;
  }
  deleteTask(id: number): boolean {
    const initialLength = this.tasks.length;
    this.tasks.filter((task) => task.id !== id);
    return this.tasks.length < initialLength;
  }
}
