<template>
  <div style="text-align: left; padding-top: 20px;">
    <el-input
      v-model="comment"
      type="textarea"
      :autosize="{ minRows: 4, maxRows: 4}"
      style="padding-top: 5px;"
      placeholder="请输入评论">
    </el-input>

    <section style="padding-top:10px; text-align:right;">
      <el-select
        v-model="sendUserIds"
        v-if="commentLength"
        filterable
        multiple
        size="small"
        style="padding-right: 20px;"
        placeholder="通知人">
        <el-option
          v-for="user in users"
          :key="user.id"
          :label="user.name"
          :value="user.id">
        </el-option>
      </el-select>

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
import http from '@/utils/http'

export default {
  data () {
    return {
      comment: '',
      users: [],
      // @ 通知人
      sendUserIds: []
    }
  },

  mounted () {
    http.run({
      url: '/users.php',
      method: 'GET',
      handleThen: (response) => {
        this.users = response.data
      }
    })
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
div >>> .el-select__tags {
  max-width: 300px;
}
</style>
