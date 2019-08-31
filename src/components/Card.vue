<template>
    <div class="flex flex-col h-card xl:h-card-xl bg-no-repeat shadow-lg max-w-xs rounded-large m-4">
        <div class="flex flex-1 p-6">
            <div class="self-center w-1/3 text-3xl font-body font-bold text-white" v-text="title"></div>
        </div>
        <div class="flex-1 rounded-b-large bg-white">
            <p class="p-6 font-medium" v-text="summary"></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'card',

    props: {
        url: String,
        title: String,
        summary: String,
    }
}
</script>
<style scoped>
    .rounded-large {
        background: 
            linear-gradient(
            rgba(255, 0, 0, 0.45), 
            rgba(255, 0, 0, 0.45)
            ),
            url('../../static/testimg.jpg');
        background-clip: content-box;
        background-size: cover;
    }
</style>
