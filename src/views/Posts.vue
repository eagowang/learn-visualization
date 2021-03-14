<template>
  <div class="posts">
    <PostList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostList from '@/components/Posts/PostList.vue';
export default defineComponent({
  name: 'Posts',
  components: {
    PostList,
  },
});
</script>
