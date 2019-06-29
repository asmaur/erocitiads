<template>

    <div>

        <DashNav />
        <VueConta />


    </div>


</template>


<script>
    
    import DashNav from "@/components/DashNav.vue"
    import VueConta from "@/components/VueConta.vue"

    export default {
        name: "Conta",
        components: {
            DashNav,
            VueConta,
        },
    }
</script>