<template>
    <div class="flex flex-col h-card xl:h-card-xl bg-no-repeat shadow-lg max-w-xs rounded-large m-4">
        <div class="flex flex-1 p-6">
            <div class="self-center w-1/3 text-3xl font-body font-bold text-white">Project Title</div>
        </div>
        <div class="flex-1 rounded-b-large bg-white">
            <p class="p-6 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, possimus?</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'card'
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
