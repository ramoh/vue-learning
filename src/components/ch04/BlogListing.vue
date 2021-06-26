<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <h4>{{ post.title }}</h4>
      <slot name="summary" :post="post">
        <p>{{ post.summary }}</p>
      </slot>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogListing",
  props: {
    posts: Array,
    post: Object,
  },
};
</script>