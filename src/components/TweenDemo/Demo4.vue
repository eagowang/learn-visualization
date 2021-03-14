<template>
  <div class="">
    <section class="section">
      <h2>interpolation 示例</h2>
      <el-button type="primary" @click="handleStart">开始</el-button>
      <div class="animate-wrap">
        <div class="block" :style="styleObject" />
      </div>
    </section>
  </div>
</template>

<script>
import TWEEN from '@tweenjs/tween.js';

export default {
  name: 'Main',
  data() {
    return {
      source: {
        x: 0,
        y: 0,
        scale: 1,
      },
      styleObject: {},
    };
  },
  methods: {
    demo() {
      // 动画1
      const target1 = { x: [0, 150, 300, 0], y: [0, 150, 0, 0] };
      this.tween1 = new TWEEN.Tween(this.source);
      this.tween1.to(target1, 1000);
      // 补间进度
      this.tween1.easing(TWEEN.Easing.Cubic.InOut);
      this.tween1.repeat(4);
      // 插值
      this.tween1.interpolation(TWEEN.Interpolation.CatmullRom);
      this.tween1.onUpdate((data) => {
        const translateStr = `translate(${data.x}px, ${data.y}px)`;
        this.styleObject = {
          transform: translateStr,
        };
      });
    },

    animate() {
      window.requestAnimationFrame(this.animate);
      TWEEN.update();
    },
    handleStart() {
      this.tween1.start();
    },
  },
  mounted() {
    this.demo();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('./demo.css');
</style>
