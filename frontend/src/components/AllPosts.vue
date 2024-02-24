<template>
  <div>
    <h2>Recent posts</h2>
    <PostList v-if="allPosts" :posts="allPosts"/>
  </div>
</template>

<script>
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
