<template>
    <div class="text-primary">
        <h3 class="font-body font-medium text-3xl xl:text-4xl mb-6" v-text="this.heading"></h3>
        <div class="text-lg lg:text-xl font-body" v-html="formatContent(this.description)"></div>
    </div>
</template>
<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
export default {
    name: "TextGroup",
    props: {
        heading: String,
        description: Object
    },
    data () {
        return {
             options: {
                renderMark: {
                    [MARKS.BOLD]: text => `<span class="font-bold">${text}</span>`
                },
                renderNode: {
                    [BLOCKS.PARAGRAPH]: (node, next) =>
                    `<p class="mb-6 leading-loose">${next(node.content)}</p>`,
                    [BLOCKS.OL_LIST]: (node, next) => `<ol class="list-decimal  p-6">${next(node.content)}</ol>`,
                    [BLOCKS.UL_LIST]: (node, next) => `<ul class="italic p-6">${next(node.content)}</ul>`
                }
            }
        }
    },
    methods: {
        formatContent: function(content) {
            return documentToHtmlString(content, this.options)
        }
    }
}
</script>