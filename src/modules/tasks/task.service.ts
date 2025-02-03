import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Task as TaskEntity } from './entities/task.entity';
import { GetTaskFilter } from './types/task.type';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private tasksRepository: Repository<TaskEntity>,
    private dataSource: DataSource,
  ) {}

  findAll({ filter }: { filter: GetTaskFilter }): Promise<TaskEntity[]> {
    console.log({ filter });
    return this.tasksRepository.find({ where: filter });
  }

  findOne(id): Promise<TaskEntity | null> {
    return this.tasksRepository.findOneBy({ id });
  }

  async delete(id) {
    return this.tasksRepository.update(id, { isDeleted: false });
  }

  async createTask(task: TaskEntity) {
    const taskInstance = this.tasksRepository.create(task);
    return this.tasksRepository.save(taskInstance);
  }

  async updateTask(task: TaskEntity) {
    return this.tasksRepository.update(task.id, task);
  }
}
