import { TodoManagerWithStorage } from "./TodoManagerWithStorage.js";

export class TodoApp{
    constructor(){
        this.todoManager = new TodoManagerWithStorage(todos);
        this.todoContainerEl = document.querySelector(".todo-container");
        this.titleEl = document.querySelector(".title h2");
        this.plusBtnEl = document.querySelector(".add-todo button");
        this.renderTodos(); this.bindEvents();
    }
}