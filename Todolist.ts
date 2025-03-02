interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
  }
  
  class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;
  
    addTodo(task: string, dueDate: Date): void {
      if (!task.trim()) {
        console.error("Task description cannot be empty.");
        return;
      }
      if (!(dueDate instanceof Date) || isNaN(dueDate.getTime())) {
        console.error("Invalid due date.");
        return;
      }
  
      const newTodo: TodoItem = {
        id: this.nextId++,
        task,
        completed: false,
        dueDate,
      };
      this.todos.push(newTodo);
    }
  
    completeTodo(id: number): void {
      const todo = this.todos.find((t) => t.id === id);
      if (todo) {
        todo.completed = true;
      } else {
        console.error(`Todo with ID ${id} not found.`);
      }
    }
  
    removeTodo(id: number): void {
      const index = this.todos.findIndex((t) => t.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      } else {
        console.error(`Todo with ID ${id} not found.`);
      }
    }
  
    listTodos(): TodoItem[] {
      return this.todos;
    }
  
    filterTodos(completed: boolean): TodoItem[] {
      return this.todos.filter((t) => t.completed === completed);
    }
  
    updateTodoTask(id: number, newTask: string): void {
      if (!newTask.trim()) {
        console.error("Task description cannot be empty.");
        return;
      }
  
      const todo = this.todos.find((t) => t.id === id);
      if (todo) {
        todo.task = newTask;
      } else {
        console.error(`Todo with ID ${id} not found.`);
      }
    }
  
    clearCompletedTodos(): void {
      this.todos = this.todos.filter((t) => !t.completed);
    }
  }
  
  // Example usage
  const myTodos = new TodoList();
  myTodos.addTodo("Buy groceries", new Date("2025-03-10"));
  myTodos.addTodo("Finish project", new Date("2025-03-05"));
  console.log(myTodos.listTodos());
  