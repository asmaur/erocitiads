<template>


    <div>
        <DashNav />
        <EditarService />


    </div>


</template>

<script>
    import DashNav from "@/components/DashNav.vue";
    import EditarService from "@/components/EditarService.vue";

    export default {
        name: "Service",
        components: {
            EditarService,
            DashNav,
        },
    }
</script>