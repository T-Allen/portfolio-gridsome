<template>
    <nav class="bg-white h-screen flex flex-col z-40">
        <ScrollProgress class="invisible xl:visible" />
        <div class="fixed h-full w-full xl:w-2/12">
            <div class="flex flex-col w-full h-full p-6">
                <header class="justify-between text-primary items-center sm:hidden md:flex">
                    <SocialIcons class="lg:text-2xl" />
                    <h4 class="text-3xl lg:text-5xl font-display text-right" :style="{ maxWidth: '150px'}">Tariku Allen</h4>
                </header>
                <div class="flex items-start w-full h-full flex-col justify-center sm:justify-start md:justify-center">
                    <div class="flex w-full justify-between font-body font-bold text-xl xl:ml-3 py-3">
                        <h3 class="mr-2" v-text="'Phases'"></h3>
                        <button @click="goTo('overview')" title="Return To Top">
                            <div v-html="arrowUp"></div>
                        </button>
                    </div>
                    <NavButton 
                    :label="section.title"
                    :id="section.id"
                    :key="idx" v-for="(section, idx) in sections" />
                </div>
                <g-link class="inline-block" :to="'/'">
                    <button class="rounded-xl bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 hidden sm:block md:hidden self-start text-secondary" title="All Projects">
                        <div class="flex items-center m-2">
                            <div v-html="arrowLeft"></div>
                            <p class="uppercase text-sm">All Projects</p>
                        </div>
                    </button>
                </g-link>
            </div>
            <div class="absolute z-50 bottom-0 left-0 h-btn-sm md:h-btn-md lg:h-btn visible sm:invisible md:visible">
                <Button class="btn-left" :link="'/'" title="All Projects">
                    <div class="mr-2" v-html="arrowLeft"></div>
                    <p class="btn-text" v-text="'All Projects'" ></p>
                    <template v-slot:mask-group>
                        <div class="mr-2" v-html="arrowLeft"></div>
                        <p class="btn-text" v-text="'All Projects'"></p>
                    </template>
                </Button>
            </div>
        </div>
    </nav>
</template>
<script>
import Button  from "../components/ButtonCorner"
import feather from 'feather-icons'
import scrollMixin from "../mixins/scrollMixin"
import NavButton  from "../components/NavButton"
import ScrollProgress  from "../components/ScrollProgressIndicator"
import SocialIcons  from "../components/SocialIcons"
export default {
    name: "SectionNav",
    components: {
        Button,
        NavButton,
        ScrollProgress,
        SocialIcons
    },
    data() {
        return {
            arrowLeft: feather.icons['arrow-left'].toSvg({ class: 'stroke-current'}),
            arrowUp: feather.icons['arrow-up'].toSvg({ class: 'stroke-current'})
        }
    },
    props: {
        sections: Array
    },
    methods: {
        handleScroll: function(e) {
            let offset = 2;
            let scrollTop = e.target.scrollingElement.scrollTop + offset;
            
            for (const section of this.sections) {
                if (scrollTop >= (this.$(section.id).offsetTop) && scrollTop < (this.$(section.id).offsetTop + this.$(section.id).scrollHeight)) {
                    this.$(section.id + '-nav-border').classList.remove('hidden')
                    this.$(section.id + '-border-bg').classList.remove('hidden')
                    
                    this.$(section.id + '-nav-label').classList.add('font-bold')
                } else {
                    this.$(section.id + '-nav-border').classList.add('hidden') 
                    this.$(section.id + '-border-bg').classList.add('hidden')
                    this.$(section.id + '-nav-label').classList.remove('font-bold')
                }

                if (scrollTop > this.$(section.id).offsetTop) {
                    if (Math.ceil(((scrollTop - this.$(section.id).offsetTop) / (this.$(section.id).clientHeight - window.innerHeight)) * 100) <= 100) {
                        this.$(section.id + '-nav-border').style.height = (Math.ceil(((scrollTop - this.$(section.id).offsetTop) / (this.$(section.id).clientHeight - window.innerHeight)) * 100)) + '%'
                    } else {
                        this.$(section.id + '-nav-border').style.height = '100%'
                    }
                }
            }
        },
        labelClick: function(id) {
            this.goTo(id)
        }
    },
    mixins: [scrollMixin],
    mounted () {
        this.$('progress').style.width = '0%'
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>