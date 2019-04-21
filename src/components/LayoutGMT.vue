<template>
  <el-container
    v-loading="this.$store.state.showLoading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">

    <el-header>
      <GroupDropdown></GroupDropdown>
    </el-header>

    <el-container>
      <el-aside width="400px">
        <ModuleList></ModuleList>
      </el-aside>

      <el-main>
        <ModuleInfo></ModuleInfo>
        <TodoList></TodoList>
        <ModuleComment></ModuleComment>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import GroupDropdown from '../views/Group/Dropdown'
import ModuleList from '../views/ModuleList.vue'
import ModuleInfo from '../views/ModuleInfo.vue'
import TodoList from '../views/TodoList.vue'
import ModuleComment from '../views/ModuleComment.vue'

export default {
  components: {
    GroupDropdown,
    ModuleList,
    ModuleInfo,
    TodoList,
    ModuleComment
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

div >>> .el-input.is-disabled .el-input__inner {
  color:#606266;
  background-color: transparent;
}

div >>> .el-textarea.is-disabled .el-textarea__inner {
  background-color: transparent;
}
</style>
