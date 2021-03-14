import Demo1 from '@/components/TweenDemo/Demo1.vue';
import Demo2 from '@/components/TweenDemo/Demo2.vue';
import Demo3 from '@/components/TweenDemo/Demo3.vue';
import Demo4 from '@/components/TweenDemo/Demo4.vue';
import Demo5 from '@/components/TweenDemo/Demo5.vue';
import Index from '@/components/TweenDemo/index.vue';
const tween = [
  {
    path: '',
    component: Index,
  },
  {
    path: 'demo1',
    component: Demo1,
  },
  {
    path: 'demo2',
    component: Demo2,
  },
  {
    path: 'demo3',
    component: Demo3,
  },
  {
    path: 'demo4',
    component: Demo4,
  },
  {
    path: 'demo5',
    component: Demo5,
  },
];
export default tween;
