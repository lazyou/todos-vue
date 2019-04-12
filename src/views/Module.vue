<template>
  <div
    @mouseover="setRightOperate(true)"
    @mouseleave="setRightOperate(false)"
    class="text item">

    {{ item.name }}

    <span v-if="rightOperate" style="padding-left:30px">
      <i class="el-icon-edit"></i>
      &nbsp;
      <i class="el-icon-delete"></i>
    </span>

    <el-progress
      :percentage="item.percentage"
      :status="percentageStatus">
    </el-progress>
  </div>
</template>

<script>
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
      // 右侧操作按钮显示状态
      rightOperate: false
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
    setRightOperate: function (status) {
      this.rightOperate = status
    }
  }
}
</script>

<style>
.text {
  font-size: 16px;
}

.item {
  line-height: 20px;
  padding: 18px 0;
}
</style>
