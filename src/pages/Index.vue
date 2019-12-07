<template>
  <Layout>
    <transition name="slide-down" appear>
      <Header class="justify-between left-0 top-0 w-full flex xl:absolute z-0">
        <SocialIcons class="text-3xl lg:text-4xl"/>
        <h1 class="leading-tight text-center text-primary text-right max-w-xs text-6xl md:text-title">Tariku Allen</h1>
      </Header>
    </transition>
    <div class="flex flex-col justify-center items-center h-full xl:h-screen">
      <div class="flex flex-col items-center justify-around lg:flex-row w-full px-6 xl:px-20">
        <div class="flex flex-col order-2 lg:order-none z-50">
          <transition name="fade lg:slide-right" appear>
            <Grid class="grid grid-card-xs sm:grid-card" :itemList="$page.previews.edges">
              <template v-slot:item="{ item }">
                <Card :title="item.node.title" :imageUrl="imageUrl(item.node.thumbnail.file.url, 'fill', 'center', 300)">
                    <template slot="title">
                      <h3 class="card-title text-3xl md:text-4xl text-right text-white uppercase font-display font-bold" v-text="item.node.title"></h3>
                    </template>
                    <div class="card-text">
                      <p class="font-semibold"><span class="mr-2 text-secondary">Date:</span>{{item.node.project.dateText ? item.node.project.dateText : 'Various'}}</p>
                      <p class="mb-6 overflow-hidden" v-text="item.node.summary"></p>
                    </div>
                    <template slot="icons">
                      <g-link :to="item.node.project.path">
                        <button class="rounded-xl bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 text-secondary" title="Continue">
                          <div class="flex items-center m-2" v-html="arrowRight">
                          </div>
                        </button>
                      </g-link>
                    </template>
                </Card>
              </template>
            </Grid>
          </transition>
        </div>
        <transition name="slide-right lg:slide-left" appear>
          <p class="font-bold font-body max-w-lg text-secondary text-xl md:text-4xl lg:ml-12 mb-12 lg:mb-0 order-1 lg:order-none" v-text="$page.author.bio"></p>
        </transition>
      </div>
    </div>
    <footer class="xl:fixed bottom-0 flex justify-end left-0 w-full">
      <Button class="btn-right" :link="$page.previews.edges[0].node.project.path">
        <p class="mr-2" v-text="$page.previews.edges[0].node.title" ></p>
        <div v-html="arrowRight"></div>
        <template v-slot:mask-group>
          <p class="btn-text mr-2" v-text="$page.previews.edges[0].node.title"></p>
          <div v-html="arrowRight"></div>
        </template>
      </Button>
    </footer>
  </Layout>
</template>
<page-query>
query Data {
  author: contentfulAuthor (id: "48Dsj1g9l2PBszJ88zPHRW"){
		name
    bio
    links
  },
	previews: allContentfulProjectPreview(sortBy: "date", order: ASC) {
    edges{
      node {
        id
        title
        summary
        thumbnail{
          file {
            url
          }
        }
        project {
          dateText
          path
        }
      }
    }
  }
}
</page-query>
<script>
import Button from '~/components/ButtonCorner'
import Card from '~/components/Card'
import SocialIcons from '~/components/SocialIcons'
import imageSize from '~/mixins/imageSize'
import feather from 'feather-icons'
export default {
  components: {
    Button,
    Card,
    SocialIcons
  },
  data() {
    return {
      arrowRight: feather.icons['arrow-right'].toSvg({ class: 'stroke-current'})
    }
  },
  metaInfo: {
    title: "Portfolio"
  },
  mixins: [imageSize],
};
</script>