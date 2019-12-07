<template>
    <div class="flex flex-col items-center justify-around">
        <a href="mailto:tariku.allen@gmail.com" title="E-mail Link"><font-awesome-icon :icon="['fas', 'envelope']" size="1x"></font-awesome-icon></a>
        <a href="https://github.com/T-Allen" title="Github Link"><font-awesome-icon :icon="['fab', 'github']" size="1x"></font-awesome-icon></a>
        <a href="https://www.linkedin.com/in/tarikuallen/" title="LinkedIn Profile"><font-awesome-icon :icon="['fab', 'linkedin']" size="1x"></font-awesome-icon></a>
    </div>
</template>
<script>
export default {
    name: "SocialIcons",
}
</script>