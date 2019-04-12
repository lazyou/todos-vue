<template>
  <div
    class="text item">
    <!-- @mouseover="setRightOperate(true)" -->
    <!-- @mouseleave="setRightOperate(false)" -->

    <el-input
      v-model="item.name"
      :disabled="!isCanEdit"
      ref="moduleName"
      size="medium"
      placeholder="请输入内容">
      <el-button
        slot="append"
        v-if="!isCanEdit"
        @click="setIsCanEdit(item.id, true)"
        style="padding: 10px;"
        icon="el-icon-edit">
      </el-button>

      <el-button
        slot="append"
        v-if="isCanEdit"
        @click="saveModule(item.id)"
        style="padding: 10px;"
        icon="el-icon-check">
      </el-button>

      <el-button
        slot="append"
        v-if="isCanEdit"
        @click="setIsCanEdit(item.id, false)"
        style="padding: 10px;"
        icon="el-icon-close">
      </el-button>

      <el-button
        slot="append"
        v-if="isCanEdit"
        @click="deleteModule(item.id)"
        style="padding: 10px;"
        icon="el-icon-delete">
      </el-button>
    </el-input>

    <el-progress
      :percentage="item.percentage"
      :status="percentageStatus">
    </el-progress>
  </div>
</template>

<script>
import { setTimeout } from 'timers'

export default {
  props: {
    // 模块对象(单条)
    module: Object,
    default: function () {
      return {
        id: 0,
        name: '',
        percentage: 0
      }
    }
  },

  data () {
    // console.log(this.module)
    return {
      item: this.module,
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
    setIsCanEdit: function (moduleId, status) {
      console.log('setIsCanEdit')

      this.isCanEdit = status

      setTimeout(() => {
        this.$refs.moduleName.focus()
      }, 100)
    },

    saveModule: function (moduleId) {
      this.$message({
        message: '保存成功',
        type: 'success',
        center: true
      })
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
