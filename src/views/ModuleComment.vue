<template>
  <div>
    <el-input
      v-model="comment"
      type="textarea"
      :autosize="{ minRows: 4, maxRows: 4}"
      style="padding-top:30px;"
      placeholder="请输入评论">
    </el-input>

    <section style="padding-top:10px; text-align:right;">
      <el-button
        v-if="commentLength"
        @click="saveComment()"
        type="primary"
        size="small">
        保存
      </el-button>

      <el-button
        v-if="commentLength"
        @click="cancelComment()"
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
      comment: ''
    }
  },

  computed: {
    commentLength: function () {
      return this.comment.length
    }
  },

  methods: {
    saveComment: function () {
      this.$message({
        type: 'success',
        message: '保存成功!'
      })
    },

    cancelComment: function () {
      this.comment = ''
    }
  }
}
</script>

<style scoped>
.el-main div{
  line-height: 0px;
}

</style>
