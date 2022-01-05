<template>
  <div class="projects" v-editable="blok">
    <div class="container">
      <!-- <pre>{{blok}}</pre> -->
      <div class="holder-projects">
        <h2>{{ blok.title }}</h2>
        <div class="row">
          <div class="item col-6 col-md-6 col-lg-3" v-for="item in posts" :key="item.id">
            <!-- {{item}} -->
            <NuxtLink :to="'/' + item.full_slug" class="holder-project-link">
              <!-- {{ item.full_slug }} -->
              <div class="image">
                <div class="overlay"></div>
                <img class="image-upload" :src="item.content.Image.filename" />
              </div>

              <div class="title">{{ item.content.Title }}</div>
              <div class="description">{{ item.content.Subtitle }}</div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- <pre>{{ posts }}</pre> -->
      <!-- <NuxtLink to="/projects" class="anchor" v-if="size == 'short'"
        >MORE PROJECTS</NuxtLink> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      story: { content: {} },
      posts: {},
    };
  },
  props: {
    title: String,
    size: String,
    amount: Number,
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
      resolve_relations: 'ProjectList.projects',
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
.projects {
  padding: 24px 0px;
  @include tablet-up {
    padding: 48px 0px;
  }
  .container {
    .holder-projects {
      .row {
        .item {
          margin-bottom: 16px;
          cursor: pointer;
          text-decoration: none;
          .holder-project-link {
            text-decoration: none;
          }
          .image {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            background-color: black;
            background-size: auto 100%;
            background-position: center center;
            border-radius: 3px;
            overflow: hidden;
            transition: all 0.4s;
            -webkit-box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.2);
            box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.2);
            position: relative;
            margin-bottom: 8px;
            overflow: hidden;
            .overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.4);
              z-index: 2;
              transition: background-color 0.4s;
            }
            .image-upload {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              transition: 0.4s all;
              filter: grayscale(0.6);
            }
            &:before {
              content: '';
              position: absolute;
              width: calc(100% + #{4px * 2});
              height: calc(100% + #{4px * 2});
              top: calc(#{4px}/ -1);
              left: calc(#{4px}/ -1);
              background: linear-gradient(to right, #222 0%, #222 100%),
                linear-gradient(to top, #222 50%, transparent 50%), linear-gradient(to top, #222 50%, transparent 50%),
                linear-gradient(to right, #222 0%, #222 100%), linear-gradient(to left, #222 0%, #222 100%);
              background-size: 100% 4px, 4px 200%, 4px 200%, 0% 4px, 0% 4px;
              background-position: 50% 100%, 0% 0%, 100% 0%, 100% 0%, 0% 0%;
              background-repeat: no-repeat, no-repeat;
              transition: transform 0.2s ease-in-out, background-position 0.2s ease-in-out,
                background-size 0.2s ease-in-out;
              transform: scaleX(0) rotate(180deg * 1);
              transition-delay: 0.2s * 2, 0.2s, 0s;
            }
          }
          .title {
            color: black;
            font-size: 20px;
            line-height: 1.2;
            font-weight: bold;
          }
          .description {
            color: black;
          }
          @include tablet-up {
            &:hover {
              .image {
                background-size: auto 110%;
                .overlay {
                  background-color: rgba(0, 0, 0, 0.1);
                }
                .image-upload {
                  transform: scale(1.05);
                  filter: grayscale(0);
                }
              }
            }
          }
        }
      }
    }
    .anchor {
      display: block;
      text-align: right;
      text-transform: uppercase;
      color: #222;
      font-weight: 800;
      letter-spacing: 1px;
      font-size: 18px;
      opacity: 0.8;
      @include tablet-up {
        cursor: pointer;
        transition: opacity 0.4s;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>