<template>  
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  head(){
    return{
      title: this.blok.metaTags.title,
      meta: [
        { 
          hid: 'description', 
          name: 'description', 
          content: this.blok.metaTags.description 
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.blok.metaTags.twitter_title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.blok.metaTags.twitter_description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.blok.metaTags.twitter_image
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.blok.metaTags.og_title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.blok.metaTags.og_description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.blok.metaTags.og_image
        }
      ]
    }
  }
}
</script>
