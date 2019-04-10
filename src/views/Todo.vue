<template>
  <section>
    <el-input placeholder="请输入内容" v-model="todo">
      <template slot="prepend">
        <!-- <div style="width: 90px;"> -->
          <el-checkbox v-model="checked"></el-checkbox>
          <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 90px;margin-right: 0px;">
            <el-option label="林xx" value="1"></el-option>
            <el-option label="王xx" value="2"></el-option>
            <el-option label="张xx" value="3"></el-option>
          </el-select>

          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="截止日期"
            class="">
          </el-date-picker>
        <!-- </div> -->
      </template>

      <template slot="append">
        <i class="el-icon-edit" style="padding-right: 10px;"></i>
        <i class="el-icon-delete"></i>
      </template>
    </el-input>
  </section>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      select: '',
      value1: '',
      todo: '某某任务'
    }
  }
}
</script>

<style scoped>
/* 如何重写截止日期: el-date-picker 的 style */
.el-input-group__prepend > .el-input__inner {
  border: none;
}
</style>
