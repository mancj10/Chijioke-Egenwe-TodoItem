"use strict";
class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }
    addTodo(task, dueDate) {
        if (!task.trim()) {
            console.error("Task description cannot be empty.");
            return;
        }
        if (!(dueDate instanceof Date) || isNaN(dueDate.getTime())) {
            console.error("Invalid due date.");
            return;
        }
        const newTodo = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate,
        };
        this.todos.push(newTodo);
    }
    completeTodo(id) {
        const todo = this.todos.find((t) => t.id === id);
        if (todo) {
            todo.completed = true;
        }
        else {
            console.error(`Todo with ID ${id} not found.`);
        }
    }
    removeTodo(id) {
        const index = this.todos.findIndex((t) => t.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
        else {
            console.error(`Todo with ID ${id} not found.`);
        }
    }
    listTodos() {
        return this.todos;
    }
    filterTodos(completed) {
        return this.todos.filter((t) => t.completed === completed);
    }
    updateTodoTask(id, newTask) {
        if (!newTask.trim()) {
            console.error("Task description cannot be empty.");
            return;
        }
        const todo = this.todos.find((t) => t.id === id);
        if (todo) {
            todo.task = newTask;
        }
        else {
            console.error(`Todo with ID ${id} not found.`);
        }
    }
    clearCompletedTodos() {
        this.todos = this.todos.filter((t) => !t.completed);
    }
}
// Example usage
const myTodos = new TodoList();
myTodos.addTodo("Buy groceries", new Date("2025-03-10"));
myTodos.addTodo("Finish project", new Date("2025-03-05"));
console.log(myTodos.listTodos());
