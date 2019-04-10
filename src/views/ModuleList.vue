<template>
  <el-card class="box-card">
    <div
      v-for="item in modules"
      :key = "item.id"
      class="text item">
      {{ item.name }}

      <el-progress :percentage="80" color="#8e71c7"></el-progress>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      modules: [
        {
          id: 1,
          name: '用户管理'
        },
        {
          id: 2,
          name: '角色管理'
        },
        {
          id: 3,
          name: '权限管理'
        },
        {
          id: 4,
          name: '学校管理'
        },
        {
          id: 5,
          name: '学生管理'
        }
      ]
    }
  }
}
</script>

<style>
.text {
  font-size: 16px;
}

.item {
  line-height: 20px;
  padding: 18px 0;
}

.box-card {
  /* width: 480px; */
}
</style>
