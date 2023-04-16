<template>
  <nav class="navbar">
    <div class="navbar__left">
      <div class="links">
        <router-link to="/">Home</router-link>
      </div>
    </div>
    <div class="navbar__right">
      <div class="links">
        <router-link to="/">Login</router-link>
      </div>
    </div>
  </nav>
</template>
  
  <style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.navbar__left {
  display: flex;
  align-items: center;
}

.navbar__right {
  display: flex;
  align-items: center;
}

.navbar__right router-link {
  margin-left: 16px;
}

</style>
  