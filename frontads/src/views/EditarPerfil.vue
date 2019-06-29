<template>


    <div>
        <DashNav/>
        <EditarPer/>


    </div>


</template>

<script>
import DashNav from "@/components/DashNav.vue";
import EditarPer from "@/components/EditarPer.vue";
//editar perfil.

export default {
    name: "EditarPerfil",
    components:{
        DashNav,
        EditarPer,
    },
}
</script>

