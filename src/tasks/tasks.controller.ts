import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import type { Task } from './task.model';
import { TaskDto } from './task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Task | undefined {
    return this.tasksService.findOne(+id);
  }

  @Post()
  createTask(@Body() taskDto: TaskDto): Task {
    const newTask = this.tasksService.createTask(taskDto);
    return newTask;
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): boolean {
    return this.tasksService.deleteTask(+id);
  }
}
