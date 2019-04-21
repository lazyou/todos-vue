<template>
  <div class="group-dropdown">
    <section v-if="!isCanEdit" >
      <el-dropdown trigger="click" @command="selectGroup">
        <span class="el-dropdown-link">
          {{ currentGroup.name }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="group in groups"
            v-bind:key="group.id"
            :command="group">
            {{ group.name }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <!-- 编辑 -->
      <el-button
        v-if="isShowEditButton"
        @click="setIsCanEdit(true)"
        icon="el-icon-edit"
        style="padding-right:10px; background-color:transparent; border:transparent;">
      </el-button>

      <!-- 新增 -->
      <el-button
        icon="el-icon-plus"
        @click="addGroup()"
        style="padding-left:10px; margin-left:0px; background-color:transparent; border:transparent;">
      </el-button>
    </section>

    <section v-if="isCanEdit">
      <el-input
        v-model="currentGroup.name"
        ref="currentGroupName"
        size="medium"
        style="width:50%;"
        placeholder="请输入内容">
        <el-button
          slot="append"
          @click="saveGroup()"
          icon="el-icon-check">
        </el-button>

        <el-button
          slot="append"
          @click="cancelGroup()"
          icon="el-icon-close">
        </el-button>

        <el-button
          slot="append"
          @click="deleteGroup()"
          icon="el-icon-delete">
        </el-button>
      </el-input>
    </section>
  </div>
</template>

<script>
import Http from '@/utils/http'
import { objAssign } from '@/utils/function'

export default {
  data () {
    return {
      isCanEdit: false,
      isShowEditButton: false,
      currentGroup: {
        id: 0,
        name: '请选择分组'
      },
      currentGroupBackup: {
        id: 0,
        name: '请选择分组'
      },
      groups: [
      ]
    }
  },

  mounted () {
    new Http({
      url: '/groups.php',
      method: 'GET',
      handleThen: this.initGroups()
    }).run()
  },

  methods: {
    initGroups () {
      return (response) => {
        this.groups = response.data
      }
    },

    selectGroup (group) {
      this.currentGroup = group
      this.currentGroupBackup = objAssign(group)
      this.isShowEditButton = true
    },

    setIsCanEdit: function (status) {
      this.isCanEdit = status

      setTimeout(() => {
        this.$refs.currentGroupName.focus()
      }, 100)
    },

    addGroup: function () {
      this.setIsCanEdit(true)
      this.currentGroup.name = ''
    },

    saveGroup: function () {
      this.isCanEdit = false

      this.$message({
        message: '保存成功',
        type: 'success',
        center: true
      })
    },

    cancelGroup: function () {
      this.isCanEdit = false

      // 新增取消情况
      if (this.currentGroup.id === 0) {
        this.currentGroup.name = this.currentGroupBackup.name
      } else {
        // 修改取消情况
        this.groups.map((group, index) => {
          if (this.currentGroup.id === group.id) {
            this.groups[index].name = this.currentGroupBackup.name
          }
        })
      }
    },

    deleteGroup: function () {
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
.el-button {
  background-color: transparent;
  border: transparent;
}
</style>
