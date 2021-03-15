<template lang="">
  <div class="d3-demo">
    111
  </div>
</template>
<script>
import { defineComponent, onMounted } from 'vue';
import * as d3 from 'd3';
export default defineComponent({
  name: 'D3',
  setup() {
    onMounted(() => {
      console.log('onMounted');
      d3.select('.d3-demo').style('background-color', '#daedae');
      const width = 954;
      const height = 954;
      const svg = d3
        .create('svg')
        .attr('ViewBox', [0, 0, width, height])
        .style('font', '10px sans-serif');
    });
  },
  data() {
    return {};
  },
  // mounted() {
  // },
});
</script>
<style>
.d3-demo {
  background: darkcyan;
}
</style>
