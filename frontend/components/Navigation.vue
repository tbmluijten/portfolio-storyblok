<template>
  <div class="navigation" :class="{ scrolled: this.scrolling }">
    <div class="container">
      <div class="holder-items">
        <NuxtLink class="item" to="/">HOME</NuxtLink>
        <NuxtLink to="/projects" class="item">MY WORK</NuxtLink>
        <NuxtLink to="/about" class="item">ABOUT ME</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      scrolling: false,
    };
  },

  methods: {
    trackPosition() {
      let scrollTop = window.scrollY;
      if (window.pageYOffset > 110) {
        if (!this.scrolling) this.scrolling = true;
      } else {
        if (this.scrolling) this.scrolling = false;
      }
    },
  },

  beforeMount() {
    window.addEventListener('scroll', this.trackPosition);
  },

  created() {
    // window.addEventListener("scroll", this.trackPosition);
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  padding: 16px 0px;
  transition: all 0.4s;
  &.scrolled {
    padding: 12px 0px;
    background-color: rgba(0, 0, 0, 1);
  }
  @include tablet-up {
    padding: 48px 0px;
    z-index: 10;
    &.scrolled {
      padding: 24px 0px;
    }
  }
  .container {
    .holder-items {
      display: flex;
      .item {
        position: relative;
        color: white;
        margin: 0px 16px;
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 1px;
        opacity: 0.8;
        text-decoration: none;
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background-color: white;
          transition: width 0.4s;
        }
        &:before {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0%;
          height: 1px;
          background-color: white;
          transition: width 0.4s;
        }
        @include tablet-up {
          cursor: pointer;
          transition: opacity 0.4s;
          &:hover {
            opacity: 1;
            &:after,
            &:before {
              width: 50%;
            }
          }
        }
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
}
</style>