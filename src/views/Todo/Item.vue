<template>
  <div style="line-height: 60px;">
    <!-- todo 输入框 -->
    <el-input
      v-model="todo.name"
      :disabled="!isCanEdit"
      ref="todoName"
      style="color: black;"
      placeholder="请输入内容">

      <!-- todo 左边操作 -->
      <el-checkbox
        slot="prepend"
        v-model="todo.is_done"
        :disabled="!isCanEdit">
      </el-checkbox>

      <el-select
        slot="prepend"
        filterable
        v-model="todo.user_id"
        :disabled="!isCanEdit"
        placeholder="请选择"
        style="width:90px; margin-right:0px;">
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
        :disabled="!isCanEdit"
        type="date"
        style="width:140px;"
        placeholder="截止日期">
      </el-date-picker>

      <!-- todo 右边操作  -->
      <el-button
        slot="append"
        v-if="!isCanEdit"
        @click="setIsCanEdit(todo.id, true)"
        style="padding: 10px;"
        v-bind:icon="editIcon" >
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
import { objAssign } from '@/utils/function'

export default {
  props: {
    userList: Array,
    // 待办项对象(单条)
    todoItem: Object
  },

  data () {
    return {
      todo: this.todoItem,
      todoBackup: objAssign(this.todoItem),
      users: this.userList,
      isCanEdit: false
    }
  },

  computed: {
    // 按钮图标: 创建 或是 编辑
    editIcon: function () {
      return this.todo.id === 0 ? 'el-icon-plus' : 'el-icon-edit'
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

      this.$message({
        message: '保存成功',
        type: 'success',
        center: true
      })
    },

    cancelTodo: function (todoId) {
      this.isCanEdit = false
      this.todo = objAssign(this.todoBackup)
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
.el-checkbox {
  margin-left: -5px;
  margin-right: 20px;
}

.el-input-group--prepend >>> .el-input-group__prepend {
  padding-right: 0px;
}

.el-date-editor >>> input {
  height: 38px;
  border: 0px;
}

div >>> .el-input.is-disabled .el-input__inner {
  color: #606266;
}

div >>> .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
  background-color: #409EFF;
  border-color: #409EFF;
}

.is-disabled >>> .el-select .el-input.is-disabled .el-input__inner:hover {
  border-left: transparent;
}
</style>
