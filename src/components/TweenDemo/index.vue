<template>
  <el-space wrap class="tween-container" size="large">
    <el-card
      v-for="item in list"
      :key="item.title"
      class="box-card"
      :body-style="{ height: '70px' }"
      @click="handleJump(item.path)"
    >
      <template #header>
        <div class="card-header">
          <span>{{ item.title }}</span>
        </div>
      </template>
      <div class="text">
        {{ item.desc }}
      </div>
    </el-card>
  </el-space>
</template>
<script>
const list = [
  {
    title: 'pause/resume demo',
    desc: '使用tween.pause()实现暂停\n使用tween.resume()实现恢复',
    path: '/tween/demo1',
  },
  {
    title: '曲线运动 demo',
    desc: '使用动画组，拆分成X、Y轴运动实现曲线运动',
    path: '/tween/demo2',
  },
  {
    title: 'delay/repeat/chain demo',
    desc:
      ' 使用tween.repeat()实现重复\n使用tween.delay()实现延迟\n使用tween.chain()实现动画链',
    path: '/tween/demo3',
  },
  {
    title: 'interpolation demo',
    desc: '使用tween.interpolation()实现数组插值',
    path: '/tween/demo4',
  },
  {
    title: '金币飞入 demo',
    desc: '使用多种api，实现金币飞入状态栏动画',
    path: '/tween/demo5',
  },
];
export default {
  data: function() {
    return {
      list,
    };
  },
  methods: {
    handleJump(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style>
.tween-container {
  width: 100%;
  min-height: 100%;
}
.box-card {
  width: 250px;
  height: 200px;
  cursor: pointer;
}
.text {
  text-align: left;
}
</style>
