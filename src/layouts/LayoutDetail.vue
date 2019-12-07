<template>
  <section :id="this.id" class="min-h-screen" v-on:toggle-item="$emit('toggle-item', $event)">
    <Header>
      <slot></slot>
    </Header>
    <div>
      <slot name="images" />
    </div>
    <div class="flex flex-wrap p-6 lg:p-10">
      <slot name="text"/>
    </div>
  </section>
</template>
<script>
import Header from '../components/Header'
export default {
  components: {
    Header
  },
  props: {
    id: String,
  },
}
</script>
