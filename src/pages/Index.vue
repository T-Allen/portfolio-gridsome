<template>
  <Layout background>
    <div class="flex flex-col px-20 py-10 min-h-screen xl:flex-row">
      <section class="flex justify-center items-end order-2 xl:order-none xl:w-1/2">
        <div class="flex flex-col">
          <div class="flex justify-center">
            <Card />
            <Card />
          </div>
          <div class="flex justify-center">
            <Card />
            <Card />
          </div>
        </div>
      </section>

      <section class="hidden xl:flex flex-col justify-center order-1 xl:order-none p-6 xl:w-1/3">
        <div class="font-bold font-body text-4xl text-gray-700" v-text="intro"></div>
      </section>

      <section class="flex flex-col ml-6 order-1 xl:order-none xl:w-1/6">
        <div class="flex justify-end">
          <span
            class="block text-right font-display leading-tight font-bold text-title max-w-sm" v-text="name"
          ></span>
        </div>
        
        <div class="flex justify-between xl:justify-end">
          <div class="flex font-bold font-body text-4xl text-gray-700 w-1/2 xl:hidden" v-text="intro"></div>
          <SocialIcons class="flex justify-end"/>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import Card from '../components/Card'
import SocialIcons from '../components/SocialIcons'
export default {
  components: {
    Card,
    SocialIcons
  },
  data () {
    return {
      name: "Tariku Allen",
      intro: "Hello, I am a designer with a human-centered background who enjoys developing interfaces, prototypes, and information architectures."
    }
  },
  metaInfo: {
    title: "Home"
  },
};
</script>