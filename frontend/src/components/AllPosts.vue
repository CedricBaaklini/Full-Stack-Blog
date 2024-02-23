<template>
  <div>
    <h2> Recent Posts </h2>
    <PostList v-if="allPosts" :posts="allPosts"/>
  </div>
</template>

<script setup>
import PostList from "@/components/PostList.vue";

export default {
  name: 'AllPosts',
  components: {
    PostList,
  },
  data() {
    return {
      allPosts: null,
    }
  },
}
</script>
