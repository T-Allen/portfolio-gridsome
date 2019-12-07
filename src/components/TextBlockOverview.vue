<template>
    <div class="font-body leading-relaxed">
        <div class="py-6">
            <div class="text-2xl font-light" v-text="this.description"></div>
        </div>
    </div>
</template>
<script>
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
export default {
    name: "TextBlockOverview",
    props: {
        date: String,
        roles: String,
        tools: String,
        description: String
    },

}
</script>