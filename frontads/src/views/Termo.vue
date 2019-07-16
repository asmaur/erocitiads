<template>

    <div>
        <no-nav />
        <vue-termo />
    </div>

</template>


<script>
    import NoNav from '@/components/NoNav.vue'
    import VueTermo from '@/components/VueTermo.vue'

    export default {
        name: "Termo",
        components: {
            NoNav,
            VueTermo,
        }
    }
</script>