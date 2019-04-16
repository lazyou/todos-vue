<template>
  <div>
    <Todo
      v-for="todo in todos"
      v-bind:key="todo.id"
      v-bind:userList="users"
      v-bind:todoItem="todo">
    </Todo>

    <Todo
      v-bind:key="dotoInit.id"
      v-bind:userList="users"
      v-bind:todoItem="dotoInit">
    </Todo>
  </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
  components: {
    Todo
  },

  data () {
    return {
      users: [
        {
          id: 1,
          name: '林某某'
        },
        {
          id: 2,
          name: '王某某'
        },
        {
          id: 3,
          name: '陈某某'
        }
      ],

      dotoInit: {
        id: 0,
        name: '',
        is_done: false,
        user_id: null,
        expect_done_at: ''
      },

      todos: [
        {
          id: 1,
          name: '某某任务1',
          is_done: true,
          user_id: 1,
          expect_done_at: '2019-04-12'
        },
        {
          id: 2,
          name: '某某任务2',
          is_done: false,
          user_id: 2,
          expect_done_at: ''
        },
        {
          id: 3,
          name: '某某任务3',
          is_done: false,
          user_id: null,
          expect_done_at: '2019-11-12'
        }
      ]
    }
  }
}
</script>

<style>

</style>
