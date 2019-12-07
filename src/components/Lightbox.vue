<template>
    <div class="fixed inset-0 bg-primary flex flex-col items-center h-full w-full z-50">
        <button class="absolute hidden sm:block bottom-0 right-0 mr-6 mb-6 z-50" @click="$emit('toggleLightbox')" title="Close">
            <svg class="feather stroke-current text-white"> 
                <use xlink:href="../../node_modules/feather-icons/dist/feather-sprite.svg#minimize-2"/>
            </svg>
        </button>
        <div class="flex h-full justify-center items-center">
            <img class="object-contain max-h-img-sm md:max-h-img-md lg:max-h-img" :data-src="this.url" :alt="this.description"/>
        </div>
        <div class="flex justify-center items-center text-center p-12">
            <p class="text-white text-sm lg:text-lg xl:text-xl" v-text="this.description"></p>
        </div>
    </div>  
</template>
<script>
import feather from 'feather-icons'
export default {
    name: 'Lightbox',
    props: {
        description: String,
        url: String,
    },
    mounted() {
        let img = this.$el.getElementsByTagName('img')[0]
        img.src = img.dataset.src;
    }
}
</script>
