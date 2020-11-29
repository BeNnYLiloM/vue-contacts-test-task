<template>
  <div class="main-wrap" id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  background: #8fb9a8;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 10px 10px 30px;
}

.main-title {
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.sub-title {
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 18px;
}

img {
  max-width: 100%;
  height: auto;
}

.btn {
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  padding: 0.4rem 2rem;
}
.btn-cancel {
  background: #f1828d;
}
.btn-green {
  background: #8fb9a8;
}
.btn-delete {
  border: 1px solid #f1828d;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  padding: 0 0 4px;
  outline: none;
  background: #f1828d;
  font-size: 34px;
  line-height: 1px;
  cursor: pointer;
  color: #fff;
}

.flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-column {
  flex-direction: column;
}

.justify-content-between {
  justify-content: space-between;
}
.justify-content-start {
  justify-content: flex-start;
}
.justify-content-end {
  justify-content: flex-end;
}
.justify-content-center {
  justify-content: center;
}
.justify-content-around {
  justify-content: space-around;
}

.error {
  margin: 6px 0 12px;
  padding: 0 0 0 18px;
  font-weight: bold;
  color: #f1828d;
}

.hor-line {
  border-top: 1px solid #765d69;
  margin-top: 18px;
  margin-bottom: 18px;
}

@media (max-width: 540px) {
  .btn:not(.btn-delete) {
    width: 100%;
  }
}
</style>
