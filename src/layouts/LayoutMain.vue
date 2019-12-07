<template>
  <div v-if="background" class="background min-h-screen bg-scroll xl:bg-cover overflow-hidden bg-no-repeat px-20 py-10">
    <slot/>
  </div>
  <div :id="this.id" v-else class="min-h-screen">
    <slot/>
  </div>
</template>
<script>
export default {
  props: {
    background: Boolean,
    id: String
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
.background {
  background-image: url('../background.svg');
  background-position: 100% 80%;
}
</style>
