<template>
    <div class="h-full w-full overflow-hidden" @click="toggleLightbox">
        <div class="h-full w-full relative">
            <div class="img-container flex justify-center items-center  h-full ">
                <img :src="imageUrl(this.url, 'fill', 'center', '500', '')" />
                <div class="absolute inset-0 flex h-full img-overlay items-center justify-center text-white w-full z-30">
                </div>
                <div class="absolute inset-0 flex h-full items-center justify-center text-white w-full z-30">
                    <div v-html="maximize"></div>
                </div>
            </div>
        </div>
        <Lightbox v-if="this.lightbox" :description="this.description" :url="imageUrl(this.url, 'fill', 'center', '', '1200')" />
    </div>
</template>
<script>
import feather from 'feather-icons'
import imageSize from '~/mixins/imageSize'
import Lightbox from '~/components/Lightbox'
export default {
    name: "ImageExpandable",
    components: {
        Lightbox
    },
    data () {
        return {
            lightbox: false,
            maximize: feather.icons['maximize-2'].toSvg({ class: 'stroke-current'})
        }
    },
    props: {
        url: String,
        description: String
    },
    methods: {
        toggleLightbox() {
            this.lightbox = !this.lightbox
            if (this.lightbox){
                this.$el.getRootNode().body.setAttribute('class', 'overflow-hidden')
            } else {
                this.$el.getRootNode().body.removeAttribute('class', 'overflow-hidden')       
            }
        }
    },
    mixins: [imageSize],
}
</script>