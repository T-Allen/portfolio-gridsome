<template>
    <div class="fixed left-0 top-0 w-screen z-40">
        <div id="progress" class="progress z-40"></div>
    </div>
</template>
<script>
export default {
    name: "ScrollProgressIndicator",
    methods: {
        handleScroll: function(e) {
            let scrollTop = e.target.scrollingElement.scrollTop

            document.getElementById('progress').style.width = Math.ceil((((window.outerWidth * ((scrollTop) / (document.getElementById('content').scrollHeight - window.innerHeight))))  / window.outerWidth) * 100) + '%'
        },
    },
    mounted () {
        document.getElementById('progress').style.width = '0%'
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>