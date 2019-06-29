<template>

    <div>

        <DashNav/>
        <Perfil/>


    </div>

    
</template>

<script>
// @ is an alias to /src
import Perfil from "@/components/Perfil.vue";
import DashNav from "@/components/DashNav.vue";

export default {
    name: "Profile",

    components:{
        Perfil,
        DashNav,
    }
}
</script>

<style scoped>

</style>
