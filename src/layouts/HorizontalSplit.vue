<template>
    <section class="h-screen overflow-hidden">
      <div class="flex flex-col lg:flex-row h-full">
        <div v-bind:class="{
          ['w-1/2']: this.half,
          ['w-2/3']: this.left,
          ['w-1/3']: this.right}">
            <slot />
        </div>
        <div v-bind:class="{
          ['w-1/2']: this.half,
          ['w-1/3']: this.left,
          ['w-2/3']: this.right}">
            <slot name="right" />
        </div>
      </div>
    </section>
</template>
<script>
export default {
  props: {
    half: Boolean,
    right: Boolean,
    left: Boolean
  }
}
</script>
<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style scoped>
body {
  margin:0;
  padding:0;
}
</style>
