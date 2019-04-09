<template>
  <section>
    <el-dropdown>
      <span class="el-dropdown-link">
        Group<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" @click="handleClick">
        <el-dropdown-item>v1 后端 api</el-dropdown-item>
        <el-dropdown-item>v1 前端 后台</el-dropdown-item>
        <el-dropdown-item>v1 客户端 安卓</el-dropdown-item>
        <el-dropdown-item>v1 客户端 苹果</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </section>
</template>

<script>
export default {
  methods: {
    handleClick () {
      alert('button click')
    }
  }
}
</script>
