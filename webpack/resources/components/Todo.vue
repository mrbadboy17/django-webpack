<template>
  <div id="todo" class="uk-width-1-3">
      <h4>Todo app (vue component)</h4>
      <form @submit.prevent="addTodo" class="uk-flex">
        <input type="text" class="uk-input" v-model="todo">
        <input type="submit" value="Add" class="uk-button uk-button-primary">
      </form>
      <ul class="uk-list">
        <li v-for="(todo, i) in todos" :key="i" v-text="todo"></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data() {
    return {
      todos: ['Todo #1', 'Todo #2', 'Todo #3'],
      todo: ''
    }
  },
  methods: {
    addTodo() {
      this.todos.push(this.todo)
      this.todo = ''
    }
  }
}
</script>

<style>

</style>
