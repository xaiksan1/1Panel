<template>
  <aside class="sidebar">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 1rem;
}

.sidebar a {
  text-decoration: none;
  color: #333;
}

.sidebar a:hover {
  text-decoration: underline;
}
</style>
