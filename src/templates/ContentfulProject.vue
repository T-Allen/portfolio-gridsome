<template>
    <div class="flex flex-col xl:flex-row text-primary overflow-x-hidden">
        <div class="fixed flex h-12 z-40 bg-white xl:hidden w-full px-6 py-3 shadow-md">
            <button class="z-50">
                <svg class="nav-toggle feather stroke-current xl:hidden" @click="toggleNav()"> 
                    <use xlink:href="../../node_modules/feather-icons/dist/feather-sprite.svg#menu"/>
                </svg>
            </button>
        </div>
        <Navigation class="hidden xl:flex" :sections="$page.sectionTitles.section" />
        <Navigation class="fixed nav-mobile xl:hidden w-nav sm:w-2/3 md:w-1/3 z-50" :sections="$page.sectionTitles.section" />
        <div class="fixed bg-nav z-40 h-screen w-screen bg-primary xl:invisible" @click="toggleNav()"></div>
        <div id="content" class="xl:absolute xl:right-0 flex flex-col xl:w-10/12">
            <ProjectOverview :sections="$page.project.sections">
                <template v-slot:background>
                    <ImageBackground 
                    :baseUrl="$page.project.titleImage.file.url">
                        <transition name="slide-right" appear>
                            <h1
                            class="absolute p-10 left-0 bottom-0  font-display leading-tight font-bold text-4xl lg:text-6xl text-white uppercase tracking-widest"
                            v-text="$page.project.title"></h1>
                        </transition>
                    </ImageBackground>     
                </template>
                <template v-slot:content>
                    <TextBlockOverview :description="$page.project.description" :date="$page.project.date"
                    :roles="$page.project.roles"
                    :tools="$page.project.tools"/>
                </template>
                <transition name="slide-down" appear>
                    <Grid class="grid grid-card" :itemList="$page.project.sections" :gap="'1rem'">
                        <template v-slot:item="{ item }">
                            <Card :title="item.title"
                            :imageUrl="item.titleImage.file.url">
                                <template slot="title">
                                    <h3 class="card-title text-2xl text-right text-white uppercase font-display font-bold" v-text="item.title"></h3>
                                </template>
                                <div class="card-text">
                                    <p v-text="item.summary"></p>
                                </div>
                                <template slot="icons">
                                    <button class="rounded-xl bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 text-secondary" title="Continue" @click="goTo(item.id)">
                                        <div class="flex items-center m-2" v-html="arrowDown">
                                        </div>
                                    </button>
                                </template>
                            </Card>
                        </template>
                    </Grid>
                </transition>
            </ProjectOverview>
            <ProjectDetail :id="section.id" v-for="(section, idx) in $page.project.sections" :key=idx>
                <h2 class="float-right font-medium text-primary text-4xl md:text-5xl lg:text-6xl text-right" v-text="section.title"></h2>
                <template v-slot:images>
                    <Grid v-if="section.imageGrid != null" :class="['grid', section.imageGrid.imageRefs.length > 1 ? 'grid-lg' : '', 'grid-image-sm md:grid-image-md lg:grid-image']" :itemList="section.imageGrid.imageRefs">
                        <template v-slot:item="{ item }">
                            <ImageExpandable :url="item.img.file.url" :description="item.img.description"/>
                        </template>
                    </Grid>
                </template>
                <template v-slot:text>
                    <div class="flex flex-wrap">
                        <div class="lg:w-1/2 px-3" v-for="(activity, key) in section.activity" :key="key">
                            <TextBlock :heading="activity.heading" :description="activity.richDescription" />
                        </div>
                    </div>
                </template>
            </ProjectDetail>
            <footer class="h-btn-sm md:h-btn-md lg:h-btn flex justify-between w-full">
                <Button :class="[$page.project.previousPage != null ? 'flex' : 'invisible','btn-left']" :link="$page.project.previousPage != null ? $page.project.previousPage.path : '/'">
                    <div class="mr-2" v-html="arrowLeft"></div>
                    <p class="btn-text" v-text="$page.project.previousPage != null ? $page.project.previousPage.title : 'All Projects'" >All Projects</p>
                    <template v-slot:mask-group>
                        <div class="mr-2" v-html="arrowLeft"></div>
                        <p class="btn-text" v-text="$page.project.previousPage != null ? $page.project.previousPage.title : 'All Projects'">All Projects</p>
                    </template>
                </Button>
                <Button class="btn-right text-right" :link="$page.project.nextPage != null ? $page.project.nextPage.path : '/'" v-if="$page.project.nextPage">
                    <p class="btn-text" v-text="$page.project.nextPage != null ? $page.project.nextPage.title : 'All Projects'">Next</p>
                    <div class="ml-2" v-html="arrowRight"></div>
                    <template v-slot:mask-group>
                        <p class="btn-text" v-text="$page.project.nextPage != null ? $page.project.nextPage.title : 'All Projects'"></p>
                        <div class="ml-2" v-html="arrowRight"></div>
                    </template>
                </Button>
            </footer>
        </div>
    </div>
</template>
<page-query>
query Project($id: ID!) {
    project: contentfulProject (id: $id) {
        title
        tools
        description
        date: dateText
        roles
        path
        titleImage {
          file {
            url
          }
        }
        sections: section {
            id
            activity {
                title
                heading
                richDescription
                image {
                    file {
                        url
                    }
                    description
                }
            }
            imageGrid {
                imageRefs {
                    id
                    gridRow
                    gridColumn
                    img {
                        file{
                            url
                        }
                        description
                    }
                }
                layout {
                    height
                    gap
                    rows
                    columns
                }
            }
            title
            summary
            titleImage {
                file {
                    url
                }
            }
        }
        previousPage {
            title
            path
        }
        nextPage {
            title
            path
        }
    }

    sectionTitles: contentfulProject(id: $id) {
        section {
            title
            id
        }
    }
}
</page-query>
<script>
import Button from '../components/ButtonCorner'
import Card from '../components/Card'
import Grid from '~/layouts/Grid.vue'
import TextBlockOverview from '../components/TextBlockOverview'
import ImageBackground from '../components/ImageBackground'
import ImageExpandable from '../components/ImageExpandable'
import Navigation from '../components/Navigation'
import TextBlock from '../components/TextBlock'
import scrollMixin from "../mixins/scrollMixin";
import imageSize from '../mixins/imageSize'
import feather from 'feather-icons'
export default {
    name: "ContentfulProject",
    components: {
        Button,
        Card,
        TextBlockOverview,
        TextBlock,
        ImageBackground,
        ImageExpandable,
        Navigation
    },
    data () {
        return {
            arrowDown: feather.icons['arrow-down'].toSvg({ class: 'stroke-current'}),
            arrowLeft: feather.icons['arrow-left'].toSvg({ class: 'stroke-current'}),
            arrowRight: feather.icons['arrow-right'].toSvg({ class: 'stroke-current'}),
            menu: false,
            q: (name)  => document.querySelector(name)
        }
    },
    metaInfo() {
        return {
            title: this.$page.project.title
        }
    },
    methods: {
        toggleNav: function () {
            let q = this.q
            this.menu = !this.menu
            if (this.menu) {
                q('.nav-mobile').style.transform = 'translate(0%)';
                q('.bg-nav').style.display = 'block';
                q('.bg-nav').style.opacity = '25%';
            } else {
                q('.nav-mobile').style.transform = 'translate(-100%)';
                q('.bg-nav').style.opacity = '0%';
                q('.bg-nav').style.display = 'none';
            }
        }
    },
    mixins: [scrollMixin, imageSize]
}
</script>
