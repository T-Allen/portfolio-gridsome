<template>
    <Layout>
        <div class="flex px-20 py-10 min-h-screen">
            <div class="flex-col hidden justify-center w-1/6 xl:flex">
                <div class="font-body font-bold py-3">
                    Phase 1
                </div>
                <div class="font-body py-3">
                    Phase 2
                </div>
                <div class="font-body py-3">
                    Phase 3
                </div>
                <div class="font-body py-3">
                    Phase 4
                </div>
            </div>
            <div class="flex flex-col">
                <span
                class="block text-right font-display leading-tight font-bold text-6xl"
                >Project Title</span>
                <div class="flex flex-col xl:flex-row">

                    <div class="flex flex-col xl:w-4/12 p-6">
                        <Info />
                    </div>

                    <div class="flex flex-col xl:w-8/12">
                        <div class="flex flex-row justify-center">
                            <div class="flex xl:justify-end p-2 xl:py-2 w-1/2">
                                <Summary />
                            </div>
                            <div class="flex xl:justify-end p-2 xl:py-2 w-1/2">
                                <Summary />
                            </div>           
                        </div>
                        <div class="flex flex-row justify-center">
                            <div class="flex xl:justify-end p-2 xl:py-2 w-1/2">
                                <Summary />
                            </div>
                            <div class="flex xl:justify-end p-2 xl:py-2 w-1/2">
                                <Summary />
                            </div>           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
<script>
import Summary from '../components/PhaseSummary'
import Info from '../components/TextProjectInfo'
export default {
    metaInfo: {
        title: "Project Page"
    },
    components: {
        Summary,
        Info
    }
}
</script>