<template>
  <section class="section">
    <h2>暂停恢复示例</h2>
    <el-button @click="handleStart" type="primary">开始</el-button>
    <el-button @click="handlePauseAndResume">
      {{ status === 0 ? '恢复' : '暂停' }}
    </el-button>
    <div class="animate-wrap">
      <div class="block" :style="styleObject" />
    </div>
  </section>
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
      },
      styleObject: {},
      status: 0,
    };
  },
  methods: {
    demo() {
      const target = { x: 500 };
      this.tween = new TWEEN.Tween(this.source);
      this.tween.to(target, 5000);
      this.tween.onUpdate(() => {
        const translateStr = `translate(${this.source.x}px, ${this.source.y}px)`;
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
      this.status = 1;
      this.tween.start();
    },
    handlePauseAndResume() {
      if (this.status === 1) {
        this.tween.pause();
        this.status = 0;
      } else {
        this.tween.resume();
        this.status = 1;
      }
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
