<template>


    <div>
        <DashNav />
        <EditarDados />


    </div>


</template>

<script>
    import DashNav from "@/components/DashNav.vue";
    import EditarDados from "@/components/EditarDados.vue";

    export default {
        name: "Dados",
        components: {
            DashNav,
            EditarDados,
        },
    }
</script>