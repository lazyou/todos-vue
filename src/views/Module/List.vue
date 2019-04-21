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
import Http from '@/utils/http'
import Module from './Item'

export default {
  components: {
    Module
  },

  data () {
    return {
      new_module_name: '',
      // 当前分组下的 modules
      modules: [
      ]
    }
  },

  mounted () {
    new Http({
      url: '/modules.php',
      method: 'GET',
      handleThen: this.initModules()
    }).run()
  },

  methods: {
    initModules () {
      return (response) => {
        this.modules = response.data
      }
    },

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
