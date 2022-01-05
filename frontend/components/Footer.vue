<template>
  <footer>
    <div class="container">
      <div class="holder-content">
        Tom Luijten<br />
        Frontend webdeveloper at LiveWall<br />
      </div>
      <a target="_blank" href="https://www.linkedin.com/in/tom-luijten-b7768684">LinkedIn</a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: rgba(0, 0, 0, 1);
  padding: 24px 0px;
  @includet tablet-up {
    padding: 48px 0px;
  }
  .container {
    color: white;
    display: flex;
    justify-content: space-between;
    .holder-content {
      opacity: 0.8;
    }
    a {
      opacity: 0.8;
      color: white;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>