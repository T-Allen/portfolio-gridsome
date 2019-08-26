<template>
  <div v-if="background" class="background min-h-screen bg-scroll xl:bg-cover overflow-hidden bg-no-repeat">
    <slot/>
  </div>
  <div v-else class="min-h-screen bg-scroll xl:bg-cover overflow-hidden bg-no-repeat">
    <slot/>
  </div>
</template>
<script>
export default {
  props: {
    background: Boolean
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
