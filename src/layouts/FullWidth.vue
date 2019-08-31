<template>
    <section class="min-h-screen overflow-hidden">
        <Header class="py-10 px-20"/>
        <slot />
    </section>
</template>
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