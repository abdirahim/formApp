<template>
    <div id="app">
                <router-view ></router-view>
    </div>
</template>

<script>

export default {
    name: "AppVue",

    mounted() {

        console.log('routeName = ' + this.$route.name )

    },
};
</script>

<style></style>
