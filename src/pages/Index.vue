<template>
  <Layout>
    <Header class="justify-between left-0 top-0 w-full flex slide-down xl:absolute z-0">
      <h1 class="leading-tight text-primary text-left max-w-xs text-6xl md:text-title">Tariku Allen</h1>
      <SocialIcons class="text-3xl lg:text-4xl"/>
    </Header>
    <div class="flex flex-col justify-center items-center h-full xl:h-screen">
      <div class="flex flex-col items-center justify-around lg:flex-row w-full px-6 xl:px-20">
        <p class="font-bold font-body max-w-lg text-secondary text-xl md:text-4xl lg:mr-12 mb-12 lg:mb-0 order-1 lg:order-none slide-right" v-text="$page.author.bio"></p>
        <div class="flex flex-col order-2 lg:order-none z-50"> 
          <Grid class="grid grid-card-xs sm:grid-card slide-left" :itemList="$page.previews.edges">
            <template v-slot:item="{ item }">
              <g-link :to="item.node.project.path">
                <button title="Go To Project">
                  <Card :title="item.node.title" :imageUrl="imageUrl(item.node.thumbnail.file.url, 'fill', 'center', 300)">
                      <template slot="title">
                        <h3 class="card-title text-3xl text-white uppercase font-display font-bold w-full" v-text="item.node.title"></h3>
                      </template>
                      <div class="card-text">
                        <p v-if="item.node.project.dateText" class="font-semibold">{{item.node.project.dateText}}</p>
                        <p class="mb-6 overflow-hidden" v-text="item.node.summary"></p>
                      </div>
                  </Card>
                </button>
              </g-link>
            </template>
          </Grid>
        </div>
      </div>
    </div>
    <footer class="absolute xl:fixed bottom-0 flex justify-end left-0 w-full">
      <Button class="btn-right" :link="$page.previews.edges[0].node.project.path">
        <p class="mr-2" v-text="'My Work'" ></p>
        <div v-html="arrowRight"></div>
        <template v-slot:mask-group>
          <p class="mr-2" v-text="'My Work'"></p>
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