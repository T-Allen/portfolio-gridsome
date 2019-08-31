<template>
    <div class="h-screen flex items-center">
        <div class="left-0 top-0 overflow-hidden w-full h-quart-screen bg-gray-400 absolute z-0 hidden xl:block">
            <g-image class="relative" src="../../static/testimg.jpg"></g-image>   
            <span
            class="absolute left-0 top-0 block text-right font-display leading-tight font-bold text-6xl mt-10 ml-20 text-white"
            >Project Title</span>
            <Info class="xl:hidden"/>
        </div>  
        <div class="relative z-10 flex flex-col items- lg:flex-row">
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
            <div class="hidden xl:flex flex-col w-1/3 justify-center xl:self-center">
                <div class="flex flex-col items-center justify-center">
                    <Info class="flex" />
                </div>
            </div>
            <div class="flex flex-col xl:w-2/3 items-end">
                <div class="xl:hidden">
                    <p
                    class="flex justify-end text-right font-display leading-tight font-bold text-6xl"
                    >Project Title</p>
                    <Info class="xl:hidden"/>
                </div>
                <div class="flex flex-col h-full justify-center self-center">
                    <Grid :items="4">
                        <Card />
                    </Grid>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Card from '../components/Card'
import Info from '../components/TextProjectInfo'
export default {
    name: "ProjectOverview",
    components: {
        Card,
        Info,
    }
}
</script>
