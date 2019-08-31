<template>
    <div class="flex grid" v-bind:style="{ gridTemplateColumns: columns, gap: gap}">
        <div :key="item.id" v-for="(item) in itemList">
            <slot />
            <slot name="item" v-bind:item="item"/>
        </div>
    </div>
</template>
<script>
export default {
    name: "Grid",
    data() {
        return {
            columns: Array.from([...Array(Math.ceil(Math.sqrt(this.itemList.length))).keys()], x => 'auto').join(' ')
        }
    },
    props: {
        itemList: Array,
        items: Number,
        gap: String
    }
}
</script>