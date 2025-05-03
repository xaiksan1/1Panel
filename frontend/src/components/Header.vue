<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </div>
    <nav class="nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
}

.logo img {
  height: 40px;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav a {
  color: #fff;
  text-decoration: none;
}

.nav a:hover {
  text-decoration: underline;
}
</style>
