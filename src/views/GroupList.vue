<template>
  <section>
    <el-dropdown  @command="handleCommand">
      <span class="el-dropdown-link">
        {{ groupName }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="v1 后端 api">v1 后端 api</el-dropdown-item>
        <el-dropdown-item command="v1 客户端 安卓">v1 客户端 安卓</el-dropdown-item>
        <el-dropdown-item command="v1 客户端 苹果">v1 客户端 苹果</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </section>
</template>

<script>
export default {
  data () {
    return {
      groupName: '请选择 分组'
    }
  },
  methods: {
    handleCommand (command) {
      this.$message('click on item ' + command)
      this.groupName = command
    }
  }
}
</script>
