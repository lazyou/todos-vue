<template>
  <div class="text item">
    <!-- @mouseover="setRightOperate(true)" -->
    <!-- @mouseleave="setRightOperate(false)" -->

    <el-input
      v-model="module.name"
      :disabled="!isCanEdit"
      ref="moduleName"
      size="medium"
      placeholder="请输入内容">
      <el-button
        slot="append"
        v-if="!isCanEdit"
        @click="setIsCanEdit(module.id, true)"
        style="padding: 10px;"
        icon="el-icon-edit">
      </el-button>

      <el-button
        slot="append"
        v-if="!isCanEdit"
        @click="selectModule(module.id)"
        style="padding: 10px;"
        icon="el-icon-d-arrow-right">
      </el-button>

      <el-button
        slot="append"
        v-if="isCanEdit"
        @click="saveModule(module.id)"
        style="padding: 10px;"
        icon="el-icon-check">
      </el-button>

      <el-button
        slot="append"
        v-if="isCanEdit"
        @click="cancelModule(module.id)"
        style="padding: 10px;"
        icon="el-icon-close">
      </el-button>

      <el-button
        slot="append"
        v-if="isCanEdit"
        @click="deleteModule(module.id)"
        style="padding: 10px;"
        icon="el-icon-delete">
      </el-button>
    </el-input>

    <el-progress
      :percentage="module.percentage"
      :status="percentageStatus">
    </el-progress>
  </div>
</template>

<script>
export default {
  props: {
    // 模块对象(单条)
    moduleItem: Object,
    default: function () {
      return {
        id: 0,
        name: '',
        percentage: 0
      }
    }
  },

  data () {
    return {
      module: this.moduleItem,
      moduleNameBackup: this.moduleItem.name,
      isCanEdit: false
    }
  },

  computed: {
    // 模块状态完成状态计算
    percentageStatus: function () {
      switch (this.module.percentage) {
        case 0:
          return 'exception'
        case 100:
          return 'success'
        default:
          return 'text'
      }
    }
  },

  methods: {
    selectModule: function (moduleId) {
      this.$router.push({
        path: '/todo',
        query: {
          group_id: this.$route.query.group_id,
          module_id: moduleId
        }
      })
    },

    setIsCanEdit: function (moduleId, status) {
      this.isCanEdit = status

      setTimeout(() => {
        this.$refs.moduleName.focus()
      }, 100)
    },

    saveModule: function (moduleId) {
      this.isCanEdit = false
      this.moduleNameBackup = this.module.name

      this.$message({
        message: '保存成功',
        type: 'success',
        center: true
      })
    },

    cancelModule: function (moduleId) {
      this.isCanEdit = false
      this.module.name = this.moduleNameBackup
    },

    deleteModule: function (moduleId) {
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
.text {
  font-size: 16px;
}

.item {
  line-height: 20px;
  padding: 18px 0;
}

/* TODO: 样式重写失败 */
.el-input.is-disabled .el-input__inner {
  color: black;
  background-color: white;
  font-weight: 500;
  cursor: auto;
}

.el-input-group__append > button {
  width: 40px;
  padding: 0px;
}
</style>
