<template>
  <section class="blog-post">
    <header>
      <slot name="header"></slot>
      <p>Post by {{ author.name }}</p>
      <p>Email id: {{ author.email }}</p>
    </header>
    <main>
      <slot></slot>
    </main>
  </section>
</template>
<script>
export default {
  name: "BlogPost",
  props: {
    author: Object,
  },
};
</script>