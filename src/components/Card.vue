<template>
    <div class="card card-shadow flex flex-col w-card-sm h-card-sm md:w-card-md md:h-card-md xl:w-card xl:h-card rounded-xl font-body relative overflow-hidden">
        <div class="flex flex-1 rounded-t-xl relative" :style="{ background: 'url(' + this.imageUrl + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
        }">
            <div class="absolute flex p-3 left-0 bottom-0 w-full z-30">
                <slot name="title" />
            </div>
            <div class="h-full w-full rounded-t-xl card-gradient"></div>
        </div>
        <div class="card-text-container flex flex-col justify-between pt-4 pb-6 px-6 rounded-b-xl bg-white relative">
            <slot/>
        </div>
        <div class="absolute flex bottom-0 justify-end p-4 z-20 bg-white w-full">
            <slot name="icons" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'Card',
    props: {
        title: String,
        imageUrl: String,
    },
}
</script>
