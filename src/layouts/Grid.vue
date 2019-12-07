<template>
    <div class="w-full">
        <div
            class="flex justify-center w-full"
            :key="item.id" 
            v-for="(item) in itemList" >
            <slot name="item" v-bind:item="item"/>
        </div>
    </div>
</template>
<script>
export default {
    name: "Grid",
    props: {
        itemList: Array,
        height: String,
        rows: String,
        columns: String,
        gap: String
    },
    computed: {
        gridRows: function() { return this.rows == null ? (Math.ceil(Math.sqrt(this.itemList.length))) : this.rows},
        gridColumns: function() { return this.columns == null ? (Math.ceil(Math.sqrt(this.itemList.length))) : this.columns}
    },
    methods: {
        update(e) {
            console.log("received")
        }
    }
}
</script>