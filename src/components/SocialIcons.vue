<template>
    <div class="flex order-2 xl:order-none">
        <div class="flex flex-col mt-6 items-center">
        <font-awesome-icon class="mb-6" :icon="['fas', 'envelope']" size="2x"></font-awesome-icon>
        <font-awesome-icon class="mb-6" :icon="['fab', 'github']" size="2x"></font-awesome-icon>
        <font-awesome-icon class="mb-6" :icon="['fab', 'linkedin']" size="2x"></font-awesome-icon>
        </div>
    </div>
</template>
<script>
export default {
    name: "SocialIcons"
}
</script>