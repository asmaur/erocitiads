<template>


    <div>

        <DashNav />
        <EditarLocais />

    </div>


</template>

<script>
    
import DashNav from "@/components/DashNav.vue";
import EditarLocais from "@/components/EditarLocais.vue";
    
export default {
    name: "Locais",
    components: {
        EditarLocais,
        DashNav,
    },
}
</script>

