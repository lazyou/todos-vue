<template>
  <el-card class="box-card" style="line-height: normal">
    <Module
      v-for="item in modules"
      v-bind:key="item.id"
      v-bind:moduleItem="item">
    </Module>

    <el-input
      v-model="new_module_name"
      size="medium"
      placeholder="添加模块">
    </el-input>

    <el-button
      @click="createModule()"
      type="primary"
      icon="el-icon-check"
      style="margin-top:20px;"
      circle>
    </el-button>
  </el-card>
</template>

<script>
import Module from './Module.vue'

export default {
  components: {
    Module
  },

  data () {
    return {
      new_module_name: '',
      // 当前分组下的 modules
      modules: [
        {
          id: 1,
          name: '用户管理',
          percentage: 0
        },
        {
          id: 2,
          name: '角色管理',
          percentage: 30
        },
        {
          id: 3,
          name: '权限管理',
          percentage: 50
        },
        {
          id: 4,
          name: '学校管理',
          percentage: 70
        },
        {
          id: 5,
          name: '学生管理',
          percentage: 100
        }
      ]
    }
  },

  methods: {
    createModule: function () {
      this.$message({
        message: '创建成功',
        type: 'success',
        center: true
      })
    }
  }
}
</script>
