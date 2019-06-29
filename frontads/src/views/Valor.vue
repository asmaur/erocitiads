<template>


    <div>
        <DashNav />
        <EditarValor />


    </div>


</template>

<script>
    import DashNav from "@/components/DashNav.vue";
    import EditarValor from "@/components/EditarValor.vue";

    export default {
        name: "Valor",
        components: {
            DashNav,
            EditarValor,
        }
    }
</script>