<template>
  <div class="error">
    <h1>"ERROR"</h1>
  </div>
</template>

<style scoped lang="scss">
.error {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 5vw;
  letter-spacing: 0.1em;
  padding-left: (0.1em * 0.9);
  text-align: center;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-family: monospace;
  font-weight: bold;
  color: red;
}
</style>
