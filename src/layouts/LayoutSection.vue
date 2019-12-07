<template>
  <section id="overview" class="flex flex-col min-h-screen">
    <HeaderTitle class="order-2 lg:order-1" :title="$page.project.title" :date="$page.project.date"
    :roles="$page.project.roles"
    :tools="$page.project.tools"/>
    <slot class="order-1 lg:order-2" name="background"/>
    <div class="flex flex-col items-center lg:flex-row lg:justify-around h-full py-20 px-10">
        <div class="flex flex-col lg:mr-12 xl:w-1/3">
            <slot name="content"/>
        </div>
        <div class="flex flex-col lg:w-1/2 xl:w-auto">
            <div class="hidden flex flex-col h-full md:block">
                <slot />
            </div>
        </div>
    </div>        
  </section>
</template>
<script>
import HeaderTitle from '../components/HeaderTitle'
export default {
    components: {
        HeaderTitle,
    },
}
</script>