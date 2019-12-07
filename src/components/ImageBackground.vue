<template>
    <div class="relative img left-0 top-0 overflow-hidden w-full z-0" :style="{ 
    background: 'linear-gradient(rgba(167, 187, 255, 0.8), rgba(192, 225, 255, 0.8)), url(' + imageUrl(this.baseUrl, 'fill', 'center', '500', '') + ') no-repeat',
    backgroundSize: 'cover'}">
        <slot />
    </div>
</template>
<script>
import imageSize from "../mixins/imageSize";
export default {
    name: "ImageExpandable",
    props: {
        baseUrl: String
    },
    mixins: [imageSize],
}
</script>