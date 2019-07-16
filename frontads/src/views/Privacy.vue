<template>

    <div>
        <no-nav />
        <vue-privacy />
    </div>

</template>


<script>
    import NoNav from '@/components/NoNav.vue'
    import VuePrivacy from '@/components/VuePrivacy.vue'

    export default {
        name: "Privacy",
        components: {
            NoNav,
            VuePrivacy,
        }
    }
</script>