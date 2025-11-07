import { Prisma } from "@prisma/client";

export class TaskModel {
  static get = {
    all: async () => {
      try {
        const tasks = await prisma?.task.findMany();
        return tasks;
      } catch (error) {
        console.log(error);
      }
    },
  };

  static create = {
    task: async ({ name, completed }) => {
      try {
        const newTask = await prisma?.task.create({
          data: { name, completed },
        });
        return newTask;
      } catch (error) {
        console.log(error);
      }
    },
  };
}
