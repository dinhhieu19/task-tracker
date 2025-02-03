import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from './entities/task.entity';
import { TaskService } from './task.service';
import { GetTaskFilter } from './types/task.type';

@Controller('task')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Post('')
  createTask(@Body() createTaskDTO: Task) {
    console.log({ createTaskDTO });
    this.taskService.createTask(createTaskDTO);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    console.log({ id });
    return this.taskService.delete(id);
  }

  @Put(':id')
  updateTask(@Param('id') id: number, @Body() task: Task) {
    return this.taskService.updateTask({ ...task, id });
  }

  @Get('all')
  async getAll(@Body() filter: GetTaskFilter) {
    return this.taskService.findAll({ filter });
  }
}
