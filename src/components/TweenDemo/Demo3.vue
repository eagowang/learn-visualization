<template>
  <div class="">
    <section class="section">
      <h2>delay、repeat、chain示例</h2>
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
      const target1 = { x: 500 };
      this.tween1 = new TWEEN.Tween(this.source);
      this.tween1.to(target1, 1000);
      this.tween1.delay(1000);
      this.tween1.onUpdate((data) => {
        const translateStr = `translate(${data.x}px, ${data.y}px)`;
        this.styleObject = {
          transform: translateStr,
        };
      });
      // 动画1
      const target2 = { scale: 0.2 };
      this.tween2 = new TWEEN.Tween(this.source);
      this.tween2.to(target2, 1000);
      this.tween2.repeat(5);
      this.tween2.repeatDelay(500);
      this.tween2.onUpdate((data) => {
        const translateStr = `translate(${data.x}px, ${data.y}px) scale(${data.scale})`;
        this.styleObject = {
          transform: translateStr,
        };
      });
      this.tween1.chain(this.tween2);
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
