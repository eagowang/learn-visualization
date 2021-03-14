<template>
  <div class="">
    <section class="section">
      <h2>曲线运动示例</h2>
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
    demo1() {
      const target = { x: 200 };
      this.tween1 = new TWEEN.Tween(this.source);
      this.tween1.to(target, 2000);
    },
    demo2() {
      const target = { y: 100, scale: 0.2 };
      this.tween2 = new TWEEN.Tween(this.source);
      this.tween2.to(target, 2000);
      this.tween2.easing(TWEEN.Easing.Cubic.InOut);
    },
    animate() {
      window.requestAnimationFrame(this.animate);
      TWEEN.update();
    },
    handleStart() {
      this.tween1.start();
      this.tween2.start();
    },
  },
  mounted() {
    this.demo1();
    this.demo2();
    this.animate();

    this.tween1.onUpdate(() => {
      const translateStr = `translate(${this.source.x}px, ${this.source.y}px) scale(${this.source.scale})`;
      this.styleObject = {
        ...this.styleObject,
        transform: translateStr,
      };
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('./demo.css');
</style>
