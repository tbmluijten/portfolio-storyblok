<template>
  <div class="project-detail" v-editable="blok">
    <Header :blok="blok.Navigation[0]" v-if="blok.Navigation[0]" />
    <div class="container">
      <div class="holder-details">
        <h1>{{ blok.Title }}</h1>
        <h3>{{ blok.Subtitle }}</h3>
        <rich-text-renderer :document="blok.Body" />
        <div class="holder-references" v-if="blok.References.length > 0">
          <div class="title">Reference links:</div>
          <a target="_blank" :href="item.Link.url" v-for="(item, index) in blok.References" :key="item._uid"
            >{{ item.Title }} <span v-if="index + 1 < blok.References.length">, </span></a
          >
        </div>
        <div class="holder-languages">
          <div class="title">Techniques:</div>
          <div class="language" v-for="(item, index) in blok.Languages" :key="index">
            {{ item }} <span v-if="index + 1 < blok.Languages.length">, </span>
          </div>
        </div>
        <!-- <pre>{{ blok }}</pre> -->
        <ImageContent :ImageData="blok.ImageContent" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      story: { content: {} },
    };
  },

  props: {
    blok: {
      type: Object,
      required: true,
    },
  },

  created() {
    console.log(this.blok);
    const fullSlug = this.$route.path == '/' || this.$route.path == '' ? 'home' : this.$route.path;
    var data = {
      version: 'draft',
      token: process.env.STORYBLOK_TOKEN,
    };
    var config = {
      method: 'get',
      url: `https://api.storyblok.com/v2/cdn/stories/${fullSlug}`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: data,
    };
    axios(config).then((response) => {
      this.posts = response.data.rels;
    });
  },
};
</script>

<style lang="scss" scoped>
.project-detail {
  .header {
    background-color: #222;
    overflow: hidden;
    height: 160px;
    margin-bottom: 24px;

    @include tablet-up {
      height: 240px;
      margin-bottom: 48px;
    }
  }
  .container {
    .holder-details {
      max-width: 800px;
      margin: 0 auto;
    }
    .holder-references {
      margin-bottom: 16px;
    }
    .holder-languages {
      margin-bottom: 24px;
      .language {
        display: inline-block;
        margin-right: 4px;
      }
    }
    .title {
      font-weight: bold;
    }
    h1 {
      color: #222;
      font-size: 36px;
      max-width: 660px;
      @include tablet-up {
        font-size: 64px;
      }
    }
    .holder-main {
      align-items: center;
      .description {
      }
      .holder-images {
        position: relative;
        .screen {
          width: 100%;
          padding-bottom: 56.25%;
          height: 0;
          background-image: url('https://themeisle.com/blog/wp-content/uploads/2018/06/browshot_dashboard.png');
          background-size: 100% auto;
          background-position: center top;
        }
      }
    }
  }
}
</style>