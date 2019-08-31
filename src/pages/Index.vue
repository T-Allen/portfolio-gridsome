<template>
  <Layout background>
    <div class="min-h-screen flex flex-col xl:flex-row">
      <section class="flex justify-center items-center order-2 xl:order-none xl:w-1/2">
        <div class="flex flex-col">
          <Grid :itemList="$page.previews.edges">
            <template v-slot:item="{ item }">
              <Card :title="item.node.title" :summary="item.node.summary" :url="item.node.thumbnail.file.url"/>
            </template>
          </Grid>
        </div>
      </section>

      <section class="hidden xl:flex flex-col justify-center order-1 xl:order-none p-6 xl:w-1/3">
        <div class="font-bold font-body text-4xl text-gray-700" v-text="$page.author.bio"></div>
      </section>

      <section class="flex flex-col ml-6 order-1 xl:order-none xl:w-1/6">
        <div class="flex justify-end">
          <span
            class="block text-right font-display leading-tight font-bold text-title max-w-sm" v-text="$page.author.name"
          ></span>
        </div>
        
        <div class="flex justify-between xl:justify-end">
          <div class="flex font-bold font-body text-4xl text-gray-700 w-2/3 xl:w-1/2 xl:hidden" v-text="$page.author.bio"></div>
          <SocialIcons class="flex justify-end"/>
        </div>
      </section>
    </div>
  </Layout>
</template>
<page-query>
query Data {
  author: contentfulAuthor (id: "48Dsj1g9l2PBszJ88zPHRW"){
		name
    bio
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
          date
        }
      }
    }
  }
}
</page-query>
<script>
import Card from '../components/Card'
import SocialIcons from '../components/SocialIcons'
export default {
  components: {
    Card,
    SocialIcons
  },
  metaInfo: {
    title: "Home"
  },
};
</script>