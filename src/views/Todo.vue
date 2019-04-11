<template>
  <div style="line-height: 60px;">
    <!-- todo 输入框 -->
    <el-input
      placeholder="请输入内容"
      v-model="todo">

      <!-- todo 左边操作 -->
      <template slot="prepend" v-bind:style="{paddingRight: '0px'}">
          <el-checkbox v-model="checked"></el-checkbox>

          <el-select
            filterable
            v-model="select"
            placeholder="请选择"
            style="width: 90px; margin-right: 0px;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="截止日期"
            style="width: 140px;">
          </el-date-picker>
      </template>

      <!-- todo 右边操作  -->
      <template slot="append">
        <i class="el-icon-success" style="padding-right: 10px;" v-show="isSaveEdit"></i>
        <i class="el-icon-delete"></i>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      value1: '',
      todo: '某某任务',
      select: '',
      isSaveEdit: true,
      options: [
        {
          value: 1,
          label: '林某某'
        },
        {
          value: 2,
          label: '王某某'
        },
        {
          value: 3,
          label: '陈某某'
        }
      ]
    }
  }
}
</script>

<style>
.el-input-group__prepend {
  padding-right: 0px;
}

.el-date-editor > input {
  border: none;
}

.el-input__inner {
  height: auto;
}
</style>
