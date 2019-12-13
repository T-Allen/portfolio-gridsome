<template>
    <div class="relative img left-0 top-0 overflow-hidden w-full z-0" :style="{ 
    backgroundImage: 'url(' + imageUrl(this.baseUrl, 'fill', 'center', '500', '') + ')',
    backgroundSize: 'cover'}">
        <div class="absolute hero-image inset-0 w-full h-full">
            <slot />
        </div>
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