interface Todo {
  text: string;
  done: boolean;
}
export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    add(text: string) {
      this.todos.push({ text, done: false });
    },

    finish(todo: Todo) {
      todo.done = true;
    },
  },
});
