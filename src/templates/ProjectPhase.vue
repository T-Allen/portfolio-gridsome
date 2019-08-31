<template>
    <div class="min-h-full">
        <div class="flex py-10 px-10 justify-center">
            <Grid :items="9">
                <TextImageGroup />
            </Grid>
        </div>
    </div>
</template>
<script>
import TextImageGroup from '../components/TextImageGroup'
export default {
    name: "ProjectPhase",
    components: {
        TextImageGroup
    }
}
</script>