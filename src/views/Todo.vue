<template>
  <div style="line-height: 60px;">
    <!-- todo 输入框 -->
    <el-input
      v-model="todo.name"
      :disabled="!isCanEdit"
      ref="todoName"
      placeholder="请输入内容">

      <!-- todo 左边操作 -->
      <el-checkbox
        slot="prepend"
        v-model="todo.is_done">
      </el-checkbox>

      <el-select
        slot="prepend"
        filterable
        v-model="todo.user_id"
        placeholder="请选择"
        style="width: 90px; margin-right: 0px;">
        <el-option
          v-for="user in users"
          :key="user.id"
          :label="user.name"
          :value="user.id">
        </el-option>
      </el-select>

      <el-date-picker
        slot="prepend"
        v-model="todo.expect_done_at"
        type="date"
        placeholder="截止日期"
        style="width: 140px;">
      </el-date-picker>

      <!-- todo 右边操作  -->
      <el-button
        slot="append"
        v-if="!isCanEdit"
        @click="setIsCanEdit(todo.id, true)"
        style="padding: 10px;"
        icon="el-icon-edit">
      </el-button>

      <el-button
        slot="append"
        v-if="isCanEdit"
        @click="saveTodo(todo.id)"
        style="padding: 10px;"
        icon="el-icon-check">
      </el-button>

      <el-button
        slot="append"
        v-if="isCanEdit"
        @click="cancelTodo(todo.id)"
        style="padding: 10px;"
        icon="el-icon-close">
      </el-button>

      <el-button
        slot="append"
        v-if="isCanEdit"
        @click="deleteTodo(todo.id)"
        style="padding: 10px;"
        icon="el-icon-delete">
      </el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  props: {
    userList: Array,
    // 待办项对象(单条)
    todoItem: Object,
    default: function () {
      return {
        id: 0,
        name: '',
        is_done: false,
        user_id: 0,
        expect_done_at: ''
      }
    }
  },

  data () {
    return {
      todo: this.todoItem,
      todoNameBackup: this.todoItem.name,
      users: this.userList,
      isCanEdit: false
    }
  },

  methods: {
    setIsCanEdit: function (todoId, status) {
      this.isCanEdit = status

      setTimeout(() => {
        this.$refs.todoName.focus()
      }, 100)
    },

    saveTodo: function (todoId) {
      this.isCanEdit = false
      this.todoNameBackup = this.todo.name

      this.$message({
        message: '保存成功',
        type: 'success',
        center: true
      })
    },

    cancelTodo: function (todoId) {
      this.isCanEdit = false
      this.todo.name = this.todoNameBackup
    },

    deleteTodo: function (todoId) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style scoped>
.el-input-group__prepend {
  padding-right: 0px;
}

.el-date-editor > input {
  border: none;
}

.el-input__inner {
  height: auto;
}

.el-input-group__append {
  height: 40px;
}
</style>
