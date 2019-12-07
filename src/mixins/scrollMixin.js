export default {
    methods: {
        $: function(id) {
            return document.getElementById(id);
        },
        goTo: function(id) {
            const element = document.getElementById(id);
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    }
}