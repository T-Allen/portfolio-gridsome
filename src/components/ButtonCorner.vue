<template>
    <div class="btn h-btn-sm w-btn-sm sm:h-btn-md sm:w-btn-md lg:h-btn lg:w-btn flex relative text-base lg:text-lg lg:text-xl uppercase tracking-widest">
        <div class="btn-label flex p-3 md:p-6 text-primary w-full">
            <g-link :to="this.link">
                <div class="flex items-center mb-2">
                    <slot></slot>
                </div>
                <div class="border-b w-full bg-white text-white rounded-full hidden"></div> 
            </g-link>
        </div>
        <div class="absolute bg-primary btn-mask flex h-full p-3 md:p-6 text-white w-full z-30">
            <g-link :to="this.link">
                <div class="flex items-center mb-2">
                    <slot name="mask-group"></slot>
                </div>
                <div class="border-b w-full bg-white rounded-full"></div>
            </g-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "ButtonCorner",
    props: {
        link: String
    }
}
</script>