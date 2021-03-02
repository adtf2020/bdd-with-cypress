export class App {

  constructor() {
    this.heading = 'Tâches';
    this.todos = [];
    this.todoDescription = '';
    this.categories = ['Personnel', 'Professionnel'];
    this.selectedCategory = '';
  }

  addTodo() {
    if (this.todoDescription) {
      this.todos.push({
        description: this.todoDescription,
        done: false,
        category: this.selectedCategory
      });
      this.todoDescription = '';
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
