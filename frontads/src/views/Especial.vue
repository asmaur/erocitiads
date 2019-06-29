<template>

    <div>
        <DashNav />
        <EditarEspecial />
    </div>


</template>

<script>
    import DashNav from "@/components/DashNav.vue";
    import EditarEspecial from "@/components/EditarEspecial.vue";

    export default {
        name: "Especial",
        components: {
            EditarEspecial,
            DashNav,
        },
    }
</script>