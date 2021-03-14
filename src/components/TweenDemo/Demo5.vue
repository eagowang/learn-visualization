<template>
  <div class="section">
    <el-button type="primary" @click="handleStart">开始</el-button>
    <el-button @click="handleReset">重置</el-button>
    <div class="animate-wrap">
      <div class="coin-bar" :style="coinBarStyle"></div>
      <div
        class="coin"
        v-for="n in coinNum"
        :key="n"
        :style="coinStyleList[n]"
      />
    </div>
  </div>
</template>

<script>
import TWEEN from '@tweenjs/tween.js';
export default {
  data() {
    return {
      coinNum: 5,
      source: {
        x: 300,
        y: 400,
        scale: 1,
        opacity: 1,
      },
      target: {
        x: 0,
        y: 0,
        scale: 0.4,
        opacity: 0.4,
      },
      coinStyleList: [],
      coinBarStyle: {},
    };
  },
  methods: {
    handleReset() {
      this.source = {
        x: 300,
        y: 400,
        scale: 1,
        opacity: 1,
      };
      this.target = {
        x: 0,
        y: 0,
        scale: 0.4,
        opacity: 0.4,
      };
      this.coinStyleList = [];
      this.coinBarStyle = {};
    },
    handleStart() {
      // 金币栏降下
      const tween1 = this.coinBar({ x: 0, y: -50 }, { y: 0 });
      let tween2 = [];
      // 金币飞入
      for (let i = 1; i <= this.coinNum; i++) {
        const tweens = this.coinFly(i, i * 100);
        tween2 = [...tween2, ...tweens];
      }
      // 金币栏上升
      const tween3 = this.coinBar({ x: 0, y: 0 }, { y: -50 });
      // 生成动画链
      tween2[tween2.length - 1].chain(tween3);
      const tween = tween1.chain(...tween2);
      tween.start();

      this.animate();
    },
    coinBar(source, target) {
      const tween = new TWEEN.Tween(source).to(target);
      tween.onUpdate((res) => {
        const transform = `translate(${res.x}px, ${res.y}px)`;
        this.coinBarStyle = {
          transform,
        };
      });
      return tween;
    },
    coinFly(n = 1, delay = 0) {
      const tween1 = new TWEEN.Tween(this.source)
        .to({ x: this.target.x }, 600)
        .delay(delay);
      const tween2 = new TWEEN.Tween(this.source)
        .to(
          {
            y: this.target.y,
            scale: this.target.scale,
            opacity: this.target.opacity,
          },
          600
        )
        .easing(TWEEN.Easing.Cubic.Out)
        .delay(delay);
      tween2.onUpdate((res) => {
        const transform = `translate(${res.x}px, ${res.y}px) scale(${res.scale})`;
        this.coinStyleList[n] = {
          transform,
          opacity: res.opacity,
        };
      });
      return [tween1, tween2];
    },
    // 执行时机
    animate() {
      requestAnimationFrame(this.animate);
      TWEEN.update();
    },
  },
};
</script>

<style scoped>
@import url('./demo.css');
.section {
  position: relative;
}
.animate-wrap {
  position: absolute;
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  overflow: hidden;
}
.coin {
  position: absolute;
  width: 50px;
  height: 50px;
  background: yellow;
  border-radius: 50%;
  transform: translate(300px, 400px);
  transform-origin: left top;
}
.coin-bar {
  position: absolute;
  top: 0px;
  height: 50px;
  width: 200px;
  background: blue;
  transform: translate(0, -50px);
}
</style>
