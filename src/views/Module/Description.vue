<template>
  <div>
    <h1>用户管理</h1>

    <el-input
      v-model="description"
      :disabled="!isCanEdit"
      ref="moduleDescription"
      type="textarea"
      :autosize="{ minRows: 4, maxRows: 4}"
      placeholder="请输入内容">
    </el-input>

    <section style="padding-top:10px; text-align:right;">
      <el-button
        v-if="!isCanEdit"
        @click="setIsCanEdit(true)"
        type=""
        size="small">
        编辑
      </el-button>

      <el-button
        v-if="isCanEdit"
        @click="saveDescription()"
        type="primary"
        size="small">
        保存
      </el-button>

      <el-button
        v-if="isCanEdit"
        @click="cancelDescription()"
        type="danger"
        size="small">
        取消
      </el-button>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      description: '',
      descriptionBackup: '',
      isCanEdit: false
    }
  },

  methods: {
    setIsCanEdit: function (status) {
      this.isCanEdit = status

      setTimeout(() => {
        this.$refs.moduleDescription.focus()
      }, 100)
    },

    saveDescription: function () {
      this.isCanEdit = false
      this.descriptionBackup = this.description

      this.$message({
        type: 'success',
        message: '保存成功!'
      })
    },

    cancelDescription: function () {
      this.isCanEdit = false
      this.description = this.descriptionBackup
    }
  }
}
</script>

<style scoped>
.el-main div{
  line-height: 0px;
}

.el-el-textarea__inner {
  background-color: white;
  color: black;
}
</style>
