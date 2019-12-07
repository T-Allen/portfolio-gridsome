<template>
  <section :id="this.id" class="min-h-screen relative xl:p-24">
    <slot/>
  </section>
</template>
<script>
export default {
  props: {
    id: String
  }
}
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
