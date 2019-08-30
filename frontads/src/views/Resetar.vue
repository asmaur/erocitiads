<template>

    <div>
        <no-nav />
        <vue-resetar />
    </div>

</template>



<script>
    import VueResetar from "@/components/VueResetar.vue";
    import NoNav from '@/components/NoNav.vue'

    export default {
        name: "Resetar",
        components: {
            VueResetar,
            NoNav,
        }
    }
</script>