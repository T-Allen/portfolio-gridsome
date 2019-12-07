<template>
    <div class="lg:p-12">
        <div class="flex flex-col items-end p-6 lg:p-0">
            <div v-if="roles != '' && date != ''" class="flex flex-wrap  font-medium text-primary">
                <div class="p-3 sm:p-6 text-xl">
                    <p>Project Date</p>
                    <p class="font-bold">{{ this.date }}</p>
                </div>
                <div class="p-3 sm:p-6 text-xl">
                    <p>Roles</p>
                    <p class="font-bold">{{ this.roles }}</p>
                </div>
                <div class="p-3 sm:p-6 text-xl">
                    <p>Tools</p>
                    <p class="font-bold">{{ this.tools }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "HeaderTitle",
    props: {
        date: String,
        roles: String,
        tools: String,
        title: String,
    },

}
</script>