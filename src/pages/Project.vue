<template>
    <div>
        <Layout>
            <ProjectOverview />
        </Layout>
        <Split half>
            <div class="my-10 mx-20 h-full">
                <Header />
                <div class="flex h-full flex-col">
                    <Grid :items="4">
                        <TextGroup />
                    </Grid>
                </div>
            </div>
            <template slot="right">
                <g-image src="../../static/testimg.jpg"></g-image>
            </template>
        </Split>
        <Split half>
            <div class="mx-20 h-full">
                <Header />
                <div class="flex h-full flex-col">
                    <Grid :items="4">
                        <TextGroup />
                    </Grid>
                </div>
            </div>
            <template slot="right">
                <Grid class="flex h-full" :items="10" :gap="'1rem'">
                    <div class="flex bg-gray-100 h-full">
                        Hello
                    </div>
                </Grid>
            </template>
        </Split>
        <FullWidth>
            <ProjectPhase />
        </FullWidth>
    </div>
</template>
<script>
import ProjectPhase from '../templates/ProjectPhase'
import ProjectOverview from '../templates/ProjectOverview'
import TextGroup from '../components/TextGroup'
export default {
    metaInfo: {
        title: "Project Page"
    },
    components: {
        ProjectPhase,
        ProjectOverview,
        TextGroup,
    }
}
</script>