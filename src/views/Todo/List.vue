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
import http from '@/utils/http'
import Todo from './Item'

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
      ]
    }
  },

  mounted () {
    http.run({
      url: '/todos.php',
      method: 'GET',
      handleThen: this.initTodos()
    })

    http.run({
      url: '/users.php',
      method: 'GET',
      handleThen: this.initUsers()
    })
  },

  methods: {
    initTodos () {
      return (response) => {
        this.todos = response.data
      }
    },

    initUsers () {
      return (response) => {
        this.users = response.data
      }
    }
  }
}
</script>
