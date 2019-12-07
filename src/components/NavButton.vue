<template>
    <div class="flex my-3 relative text-primary">
        <div :id="id + '-border-bg'" class="hidden label-border border-background absolute top-0 left-0 z-50 h-full">
            <div :id="id + '-nav-border'" class="absolute top-0 left-0 label-border hidden z-20 h-full">
                
            </div>
        </div>
        <button @click="handleClick(id)"><h3 :id="id + '-nav-label'" v-bind:class="'xl:ml-3 hover:font-bold font-body text-sm md:text-lg text-left'" v-text="label"></h3></button>
    </div>
</template>
<script>
import scrollMixin from "../mixins/scrollMixin";
export default {
    name: "NavButton",
    props: {
        label: String,
        id: String
    },
    methods: {
        handleClick: function(id) {
            this.goTo(id)
        }
    },
    mixins: [scrollMixin],
}
</script>